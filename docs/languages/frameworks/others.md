# Others

## OpenCL

OpenCL (Open Computing Language) is a [framework](https://en.wikipedia.org/wiki/Software_framework) for writing programs that execute across [heterogeneous](https://en.wikipedia.org/wiki/Heterogeneous_computing) platforms consisting of [central processing units](https://en.wikipedia.org/wiki/Central_processing_unit)(CPUs), [graphics processing units](https://en.wikipedia.org/wiki/Graphics_processing_unit)(GPUs), [digital signal processors](https://en.wikipedia.org/wiki/Digital_signal_processor)(DSPs), [field-programmable gate arrays](https://en.wikipedia.org/wiki/Field-programmable_gate_array)(FPGAs) and other processors or [hardware accelerators](https://en.wikipedia.org/wiki/Hardware_accelerator). OpenCL specifies [programming languages](https://en.wikipedia.org/wiki/Programming_language)(based on [C99](https://en.wikipedia.org/wiki/C99) and [C++11](https://en.wikipedia.org/wiki/C%2B%2B11)) for programming these [devices](https://en.wikipedia.org/wiki/Personal_computer_hardware) and [application programming interfaces](https://en.wikipedia.org/wiki/Application_programming_interface)(APIs) to control the platform and execute programs on the [compute devices](https://en.wikipedia.org/wiki/OpenCL_compute_devices). OpenCL provides a standard interface for [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing) using [task-](https://en.wikipedia.org/wiki/Task_parallelism) and [data-based parallelism](https://en.wikipedia.org/wiki/Data_parallelism)

<https://en.wikipedia.org/wiki/OpenCL>

## JHipster

JHipster is a development platform to generate, develop and deploy [Spring Boot](https://projects.spring.io/spring-boot/)+[Angular](https://angular.io/)/[React](https://reactjs.org/)/[Vue](https://vuejs.org/) Web applications and Spring microservices.

### Technology stack on the client side

#### Single Web page application

- [Angular](https://angular.io/) or [React](https://reactjs.org/) or [Vue](https://vuejs.org/)
- Responsive Web Design with [Twitter Bootstrap](https://getbootstrap.com/)
- [HTML5 Boilerplate](http://html5boilerplate.com/)
- Compatible with modern browsers (Chrome, FireFox, Microsoft Edge...)
- Full internationalization support
- Optional [Sass](https://www.npmjs.com/package/node-sass) support for CSS design
- Optional WebSocket support with Spring Websocket

#### With the great development workflow

- Easy installation of new JavaScript libraries with [NPM](https://www.npmjs.com/get-npm)
- Build, optimization and live reload with [Webpack](https://webpack.js.org/)
- Testing with [Jest](https://facebook.github.io/jest/) and [Protractor](http://www.protractortest.org/)

#### And what if a single Web page application isn't enough for your needs?

- Support for the [Thymeleaf](http://www.thymeleaf.org/) template engine, to generate Web pages on the server side

### Technology stack on the server side

A complete [Spring application](https://spring.io/):

- [Spring Boot](https://projects.spring.io/spring-boot/) for easy application configuration
- [Maven](https://maven.apache.org/) or [Gradle](http://www.gradle.org/) configuration for building, testing and running the application
- ["development" and "production" profiles](https://www.jhipster.tech/profiles/)(both for Maven and Gradle)
- [Spring Security](https://docs.spring.io/spring-security/site/index.html)
- [Spring MVC REST](https://spring.io/guides/gs/rest-service/)+[Jackson](https://github.com/FasterXML/jackson)
- Optional WebSocket support with Spring Websocket
- [Spring Data JPA](https://projects.spring.io/spring-data-jpa/)+ Bean Validation
- Database updates with [Liquibase](http://www.liquibase.org/)
- [Elasticsearch](https://github.com/elastic/elasticsearch) support if you want to have search capabilities on top of your database
- [MongoDB](https://www.mongodb.org/) and [Couchbase](https://www.couchbase.com/) support if you'd rather use a document-oriented NoSQL database instead of JPA
- [Cassandra](https://cassandra.apache.org/) support if you'd rather use a column-oriented NoSQL database instead of JPA
- [Kafka](https://kafka.apache.org/) support if you want to use a publish-subscribe messaging system

### Technology stack for microservices

Microservices are optional, and fully supported:

- HTTP routing using [Netflix Zuul](https://github.com/Netflix/zuul) or [Traefik](https://traefik.io/)
- Service discovery using [Netflix Eureka](https://github.com/Netflix/eureka) or [HashiCorp Consul](https://www.consul.io/)

### Ready to go into production

- Monitoring with [Metrics](http://metrics.dropwizard.io/) and [the ELK Stack](https://www.elastic.co/products)
- Caching with [ehcache](http://ehcache.org/)(local cache), [hazelcast](http://www.hazelcast.com/) or [Infinispan](http://infinispan.org/)
- Optimized static resources (gzip filter, HTTP cache headers)
- Log management with [Logback](http://logback.qos.ch/), configurable at runtime
- Connection pooling with [HikariCP](https://github.com/brettwooldridge/HikariCP) for optimum performance
- Builds a standard WAR file or an executable JAR file
- Full Docker and Docker Compose support
- Support for all major cloud providers: AWS, Cloud Foundry, Heroku, Kubernetes, OpenShift, Azure, Docker...

<https://github.com/jhipster/generator-jhipster>

<https://www.jhipster.tech>
