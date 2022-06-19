# AWS EC2 Security Group Terraform Outputs


## public_bastion_sg_group_name
output "public_sg_group_name" {
  description = "The name of the security group"
  value       = aws_security_group.frontend.name
}

# Private EC2 Instances Security Group Outputs

## private_sg_group_name
output "private_sg_group_name" {
  description = "The name of the security group"
  value       = aws_security_group.backend.name
}
# lb Security Group Outputs

