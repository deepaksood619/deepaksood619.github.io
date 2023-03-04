# HTTP

## Working with Requests and Responses

While PHP provides ways to interact with the request and response headers, CodeIgniter, like most frameworks, abstracts them so that you have a consistent, simple interface to them.

## Request Class

The [IncomingRequest class](https://codeigniter.com/user_guide/incoming/incomingrequest.html) is an object-oriented representation of the HTTP request. It provides everything you need:

use CodeIgniterHTTPIncomingRequest;

$request = service('request');

// the URI being requested (i.e. /about)
$request->uri->getPath();

// Retrieve $_GET and $_POST variables
$request->getGet('foo');
$request->getPost('foo');

// Retrieve from $_REQUEST which should include
// both $_GET and $_POST contents
$request->getVar('foo');

// Retrieve JSON from AJAX calls
$request->getJSON();

// Retrieve server variables
$request->getServer('Host');

// Retrieve an HTTP Request header, with case-insensitive names
$request->getHeader('host');
$request->getHeader('Content-Type');

$request->getMethod(); // GET, POST, PUT, etc

The request class does a lot of work in the background for you, that you never need to worry about. TheisAJAX()andisSecure()methods check several different methods to determine the correct answer.

## Response Class

CodeIgniter also provides a [Response class](https://codeigniter.com/user_guide/outgoing/response.html) that is an object-oriented representation of the HTTP response. This gives you an easy and powerful way to construct your response to the client:

use CodeIgniterHTTPResponse;

$response = service('response');

$response->setStatusCode(Response::HTTP_OK);
$response->setBody($output);
$response->setHeader('Content-type', 'text/html');
$response->noCache();

// Sends the output to the browser
// This is typically handled by the framework
$response->send();

In addition, the Response class allows you to work the HTTP cache layer for the best performance.

## PSR

PSR-7 is a set of common interfaces defined by PHP Framework Interop Group. These interfaces are representing HTTP messages, and URIs for use when communicating trough HTTP.

Any web application using this set of interfaces is a PSR-7 application.

<https://github.com/guzzle/psr7>

## Libraries

<https://github.com/chriskacerguis/codeigniter-restserver>

A fully RESTful server implementation for CodeIgniter using one library, one config file and one controller.

[**https://github.com/guzzle/guzzle**](https://github.com/guzzle/guzzle)

Guzzle, an extensible PHP HTTP client

Guzzle is a PHP HTTP client that makes it easy to send HTTP requests and trivial to integrate with web services.

- Simple interface for building query strings, POST requests, streaming large uploads, streaming large downloads, using HTTP cookies, uploading JSON data, etc...
- Can send both synchronous and asynchronous requests using the same interface.
- Uses PSR-7 interfaces for requests, responses, and streams. This allows you to utilize other PSR-7 compatible libraries with Guzzle.
- Supports PSR-18 allowing interoperability between other PSR-18 HTTP Clients.
- Abstracts away the underlying HTTP transport, allowing you to write environment and transport agnostic code; i.e., no hard dependency on cURL, PHP streams, sockets, or non-blocking event loops.
- Middleware system allows you to augment and compose client behavior.
