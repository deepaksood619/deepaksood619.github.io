# WebSockets

WebSocketis a computer [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol), providing [full-duplex](https://en.wikipedia.org/wiki/Full-duplex) communication channels over a single [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection. The WebSocket protocol was standardized by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) as [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) 6455 in 2011, and the WebSocket [API](https://en.wikipedia.org/wiki/Application_programming_interface) in [Web IDL](https://en.wikipedia.org/wiki/Web_IDL) is being standardized by the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium).
WebSocket is distinct from HTTP. Both protocols are located at layer 7 in the [OSI model](https://en.wikipedia.org/wiki/OSI_model) and depend on TCP at layer 4. Although they are different, [RFC 6455](https://tools.ietf.org/html/rfc6455) states that WebSocket "is designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries," thus making it compatible with the HTTP protocol. To achieve compatibility, the **WebSocket [handshake](https://en.wikipedia.org/wiki/Handshaking) uses the [HTTP Upgrade header](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header) to change from the HTTP protocol to the WebSocket protocol.**
The WebSocket protocol enables interaction between a [web browser](https://en.wikipedia.org/wiki/Web_browser)(or other client application) and a [web server](https://en.wikipedia.org/wiki/Web_server) with lower overhead than half-duplex alternatives such as HTTP polling, facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the server to send content to the client without being first requested by the client, and allowing messages to be passed back and forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the server. The communications are done over TCP [port](https://en.wikipedia.org/wiki/Port_(computer_networking)) number 80 (or 443 in the case of [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)-encrypted connections), which is of benefit for those environments which block non-web Internet connections using a [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)). Similar two-way browser-server communications have been achieved in non-standardized ways using stopgap technologies such as [Comet](https://en.wikipedia.org/wiki/Comet_(programming)).
<https://en.wikipedia.org/wiki/WebSocket>
Websockets are full bidirectional connection between hosts (once user is connected to the server, both client and server can initiate the request) (Also have sticky session, i.e. if one request from user gets to a server than all the further messages will be transfered via same server)
WebSockets are typically used to make web applications more interactive. They can be helpful when implementing social feeds, online chats, news updates, or location-based apps.
The WebSocket protocol is a rather low-level protocol. It defines how a stream of bytes is transformed into frames. A frame may contain a text or a binary message. Because the message itself does not provide any additional information on how to route or process it, It is difficult to implement more complex applications without writing additional code. Fortunately, the WebSocket specification allows using of sub-protocols that operate on a higher, application level. One of them, supported by the Spring Framework, is STOMP.
[WebSockets Crash Course](https://www.youtube.com/watch?v=2Nt-ZrNP22A)

[WebSockets in 100 Seconds & Beyond with Socket.io](https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship)

## Will WebSocket survive HTTP/2?

|               | HTTP/2                      | WebSocket         |
|----------------|-----------------------------|-------------------|
| Headers        | Compressed (HPACK)          | None              |
| Binary         | Yes                         | Binary or Textual |
| Multiplexing   | Yes                         | Yes               |
| Prioritization | Yes                         | No                |
| Compression    | Yes                         | Yes               |
| Direction      | Client/Server + Server Push | Bidirectional     |
| Full-duplex    | Yes                         | Yes               |
As we have seen above, HTTP/2 introduces [Server Push](https://en.wikipedia.org/wiki/Push_technology?oldformat=true) which enables the server to proactively send resources to the client cache. It does not, however, allow for pushing data down to the client application itself. Server pushes are only processed by the browser and do not pop up to the application code, meaning there is no API for the application to get notifications for those events.
This is where Server-Sent Events (SSE) becomes very useful. SSE is a mechanism that allows the server to asynchronously push the data to the client once the client-server connection is established. The server can then decide to send data whenever a new "chunk" of data is available. It can be considered as a one-way publish-subscribe model. It also offers a standard JavaScript client API named EventSource implemented in most modern browser as part of HTML5 standard by [W3C](https://www.w3.org/TR/eventsource/). Note that browsers that do not support [EventSource API](http://caniuse.com/#feat=eventsource) can be easily polyfilled.
Since SSE is based on HTTP, it has a natural fit with HTTP/2 and can be combined to get the best of both: HTTP/2 handling an efficient transport layer based on multiplexed streams and SSE providing the API up to the applications to enable push.
Now that we have understood what multiplexing is all about, we have to remember that SSE is HTTP based. It means that with HTTP/2, not only can several SSE streams be interleaved onto a single TCP connection, but also several SSE streams (server to client push) with several client requests (client to server). Thanks to HTTP/2 and SSE, we now have a pure HTTP bidirectional connection with a simple API to let application code register to server pushes. Lack of bidirectional capabilities have often been perceived as a major drawback when comparing SSE to WebSocket. Thanks to HTTP/2 is it no longer the case. This opens up the opportunity to skip WebSockets and stick to a HTTP based signaling.
To provide some answers to the initial question:Will WebSocket survive HTTP/2?

It certainly will, mainly because it is already well adopted and, in very specific use cases, it has an advantage as it has been built from the ground up for bidirectional capabilities with less overhead (headers). Let's say that you need to exchange a high throughput of messages from both ends, with almost as much data flow upstream than downstream (e.g Massively Multiplayer Online Game that needs to keep all their players in sync). WebSocket will probably remain a better choice.
If you consider a use case like displaying real-time market news, market data, chat application, etc, relying on HTTP/2 + SSE will provide you an efficient bidirectional communication channel and keep the huge advantage of staying in the HTTP world:

- WebSocket can often be a source of pain when considering compatibility with existing web infrastructure as it upgrades an HTTP connection to a completely different protocol that has nothing to do with HTTP.
- Scale and security: Web components (Firewalls, Intrusion Detection, Load Balancers) are built, maintained and configured with HTTP in mind, an environment that large/critical applications will prefer in terms of resiliency, security and scalability.

## Takeaways

- HTTP/2 is not a full replacement of HTTP.
- Hacks such as Domain sharding, resource inlining and image spriting will be counter-productive in an HTTP/2 world.
- HTTP/2 is not a replacement for push technologies such as WebSocket or SSE.
- HTTP/2 Push server can only be processed by browsers, not by applications.
- Combining HTTP/2 and SSE provides efficient HTTP-based bidirectional communication.
WebSocket will probably remain used but SSE and its EventSource API combined with the power of HTTP/2 will provide the same result in most use cases, just simpler.
<https://www.infoq.com/articles/websocket-and-http2-coexist>
<https://sookocheff.com/post/networking/how-do-websockets-work>

<https://ably.com/topic/websockets>

## socketio / socket.io

Bidirectional and low-latency communication for every platform

<https://github.com/socketio/socket.io>

<https://socket.io>

## Websocket vs socketio

Socketio advantages are that it simplifies the usage of WebSockets, and probably more importantly it provides fail-overs to other protocols in the event that WebSockets are not supported on the browser or server.
<https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets>

<https://davidwalsh.name/websocket>

## Django Channels
