# Libraries

## Frontends

https://github.com/SoftwareBrothers/adminjs

## Lodash

A modern JavaScript utility library delivering modularity, performance & extras.

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.Lodash's modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions

https://github.com/lodash/lodash

https://lodash.com

## PassportJS

Passport is authentication middleware for [Node.js](https://nodejs.org/). Extremely flexible and modular, Passport can be unobtrusively dropped in to any [Express](https://expressjs.com/)-based web application. A comprehensive set of strategies support authentication using a [username and password](http://www.passportjs.org/docs/username-password/), [Facebook](http://www.passportjs.org/docs/facebook/), [Twitter](http://www.passportjs.org/docs/twitter/), and [more](http://www.passportjs.org/packages/).

https://github.com/jaredhanson/passport

http://www.passportjs.org

https://www.freecodecamp.org/news/learn-to-implement-user-authentication-in-node-apps-using-passport-js

Nodejs passport login system - https://www.youtube.com/watch?v=-RCnNyD0L-s

Node + Passport User Authentication

- passport-local strategy (Session)
- passport-jwt strategy

User Authentication Choices

![image](../../../media/Nodejs_Libraries-image1.jpg)

What is Passport JS

- Welcome to Express middlewares!
    - On each HTTP request, Passport will use a "Strategy" to determine whether the requestor has permission to view that resource
    - If the user does not have permission, a 401 *Unauthorized* Error is thrown
- Passport Strategies??
    - Each strategy uses the Passport JS framework as a template
    - The Passport Local Strategy utilizes, Cookies, Express Sessions and some authentication logic

Intro to HTTP Headers and Cookies

- 3 types of headers
    - General headers
    - Request headers
    - Response headers

Setting header with expiry

```js
var date = new Date();
date.setTime(date.getTime() - 20000);
document.cookie = "custom1=value; expires=" + date.toUTCString() + ";"
```

Set a cookie for 2 weeks and after it expire, user has to re-login

Fetch API - https://www.youtube.com/watch?v=cuEtnrL9-H0

JWT Authentication - https://www.youtube.com/watch?v=mbsmsi7l3r4

## Fingerprintjs

FingerprintJS is a browser fingerprinting library that queries browser attributes and computes a hashed visitor identifier from them. Unlike cookies and local storage, a fingerprint stays the same in incognito/private mode and even when browser data is purged.

### Limitations

#### Accuracy

Since FingerprintJS processes and generates the fingerprints from within the browser itself, the accuracy is limited (40% - 60%). For example, when 2 different users send requests using identical (i.e. same version, same vendor, same platform), browsers, FingerprintJS will not be able to tell these two browsers apart, primarily because the attributes from these browsers will be identical.

#### Security

Because of how the fingerprints are processed and generated from within the browser itself, they are vulnerable to spoofing and reverse engineering.

https://github.com/fingerprintjs/fingerprintjs

## Request - https://github.com/request/request

## [Sequelize | Feature-rich ORM for modern TypeScript & JavaScript](https://sequelize.org/)

Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.

## Code editor libraries

- Monaco by Microsoft
- React devtools inline
- Console feed

## BullMQ

Message Queue and Batch processing for NodeJS and Python based on Redis

[BullMQ - Background Jobs processing and message queue for NodeJS | BullMQ](https://bullmq.io/)

[GitHub - taskforcesh/bullmq: BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis](https://github.com/taskforcesh/bullmq)

## Others

[responsive-images-generator - npm](https://www.npmjs.com/package/responsive-images-generator)

[gulp-responsive - npm](https://www.npmjs.com/package/gulp-responsive)
