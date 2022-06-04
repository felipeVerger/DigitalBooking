#AZ datasource
#data "aws_availability_zone" "my_azones" {
#  filter {
#    name   = "opt-in-status"
#    values = ["opt-in-not-required"]
#  }
#}


#resource ec2 instance 
resource "aws_instance" "myec2vm" {
  #resource properties
  ami           = data.aws_ami.amzlinux2.id #AMI ID
  instance_type = var.instance_type
  #instance_type = var.instance_type_list[0]
  #instance_type = var.instance_type_map["dev"]
  user_data = file("${path.module}/app1-install.sh") #User data
  key_name  = var.instance_keypair                   #Key pair
  vpc_security_group_ids = [
    aws_security_group.vpc_ssh.id,
    aws_security_group.vpc_web.id
  ]
  #count = 2
  #for_each = toset(data.aws_availability_zone.my_azones.name)
  #availability_zone = each.key 
  #vailability_zone = data.aws_availability_zone.my_azones[1].name
  availability_zone = var.availability_zone
  tags = {
    Name = "prueba-c0821-g10-server"
    #Name = "prueba-c0821-g10-${each.value}"
  }

}