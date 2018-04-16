FROM node:9-alpine

WORKDIR /build

COPY package.json package-lock.json app assets routes webpack /build

RUN npm install

CMD sapper start
