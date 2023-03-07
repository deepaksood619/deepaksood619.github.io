# Libraries

## Frontends

<https://github.com/SoftwareBrothers/adminjs>

## Lodash

A modern JavaScript utility library delivering modularity, performance & extras.

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.Lodash's modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions

<https://github.com/lodash/lodash>

<https://lodash.com>

## PassportJS

Passport is authentication middleware for [Node.js](https://nodejs.org/). Extremely flexible and modular, Passport can be unobtrusively dropped in to any [Express](https://expressjs.com/)-based web application. A comprehensive set of strategies support authentication using a [username and password](http://www.passportjs.org/docs/username-password/), [Facebook](http://www.passportjs.org/docs/facebook/), [Twitter](http://www.passportjs.org/docs/twitter/), and [more](http://www.passportjs.org/packages/).

<https://github.com/jaredhanson/passport>

<http://www.passportjs.org>

<https://www.freecodecamp.org/news/learn-to-implement-user-authentication-in-node-apps-using-passport-js>

Nodejs passport login system - <https://www.youtube.com/watch?v=-RCnNyD0L-s>

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

var date = new Date();

date.setTime(date.getTime() - 20000);

document.cookie = "custom1=value; expires=" + date.toUTCString() + ";"

Set a cookie for 2 weeks and after it expire, user has to re-login

Fetch API - <https://www.youtube.com/watch?v=cuEtnrL9-H0>

JWT Authentication - <https://www.youtube.com/watch?v=mbsmsi7l3r4>

## Fingerprintjs

FingerprintJS is a browser fingerprinting library that queries browser attributes and computes a hashed visitor identifier from them. Unlike cookies and local storage, a fingerprint stays the same in incognito/private mode and even when browser data is purged.

<https://github.com/fingerprintjs/fingerprintjs>

## Request - <https://github.com/request/request>
