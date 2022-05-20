# Getting Started Backend 
In local environment create and run mysql database with the next docker instruction:

### `docker run --name digital-booking-database -v \kuasar\volume-docker\mysql:/var/lib/mysql -p 127.0.0.1:3306:3306 -e MYSQL_ROOT_PASSWORD=qwerty -e MYSQL_DATABASE=proyecto_integrador -d mysql`