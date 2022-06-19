module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.78.0"
  #version = "~> 2.78"

  # VPC Basic Details
  name            = "${local.name}-${var.vpc_name}"
  cidr            = var.vpc_cidr_block
  azs             = var.vpc_availability_zones
  public_subnets  = var.vpc_public_subnets
  private_subnets = var.vpc_private_subnets

  # Database Subnets
  database_subnets                   = var.vpc_database_subnets
  create_database_subnet_group       = var.vpc_create_database_subnet_group
  create_database_subnet_route_table = var.vpc_create_database_subnet_route_table
  # create_database_internet_gateway_route = true
  # create_database_nat_gateway_route = true

  # NAT Gateways - Outbound Communication
  enable_nat_gateway = var.vpc_enable_nat_gateway
  single_nat_gateway = var.vpc_single_nat_gateway

  # VPC DNS Parameters
  enable_dns_hostnames = true
  enable_dns_support   = true


  tags     = local.common_tags
  vpc_tags = local.common_tags

  # Additional Tags to Subnets
  public_subnet_tags = {
    Type = "Public Subnets"
  }
  private_subnet_tags = {
    Type = "Private Subnets"
  }
  database_subnet_tags = {
    Type = "Private Database Subnets"
  }
}

/* .         create_igw = true

By default, all traffic within a VPC is bound to the VPC itself. 
The only way to enable internet access is by creating an Internet Gateway resource. 
We can then create network routes for subnets that route internet bound traffic through the gateway.
*/


/*            NAT gw eips ## ERROR EN EL MODULO
Note that in the example we allocate 3 IPs because we will be provisioning 3 NAT Gateways (due to single_nat_gateway = false and having 3 subnets). 
If, on the other hand, single_nat_gateway = true, then aws_eip.nat would only need to allocate 1 IP. 
Passing the IPs into the module is done by setting two variables reuse_nat_ips = true and external_nat_ip_ids = "${aws_eip.nat.*.id}".
One NAT Gateway per subnet (default behavior)
enable_nat_gateway = true
single_nat_gateway = false
one_nat_gateway_per_az = false
Single NAT Gateway
enable_nat_gateway = true
single_nat_gateway = true
one_nat_gateway_per_az = false
One NAT Gateway per availability zone
enable_nat_gateway = true
single_nat_gateway = false
one_nat_gateway_per_az = true
*/




/* .        NAT gw
One NAT Gateway per subnet (default behavior)
enable_nat_gateway = true
single_nat_gateway = false
one_nat_gateway_per_az = false
Single NAT Gateway
enable_nat_gateway = true
single_nat_gateway = true
one_nat_gateway_per_az = false
One NAT Gateway per availability zone
enable_nat_gateway = true
single_nat_gateway = false
one_nat_gateway_per_az = true

*/

/* .     Public access to RDS instances
  create_database_subnet_group           = true
  create_database_subnet_route_table     = true
  create_database_internet_gateway_route = true

  enable_dns_hostnames = true
  enable_dns_support   = true

*/


/*       Network Access Control Lists (ACL or NACL)

Once VPC is created, AWS creates the default network ACL, which can be controlled using this module (manage_default_network_acl = true).
Also, each type of subnet may have its own network ACL with custom rules per subnet. 
Eg, set public_dedicated_network_acl = true to use dedicated network ACL for the public subnets; set values of public_inbound_acl_rules and 
public_outbound_acl_rules to specify all the NACL rules you need to have on public subnets (see variables.tf for default values and structures).
*/