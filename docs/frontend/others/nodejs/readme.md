# Nodejs

Node.js is an [open-source](https://en.wikipedia.org/wiki/Open-source_software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform)[JavaScript](https://en.wikipedia.org/wiki/JavaScript)[run-time environment](https://en.wikipedia.org/wiki/Runtime_system) that executes JavaScript code outside of a browser. JavaScript is used primarily for [client-side scripting](https://en.wikipedia.org/wiki/Client-side_scripting), in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for [server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting)-running scripts server-side to produce [dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page) contentbeforethe page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying [web application](https://en.wikipedia.org/wiki/Web_application) development around a single programming language, rather than different languages for server side and client side scripts.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.

Node.js is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/).

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js package ecosystem, [npm](https://www.npmjs.com/), is the largest ecosystem of open source libraries in the world.

Go for stateless as soon as possible. It's better to go for stateless right from the very beginning. If you're on NodeJS and PM2, you have to keep your code stateless if you want PM2 to multiply your runtime for load-balancing.

- Not for CPU-intensive tasks

## Javascript V8 Engine

## Isolate

An isolate is a concept of an instance in V8. In Blink, isolates and threads are in 1:1 relationship. One isolate is associated with the main thread. One isolate is associated with one worker thread. An exception is a compositor worker where one isolate is shared by multiple compositor workers.

## PM2

Advanced, production process manager for Node.js

PM2 is daemon process manager that will help you manage and keep your application online.

<http://pm2.keymetrics.io>

## Difference between Node.js and PHP

1. PHP is powered by Zend engine whereas Node.js is powered by Google's V8 JavaScript engine.

2. PHP is synchronous while Node.js is asynchronous.

3. PHP is slower while Node.js is quicker.

4. PHP has a ready to install feature to use it on the server side whereas Node.js is a runtime environment for JavaScript on the server side.

## NPM

NPM is the default package manager for JavaScript development. It helps you find and install packages (programs) that you can use in your programs.

You can add npm to a project simply by using the "npm init" command. When you run this command it creates a "package.json" file in the current directory. This is the file where your dependencies are listed, and npm views it as the ID card of the project.

### package.json vs package-lock.json

| **package.json** | **package.lock.json** |
|---|---|
| It contains basic information about the project. | It describes the exact tree that was generated to allow subsequent installs to have the identical tree. |
| It is mandatory for every project. | It is automatically generated for those operations where npm modifies either node\_modules tree or package.json. |
| It records important metadata about the project. | It allows future devs to install the same dependencies in the project. |
| It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project. |

## References

<https://en.wikipedia.org/wiki/Node.js>

<https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5>

<https://dev.to/jorge_rockr/everything-you-need-to-know-about-node-js-lnc>

<https://dev.to/khaosdoctor/node-js-under-the-hood-1-getting-to-know-our-tools-1465>

<https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf>

<https://www.toptal.com/nodejs>

<https://www.freecodecamp.org/news/async-local-storage-nodejs>

<https://www.toptal.com/nodejs/interview-questions>

<https://www.toptal.com/nodejs/node-js-error-handling>

[**https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1**](https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1)

[**https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2**](https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2)

[**https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-3**](https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-3)

<https://www.freecodecamp.org/news/free-8-hour-node-express-course>

<https://www.freecodecamp.org/news/build-six-node-js-and-express-js>
