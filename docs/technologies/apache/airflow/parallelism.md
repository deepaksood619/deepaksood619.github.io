# Parallelism

Here's an expanded list of configuration options that are available since Airflow v1.10.2. Some can be set on a per-DAG or per-operator basis, but may also fall back to the setup-wide defaults when they are not specified.

---

Options that can be specified **on a per-DAG basis**:

- `concurrency`: the number of task instances allowed to run concurrently across all active runs of the DAG this is set on. Defaults to `core.dag_concurrency` if not set
- `max_active_runs`: maximum number of active runs for this DAG. The scheduler will not create new active DAG runs once this limit is hit. Defaults to `core.max_active_runs_per_dag` if not set

Examples:

```python
# Only allow one run of this DAG to be running at any given time
dag = DAG('my_dag_id', max_active_runs=1)

# Allow a maximum of 10 tasks to be running across a max of 2 active DAG runs
dag = DAG('example2', concurrency=10, max_active_runs=2)
```

---

Options that can be specified **on a per-operator basis**:

- `pool`: the pool to execute the task in. [Pools](https://airflow.apache.org/concepts.html#pools) can be used to limit parallelism for _only a subset_ of tasks
- `max_active_tis_per_dag`: controls the number of concurrent running task instances across dag_runs per task.

Example:

```python
t1 = BaseOperator(pool='my_custom_pool', max_active_tis_per_dag=12)
```

---

Options that are specified **across an entire Airflow setup**:

- `core.parallelism`: maximum number of tasks running across an entire Airflow installation
- `core.dag_concurrency`: max number of tasks that can be running per DAG (across multiple _DAG runs_)
- `core.non_pooled_task_slot_count`: number of task slots allocated to tasks not running in a pool
- `core.max_active_runs_per_dag`: maximum number of active DAG _runs_, per DAG
- `scheduler.max_threads`: how many threads the scheduler process should use to use to schedule DAGs
- `celery.worker_concurrency`: max number of task instances that a worker will process at a time _if using CeleryExecutor_
- `celery.sync_parallelism`: number of processes CeleryExecutor should use to sync task state

[python - How to control the parallelism or concurrency of an Airflow installation? - Stack Overflow](https://stackoverflow.com/questions/56370720/how-to-control-the-parallelism-or-concurrency-of-an-airflow-installation)

From airflow version 2.2, `task_concurrency` parameter is deprecated by `max_active_tis_per_dag`.

## Per queue tasks concurrency airflow

In Apache Airflow, controlling concurrency at different levels is key to managing resources efficiently and ensuring your workflows (DAGs) run smoothly. Concurrency in Airflow refers to the number of tasks or DAGs allowed to run simultaneously. There are several levels at which you can control concurrency:

### 1. DAG Level Concurrency (max_active_runs)

This controls the maximum number of active runs for a DAG. If this number is reached, Airflow will not start new runs of the DAG until others have finished. This is useful for preventing a DAG from consuming too many resources if it's triggered often.

### 2. Task Level Concurrency (concurrency)

This sets the maximum number of tasks that can run simultaneously across all instances of a particular DAG. This is useful for managing resource-intensive tasks and ensuring they don't overwhelm your system.

### 3. DAG Concurrency (dag_concurrency)

This is a global setting in Airflow's configuration that limits the number of tasks that can run concurrently across all DAGs. It's a way to control overall system resource utilization.

### 4. Pool Concurrency

Pools are a way to limit concurrency for a group of tasks across multiple DAGs. By assigning tasks to a pool, you can control the maximum number of tasks from that pool that can run at once, regardless of which DAG they belong to. This is especially useful for managing tasks that access a shared resource, like a database, to prevent overloading it.

### Implementing Concurrency Controls

To implement these controls, you would adjust your Airflow configurations or DAG definitions as follows:

#### DAG Level Concurrency (`max_active_runs`)

```python
from airflow import DAG
from datetime import datetime

default_args = {
    # Default arguments here
}

dag = DAG('example_dag',
          default_args=default_args,
          description='An example DAG',
          schedule_interval='0 12 * * *',
          max_active_runs=2,
          catchup=False)
```
    
#### Task Level Concurrency (`concurrency`)

This is set in the Airflow configuration file (`airflow.cfg`) under the `[core]` section as `concurrency`. It can also be overridden for each DAG in the DAG definition.

#### DAG Concurrency (`dag_concurrency`)

Also set in the `airflow.cfg` file under the `[core]` section.

#### Pool Concurrency

Pools are defined in the Airflow UI under Admin > Pools. You specify the name of the pool and the number of slots it has. To use a pool in a task:

```python
from airflow.operators.dummy_operator import DummyOperator

task = DummyOperator(
    task_id='example_task',
    dag=dag,
    pool='example_pool'
)

```

### Managing Task Queues

Airflow can also control task execution based on queues. Tasks are assigned to queues, and workers pick up tasks based on the queue they are configured to listen to. This can be used to ensure certain workers only execute certain tasks, which can be another way to manage resource allocation and task priority.

To specify a queue for a task:

```python
task = DummyOperator(
    task_id='example_task',
    dag=dag,
    queue='example_queue'
)
```

By thoughtfully configuring these concurrency and queue settings, you can optimize Airflow to handle your workloads efficiently, balancing the need for timely execution with the limitations of your system's resources.

## What's the difference between airflow pool and celery queues

Apache Airflow offers several mechanisms to manage the execution and concurrency of tasks, with Airflow Pools and Celery Queues being two of these mechanisms. They serve similar purposes in controlling how tasks are executed but operate in different scopes and manners. Understanding the difference between the two can help in effectively managing task execution and resource allocation.

### Airflow Pools

Airflow Pools are a way to limit the concurrency of a set of tasks across one or more DAGs. They allow you to allocate a specific number of slots to tasks that require similar resources, ensuring that a limited resource (like database connections or memory) isn't overwhelmed by too many tasks at once. When a task is assigned to a pool, it will only run if there is a free slot available in that pool; otherwise, it waits in the queue.

- **Scope:** Across one or more DAGs.
- **Purpose:** To limit the total number of concurrently running tasks that share a common resource to prevent resource overutilization.
- **Configuration:** Defined in the Airflow UI or database and assigned to tasks within DAG definitions.
- **Use Case Example:** Limiting the number of tasks that can simultaneously execute queries on a database to avoid overloading it.

### Celery Queues

Celery Queues are part of the Celery Executor setup in Airflow, which is used for distributing tasks across multiple workers. Each worker can listen to one or more queues, and tasks can be routed to specific queues. This mechanism allows for the prioritization of tasks, separation of tasks based on their resource requirements, or distribution of tasks across different workers based on their capabilities or workload.

- **Scope:** Task distribution and execution across multiple workers.
- **Purpose:** To distribute tasks among different workers, potentially across different machines, for load balancing, prioritization, or resource-based segregation.
- **Configuration:** Defined within the DAG file or as part of the task definition, and requires a Celery backend setup.
- **Use Case Example:** Sending image processing tasks to high-CPU workers while routing data analysis tasks to high-memory workers.

### Key Differences

- **Purpose and Functionality:** Pools are used to limit concurrency to manage resource utilization within Airflow, ensuring no single resource gets overwhelmed. Celery Queues, on the other hand, are about distributing tasks across workers for load balancing, prioritization, or based on resource capabilities.
- **Executor Dependency:** Airflow Pools work with any executor (LocalExecutor, SequentialExecutor, KubernetesExecutor, etc.), while Celery Queues require the use of the CeleryExecutor.
- **Scope of Application:** Pools can limit tasks across all DAGs in Airflow, making them a global resource management tool. Celery Queues are more about task distribution and execution strategy, affecting how tasks are processed by workers.
- **Resource Management vs. Task Distribution:** Pools are directly related to managing access to limited resources (e.g., database connections). Celery Queues are more about managing where and how tasks are executed in a distributed environment.

Both Airflow Pools and Celery Queues are powerful tools for managing task execution in Airflow, and they can be used together to achieve efficient task distribution and resource utilization.

[Airflow concurrency essentials — Restack](https://www.restack.io/docs/airflow-knowledge-airflow-concurrency-guide)

[FAQ — Airflow Documentation](https://airflow.apache.org/docs/apache-airflow/stable/faq.html)


| airflow.cfg name        | Environment Variable                     | Default Value |
| ----------------------- | ---------------------------------------- | ------------- |
| parallelism             | `AIRFLOW__CORE__PARALLELISM`             | 32            |
| dag_concurrency         | `AIRFLOW__CORE__DAG_CONCURRENCY`         | 16            |
| worker_concurrency      | `AIRFLOW__CELERY__WORKER_CONCURRENCY`    | 16            |
| max_active_runs_per_dag | `AIRFLOW__CORE__MAX_ACTIVE_RUNS_PER_DAG` | 16            |
| max_threads             | `AIRFLOW__SCHEDULER__MAX_THREADS`        | 2             |

**parallelism** is the max number of task instances that can run concurrently on airflow. This means that across all running DAGs, no more than 32 tasks will run at one time.

**dag_concurrency** is the number of task instances allowed to run concurrently within a _specific dag_. In other words, you could have 2 DAGs running 16 tasks each in parallel, but a single DAG with 50 tasks would also only run 16 tasks - not 32

**worker_concurrency** is related, but it determines how many tasks a single celery worker can process. So, if you have 4 workers running at a worker concurrency of 16, you could process up to 16x4=64 tasks at once. Configured with the defaults above, however, only 32 would actually run in parallel. (and only 16 if all tasks are in the same DAG)

**max_active_runs_per_dag** The maximum number of active DAG runs per DAG. So if you start a DAG with `catchup=True`, it will start to schedule lot’s of DAG runs concurrently up to this limit.

[Dependencies across DAGs - Airflow - The Apache Airflow Forum by Astronomer](https://forum.astronomer.io/t/dependencies-across-dags/332)

[Scaling Airflow to optimize performance | Astronomer Documentation](https://docs.astronomer.io/learn/airflow-scaling-workers)
