module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "dinamita-assetbank"

  tags = var.common_tags
}
