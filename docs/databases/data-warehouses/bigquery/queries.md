# Queries

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

## Commands

```python
from google.cloud import bigquery
client = bigquery.Client()
dataset_ref = client.dataset("hacker_news", project="bigquery-public-data")
dataset_ref = client.dataset("chicago_crime", project="bigquery-public-data")
dataset = client.get_dataset(dataset_ref)
```
