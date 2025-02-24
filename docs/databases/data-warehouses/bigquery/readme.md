# BigQuery

- [Architecture](databases/data-warehouses/bigquery/architecture.md)
- [Queries](databases/data-warehouses/bigquery/queries.md)
- [Optimizations](databases/data-warehouses/bigquery/optimizations.md)
- [query-optimizations](databases/data-warehouses/bigquery/query-optimizations.md)
- [storage-optimizations](databases/data-warehouses/bigquery/storage-optimizations.md)
- [Documentation](databases/data-warehouses/bigquery/documentation.md)
- [modeling](databases/data-warehouses/bigquery/modeling.md)
- [slots](databases/data-warehouses/bigquery/slots.md)
- [data-masking](databases/data-warehouses/bigquery/data-masking.md)
- [interview-questions](databases/data-warehouses/bigquery/interview-questions.md)

BigQuery is a serverless data analytics platform. You don't need to provision individual instances or virtual machines to use BigQuery. Instead, BigQuery automatically allocates computing resources as you need them. You can also reserve compute capacity ahead of time in the form of _slots_, which represent virtual CPUs.

## Pricing

- Queries (on-demand) - $6.25 per TiB - The first 1 TiB per month is free.
- [Pricing  |  BigQuery: Cloud Data Warehouse  |  Google Cloud](https://cloud.google.com/bigquery/pricing)
- [Quotas and limits  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/quotas)
- [Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)
- [Pricing  \|  BigQuery: Cloud Data Warehouse  \|  Google Cloud](https://cloud.google.com/bigquery/pricing)
- [Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)

### Storage pricing

Storage pricing is the cost to store data that you load into BigQuery. You pay for _active storage_ and _long-term_ storage.

- **Active storage** includes any table or table partition that has been modified in the last 90 days.
- **Long-term storage** includes any table or table partition that has not been modified for 90 consecutive days. The price of storage for that table automatically drops by approximately 50%. There is no difference in performance, durability, or availability between active and long-term storage.
- **Metadata storage** includes storage for logical and physical metadata for datasets, tables, partitions, models and functions stored in the BigQuery metastore.

The first 10 GiB of storage per month is free.

**Mumbai (asia-south1)**

| Operation                  | Pricing                  |
| -------------------------- | ------------------------ |
| Active logical storage     | $0.023 per GiB per month |
| Long-term logical storage  | $0.016 per GiB per month |
| Active physical storage    | $0.052 per GiB per month |
| Long-term physical storage | $0.026 per GiB per month |
| Metadata storage           | $0.052 per GiB per month |

**S3 Standard** - General purpose storage for any type of data, typically used for frequently accessed data - First 50 TB / Month - $0.023 per GB

Pricing is same as AWS S3 Standard storage

## Others

- `BigQuery` should not be used if you expect OLTP behavior or performance.
- [Write data from Kafka to BigQuery with Dataflow  \|  Google Cloud](https://cloud.google.com/dataflow/docs/kafka-dataflow)

## References

- https://github.com/GoogleCloudPlatform/training-data-analyst/blob/master/courses/machine_learning/deepdive/02_generalization/repeatable_splitting.ipynb
- https://github.com/GoogleCloudPlatform/training-data-analyst
- [php - Speed of inserting to BigQuery - should this be batched in background? - Stack Overflow](https://stackoverflow.com/questions/69463609/speed-of-inserting-to-bigquery-should-this-be-batched-in-background)
