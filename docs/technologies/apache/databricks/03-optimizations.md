# Optimizations

### Delta Lake Files - S3 Effect

[Save on storage costs with Databricks on AWS | Medium](https://medium.com/the-nobodys-of-tech/save-on-storage-costs-with-databricks-on-aws-374931708fa0)

The only way to delete files no longer needed for the table’s state is by running the [_VACUUM_](https://docs.delta.io/latest/delta-utility.html#vacuum) command on the table. The command takes a threshold (days), and only removes files beyond the threshold days so that the time-travel/restore is available for the threshold period. This is great and appears to have solved the problem of exponential file duplication, but there is one more caveat. Unless the S3 bucket backing the delta table is disabled for [_versioning_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html), the previous delete operation only adds a [_Delete Marker_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html) to the files, and the actual version is still retained for X number of days for general purpose restoration. The X number of days is defined in the [_Lifecycle Policy_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) of the S3 bucket.

Bottom line, if the delta tables are backed by a version enabled S3 Bucket with a very generous lifecycle policy, the storage cost will increase exponentially and mitigation efforts through VACUUM has very little effect. The bitter truth is, after a while, much of your S3 cost is towards the files that does not make up your table.

### Best practices: Delta Lake

- Provide data location hints
- Compact files
- Replace the content or schema of a table
- Spark caching
- Differences between Delta Lake and Parquet on Apache Spark
- Improve performance for Delta Lake merge
- Manage data recency
- Enhanced checkpoints for low-latency queries
- Manage column-level statistics in checkpoints
- Enable enhanced checkpoints for Structured Streaming queries

[Best practices: Delta Lake | Databricks on AWS](https://docs.databricks.com/delta/best-practices.html)

#### Databricks Runtime performance enhancements

- [Disk caching](https://docs.databricks.com/optimizations/disk-cache.html) accelerates repeated reads against Parquet data files by loading data to disk volumes attached to compute clusters.
- [Dynamic file pruning](https://docs.databricks.com/optimizations/dynamic-file-pruning.html) improves query performance by skipping directories that do not contain data files that match query predicates.
- [Low shuffle merge](https://docs.databricks.com/optimizations/low-shuffle-merge.html) reduces the number of data files rewritten by `MERGE` operations and reduces the need to recaculate `ZORDER` clusters.
- Apache Spark 3.0 introduced [adaptive query execution](https://docs.databricks.com/optimizations/aqe.html), which provides enhanced performance for many operations.

#### Databricks recommendations for enhanced performance

- You can [clone](https://docs.databricks.com/optimizations/clone.html) tables on Databricks to make deep or shallow copies of source datasets.
- The [cost-based optimizer](https://docs.databricks.com/optimizations/cbo.html) accelerates query performance by leveraging table statistics.
- You can [auto optimize](https://docs.databricks.com/optimizations/auto-optimize.html) Delta tables using optimized writes and automatic file compaction; this is especially useful for long-running Structured Streaming jobs.
- You can use Spark SQL to interact with [semi-structured JSON data](https://docs.databricks.com/optimizations/semi-structured.html) without parsing strings.
- [Higher order functions](https://docs.databricks.com/optimizations/higher-order-lambda-functions.html) provide built-in, optimized performance for many operations that do not have common Spark operators. Higher order functions provide a performance benefit over user defined functions.
- Databricks provides a number of built-in operators and special syntax for working with [complex data types](https://docs.databricks.com/optimizations/complex-types.html), including arrays, structs, and JSON strings.
- You can manually tune settings for joins that include [ranges](https://docs.databricks.com/optimizations/range-join.html) or contain data with substanial [skew](https://docs.databricks.com/optimizations/skew-join.html).

#### Opt-in behaviors

- Databricks provides a write serializable isolation guarantee by default; changing the [isolation level](https://docs.databricks.com/optimizations/isolation-level.html) to serializable can reduce throughput for concurrent operations, but might be necessary when read serializability is required.
- You can use [bloom filter indexes](https://docs.databricks.com/optimizations/bloom-filters.html) to reduce the likelihood of scanning data files that don’t contain records matching a given condition.

[Optimization recommendations on Databricks | Databricks on AWS](https://docs.databricks.com/optimizations/index.html)
