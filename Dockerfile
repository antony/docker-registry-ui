FROM node:9-alpine

WORKDIR /build

COPY . /build
RUN npm install && npm run export

WORKDIR /app

COPY /export /app
RUN rm -rf /build
RUN npm install -g http-server

CMD http-server /app
