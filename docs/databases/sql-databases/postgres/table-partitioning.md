# Table Partitioning

[PostgreSQL: Documentation: 15: 5.11. Table Partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)

## Declarative Partitioning

PostgreSQL allows you to declare that a table is divided into partitions. The table that is divided is referred to as a _partitioned table_. The declaration includes the _partitioning method_ as described above, plus a list of columns or expressions to be used as the _partition key_.

The partitioned table itself is a "virtual" table having no storage of its own. Instead, the storage belongs to _partitions_, which are otherwise-ordinary tables associated with the partitioned table. Each partition stores a subset of the data as defined by its _partition bounds_. All rows inserted into a partitioned table will be routed to the appropriate one of the partitions based on the values of the partition key column(s). Updating the partition key of a row will cause it to be moved into a different partition if it no longer satisfies the partition bounds of its original partition.

Partitions may themselves be defined as partitioned tables, resulting in _sub-partitioning_. Although all partitions must have the same columns as their partitioned parent, partitions may have their own indexes, constraints and default values, distinct from those of other partitions. See [CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html "CREATE TABLE") for more details on creating partitioned tables and partitions.

It is not possible to turn a regular table into a partitioned table or vice versa. However, it is possible to add an existing regular or partitioned table as a partition of a partitioned table, or remove a partition from a partitioned table turning it into a standalone table; this can simplify and speed up many maintenance processes. See [ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html "ALTER TABLE") to learn more about the `ATTACH PARTITION` and `DETACH PARTITION` sub-commands.

Partitions can also be [foreign tables](https://www.postgresql.org/docs/current/ddl-foreign-data.html "5.12. Foreign Data"), although considerable care is needed because it is then the user's responsibility that the contents of the foreign table satisfy the partitioning rule. There are some other restrictions as well. See [CREATE FOREIGN TABLE](https://www.postgresql.org/docs/current/sql-createforeigntable.html "CREATE FOREIGN TABLE") for more information.

## Partition Maintenance

Normally the set of partitions established when initially defining the table is not intended to remain static. It is common to want to remove partitions holding old data and periodically add new partitions for new data. One of the most important advantages of partitioning is precisely that it allows this otherwise painful task to be executed nearly instantaneously by manipulating the partition structure, rather than physically moving large amounts of data around.

The simplest option for removing old data is to drop the partition that is no longer necessary:

`DROP TABLE measurement_y2006m02;`

This can very quickly delete millions of records because it doesn't have to individually delete every record. Note however that the above command requires taking an `ACCESS EXCLUSIVE` lock on the parent table.

Another option that is often preferable is to remove the partition from the partitioned table but retain access to it as a table in its own right. This has two forms:

```sql
ALTER TABLE measurement DETACH PARTITION measurement_y2006m02;
ALTER TABLE measurement DETACH PARTITION measurement_y2006m02 CONCURRENTLY;
```

The `ATTACH PARTITION` command requires taking a `SHARE UPDATE EXCLUSIVE` lock on the partitioned table.

## Partition Pruning

_Partition pruning_ is a query optimization technique that improves performance for declaratively partitioned tables

## Others

![table-partitioning-postgres](../../../media/Pasted%20image%2020230326214011.jpg)

## Links

- [Partitioning Sharding](databases/sql-databases/partitioning-sharding.md)
- [Partitioning Improvements in PostgreSQL 13 - Highgo Software Inc.](https://www.highgo.ca/2020/08/08/partitioning-improvements-in-postgresql-13/)
- [They Enabled Postgres Partitioning and their Backend fell apart - YouTube](https://www.youtube.com/watch?v=YPorP8BsF_c)
- [Mastering PostgreSQL Table Partitioning](https://fragland.dev/a-guide-to-table-partitioning-with-postgresql-12)
- [**Automatically managing partitioned data on Amazon RDS for PostgreSQL**- AWS Online Tech Talks - YouTube](https://www.youtube.com/watch?v=AfQJgoyv9Fc)
    - pg_partman
    - pg_cron
    - [pages.awscloud.com/rs/112-TZM-766/images/2022\_1006-DAT\_Slide-Deck.pdf](https://pages.awscloud.com/rs/112-TZM-766/images/2022_1006-DAT_Slide-Deck.pdf)
    - [Managing PostgreSQL partitions with the pg\_partman extension - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL_Partitions.html)
