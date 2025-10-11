# Databricks Certified Data Engineer Associate

1. Databricks Intelligence Platform - 10%
2. Development and Ingestion - 30%
3. Data Processing & Transformations - 31%
4. Productionizing Data Pipelines - 18%
5. Data Governance & Quality - 11%

## Assessment Details

- Total number of questions: 45
- Time limit: 90 minutes
- Registration fee: $200
- Validity period: 2 years

## Exam outline

### Section 1: Databricks Intelligence Platform

- Enable features that simplify data layout decisions and optimize query performance.
- Explain the value of the Data Intelligence Platform.
- Identify the applicable compute to use for a specific use case.

### Section 2: Development and Ingestion

- Use Databricks Connect in a data engineering workflow.
- Determine the capabilities of Notebooks functionality.
- Classify valid Auto Loader sources and use cases.
- Demonstrate knowledge of Auto Loader syntax.
- Use Databricks' built-in debugging tools to troubleshoot a given issue.

### Section 3: Data Processing & Transformations

- Describe the three layers of the Medallion Architecture and explain the purpose of each layer in a data processing pipeline.
- Classify the type of cluster and configuration for optimal performance based on the scenario in which the cluster is used.
- Emphasize the advantages of LDP (for ETL process in Databricks).
- Implement data pipelines using LDP.
- Identify DDL (Data Definition Language)/DML features.
- Compute complex aggregations and Metrics with PySpark Dataframes.

### Section 4: Productionizing Data Pipelines

- Identify the difference between DAB and traditional deployment methods.
- Identify the structure of Asset Bundles.
- Deploy a workflow, repair, and rerun a task in case of failure.
- Use serverless for a hands-off, auto-optimized compute managed by Databricks.
- Analyzing the Spark UI to optimize the query.

### Section 5: Data Governance & Quality

- Explain the difference between managed and external tables.
- Identify the grant of permissions to users and groups within UC.
- Identify key roles in UC.
- Identify how audit logs are stored.
- Use lineage features in Unity Catalog.
- Use the Delta Sharing feature available with Unity Catalog to share data.
- Identify the advantages and limitations of Delta sharing.
- Identify types of delta sharing- Databricks vs external system.
- Analyze the cost considerations of data sharing across clouds.
- Identify Use cases of Lakehouse Federation when connected to external sources.

## Questions

- The serverless compute supports only SQL and Python
	- Limitations - [Serverless compute limitations \| Databricks on AWS](https://docs.databricks.com/aws/en/compute/serverless/limitations)
- query executes a micro-batch to process data every 2 minutes
	- trigger(processingTime=”2 minutes")
- Databricks Jobs has been recently renamed to Lakeflow Jobs.
- Running the VACUUM command on a Delta table deletes the unused data files older than a specified data retention period. As a result, you lose the ability to time travel back to any version older than that retention threshold.
- The `pathGlobFilter` option allows you to filter input files based on a glob pattern, such as `*.jpg`, when using Auto Loader.
- The `OPTIMIZE` command compacts small files into larger ones for better access patterns. Z-Order indexing further sorts data based on specific columns to improve query pruning. Both operations require substantial computational resources for scanning and writing data. Therefore, compute-optimized resources provide the necessary CPU power and parallelism to efficiently process these tasks. While storage and memory are important, the main bottleneck during optimization is CPU-intensive compute operations.
- Lakehouse Federation allows users and applications to run queries across diverse data sources—such as data lakes, warehouses, and databases—without requiring the physical migration of data into Databricks. This reduces data duplication and streamlines access, enabling a unified query experience across distributed environments.
- Databricks Asset Bundles allow teams to define jobs and workflows declaratively in a YAML file, promoting consistency, version control, and automation. These configurations can be stored and tracked in GitHub, making deployments reproducible and reliable. Other methods rely on manual processes or ad hoc tooling and lack the benefits of structured DevOps practices.

## Links

- [Databricks Certified Data Engineer Associate \| Databricks](https://www.databricks.com/learn/certification/data-engineer-associate)
- [databricks.com/sites/default/files/2025-09/databricks-certified-data-engineer-associate-exam-guide-25.pdf](https://www.databricks.com/sites/default/files/2025-09/databricks-certified-data-engineer-associate-exam-guide-25.pdf)
- [Databricks Certified Data Engineer Associate - I PASSED!!! : r/dataengineering](https://www.reddit.com/r/dataengineering/comments/1hsnqzv/databricks_certified_data_engineer_associate_i/)
