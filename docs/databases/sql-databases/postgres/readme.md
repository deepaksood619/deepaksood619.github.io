# Postgres

## Introduction

Is a relational database management system with an object-oriented approach, meaning that information can be represented as objects or classes in PostgreSQL schemas.
PostgreSQL is an open-source SQL database that is not controlled by any corporation. It is typically used for web application development.
PostgreSQL shares many of the same advantages of MySQL. It is easy to use, inexpensive, reliable and has a large community of developers. It also provides some additional features such as foreign key support without requiring complex configuration.- SQL Query Planner
    - Lexing
    - Parsing
    - Rewriter
    - Optimizer

- Two types of SQL Commands
  - Full blown query (SELECT, INSERT, UPDATE, DELETE)
  - Utility queries (GRANT, DROP table, REVOKE)
- JOIN
  - Bring data back together from different tables
  - Merge join
  - Hash join
- SQL is a declarative language, you tell the system what do you want, and system figures it out how to give it to you
- Query Plan
  - Optimal set of instructions to get your data from the database
  - Output of optimizer
  - Cost out different options using prunning process
- Scan
  - Sequential scan
  - Index scan
- Up to 12 tables, postgres tries all possible join operations and prunning for optimization query
- Generic query optimizer

## Functions in Postgres

Postgres provides a powerful server-side function environment in multiple programming languages.
Try to pre-process as much data as you can on the Postgres server with server-side functions. That way, you can cut down on the latency that comes from passing too much data back and forth between your application servers and your database. This approach is particularly useful for large aggregations and joins.
What's even better is your development team can use its existing skill set for writing Postgres code. Other than the default PL/pgSQL (Postgres' native procedural language), Postgres functions and triggers can be written in PL/Python, PL/Perl, PL/V8 (JavaScript extension for Postgres) and PL/R.
Here is an example of creating a PL/Python function for checking string lengths:

```sql
CREATE FUNCTION longer_string_length (string1 string, string2 string)
RETURNS integer
AS $$
a=len(string1)
b-len(string2)
if a > b:
  return a
return b
$$ LANGUAGE plpythonu;
```

## Advanced Features

- in-memory caching
- full text search

<https://rob.conery.io/2019/10/29/fine-tuning-full-text-search-with-postgresql-12>

- specialized indexing
- key-value storage
- Partial indexes

A partial index can save space by specifying which values get indexed
Apartial indexis an index built over a subset of a table; the subset is defined by a conditional expression (called thepredicateof the partial index). The index contains entries only for those table rows that satisfy the predicate. Partial indexes are a specialized feature, but there are several situations in which they are useful.
One major reason for using a partial index is to avoid indexing common values. Since a query searching for a common value (one that accounts for more than a few percent of all the table rows) will not use the index anyway, there is no point in keeping those rows in the index at all. This reduces the size of the index, which will speed up those queries that do use the index. It will also speed up many table update operations because the index does not need to be updated in all cases.

```sql
CREATE INDEX orders_completed_user_id
ON orders (user_id)
WHERE completed IS TRUE;
```

<https://www.postgresql.org/docs/12/indexes-partial.html>

## JSON Types

PostgreSQLoffers two types for storing JSON data:jsonandjsonb.
Thejsonandjsonbdata types accept *almost*identical sets of values as input. The major practical difference is one of efficiency. Thejsondata type stores an exact copy of the input text, which processing functions must reparse on each execution; whilejsonbdata is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed.jsonbalso supports indexing, which can be a significant advantage.
<https://www.postgresql.org/docs/current/datatype-json.html>

<https://severalnines.com/database-blog/overview-json-capabilities-within-postgresql>

## Containment

Containment tests whether one document (a set or an array) is contained within another.

## Postgres Extensions

1. PostGIS

used for geospatial data manipulation and running location queries in SQL
<https://medium.com/@tjukanov/why-should-you-care-about-postgis-a-gentle-introduction-to-spatial-databases-9eccd26bc42b>
2. **Key-Value data type (hstore)**

3. **Semi-structured data types**

4. **pg_timetable - Advanced postgres job scheduling**

