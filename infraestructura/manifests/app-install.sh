#! /bin/bash
#back
yum update -y
yum install -y docker
systemctl start docker
systemctl enable docker
#docker pull varesinatalia/digitalbooking10:latest
#docker run -p 80:80 --name digitalapptier varesinatalia/digitalbooking10:latest