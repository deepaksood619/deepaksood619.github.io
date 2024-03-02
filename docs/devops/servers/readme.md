# Servers

- [Apache Server](devops/servers/apache-server.md)
- [Gunicorn](devops/servers/gunicorn.md)
- [NGINX](devops/servers/nginx/readme.md)
    - [NGINX Configs](devops/servers/nginx/configs.md)

## HTTPD (HTTP Daemon)

The HTTPD (HTTP Daemon) server is the one handling the requests / responses on the server side. The most common HTTPD servers are Apache or nginx for Linux and IIS for Windows

## Web Server

A request comes in and arrives at the first component - a dedicated web server. It is great at reading static files from disk (your css files for example) and handling multiple requests. When a request is not a static file, but meant for your all it gets passed on down the stack.

Examples

1. Nginx
2. Cherokee
3. Apache HTTP Server
4. Apache Tomcat
5. IIS

## Application Server

The application server gets those fancy requests and converts the information from them into Python objects which are usable by frameworks. How this is supposed to happen is described by a specification people agreed on -[WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface). (*whiskey*)

### Examples

1. Gunicorn
2. **uWSGI**
3. Bjoern
4. CherryPy
5. Meinheld
6. mod_WSGI
7. WildFly (JBoss) written in Java
8. Microsoft IIS (Internet Information Services)

![image](../../media/DevOps-Others-Servers-image1.jpg)

## Proxy Server

