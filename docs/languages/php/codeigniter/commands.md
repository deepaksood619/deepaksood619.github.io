# Commands

## # Dockerfile

FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

TZ=Asia/Kolkata

RUN apt-get update &&

apt-get install -y software-properties-common &&

add-apt-repository --yes ppa:ondrej/php &&

apt-get update &&

apt-get -y upgrade &&

apt-get install -y php7.4-intl

RUN apt-get install -y php-cli php-mbstring git unzip php-xml php-curl

RUN apt-get install -y vim

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

## # Commands

composer create-project codeigniter4/appstarter news

CI_ENVIRONMENT = development

php spark serve
