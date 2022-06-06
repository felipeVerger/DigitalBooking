# Set the base image to node:16-alpine
FROM node:16-alpine as build

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY ./reserva-hoteles /app/

# Prepare the container for building React
RUN npm install
RUN npm install react-scripts@5.0.1 -g
# We want the production version
RUN npm run build

# Prepare nginx
FROM nginx:1.22.0-alpine
COPY --from=build ./app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./front/reserva-hoteles/nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM maven:3.6.3-jdk-11-slim AS BUILD
COPY ./back/ProyectInt/src /home/app/src
COPY ./back/ProyectInt/pom.xml /home/ProyectInt/pom.xml
RUN mvn -f /home/ProyectInt/pom.xml clean package -DskipTests

FROM  openjdk:14-jdk-alpine
WORKDIR /usr/src
COPY --from=BUILD /back/home/ProyectInt/target/ProyectInt-0.0.1-SNAPSHOT.jar /usr/src/app.jar
#EXPOSE 8080 
ENTRYPOINT [ "java"  "-jar" "/usr/src/app.jar"]

#docker run --name digitalbooking -v \kuasar\volume-docker\mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=g10Booking -e MYSQL_DATABASE=proyecto_integrador -d mysql

FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD g10Booking
ENV MYSQL_DATABASE proyecto_integrador
VOLUME [ "\kuasar\volume-docker\mysql:/var/lib/mysql" ]

EXPOSE 3306 8080 80


