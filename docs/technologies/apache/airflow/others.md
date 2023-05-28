# Others

## Cadence

Cadence is a distributed, scalable, durable, and highly available orchestration engine to execute asynchronous long-running business logic in a scalable and resilient way.

Business logic is modeled as workflows and activities. Workflows are the implementation of coordination logic. Its sole purpose is to orchestrate activity executions. Activities are the implementation of a particular task in the business logic. The workflow and activity implementation are hosted and executed in worker processes. These workers long-poll the Cadence server for tasks, execute the tasks by invoking either a workflow or activity implementation, and return the results of the task back to the Cadence server. Furthermore, the workers can be implemented as completely stateless services which in turn allows for unlimited horizontal scaling.

The Cadence server brokers and persists tasks and events generated during workflow execution, which provides certain scalability and reliability guarantees for workflow executions. An individual activity execution is not fault tolerant as it can fail for various reasons. But the workflow that defines in which order and how (location, input parameters, timeouts, etc.) activities are executed is guaranteed to continue execution under various failure conditions.

Cadence fault-oblivious stateful code platform preserves complete multithreaded application state including thread stacks with local variables across hardware and software failures. It greatly simplifies coding of complex stateful distributed applications.

<https://github.com/uber/cadence>

[https://cadenceworkflow.io](https://cadenceworkflow.io/)

## Dynein

Dynein is Airbnb's Open-source Distributed Delayed Job QueueingSystem.

We can divide Dynein jobs into two categories: immediate jobs and delayed jobs.

## Immediate Jobs

For immediate jobs, or jobs that are scheduled to run within 15 minutes, Dynein simply works as a wrapper of the SQS API - Jobs submitted to Dynein will be relayed to an SQS queue immediately, and the job will then be consumed by consumers with the SQS dequeue API. We opted to wrap the SQS API rather than have services directly enqueue to SQS because this approach offers us expansive metrics coverage, as well as tight integration with Airbnb's internal rate-limiting and backpressure systems. Additionally, our users can use the same API they use for delayed jobs.

## Delayed Jobs

Dynein takes a more elaborate approach to delayed jobs. Delayed jobs, to Dynein, means deliver the right message to the right service queue at the right time. When a delayed job is submitted to Dynein, it is immediately put into an SQS queue - we call it inbound queue. This queue works as a write buffer for our scheduler, designed so that we can sustain small spikes in jobs submitted. Not only does the inbound queue protect our system from write spikes, but it also gives us clear indicating metrics that such issues are happening. SQS gives us enough time to figure out what the issue is, fix it, and then process the backlog.

Dynein service then picks up the job from the inbound queue with a consistent ingestion rate, and stores a trigger for the job into the scheduler. At the scheduled time, Dynein service selects the jobs from the scheduler, and then enqueues the jobs into SQS. The Dynein service is completely stateless, and runs as a simple Deployment on Kubernetes platform.

<https://github.com/airbnb/dynein>

<https://medium.com/airbnb-engineering/dynein-building-a-distributed-delayed-job-queueing-system-93ab10f05f99>

## Quartz

Quartz is a [richly featured](http://www.quartz-scheduler.org/documentation/2.4.0-SNAPSHOT/introduction.html#features), open source job scheduling library that can be integrated within virtually any Java application - from the smallest stand-alone application to the largest e-commerce system. Quartz can be used to create simple or complex schedules for executing tens, hundreds, or even tens-of-thousands of jobs; jobs whose tasks are defined as standard Java components that may execute virtually anything you may program them to do. The Quartz Scheduler includes many enterprise-class features, such as support for JTA transactions and clustering.

<http://www.quartz-scheduler.org>

<https://github.com/quartz-scheduler/quartz>

## Dkron

Dkron is a distributed cron service, easy to setup and fault tolerant with focus in:

- Easy: Easy to use with a great UI
- Reliable: Completely fault tolerant
- High scalable: Able to handle high volumes of scheduled jobs and thousands of nodes

Dkron is written in Go and leverage the power of distributed key-value stores and serf for providing fault tolerance, reliability and scalability while keeping simple and easily installable.

Dkron is inspired by the google whitepaper [Reliable Cron across the Planet](https://queue.acm.org/detail.cfm?id=2745840) and by Airbnb Chronos borrowing the same features from it.

<https://github.com/victorcoder/dkron>

<https://dkron.io>

## Airflow + Genie on AWS Platform

![image](../../../media/Technologies-Apache-Others-image1.jpg)

<https://aws.amazon.com/blogs/big-data/orchestrate-big-data-workflows-with-apache-airflow-genie-and-amazon-emr-part-1>

## Prefect

Prefect is a new workflow management system, designed for modern infrastructure and powered by the open-source Prefect Core workflow engine. Users organize Tasks into Flows, and Prefect takes care of the rest.

<https://github.com/prefecthq/prefect>

<https://www.prefect.io>

## Netflix Conductor

Conductor is a microservices orchestration engine

We built Conductor to help us orchestrate microservices based process flows at Netflix with the following features:

- A distributed server ecosystem, which stores workflow state information efficiently.
- Allow creation of process / business flows in which each individual task can be implemented by the same / different microservices.
- A JSON DSL based blueprint defines the execution flow.
- Provide visibility and traceability into these process flows.
- Simple interface to connect workers, which execute the tasks in workflows.
- Full operational control over workflows with the ability to pause, resume, restart, retry and terminate.
- Allow greater reuse of existing microservices providing an easier path for onboarding.
- User interface to visualize, replay and search the process flows.
- Ability to scale to millions of concurrently running process flows.
- Backed by a queuing service abstracted from the clients.
- Be able to operate on HTTP or other transports e.g. gRPC.
- Event handlers to control workflows via external actions.
- Client implementations in Java, Python and other languages.
- Various configurable properties with sensible defaults to fine tune workflow and task executions like rate limiting, concurrent execution limits etc.

<https://github.com/Netflix/conductor>

<https://netflix.github.io/conductor>

## Others

[Give your data team magical powers | Mage](https://www.mage.ai/)

[The Airflow alternative worth checking out: Mage.ai - YouTube](https://www.youtube.com/watch?v=3gXsFEC3aYA)

[GitHub - alseambusher/crontab-ui: Easy and safe way to manage your crontab file](https://github.com/alseambusher/crontab-ui)
