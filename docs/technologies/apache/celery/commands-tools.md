# Commands / Tools

```bash
celery -A tasks worker --loglevel=INFO
celery worker --help
 celery --app=proj worker -l INFO
 celery -A proj worker -l INFO -Q hipri,lopri
 celery -A proj worker --concurrency=4
 celery -A proj worker --concurrency=1000 -P eventlet
 celery worker --autoscale=10,0

 celery -A tasks control rate_limit tasks.add 10/m

celery --help
 Commands:
   amqp     AMQP Administration Shell.
   beat     Start the beat periodic task scheduler.
   call     Call a task by name.
   control  Workers remote control.
  [revoke|terminate|rate_limit|time_limit|election|enable_events|disable_events|heartbeat|pool_grow|pool_shrink|pool_restart|autoscale|shutdown|add_consumer|cancel_consumer]

   events   Event-stream utilities.
   graph    The ``celery graph`` command.
   inspect  Inspect the worker at runtime.
  celery -A admin_panel inspect ping

   list     Get info from broker
  celery list

   logtool  The ``celery logtool`` command.
   migrate  Migrate tasks from one broker to another.
   multi    Start multiple worker instances.
   purge    Erase all messages from all known task queues.
   report   Shows information useful to include in bug-reports.
   result   Print the return value for a given task id.
   shell    Start shell session with convenient access to celery symbols.
   status   Show list of workers that are online.
  celery --app admin_panel status

   upgrade  Perform upgrade between versions.
   worker   Start worker instance.
```

**Major commands**

```bash
celery purge
celery status
```

```python
from celery import Celery
app = Celery('tasks', backend='redis://default:password123@localhost', broker='redis://default:password123@localhost')

@app.task
def add(x, y):
    return x + y

from tasks import add
result=add.delay(4,4)
The ready() method returns whether the task has finished processing or not:
result.ready()
False
You can wait for the result to complete, but this is rarely used since it turns the asynchronous call into a synchronous one:
result.get(timeout=1)
8
In case the task raised an exception, get() will re-raise the exception, but you can override this by specifying the propagate argument:
result.get(propagate=False)
If the task raised an exception, you can also gain access to the original traceback:
result.traceback
```

## Tools

### Flower: Celery Monitoring Tool

Flower is a web based tool for monitoring and administrating [Celery](http://celeryproject.org/) clusters

- Real-time monitoring using Celery Events
    - Task progress and history
    - Ability to show task details (arguments, start time, run-time, and more)
    - Graphs and statistics
- Remote Control
    - View worker status and statistics
    - Shutdown and restart worker instances
    - Control worker pool size and autoscale settings
    - View and modify the queues a worker instance consumes from
    - View currently running tasks
    - View scheduled tasks (ETA/countdown)
    - View reserved and revoked tasks
    - Apply time and rate limits
    - Configuration viewer
    - Revoke or terminate tasks
- HTTP API
    - List workers
    - Shut down a worker
    - Restart worker's pool
    - Grow worker's pool
    - Shrink worker's pool
    - Autoscale worker pool
    - Start consuming from a queue
    - Stop consuming from a queue
    - List tasks
    - List (seen) task types
    - Get a task info
    - Execute a task
    - Execute a task by name
    - Get a task result
    - Change soft and hard time limits for a task
    - Change rate limit for a task
    - Revoke a task
- OpenID authentication

### Load Average

- os.getloadavg()
- system run queue averaged over the last 1, 5, and 15 minutes
- This loadaverage is of the host not the container

### Monitoring

Monitor Celery Tasks with Prometheus and celery-exporter

https://github.com/OvalMoney/celery-exporter

https://grafana.com/grafana/dashboards/10026

https://github.com/mher/flower

https://flower.readthedocs.io/en/latest

### Jobtastic

Jobtastic is a python library that adds useful features to your Celery tasks. Specifically, these are features you probably want if the results of your jobs are expensive or if your users need to wait while they compute their results.

http://policystat.github.io/jobtastic
