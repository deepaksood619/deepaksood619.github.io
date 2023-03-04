# 18. Interprocess Communication and Networking

- [18.1.socket - Low-level networking interface](https://docs.python.org/3/library/socket.html)
- [18.2.ssl - TLS/SSL wrapper for socket objects](https://docs.python.org/3/library/ssl.html)
- [18.3.select - Waiting for I/O completion](https://docs.python.org/3/library/select.html)
- [18.4.selectors - High-level I/O multiplexing](https://docs.python.org/3/library/selectors.html)
- [18.5.asyncio - Asynchronous I/O, event loop, coroutines and tasks](https://docs.python.org/3/library/asyncio.html)
- [18.6.asyncore - Asynchronous socket handler](https://docs.python.org/3/library/asyncore.html)
- [18.7.asynchat - Asynchronous socket command/response handler](https://docs.python.org/3/library/asynchat.html)
- [18.8.signal - Set handlers for asynchronous events](https://docs.python.org/3/library/signal.html)
- [18.9.mmap - Memory-mapped file support](https://docs.python.org/3/library/mmap.html)

## Useasynciowhen you can, threadingwhen you must

## Async

Task switching is very light using Async, even more light than calling python functions. This is because it uses generators under the hood, generators stores all of their state and to turn a generator back on we just need to call that generator and say keep going and it takes less time to do that than a function because the function has to built up the state build a new stack frame on every call whereas a generator already has a stack frame and picks up where it left off.

## 18.5 asyncio - Asynchronous I/O, event loop, coroutines and tasks

This module provides infrastructure for writing single-threaded concurrent code using coroutines, multiplexing I/O access over sockets and other resources, running network clients and servers, and other related primitives. Here is a more detailed list of the package contents:

- a pluggable [event loop](https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-event-loop) with various system-specific implementations;
- [transport](https://docs.python.org/3/library/asyncio-protocol.html#asyncio-transport) and [protocol](https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol) abstractions (similar to those in [Twisted](https://twistedmatrix.com/trac/));
- concrete support for TCP, UDP, SSL, subprocess pipes, delayed calls, and others (some may be system-dependent);
- a [Future](https://docs.python.org/3/library/asyncio-task.html#asyncio.Future) class that mimics the one in the [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html#module-concurrent.futures) module, but adapted for use with the event loop;
- coroutines and tasks based onyieldfrom([PEP 380](https://www.python.org/dev/peps/pep-0380)), to help write concurrent code in a sequential fashion;
- cancellation support for [Future](https://docs.python.org/3/library/asyncio-task.html#asyncio.Future) s and coroutines;
- [synchronization primitives](https://docs.python.org/3/library/asyncio-sync.html#asyncio-sync) for use between coroutines in a single thread, mimicking those in the [threading](https://docs.python.org/3/library/threading.html#module-threading) module;
- an interface for passing work off to a threadpool, for times when you absolutely, positively have to use a library that makes blocking I/O calls.

## References

<https://geekflare.com/python-asynchronous-web-frameworks>

<https://blog.miguelgrinberg.com/post/sync-vs-async-python-what-is-the-difference>

[**https://github.com/timofurrer/awesome-asyncio**](https://github.com/timofurrer/awesome-asyncio)

<https://yeray.dev/python/asyncio/asyncio-for-the-working-python-developer>

<https://www.asyncapi.com>

<https://docs.python.org/3/library/asyncio.html>

<https://docs.python.org/3/library/asyncio-task.html>

Getting started with examples - <https://hackernoon.com/asyncio-for-the-working-python-developer-5c468e6e2e8e>

<https://medium.freecodecamp.org/a-guide-to-asynchronous-programming-in-python-with-asyncio-232e2afa44f6>

All terms explained - <http://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio>

Python Socket Programming - <http://krondo.com/slow-poetry-and-the-apocalypse>

<https://redislabs.com/blog/async-await-programming-basics-python-examples>

[How To Easily Do Asynchronous Programming With Asyncio In Python](https://www.youtube.com/watch?v=2IW-ZEui4h4)

<https://github.com/hzlmn/diy-async-web-framework>

Learn how modern async web frameworks work, by writing simple clone from scratch

## AIOHTTP

Asynchronous HTTP Client/Server for asyncioand Python.

```python
pip install aiohttp [speedups]

import asyncio

import time

import aiohttp

async def download_site(session, url):

async with session.get(url) as response:

print("Read {0} from {1}".format(response.content_length, url))

res_text = await response.text()

print(f"{i} {url} {response.status} {res_text}n")

async def download_all_sites(sites):

# 6 hours of timeout for the whole process

timeout = aiohttp.ClientTimeout(total=21600)

async with aiohttp.ClientSession(

connector=aiohttp.TCPConnector(limit=15), timeout=timeout

) as session:

tasks = []

for url in sites:

task = asyncio.ensure_future(download_site(session, url))

tasks.append(task)

await asyncio.gather(*tasks, return_exceptions=True)

if **name** == "**main**":

sites = [

"<https://www.jython.org>",

"<http://olympus.realpython.org/dice>",

] * 80

start_time = time.time()

asyncio.get_event_loop().run_until_complete(download_all_sites(sites))

duration = time.time() - start_time

print(f"Downloaded {len(sites)} sites in {duration} seconds")

## # default number of sessions = 100

Can be changed - async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(limit=10)) as session:
```

<https://realpython.com/python-concurrency>
<https://realpython.com/async-io-python>
<https://docs.aiohttp.org/en/stable>
<https://aiohttp-demos.readthedocs.io/en/latest/index.html>
<https://www.roguelynn.com/words/asyncio-we-did-it-wrong>

## Questions

- How to catch and print exceptions
