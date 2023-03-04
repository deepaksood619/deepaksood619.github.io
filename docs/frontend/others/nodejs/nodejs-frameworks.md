# Nodejs Frameworks

## Comparision

<http://nodeframework.com>

## Things to consider while selecting a node framework

- The scalability and robustness of the framework
- If the development process is something you feel comfortable working with.
- Quantity of code that this framework will make us write
- Time for learning the framework
- Easier to find developers using/know that framework
- It's not about finding the best framework, it's about finding the right framework.

## Consideration

- **Hapijs**
- **Nestjs**
- **Meteorjs (Full stack framework with 41574 stars)**

## Frameworks

- AdonisJS
- Express.js

<https://www.freecodecamp.org/news/the-express-handbook>

- Meteor.js
- Nest.js
- Sails.js
- Koa.js
- Loopback.js
- Hapi.js
- Derby.js
- Total.js
- Molecular
- Apollo Data Graph Platform

- **Ghost (Blogging platform)**

- Feather.js (feathers)
- Mean.io
- Strapi.js
- Fastify.js
- Restify (used in production by NPM, Netflix, Pinterest and Napster)
- Mojito.Js
- FoalTS (A Node.js and TypeScript framework)
- ActionHero
- Deno

<https://github.com/denoland/deno>

<https://scotch.io/bar-talk/10-node-frameworks-to-use-in-2019>

- **AdonisJS**

AdonisJs is a Node.js MVC framework that runs on all major operating systems. It offers a stable ecosystem to write a server-side web application so that you can focus on business needs over finalising which package to choose or not."

- Support for ORM
- Support for No-SQL database

- **Expressjs**

Express.js is a fast, non-opinionated, minimalist web framework for Node.js. It is simply a technology built on Node.js which behaves like a middleware to help manage our servers and routes. Looking at the asynchronous nature of Node.js and the fact that Express.js was built on node, the ability to build a light-weight application that can process more than a single request seamlessly actually depends on the serving capability of technologies like express.

It's robust API allows users to configure routes to send/receive requests between the front-end and the database (acting as a HTTP server framework). A good advantage with express is how it supports a lot of other packages and other template engines such as Pug, Mustache, EJS and a lot more.

Some of the numerous advantages of Express.js includes:

- Almost the standard for Node.js web middleware
- Fully customisable
- Low learning curve
- Majorly focused on browsers, making templating and rendering an almost out of the box feature.

- **Meteorjs**

The Meteor docs defines meteor as a full-stack JavaScript platform for developing modern web and mobile applications. It's major advantage is it's realtime update. As changes are made to the web app, it automatically updates the template with the latest changes.

The Node.js framework makes development quite very simplified by providing a platform for the entire tier of the application to be in the same language; JavaScript. Making it function just as efficient in both the server and client side.

Meteor stands the capability of serving large projects like reaction commerce( known to be one of the largest and most popular e-commerce open source projects).

The most fascinating aspect of the Meteor framework is the very rich and organised documentation/large community it has, helping users learn fast by reaching out and getting their hands dirty with projects, very fast.

With the fact that meteor is leveraging on the Facebook GraphQL datastack to come up with meteor Apollo

- **Nestjs**

NestJs is a framework built with Node.js, It is used for building efficient, scalable Node.js server-side applications. Nest uses progressive JavaScript and is written with TypeScript. Being built with TypeScript means that Nest comes with strong typing and combines elements of OOP(Object Oriented Programming), FP(Functional Programming) and FRP(Functional Reactive Programming).

Nest also makes use of Express, It provides an out of the box application architecture which allows for the effortless creation of highly testable, scalable, loosely coupled, and easily maintainable applications.

Nest CLI can be used to generate nest.js applications with a lot of features out of the box.

- **Sailsjs**

It boasts of being the most popular MVC Node.js framework with the support for modern apps requirements. The APIs are data-driven, with a scalable service oriented architecture.

Sails bundles an ORM, waterlines, that makes compatibility possible with almost all databases, going as far as providing a huge number of community projects. Some of its officially supported adapters include MYSQL, Mongo, PostgreSQL, Redis, and even Local Disk.

