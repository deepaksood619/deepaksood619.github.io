# ETL in Redshift

### AWS Data pipeline

AWS data pipeline can integrate with all the available AWS services and provides templates with Redshift or S3 as a target. If you are imagining an ELT system, it would be worthwhile to use the Redshift target template directly so that the data is loaded directly to Redshift. That said, internally even this will use S3 as intermediate storage, but the end-user does not have to worry about that. One issue with AWS data pipeline is that it normally works in the batch mode as periodically scheduled jobs and this does not do a good job in case the data extraction needs to be in real-time or near-real-time.

### AWS RDS Sync with Redshift

If your source data is in RDS and wants to sync the RDS directly to Redshift in real-time, AWS offers partner solutions like Attunity and Flydata which works based on bin log streaming.

### COPY Command

The COPY command loads data into Amazon Redshift tables from either data files or Amazon DynamoDB tables.The copied files may reside in an S3 bucket, an EMR cluster or on a remote host accessed via SSH.Data is loadable from fixed-width, character-delimited text files, including CSV, AVRO and JSON format. Default format is character-delimited UTF-8 text files, delimited by the pipe (|) char.Rows to be copied may not be larger than 4 MB from any single source.Root users and IAM users must have INSERT privileges to modify Redshift (RS) tables.- Use a single COPY command to load from multiple files

- Split your load data
- When you load compressed data, with the COPY command from multiple files, the data loads in parallel. This divides the workload among the nodes in your cluster. When you load all the data from a single large, compressed file, Amazon Redshift is forced to perform a serialized load, which is much slower.
- In contrast, when you load delimited data from a large, uncompressed file, Amazon Redshift makes use of multiple slices. These slices work in parallel, automatically. This provides fast load performance. Specifically, when Amazon Redshift loads uncompressed, delimited data, data is split into ranges and handled by slices in each node.
- If you intend to load data from a large, compressed file, we recommend that you split your data into smaller files that are about equal size, from 1 MB to 1 GB after compression. For optimum parallelism, the ideal file size is 1--125 MB after compression. Make the number of files a multiple of the number of slices in your cluster.

https://docs.aws.amazon.com/redshift/latest/dg/c_loading-data-best-practices.html

### Copy Job

Automatically loads the new files detected in the specified Amazon S3 path

https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-redshift-supports-auto-copy-amazon-s3

### AWS Glue

### Redshift ETL Best Practices

1. While using the COPY command of Redshift, it is always better to use it on multiple source files rather than one big file. This helps in parallelly loading them and can save a lot of time. Using a manifest file is recommended in case of loading from multiple files.
2. In cases where data needs to be deleted after a specific time, it is better to use the time series tables. This involves creating different tables for different time windows and dropping them when that data is not needed. Dropping a table is way faster than deleting rows from one master table.
3. Execute 'VACUUM' command at regular intervals and after the large update or delete operations. Also, use 'ANALYZE' command frequently to ensure that database statistics are updated.
4. AWS workload management queues enable the user to prioritize different kinds of Redshift loads by creating separate queues for each type of job. It is recommended to create a separate queue for all the ETL jobs and a separate one for reporting jobs.
5. For transformations that span across multiple SQL statements, it is recommended to execute 'commit' command after the complete group is executed rather than committing after each statement. For example, let's say there are two INSERT statements in one of your ETL steps. It is better to use the COMMIT statement after both the statements than using a COMMIT after each statement.
6. While using intermediate tables and transferring data between an intermediate table and master table, it is better to use 'ALTER table APPEND' command to insert data from the temporary table to the target table. This command is generally faster than using "CREATE TABLE AS" or "INSERT INTO" statements. It is to be noted that 'ALTER table APPEND' command empties the source table.
7. If there is a need to extract a large amount of data from Redshift and save to S3 or other storage, it is better to use 'UNLOAD' command rather than 'SELECT' command since the former command will be executed parallelly by all the nodes saving a lot of time.
