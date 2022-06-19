# Terraform Block
terraform {
  required_version = "~> 1.2"



  backend "s3" {
    bucket  = "dinamita-tfbank"
    key     = "tfstate/terraform.tfstate"
    encrypt = true
    region  = "us-west-2"
  }


  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.18"
    }
    null = {
      source  = "hashicorp/null"
      version = "~> 3.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }

}

# Provider Block
provider "aws" {
  region  = var.aws_region
  profile = "default"
}
/*
Note-1:  AWS Credentials Profile (profile = "default") configured on your local desktop terminal  
$HOME/.aws/credentials
*/
# Create Random Pet Resource
resource "random_pet" "this" {
  length = 2
}