Looking at the backend, Just by running an installation command, 'sails generate api bookstore' for instance, sails blows your mind by providing you some basic blueprints, without you writing any codes at all.

This command provides you endpoints to CRUD bookstore. You think that is all right, check this out: Sails is also compatible with almost all frontend technologies ranging from React, Angular, Backbone, iOS/objective C, Android/java, windows phone and probably even some technologies yet to be created. For this one, 2019 it is! summarised features include:

- Many automated generators.
- Requires no additional routing
- Great frontend compatibility with other frontend technologies.
- Transparent support for Websockets.
- Enables faster build of REST API.
- Compatible with almost all database, thanks to its waterline ORM.

- **Koajs**

Referred to as the next generation web framework for Node.js, Koa was created by the same team that created Express.js, making it seem like it would pick up from where express left off. Koa is unique in the fact that it uses some really cool ECMAScript(ES6) methods that have not even landed in some browsers yet, it allows you to work without callbacks, while also providing you with an immense increase in error handling. it requires a Node.js version of at least 0.11 or higher.

According to the website, Koa does not bundle any middleware within core, meaning the middlewares are more cascaded/streamlined, and every line of code is quite elegant and granular, thereby allowing you to structure the parts however you want (component-based middlewares). This makes the framework to have more control over configurations and handling.

Koa became futureproof owing to the fact that it could actually ditch the holy grail of asynchronous functionality: callbacks.

Some key features include:

- Ditched callbacks hell
- Component-based building blocks
- Cascading middlewares
- Quite modular
- Efficient error handling

- **LoopBackjs**

LoopBack is another Node.js framework with an easy-to-use CLI and a dynamic API explorer. It allows you to create your models based on your schema or dynamic models in the absence of a schema. It is compatible with a good number of REST services and a wide variety of databases including MySQL, Oracle, MongoDB, Postgres and so on.

It has the ability to allow a user build a server API that maps to another server, almost like creating an API that is a proxy for another API. It's support for native mobile and browser SDKs for clients like Android/Java, iOS, Browser javaScript(Angular).

Key features:

