# Gunicorn

[Gunicorn](http://gunicorn.org/) was inspired by Ruby's Unicorn server (hence the name). It modestly claims that it is "simply implemented, light on server resources, and fairly speedy." Unlike Bjoern and CerryPy, Gunicorn is a standalone server. "WORKER_COUNT" was set to be **twice the number of available of processors, plus one**. This was based on a recommendation from Gunicorn's documentation.

## Async Workers

You may also want to install [Eventlet](http://eventlet.net/) or [Gevent](http://www.gevent.org/) if you expect that your application code may need to pause for extended periods of time during request processing. Check out the [design docs](http://docs.gunicorn.org/en/stable/design.html) for more information on when you'll want to consider one of the alternate worker types.

$ pip install greenlet # Required for both
$ pip install eventlet # For eventlet workers
$ pip install gunicorn [eventlet] # Or, using extra
$ pip install gevent # For gevent workers
$ pip install gunicorn [gevent] # Or, using extra

<https://medium.com/@genchilu/brief-introduction-about-the-types-of-worker-in-gunicorn-and-respective-suitable-scenario-67b0c0e7bd62>

<http://docs.gunicorn.org/en/stable/design.html>

## Configuration

in order of least to most authoritative:

1. Framework Settings

2. Configuration File

3. Command Line

## Commands

pip install gunicorn [gevent]

gunicorn <app_file>:app -b 0.0.0.0:5000 --workers 3 -k gevent --timeout 300 --worker-connections 1000 --max-requests 1000000 --limit-request-line 8190 --access-logfile /var/log/gunicorn/access.log

gunicorn app:app -b 0.0.0.0:5000 --workers 3 -k gevent --timeout 300 --worker-connections 1000 --max-requests 1000000 --limit-request-line 8190 --access-logfile '-'

gunicorn app:app -b 0.0.0.0:5000 --workers 16 -k gevent --timeout 300 --worker-connections 1000 --graceful-timeout 30 --keep-alive 2 --max-requests 1000000 --max-requests-jitter 100 --limit-request-line 0 --access-logfile '-' --error-logfile '-' --log-level 'info' --access-logformat '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

<https://docs.gunicorn.org/en/stable/settings.html>

<https://github.com/benoitc/gunicorn/blob/master/examples/example_config.py>

## Enhancements

- use/dev/shminstead of/tmp
- start at least two workers, and probably also start a number of threads using
- thegthreadworker backend when running in a container
- gunicorn --log-file=- ...
- you don't always need nginx or another proxy in front Gunicorn

Gunicorn should only need 4-12 worker processes to handle hundreds or thousands of requests per second.

Gunicorn relies on the operating system to provide all of the load balancing when handling requests. Generally we recommend(2x$num_cores)+1as the number of workers to start off with. While not overly scientific, the formula is based on the assumption that for a given core, one worker will be reading or writing from the socket while the other worker is processing a request.

## Timeout

The gunicorn documentation is not entierly clear to me on this point. For --timeout it says that Workers silent for more than this many seconds are killed and restarted. But it seems that workers are killed after 30sec even though they still produce data?

By silent, we mean silent from the perspective of the arbiter process, which communicates with the workers through a temporary file. If the worker is busy sending data, it does not update that file. From the perspective of the arbiter, the worker is missing heartbeats.

## Architecture

Gunicorn's main process starts one or more worker processes, and restarts them if they die. To ensure the workers are still alive, Gunicorn has a heartbeat system - which works by using a file on the filesystem. Gunicorn therefore recommends that this file be stored in a memory-only part of the filesystem.

- Gunicorn starts a single master process that gets forked, and the resulting child processes are the workers.
- The role of the master process is to make sure that the number of workers is the same as the ones defined in the settings. So if any of the workers die, the master process starts another one, by forking itself again.
- The role of the workers is to handle HTTP requests.
- Thepreinpre-forkedmeans that the master process creates the workers before handling any HTTP request.
- The OS kernel handles load balancing between worker processes.

<https://pythonspeed.com/articles/gunicorn-in-docker>

## Setting up workers

1. If the application is [I/O bounded](https://en.wikipedia.org/wiki/I/O_bound), the best performance usually comes from using "pseudo-threads" (gevent or asyncio). As we have seen, Gunicorn supports this programming paradigm by setting the appropriateworker classand adjusting the value ofworkersto(2*CPU)+1.

2. If the application is [CPU bounded](https://en.wikipedia.org/wiki/CPU-bound), it doesn't matter how many concurrent requests are handled by the application. The only thing that matters is the number of parallel requests. Due to [Python's GIL](https://wiki.python.org/moin/GlobalInterpreterLock), threads and "pseudo-threads" cannot run in parallel. The only way to achieve parallelism is to increaseworkersto the suggested(2*CPU)+1, understanding that the maximum number of parallel requests is the number of cores.

3. If there is a concern about the application [memory footprint](https://en.wikipedia.org/wiki/Memory_footprint), usingthreadsand its correspondinggthread worker classin favor ofworkersyields better performance because the application is loaded once per worker and every thread running on the worker shares some memory, this comes to the expense of some additional CPU consumption.

4. If you don't know you are doing, start with the simplest configuration, which is only settingworkersto(2*CPU)+1and don't worry aboutthreads. From that point, it's all trial and error with benchmarking. If the bottleneck is memory, start introducing threads. If the bottleneck is I/O, consider a different python programming paradigm. If the bottleneck is CPU, consider using more cores and adjusting theworkersvalue.

<https://medium.com/building-the-system/gunicorn-3-means-of-concurrency-efbb547674b7>
