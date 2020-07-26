FROM node:latest

COPY ./src /usr/src/app
COPY .yalc /usr/src/app/.yalc/
COPY ./package.json ./yarn.lock ./.babelrc ./yalc.lock ./dockerStart.sh /usr/src/app/

WORKDIR /usr/src/app
RUN yarn install --production
RUN yarn build

RUN apt-get update && apt-get install -y netcat
CMD ["bash", "dockerStart.sh"]