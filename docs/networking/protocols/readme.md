# Protocols

- [Protocols](networking/protocols/intro.md)
- [Protocols Intro](protocols-intro)
- [TCP (Connection Oriented Protocol)](tcp-connection-oriented-protocol/readme.md)
- [TCP Flow Control](tcp-connection-oriented-protocol/flow-control)
- [DNS Domain Name System](dns-domain-name-system)
- [UDP](udp)
- [HTTP / HTTPS](http-https)
- [HTTP/3 QUIC](http-3-quic)
- [WebSockets](websockets)
- [REST Representation State Transfer (Restful)](rest-representational-state-transfer-restful)
- [OpenAPI](openapi)
- [HTTP Status Code](http-status-code)
- [Messaging](messaging)
- [AMQP](amqp)
- [ZeroMQ: Distributed Messaging](zeromq-distributed-messaging)
- [Rsocket](rsocket)
- [GraphQL](graphql)
- [Open Thread](openthread)
- [Weave](weave)
- [Video / Live Streaming](video-live-streaming)
- [Others](networking/protocols/others.md)

![Different API Protocols](../../media/api-protocols_page-0001.jpg)

## Network Protocols

1. **HTTP (HyperText Transfer Protocol)** - HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol.
2. **HTTP/3** - HTTP/3 is the next major revision of the HTTP. It runs on QUIC, a new transport protocol designed for mobile-heavy internet usage. It relies on UDP instead of TCP, which enables faster web page responsiveness. VR applications demand more bandwidth to render intricate details of a virtual scene and will likely benefit from migrating to HTTP/3 powered by QUIC.
3. **HTTPS (HyperText Transfer Protocol Secure)** - HTTPS extends HTTP and uses encryption for secure communications.
4. **WebSocket** - WebSocket is a protocol that provides full-duplex communications over TCP. Clients establish WebSockets to receive real-time updates from the back-end services. Unlike REST, which always "pulls" data, WebSocket enables data to be "pushed". Applications, like online gaming, stock trading, and messaging apps leverage WebSocket for real-time communication.
5. **TCP (Transmission Control Protocol)** - TCP is is designed to send packets across the internet and ensure the successful delivery of data and messages over networks. Many application-layer protocols build on top of TCP.
6. **UDP (User Datagram Protocol)** - UDP sends packets directly to a target computer, without establishing a connection first. UDP is commonly used in time-sensitive communications where occasionally dropping packets is better than waiting. Voice and video traffic are often sent using this protocol.
7. **SMTP (Simple Mail Transfer Protocol)** - SMTP is a standard protocol to transfer electronic mail from one user to another.
8. **FTP (File Transfer Protocol)** - FTP is used to transfer computer files between client and server. It has separate connections for the control channel and data channel.

![Popular Network Protocols](../../media/Pasted%20image%2020240626162238.jpg)
