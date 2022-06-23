resource "aws_security_group" "backend" {
  name        = "allow_backend"
  description = "Allow 8080 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "8080 from world"
    from_port   = 8080
    to_port     = 8080
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
