# Pricing


- Queries (on-demand) - $6.25 per TiB - The first 1 TiB per month is free.
- [Pricing  |  BigQuery: Cloud Data Warehouse  |  Google Cloud](https://cloud.google.com/bigquery/pricing)
- [Quotas and limits  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/quotas)
- [Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)
- [Pricing  \|  BigQuery: Cloud Data Warehouse  \|  Google Cloud](https://cloud.google.com/bigquery/pricing)
- [Estimate and control costs  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/best-practices-costs)

## Compute / Slot Pricing

BigQuery slot capacity:

- is available in 3 editions: Standard, Enterprise, and Enterprise Plus.
- applies to query costs, including BigQuery ML, DML, and DDL statements.
- does not apply to [storage costs](https://cloud.google.com/bigquery/pricing#storage) or BI Engine costs.
- does not apply to streaming inserts and using the [BigQuery Storage API](https://cloud.google.com/bigquery/docs/reference/storage).
- can leverage the BigQuery autoscaler.
- is billed per second with a one minute minimum.

Region - Mumbai (asia-south1)

| Edition             | Commitment model  | Hourly cost         | Details                                                  |
| ------------------- | ----------------- | ------------------- | -------------------------------------------------------- |
| **Standard**        | Pay as you go | $0.046 / slot hour  | No commitment. Billed per second with a 1 minute minimum |
| **Enterprise**      | Pay as you go | $0.069 / slot hour  | Billed per second with a 1 minute minimum                |
|                     | 1 yr commit       | $0.0552 / slot hour | Billed for 1 year                                        |
|                     | 3 yr commit       | $0.0414 / slot hour | Billed for 3 years                                       |
| **Enterprise Plus** | Pay as you go     | $0.115 / slot hour  | Billed per second with a 1 minute minimum                |
|                     | 1 yr commit       | $0.092 / slot hour  | Billed for 1 year                                        |
|                     | 3 yr commit       | $0.069 / slot hour  | Billed for 3 years                                       |

### Slot Commitments

- are available for one or three year periods.
- are available in Enterprise and Enterprise Plus editions.
- are regional capacity. Commitments in one region or multi-region cannot be used in another region or multi-region and cannot be moved.
- can be shared across your entire organization. There is no need to buy slot [commitments](https://cloud.google.com/bigquery/docs/reservations-intro#commitments) for every project.
- are offered with a 50-slot minimum and increments of 50 slots.
- are automatically renewed unless set to cancel at the end of the period.

## Storage pricing

Storage pricing is the cost to store data that you load into BigQuery. You pay for _active storage_ and _long-term_ storage.

- **Active storage** includes any table or table partition that has been modified in the last 90 days.
- **Long-term storage** includes any table or table partition that has not been modified for 90 consecutive days. The price of storage for that table automatically drops by approximately 50%. There is no difference in performance, durability, or availability between active and long-term storage.
- **Metadata storage** includes storage for logical and physical metadata for datasets, tables, partitions, models and functions stored in the BigQuery metastore.

The first 10 GiB of storage per month is free.

Region - **Mumbai (asia-south1)**

| Operation                  | Pricing                  |
| -------------------------- | ------------------------ |
| Active logical storage     | $0.023 per GiB per month |
| Long-term logical storage  | $0.016 per GiB per month |
| Active physical storage    | $0.052 per GiB per month |
| Long-term physical storage | $0.026 per GiB per month |
| Metadata storage           | $0.052 per GiB per month |

**S3 Standard** - General purpose storage for any type of data, typically used for frequently accessed data - First 50 TB / Month - $0.023 per GB

Pricing is same as AWS S3 Standard storage