In computer networks, a **proxy server** is a [server](https://en.wikipedia.org/wiki/Server_(computing))(a computer system or an application) that acts as an [intermediary](https://en.wikipedia.org/wiki/Intermediary) for requests from [clients](https://en.wikipedia.org/wiki/Client_(computing)) seeking resources from other servers.A client connects to the proxy server, requesting some service, such as a file, connection, [web page](https://en.wikipedia.org/wiki/Web_page), or other resource available from a different server and the proxy server evaluates the request as a way to simplify and control its complexity.Proxies were invented to add structure and [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) to [distributed systems](https://en.wikipedia.org/wiki/Distributed_computing).

https://en.wikipedia.org/wiki/Proxy_server

## Web Accelerator

A **web accelerator** is a [proxy server](https://en.wikipedia.org/wiki/Proxy_server) that reduces [web site](https://en.wikipedia.org/wiki/Web_site)[access time](https://en.wikipedia.org/wiki/Access_time). They can be a self-contained hardware appliance or installable software.

Web accelerators may be installed on the client computer or mobile device, on ISP servers, on the server computer/network, or a combination. Accelerating delivery through compression requires some type of host-based server to collect, compress and then deliver content to a client computer.

https://en.wikipedia.org/wiki/Web_accelerator

## Python Application Servers

- [Bjoern](https://github.com/jonashaag/bjoern) describes itself as a "screamingly fast Python WSGI server" and boasts that is "the fastest, smallest and most lightweight WSGI server." We created [a small application](https://gist.github.com/omedhabib/c3c8ff74ec3993740e80d7235251e73a), using most of the library's defaults.
- [CherryPy](http://cherrypy.org/) is an extremely popular and stable WSGI framework and server.
- [Gunicorn](http://gunicorn.org/) was inspired by Ruby's Unicorn server (hence the name). It modestly claims that it is "simply implemented, light on server resources, and fairly speedy." Unlike Bjoern and CerryPy, Gunicorn is a standalone server. "WORKER_COUNT" was set to be twice the number of available of processors, plus one. This was based on a recommendation from Gunicorn's documentation.
- [Meinheld](http://meinheld.org/) is a "high-performance WSGI-compliant web server" that claims to be lightweight. Based on the example listed on its website, we constructed [this application](https://gist.github.com/omedhabib/d638e213af0f843580e5ca7724005ac6).
- [mod_wsgi](http://www.modwsgi.org/) is authored by the same creator as mod_python. Like mod_python, it is only available for Apache. However, it includes a tool called "mod_wsgi express" that transparently configures a minimal instance of Apache. we configured and used mod_wsgi-express [with this command](https://gist.github.com/omedhabib/8f0e6f7d0103780d3f6f0f73108a86b2). To be consistent with Gunicorn (and in lieu of any official recommendation), we configured mod_wsgi to create twice as many workers as there are processors.
- [uWSGI](https://uwsgi-docs.readthedocs.org/en/latest/) is a fully-featured application server. Generally, uWSGI is paired with a reverse proxy (such as Nginx).

## uWSGI

uWSGI is a [software application](https://en.wikipedia.org/wiki/Software_application) that "aims at developing a full stack for building [hosting services](https://en.wikipedia.org/wiki/Hosting_services)".It is named after the [Web Server Gateway Interface](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface)(WSGI), which was the first plugin supported by the project.

uWSGI is often used for serving [Python](https://en.wikipedia.org/wiki/Python_(programming_language))[web applications](https://en.wikipedia.org/wiki/Web_applications) in conjunction with [web servers](https://en.wikipedia.org/wiki/Web_server) such as [Cherokee](https://en.wikipedia.org/wiki/Cherokee_(web_server)) and [Nginx](https://en.wikipedia.org/wiki/Nginx), which offer direct support for uWSGI's native uwsgi protocol.

The uWSGI project aims at developing a full stack for building hosting services.

Application servers (for various programming languages and protocols), proxies, process managers and monitors are all implemented using a common api and a common configuration style.

Thanks to its pluggable architecture it can be extended to support more platforms and languages.

Currently, you can write plugins in C, C++ and Objective-C.

The "WSGI" part in the name is a tribute to the namesake Python standard, as it has been the first developed plugin for the project.

Versatility, performance, low-resource usage and reliability are the strengths of the project (and the only rules followed).

https://uwsgi-docs.readthedocs.io/en/latest

## WSGI (whiz-gee with a hard 'g' or 'whiskey')

Web Server Gateway Interface (WSGI) is a simple calling convention for web servers to forward request to web applications or frameworks written in Python Programming Language.

The WSGI has two sides:

- the server/gateway side - This is often a full web server as Apache or Nginx, or a lightweight application server that can communicate with a webserver, such as flup
- the application/framework side - This is a Python callable, supplied by the Python program or framework

Between the server and the application, there may be one or more WSGI middleware components, which implement both side of the API

### Why WSGI

- WSGI servers are designed to handle many requests concurrently. Frameworks are not made to process thousands of requests and determine how to best route them from the server.
- WSGI speeds up Python web application development because you only need to know basic things about WSGI. If you use TurboGears, Django or CherryPy, you do not need to be concerned about how your particular framework utilizes the WSGI standard. However, you will benefit by understanding how WSGI is implemented.
- WSGI gives you the [flexibility of changing](https://www.python.org/dev/peps/pep-0333/#rationale-and-goals) web stack components for alternatives without changing the application that runs with WSGI.

## ASGI (Asynchronous Server Gateway Interface)

ASGI (Asynchronous Server Gateway Interface) is a spiritual successor to WSGI, intended to provide a standard interface between async-capable Python web servers, frameworks, and applications.

Where WSGI provided a standard for synchronous Python apps, ASGI provides one for both asynchronous and synchronous apps, with a WSGI backwards-compatibility implementation and multiple servers and application frameworks.

### How does ASGI work?

ASGI is structured as a single, asynchronous callable. It takesscope, which contains details about the incoming request, send, an awaitable that lets you send events to the client, andreceive, an awaitable which lets you receive events from the client.

This not only allows multiple incoming events and outgoing events for each application, but also allows for a background coroutine so the application can do other things (such as listening for events on an external trigger, like a Redis queue).

### Rationale

The WSGI specification has worked well since it was introduced, and allowed for great flexibility in Python framework and web server choice. However, its design is irrevocably tied to the HTTP-style request/response cycle, and more and more protocols that do not follow this pattern are becoming a standard part of web programming (most notably, WebSocket).

ASGI attempts to preserve a simple application interface, while providing an abstraction that allows for data to be sent and received at any time, and from different application threads or processes.

It also takes the principle of turning protocols into Python-compatible, asynchronous-friendly sets of messages and generalises it into two parts; a standardised interface for communication around which to build servers (this document), and a set of standard message formats for each protocol.

Its primary goal is to provide a way to write HTTP/2 and WebSocket code alongside normal HTTP handling code, however; part of this design means ensuring there is an easy path to use both existing WSGI servers and applications, as a large majority of Python web usage relies on WSGI and providing an easy path forward is critical to adoption. Details on that interoperability are covered in the ASGI-HTTP spec.

### Overview

ASGI consists of two different components:

- **A protocol server**, which terminates sockets and translates them into connections and per-connection event messages.
- **An application**, which lives inside a protocol server, is instantiated once per connection, and handles event messages as they happen.

Like WSGI, the server hosts the application inside it, and dispatches incoming requests to it in a standardized format. Unlike WSGI, however, applications are instantiated objects that are fed events rather than simple callables, and must run as asyncio-compatible coroutines (on the main thread; they are free to use threading or other processes if they need synchronous code).

Unlike WSGI, there are two separate parts to an ASGI connection:

- A connection scope, which represents a protocol connection to a user and survives until the connection closes.
- Events, which are sent to the application as things happen on the connection.

Applications are instantiated with a connection scope, and then run in an event loop where they are expected to handle events and send data back to the client.

Each application instance maps to a single incoming "socket" or connection, and is expected to last the lifetime of that connection plus a little longer if there is cleanup to do. Some protocols may not use traditional sockets; ASGI specifications for those protocols are expected to define what the scope (instance) lifetime is and when it gets shut down.

https://asgi.readthedocs.io/en/latest/introduction.html

https://www.appdynamics.com/blog/engineering/an-introduction-to-python-wsgi-servers-part-1

## Apache vs Nginx

It is important to clarify that only when you have large daily web traffic, you should be concerned about the performance of a web server. In case you have light daily web traffic, the performance of either of the web servers will not be affected. Furthermore, adding PHP-FPM to both the web server will not make a relative difference even though the actual performance will get enhanced in both cases. It is said that PHP-FPM has a better enhancement effect on Apache web server than Nginx. It is also said that Nginx is faster than Apache in most of the cases. Actually, there are two factors that determine the performance of the web servers for any given web application.

### Content Type

There are basically two types of contents applicable in the web application. One is static content that stays the same throughout the lifetime of the website session and then there is dynamic content that keeps on changing based on various triggers. The performance of the web servers varies a lot based on this content type.

Apache uses the traditional file-based methods to handle static content. This traditional method is slightly old-fashioned and that is why it has slightly low performance if you consider today's high standard of dealing with static content. On the other hand, Apache web servers give more important to dynamic content and it processes them by an embedded processor. The dynamic contents are executed with the web server and there is no need for external components. It is this ability to handle dynamic content internally that makes Apache the best performing web servers for web applications having more dynamic content.

Coming to Nginx, Nginx lacks the ability to handle dynamic content internally. It uses an external processor for such execution and there is going to be a waiting period for sending requests to external processors and getting responses which slow down the performance significantly. Configuring the communication between Nginx and external processor can also get complicated at times especially when there are too many web traffics on the application. It is somewhat a benefit in disguise. This enables Nginx to handle static content at a faster rate internally.

Verdict -- If you have a web application that has more dynamic content, go for Apache. If the static content is more, Nginx is the best option.

### Configuration

The reason why Apache is considered to be slower than Nginx in most of the cases is its repetitive configuration. Apache checks .htaccess file resides within the content directories. This helps in decentralized configuration but processing requests take a lot more time than it is the case with Nginx. Interpreting .htacceess file each time it is found on the request path is an old concept. This is more useful in content management systems or in shared hosting to allow non-privileged users to control certain aspects without full control over configuration file. Nginx, on the other hand, checks .htaccess files only on the parent directories and hence, the requests can be served faster.

Verdict -- Unless you have a website or web application where you need to give non-privilege users certain controls, you should always go for Nginx otherwise.

https://www.freelancinggig.com/blog/2018/04/25/apache-php-fpm-vs-nginx-php-fpm-performance-considerations

### File vs URI-Based Interpretation

How the web server interprets requests and maps them to actual resources on the system is another area where these two servers differ.

### Apache

Apache provides the ability to interpret a request as a physical resource on the filesystem or as a URI location that may need a more abstract evaluation. In general, for the former Apache uses `<Directory>` or `<Files>` blocks, while it utilizes `<Location>` blocks for more abstract resources.

Because Apache was designed from the ground up as a web server, the default is usually to interpret requests as filesystem resources. It begins by taking the document root and appending the portion of the request following the host and port number to try to find an actual file. Basically, the filesystem hierarchy is represented on the web as the available document tree.

Apache provides a number of alternatives for when the request does not match the underlying filesystem. For instance, anAliasdirective can be used to map to an alternative location. Using `<Location>` blocks is a method of working with the URI itself instead of the filesystem. There are also regular expression variants which can be used to apply configuration more flexibly throughout the filesystem.

While Apache has the ability to operate on both the underlying filesystem and the webspace, it leans heavily towards filesystem methods. This can be seen in some of the design decisions, including the use of.htaccessfiles for per-directory configuration. The [Apache docs](http://httpd.apache.org/docs/2.4/sections.html#whichwhen) themselves warn against using URI-based blocks to restrict access when the request mirrors the underlying filesystem.

### Nginx

Nginx was created to be both a web server and a proxy server. Due to the architecture required for these two roles, it works primarily with URIs, translating to the filesystem when necessary.

This can be seen in some of the ways that Nginx configuration files are constructed and interpreted. Nginx does not provide a mechanism for specifying configuration for a filesystem directory and instead parses the URI itself.

For instance, the primary configuration blocks for Nginx areserverandlocationblocks. Theserverblock interprets the host being requested, while thelocationblocks are responsible for matching portions of the URI that comes after the host and port. At this point, the request is being interpreted as a URI, not as a location on the filesystem.

For static files, all requests eventually have to be mapped to a location on the filesystem. First, Nginx selects the server and location blocks that will handle the request and then combines the document root with the URI, adapting anything necessary according to the configuration specified.

This may seem similar, but parsing requests primarily as URIs instead of filesystem locations allows Nginx to more easily function in both web, mail, and proxy server roles. Nginx is configured simply by laying out how to respond to different request patterns. Nginx does not check the filesystem until it is ready to serve the request, which explains why it does not implement a form of.htaccessfiles.

https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations

## Gin

Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin.

https://gin-gonic.com

https://github.com/gin-gonic/gin

## Links

[Why most TCP servers are multi threaded and how to build one from scratch - YouTube](https://www.youtube.com/watch?v=f9gUFy-9uCM&ab_channel=AsliEngineeringbyArpitBhayani)

[Cloudflare Open sources Pingora (NGINX replacement) - YouTube](https://www.youtube.com/watch?v=WpMwuo13-7w&ab_channel=HusseinNasser)
