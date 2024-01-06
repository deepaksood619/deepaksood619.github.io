# REST Representational State Transfer / RESTFul

REST + JSON over HTTP
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.

## SEPARATION OF CLIENT AND SERVER

In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other.
By using a REST interface, different clients hit the same REST endpoints, perform the same actions, and receive the same responses.

## STATELESSNESS

Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages.

## MAKING REQUESTS

REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

- an HTTP verb, which defines what kind of operation to perform
- aheader, which allows the client to pass along information about the request
- a path to a resource
- an optional message body containing data

## Versioning

```bash
/api/v1/article/1234

/api/v2/article/1234
```

## HTTP Request Methods / Verbs

### [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

### [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)

The HEAD method asks for a response identical to that of a GET request, but without the response body.

### [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)

The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

### [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)

The PUT method replaces all current representations of the target resource with the request payload.

### [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)

The DELETE method deletes the specified resource.

### [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)

The CONNECT method establishes a tunnel to the server identified by the target resource.

### [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)

The OPTIONS method is used to describe the communication options for the target resource.

### [TRACE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE)

The TRACE method performs a message loop-back test along the path to the target resource.

### [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)

The PATCH method is used to apply partial modifications to a resource.

## Headers AND Accept Parameters

1. Accept: type of content that client is able to receive, it ensures that the server does not send data that cannot be understood or processed by the client. Options are MIME Types
2. Paths

## Request Headers

- **Referer header** -tells the URL from where the request has originated
- **User-Agent header** -additional information about the browser being used to generate the request
- **Host header** -uniquely identifies a host name; it is necessary when multiple web pages are hosted on the same server
- **Cookie header** -submits additional parameters to the client

## Response Headers

- **Server header** -information about which web server software is being used
- **Set-Cookie header** -issues the cookie to the browser
- **Message body** -it is common for an HTTP response to hold a message body
- **Content-Length header** -tells the size of the message body in bytes

EX - If we wanted to view all customers, the request would look like this:

GET http://fashionboutique.com/customers

Accept: application/json

A possible response header would look like:

Status Code: 200 (OK)

Content-type: application/json

followed by the customers data requested in application/json format.

### Idempotent

An idempotent HTTP method is a HTTP method that can be called many times without different outcomes

### Safe

Safe methods are HTTP methods that do not modify resources

| **HTTP Method** | **Idempotent** | **Safe** |
|-----------------|----------------|----------|
| OPTIONS         | Yes            | Yes      |
| GET             | Yes            | Yes      |
| HEAD            | Yes            | Yes      |
| PUT             | Yes            | No       |
| POST            | No             | No       |
| DELETE          | Yes            | No       |
| PATCH           | No             | No       |

https://www.codecademy.com/articles/what-is-rest

## Form content types

### application/x-www-form-urlencoded

This is the default content type. Forms submitted with this content type must be encoded as follows:

1. Control names and values are escaped. Space characters are replaced by`+', and then reserved characters are escaped as described in [[RFC1738]](https://www.w3.org/TR/html401/references.html#ref-RFC1738), section 2.2: Non-alphanumeric characters are replaced by`%HH', a percent sign and two hexadecimal digits representing the ASCII code of the character. Line breaks are represented as "CR LF" pairs (i.e.,`%0D%0A').

