# Others

## Postgres Extensions

PostGIS - used for geospatial data manipulation and running location queries in SQL

 https://medium.com/@tjukanov/why-should-you-care-about-postgis-a-gentle-introduction-to-spatial-databases-9eccd26bc42b

1. **Key-Value data type (hstore)**
2. **Semi-structured data types**
3. **pg_timetable - Advanced postgres job scheduling**

https://www.cybertec-postgresql.com/en/pg_timetable-advanced-postgresql-job-scheduling

`SELECT * FROM pg_available_extensions;`

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

## pgagroal

pgagroal is a high-performance protocol-native connection pool for [PostgreSQL](https://www.postgresql.org/).

### Features

- High performance
- Connection pool
- Limit connections for users and databases
- Prefill support
- Remove idle connections
- Perform connection validation
- Graceful / fast shutdown
- Daemon mode
- User vault

[GitHub - agroal/pgagroal: High-performance connection pool for PostgreSQL](https://github.com/agroal/pgagroal)

[pgagroal](https://agroal.github.io/pgagroal/)

## PgBouncer

PgBouncer is a lightweight connection pooler for PostgreSQL

https://github.com/pgbouncer/pgbouncer/blob/master/etc/pgbouncer.ini

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

[Using PGBouncer with Consul for Postgresql high availability | by Sasha Aliashkevich | Digitalis.io Blog](https://blog.digitalis.io/using-pgbouncer-with-consul-for-postgresql-high-availability-686049c232fc)

## Odyssey

Advanced multi-threaded PostgreSQL connection pooler and request router.

https://github.com/yandex/odyssey

## Postgres on Kubernetes - Patroni

[GitHub - zalando/patroni: A template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes](https://github.com/zalando/patroni)

[Introduction - Patroni 3.2.2 documentation](https://patroni.readthedocs.io/en/latest/)

[High Availability PostgreSQL Cluster using Patroni and HAProxy](https://jfrog.com/community/devops/highly-available-postgresql-cluster-using-patroni-and-haproxy/)

[Article Detail](https://community.pivotal.io/s/article/How-to-setup-a-3-node-Patroni-cluster-using-etcd?language=en_US)

## pgbackrest

pgBackRest is a reliable and simple to configure backup and restore solution for PostgreSQL, which provides a powerful solution for any PostgreSQL database; be it a small project, or scaled up to enterprise-level use cases.

Many powerful features are included in pgBackRest, including parallel backup and restore, local or remote operation, full, incremental, and differential backup types, backup rotation, archive expiration, backup integrity, page checksums, backup resume, streaming compression and checksums, delta restore, and much more.

https://info.crunchydata.com/blog/how-to-get-started-with-pgbackrest-and-postgresql-12

[https://www.kubegres.io/](https://www.kubegres.io/)

## Pgroll

[GitHub - xataio/pgroll: PostgreSQL zero-downtime migrations made easy](https://github.com/xataio/pgroll)

[Introducing pgroll: zero-downtime, reversible, schema migrations for Postgres](https://xata.io/blog/pgroll-schema-migrations-postgres)

## Foreign Data Wrappers (FDWs)

Foreign data wrappers (FDWs) allow PostgreSQL to connect to and query data from external data sources. They provide a virtual table interface to remote data, enabling seamless integration. Examples include `postgres_fdw` for PostgreSQL-to-PostgreSQL integration or `file_fdw` for accessing data in flat files.

## pgbadger

A fast PostgreSQL Log Analyzer

pgBadger is a PostgreSQL performance analyzer, built for speed with fully detailed reports based on your PostgreSQL log files.

[GitHub - darold/pgbadger: A fast PostgreSQL Log Analyzer](https://github.com/darold/pgbadger)

[PostgreSQL Log Analysis With pgBadger \| Severalnines](https://severalnines.com/blog/postgresql-log-analysis-pgbadger/)

[PGBadger \| Postgresql log analysis made easy - DEV Community](https://dev.to/full_stack_adi/pgbadger-postgresql-log-analysis-made-easy-54ki)

## Others

- [GitHub - hydradatabase/hydra: Hydra: Column-oriented Postgres. Add scalable analytics to your project in minutes.](https://github.com/hydradatabase/hydra)
- [GitHub - getretake/retake: Open-Source Hybrid Search for Postgres](https://github.com/getretake/retake)
