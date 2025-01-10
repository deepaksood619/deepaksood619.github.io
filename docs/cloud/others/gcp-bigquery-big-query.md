# GCP BigQuery / Big Query

BigQuery is a serverless data analytics platform. You don't need to provision individual instances or virtual machines to use BigQuery. Instead, BigQuery automatically allocates computing resources as you need them. You can also reserve compute capacity ahead of time in the form of _slots_, which represent virtual CPUs

## Architecture

- Dremel - The execution engine
- Colossus - Distributed Storage
- Borg - Compute
- Jupiter - The Network
- BigQuery - The Service

![image](../../media/Cloud-Others-BigQuery-Big-Query-image1.jpg)

## Separation of Compute and State

*Separation of compute and state* refers to the ability to maintain intermediate state between processing stages in a high-performance component separate from either the compute cluster or storage.

- Less state in compute means compute becomes more ephemeral and scalable. It's easier to re-parallelize processing intra-stage and interstage, and easier to recover from a lost node.
- Processing is more streamlined; processing stages don't conflict within the same compute nodes, resulting in resource contention and bottlenecks.
- It's easier for the processing engine to re-partition workloads between stages.
- Your processing engine can take advantage of pipelined execution. In other words, it doesn't have to wait for Stage N to finish before starting Stage N+1.
- The processing engine can implement dynamic work repartitioning (the ability to re-parallelize work due to slow workers or data skew).
- Keeping less state in processing nodes makes workloads more resilient to individual node issues.
- The service can utilize available resources much more efficiently across compute as well as shuffle.

https://cloud.google.com/blog/products/gcp/separation-of-compute-and-state-in-google-bigquery-and-cloud-dataflow-and-why-it-matters

https://cloud.google.com/blog/products/gcp/bigquery-under-the-hood

## Commands

```python
from google.cloud import bigquery
client = bigquery.Client()
dataset_ref = client.dataset("hacker_news", project="bigquery-public-data")
dataset_ref = client.dataset("chicago_crime", project="bigquery-public-data")
dataset = client.get_dataset(dataset_ref)
```

## Queries

### Data scanning analysis

```sql
-- find how much data is being scanned by month
SELECT
  FORMAT_TIMESTAMP('%Y-%m', creation_time) AS month,
  ROUND(SUM(total_bytes_processed) / POW(2, 30), 2) AS total_gb_scanned
FROM
  `region-asia-south1.INFORMATION_SCHEMA.JOBS_BY_PROJECT`
WHERE
  state = 'DONE'
  AND job_type = 'QUERY'
  AND creation_time BETWEEN TIMESTAMP('2024-01-01') AND CURRENT_TIMESTAMP()
GROUP BY
  month
ORDER BY
  month;

-- find how much data is being scanned by day
SELECT
  FORMAT_TIMESTAMP('%Y-%m-%d', creation_time) AS day,
  ROUND(SUM(total_bytes_processed) / POW(2, 30), 2) AS total_gb_scanned
FROM
  `region-REGION_NAME.INFORMATION_SCHEMA.JOBS_BY_PROJECT`
WHERE
  state = 'DONE'
  AND job_type = 'QUERY'
  AND creation_time BETWEEN TIMESTAMP('2025-01-01') AND CURRENT_TIMESTAMP()
GROUP BY
  day
ORDER BY
  day;

-- find the top queries that scanned the most amount of data
SELECT
  query,
  user_email,
  COUNT(*) AS query_count,
  ROUND(SUM(total_bytes_processed) / POW(2, 30), 2) AS total_gb_scanned,
  ROUND(SUM(total_bytes_processed) / COUNT(*) / POW(2, 30), 2) AS avg_gb_scanned_per_query,
  ARRAY_AGG(FORMAT_TIMESTAMP('%Y-%m-%d %H:%M:%S', creation_time) ORDER BY creation_time) AS query_run_timestamps
FROM
  `region-asia-south1.INFORMATION_SCHEMA.JOBS_BY_PROJECT`
WHERE
  state = 'DONE'
  AND job_type = 'QUERY'
  AND creation_time BETWEEN TIMESTAMP('2025-01-01') AND CURRENT_TIMESTAMP()
GROUP BY
  query,
  user_email
ORDER BY
  total_gb_scanned DESC
LIMIT 10;
```

### SQL

```sql
-- standardSQL
SELECT
    departure_airport,
    arrival_airport,
    COUNT(1) AS num_flights
FROM
    `bigquery-samples.airline_ontime_data.flights`
GROUP BY
    departure_airport,
    arrival_airport
ORDER BY
    num_flights DESC
LIMIT
    10

-- standardSQL
SELECT
    departure_delay,
    COUNT(1) AS num_flights,
    APPROX_QUANTILES(arrival_delay, 5) AS arrival_delay_quantiles
FROM
    `bigquery-samples.airline_ontime_data.flights`
GROUP BY
    departure_delay
HAVING
    num_flights > 100
ORDER BY
    departure_delay ASC
```

## Google Cloud Dataflow

- Dataflow is a unified programming model and a managed service for developing and executing a wide range of data processing patterns including ETL, batch computation, and continuous computation.
- The Dataflow model combines batch and stream processing so developers don't have to make tradeoffs between correctness, cost, and processing time.

## Pricing

Queries (on-demand) - $6.25 per TiB - The first 1 TiB per month is free.

[Pricing  |  BigQuery: Cloud Data Warehouse  |  Google Cloud](https://cloud.google.com/bigquery/pricing)

[Understand slots  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/slots)

- A BigQuery slot is a virtual compute unit used by BigQuery to execute SQL queries or other job types. During the execution of a query, BigQuery automatically determines how many slots are used by the query. The number of slots used depends on the amount of data being processed, the complexity of the query, and the number of slots available.
- Fair scheduling in BigQuery
- Idle slots

[Quotas and limits  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/quotas)

[Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)

[Pricing  \|  BigQuery: Cloud Data Warehouse  \|  Google Cloud](https://cloud.google.com/bigquery/pricing)

[Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)

## Others

- `BigQuery` should not be used if you expect OLTP behavior or performance.

## References

https://github.com/GoogleCloudPlatform/training-data-analyst/blob/master/courses/machine_learning/deepdive/02_generalization/repeatable_splitting.ipynb

https://github.com/GoogleCloudPlatform/training-data-analyst

[php - Speed of inserting to BigQuery - should this be batched in background? - Stack Overflow](https://stackoverflow.com/questions/69463609/speed-of-inserting-to-bigquery-should-this-be-batched-in-background)
