#! tobe refactored!!!

terraform {
  required_version = "~> 1.2.2" #Terraform version
  required_providers {

    # AWS provider
    #https://registry.terraform.io/providers/hashicorp/aws/4.17.1
    aws = {
      source  = "hashicorp/aws" #AWS provider source
      version = "~> 4.16.0"     #AWS provider version
    }
  }
}

provider "aws" {
  region  = var.aws_region #AWS region
  profile = "default"      #AWS profile

}

# VPC Resource ##############################################################################################
resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr_block

  tags = {
    Name = "0821-g10-vpc"
  }
}


/*
By default, all traffic within a VPC is bound to the VPC itself. 
The only way to enable internet access is by creating an Internet Gateway resource. 
We can then create network routes for subnets that route internet bound traffic through the gateway.
*/
# Internet Gateway ##############################################################################################
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "0821-g10-internet-gateway"
  }
}


/*
T͟h͟e w͟e͟b t͟i͟e͟r will contain all of the resources needed for the web server. 
This includes the load balancer and EC2 instances that are running the web server application. 
This is a public subnet because it needs to provide connectivity to the load balancer.
*/
# Public Subnet ##############################################################################################
resource "aws_subnet" "public_subnet" {
  for_each = var.az_public_subnet

  vpc_id = aws_vpc.main.id

  availability_zone = each.key
  cidr_block        = each.value

  tags = {
    Name = "0821-g10-public-subnet-${each.key}"
  }
}
/*
 New to the code above is a value called for_each. 
 This value takes in the public subnet variables, of which there are two values. 
 Using for_each will create a resource for as many items are in the value. 
 In this case, there are two public subnets, so two resources will be created.
 */


/*
t͟h͟e a͟p͟p t͟i͟e͟r
This code is similar to the web tier code. 
Instead of iterating through the az_public_subnet variable, 
it will iterate through the private subnet values.
*/
# Private Subnet ##############################################################################################
resource "aws_subnet" "private_subnet" {
  for_each = var.az_private_subnet

  vpc_id = aws_vpc.main.id

  availability_zone = each.key
  cidr_block        = each.value

  tags = {
    Name = "0821-g10-private-subnet-${each.key}"
  }
}

/*
The last major section of this component is the database tier config. 
These two subnets are both private, and will provide connectivity for the RDS database instance.
*/
# Database Subnet ##############################################################################################
resource "aws_subnet" "database_subnet" {
  for_each = var.az_database_subnet

  vpc_id = aws_vpc.main.id

  availability_zone = each.key
  cidr_block        = each.value

  tags = {
    Name = "0821-g10-database-subnet-${each.key}"
  }
}

/*
VPC Route Tables define what network routes exist within the VPC subnets. 
It does this with a set of route rules. 
In the below code, we will create a Route Table resource that directs all internet bound 
traffic to the internet gateway (created in a previous step).
*/
# Route Table ##############################################################################################
resource "aws_route_table" "public_subnet_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "0821-g10-subnet-route-table"
  }
}

# Public subnet route table association
resource "aws_route_table_association" "public_subnet_route_table_association" {
  for_each = var.az_public_subnet

  subnet_id      = aws_subnet.public_subnet[each.key].id
  route_table_id = aws_route_table.public_subnet_route_table.id
}


/*
The web tier starts off with an AWS Application Load Balancer configuration. 
The load balancer will accept incoming requests from the internet, and distribute to the web server EC2 instances in the subnet. 
The load balancer can also be aware of EC2 instances that are added or removed to the web tier via auto scaling.
Another thing to be aware of is the security group. 
This security group has port 80 (HTTP) open to the internet address space (“0.0.0.0/0”).
This requires two Terraform resources:
    -The ALB resource
    -A Security Group resource
*/

# Web - Application Load Balancer ##############################################################################################
resource "aws_lb" "app_lb" {
  name               = "app-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_http.id]
  subnets            = [for value in aws_subnet.public_subnet : value.id]
}

# Web - ALB Security Group ##############################################################################################
resource "aws_security_group" "alb_http" {
  name        = "alb-security-group"
  description = "Allowing HTTP requests to the application load balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "alb-security-group"
  }
}

/*
The AWS load balancer works by configuring listeners and listener rules to look at incoming requests, and take action on them if there is a match. 
If a request matches a listener rule, the request will be forwarded to a configured target group. 
The target group will be the auto scaling group that will be created later.
In the below configuration, we will create a listener that listens for requests on port 80. 
There’s a default action on the listener that will forward the request to the target group.

The listener below has a default action. It could also be configured with listener rules to provide a more robust rule set.
*/

# Web - Listener ##############################################################################################
resource "aws_lb_listener" "web_listener" {
  load_balancer_arn = aws_lb.app_lb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.web_target_group.arn
  }
}

# Web - Target Group ##############################################################################################
resource "aws_lb_target_group" "web_target_group" {
  name     = "web-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    port     = 80
    protocol = "HTTP"
  }
}

/*
Auto scaling can serve a couple of purposes. 
It was designed to provide automatic elasticity for groups of servers. 
The auto scaling service can detect when server load increases, and add more servers to the group per a configured policy. 
It can also do the inverse, removing servers when they aren’t needed.
The other purpose auto scaling can serve is to simply maintain a set number of instances. 
We start off by configuring it to start 0 instances. But if we set the min_size = 1 then the auto scaling group will ensure there’s always at least one instance in the group. 
This can help ensure that even if there is an instance failure, auto scaling will auto-launch a new one.
*/

