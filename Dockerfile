FROM ubuntu:22.04

ENV TZ=Asia/Kolkata

RUN apt-get update
RUN apt-get install -y curl git gcc g++ make
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get -y install nodejs
RUN npm i -g npm

# Set the working directory to /app
WORKDIR /app

# COPY . /app/

# RUN git remote set-url origin https://github.com/deepaksood619/wiki.git

# RUN cd .layouts && npm i

EXPOSE 8000
