variable "env" {
  default = "dev"
}

variable "project" {
  default = "dinamita"
}

variable "AWS_REGION" {
  default = "us-west-2"
}




variable "public_key_pair_bastion" {
  sensitive = true
  default   = "0821-g10"
}

variable "public_key_pair_project" {
  sensitive = true
  default   = "0821-g10"
}