- [Quickly create dynamic end-to-end REST APIs](https://loopback.io/#core).
- [Connect devices and browsers](https://loopback.io/#juggler) to data and services.
- Use [Android, iOS, and AngularJS SDKs](https://loopback.io/#sdks) to easily create client apps.
- [Add-on components](https://loopback.io/#components) for file management, 3rd-party login, and OAuth2.
- Runs on-premises or in the cloud

- **Hapijs**

Just like ExpressJs, the common [hapi.js](https://hapijs.com/resources) (supported by Walmart Labs) is a Node.js framework that helps serve data by intermediating between the server side and client. It is quite a good substitute for Express(they both have their unique features).

Hapi is a configuration-driven pattern, traditionally modeled to control web server operations. A unique feature it has is the ability to create a server on a specific IP, with features like the 'onPreHandler', we can do something with a request before it is completed by intercepting it and doing some pre-processing on the request.

Considering it's 'handler' function where we can call a route and still pass some configurations while making the requests, just to get the function to do something specified in the configuration. This handler, from what we see, acts like a pseudo-middleware.

Let us look at some key features that make hapiJs promising:

- There is a deeper control over request handling.
- Detailed API reference and a good support for document generation
- Has more functions for building web servers
- Configuration-based approach to some sub-middlewares(pseudo-middlewares)
- Provides the availability of caching, Authentication, and input validation.
- Has a plugin-based architecture for scaling.
- Provides you with really good enterprise plugins like the joi, yar, catbox, boom, tv, travelogue, and so on.

- **Derbyjs**

According to the [Derby.js](https://derbyjs.com/) site, it is a full stack Node.js framework for writing modern web applications. Derby has been around a little while, quite long enough to have proven itself to hop into 2019 and rock some chords.

DerbyJs provides you with seamless data synchronisation between your server and client with an automatic conflict resolution powered by [ShareDB's](https://github.com/share/sharedb) operational transformation of JSON and text. It permits you the opportunity to add customised codes to build highly efficient web applications.

- **Totaljs**

[Total.js](https://www.totaljs.com/) boast of being a very fast development Node.js framework, that requires little maintenance, with a good performance and a seamless scaling transition. It shows some promise by giving some insight on their [website](https://www.totaljs.com/), where they ask for visitors willing to contribute to the growth of the framework. So far the Total.js team has spent some time trying to get more premium sponsors to join them. This is another indication that they have plans to expand and should be checked out for more growth in the nearest future to come.

Total.js has some really beautiful versions like the Total.js Eshop, which contains a user interface optimized for mobile devices, and downloadable by all premium members. The Eshop is one of the best Node.js e-commerce system. This is because of its many versions of unique content management system(CMS).

- **Molecular**

Progressive microservices framework for Node.js.

- Blazing Fast
- Extensible (using modules)
- Fault tolerance

Moleculer is a fault tolerant framework. It has built-in load balancer, circuit breaker, retries, timeout and bulkhead features.

- Promise-based solution (async/await compatible)
- request-reply concept
- support streams
- support event-driven architecture with balancing
- built-in service registry & dynamic service discovery
- load balanced requests & events (round-robin, random, cpu-usage, latency)
- many fault tolerance features (Circuit Breaker, Bulkhead, Retry, Timeout, Fallback)
- supports middlewares
- supports versioned services
- service mixins
- built-in caching solution (memory, Redis)
- pluggable transporters (TCP, NATS, MQTT, Redis, NATS Streaming, Kafka)
- pluggable serializers (JSON, Avro, MsgPack, Protocol Buffers, Thrift)
- pluggable validator
- multiple services on a node/server
- all nodes are equal, no master/leader node
- parameter validation with [fastest-validator](https://github.com/icebob/fastest-validator)
- built-in health monitoring & metrics
- official [API gateway module](https://github.com/moleculerjs/moleculer-web) and many other modules...

<https://moleculer.services>

<https://github.com/moleculerjs/moleculer>

- **The Apollo Data Graph Platform**

Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL

<https://www.apollographql.com>

- **Ghost (CMS)**

## Ghostis a free and [open source](https://en.wikipedia.org/wiki/Open-source_software)[blogging](https://en.wikipedia.org/wiki/Blog) platform written in [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and distributed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License), designed to simplify the process of online publishing for individual bloggers as well as online publications

The concept of the Ghost platform was first floated publicly in November 2012 in a blog post by project founder John O'Nolan, which generated enough response to justify coding a prototype version with collaborator Hannah Wolfe.

- **Feathersjs**

Feathers.js is a simplistic real-time framework mounted on the top of Express.js for writing advanced web applications. It effortlessly combines with any client-side framework. With the help of Feathers framework, you will discover and acquire all the modern coding protocols by default. It has a fully customizable feature that allows Building robust lightweight web applications real quick. As a result of the external plugin, it enables you to execute SMS, authentications, and email messaging.

- **MEAN.io**

MEAN.js is a combination of open source technologies that implement an end-to-end framework for developing dynamic web applications from the ground up. It is an added Node.js framework mounted on the top of Express. It helps you create secure, robust, and maintainable production web applications using MongoDB, Express, AngularJS, and Node.js.

- **Strapi.io**

Strapi.io is the most advanced Node.js content management framework. It comprises an extraordinary set of features including an admin panel, robust CLI, agile, stable and valuable plugins. It combines the front-end framework of the users choice, mobile apps and also IoT (Internet-of-Things).

- **ActionHero**

ActionHero is a multi-transport API Server with integrated cluster capabilities and delayed tasks. The goal of actionhero is to create an easy-to-use toolkit for makingreusable&scalableAPIs for HTTP, WebSockets, and more. Clients connected to an actionhero server can [consume the api](https://www.actionherojs.com/tutorials/actions), [consume static content](https://www.actionherojs.com/tutorials/file-server), and [communicate with each other](https://www.actionherojs.com/tutorials/chat). ActionHero is cluster-ready, with built in support for background tasks, 0-downtime deploys, and more. ActionHero provides a simple Async/Await API for managing every type of connection and background task.

<https://github.com/actionhero/actionhero>
