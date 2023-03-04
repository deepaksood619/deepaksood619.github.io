# docker-compose example

```yaml
version: "3.7"
services:
 zenalytix-build:
  build:
   context: .
   dockerfile: Dockerfile
   args:
    GIT_USERNAME: ${GIT_USERNAME}
    GIT_PASSWORD: ${GIT_PASSWORD}
  image: gcr.io/zenatix-data-archiver/zenalytix:fc3c0ae06074

 zenalytix-dev:
  stdin_open: true
  tty: true
  restart: always / "no" / on-failure / unless-stopped
  image: gcr.io/zenatix-data-archiver/zenalytix:fc3c0ae06074
  deploy:
    replicas: 5
    resources:
    limits:
   cpus: "0.1"
   memory: 50M
    restart_policy:
    condition: on-failure
  container_name: zenalytix-dev
  labels:
   app: decision_engine
  env_file:
    - .env
    - Docker/env/${ZENALYTIX_ENV}.env
  environment:
    - DEBUG=True
    - DJANGO_SETTINGS_MODULE=zenalytix.settings
    - POSTGRES_PASSWORD=airflow
    - POSTGRES_USER=postgres
    - POSTGRES_DB=airflow
  working_dir: /root/src/zenalytix
  cap_add:
    - ALL
  cap_drop:
    - SYS_ADMIN
    - NET_ADMIN
  args:
    - buildno=1
    - coordinator
  entrypoint:
    - /bin/bash
    - -c
    - |
         # mkdir -p /dev/net && mknod /dev/net/tun c 10 200 && chmod 600 /dev/net/tun && openvpn --config Docker/OpenVPN/energy.ovpn &
         python manage.py runserver 0.0.0.0:9104
   sleep infinity
  ports:
    - 9104:9104
  networks:
    zenatix-docker:
   ipv4_address: ${ZENALYTIX_IP}
  volumes:
    - post:/root/src/zenalytix
  healthcheck:
    test: "curl -f -s -o /dev/null -I http://${ZENALYTIX_IP}:9104/"
    interval: 10s
    timeout: 10s
    retries: 5

  logging:
        driver: awslogs
        options:
          awslogs-group: devec2
          awslogs-region: us-west-2

  depends_on:
    - "postgres-zenalytix"
    - "redis-zenalytix"

  redis:
    stdin_open: true
    tty: true
    restart: "no"
    image: bitnami/redis:6.0
    container_name: redis
    env_file:
      - dev.env
    ports:
      - 6379:6379
    healthcheck:
      test: "redis-cli -h localhost -p 6379 ping"
      interval: 10s
      timeout: 10s
      retries: 5
    volumes:
      - ./data/redis:/bitnami/redis/data
    networks:
      - localhost_net

  redisinsight:
    stdin_open: true
    tty: true
    restart: "no"
    image: redislabs/redisinsight:latest
    container_name: redisinsight
    ports:
      - 8001:8001
      # - 6379:6379
    volumes:
      - ./data/redis:/bitnami/redis/data
    networks:
      - localhost_net

networks:
  zenatix-docker:
    external:
      name: zenatix-docker

  airflow-docker:

volumes:
  postgres-zenalytix-volume:
    external: true

mysql:
   stdin_open: true
   tty: true
   restart: "no"
   image: mysql:8
    image: mysql:8.0.19
   container_name: mysql
   command: --default-authentication-plugin=mysql_native_password
   environment:
     - MYSQL_HOST=localhost
     - MYSQL_PORT=3306
     - MYSQL_ROOT_PASSWORD=mysql_root_password
     - MYSQL_DATABASE=creditengine
     - MYSQL_USER=creditengine
     - MYSQL_PASSWORD=creditengine
   ports:
     - 3306:3306
   volumes:
    - ./data:/var/lib/mysql

mysql:
    stdin_open: true
    tty: true
    restart: "no"
    image: mysql:5.7.29
    container_name: mysql
    environment:
     - MYSQL_HOST=localhost
     - MYSQL_PORT=3306
     - MYSQL_ROOT_PASSWORD=mysql_root_password
     - MYSQL_DATABASE=creditengine
     - MYSQL_USER=creditengine
     - MYSQL_PASSWORD=creditengine
    ports:
      - 3306:3306
    volumes:
      - ./data:/var/lib/mysql
```
