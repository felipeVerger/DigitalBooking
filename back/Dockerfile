FROM maven:3.6.3-jdk-11-slim AS BUILD
COPY ./ProyectInt/src /home/app/src
COPY ./ProyectInt/pom.xml /home/app/pom.xml
RUN mvn -f /home/app/pom.xml clean package -DskipTests

FROM openjdk:11-slim
WORKDIR /usr/src
COPY --from=BUILD /home/app/target/app-0.0.1-SNAPSHOT.jar /usr/src/app.jar
EXPOSE 8080
ENTRYPOINT [ "java"  "-jar" "/usr/src/app.jar"]
