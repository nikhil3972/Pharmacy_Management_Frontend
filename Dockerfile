
#Stage 2:
FROM nginx:latest
COPY /dist/client /usr/share/nginx/html
EXPOSE 80
