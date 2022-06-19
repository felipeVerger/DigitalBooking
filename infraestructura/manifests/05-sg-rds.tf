resource "aws_security_group" "allow_rds" {
  name        = "allow_rds"
  description = "Allow 3306 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  #only for dev ~~~~~~~~~
  ingress {
    description = "3306 from world"
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}