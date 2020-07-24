FROM node:latest
COPY ./build /usr/src/app/build
COPY ./tempPackages /usr/src/app/tempPackages
COPY ./dockerStart.sh /usr/src/app
COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app
WORKDIR /usr/src/app
RUN yarn install --production
RUN apt-get update && apt-get install -y netcat
CMD ["bash", "dockerStart.sh"]
