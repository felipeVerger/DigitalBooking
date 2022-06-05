# Terraform output block

####################### EC2 public bastion host

output "ec2_bastion_public_instance_ids" {
  description = "List of IDs of instances"
  value       = module.ec2_public.id
}

# ec2_bastion_public_ip
output "ec2_bastion_public_ip" {
  description = "List of public IP addresses assigned to the instances"
  value       = module.ec2_public.public_ip
}

######################### Private EC2 Instances

output "ec2_private_instance_ids" {
  description = "List of IDs of instances"
  #value       = [module.ec2_private.id]
  value = [for ec2private in module.ec2_private : ec2private.id]
}
## ec2_private_ip
output "ec2_private_ip" {
  description = "List of private IP addresses assigned to the instances"
  #value       = [module.ec2_private.private_ip]
  value = [for ec2private in module.ec2_private : ec2private.private_ip]
}

/*
# Important Note about OUTPUTS when for_each is used
1. The [*]  operator is meant to be used with lists only. 
2. Because this resource uses for_each rather than count, 
its value in other expressions is a toset or a map, not a list.
3. With that said, we can use Function "toset" and loop with "for" 
to get the output for a list
4. For maps, we can directly use for loop to get the output and if we 
want to handle type conversion we can use "tomap" function too 
See the following examples:
*/


#output with for loop over a list
// output "for_output_list" {
//  description = "list with for loop"
//  value       = [for instance in aws_instance.myec2vm : instance.public_dns]
//}

#output with for loop over a map
//output "for_output_map" {
//  description = "map with for loop"
//  value       = { for instance in aws_instance.myec2vm : instance.id => instance.public_dns } #key(any argument in the instance) => value 
//}

# output with for loop over a map- advanced
//output "for_output_map_advanced" {
//  description = "map with for loop - advanced"
//  value       = { for i, instance in aws_instance.myec2vm : i => instance.public_dns }
//}

# deprecated output legacy splat operator (legacy - returned a list) 
//output "legacy_splat_list" {
//  description = " list with legacy splat operator"
//  value       = aws_instance.myec2vm.*.public_dns
//}

# valid splat operator (returns a list)
//output "latest_splat_list" {
//  description = " list with valid splat operator"
//  value       = aws_instance.myec2vm[*].public_dns
//}