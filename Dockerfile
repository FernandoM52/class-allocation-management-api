FROM node:alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333
CMD [ "node", "bin/server.js" ]
