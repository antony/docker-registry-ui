FROM node:9-alpine

WORKDIR /build

COPY . .
RUN npm install && \
  npm install -g http-server && \
  npm run export && \
  mv /build/export /app && \
  rm -rf /build

WORKDIR /app

CMD http-server .
