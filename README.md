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
      DOCKER_REGISTRY_AUTH_HEADER: Basic xxyyzz
      SSL_ENABLED: "true"
      SSL_CERT_PATH: /opt/certs/cert.pem
      SSL_KEY_PATH: /opt/certs/key.pem
    ports:
      - 80:8080
    volumes:
      - type: bind
        source: /home/ab/assets/certs
        target: /opt/certs
```
