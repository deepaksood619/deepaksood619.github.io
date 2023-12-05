# Dockerfile example

[GitHub - irbigdata/data-dockerfiles: a curated list of docker-compose files prepared for testing  data engineering tools, databases and open source libraries.](https://github.com/irbigdata/data-dockerfiles)

## Example 1

```python
# Use an official Python runtime as a parent image
# https://pythonspeed.com/articles/base-image-python-docker-images/
FROM python:3.7.6-slim
FROM python:3.8-slim-buster

ENV DEBUG False
ENV TZ=Asia/Kolkata
ENV PYTHONUNBUFFERED 1

# Only requirements.txt is copied so Docker build cache doesn't get invalidated
# every time we change other files in the project
COPY requirements.txt /root/kafkaconsumer/requirements.txt

# Set the working directory to /app
WORKDIR /root/kafkaconsumer

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Copy the current directory contents into the container at /app
COPY scripts /root/kafkaconsumer
```

## Example 2

```python
FROM ubuntu:latest

ARG GIT_USERNAME
ARG GIT_PASSWORD

ENV DEBIAN_FRONTEND=noninteractive \
    TZ=Asia/Kolkata
ENV PYTHONUNBUFFERED 1

RUN sed -i -e 's/http:\/\/archive/mirror:\/\/mirrors/' -e 's/http:\/\/security/mirror:\/\/mirrors/' -e 's/\/ubuntu\//\/mirrors.txt/' /etc/apt/sources.list && \
    echo "Acquire {http {Timeout \"60\";}; ftp {Timeout \"60\";};};" > /etc/apt/apt.conf.d/custom-apt.conf && \
    apt-get update && apt-get dist-upgrade --yes && \
 apt-get install -y libpng-dev libjpeg8-dev libfreetype6-dev python-dev python-pip libfreetype6-dev && \
 apt-get install -y libpq-dev libssl-dev libcurl4-openssl-dev  libxft-dev libev-dev git curl vim p7zip-full && \
    apt-get install -y swig openssl libffi-dev libssl-dev check automake build-essential zlib1g zlib1g-dev autoconf libtool && \
    apt-get install -y libdb4.8 libdb++-dev libprotobuf-c1 libprotobuf-c-dev protobuf-c-compiler openvpn iputils-ping && \
    pip install --no-cache-dir --upgrade 'pip==10' && \
 apt-get autoremove -y && apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

#SMAP Section begin
COPY ./smap/ /root/smap/
RUN pip install --no-cache-dir requests [security] 'Twisted [tls]==16.0.0' pyopenssl && \
    pip install --no-cache-dir -r /root/smap/python/requirements.txt && \
    cd /root/smap/python && python setup.py install
#SMAP Section end

COPY requirements.txt /root/requirements.txt
RUN pip install --no-cache-dir --trusted-host pypi.python.org -r /root/requirements.txt && \
    curl "https://rclone.org/install.sh" | bash

#For airflow
RUN pip install --no-cache-dir Flask==1.1.1

COPY ./Docker/analytics/jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py

COPY id_rsa id_rsa.pub /root/.ssh/
RUN chmod 600 ~/.ssh/id_rsa*

ADD . /root/example/

EXPOSE 5555 8070 8071 8080 8888 9104
```

https://docs.docker.com/develop/develop-images/dockerfile_best-practices

### Python - Multistage builds

https://blog.realkinetic.com/building-minimal-docker-containers-for-python-applications-37d0272c52f3

### NODE JS Dockerfile

```bash
FROM node:14-alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
```

### ENV PYTHONUNBUFFERED 1

Setting PYTHONUNBUFFERED=TRUE or PYTHONUNBUFFERED=1 (they are equivalent) allows for log messages to be immediately dumped to the stream instead of being buffered. This is useful for receiving timely log messages and avoiding situations where the application crashes without emitting a relevant message due to the message being "stuck" in a buffer.

As for performance, there can be some (minor) loss that comes with using unbuffered I/O. To mitigate this, I would recommend limiting the number of log messages. If it is a significant concern, one can always leave buffered I/O on and manually flush the buffer when necessary.

### Go Dockerfile

```python
FROM golang:1.14-alpine as build

RUN apk add --no-cache git

WORKDIR /src

RUN go get github.com/julienschmidt/httprouter
RUN go get github.com/sirupsen/logrus
RUN go get github.com/streadway/amqp

COPY publisher.go /src

RUN go build publisher.go

FROM alpine as runtime

COPY --from=build /src/publisher /app/publisher

CMD [ "/app/publisher" ]
```

### Flask Dockerfile

```python
FROM python:3.8-slim-buster
ENV TZ=Asia/Kolkata

# Set the working directory to /app
WORKDIR /app

# Only requirements.txt is copied so Docker build cache doesn't get invalidated
# every time we change other files in the project
COPY requirements.txt /app/requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r /app/requirements.txt

# Copy the current directory contents into the container at /app
COPY src /app/src
```
