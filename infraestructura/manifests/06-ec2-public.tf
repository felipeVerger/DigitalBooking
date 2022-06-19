
module "ec2_public" {


  source = "terraform-aws-modules/ec2-instance/aws"
  name   = "${var.environment}-BastionHost"
  count  = 2

  ami           = data.aws_ami.amzlinux2.id
  instance_type = "t2.small"
  key_name      = var.key_name
  #monitoring             = true
  subnet_id              = module.vpc.private_subnets[1]
  vpc_security_group_ids = [aws_security_group.frontend.id, aws_security_group.ssh.id]
  user_data              = data.template_file.web_tier.rendered


  tags = local.common_tags
}