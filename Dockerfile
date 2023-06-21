FROM node:18.16.0
#FROM strapi/base

WORKDIR usr/src/app

COPY ./package*.json ./

RUN npm install -g npm@9.5.1

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm","run","start"]