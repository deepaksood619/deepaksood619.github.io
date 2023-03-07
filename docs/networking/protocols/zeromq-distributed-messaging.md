# ZeroMQ: Distributed Messaging

ZeroMQ (also known as ØMQ, 0MQ, or zmq) looks like an embeddable networking library but acts like a concurrency framework. It gives you sockets that carry atomic messages across various transports like in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fan-out, pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a score of language APIs and runs on most operating systems.- Carries messages across inproc, IPC, TCP, TIPC, multicast.

- Smart patterns like pub-sub, push-pull, and router-dealer.
- High-speed asynchronous I/O engines, in a tiny library.

## References

<http://zguide.zeromq.org/page:all>

<https://www.pythonforthelab.com/blog/using-pyzmq-for-inter-process-communication-part-1>
