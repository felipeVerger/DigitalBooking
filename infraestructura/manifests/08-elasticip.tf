resource "aws_eip" "bastion_eip" {
  depends_on = [module.ec2_public, module.vpc]
  instance   = module.ec2_public[0].id
  vpc        = true
  tags       = local.common_tags

}