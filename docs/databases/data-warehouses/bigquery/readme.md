# BigQuery

- [Architecture](databases/data-warehouses/bigquery/architecture.md)
- [Queries](databases/data-warehouses/bigquery/queries.md)
- [Optimizations](databases/data-warehouses/bigquery/optimizations.md)
- [Documentation](databases/data-warehouses/bigquery/documentation.md)

BigQuery is a serverless data analytics platform. You don't need to provision individual instances or virtual machines to use BigQuery. Instead, BigQuery automatically allocates computing resources as you need them. You can also reserve compute capacity ahead of time in the form of _slots_, which represent virtual CPUs

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
- [Write data from Kafka to BigQuery with Dataflow  \|  Google Cloud](https://cloud.google.com/dataflow/docs/kafka-dataflow)

## References

- https://github.com/GoogleCloudPlatform/training-data-analyst/blob/master/courses/machine_learning/deepdive/02_generalization/repeatable_splitting.ipynb
- https://github.com/GoogleCloudPlatform/training-data-analyst
- [php - Speed of inserting to BigQuery - should this be batched in background? - Stack Overflow](https://stackoverflow.com/questions/69463609/speed-of-inserting-to-bigquery-should-this-be-batched-in-background)
