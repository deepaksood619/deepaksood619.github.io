# Redis Queues

Conceptually, a Stream in Redis is a list where you can append entries. Each entry has a unique ID and a value. The ID is auto-generated by default, and it includes a timestamp. The value is a hash. You can query ranges or use blocking commands to read entries as they come. Typical of Redis, you can combine different ingredients to get the result you need. As Niklaus Wirth once said, programs are algorithms plus data structures, and Redis already gives you a bit of both.
Redis streams are ideal for building history preserving message brokers, message queues, unified logs, and chat systems. Unlike Pub/Sub messages which are fire and forget, Redis streams preserve messages in perpetuity. Redis streams implement consumer groups, a feature that allows a group of clients to cooperate when consuming elements from a stream. For example, consumers in a group can lookup items by ID, have to acknowledge the processing of an item, or claim ownership of a pending message.

https://aws.amazon.com/redis/Redis_Streams

## Message queues

A message queue is conceptually a list. A producer pushes an element from one side, a consumer reads from the other. Multiple producers and consumers can interact with the same queue. In Redis, a rudimentary message queue can be easily implemented with the commands LPUSH (which means "push from the left") and RPOP (which means "pop from the right"). In the best-case scenario -the happy path - the consumer pops an item, works on it, and once it's done, the customer is ready to consume and process the next item. A slight improvement would be to use a blocking command for reading. So instead of RPOP you could use BRPOP. If the list is empty, the consumer blocks and waits for an element to arrive. If the timeout elapses, the consumer can retry. So far, so good for this simplistic implementation. The problem, though, doesn't lie in the happy path. The issue is what happens when a process crashes while processing an item.

## Reliable queues

A queue is reliable if it can recover from a failure scenario. If a consumer crashes and the item it was processing is lost, the system is unreliable. A command was added to a previous version of Redis that is tailor-made for this exact situation. The command is BRPOPLPUSH. It not only pops an item, as discussed in the previous implementation, but it also pushes the item to another list. With the commands LPUSH and BRPOPLPUSH, you can design a reliable message queue

https://aws.amazon.com/redis/Redis_Streams_MQ

## Queueing Solutions

1. Celery has an optional redis broker.http://celeryproject.org

2. resque is an extremely popular redis task queue using redis.https://github.com/defunkt/resque

3. RQ is a simple and small redis based queue that aims to "take the good stuff from celery and resque" and be much simpler to work with.http://python-rq.org

## RQ

RQ (Redis Queue) is a simple Python library for queueing jobs and processing them in the background with workers. It is backed by Redis and it is designed to have a low barrier to entry. It should be integrated in your web stack easily.
pip install rq

## # Application

```python
from rq.job import Job
job = redis_queue.enqueue(some_long_function, data)

job = queue.enqueue(count_words_at_url, 'http://nvie.com')
```

## Scheduling jobs

```python
# Schedule job to run at 9:15, October 10th
job = queue.**enqueue_at**(datetime(2019, 10, 8, 9, 15), say_hello)

# Schedule job to run in 10 seconds
job = queue.**enqueue_in**(timedelta(seconds=10), say_hello)

## Retrying failed jobs
from rq import Retry

# Retry up to 3 times, failed job will be requeued immediately
queue.enqueue(say_hello, retry=Retry(max=3))

# Retry up to 3 times, with configurable intervals between retries
queue.enqueue(say_hello, retry=Retry(max=3, interval=[10, 30, 60]))
```

## Some interesting job attributes include

- job.get_status()Possible values arequeued, started, deferred, finished, andfailed
- job.func_name
- job.argsarguments passed to the underlying job function
- job.kwargskey word arguments passed to the underlying job function
- **job.result**stores the return value of the job being executed, will returnNoneprior to job execution. Results are kept according to theresult_ttlparameter (500 seconds by default).
- job.enqueued_at (job.enqueued_at.isoformat())
- job.started_at (job.started_at.isoformat())
- job.ended_at
- job.exc_infostores exception information if job doesn't finish successfully.
- job.id

### get job

`job = Job.fetch(job_id, connection=redis_conn)`

### Worker

