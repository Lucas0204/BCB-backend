FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm ci

CMD [ "npm", "start" ]
