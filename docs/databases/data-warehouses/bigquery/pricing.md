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

| Edition             | Commitment model | Hourly cost             | Monthly costs (50 slots)                                   | Details                                                  |
| ------------------- | ---------------- | ----------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| **Standard**        | Pay as you go    | $0.046 / slot hour      | $1656 = Rs. 1,41,865.46                                    | No commitment. Billed per second with a 1 minute minimum |
| **Enterprise**      | Pay as you go    | $0.069 / slot hour      | $2484 = Rs. 2,12,798.19                                    | Billed per second with a 1 minute minimum                |
|                     | 1 yr commit      | $0.0552 / slot hour     | $1,987 = Rs. 1,70,243 (20% cheaper than pay-as-you-go)     | Billed for 1 year                                        |
|                     | **3 yr commit**  | **$0.0414 / slot hour** | **$1,490 = Rs. 1,27,683** (40% cheaper than pay-as-you-go) | **Billed for 3 years**                                   |
| **Enterprise Plus** | Pay as you go    | $0.115 / slot hour      | $4,140 = Rs. 3,54,674                                      | Billed per second with a 1 minute minimum                |
|                     | 1 yr commit      | $0.092 / slot hour      | $3,312 = Rs. 2,83,739                                      | Billed for 1 year                                        |
|                     | 3 yr commit      | $0.069 / slot hour      | $2,484 = Rs. 2,12,804                                      | Billed for 3 years                                       |

### Standard vs Enterprise

Standard is suitable for ad-hoc and development workloads, while Enterprise adds security, governance, and machine learning features. Enterprise Plus provides the highest level of availability, recovery, and compliance capabilities, ideal for mission-critical applications.

#### 1. BigQuery Standard Edition

**Best for**: Small to mid-sized teams or projects needing core features without enterprise-level compliance or guarantees.

- **SLAs**: No formal SLA
- **Performance**: Standard performance
- **Security**:
    - Basic IAM
    - No customer-managed encryption keys (CMEK)
- **Data locality**: Multi-region or single-region
- **Data sharing**: Supported via authorized views & datasets
- **Backup/Restore**: Time travel up to 7 days
- **Autoscaling**: Yes
- **Key Limits**:
    - No support for fine-grained capacity commitments

#### 2. BigQuery Enterprise Edition

**Best for**: Medium to large businesses needing SLAs, advanced security, and compliance.

- **SLAs**: 99.9% availability SLA
- **Performance**: Enhanced reliability, availability
- **Security**:
    - **CMEK** supported
    - **VPC Service Controls** integration
- **Compliance**: Supports industry certifications like HIPAA, FedRAMP, etc.
- **Data locality**: Regional control
- **Time travel**: Up to 7 days
- **Reservations**: Flex slots, capacity commitments

#### 3. BigQuery Enterprise Plus Edition

**Best for**: Large enterprises with mission-critical analytics and regulatory needs.

- **SLAs**: 99.99% availability SLA
- **Performance**:
    - **High availability** with multi-region replication
    - **Query mirroring** (for testing and HA)
- **Security**:
    - CMEK
    - VPC SC
    - **Data residency guarantees**
- **Data sharing**:
    - **Analytics Hub** + cross-org data sharing
- **Time travel**: Up to 7 or **90 days (extended)** with additional configuration
- **Advanced features**:
    - **Automatic replication across regions**
    - **Access Transparency** logs
    - **Data Sovereignty controls**
    - **Autoscaling with priority handling**
    - **Streaming ingestion SLAs**

### Slot Commitments

- are available for one or three year periods.
- are available in Enterprise and Enterprise Plus editions.
- are regional capacity. Commitments in one region or multi-region cannot be used in another region or multi-region and cannot be moved.
- can be shared across your entire organization. There is no need to buy slot [commitments](https://cloud.google.com/bigquery/docs/reservations-intro#commitments) for every project.
- are offered with a 50-slot minimum and increments of 50 slots.
- are automatically renewed unless set to cancel at the end of the period.

[Purchase and manage slot commitments  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/reservations-commitments)

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
