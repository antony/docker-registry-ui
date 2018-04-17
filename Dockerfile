FROM node:9-alpine

WORKDIR /build

COPY . .
RUN npm install && \
  npm install -g http-server && \
  npm run export && \
  mv /build/export /app && \
  rm -rf /build

WORKDIR /app

CMD [[ $SSL_ENABLED = "true" ]] && $(http-server -S -K $SSL_KEY_PATH -C $SSL_CERT_PATH .) || $(http-server .) 
