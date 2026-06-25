---
slug: /data-warehouses/redshift-to-snowflake-migration
title: Redshift to Snowflake Migration
description: Effortlessly migrate from Redshift to Snowflake with our comprehensive nine-phase framework, ensuring optimal planning, security, and performance.
created: 2026-05-28
updated: 2026-05-28
---
## Snowflake Migration Framework

A typical Amazon Redshift-to-Snowflake migration can be broken down into nine key phases.

1. Phase 1: Planning and Design
2. Phase 2: Environment and Security
3. Phase 3: Database Code Conversion
4. Phase 4: Data Migration
5. Phase 5: Data Ingestion
6. Phase 6: Reporting and Analytics
7. Phase 7: Data Validation and Testing
8. Phase 8: Deployment
9. Phase 9: Optimize and Run

## Migration Questions

**1. Workload Assessment & Inventory (Planning & Design)**

- How many databases, schemas, tables, views, stored procedures, and UDFs currently exist in our Redshift cluster?
- What are our peak user concurrency levels and primary query patterns (based on Redshift's `STL_QUERY` and `SVL_QUERY_SUMMARY` views)?
- What upstream ETL/ELT jobs and downstream applications (BI tools, data science notebooks) currently depend on this Redshift environment?
- Which workloads should we prioritize for a "quick win" (high business impact, low complexity) versus those requiring heavy re-architecture?

**2. Architecture & Security (Environment & Security)**

- Are our current S3 staging buckets in the same AWS region where we plan to host Snowflake to minimize data transfer costs and latency?
- How will we map our existing Redshift user and group permissions to Snowflake’s Role-Based Access Control (RBAC) model?
- What identity providers (e.g., Okta, Azure AD) will we use for Single Sign-On (SSO) and federation?

**3. Code & DDL Conversion (Database Code Conversion)**

- How many PL/pgSQL stored procedures exist that will require manual rewriting into Snowflake Scripting, Python, Java, or JavaScript?
- How heavily does our current DDL rely on Redshift-specific physical design clauses (like `DISTSTYLE`, `DISTKEY`, `SORTKEY`) that need to be stripped out?
- Are there custom scripts managing maintenance tasks (like `VACUUM` and `ANALYZE`) that we need to deprecate?

**4. Historical Data Migration (Data Movement)**

- What is the total terabyte/petabyte volume of historical data that needs to be unloaded to Amazon S3 via the `UNLOAD` command?
- Can we leverage compressed Parquet or CSV formats for the most optimal `COPY INTO` loading performance?

**5. Ongoing Data Ingestion (Pipelines)**

- Which existing ETL/ELT tools (e.g., AWS Glue, Informatica, dbt) require connection updates and SQL dialect overrides to point to Snowflake?
- Do we have any continuous, streaming data sources (like Kafka or Kinesis) that we should transition to Snowpipe for near-real-time ingestion?

**6. Downstream Analytics & BI (Reporting)**

- Which BI tools (e.g., Tableau, Power BI) will need their ODBC/JDBC drivers updated and redirected to Snowflake?
- Are there any critical reports or dashboards relying on custom Redshift SQL functions that will need to be refactored?

**7. Validation, Cutover, & Optimization (Testing & Deployment)**

- What are our strict KPIs for User Acceptance Testing (UAT) regarding row counts, aggregated value matching, and query performance benchmarking?
- What is our fallback strategy and read-only window for Redshift during the final deployment cutover?
- Have we defined our virtual warehouse auto-suspend policies (e.g., 60 seconds) and resource monitors to strictly manage Snowflake costs post-migration?

## Phase 3: Database Code Conversion

This phase involves converting Redshift’s DDL, DML, and procedural code to be compatible with Snowflake. Automation tools can accelerate this process, but manual review and adjustment are essential due to differences in SQL dialects and platform architecture.

**Your Actionable Steps:**

- **Convert DDL (Data Definition Language):**
    - **Tables and Views:** Extract CREATE TABLE and CREATE VIEW statements from Redshift. Convert Redshift-specific data types to their Snowflake equivalents (see Appendix 2).
    - **Remove Redshift-Specific Clauses:** Eliminate Redshift-specific physical design clauses like DISTSTYLE, DISTKEY, and SORTKEY. Snowflake’s architecture handles data distribution and clustering automatically or through logical clustering keys on very large tables.
- **Convert DML (Data Manipulation Language) and Procedural Code:**
    - **Rewrite Stored Procedures:** Redshift uses PL/pgSQL for stored procedures. These must be manually rewritten into a language supported by Snowflake, such as Snowflake Scripting (SQL), JavaScript, Python, or Java. This is often the most time-consuming part of the code conversion process.
    - **Translate SQL Functions:** Map Redshift-specific functions to their Snowflake counterparts. For example, Redshift’s GETDATE() becomes Snowflake’s CURRENT_TIMESTAMP(). See Appendix 3 for common function mappings.
    - **Replace Maintenance Commands:** Scripts containing Redshift-specific commands like VACUUM, ANALYZE, and REINDEX should be removed, as Snowflake handles these maintenance tasks automatically.

## Phase 4: Data Migration

This phase focuses on the physical movement of historical data from your Redshift cluster to Snowflake tables. The most efficient method leverages Amazon S3 as an intermediate staging area.

**Your Actionable Steps:**

- **Unload Data from Redshift to S3:**
    - Use the Redshift UNLOAD command to export data from tables into a designated S3 bucket. This is highly parallelized and significantly faster than a SELECT query via a client tool.
    - Format data as Parquet or compressed CSV for optimal loading performance into Snowflake. Use the PARALLEL ON option to write multiple files.
- **Load Data from S3 into Snowflake:**
    - **Create External Stages:** In Snowflake, create an external stage object that points to the S3 bucket containing your unloaded data.
    - **Use the COPY INTO Command:** Use Snowflake’s COPY INTO TABLE; command to load the data from the S3 stage into the target Snowflake tables. This command is highly performant and scalable.
    - **Leverage a Sized-Up Warehouse:** Use a dedicated, larger virtual warehouse for the initial data load to accelerate the process, and then scale it down or suspend it afterward to manage costs.

## Phase 5: Data Ingestion

Once the historical data is migrated, you must re-engineer your ongoing data ingestion pipelines to feed data directly into Snowflake instead of Redshift.

**Your Actionable Steps:**

- **Migrate Batch ETL/ELT Jobs:**
    - Update existing ETL jobs (in tools like AWS Glue, Talend, or Informatica) to target Snowflake as the destination. This typically involves changing the connection details and updating any SQL overrides to use Snowflake’s dialect.
- **Implement Continuous Ingestion with Snowpipe:**
    - For continuous data streams (e.g., from Kinesis or application logs landing in S3), configure Snowpipe. Snowpipe automatically and efficiently loads new data files from S3 into Snowflake tables as they arrive, providing a near-real-time ingestion solution.
- **Utilize the Snowflake Ecosystem:**
    - Explore Snowflake’s native connectors for platforms like Kafka and Spark to simplify direct data streaming.

## Snowflake vs. Redshift Architecture

| Feature          | Amazon Redshift                                                              | Snowflake                                                                   |
| ---------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Architecture** | Tightly coupled compute and storage (MPP)                                    | Decoupled compute, storage, and cloud services (Multi-cluster, Shared Data) |
| **Storage**      | Managed columnar storage on local SSDs attached to nodes                     | Centralized object storage (e.g., S3) with automatic micro-partitioning     |
| **Compute**      | Fixed-size cluster of nodes (Leader + Compute Nodes)                         | Elastic, on-demand virtual warehouses (compute clusters)                    |
| **Concurrency**  | Limited by cluster size; queries can queue                                   | High concurrency via multi-cluster warehouses that spin up automatically    |
| **Scaling**      | Scale by adding nodes (takes minutes to hours, involves data redistribution) | Instantly scale compute up/down/out (seconds); storage scales automatically |
| **Maintenance**  | Requires manual VACUUM and ANALYZE commands                                  | Fully managed; maintenance tasks are automated and run in the background    |

## Links

- [Amazon Redshift to Snowflake Migration Guide](https://docs.snowflake.com/en/migrations/guides/redshift)
