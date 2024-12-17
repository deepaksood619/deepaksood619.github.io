FROM ubuntu:22.04

ENV TZ=Asia/Kolkata

RUN apt-get update
RUN apt-get install -y curl git gcc g++ make

ENV NODE_VERSION=23.4.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

# RUN npm i -g npm

# Set the working directory to /app
WORKDIR /app

# COPY . /app/

# RUN git remote set-url origin https://github.com/deepaksood619/wiki.git

# RUN cd .layouts && npm i

EXPOSE 8000