2. The control names/values are listed in the order they appear in the document. The name is separated from the value by = and name/value pairs are separated from each other by`&'.

### multipart/form-data

The content type `application/x-www-form-urlencoded` is inefficient for sending large quantities of binary data or text containing non-ASCII characters. The content type "multipart/form-data" should be used for submitting forms that contain files, non-ASCII data, and binary data.

- If you want to send simple text/ ASCII data, then `x-www-form-urlencoded` will work. This is the default.
- You can use Raw if you want to send plain text or JSON or any other kind of string. Like the name suggests, Postman sends your raw string data as it is without modifications. The type of data that you are sending can be set by using the content-type header from the drop down.
- Binary can be used when you want to attach non-textual data to the request, e.g. a video/audio file, images, or any other binary data file.

### Request body

While constructing requests, you would be dealing with the request body editor a lot. Postman lets you send almost any kind of HTTP request. The body editor is divided into 4 areas and has different controls depending on the body type.

### form-data

multipart/form-data is the default encoding a web form uses to transfer data.This simulates filling a form on a website, and submitting it. The form-data editor lets you set key/value pairs (using the key-value editor) for your data. You can attach files to a key as well. Do note that due to restrictions of the HTML5 spec, files are not stored in history or collections. You would have to select the file again at the time of sending a request.

### urlencoded

This encoding is the same as the one used in URL parameters. You just need to enter key/value pairs and Postman will encode the keys and values properly. Note that you can not upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

### raw

A raw request can contain anything. Postman doesn't touch the string entered in the raw editor except replacing environment variables. Whatever you put in the text area gets sent with the request. The raw editor lets you set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually as well. Normally, you would be sending XML or JSON data here.

### binary

binary data allows you to send things which you can not enter in Postman. For example, image, audio or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.

http://restcookbook.com

## Six Contraints

- Uniform Interface
- Stateless
- Client-server
- Cacheable
- Layered system
- Code on demand

## Resource Based

- Things vs actions
- Nouns vs verbs
- Versus SOAP-RPC
- Identified by URIs
  - Multiple URIs may refer to same resource
- Separate from their representation(s)

## Representations

- How resources get manipulated
- Part of the resource state
  - Transferred between client and server
- Typically JSON or XML
- Example:
  - Resource: person (Todd)
  - Service: contact information (GET)
  - Representation:
    - name, address, phone number
    - JSON or XML format

## Uniform Interface Contraint

- Defines the interface between client and server
- Simplifies and decouples the architecture
- Fundamental to RESTful design
  - HTTP verbs (GET, PUT, POST, DELETE)
  - URIs (resource name)
  - HTTP response (status, body)

## Stateless

- Server contains no client state
- Each request contains enough context to process the message
  - Self-descriptive messages
- Any session state is held on the client

## Client-Server

- Assume a disconnected system
- Separation of concerns
- Uniform interface is the link between the two

## Cacheable

- Server responses (representations) are cacheable
  - Implicitly
  - Explicitly
  - Negotiated

## Layered System

- Client can't assume direct connection to server
- Software or hardware intermediaries between client and server
- Improves scalability

## Code on Demand

- Server can temporily extend client
- Transfer logic to client
- Client executes logic
- For examples:
  - Java applets
  - JavaScript
- The only optional constraint

## Summary

- Violating any constraint other than Code on Demand means service is not strictly RESTful
  - Example: Three-legged OAUTH2
- Compliance with REST constraints allow:
  - Scalability
  - Simplicity
  - Modifiability
  - Visibility
  - Portability
  - Reliability

https://www.restapitutorial.com/lessons/whatisrest.html

## Best Practices

Producing a great API is 80% art and 20% science. Creating a URL hierarchy representing sensible resources is the art part. Having sensible resource names (which are just URL paths, such as /customers/12345/orders) improves the clarity of what a given request does.

Appropriate resource names provide context for a service request, increasing understandability of the API. Resources are viewed hierarchically via their URI names, offering consumers a friendly, easily-understood hierarchy of resources to leverage in their applications.
Here are some quick-hit rules for URL path (resource name) design:

- Use identifiers in your URLs instead of in the query-string. Using URL query-string parameters is fantastic for filtering, but not for resource names.
  - **Good:**/users/12345
  - **Poor:**/api?type=user&id=23
- Leverage the hierarchical nature of the URL to imply structure.
- Design for your clients, not for your data.
- Resource names should be nouns. Avoid verbs as resource names, to improve clarity. Use the HTTP methods to specify the verb portion of the request.
- Use plurals in URL segments to keep your API URIs consistent across all HTTP methods, using the collection metaphor.
  - **Recommended:** `/customers/33245/orders/8769/lineitems/1`
  - **Not:** `/customer/33245/order/8769/lineitem/1`
- Avoid using collection verbiage in URLs. For example 'customer_list' as a resource. Use pluralization to indicate the collection metaphor (e.g. customers vs. customer_list).
- Use lower-case in URL segments, separating words with underscores (`_`) or hyphens ('-'). Some servers ignore case so it's best to be clear.
- Keep URLs as short as possible, with as few segments as makes sense.

https://www.restapitutorial.com/lessons/restquicktips.html

https://www.restapitutorial.com/lessons/restfulresourcenaming.html

## API Authentication

https://medium.com/data-rebels/fastapi-authentication-revisited-enabling-api-key-authentication-122dc5975680

## Others

HATEOAS (Hypermedia As The Engine Of Application State, is a constraint of the REST application architecture that distinguishes it from most other network application architectures. The principle is that a client interacts with a network application entirely through hypermedia provided dynamically by application servers)

http://restcookbook.com/Basics/hateoas

## References

https://medium.com/@liran.tal/a-comprehensive-guide-to-contract-testing-apis-in-a-service-oriented-architecture-5695ccf9ac5a

https://blog.feathersjs.com/design-patterns-for-modern-web-apis-1f046635215

- **Service layer:** A protocol independent interface to our application logic
- **REST:** An architectural design principle for creating web APIs
- **RESTful services:** A service layer that follows the REST architecture and HTTP protocol methods
- **Middleware:** Reusable functions that can control the flow of data and trigger additional functionality when interacting with REST services
- **Real-time:** A set of events that can be sent automatically when following the REST architecture

![improve-api-performance](../../media/Pasted%20image%2020231224140824.png)
