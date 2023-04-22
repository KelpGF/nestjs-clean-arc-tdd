FROM node:16

WORKDIR /usr/nestjs-clean/app

RUN npm i -g @nestjs/cli

EXPOSE 3000 

USER node