# Web - EC2 Instance Security Group ##############################################################################################
resource "aws_security_group" "web_instance_sg" {
  name        = "web-server-security-group"
  description = "Allowing requests to the web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_http.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-server-security-group"
  }
}

# Web - Launch Template ##############################################################################################
resource "aws_launch_template" "web_launch_template" {
  name_prefix   = "web-launch-template"
  image_id      = "ami-0e2e44c03b85f58b3"
  instance_type = "t2.micro"
}

# Web - Auto Scaling Group ##############################################################################################
resource "aws_autoscaling_group" "web_asg" {
  desired_capacity    = 0
  max_size            = 0
  min_size            = 0
  target_group_arns   = [aws_lb_target_group.web_target_group.arn]
  vpc_zone_identifier = [for value in aws_subnet.public_subnet : value.id]

  launch_template {
    id      = aws_launch_template.web_launch_template.id
    version = "$Latest"
  }
}

/*
A couple of notes about the following code:
configured the sg to allow incoming connections from the web instance sg.
load balancer to deploy in private VPC subnets
*/
# App - ALB Security Group ##############################################################################################
resource "aws_security_group" "alb_app_http" {
  name        = "alb-app-security-group"
  description = "Allowing HTTP requests to the app tier application load balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.web_instance_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "alb-app-security-group"
  }
}

# App - Application Load Balancer ##############################################################################################
resource "aws_lb" "app_app_lb" {
  name               = "app-app-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_app_http.id]
  subnets            = [for value in aws_subnet.private_subnet : value.id]
}

/*
The AWS load balancer works by configuring listeners and listener rules to look at incoming requests, and take action on them if there is a match. 
If a request matches a listener rule, the request will be forwarded to configured target group.
In the below configuration, we will create a listener that listens for requests on port 80. 
There’s a default action on the listener that will forward the request to the target group.
*/
# App - Listener ##############################################################################################
resource "aws_lb_listener" "app_listener" {
  load_balancer_arn = aws_lb.app_app_lb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app_target_group.arn
  }
}

# App - Target Group ##############################################################################################
resource "aws_lb_target_group" "app_target_group" {
  name     = "app-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    port     = 80
    protocol = "HTTP"
  }
}

/*
 auto scaling for the app tier. Auto scaling can serve a couple of purposes. 
 It was designed to provide automatic elasticity for groups of servers. 
 The auto scaling service can detect when server load increases, and add more servers to the group per a configured policy. 
 It can also do the inverse, removing servers when they aren’t needed.
The other purpose auto scaling can serve is to simply maintain a set number of instances. 
As you’ll see in the code below, we start off by configuring it to start 0 instances. 
But if we set the min_size = 1 then the auto scaling group will ensure there’s always at least one instance in the group. 
This can help ensure that even if there is an instance failure, auto scaling will auto-launch a new one.
*/
# App - EC2 Instance Security Group ##############################################################################################
resource "aws_security_group" "app_instance_sg" {
  name        = "app-server-security-group"
  description = "Allowing requests to the app servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_app_http.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "app-server-security-group"
  }
}

# App - Launch Template ##############################################################################################  
resource "aws_launch_template" "app_launch_template" {
  name_prefix            = "app-launch-template"
  image_id               = "ami-00af37d1144686454"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.app_instance_sg.id]
}

# App - Auto Scaling Group ##############################################################################################
resource "aws_autoscaling_group" "app_asg" {
  desired_capacity    = 0
  max_size            = 0
  min_size            = 0
  target_group_arns   = [aws_lb_target_group.app_target_group.arn]
  vpc_zone_identifier = [for value in aws_subnet.private_subnet : value.id]

  launch_template {
    id      = aws_launch_template.app_launch_template.id
    version = "$Latest"
  }
}

/*
The RDS instance needs its own security group. 
This security group will have one ingress rule defined to allow postgres connections in-bound. 
The source connections will be allowed from the app servers.
*/
# RDS - Security Group ##############################################################################################
resource "aws_security_group" "db_security_group" {
  name = "0821-g10-db-sg"

  description = "RDS mysql server"
  vpc_id      = aws_vpc.main.id

  # Only postgres in
  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.app_instance_sg.id]
  }

  # Allow all outbound traffic.
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

/*
To specify which subnets the RDS instance can be started in we need to create a subnet group resource. 
This resource will define the subnet_ids that are to be used. 
The subnet IDs will be populated from the database subnets that were created higher in the config file.
*/
# DB - Subnet Group
resource "aws_db_subnet_group" "db_subnet" {
  name       = "db-subnet"
  subnet_ids = [for value in aws_subnet.database_subnet : value.id]

  tags = {
    Name = "DB subnet group"
  }
}

/*
Lastly, we will define the RDS instance resource. There are a lot of settings below; 
let’s take a look at some of the more impactful ones.

Setting notes:
 -Engine: mysql
 -Version: 5.
 -Username & Password: Temp values used; you want to set your own
*/

# DB - RDS Instance ##############################################################################################
resource "aws_db_instance" "mysql-db" {
  allocated_storage       = 10 # gigabytes
  max_allocated_storage   = 100
  backup_retention_period = 7 # in days
  db_subnet_group_name    = aws_db_subnet_group.db_subnet.name
  engine                  = "mysql"
  engine_version          = "5.7"
  instance_class          = "db.t3.micro"
  multi_az                = false
  username                = "root"
  password                = "g10Booking"
  port                    = 3306
  publicly_accessible     = false
  storage_encrypted       = true
  storage_type            = "gp2"
  vpc_security_group_ids  = [aws_security_group.db_security_group.id]
  skip_final_snapshot     = true
  #replicate_source_db      = aws_db_instance.mysql-db.id
}