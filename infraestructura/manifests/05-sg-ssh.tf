

resource "aws_security_group" "ssh" {
  name        = "allow_ssh"
  description = "Allow 22 inbound traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "22 from world"
    from_port   = 22
    to_port     = 22
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