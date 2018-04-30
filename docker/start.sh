export SERVER_NAME=${SERVER_NAME-localhost}
export SSL_CERT_PATH=${SSL_CERT_PATH}
export SSL_KEY_PATH=${SSL_KEY_PATH}
export BASIC_AUTH_HTPASSWD_FILE=${BASIC_AUTH_HTPASSWD_FILE}

envsubst '\$SERVER_NAME \$SSL_CERT_PATH \$SSL_KEY_PATH \$BASIC_AUTH_HTPASSWD_FILE' < /etc/nginx/conf.d/ui.conf.template > /etc/nginx/conf.d/ui.conf

nginx -g "daemon off;"
