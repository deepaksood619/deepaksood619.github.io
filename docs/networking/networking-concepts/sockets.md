# Sockets

## Socket

The first function is socket(), which creates an object called a socket. A socket is a number that a program can use to communicate with another program. In UNIX terms, it is no different from a file descriptor, which is a number that is used for reading or writing from an open file. Instead, with a socket, a program is reading (receiving) or writing (sending) from or to the network.
nc -l 8000 # for tcp listen

nc -l 8000 -u

This just tells nc to create a UDP receiver (the argument -u) that is expecting data on port 8000. Now, let's use sock object to send data to nc.

## UDP socket server in python

```python
from socket import *

sock_receiver = socket(AF_INET, SOCK_DGRAM)

sock_receiver.bind(("127.0.0.1", 8000))

sock_receiver.recv(4096)
```

## UDP socket client in python

```python
from socket import *

sock_object=socket(AF_INET, SOCK_DGRAM)

sock_object.sendto(b"hello", ("127.0.0.1", 8000))
```

## TCP socket

tcp_socket = socket(AF_INET, SOCK_STREAM)
<https://cs.nyu.edu/courses/fall17/CSCI-UA.0480-009>
