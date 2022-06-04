#input variables
#AWS region
variable "aws_region" {
  description = "region in which to create the resources"
  type        = string
  default     = "us-west-2"
}

#AWS instance type
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

#AWS EC2 instance key pair
variable "instance_keypair" {
  description = "EC2 instance key pair"
  type        = string
  default     = "0821-g10"
}

#AWS EC2 instance type - list
variable "instance_type_list" {
  description = "instance type list"
  type        = list(string)
  default     = ["t3.micro", "t3.small"]
}

#AWS EC2 instance type - map
variable "instance_type_map" {
  description = "instance type map"
  type        = map(string)
  default = {
    "dev"  = "t3.micro",
    "qa"   = "t3.small",
    "prod" = "t3.medium"
  }
}

variable "availability_zone" {
  description = "availability zone"
  type        = string
  default     = "us-west-2a"

}