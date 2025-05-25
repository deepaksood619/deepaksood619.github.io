# Query Working

## Types of queries

- **[Interactive query jobs](https://cloud.google.com/bigquery/docs/running-queries#queries)**. By default, BigQuery runs queries as interactive query jobs, which are intended to start executing as quickly as possible.
- **[Batch query jobs](https://cloud.google.com/bigquery/docs/running-queries#batch)**. Batch queries have lower priority than interactive queries. When a project or reservation is using all of its available compute resources, batch queries are more likely to be queued and remain in the queue. After a batch query starts running, the batch query runs the same as an interactive query. For more information, see [query queues](https://cloud.google.com/bigquery/docs/query-queues).
- **[Continuous query jobs](https://cloud.google.com/bigquery/docs/continuous-queries-introduction)** ([Preview](https://cloud.google.com/products#product-launch-stages)). With these jobs, the query runs continuously, letting you analyze incoming data in BigQuery in real time and then write the results to a BigQuery table, or export the results to Bigtable or Pub/Sub. You can use this capability to perform time sensitive tasks, such as creating and immediately acting on insights, applying real time machine learning (ML) inference, and building event-driven data pipelines.

[Run a query  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/running-queries)

It is possible to get `INTERACTIVE` job priority even if your query is scheduled as `BATCH` priority. If the query has not started or queued within 24 hours, it will change to interactive priority which makes your query to be executed as soon as possible.

[google cloud platform - BigQuery child jobs getting INTERACTIVE priority even when the parent job is BATCH - Stack Overflow](https://stackoverflow.com/questions/75312183/bigquery-child-jobs-getting-interactive-priority-even-when-the-parent-job-is-bat)

## Query Queues

BigQuery automatically determines the number of queries that can run concurrently, called the _dynamic concurrency_. Additional queries are queued until processing resources become available.

The queue length is limited to 1,000 interactive queries and 20,000 batch queries per project per region, regardless of whether the project is on-demand or using a reservation.

[Use query queues  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/query-queues)

## Example

```sql
SELECT * REPLACE
SELECT * EXCEPT
```

## SQL comparison

BigQuery [standard SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/) supports compliance with the SQL 2011 standard and has extensions that support querying nested and repeated data. Redshift SQL is based on PostgreSQL but has several differences which are detailed in the [Redshift documentation](https://docs.aws.amazon.com/redshift/latest/dg/c_redshift-and-postgres-sql.html). For a detailed comparison between Redshift and BigQuery SQL syntax and functions, see the [Redshift to BigQuery SQL translation reference](https://cloud.google.com/solutions/migration/dw2bq/redshift/redshift-bq-sql-translation-reference).

## Query execution using slots

When BigQuery executes a query job, it converts the SQL statement into an execution plan, broken up into a series of query _stages_, which themselves are composed of more granular sets of execution _steps_. BigQuery uses a heavily distributed parallel architecture to run these queries, and the stages model the units of work that many potential workers may execute in parallel. Data is passed between stages by using a fast [distributed shuffle architecture](https://cloud.google.com/blog/products/gcp/separation-of-compute-and-state-in-google-bigquery-and-cloud-dataflow-and-why-it-matters), which is discussed in more detail on the [Google Cloud blog](https://cloud.google.com/blog/products/bigquery/in-memory-query-execution-in-google-bigquery).

BigQuery query execution is dynamic, which means that the query plan can be modified while a query is in flight. Stages that are introduced while a query is running are often used to improve data distribution throughout query workers. In addition, query execution might be impacted by the changing amount of available capacity as other queries complete or begin execution, or slots are added to the reservation by the autoscaler.

BigQuery can run multiple stages [concurrently](https://en.wikipedia.org/wiki/Instruction_pipelining), can use [speculative execution](https://en.wikipedia.org/wiki/Speculative_execution) to accelerate a query, and can [dynamically repartition](https://cloud.google.com/blog/products/gcp/no-shard-left-behind-dynamic-work-rebalancing-in-google-cloud-dataflow) a stage to achieve optimal parallelization.

BigQuery slots execute individual units of work at each stage of the query. For example, if BigQuery determines that a stage's optimal parallelization factor is 10, it requests 10 slots to process that stage.

## Slot resource economy

If a query requests more slots than are available, BigQuery queues up individual units of work and waits for slots to become available. As progress on query execution is made, and as slots free up, these queued up units of work get dynamically picked up for execution.

BigQuery can request any number of slots for a particular stage of a query. The number of slots requested is not related to the amount of capacity you purchase, but rather an indication of the most optimal parallelization factor chosen by BigQuery for that stage. Units of work queue up and get executed as slots become available.

## Fair scheduling in BigQuery

BigQuery allocates slot capacity within a single reservation using an algorithm called _fair scheduling_.

The BigQuery scheduler enforces the equal sharing of slots among projects with running queries within a reservation, and then within jobs of a given project. The scheduler provides eventual fairness. During short periods, some jobs might get a disproportionate share of slots, but the scheduler eventually corrects this. The goal of the scheduler is to find a balance between aggressively evicting running tasks (which results in wasting slot time) and being too lenient (which results in jobs with long running tasks getting a disproportionate share of the slot time).

## Excess slot usage

When a job holds onto slots for too long, it can receive an unfair share of slots. To prevent delays, BigQuery allows other jobs to _borrow_ additional slots, resulting in periods of total slot use above your specified slot capacity. Any excess slot usage is attributed only to the jobs that receive more than their fair share.

[Understand slots  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/slots)