<https://www.cybertec-postgresql.com/en/pg_timetable-advanced-postgresql-job-scheduling>
SELECT * FROM pg_available_extensions;
| tablefunc          | functions that manipulate whole tables, including crosstab           |
|-------------------|-----------------------------------------------------|
| adminpack          | administrative functions for PostgreSQL                              |
| amcheck            | functions for verifying relation integrity                           |
| tsm_system_rows    | TABLESAMPLE method which accepts number of rows as a limit           |
| isn                | data types for international product numbering standards             |
| pageinspect        | inspect the contents of database pages at a low level                |
| btree_gist         | support for indexing common datatypes in GiST                        |
| moddatetime        | functions for tracking last modification time                        |
| insert_username    | functions for tracking who changed a table                           |
| intagg             | integer aggregator and enumerator (obsolete)                         |
| pg_buffercache     | examine the shared buffer cache                                      |
| fuzzystrmatch      | determine similarities and distance between strings                  |
| cube               | data type for multidimensional cubes                                 |
| uuid-ossp          | generate universally unique identifiers (UUIDs)                      |
| dict_int           | text search dictionary template for integers                         |
| seg                | data type for representing line segments or floating-point intervals |
| dict_xsyn          | text search dictionary template for extended synonym processing      |
| earthdistance      | calculate great-circle distances on the surface of the Earth         |
| pgcrypto           | cryptographic functions                                              |
| sslinfo            | information about SSL certificates                                   |
| pg_prewarm         | prewarm relation data                                                |
| tcn                | Triggered change notifications                                       |
| lo                 | Large Object maintenance                                             |
| pgrowlocks         | show row-level locking information                                   |
| tsm_system_time    | TABLESAMPLE method which accepts time in milliseconds as a limit     |
| dblink             | connect to other PostgreSQL databases from within a database         |
| pg_trgm            | text similarity measurement and index searching based on trigrams    |
| citext             | data type for case-insensitive character strings                     |
| xml2               | XPath querying and XSLT                                              |
| plpgsql            | PL/pgSQL procedural language                                         |
| autoinc            | functions for autoincrementing fields                                |
| refint             | functions for implementing referential integrity (obsolete)          |
| unaccent           | text search dictionary that removes accents                          |
| timetravel         | functions for implementing time travel                               |
| pgstattuple        | show tuple-level statistics                                          |
| postgres_fdw       | foreign-data wrapper for remote PostgreSQL servers                   |
| file_fdw           | foreign-data wrapper for flat file access                            |
| pg_freespacemap    | examine the free space map (FSM)                                     |
| hstore             | data type for storing sets of (key, value) pairs                     |
| btree_gin          | support for indexing common datatypes in GIN                         |
| pg_stat_statements | track execution statistics of all SQL statements executed            |
| intarray           | functions, operators, and index support for 1-D arrays of integers   |
| bloom              | bloom access method - signature file based index                     |
| ltree              | data type for hierarchical tree-like structures                      |
| pg_visibility      | examine the visibility map (VM) and page-level visibility info       |

## Indexes in Postgres

