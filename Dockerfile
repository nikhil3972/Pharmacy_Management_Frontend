<<<<<<< HEAD

#Stage 2:
FROM nginx:latest
COPY /dist/client /usr/share/nginx/html
EXPOSE 80
=======
FROM nginx:latest
COPY /dist/client /usr/share/nginx/html


#To run 
#docker run -it --rm -p 80:80 --name container-name nikhil3972/pharmacy-management:v1
>>>>>>> 3fa30451f9cb427721b029aef036921b591b3294
