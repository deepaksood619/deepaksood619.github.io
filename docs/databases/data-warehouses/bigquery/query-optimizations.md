# Query Optimizations

```sql
-- Unoptimized
WHERE order_date >= DATE_TRUNC(CURRENT_DATE('Asia/Kolkata'), MONTH) - INTERVAL 1 MONTH

-- Optimized
WHERE order_date >= DATE_TRUNC(DATE_SUB(CURRENT_DATE('Asia/Kolkata'), INTERVAL 1 MONTH), MONTH)  AND order_date <= CURRENT_DATE('Asia/Kolkata')
```

### 1. Use SELECT Specific Columns

Avoid `SELECT *` as it scans all columns, including unnecessary ones. Instead, select only the columns you need.

**Example:**

```sql
SELECT customer_id, total_amount FROM orders;
```

### 2. Leverage Partitioning

- Partition tables by `DATE` or `TIMESTAMP` columns to minimize the data scanned.
- Query specific partitions using the `WHERE` clause.

**Example:**

```sql
SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';
```

### 3. Use Clustering

Cluster data based on frequently filtered columns (e.g., `region`, `product_id`). This optimizes how data is stored within partitions, speeding up queries.

**Example:**

```sql
CREATE TABLE sales (
  region STRING, product_id STRING, revenue FLOAT64
) PARTITION BY DATE(sale_date) CLUSTER BY region,
product_id;
```

### 4. Filter Early in Queries

Use filters as early as possible in your query to minimize the amount of data processed.

**Example:**

```sql
-- Less efficient SELECT * FROM orders WHERE total_amount > 100;
-- More efficient
SELECT order_id, total_amount FROM orders WHERE total_amount > 100;
```

### 5. Use WITH Clauses (Common Table Expressions)

Break down complex queries into manageable, reusable blocks using `WITH`.

**Example:**

```sql
WITH filtered_data AS (
  SELECT
    customer_id,
    total_amount
  FROM
    orders
  WHERE
    order_date >= '2024-01-01'
)
SELECT
  customer_id,
  SUM(total_amount) AS total_spent
FROM
  filtered_data
GROUP BY
  customer_id;
```

### 6. Leverage Query Caching

BigQuery automatically caches query results. If the same query (without changes) is run within 24 hours, cached results are used, avoiding redundant computation.

### 7. Use APPROX Functions

For large datasets where approximate results are sufficient, use `APPROX` functions like `APPROX_COUNT_DISTINCT` to reduce processing.

**Example:**

```sql
SELECT APPROX_COUNT_DISTINCT(customer_id) AS unique_customers FROM orders;
```

### 8. Optimize JOINs

- Reduce JOIN data size by filtering and aggregating before performing the JOIN.
- Ensure the smaller table is on the right-hand side of the JOIN for performance.

**Example:**

```sql
-- Filter smaller dataset first
WITH filtered_customers AS (
  SELECT
    customer_id,
    region
  FROM
    customers
  WHERE
    region = 'North America'
)
SELECT
  o.order_id,
  c.customer_id
FROM
  orders o
  JOIN filtered_customers c ON o.customer_id = c.customer_id;
```

### 9. Use ARRAY Aggregation and UNNEST Appropriately

Use `ARRAY` types to combine multiple rows into a single row when applicable. When querying nested or repeated fields, use `UNNEST` efficiently.

**Example:**

```sql
-- Efficiently flatten repeated fields
SELECT customer_id, item FROM orders, UNNEST(items) AS item
```

### 10. Limit Data with Pre-Aggregation

Pre-aggregate data using `GROUP BY` or materialized views to reduce scanned rows in subsequent queries.

**Example:**

```sql
-- Pre-aggregate sales by region
CREATE MATERIALIZED VIEW regional_sales AS
SELECT
  region,
  SU (revenue) AS total_revenue
FROM
  sales
GROUP BY
  region;
```

### 11. Use TEMP Tables for Large Intermediate Results

Store intermediate results in temporary tables for reuse in multiple queries.

**Example:**

```sql
CREATE TEMP TABLE temp_results AS
SELECT
  customer_id,
  COUNT(order_id) AS order_count
FROM
  orders
GROUP BY
  customer_id;
SELECT
  *
FROM
  temp_results
WHERE
  order_count > 10;
```

### 12. Optimize Window Functions

Minimize the use of window functions (`OVER` clause) when not necessary. Use aggregate functions with `GROUP BY` instead.

**Example:**

```sql
-- Instead of this
SELECT customer_id, SUM(total_amount) OVER(PARTITION BY customer_id) AS total_spent FROM orders;
-- Use this
SELECT customer_id, SUM(total_amount) AS total_spent FROM orders GROUP BY customer_id;
```

### 13. Materialized Views

Use materialized views for frequently run, repetitive queries. These precompute and store results, reducing query time.

### 14. Avoid Cross Joins

Cross joins process the Cartesian product of two tables, scanning massive amounts of data. Avoid unless absolutely necessary.

### 15. Monitor Query Execution

Use the **Query Execution Details** tab in the BigQuery console to identify bottlenecks like high bytes processed or skewed slot utilization.

## Others

### Avoid Overuse of Nested Queries

Flatten nested queries into simpler steps where possible. Complex subqueries can slow down execution.

### Leverage Table Sampling

Use `TABLESAMPLE` for debugging or testing on large datasets instead of processing the full table.

**Example:**

```sql
SELECT * FROM my_table TABLESAMPLE SYSTEM (10 PERCENT);
```

### Use Query Parameters

Use parameterized queries instead of hardcoding values. This improves performance and allows caching.

**Example:**

```sql
DECLARE start_date DATE;
DECLARE end_date DATE;
SET
  start_date = '2024-01-01';
SET
  end_date = '2024-01-31';
SELECT
  *
FROM
  orders
WHERE
  order_date BETWEEN start_date
  AND end_date;
```

### Use Native BigQuery Functions

Use built-in BigQuery functions like `STRING_AGG`, `ARRAY_AGG`, etc., instead of writing custom logic. These are highly optimized.

### Streaming Inserts vs Batch Inserts

If you use real-time inserts, ensure the streaming buffer is not overutilized. Batch inserts with larger data sizes can be more cost-effective.

### Avoid Repeated Computations

Compute values once and reuse them. For example, store common calculations in temporary tables or variables.

### Limit Result Sets

Use `LIMIT` when you don’t need full datasets, especially for exploratory queries.

### Optimize Data Formats

Prefer efficient data formats like Avro or Parquet over CSV, as they are compressed and optimized for analytical workloads.

### Take Advantage of BI Engine

If using BigQuery for dashboards, enable **BigQuery BI Engine** for faster response times.
