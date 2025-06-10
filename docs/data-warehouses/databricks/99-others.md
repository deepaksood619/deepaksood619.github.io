# Others

## Download file from DBFS in Databricks

```bash
https://<databricks-instance>/files/folders/my-file.txt?o=6909828974111111
For ex. - https://abc.databricks.com/files/cdbi174/abc.csv?o=xxx
```

## DBIO File

"Determining location of DBIO file fragments" is a message that may be displayed during the boot process of a computer running the NetApp Data ONTAP operating system. This message indicates that the system is currently in the process of identifying and locating the **DBIO (Data Block Input/Output)** file fragments on the storage system. This process is necessary in order to ensure that all data on the system is accessible and in a consistent state.

The time it takes to complete this process can depend on several factors, such as the number of disks in the system, the amount of data stored on the disks, and the performance of the disks themselves. However, there are a few things you can do to potentially speed up this process:

1. **Increase the number of spare disks:** Adding more spare disks to the system can help to speed up the process, as the system can use these spare disks to rebuild data faster.
2. **Check for disk errors:** Make sure that all the disks are functioning properly and there are no errors on them.
3. **Check for firmware updates:** Make sure that the firmware of the storage system and the disks is up to date.
4. **Check for performance bottlenecks:** Check for any performance bottlenecks on the storage system, such as high CPU or memory usage, and address them if necessary.
5. **Check for any other software issues:** Ensure that the software is running smoothly and not having any issues.

Keep in mind that this process is an important step in ensuring data integrity, it should not be skipped or rushed. It's crucial to be patient and let the process finish.

[Determining location of DBIO file fragments. This operation can take some time.](https://community.databricks.com/s/question/0D58Y00009kctOISAY/what-does-determining-location-of-dbio-file-fragments-mean-and-how-do-i-speed-it-up)

## Merge Command

MERGE dramatically simplifies how a number of common data pipelines can be built; all the complicated multi-hop processes that inefficiently rewrote entire partitions can now be replaced by simple MERGE queries. This finer-grained update capability simplifies how you build your big data pipelines for various use cases ranging from change data capture to GDPR.

[Efficient Upserts into Data Lakes with Databricks Delta - The Databricks Blog](https://www.databricks.com/blog/2019/03/19/efficient-upserts-into-data-lakes-databricks-delta.html)

## CDC / Migration

[Migrating Transactional Data to a Delta Lake using AWS DMS - The Databricks Blog](https://www.databricks.com/blog/2019/07/15/migrating-transactional-data-to-a-delta-lake-using-aws-dms.html)

## Notebook-scoped Python libraries

```bash
%pip install matplotlib

%pip uninstall -y matplotlib

# Install a library from a version control system with %pip
%pip install git+https://github.com/databricks/databricks-cli
```

[Notebook-scoped Python libraries | Databricks on AWS](https://docs.databricks.com/libraries/notebooks-python-libraries.html)

## Photon

Photon is a native vectorized engine developed in C++ to dramatically improve query performance.

Photon is the next generation engine on the Databricks Lakehouse Platform that provides extremely fast query performance at low cost - from data ingestion, ETL, streaming, data science and interactive queries - directly on your data lake. Photon is compatible with Apache Spark™ APIs, so getting started is as easy as turning it on - no code changes and no lock-in.

[Announcing Photon Public Preview: The Next Generation Query Engine on the Databricks Lakehouse Platform - The Databricks Blog](https://www.databricks.com/blog/2021/06/17/announcing-photon-public-preview-the-next-generation-query-engine-on-the-databricks-lakehouse-platform.html)

[Photon - Databricks](https://www.databricks.com/product/photon)

[Notes on Photon - Databricks' query engine over data lakes](https://blog.the-pans.com/photon/)

## Database Contraints

Databricks supports standard SQL constraint management clauses. Constraints fall into two categories:

- Enforced constraints ensure that the quality and integrity of data added to a table is automatically verified.
- Informational primary key and foreign key constraints encode relationships between fields in tables and are not enforced.

### Enforced constraints on Databricks

When a constraint is violated, the transaction fails with an error. Two types of constraints are supported:

- `NOT NULL`: indicates that values in specific columns cannot be null.
- `CHECK`: indicates that a specified boolean expression must be true for each input row.

[Constraints on Databricks | Databricks on AWS](https://docs.databricks.com/tables/constraints.html#declare-primary-key-and-foreign-key-relationships)

[CONSTRAINT clause | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-ddl-create-table-constraint.html)

## Links

[delta-lake](networking/others/delta-lake.md)

[Partitions | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-partition.html)

[DBeaver integration with Databricks | Databricks on AWS](https://docs.databricks.com/dev-tools/dbeaver.html)

[Introducing English as the New Programming Language for Apache Spark | Databricks Blog](https://www.databricks.com/blog/introducing-english-new-programming-language-apache-spark)
