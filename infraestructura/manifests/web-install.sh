#! /bin/bash
#front
yum update -y
yum install -y docker
systemctl start docker
systemctl enable docker
#docker pull varesinatalia/realia:latest
#docker run -p 80:80 --name digitalwebtier varesinatalia/realia:latest
