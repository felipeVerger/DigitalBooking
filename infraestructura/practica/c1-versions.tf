
#template
/* 
    
top-level-blo  resource-type   resource-local-name
<BLOCK TYPE> "<BLOCK LABEL>" "<BLOCK LABEL>" {
    #block body
    <IDENTIFIER> = <EXPRESSION> #block property/argument
}
*/

#Terraform block
terraform {
    required_version = "~> 1.2.2" #Terraform version
    required_providers {
        aws = {
            source = "hashicorp/aws" #AWS provider source
            version = "~> 4.16.0" #AWS provider version
        }
    }

}

#provider block
provider "aws" {
    region = var.aws_region #AWS region
    profile = "default" #AWS profile
    
}

