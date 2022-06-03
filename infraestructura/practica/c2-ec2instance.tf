#resource ec2 instance 
resource "aws_instance" "myec2vm" {
    #resource properties
    ami = data.aws_ami.amzlinux2.id #AMI ID
    instance_type = var.instance_type #Instance type
    user_data = file("${path.module}/app1-install.sh") #User data
    key_name = var.instance_keypair #Key pair
    vpc_security_group_ids = [ 
        aws_security_group.vpc_ssh.id,
        aws_security_group.vpc_web.id
     ]
    tags = {
        Name = "g10-app1"
    }

}