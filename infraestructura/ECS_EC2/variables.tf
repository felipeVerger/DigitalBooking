variable "key_name" {
  type        = string
  description = "The name for ssh key, used for aws_launch_configuration"
  default     = "0821-g10"
}

variable "cluster_name" {
  type        = string
  description = "The name of AWS ECS cluster"
  default     = "g10-cluster"
}