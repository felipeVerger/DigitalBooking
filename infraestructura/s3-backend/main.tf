provider "aws" {
  profile = "default"
  region  = "us-west-2"
}


resource "aws_s3_bucket" "tf-backend" {
  bucket        = "0821g10-s3-tfbackend"
  force_destroy = true
}
resource "aws_s3_bucket_acl" "tf-backend_bucket_acl" {
  bucket = aws_s3_bucket.tf-backend.id
  acl    = "private"
}
output "tfbackend_bucket" {
  value = aws_s3_bucket.tf-backend.bucket
}