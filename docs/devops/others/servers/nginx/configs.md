# Configs

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-configmap
  namespace: example
data:
  nginx.conf: |
    user root;
    worker_processes auto;
    pid /var/run/nginx.pid;
    error_log /var/log/nginx/error.log warn;
    events {
            worker_connections 2048;
            # multi_accept on;
    }

    http {
            ##
            # Basic Settings
            ##

            sendfile on;
            tcp_nopush on;
            tcp_nodelay on;
            keepalive_timeout 65;
            types_hash_max_size 2048;
            # server_tokens off;

            # server_names_hash_bucket_size 64;
            # server_name_in_redirect off;

            include /etc/nginx/mime.types;
            default_type application/octet-stream;

            ##
            # Logging Settings
            ##
            log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

            access_log /var/log/nginx/access.log main;
            error_log /var/log/nginx/error.log;

            ##
            # Gzip Settings
            ##

            gzip on;
            gzip_disable "msie6";

            gzip_vary on;
            gzip_proxied any;
            gzip_comp_level 6;
            # gzip_buffers 16 8k;
            # gzip_http_version 1.1;
            gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

            ##
            # Virtual Host Configs
            ##

            server {
                    proxy_connect_timeout       600;
                    proxy_send_timeout          600;
                    proxy_read_timeout          3600;
                    send_timeout                600;
                    client_max_body_size 25M;
                    server_name corporate.app.com;
                    listen 80;

                    location /static/ {
                            autoindex on;
                            expires 7d;
                            alias /root/example/static/;
                    }

                    location / {
                            proxy_pass  http://example.example:9104/;
                            proxy_redirect     off;
                            proxy_set_header   Host $http_host;
                            proxy_set_header   X-Real-IP $remote_addr;
                            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
                            proxy_set_header   X-Forwarded-Host $server_name;
                            proxy_buffering off;
                    }
            }
    }

# production.conf
upstream api {
server api:6379;
}
server {
listen 80;
location /api {
rewrite /api/(.*) /$1 break;
proxy_pass http://api;
}
}

# development.conf
upstream api {
server api:6379;
}
server {
listen 80;
location /api {
rewrite /api/(.*) /$1 break;
proxy_pass http://api;
}
}

# test.con
# Start writing your nginx.conf here
events { }
http {
    server {
        server_name corporate.app.com;
        listen 80;

        location / {
            proxy_pass  http://frontend/;
        }

        location /api/ {
            proxy_pass http://rest_api/;
        }

        location /notification/ {
            proxy_pass http://notification:8080/;
        }
    }
}

# Dockerfile
FROM nginx
COPY ./production.conf /etc/nginx/conf.d/default.conf
```
