# Celery

Celery is an asynchronous task queue/job queue based on distributed message passing. It is focused on real-time operation, but supports scheduling as well.

The execution units, called tasks, are executed concurrently on a single or more worker servers using multiprocessing, [Eventlet](http://eventlet.net/), or [gevent](http://gevent.org/). Tasks can execute asynchronously (in the background) or synchronously (wait until ready).

## Task Queue

Task queues are used as a mechanism to distribute work across threads or machines.

A task queue's input is a unit of work, called a task, dedicated worker processes then constantly monitor the queue for new work to perform.

Celery communicates via messages, usually using a broker to mediate between clients and workers. To initiate a task a client puts a message on the queue, the broker then delivers the message to a worker.

A Celery system can consist of multiple workers and brokers, giving way to high availability and horizontal scaling.

Celery is written in Python, but the protocol can be implemented in any language. In addition to Python there's [node-celery](https://github.com/mher/node-celery) for Node.js, and a [PHP client](https://github.com/gjedeer/celery-php).

Language interoperability can also be achieved by using webhooks in such a way that the client enqueues an URL to be requested by a worker.

#### Brokers

- [RabbitMQ](https://docs.celeryproject.org/en/stable/getting-started/brokers/rabbitmq.html#broker-rabbitmq)
- [Redis](https://docs.celeryproject.org/en/stable/getting-started/brokers/redis.html#broker-redis)
- [Amazon SQS](https://docs.celeryproject.org/en/stable/getting-started/brokers/sqs.html#broker-sqs)
- The recommended [message brokers](https://en.wikipedia.org/wiki/Message_broker) are [RabbitMQ](https://en.wikipedia.org/wiki/RabbitMQ) or [Redis](https://en.wikipedia.org/wiki/Redis).

#### Concurrency

- prefork (multiprocessing),
- [Eventlet](http://eventlet.net/), [gevent](http://gevent.org/)
- thread (multithreaded)
- solo(single threaded)

#### Result Stores

- AMQP, Redis
- Memcached,
- SQLAlchemy, Django ORM
- Apache Cassandra, Elasticsearch, Riak
- MongoDB, CouchDB, Couchbase, ArangoDB
- Amazon DynamoDB, Amazon S3
- Microsoft Azure Block Blob, Microsoft Azure Cosmos DB
- File system

#### Serialization

- pickle, json, yaml, msgpack.
- zlib, bzip2compression.
- Cryptographic message signing.

#### States

- celery.states.FAILURE = 'FAILURE' - Task failed
- celery.states.PENDING = 'PENDING' - Task state is unknown (assumed pending since you know the id).
- celery.states.RECEIVED = 'RECEIVED' - Task was received by a worker (only used in events).
- celery.states.RETRY = 'RETRY' - Task is waiting for retry.
- celery.states.REVOKED = 'REVOKED' - Task was revoked.
- celery.states.STARTED = 'STARTED' - Task was started by a worker (task_track_started).
- celery.states.SUCCESS = 'SUCCESS' - Task succeeded
- celery.states.precedence(state: str) → int - Get the precedence index for state.

[States — Celery 5.4.0 documentation](https://docs.celeryq.dev/en/stable/reference/celery.states.html)

## Features

#### Monitoring

A stream of monitoring events is emitted by workers and is used by built-in and external tools to tell you what your cluster is doing -- in real-time.

#### Work-flows

Simple and complex work-flows can be composed using a set of powerful primitives we call the "canvas", including grouping, chaining, chunking, and more.

#### Time & Rate Limits

You can control how many tasks can be executed per second/minute/hour, or how long a task can be allowed to run, and this can be set as a default, for a specific worker or individually for each task type.

#### Scheduling

You can specify the time to run a task in seconds or a [datetime](https://docs.python.org/dev/library/datetime.html#datetime.datetime), or you can use periodic tasks for recurring events based on a simple interval, or Crontab expressions supporting minute, hour, day of week, day of month, and month of year.

#### Resource Leak Protection

The [--max-tasks-per-child](https://docs.celeryproject.org/en/stable/reference/celery.bin.worker.html#cmdoption-celery-worker-max-tasks-per-child) option is used for user tasks leaking resources, like memory or file descriptors, that are simply out of your control.

#### User Components

Each worker component can be customized, and additional components can be defined by the user. The worker is built up using "bootsteps" - a dependency graph enabling fine grained control of the worker's internals.

## Celery beat

Scenario - You just launched your product and you need to send recommendations to your users about new products on your platform. You'll send these on the basis of their purchase history each weekend

The above task can be easily performed using a cron job. It is easily configurable in every framework. The important thing to bear in mind is that you should not put the cron jobs directly in the crontab file of your server. You should let the framework handle it.

This is because the deployment engineer/Devops engineer should be the only person to have access to the system like this for security reasons. Although you don't have to implement it this way it's a good to have thing from the beginning.

In the Django world, you can use celerybeat to configure your crons using celery workers.

https://docs.celeryproject.org/en/latest/userguide/periodic-tasks.html

https://django-celery-beat.readthedocs.io/en/latest

https://markgituma.medium.com/kubernetes-local-to-production-with-django-4-celery-with-redis-and-flower-df48ab9896b7

https://testdriven.io/blog/django-celery-periodic-tasks

## User Guide

- [Application](https://docs.celeryproject.org/en/stable/userguide/application.html)
- [Tasks](https://docs.celeryproject.org/en/stable/userguide/tasks.html)
- [Calling Tasks](https://docs.celeryproject.org/en/stable/userguide/calling.html)
- [Canvas: Designing Work-flows](https://docs.celeryproject.org/en/stable/userguide/canvas.html)
- [Workers Guide](https://docs.celeryproject.org/en/stable/userguide/workers.html)
- [Daemonization](https://docs.celeryproject.org/en/stable/userguide/daemonizing.html)
- [Periodic Tasks](https://docs.celeryproject.org/en/stable/userguide/periodic-tasks.html)
- [Routing Tasks](https://docs.celeryproject.org/en/stable/userguide/routing.html)
- [**Monitoring and Management Guide**](https://docs.celeryproject.org/en/stable/userguide/monitoring.html)
- [Security](https://docs.celeryproject.org/en/stable/userguide/security.html)
- [Optimizing](https://docs.celeryproject.org/en/stable/userguide/optimizing.html)
- [Debugging](https://docs.celeryproject.org/en/stable/userguide/debugging.html)
- [Concurrency](https://docs.celeryproject.org/en/stable/userguide/concurrency/index.html)
- [Signals](https://docs.celeryproject.org/en/stable/userguide/signals.html)
- [Testing with Celery](https://docs.celeryproject.org/en/stable/userguide/testing.html)
- [Extensions and Bootsteps](https://docs.celeryproject.org/en/stable/userguide/extending.html)
- [Configuration and defaults](https://docs.celeryproject.org/en/stable/userguide/configuration.html)
- [Documenting Tasks with Sphinx](https://docs.celeryproject.org/en/stable/userguide/sphinx.html)

## Example

[**https://github.com/yolossn/flask-celery-microservice**](https://github.com/yolossn/flask-celery-microservice)

[**https://learnk8s.io/scaling-celery-rabbitmq-kubernetes**](https://learnk8s.io/scaling-celery-rabbitmq-kubernetes)

Full journey for a single request is:

1. The user requests a report to the Flask app
2. The Flask app submits the task to the queue. The job is recorded in the database
3. The app also replies to the user with the id of the task
4. A worker picks up the job and runs it to completion
5. The job is marked as completed in the database
6. The user retrieves the report. The report is ready

## References

- http://www.celeryproject.org
- http://eventlet.net
- https://django-celery.readthedocs.io/en/2.4/introduction.html
- https://medium.com/squad-engineering/two-years-with-celery-in-production-bug-fix-edition-22238669601d
- https://docs.celeryproject.org/projects/celery-enhancement-proposals/en/latest/draft/high-level-architecture.html
- [The Many Problems with Celery | Log Blog Kebab](https://steve.dignam.xyz/2023/05/20/many-problems-with-celery/)
- [task-aware celery worker autoscaling (+ \`pod-deletion-cost\`) · Issue #339 · airflow-helm/charts · GitHub](https://github.com/airflow-helm/charts/issues/339)