- [B-tree indexes](https://www.postgresql.org/docs/current/btree-intro.html)

B-tree indexes are binary trees that are used to sort data efficiently. They're the default if you use theINDEXcommand. Most of the time, a B-tree index suffices. As you scale, inconsistencies can be a larger problem, so use the [amcheck](https://www.postgresql.org/docs/11/amcheck.html) extension periodically.

- [BRIN indexes](https://www.postgresql.org/docs/11/brin-intro.html)

A Block Range INdex (BRIN) can be used when your table is naturally already sorted by a column, and you need to sort by that column. For example, for a log table that was written sequentially, setting a BRIN index on the timestamp column lets the server know that the data is already sorted.

- [Bloom filter index](https://www.postgresql.org/docs/11/bloom.html)

A bloom index is perfect for multi-column queries on big tables where you only need to test for equality. It uses a special mathematical structure called a bloom filter that's based on probability and uses significantly less space.

- [GIN and GiST indexes](https://www.postgresql.org/docs/11/textsearch-indexes.html)

Use a GIN or GiST index for efficient indexes based on composite values like text, arrays, and JSON.
<https://habr.com/en/company/postgrespro/blog/448746>

## pgagroal

pgagroalis a high-performance protocol-native connection pool for [PostgreSQL](https://www.postgresql.org/).

## Features

- High performance
- Connection pool
- Limit connections for users and databases
- Prefill support
- Remove idle connections
- Perform connection validation
- Graceful / fast shutdown
- Daemon mode
- User vault
<https://github.com/agroal/pgagroal>

## PgBouncer

PgBouncer is a lightweight connection pooler for PostgreSQL

<https://github.com/pgbouncer/pgbouncer/blob/master/etc/pgbouncer.ini>

```python
DATABASES_HOST:"zpg-postgresql-headless.example"
DATABASES_PORT:"5432"
DATABASES_USER:"postgres"
DATABASES_PASSWORD:"xitanez123"
DATABASES_DBNAME:"example_db_new"
PGBOUNCER_LISTEN_PORT:"5432"
PGBOUNCER_MAX_CLIENT_CONN:"10000"
PGBOUNCER_DEFAULT_POOL_SIZE:"100"
PGBOUNCER_MAX_DB_CONNECTIONS:"100"
PGBOUNCER_MAX_USER_CONNECTIONS:"100"
PGBOUNCER_MIN_POOL_SIZE:"10"
PGBOUNCER_SERVER_IDLE_TIMEOUT:"600"
PGBOUNCER_CLIENT_IDLE_TIMEOUT:"600"
```

## Odyssey

Advanced multi-threaded PostgreSQL connection pooler and request router.
<https://github.com/yandex/odyssey>

## Postgres on Kubernetes

<https://github.com/zalando/patroni>

## Streaming replication asynchronous and synchronous

<https://severalnines.com/database-blog/converting-asynchronous-synchronous-replication-postgresql>

## pg_trgm

Trigram (Trigraph) concepts

A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages.

Note: pg_trgm ignores non-word characters (non-alphanumerics) when extracting trigrams from a string. Each word is considered to have two spaces prefixed and one space suffixed when determining the set of trigrams contained in the string. For example, the set of trigrams in the string "cat" is "c", "ca" , "cat", and "at". The set of trigrams in the string "foo|bar" is "f", "fo", "foo", "oo", "b", "ba", "bar", and "ar"

<https://www.postgresql.org/docs/9.6/pgtrgm.html>

## Postgres database tunable parameters to optimize performance (configurations)

1. shared_buffer

PostgreSQL uses its own buffer and also uses kernel buffered IO. That means data is stored in memory twice, first in PostgreSQL buffer and then kernel buffer. Unlike other databases, PostgreSQL does not provide direct IO. This is called double buffering. The PostgreSQL buffer is called **shared_buffer** which is the most effective tunable parameter for most operating systems. This parameter sets how much dedicated memory will be used by PostgreSQL for cache.

2. wal_buffers

PostgreSQL writes its WAL (write ahead log) record into the buffers and then these buffers are flushed to disk. The default size of the buffer, defined bywal_buffers, is 16MB, but if you have a lot of concurrent connections then a higher value can give better performance.

3. effective_cache_size

Theeffective_cache_sizeprovides an estimate of the memory available for disk caching. It is just a guideline, not the exact allocated memory or cache size. It does not allocate actual memory but tells the optimizer the amount of cache available in the kernel. If the value of this is set too low the query planner can decide not to use some indexes, even if they'd be helpful. Therefore, setting a large value is always beneficial.

4. work_mem

This configuration is used for complex sorting. If you have to do complex sorting then increase the value ofwork_memfor good results. In-memory sorts are much faster than sorts spilling to disk. Setting a very high value can cause a memory bottleneck for your deployment environment because this parameter is per user sort operation. Therefore, if you have many users trying to execute sort operations, then the system will allocatework_mem*totalsortoperationsfor all users. Setting this parameter globally can cause very high memory usage. So it is highly recommended to modify this at the session level.

5. maintenance_work_mem

maintenance_work_memis a memory setting used for maintenance tasks. The default value is 64MB. Setting a large value helps in tasks like [VACUUM](https://www.percona.com/blog/2018/08/06/basic-understanding-bloat-vacuum-postgresql-mvcc/), RESTORE, CREATE INDEX, ADD FOREIGN KEY and ALTER TABLE.

6. synchronous_commit

This is used to enforce that commit will wait for WAL to be written on disk before returning a success status to the client. This is a trade-off between performance and reliability. If your application is designed such that performance is more important than the reliability, then turn offsynchronous_commit. This means that there will be a time gap between the success status and a guaranteed write to disk. In the case of a server crash, data might be lost even though the client received a success message on commit. In this case, a transaction commits very quickly because it will not wait for a WAL file to be flushed, but reliability is compromised.

7. checkpoint_timeout, checkpoint_completion_target

PostgreSQL writes changes into WAL. The checkpoint process flushes the data into the data files. This activity is done when CHECKPOINT occurs. This is an expensive operation and can cause a huge amount of IO. This whole process involves expensive disk read/write operations. Users can always issue CHECKPOINT whenever it seems necessary or automate the system by PostgreSQL's parameterscheckpoint_timeoutandcheckpoint_completion_target.
The checkpoint_timeout parameter is used to set time between WAL checkpoints. Setting this too low decreases crash recovery time, as more data is written to disk, but it hurts performance too since every checkpoint ends up consuming valuable system resources. The checkpoint_completion_target is the fraction of time between checkpoints for checkpoint completion. A high frequency of checkpoints can impact performance. For smooth checkpointing, checkpoint_timeoutmust be a low value. Otherwise the OS will accumulate all the dirty pages until the ratio is met and then go for a big flush.

<https://www.percona.com/blog/2018/08/31/tuning-postgresql-database-parameters-to-optimize-performance>

<https://postgresqlco.nf/en/doc/param>

## Caching

<https://madusudanan.com/blog/understanding-postgres-caching-in-depth>

## Database Physical Storage

<https://www.postgresql.org/docs/current/storage.html>

## Others

## pgbackrest

pgBackRest is a reliable and simple to configure backup and restore solution for PostgreSQL, which provides a powerful solution for any PostgreSQL database; be it a small project, or scaled up to enterprise-level use cases.
Many powerful features are included in pgBackRest, including parallel backup and restore, local or remote operation, full, incremental, and differential backup types, backup rotation, archive expiration, backup integrity, page checksums, backup resume, streaming compression and checksums, delta restore, and much more.

<https://info.crunchydata.com/blog/how-to-get-started-with-pgbackrest-and-postgresql-12>

[https://www.kubegres.io/](https://www.kubegres.io/)

## Advanced

Low level working - <https://erthalion.info/2019/12/06/postgresql-stay-curious>

Locking Tuples internals - <https://github.com/postgres/postgres/blob/master/src/backend/access/heap/README.tuplock>

Youtube - [Breaking PostgreSQL at Scale - Christophe Pettus](https://www.youtube.com/watch?v=XUkTUMZRBE8)

## Configuration

<https://tightlycoupled.io/my-goto-postgres-configuration-for-web-services>

## Tools

- pgadmin

## References

<http://www.postgresqltutorial.com>

<https://dev.to/digitalocean/-an-introduction-to-queries-in-postgresql-44la>

<https://postgrescheatsheet.com/#/databases>

SE Radio - 328: Postgres Query Planner (Robert Blumen with Bruce Momjian)

<https://dev.to/heroku/postgres-is-underrated-it-handles-more-than-you-think-4ff3>

<https://sql-performance-explained.com>

<https://wiki.postgresql.org/wiki/Don%27t_Do_This>

[Scaling Postgres Episodes](https://www.youtube.com/playlist?list=PLdTaEgcmPg9Kl539gyIFtWL0-cqk3m7v9)

[PostgreSQL Tutorials](https://www.youtube.com/playlist?list=PLdTaEgcmPg9KiTCPWh-K961tiZrvhgfFu)

<https://zerodha.tech/blog/working-with-postgresql>

[Postgres Architecture Explained - YouTube](https://www.youtube.com/watch?v=Q56kljmIN14)
