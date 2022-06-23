module "ec2_private" {
  source = "terraform-aws-modules/ec2-instance/aws"
  count  = 2

  # insert the 10 required variables here
  name                   = "${var.environment}-privateHost"
  ami                    = data.aws_ami.amzlinux2.id
  instance_type          = "t2.small"
  key_name               = var.key_name
  subnet_id              = module.vpc.private_subnets[0]
  vpc_security_group_ids = [aws_security_group.backend.id, aws_security_group.ssh.id]

  user_data = file("app-install.sh")

  tags = local.common_tags
}