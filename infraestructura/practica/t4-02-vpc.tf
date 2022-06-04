#⁡⁢⁢⁢########################  4  ##########################
#⁡⁢⁢⁢#################      VPC MODULE      ################⁡
#⁡⁢⁢⁢#######################################################⁡

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.0" #! as it is a public module, do not use version constraints; that could break the module

  # VPC basic details
  name            = "0821-vpc"
  cidr            = var.vpc_cidr_block
  azs             = var.vpc_availability_zones
  private_subnets = var.vpc_private_subnets
  public_subnets  = var.vpc_public_subnets

  # Database subnets
  create_database_subnet_group       = var.vpc_create_database_subnet_group
  create_database_subnet_route_table = var.vpc_create_database_subnet_route_table
  database_subnets                   = var.vpc_database_subnets

  #! in case you want to want your database p͟r͟i͟v͟a͟t͟e s͟u͟b͟n͟e͟t͟s to be open to the internet, use the following:
  #create_database_nat_gateway_route = true
  #create_database_internet_gateway_route = true

  # NAT Gateway per az. outbound communication 
  enable_nat_gateway = var.vpc_enable_nat_gateway
  single_nat_gateway = var.single_nat_gateway #? debug!! an argument named vpc_single_nat_gateway is not expected here.

  # VPC DNS parameters
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "0821-vpc"
  }

  #Additional tags to subnets

  public_subnet_tags = {
    Type = "public subnets"
  }
  private_subnet_tags = {
    Type = "private subnets"
  }
  database_subnet_tags = {
    Type = " private database subnets"
  }
}

# n.b
# key for the tags need to start with uppercase letter