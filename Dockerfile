FROM node:alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN cd build/
RUN npm ci --omit="dev"

EXPOSE 3333
CMD [ "node", "build/bin/server.js" ]
