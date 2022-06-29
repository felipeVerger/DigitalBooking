data "aws_ami" "ubuntu" {
  most_recent = true

  // http://cloud-images.ubuntu.com/locator/ec2/
  // https://www.kisphp.com/terraform/terraform-find-ubuntu-and-amazon-linux-2-amis
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-*-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["self", "amazon", "099720109477"]
}

resource "aws_iam_role" "bastion" {
  name = "${var.env}-${var.project}-iam-role-bastion"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

  tags = {
    tag-key = "${var.env}-${var.project}-bastion"
  }
}

resource "aws_iam_role_policy" "bastion" {
  name = "${var.env}-${var.project}-iam-role-pl-bastion-secretmanager"
  role = aws_iam_role.bastion.id

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": "secretsmanager:GetSecretValue",
        "Resource": "arn:aws:secretsmanager:us-east-1:122657302772:secret:${var.project}.com/aws/${var.env}-${var.project}-key-private-*"
    }]
}
EOF
}

resource "aws_iam_instance_profile" "bastion" {
  name = "${var.env}-${var.project}-iam-profile-bastion"
  role = aws_iam_role.bastion.name
}

resource "aws_launch_template" "project_bastion_lt" {
  name                   = "${var.env}-${var.project}-bastion"
  image_id               = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type_bastion
  vpc_security_group_ids = [var.sg_bastion]
  key_name               = var.public_key_pair_bastion
  update_default_version = true
  user_data = base64encode(templatefile("scripts/ubuntu_keyfile.sh", {
    KEY_PRIVATE = "${var.project}.com/aws/${var.env}-${var.project}-key-private"
  }))

  iam_instance_profile {
    name = aws_iam_instance_profile.bastion.name
  }

  monitoring {
    enabled = true
  }

  tag_specifications {
    resource_type = "instance"

    tags = {
      Name = "${var.env}-${var.project}-bastion"
    }
  }

  tags = {
    Name = "${var.env}-${var.project}-bastion-lt"
  }
}

resource "aws_autoscaling_group" "bastion" {
  name                = "${var.env}-${var.project}-asg-bastion"
  vpc_zone_identifier = tolist(var.subnet_public)
  min_size            = 1
  max_size            = 1
  desired_capacity    = 1

  launch_template {
    id      = aws_launch_template.project_bastion_lt.id
    version = "$Latest"
  }
}

resource "aws_launch_template" "frontend" {
  name                   = "${var.env}-${var.project}-frontend"
  image_id               = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type_frontend
  vpc_security_group_ids = [var.sg_private]
  key_name               = var.public_key_pair_project
  update_default_version = true
  user_data = base64encode(templatefile("scripts/ubuntu_apache.sh", {
    ENV = "${var.env}-frontend"
  }))

  monitoring {
    enabled = true
  }

  block_device_mappings {
    # device_name = "/dev/xvda" // Root: Amazon Linux 2 AMI (HVM)
    device_name = "/dev/sda1" // Root: Ubuntu Server 20.04 LTS (HVM)
    ebs {
      volume_size = 8
    }
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "${var.env}-${var.project}-frontend"
    }
  }

  tags = {
    Name = "${var.env}-${var.project}-lt-frontend"
  }
}

resource "aws_launch_template" "backend" {
  name                   = "${var.env}-${var.project}-backend"
  image_id               = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type_backend
  vpc_security_group_ids = [var.sg_private]
  key_name               = var.public_key_pair_project
  update_default_version = true
  user_data = base64encode(templatefile("scripts/ubuntu_apache.sh", {
    ENV = "${var.env}-backend"
  }))

  monitoring {
    enabled = true
  }

  block_device_mappings {
    # device_name = "/dev/xvda" // Root: Amazon Linux 2 AMI (HVM)
    device_name = "/dev/sda1" // Root: Ubuntu Server 20.04 LTS (HVM)
    ebs {
      volume_size = 20
    }
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "${var.env}-${var.project}-backend"
    }
  }

  tags = {
    Name = "${var.env}-${var.project}-lt-backend"
  }
}
/*
resource "aws_db_instance" "database" {
  allocated_storage      = 20
  engine                 = "mysql"
  engine_version         = "8.0"
  instance_class         = "db.t3.small"
  name                   = "dbking"
  username               = "root"
  db_subnet_group_name   = var.subnet_database.name
  vpc_security_group_ids = [var.sg_private]
  password               = "g10Booking"
  parameter_group_name   = "default.mysql8.0"
  skip_final_snapshot    = true
}

*/




###########
## Frontend
###########
resource "aws_autoscaling_group" "frontend" {
  name                = "${var.env}-${var.project}-asg-frontend"
  vpc_zone_identifier = tolist(var.subnet_frontend)
  min_size            = 2
  max_size            = 2
  desired_capacity    = 2
  target_group_arns   = [var.lb_tg_arn_frontend]
  lifecycle {
    create_before_destroy = true
  }

  launch_template {
    id      = aws_launch_template.frontend.id
    version = "$Latest"
  }
}


###########
## Backend
###########
resource "aws_autoscaling_group" "backend" {
  name                      = "${var.env}-${var.project}-asg-backend"
  vpc_zone_identifier       = tolist(var.subnet_backend)
  min_size                  = 1
  max_size                  = 2
  desired_capacity          = 2
  health_check_grace_period = 600
  health_check_type         = "EC2"


  target_group_arns = [var.lb_tg_arn_backend]
  lifecycle {
    create_before_destroy = true
  }

  launch_template {
    id      = aws_launch_template.backend.id
    version = "$Latest"
  }
}


###########
## Database
###########
/*
resource "aws_autoscaling_group" "database" {
  name                 = "${var.env}-${var.project}-asg-database"
  vpc_zone_identifier  = tolist(var.subnet_database)
  min_size             = 2
  max_size             = 2
  desired_capacity     = 2
  target_group_arns   = [var.lb_tg_arn_database]
  lifecycle {
    create_before_destroy = true
  }

  launch_template {
    id      = aws_launch_template.database.id
    version = "$Latest"
  }
}

*/