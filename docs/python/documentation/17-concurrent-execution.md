# 17. Concurrent Execution

- [17.1.threading - Thread-based parallelism](https://docs.python.org/3/library/threading.html)
- [17.2.multiprocessing - Process-based parallelism](https://docs.python.org/3/library/multiprocessing.html)
- [17.3. Theconcurrentpackage](https://docs.python.org/3/library/concurrent.html)
- [17.4.concurrent.futures - Launching parallel tasks](https://docs.python.org/3/library/concurrent.futures.html)
- [17.5.subprocess - Subprocess management](https://docs.python.org/3/library/subprocess.html)
- [17.6.sched - Event scheduler](https://docs.python.org/3/library/sched.html)
- [17.7.queue - A synchronized queue class](https://docs.python.org/3/library/queue.html)
- [17.8.dummy_threading - Drop-in replacement for thethreadingmodule](https://docs.python.org/3/library/dummy_threading.html)
- [17.9._thread - Low-level threading API](https://docs.python.org/3/library/_thread.html)
- [17.10._dummy_thread - Drop-in replacement for the_threadmodule](https://docs.python.org/3/library/_dummy_thread.html)

## threading example

```python
import threading

counter = 0

def worker():

global counter

counter += 1

print('The count is %d' % counter)

for i in range(10):

threading.Thread(target=worker).start()
```

## Queue - A synchronized queue class

The [queue](https://docs.python.org/3/library/queue.html#module-queue) module implements multi-producer, multi-consumer queues. It is especially useful in threaded programming when information must be exchanged safely between multiple threads. The [Queue](https://docs.python.org/3/library/queue.html#queue.Queue) class in this module implements all the required locking semantics.

The module implements three types of queue, which differ only in the order in which the entries are retrieved. In aFIFOqueue, the first tasks added are the first retrieved. In aLIFOqueue, the most recently added entry is the first retrieved (operating like a stack). With a priority queue, the entries are kept sorted (using the [heapq](https://docs.python.org/3/library/heapq.html#module-heapq) module) and the lowest valued entry is retrieved first.

## PriorityQueue

```python
try:
import Queue as Q # ver. < 3.0
except ImportError:
import queue as Q

q = Q.PriorityQueue()
q.put(10)
q.put(1)
q.put(5)
while not q.empty():
print q.get(),

1 5 10

import queue as Q

q = Q.PriorityQueue()

q.put(10)

q.put(5)

q.put(2)

q.put(20)

while not q.empty():

print(q.get())

2

5

10

20

## Priority Queue can store objects such as tuples

try:
import Queue as Q # ver. < 3.0
except ImportError:
import queue as Q

q = Q.PriorityQueue()
q.put((10,'ten'))
q.put((1,'one'))
q.put((5,'five'))
while not q.empty():
print q.get(),

(1, 'one') (5, 'five') (10, 'ten')

# print a priority queue

print(q.queue)
```

<https://docs.python.org/3/library/queue.html>

## Python Parallel Processing

<https://www.machinelearningplus.com/python/parallel-processing-python>

<https://blog.floydhub.com/multiprocessing-vs-threading-in-python-what-every-data-scientist-needs-to-know>

## Ray

A fast and simple framework for building and running distributed applications. Ray is packaged with RLlib, a scalable reinforcement learning library, and Tune, a scalable hyperparameter tuning library.

<https://ray.io>

<https://github.com/ray-project/ray>

<https://towardsdatascience.com/10x-faster-parallel-python-without-python-multiprocessing-e5017c93cce1>

<https://towardsdatascience.com/modern-parallel-and-distributed-python-a-quick-tutorial-on-ray-99f8d70369b8>

## Subprocess

#### Can be used to call other compiled programs

```python
import subprocess

subprocess.call(['./helloscript.go'])
```

| **Bottleneck** | **Example**                        | **Optimize with** |
|----------------|------------------------------------|-------------------|
| IO             | Network connection, file operation | Multithreading    |
| CPU            | Complex math problem, search       | Multiprocessing   |

<https://zacs.site/blog/linear-python.html>

## sched

The [sched](https://docs.python.org/3/library/sched.html#module-sched) module defines a class which implements a general purpose event scheduler

<https://docs.python.org/3/library/sched.html>