```python
# Sets up the redis connection and the redis queue.
import os

import redis

from rq import Queue
redis_conn = redis.Redis(

host=os.getenv("REDIS_HOST", "127.0.0.1"),

port=os.getenv("REDIS_PORT", "6379"),

password=os.getenv("REDIS_PASSWORD", ""),

)
redis_queue = Queue(connection=redis_conn)
If you use RQ's scheduling features, you need to run RQ workers with the scheduler component enabled

rq worker --with-scheduler
rq worker --url redis://:a6ad92769ef04b711eea18dccfff85ea@redis:6379
Commands

keys *

1) "rq:job:61cd0099-f14e-407c-b1c0-f3ce46e5ab67"
2) "rq:queue:default"
3) "rq:queues"

type rq:job:61cd0099-f14e-407c-b1c0-f3ce46e5ab67

hash

hgetall rq:job:61cd0099-f14e-407c-b1c0-f3ce46e5ab67
type rq:queue:default

list

lrange rq:queue:default 0 -1
type rq:queues

set

smembers rq:queues

https://github.com/rq/rq

https://pypi.org/project/rq

https://python-rq.org

https://python-rq.org/docs

https://python-rq.org/patterns

https://python-rq.org/patterns/django

https://python-rq.org/patterns/sentry
```

## Test app - https://github.com/edkrueger/rq-flask-template

## Tools - RQ

1. https://github.com/rq/rq-scheduler

[RQ Scheduler](https://github.com/rq/rq-scheduler) is a small package that adds job scheduling capabilities to [RQ](https://github.com/nvie/rq), a [Redis](http://redis.io/) based Python queuing library.

2. https://github.com/Parallels/rq-dashboard

rq-dashboardis a general purpose, lightweight, [Flask](https://flask.palletsprojects.com/)-based web front-end to monitor your [RQ](http://python-rq.org/) queues, jobs, and workers in realtime.

3. https://github.com/pranavgupta1234/rqmonitor

RQ Monitor is Flask based more actionable and dynamic web frontend for monitoring your RQ.

## Delayed Tasks

There are a few different ways that we could potentially add delays to our queue items. Here are the three most straightforward ones:

- We could include an execution time as part of queue items, and if a worker process sees an item with an execution time later than now, it can wait for a brief period and then re-enqueue the item.
- The worker process could have a local waiting list for any items it has seen that need to be executed in the future, and every time it makes a pass through its while loop, it could check that list for any outstanding items that need to be executed.
- Normally when we talk about times, we usually start talking about *ZSETs*. What if, for any item we wanted to execute in the future, we added it to a *ZSET* instead of a*LIST*, with its score being the time when we want it to execute? We then have a process that checks for items that should be executed now, and if there are any, the process removes it from the *ZSET*, adding it to the proper *LIST*queue.
We can't wait/re-enqueue items as described in the first, because that'll waste the worker process's time. We also can't create a local waiting list as described in the second option, because if the worker process crashes for an unrelated reason, we lose any pending work items it knew about. We'll instead use a secondaryZSETas described in the third option, because it's simple, straightforward, and we can use a lock to ensure that the move is safe.

### requiements.txt

`rpqueue==0.33.2`

### tasks.py

```python
import requests

import rpqueue

from rpqueue import task
rpqueue.set_redis_connection_settings('redis', '6379', 0, 'a6ad92769ef04b711eea18dccfff85ea')

@task
def call_sms_model(cust_id):

    payload = {'cust_id': cust_id}

    resp = requests.get('http://decision_engine:5000/score', params=payload)

    print(f'request: {cust_id}, resp status code: {resp.status_code}, text: {resp.text}')
```

### tasks_runner.py

```python
import rpqueue

from tasks import call_sms_model
rpqueue.set_redis_connection_settings('redis', '6379', 0, 'a6ad92769ef04b711eea18dccfff85ea')

rpqueue.execute_tasks(queues=None, threads_per_process=1, processes=1, wait_per_thread=1, module='tasks')

# python -m rpqueue.run --module=tasks --host=redis --port=6379 --db=0 --password=a6ad92769ef04b711eea18dccfff85ea
```

https://redislabs.com/ebook/part-2-core-concepts/chapter-6-application-components-in-redis/6-4-task-queues/6-4-2-delayed-tasks

https://github.com/josiahcarlson/rpqueue

https://josiahcarlson.github.io/rpqueue

https://github.com/Parallels/rq-dashboard
