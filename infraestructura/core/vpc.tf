#⁡⁢⁢⁢########################  4  ##########################
#⁡⁢⁢⁢#################      VPC MODULE      ################⁡
#⁡⁢⁢⁢#######################################################⁡

module "vpc_0821_g10" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.0" #! as it is a public module, do not use version constraints; that could break the module

  # VPC basic details
  name            = "vpc_0821_g10"
  cidr            = "10.0.0.0/16"
  azs             = ["us-west-2b", "us-west-2c"]
  private_subnets = ["20.0.1.0/24", "20.0.2.0/24", ]
  public_subnets  = ["20.0.101.0/24", "20.0.102.0/24"]

  # Database subnets
  create_database_subnet_group       = true
  create_database_subnet_route_table = true
  database_subnets                   = ["10.0.151.0/24", "10.0.152.0/24"]

  #! in case you want to want your database p͟r͟i͟v͟a͟t͟e s͟u͟b͟n͟e͟t͟s to be open to the internet, use the following:
  #create_database_nat_gateway_route = true
  #create_database_internet_gateway_route = true

  # NAT Gateway per az. outbound communication 
  enable_nat_gateway = true

  # VPC DNS parameters
  enable_dns_hostnames = true
  enable_dns_support   = true

  public_subnet_tags = {
    Name = "public-subnets"
  }
  private_subnet_tags = {
    Name = "private-subnets"
  }
  database_subnet_tags = {
    Name = "database-subnets"
  }
  tags = {
    Owner       = "0821-grupo10"
    Environment = "dev"
  }
  vpc_tags = {
    Name = "vpc_0821_g10"
  }
}