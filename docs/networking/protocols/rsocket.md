---
slug: /networking/protocols/rsocket
title: Understanding RSocket Protocol
description: Explore RSocket, a binary protocol enabling advanced message passing across various transports for efficient communication.
created: 2023-03-05
last_update: 2023-12-05
---
RSocket is a binary protocol for use on byte stream transports such as TCP, WebSockets, and Aeron.
It enables the following symmetric interaction models via async message passing over a single connection:

- request/response (stream of 1)
- request/stream (finite stream of many)
- fire-and-forget (no response)
- channel (bi-directional streams)
It supports session resumption, to allow resuming long-lived streams across different transport connections. This is particularly useful for mobile⬄server communication when network connections drop, switch, and reconnect frequently.
RSocketis an application protocol initially developed by [Netflix](https://en.wikipedia.org/wiki/Netflix), that supports [Reactive Streams](https://en.wikipedia.org/wiki/Reactive_Streams). The motivation behind its development was to replace hypertext transfer protocol [(HTTP](https://en.wikipedia.org/wiki/HTTP)), which is inefficient for many tasks such as [microservices](https://en.wikipedia.org/wiki/Microservice) communication, with a protocol that has less overhead.
Alternative - grpc

http://rsocket.io

https://en.wikipedia.org/wiki/Rsocket

https://github.com/rsocket/rsocket
