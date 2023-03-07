# Workers

## The Celery worker

When you start a Celery worker on the command line viacelery --app=..., you just start a supervisor process. The Celery worker itself does not process any tasks. It spawns child processes (or threads) and deals with all the book keeping stuff. The child processes (or threads) execute the actual tasks. These child processes (or threads) are also known as theexecution pool.

The size of the execution pool determines the number of tasks your Celery worker can process . The more processes (or threads) the worker spawns, the more tasks it can process concurrently. If you need to process as many tasks as quickly as possible, you need a bigger execution pool. At least, that is the idea.

In reality, it is more complicated. The answer to the question how big your execution pool should be, depends whether you use processes or threads. And the answer to the question whether you should use processes or threads, depends what your tasks actually do.

## The pool option

You can choose between processes or threads, using the--poolcommand line argument. Use a gevent execution pool, spawning 100 green threads (you need to pip-install gevent):

celery worker --app=worker.app --pool=gevent --concurrency=100

Celery supports four execution pool implementations

- prefork
- solo
- eventlet
- gevent

The--poolcommand line argument is optional. If not specified, Celery defaults to the prefork execution pool.

## Prefork

The prefork pool implementation is based on Python's [multiprocessing](https://docs.python.org/dev/library/multiprocessing.html#module-multiprocessing) package. It allows your Celery worker to side-step [Python's Global Interpreter Lock](https://docs.python.org/dev/glossary.html#term-global-interpreter-lock) and fully leverage multiple processors on a given machine.

You want to use the prefork pool if your tasks are CPU bound. A task is CPU bound, if it spends the majority of its time using the CPU (crunching numbers). Your task could only go faster if your CPU were faster.

The number of available cores limits the number of concurrent processes. It only makes sense to run as many CPU bound tasks in parallel as there are CPUs available. Which is why Celery defaults to the number of CPUs available on the machine, if the --concurrency argument is not set. Start a worker using the prefork pool, using as many processes as there are CPUs available:

celery worker --app=worker.app

## Solo

The solo pool is a bit of a special execution pool. Strictly speaking, the solo pool is neither threaded nor process-based. And more strictly speaking, the solo pool is not even a pool as it is always solo. And even more strictly speaking, the solo pool contradicts the principle that the worker itself does not process any tasks.

The solo pool runs inside the worker process. It runsinlinewhich means there is no bookkeeping overhead. Which makes the solo worker fast. But it also blocks the worker while it executes tasks. Which has some implications when remote-controlling workers.

celery worker --app=worker.app --pool=solo

The solo pool is an interesting option when running CPU intensive tasks in a microservices environment. In a Docker Swarm or Kubernetes context, managing the worker pool size can be easier than managing multiple execution pools. Instead of managing the execution pool size per worker(s) you manage the total number of workers.

## Eventlet and gevent

Let's say you need to execute thousands of HTTP GET requests to fetch data from external REST APIs. The time it takes to complete a single GET request depends almost entirely on the time it takes the server to handle that request. Most of the time, your tasks wait for the server to send the response, not using any CPU.

The bottleneck for this kind of task is not the CPU. The bottleneck is waiting for an Input/Output operation to finish. This is an Input/Output-bound task (I/O bound). The time the task takes to complete is determined by the time spent waiting for an input/output operation to finish.

If you run a single process execution pool, you can only handle one request at a time. It takes a long time to complete those thousands of GET requests. So you spawn more processes. But there is a tipping point where adding more processes to the execution pool has a negative impact on performance. The overhead of managing the process pool becomes more expensive than the marginal gain for an additional process.

In this scenario, spawning hundreds (or even thousands) of threads is a much more efficient way to increase capacity for I/O-bound tasks. Celery supports two thread-based execution pools: eventlet and gevent. Here, the execution pool runs in the same process as the Celery worker itself. To be precise, both eventlet and gevent use greenlets and not threads.

## Greenlets - also known as green threads, cooperative threads or coroutines - give you threads, but without using threads. Threads are managed by the operating system kernel. The operating system uses a general-purpose scheduler to switch between threads. This general-purpose scheduler is not always very efficient

Greenlets emulate multi-threaded environments without relying on any native operating system capabilities. Greenlets are managed in application space and not in kernel space. There is no scheduler pre-emptively switching between your threads at any given moment. Instead your greenlets voluntarily or explicitly give up control to one another at specified points in your code.

This makes greenlets excel at at running a huge number of non-blocking tasks. Your application can schedule things much more efficiently. For a large number of tasks this can be a lot more scalable than letting the operating system interrupt and awaken threads arbitrarily.

For us, the benefit of using a gevent or eventlet pool is that our Celery worker can do more work than it could before. This means we do not need as much RAM to scale up. This optimises the utilisation of our workers.

Start a Celery worker using a gevent execution pool with 500 worker threads (you need to pip-install gevent):

celery worker --app=worker.app --pool=gevent --concurreny=500

Start a Celery worker using a eventlet execution pool with 500 worker threads (you need to pip-install eventlet):

celery worker --app=worker.app --pool=eventlet --concurreny=500

Both pool options are based on the same concept: Spawn a greenlet pool. The difference is that --pool=gevent uses the gevent Greenlet pool (gevent.pool.Pool). Whereas --pool=eventlet uses the eventlet Greenlet pool (eventlet.GreenPool).

[gevent](http://www.gevent.org/) and [eventlet](http://eventlet.net/) are both packages that you need to pip-install yourself. There are implementation differences between the eventlet and gevent packages. Depending on your circumstances, one can perform better than the other. It is worthwhile trying out both.

## The concurrency option

To choose the best execution pool, you need to understand whether your tasks are CPU- or I/O-bound. CPU-bound tasks are best executed by a prefork execution pool. I/O bound tasks are best executed by a gevent/eventlet execution pool.

The only question remains is: how many worker processes/threads should you start? The--concurrencycommand line argument determines the number of processes/threads:

celery worker --app=worker.app --concurrency=2

This starts a worker with a prefork execution pool which is made up of two processes. For prefork pools, the number of processes should not exceed the number of CPUs.

Spawn a Greenlet based execution pool with 500 worker threads:

celery worker --app=worker.app --pool=gevent --concurrency=500

If the--concurrencyargument is not set, Celery always defaults to the number of CPUs, whatever the execution pool.

This makes most sense for the prefork execution pool. But you have to take it with a grain of salt. If there are many other processes on the machine, running your Celery worker with as many processes as CPUs available might not be the best idea.

Using the default concurrency setting in for a gevent/eventlet pool is almost outright stupid. The number of green threads it makes sense for you to run is unrelated to the number of CPUs you have at your disposal.

Another special case is the solo pool. Even though you can provide the--concurrencycommand line argument, it meaningless for this execution pool.

For these reasons, it is always a good idea to set the--concurrencycommand line argument.

## Conclusion

Celery supports two concepts for spawning its execution pool: Prefork and Greenlets. Prefork is based on multiprocessing and is the best choice for tasks which make heavy use of CPU resources. Prefork pool sizes are roughly in line with the number of available CPUs on the machine.

Tasks that perform Input/Output operations should run in a greenlet-based execution pool. Greenlets heave like threads, but are much more lightweight and efficient. Greenlet pools can scale to hundreds or even thousands of tasks .

What can you do if you have a mix of CPU and I/O bound tasks? Set up two queues with one worker processing each queue. One queue/worker with a prefork execution pool for CPU heavy tasks. And another queue/worker with a gevent or eventlet execution pool for I/O tasks. And don't forget to route your tasks to the correct queue.

<https://www.distributedpython.com/2018/10/26/celery-execution-pool>

## Eventlet

Eventlet is a concurrent networking library for Python that allows you to change how you run your code, not how you write it.

- It uses epoll or kqueue or libevent for [highly scalable non-blocking I/O](http://en.wikipedia.org/wiki/Asynchronous_I/O#Select.28.2Fpoll.29_loops).
- [Coroutines](http://en.wikipedia.org/wiki/Coroutine) ensure that the developer uses a blocking style of programming that is similar to threading, but provide the benefits of non-blocking I/O.
- The event dispatch is implicit, which means you can easily use Eventlet from the Python interpreter, or as a small part of a larger application.

It's easy to get started using Eventlet, and easy to convert existing applications to use it. Start off by looking at [examples](http://eventlet.net/doc/examples.html), [common design patterns](http://eventlet.net/doc/design_patterns.html), and the list of the [basic API primitives](http://eventlet.net/doc/basic_usage.html).

## GEvent

gevent is a [coroutine](https://en.wikipedia.org/wiki/Coroutine) based [Python](http://python.org/) networking library that uses [greenlet](https://greenlet.readthedocs.io/) to provide a high-level synchronous API on top of the [libev](http://software.schmorp.de/pkg/libev.html) or [libuv](http://libuv.org/) event loop.

## Features include

- Fast event loop based on [libev](http://software.schmorp.de/pkg/libev.html) or [libuv](http://libuv.org/).
- Lightweight execution units based on greenlets.
- API that re-uses concepts from the Python standard library (for examples there are [events](http://www.gevent.org/api/gevent.event.html#gevent.event.Event) and [queues](http://www.gevent.org/api/gevent.queue.html#gevent.queue.Queue)).
- [Cooperative sockets with SSL support](http://www.gevent.org/api/index.html#networking)
- [Cooperative DNS queries](http://www.gevent.org/dns.html) performed through a threadpool, dnspython, or c-ares.
- [Monkey patching utility](http://www.gevent.org/intro.html#monkey-patching) to get 3rd party modules to become cooperative
- TCP/UDP/HTTP servers
- Subprocess support (through [gevent.subprocess](http://www.gevent.org/api/gevent.subprocess.html#module-gevent.subprocess))
- Thread pools

gevent is [inspired by eventlet](http://blog.gevent.org/2010/02/27/why-gevent/) but features a more consistent API, simpler implementation and better performance.
