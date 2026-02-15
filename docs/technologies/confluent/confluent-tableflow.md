# Confluent Tableflow

[Tableflow: Materialize Apache Kafka® Topics as Apache Iceberg™ and Delta Lake Tables With Zero ETL - YouTube](https://www.youtube.com/watch?v=O2l5SB-camQ&ab_channel=ConfluentDeveloper)

Table flow is a feature in Confluent Cloud that allows data from Kafka topics to be directly accessible as tables in data lakes without the need for traditional ETL processes. No copying, No modification, No ETL required.

- **Operational estate**: The SaaS apps, ERPs, custom applications, etc. that serve the needs of applications to transact with customers in real-time
- **Analytical estate**: The data warehouses, lakehouses, AI/ML platforms, and other custom batch workloads that support business analysis and reporting

### The Evolution of Data Warehousing

- **Classical Data Warehouse** (circa 1990): This model involved extracting data nightly from various operational databases and loading it into a central warehouse, creating a divide between operational and analytical data.
- **The Hadoop Era** (late 2000s): This era saw a shift towards distributed storage and compute layers, where data was loaded into a "data lake," and the transformation step happened after extraction.
- **Modern Data Lakes:** These use cloud storage (like S3) and Open Table formats (such as Apache Iceberg and Delta Lake) to apply schema and structure to the data, allowing for decoupled query processing.

### The Problem with Traditional Data Pipelines

- **Copying Data:** Traditional methods involve copying data from operational systems to analytical systems, which costs money, takes time, and can result in a loss of context.
- **Schema Management:** Without proper schema management, data in a data lake can be disorganized and difficult to use effectively. Open Table formats help solve this by introducing schema.

| Challenge                                 | Tableflow's Solution                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Complex and brittle ETL pipelines         | Eliminates manual transformations—zero ETL, direct Kafka-to-table flow                                 |
| Integration into analytics and AI systems | Supports open-table formats for downstream engines like Databricks, Snowflake, Athena, Starburst, etc. |
| Schema drift and evolution                | Leverages Schema Registry to enforce schema conversion and compatibility                               |
| Performance degradation from small files  | Automatic file compaction and table optimization                                                       |
| Complex data ops across environments      | Serves operational and analytical estates in real time via one mechanism                               |

### How Table Flow Works

- **Native Integration:** Table flow works because the data in Kafka topics is stored in a way that is natively compatible with Open Table formats. This means the data in the topic is directly exposed as a table, eliminating the need to copy it.
- **Leveraging Existing Features:** Table flow utilizes Confluent's Schema Registry to provide schema for the tables, making it easy to integrate with existing Kafka setups.

### Data Cleaning and Transformation

- **Shift Left Approach:** Instead of cleaning data within the data lake, table flow encourages a **"shift left"** approach where transformations and cleaning are done within the streaming estate (e.g., using Flink) before the data is exposed as a table. This ensures the data is clean and ready for analysis from the start.
- **Medallion Architecture:** A medallion architecture (bronze, silver, gold tiers) can be applied to Kafka topics, where raw data is refined into cleaner, more usable forms before being exposed as tables.

## Links

- [What React and Apache Iceberg Have in Common: Scaling Iceberg with Virtual Metadata - WarpStream](https://www.warpstream.com/blog/what-react-and-apache-iceberg-have-in-common-scaling-iceberg-with-virtual-metadata)
- [Tableflow: Convert Kafka topics to Iceberg and Delta tables \| Confluent](https://www.confluent.io/product/tableflow/)
- [Introducing Tableflow: Unifying Streaming and Analytics](https://www.confluent.io/blog/introducing-tableflow/)
