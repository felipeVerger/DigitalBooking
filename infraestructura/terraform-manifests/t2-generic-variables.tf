#⁡⁢⁢⁢########################  3  ##########################
#⁡⁢⁢⁢#################      INPUT FILE      ################⁡
#⁡⁢⁢⁢⁡⁢⁢⁢#######################################################⁡

# input variables
variable "aws_region" {
  description = "The AWS in which the resources will be created"
  type        = string
  default     = "us-west-2"
}

variable "team_number" {
  description = " number assigned to the development team "
  type        = string
  default     = "g10"
}

variable "camada" {
  description = " number assigned to the whole crowd of attendees "
  type        = string
  default     = "c0821"
}