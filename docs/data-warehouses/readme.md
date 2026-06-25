---
slug: /data-warehouses/readme
title: Data Warehouses
description: Explore key concepts of data warehouses, including Databricks, Snowflake, Amazon Redshift, and others, to enhance your data analytics strategy.
created: 2025-06-10
updated: 2026-06-25
---

## Fundamentals

- [Data Warehouse Concepts](concepts/readme.md) - DWH fundamentals, ETL, SCD, fact/dimension tables, architectures

## Major Platforms

### Cloud-Native Data Warehouses

- [Databricks](databricks/readme.md) - Lakehouse platform with Delta Lake, Unity Catalog
- [Snowflake](snowflake/readme.md) - Cloud data warehouse with separated compute/storage
- [GCP BigQuery](bigquery/readme.md) - Serverless data warehouse on Google Cloud
- [Amazon Redshift](../databases-sql/aws-redshift/readme.md) - AWS columnar data warehouse

### OLAP Databases

- [ClickHouse](clickhouse/readme.md) - Fast columnar OLAP database
- [StarRocks](others/starrocks.md) - Vectorized OLAP database
- [Apache Druid](../databases-nosql/druid/readme.md) - Real-time analytics database

### Query Engines

- [Amazon Athena](../cloud/aws/analytics/amazon-athena.md) - Serverless SQL query service
- [Presto / Trino](../technologies/others/presto.md) - Distributed SQL query engine

### Big Data Platforms

- [Apache Hadoop](../technologies/apache-hadoop/readme.md) - Distributed big data framework
- [Elasticsearch](../technologies/elasticsearch/readme.md) - Search and analytics engine

### Other Platforms

- [MemSQL (SingleStore)](../databases-sql/memsql/readme.md) - Real-time distributed SQL
- [Others](others/readme.md) - Firebolt, Doris, and additional platforms

## Comparisons & Migration

- [Platform Comparisons](comparisons/readme.md) - Compare platforms, migration guides
