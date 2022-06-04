#!bin/bash
#Instance Identity Metadata Reference - https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/instance-identity-documents.html
sudo yum update -y
sudo yum install -y httpd 
sudo systemctl enable httpd
sudo service httpd restart
sudo echo "<html><body><h1>Hello World</h1></body></html>" > /var/www/html/index.html
sudo mkdir /var/www/html/app
sudo echo '<!DOCTYPE html> <html> <body> <h1>Hola wachos</h1> <p>This is my first app</p> </body> </html>' > /var/www/html/app/index.html
sudo curl http://169.254.169.254/latest/dynamic/instance-identity/document -o /var/www/html/app/instance-identity.html