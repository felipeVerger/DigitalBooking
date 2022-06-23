
# Public EC2 Instances - Bastion Host

## ec2_public_ip
/*

output "ec2_bastion_public_ip_1" {
  description = "List of public IP addresses assigned to the instances"
  value = {
    description = "List of private IP addresses assigned to the instances"
    value       = module.ec2_private.private_ip
  }
}
# Private EC2 Instances

## ec2_private_ip

output "ec2_private_ip_0" {
  description = "List of private IP addresses assigned to the instances"
  value = {
    name    = "xyz"
    all_ips = output "ec2_private_ip" {
  description = "List of private IP addresses assigned to the instances"
  value       = module.ec2_private.private_ip 
}
  }
}

*/