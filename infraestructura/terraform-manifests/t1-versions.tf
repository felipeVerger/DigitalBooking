#⁡⁢⁢⁢########################  3  ##########################⁡
#⁡⁢⁢⁢##############      TERRAFORM BLOCK      ##############⁡
#⁡⁢⁢⁢#######################################################⁡

terraform {
  required_version = "~> 1.2.2" #Terraform version
  required_providers {

    # AWS provider
    #https://registry.terraform.io/providers/hashicorp/aws/4.17.1
    aws = {
      source  = "hashicorp/aws" #AWS provider source
      version = "~> 4.16.0"     #AWS provider version
    }

    #null provider
    #https://registry.terraform.io/providers/hashicorp/null/latest/docs
    null = {
      source  = "hashicorp/null"
      version = "~> 3.1.1"
    }
  }

}

#⁡⁢⁢⁢########################  3  ##########################⁡
#⁡⁢⁢⁢###############      PROVIDER BLOCK      ##############⁡⁡
#⁡⁢⁢⁢⁡⁢⁢⁢⁡⁢⁢⁢#######################################################⁡

provider "aws" {
  region  = var.aws_region #AWS region
  profile = "default"      #AWS profile

}

/*
n.b. 
- this code may be difficult to understand because i include many comments to document my slow learning process haha sorry '
- AWS credentials are stored in $HOME/.aws/credentials
- profile "default" is the default profile.
- "~>" constraint that allows only the rightmost version component to increment. this is to limit versions to minor releases but avoiding incompatibilities in major releases.
- "~>" is called the pessimistic constraint operator.
*/
