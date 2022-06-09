#Create MySQL Image for JSP Tutorial Application
FROM mysql

ENV MYSQL_ROOT_PASSWORD jsppassword
ADD proyecto_integrador.sql /docker-entrypoint-initdb.d

EXPOSE 3306