# Input Variables
# AWS Region
variable "aws_region" {
  description = "Region in which AWS Resources to be created"
  type        = string
  default     = "us-west-2"
}

variable "name" {
  description = "Name of the environment"
  type        = string
  default     = "dinamita-prod"

}

variable "common_tags" {
  description = "Tags to be applied to all resources"
  type        = map(string)
  default = {
    Name        = "dinamita"
    Terraform   = "true"
    Environment = "prod"
  }
}

variable "key_name" {
  description = "Name of an existing EC2 KeyPair to enable SSH access to the instance"
  type        = string
  default     = "0821-g10"
}


variable "availability_zones" {
  description = "Availability Zones in which VPC will be created"
  type        = list(string)
  default     = ["us-west-2a", "us-west-2b"]
}
variable "public_subnets" {
  description = "Public Subnets in which VPC will be created"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  description = "Private Subnets in which VPC will be created"
  type        = list(string)
  default     = ["10.0.11.0/24", "10.0.12.0/24"]
}




variable "environment" {
  description = "Environment Variable used as a prefix"
  type        = string
  default     = "dev"
}
# Business Division
variable "business_divsion" {
  description = "Business Division in the large organization this Infrastructure belongs"
  type        = string
  default     = "sap"
}
