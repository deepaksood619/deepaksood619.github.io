# Interview Questions

### 1. What is BigQuery, and how does it differ from traditional databases?

**Answer:** BigQuery is a serverless, highly scalable, and cost-effective data warehouse by Google Cloud that allows fast SQL queries using the processing power of Google’s infrastructure. Unlike traditional databases:

- It uses **columnar storage**, which is optimized for analytical queries.
- It processes queries in parallel using a distributed architecture.
- It’s serverless, so you don’t need to manage infrastructure.

### 2. How does BigQuery handle scalability and performance optimization?

**Answer:**

- **Scalability**: BigQuery is designed to scale automatically as the volume of data and the complexity of queries increase.
- **Performance**: It uses **columnar storage** and **query caching**, and processes queries using a **massively parallel processing (MPP)** architecture.

To optimize performance:

- Use **partitioned** and **clustered tables**.
- Minimize the amount of data scanned by filtering and limiting columns.
- Use **materialized views** for precomputed results.

### 3. What are partitioned tables, and how do they improve query performance?

**Answer:** Partitioned tables in BigQuery divide your table into smaller, manageable chunks (partitions) based on a specified column (e.g., date). Queries on partitioned tables scan only the relevant partitions instead of the entire table, reducing data scanned and improving performance.

Types of partitions:

- **Ingestion-time partitioning**: Automatically partitions by the data's ingestion date.
- **Column-based partitioning**: Partitions by a specific column, typically a date or timestamp.

### 4. What are clustered tables, and how are they different from partitioned tables?

**Answer:** Clustered tables organize data within a table based on the values of one or more columns. This makes it faster to filter queries on those columns. Unlike partitioning (which reduces data scanned across partitions), clustering optimizes how data is stored **within each partition** to enhance query efficiency.

Example: You can partition a sales table by `date` and cluster by `region` and `product`.

### 5. What are the key features of BigQuery’s pricing model?

**Answer:** BigQuery’s pricing model includes:

1. **Storage costs**: Charged per GB of data stored.
2. **Query costs**: Charged based on the volume of data processed by queries (on-demand pricing).
3. **Flat-rate pricing**: For predictable workloads, you can pay a fixed monthly fee for a certain number of slots.

To save costs:

- Use **table partitions** and **clustering**.
- Leverage **free query caching** for repeated queries.
- Use **materialized views** to avoid redundant query processing.

### 6. How does BigQuery handle security and access control?

**Answer:** BigQuery uses Google Cloud IAM (Identity and Access Management) to manage access control. Key aspects include:

- **Roles and permissions**: Granular permissions can be assigned at the project, dataset, or table level.
- **Column-level security**: Fine-grained access control for sensitive data.
- **Encryption**: Data is encrypted at rest and in transit.

### 7. What are the differences between BigQuery Standard SQL and Legacy SQL?

**Answer:**

- **Standard SQL**:
    - Compliant with ANSI SQL 2011.
    - Supports advanced features like window functions, CTEs (WITH clauses), and JSON handling.
    - Preferred for modern development.
- **Legacy SQL**:
    - Proprietary to BigQuery, less feature-rich.
    - Requires a `#LegacySQL` tag to use.

Standard SQL is recommended as it aligns better with industry standards.

### 8. How do you load data into BigQuery?

**Answer:** Data can be loaded into BigQuery through:

1. **Console**: Using the web UI.
2. **CLI**: `bq` command-line tool.
3. **APIs**: BigQuery REST API or client libraries.
4. **Dataflow**: For streaming or batch data pipelines.
5. **Storage integration**: Load directly from Google Cloud Storage (GCS) in formats like CSV, JSON, Parquet, or Avro.

### 9. How can you troubleshoot query performance issues in BigQuery?

**Answer:**

1. Use **Query Execution Details** in the BigQuery console to analyze stages and execution time.
2. Optimize queries by:
    - Avoiding `SELECT *` and specifying columns.
    - Filtering and limiting scanned data using **partitioned** and **clustered tables**.
3. Leverage **query caching** for repeated queries.
4. Check the **slots usage** for flat-rate customers to avoid contention.

### 10. What is BigQuery ML, and how can it be used?

**Answer:** BigQuery ML enables you to build, train, and deploy machine learning models using SQL. It supports:

- **Regression**: Predict numeric values.
- **Classification**: Predict categorical labels.
- **Clustering**: Group similar data points (e.g., k-means).
- **Time-series forecasting**: Predict trends.

Example query:

```sql
CREATE MODEL my_model OPTIONS(model_type='linear_reg') AS SELECT feature1, feature2, target FROM my_dataset.my_table;
```

## Links

- [BigQuery SQL Interview Questions & Answers \| by Biswanath Giri \| Medium](https://bgiri-gcloud.medium.com/bigquery-sql-interview-questions-answers-5b1b7d57fbae)
