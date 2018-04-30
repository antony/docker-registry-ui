# Docker Registry UI

Super simple read-only UI for private docker registries.

## Usage

Put it in your `docker-compose.yml` as follows:

```yaml
services:
  ui:
    image: antony/docker-registry-ui:latest
    environment:
      DOCKER_REGISTRY_URL: https://your-registry-url
      DOCKER_REGISTRY_USERNAME: aaa
      DOCKER_REGISTRY_USERNAME: bbb
      SSL_ENABLED: "true"
      SSL_CERT_PATH: /opt/certs/cert.pem
      SSL_KEY_PATH: /opt/certs/key.pem
    ports:
      - 80:8080
    volumes:
      - type: bind
        source: /home/xyz/my-certs
        target: /opt/certs
```

Or run it as follows:

```bash
docker run -p 443:443 --mount type=bind,source=/home/xyz/my-certs,target=/vol -e SERVER_NAME=some.host.name -e BASIC_AUTH_HTPASSWD_FILE=/vol/htpasswd -e SSL_CERT_PATH=/vol/cert.pem -e SSL_KEY_PATH=/vol/key.pem antony/docker-registry-ui

```