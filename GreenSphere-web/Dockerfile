FROM node:latest

WORKDIR /temp/react

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npm run build
RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

VOLUME /var/www/html

WORKDIR /

RUN rm -rf /tmp/react