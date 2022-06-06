FROM node as front
WORKDIR /front
COPY /front/reserva-hoteles .
RUN npm ci
RUN npm run-script build

FROM maven:3.6.3-jdk-11 as back
WORKDIR /back
COPY /back/ProyectInt .
RUN mkdir -p src/main/resources/static
COPY --from=front /front/build src/main/resources/static
#RUN mvn clean verify


FROM openjdk:14-jdk-alpine
COPY --from=back /back/target/app-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
RUN adduser -D user
USER user
CMD [ "sh", "-c", "java -Dserver.port=$PORT -Djava.security.egd=file:/dev/./urandom -jar app.jar" ]

#FROM alpine
#RUN apk add curl tar && \
#  curl -s https://download.docker.com/linux/static/stable/x86_64/docker-20.10.9.tgz | tar -xzf-
#FROM amazon/aws-cli:2.4.10
#ENV DOCKER_HOST="tcp://docker:2376" \
#    DOCKER_TLS_VERIFY=1 \
#    DOCKER_TLS_CERTDIR="/certs" \
#    DOCKER_CERT_PATH="/certs/client"
#ENTRYPOINT ["/usr/bin/bash", "-l", "-c"]
#COPY --from=0 /docker/docker /usr/local/bin
#RUN aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 145504712931.dkr.ecr.us-west-2.amazonaws.com
#RUN docker run --name digitalbooking -v \kuasar\volume-docker\mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=g10Booking -e MYSQL_DATABASE=proyecto_integrador -d mysql

#docker run -p 8080:8080 digitalbooking10 .