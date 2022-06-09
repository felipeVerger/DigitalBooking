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
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./reserva-hoteles/nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker run -p 4250:80 -d digital-booking-front