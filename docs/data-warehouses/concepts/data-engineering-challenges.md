# Data Engineering Challenges

### 1. Elimination of Data Silos - Unified Lakehouse Architecture

- **Challenge:** Multiple data sources leading to fragmented analytics, duplication, and inconsistency.
- **Requirement:** Design and implement a centralised Lakehouse architecture to unify batch and streaming data, enabling a single source of truth for structured and semi-structured data.

### 2. Universal Real-Time Data Pipeline

- **Challenge:** Inability to handle seamless real-time ingestion and sync between varied data systems.
- **Requirement:** Build a real-time data pipeline framework that supports data migration across heterogeneous sources and sinks such as:
	- **Sources:** MySQL, PostgreSQL, MariaDB, MongoDB, Kafka
	- **Destinations:** Redshift, Databricks, Iceberg-based tables, BigQuery, etc.
- Should support change data capture (CDC), schema evolution, and backfill.

### 3. Common Query Abstraction Layer

- **Challenge:** Reporting systems break or require rework when data warehouses are switched.
- **Requirement:** Introduce a semantic or federated query layer which enables Standard SQL-based querying across different storage engines, ensuring reporting tools continue to function without rewriting queries

### 4. Robust Metadata and Centralised Data Catalog

- **Challenge:** Lack of visibility into data flow and transformations across the pipeline.
- **Requirement:** Build or integrate a searchable data catalog that includes table descriptions, column definitions, data freshness, owners, and usage metrics. Implement a metadata governance tool to track data lineage, schema changes, ownership, and business glossary.

### 5. Observability and Monitoring of Pipelines

- **Requirement:** Introduce monitoring and alerting for pipeline health, data quality issues, latency, and SLA breaches

### 6. Standardised Data Quality Framework

- **Requirement:** Establish a rule-based or ML-powered data quality layer for anomaly detection, null checks, duplicate checks, and type mismatches — embedded in the pipeline.

### 7. CI/CD for Data Pipelines

- **Requirement:** Adopt modern DevOps practices for data engineering including pipeline-as-code, version control, automated testing

### 8. Cost Optimisation & Resource Governance

- **Requirement:** Optimise compute/storage costs across platforms/pipelines
