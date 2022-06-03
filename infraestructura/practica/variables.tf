#input variables
#AWS region
variable "aws_region" {
    description = "region in which to create the resources"
    type = string
    default = "us-west-2"
}

#AWS instance type
variable "instance_type" {
    description = "EC2 instance type"
    type = string
    default = "t2.micro"
}

#AWS EC2 instance key pair
variable "instance_keypair" {
    description = "EC2 instance key pair"
    type = string
    default = "0821-g10"
}
