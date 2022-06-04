#⁡⁣⁣⁢###########################################################################⁡⁡
#⁡⁣⁣⁢⁡⁢⁣⁢⁡⁣⁣⁢########## ​‌‌‍security group for ssh traffic​ ##################⁡⁡⁡⁡
#⁡⁣⁣⁢⁡⁣⁣⁢###########################################################################⁡⁡

resource "aws_security_group" "vpc_ssh" {
  name        = "vpc_ssh"
  description = "Allow ssh inbound traffic"

  ingress {
    description = "open port 22 for all ssh instances"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "vpc_ssh"
  }
}

#⁡⁣⁣⁢###########################################################################⁡
#⁡⁣⁣⁢############# ​‌‍‌​‌‌‍​‌‌‍security group for ⁡⁢⁣⁢web⁡ ⁡⁣⁣⁢traffic ​##############⁡
#⁡⁣⁣⁢###########################################################################⁡

resource "aws_security_group" "vpc_web" {
  name        = "vpc_web"
  description = "Allow all traffic"

  ingress {
    description = "open port 443 for all web instances"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "open port 80 for all web instances"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "vpc_web"
  }
}