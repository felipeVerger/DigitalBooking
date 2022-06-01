#docker run --name digital-booking-database -v \kuasar\volume-docker\mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=g10Booking -e MYSQL_DATABASE=proyecto_integrador -d mysql

FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD g10Booking
ENV MYSQL_DATABASE proyecto_integrador
VOLUME [ "\kuasar\volume-docker\mysql:/var/lib/mysql" ]

EXPOSE 3306


