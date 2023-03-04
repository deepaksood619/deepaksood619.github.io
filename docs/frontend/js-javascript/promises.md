# Promises

1. Is single threaded

2. Run on the same queue as painting, updating styles and handling user actions.

3. Terminology

   - Fulfilled

   - Rejected

   - Pending

   - Settled

4. Chaining (Promises can be chained together to execute one after other)

5. Parallelism and sequencing

<https://developers.google.com/web/fundamentals/primers/promises#whats-all-the-fuss-about>

## What are async and await?

Async/await statements are syntactic sugar created on top of JavaScript Promises. They allow us to write Promise-based code as if it were synchronous, but without blocking the main thread.

## What is callback hell?

In JavaScript, callback hell is an anti-pattern in code that happens as a result of poor structuring of asynchronous code. It is usually seen when programmers try to force a visual top-down structure in their asynchronous callback-based JavaScript code.

## What are JavaScript promises?

A promise in JavaScript is like a placeholder value that is expected to eventually resolve into the final successful result value or reason for failure.

## What is Node.js promise?

A promise may at first glance look like syntactic sugar for a callback but actually, it isn't. A promise may serve the same purpose of a callback in a different way but underneath it is so much different. <https://www.promisejs.org>

## What is a promise in JavaScript?

It's the same exact thing as in Node.js. Actually, Node.js is just JavaScript running outside the browser in an environment using Google Chrome's very own JavaScript engine V8.

## What is the use of callback function in JavaScript?

JavaScript is a single-threaded language. And since it can't spawn more threads, if an I/O operation is started, it will block the execution of the main (and only) thread. Therefore, it has what is called a callback. A callback is a function passed to an I/O operation that gets called when that operation has been completed.

## What is an async function?

An async function is a function that returns a promise. The special thing about this type of function is that you can use the word await which allows you to pause the execution of a function when a promise is called without having to use the then function to retrieve the value from the promise.

<https://www.toptal.com/nodejs/benchmark-nodejs-promise>

[JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
