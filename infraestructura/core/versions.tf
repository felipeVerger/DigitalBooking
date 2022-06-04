#⁡⁢⁢⁢########################  3  ##########################⁡
#⁡⁢⁢⁢##############      TERRAFORM BLOCK      ##############⁡
#⁡⁢⁢⁢#######################################################⁡

terraform {
  required_version = "~> 1.2.2" #Terraform version
  required_providers {
    aws = {
      source  = "hashicorp/aws" #AWS provider source
      version = "~> 4.16.0"     #AWS provider version
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
- AWS credentials are stored in $HOME/.aws/credentials
- profile "default" is the default profile.
- "~>" constraint that allows only the rightmost version component to increment. this is to limit versions to minor releases but avoiding incompatibilities in major releases.
- "~>" is called the pessimistic constraint operator.
*/
