# Sagemaker Lakehouse

[AWS re:Invent 2024 - \[NEW LAUNCH\] Amazon SageMaker Lakehouse: Accelerate analytics & AI (ANT354-NEW) - YouTube](https://youtu.be/LkH6ZzzA9dM)

## Data lake centric

- Takes away decades of database capabilities such as transactions
- Slow interactive queries at high concurrency
- Lacks intelligent storage optimizations

## Data warehouse centric

- Lacks open access to data warehouse data
- Limited engine interoperability with open table formats
- Still creates data silo

## Zero-ETL Integration

Bring your data into the lakehouse without expensive pipeline management

![Zero-ETL Integration](../../../media/Screenshot%202025-10-27%20at%2011.42.05%20PM.jpg)

## Amazon Sagemaker Lakehouse Components

![Amazon Sagemaker Lakehouse Components](../../../media/Screenshot%202025-10-27%20at%2011.32.41%20PM.jpg)

## Storage

1. Amazon S3
	1. Store your data in Amazon S3 buckets
	2. Access your data using Apache Iceberg REST catalog APIs
	3. Enable automatic table optimization for Apache Iceberg tables
	4. Get high performance with managed statistics
	5. Access data seamlessly from AWS and 3P engines
2. Amazon S3 Tables
	1. New S3 storage class for Apache Iceberg data lakes
	2. Amazon S3 APls to read/write to S3 tables
	3. Managed Iceberg table maintenance
	4. Simple integration with Lakehouse (preview)
	5. 10x requests per second compared to standard Amazon S3 buckets
3. Table Maintenance for Iceberg Tables
	1. **Compation:** Consolidate small objects into larger ones to improve query performance
	2. **Snapshot Retention:** Remove unused snapshots
4. Redshift Managed Storage (RMS)
	1. Publish data from your existing Amazon Redshift data warehouses to the Lakehouse
	2. Create new datasets for your data lake in Redshift Managed Storage natively in the Lakehouse
	3. Benefit from ML-powered optimizations for frequently running workloads
5. Redshift Managed Storage use cases
	1. Near real-time ingestion
	2. Transactionally consistent change data capture (CDC) from operational data sources
	3. Multi-statement and multi-table transactional consistency
	4. 7x better throughput from Amazon Redshift for BI analytics
	5. Faster performance for small writes in Apache Spark
	6. Faster reads from Spark compared to Apache Iceberg tables

## Unified Technical Catalog

- Dynamic catalog hierarchy to organize data in the storage system
- Each catalog maps to a storage type
- Managed catalogs to create new data
	- ﻿﻿Redshift Managed Storage
	- ﻿﻿Amazon S3
- Bring data into a Federated Catalog
	- Amazon Redshift
	- Amazon S3 table buckets
	- External Sources like MySQL, BigQuery

## Integrated Access Control

- Support for fine-grained access control
	- ﻿﻿Allow/deny access at table level
	- ﻿﻿Allow/deny access at column level
	- ﻿﻿Allow/deny access at cell level
- Industry standard access controls for 3P engines
	- ﻿﻿Tag-based access to data(TBAC)
	- ﻿﻿Role-based access to data(RBAC)
- Zero copy data sharing within and across enterprises

**Fine Grained Access Control**

![Fine Grained Access Control](../../../media/Screenshot%202025-10-27%20at%2011.56.32%20PM.jpg)

**Tag based access control (TBAC)**

![Tag based access control (TBAC)](../../../media/Screenshot%202025-10-27%20at%2011.57.15%20PM.jpg)

**Zero copy data sharing models**

![Zero copy data sharing models](../../../media/Screenshot%202025-10-27%20at%2011.57.59%20PM.jpg)
