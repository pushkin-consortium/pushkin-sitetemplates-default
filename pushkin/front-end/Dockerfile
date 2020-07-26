FROM node:latest

COPY ./build /usr/src/app/build
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src
COPY ./tempPackages /usr/src/app/tempPackages
COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app/

WORKDIR /usr/src/app
RUN yarn install --production
RUN apt-get update && apt-get install -y netcat

CMD yarn start