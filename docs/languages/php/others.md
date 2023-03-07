# Others

## PHP Package Manager

## composer

Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

brew install composer

composer create-project codeigniter4/appstarter foo

composer update

composer create-project codeigniter4/appstarter --no-dev

If you don't need or want phpunit installed, and all of its composer dependencies, then add the "--no-dev" option to the end of the above command line. That will result in only the framework, and the three trusted dependencies that we bundle, being composer-installed.

composer install

d1c392ff6eb1e2d8623ca13ac5f0b0d69cd6f8c1

php builds development

php builds release

php spark serve

php -m

<https://developers.ibexa.co/blog/performance-composer-2.0-php-8.0-jit>

<https://packagist.org>

Packagist is the main [Composer](https://getcomposer.org/) repository. It aggregates public PHP packages installable with Composer.

## PECL

PECLis a repository for PHP Extensions, providing a directory of all known extensions and hosting facilities for downloading and development of PHP extensions.

The packaging and distribution system used by PECL is shared with its sister,PEAR.

The**PHP Extension and Application Repository**, or**PEAR,** is a repository of [PHP](https://www.wikiwand.com/en/PHP) software code.

## Commands

pecl

<https://pecl.php.net>

## PHP-8

- union types, static return, and weak maps
- JIT compiler

## FPM (FastCGI Process Manager)

FPM (FastCGI Process Manager) is an alternative PHP FastCGI implementation with some additional features (mostly) useful for heavy-loaded sites.

These features include:

- advanced process management with graceful stop/start;
- ability to start workers with different uid/gid/chroot/environment, listening on different ports and using different php.ini (replaces safe_mode);
- stdout and stderr logging;
- emergency restart in case of accidental opcode cache destruction;
- accelerated upload support;
- "slowlog" - logging scripts (not just their names, but their PHP backtraces too, using ptrace and similar things to read remote process' execute_data) that are executed unusually slow;
- [fastcgi_finish_request()](https://www.php.net/manual/en/function.fastcgi-finish-request.php)- special function to finish request and flush all data while continuing to do something time-consuming (video converting, stats processing etc.);
- dynamic/static child spawning;
- basic SAPI status info (similar to Apache mod_status);
- php.ini-based config file.

<https://www.php.net/manual/en/install.fpm.php>

- Adaptive process spawning (NEW!)
- Basic statistics (ala Apache's mod_status) (NEW!)
- Advanced process management with graceful stop/start
- Ability to start workers with different uid/gid/chroot/environment and different php.ini (replaces safe_mode)
- Stdout & stderr logging
- Emergency restart in case of accidental opcode cache destruction
- Accelerated upload support
- Support for a "slowlog"
- Enhancements to FastCGI, such as fastcgi_finish_request() - a special function to finish request & flush all data while continuing to do something time-consuming (video converting, stats processing, etc.)

It was not designed with virtual hosting in mind (large amounts of pools) however it can be adapted for any usage model.

The apache image can be directly exposed, whereas the fpm image needs another web server that then connects to fpm

The7.3-fpm-stretchvariant contains just PHP FPM, while7.3-apache-stretchcontains also Apache httpd server and PHP configured as Apache module.

nginx + php-fpm is also an excellent way to run php applications. nginx has native support for FastCGI and php-fpm is one of the best ways to run php in a FastCGI environment.

sudo apt-get install libapache2-mod-fastcgi php7.0-fpm

<https://blog.layershift.com/which-php-mode-apache-vs-cgi-vs-fastcgi>

<https://php-fpm.org>

## Optimization

<https://www.cloudways.com/blog/php-performance>

<https://geekflare.com/php-fpm-optimization>

## OpCache

[OPcache](https://www.php.net/manual/en/book.opcache.php) speeds up your PHP application by storing scripts in memory the first time they're called. Subsequent requests will then be loaded from memory rather than the filesystem, which may give you a [74% speed boost](https://www.appdynamics.com/blog/engineering/why-every-php-application-should-use-an-opcache/).

OPcache offers several settings that you can adjust to improve the performance and reliability of your application. In this tutorial, you'll see how to set up a PHP Docker image that allows you to adjust the memory limits for OPcache, the number of cached files and the cache re-validation frequency.

## Adminer

Adminer (formerly phpMinAdmin) is a full-featured database management tool written in PHP. Conversely to [phpMyAdmin](https://www.phpmyadmin.net/), it consist of a single file ready to deploy to the target server. Adminer is available for MySQL, MariaDB, PostgreSQL,SQLite,MS SQL,Oracle,Firebird,SimpleDB,ElasticsearchandMongoDB.

<https://www.adminer.org>

## Static Code Analysis

## PHPlint

phplint:

image: overtrue/phplint:latest

stdin_open: true

tty: true

container_name: phplint

volumes:

- .:/var/www/html/

entrypoint:

- /bin/sh

- -c

- |

sleep infinity

docker-compose up -d phplint

docker exec -it phplint sh

cd /var/www/html

/root/.composer/vendor/bin/phplint ./ --exclude=vendor

<https://github.com/overtrue/phplint>

<http://www.program-transformation.org/PHP/PhpSat#Static_Project_Info>

<https://pear.php.net/package/PHP_CodeSniffer/download>

<http://phpmd.org/download/index.html>

<https://scrutinizer-ci.com/docs/tools/php/php-analyzer>

[**https://modess.io/jenkins-php/**](https://modess.io/jenkins-php/)

- PHP_CodeSniffer (phpcs)
- phploc
- pdepend
- PHPMD -- PHP Mess Detector
- PHP Copy/Paste Detector (phpcpd)
- PHP_CodeBrowser (phpcb)
- phpDox

[**https://www.jenkins.io/solutions/php/**](https://www.jenkins.io/solutions/php/)

## Others

PHPSTAN

PHPStan is a static analysis tool for PHP code. It parses your code and tries to find flaws in the program logic (like a variable being used before being declared, or a function being called that does not exist...).

## php-cs-fixer

<https://github.com/FriendsOfPHP/PHP-CS-Fixer>

## PHP Call Graph

## PSR-1, PSR-2, PSR-12: Coding Style Guide

<https://www.php-fig.org/psr/psr-2>

<https://www.php-fig.org/psr/psr-12>

## phpdcd

phpdcd .

<https://github.com/sebastianbergmann/phpdcd>
