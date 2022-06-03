# Terraform output block

#EC2
output "instance_pulic_ip" {
    description = "EC2 instance public IP"
    value = aws_instance.myec2vm.public_ip
}
output "instance_private_ip" {
    description = "EC2 instance private IP"
    value = aws_instance.myec2vm.private_ip  
}
output "instance_id" {
    description = "EC2 instance ID"
    value = aws_instance.myec2vm.id
}