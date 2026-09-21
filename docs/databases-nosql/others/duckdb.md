---
slug: /databases-nosql/duckdb
title: DuckDB
description: Discover DuckDB, the open-source SQL database optimized for analytics, offering high performance, embedded functionality, and support for diverse data formats.
created: 2024-12-15
updated: 2026-09-19
---
DuckDB is an open-source, high-performance, in-process SQL database management system (RDBMS) for analytics:

- **Designed for OLAP -** DuckDB is designed for online analytical processing (OLAP) workloads, rather than transactional (OLTP) applications.
- **Embedded -** DuckDB operates within the same process as your application or notebook, eliminating network overhead.
- **Versatile -** DuckDB can handle diverse data formats, such as CSV, JSON, Parquet, and Apache Arrow. It also integrates with databases like MySQL, SQLite, and Postgres.
- **Easy to use -** DuckDB provides a rich SQL dialect, with support for arbitrary and nested correlated subqueries, window functions, collations, and complex types.
- **Fast -** DuckDB is designed to be fast, reliable, and portable. It can efficiently process and query gigabytes of data from various sources.
- **Embeddable -** DuckDB enables users to analyze data on edge, which can improve response times and preserve bandwidth.

## Commands

```bash
brew install duckdb
```

## Performance Optimization

- [Performance Guide – DuckDB](https://duckdb.org/docs/guides/performance/overview.html)

### Appender

If you're streaming data into DuckDB, INSERT statements become a bottleneck fast.

DuckDB's Appender API bypasses the SQL layer entirely. No parsing, no query planning. You write directly to the columnar storage format, which means you can handle real-time ingestion without the usual speed/batch size trade-off.

Stream rows through a low-level API. Data caches in batches before writing to disk. You're essentially using a binary protocol instead of SQL strings.

Good for:

- Kafka consumers or message queue ingestion
- Log aggregation pipelines
- IoT sensor data collection
- Any scenario where data arrives continuously

A few things to watch out for. It's order and type sensitive. You match columns exactly, no inference. One constraint violation fails the entire batch, no partial inserts. And you're writing to a single table per Appender instance.

Available in C, C++, Go, Java, and Rust. For batch ETL or small datasets, regular INSERT is simpler and fine. But for streaming? This is the tool.

[Appender – DuckDB](https://duckdb.org/docs/stable/data/appender)

## PostgreSQL Integration

### Read & Write Postgres from DuckDB (the `postgres` extension)

The official `postgres` extension uses Postgres's binary transfer protocol to directly read and write data with minimal overhead.

```sql
INSTALL postgres;
LOAD postgres;

-- Attach a Postgres database as a set of DuckDB views
ATTACH 'dbname=my_db user=postgres password=secret host=127.0.0.1' AS pg (TYPE postgres);

-- Add READ_ONLY to avoid locking/altering production tables from analytical queries
ATTACH 'dbname=my_db user=postgres host=127.0.0.1' AS pg (TYPE postgres, READ_ONLY);

-- Query Postgres directly
SELECT * FROM pg.users WHERE status = 'active';

-- Import into a local DuckDB table
CREATE TABLE local_users AS SELECT * FROM pg.users;

-- Export a DuckDB table back into Postgres
INSERT INTO pg.target_table SELECT * FROM local_duckdb_table;
```

[Postgres Extension – DuckDB](https://duckdb.org/docs/stable/extensions/postgres)

### Run DuckDB inside Postgres (`pg_duckdb`)

[pg_duckdb](https://github.com/duckdb/pg_duckdb) is an open-source extension that embeds DuckDB's vectorized engine inside a running Postgres server, so you can join local Postgres tables with large external files (e.g. Parquet) without leaving Postgres.

### When to use which

| Use case | Tool | Why |
|---|---|---|
| Ad-hoc analytics / BI | DuckDB + `postgres` extension | Pulls data into DuckDB's columnar engine without straining Postgres |
| ETL / data migration | DuckDB (`COPY` / `ATTACH`) | Moves large chunks of data between systems or out to Parquet |
| In-place acceleration | Postgres + `pg_duckdb` | Accelerates existing Postgres workloads, unlocks direct Parquet reads inside Postgres |

### Pattern: DuckDB + Metabase on top of RDS Postgres, daily sync

For an analytics stack where Postgres (e.g. AWS RDS) is the source of truth, DuckDB is the analytical engine, and [Metabase](ai/data-visualization/metabase.md) serves dashboards on top of DuckDB — with Postgres and DuckDB on different hosts and no need for live queries — the live `ATTACH` over the network gets bottlenecked by bandwidth and racks up RDS egress cost. Prefer a nightly batch export instead:

```text
[ AWS RDS (Postgres) ]
          │ (nightly cron: export to Parquet)
          ▼
[ Analytics server filesystem ] --(DuckDB reads Parquet)--> [ DuckDB file (analytics.db) ]
                                                                      │
                                                                      ▼
                                                             [ Metabase dashboards ]
```

```python
import duckdb, os

RDS_CONN = "dbname=your_db user=your_user password=your_pwd host=xxx.rds.amazonaws.com port=5432"
DATA_DIR = "./data"
tables = ["users", "orders", "products", "transactions", "logs"]

os.makedirs(DATA_DIR, exist_ok=True)
con = duckdb.connect("analytics.db")
con.sql("INSTALL postgres; LOAD postgres;")

for table in tables:
    parquet_path = f"{DATA_DIR}/{table}.parquet"
    # Stream straight from RDS into a compressed local Parquet file
    con.sql(f"""
        COPY (SELECT * FROM postgres_scan('{RDS_CONN}', 'public', '{table}'))
        TO '{parquet_path}' (FORMAT 'PARQUET', COMPRESSION 'ZSTD');
    """)
    # View keeps analytics.db small while queries stay fast
    con.sql(f"CREATE OR REPLACE VIEW {table} AS SELECT * FROM '{parquet_path}';")
```

Notes:

- ZSTD-compressed Parquet typically shrinks a Postgres table 3-5x on disk.
- DuckDB allows multiple readers but only one writer per `.db` file — if Metabase is actively querying while the sync script writes, use views over external Parquet files (as above) rather than materialized tables, since that only needs a lock while swapping the view definition, not for the whole sync.
- To refresh a single table immediately (e.g. after an urgent fix) instead of waiting for the nightly cron, rerun the sync for just that table.

**Data correction workflow:** since Postgres is the source of truth, fix errors found via Metabase/DuckDB there, not in DuckDB — `UPDATE`s inside DuckDB would be silently overwritten by the next sync. Patch the row(s) in Postgres, then either wait for the nightly sync or manually rerun it for the affected table to reflect the fix in Metabase right away.

## MotherDuck & Multi-User DuckDB

DuckDB is single-user/embedded by design — one writer locks the `.db` file — which is the main gap MotherDuck and a few open-source projects address.

### MotherDuck

MotherDuck is a serverless, cloud-based data analytics platform and data warehouse built on top of DuckDB. Founded in 2022, based in Seattle. It extends DuckDB's local speed into a collaborative cloud platform capable of handling multi-terabyte datasets. **Not open-source** — it's a proprietary SaaS; only the underlying DuckDB engine it runs is open-source (MIT).

- **Hybrid execution:** splits query processing between local hardware and cloud compute — e.g. a `JOIN` between a local file on your laptop and a table stored in MotherDuck's cloud.
- **Hypertenancy / "Ducklings":** instead of one shared always-on cluster, MotherDuck provisions isolated, serverless compute instances ("Ducklings") per user/agent/dashboard session — they spin up in milliseconds, avoiding the "noisy neighbour" problem and cluster-tuning overhead.
- **Agent-first analytics:** optimized for high-concurrency AI agent exploration; integrates with [MCP](ai/llm/mcp/mcp-model-context-protocol.md) (see [motherduckdb/mcp-server-motherduck](https://github.com/motherduckdb/mcp-server-motherduck)) for building AI-powered data apps/dashboards from a text prompt.
- **Modern data stack integrations:** native ingestion (Fivetran, Airbyte), transformation (dbt), visualization (Tableau, Power BI).
- Startup Program waives platform fees and grants consumption credits for early-stage teams.

| | DuckDB (OSS) | MotherDuck (cloud) |
|---|---|---|
| Environment | Local, in-process only | Hybrid: local in-process + cloud |
| Storage | Local files or remote S3 | Managed cloud storage, auto-optimized |
| Concurrency | Low — not built for multiple parallel users | High — isolated compute scales per team/agent |
| Collaboration | Manual data sharing | Built-in sharing, security, access control |

[MotherDuck](https://motherduck.com)

### Free, Open-Source Multi-User Options

#### Quack Protocol

Quack is DuckDB's own client-server protocol: "DuckDB instances can now talk to each other using the Quack remote protocol." Multiple separate processes — local or remote — can modify tables in parallel without locking each other out.

- **Built on HTTP** — chosen because "everyone and their little brother knows how to deal with HTTP in load balancing, authentication, firewalls." Interactions are request-response, always client-driven, and a query can be completely handled in a single round trip (vs. a minimum of two for Arrow Flight SQL). Uses an `application/duckdb` MIME type built on DuckDB's own internal serialization primitives (originally built for WAL files).
- **Default port 9494** (a nod to the year Netscape Navigator was released), server binds to localhost by default, and Quack does not use SSL by default — put it behind a reverse proxy (nginx) for internet exposure.
- **Auth:** ships with a default authentication method (a random token generated on server startup) and no authorization restrictions, but both are overridable with user-supplied code — "those callbacks can even be plain SQL macros" — so it can integrate with an existing auth system. No built-in enterprise RBAC out of the box.

```sql
-- Server (DuckDB #1)
CALL quack_serve('quack:localhost', token = 'super_secret');
CREATE TABLE hello AS FROM VALUES ('world') v(s);

-- Client (DuckDB #2)
CREATE SECRET (TYPE quack, TOKEN 'super_secret');
ATTACH 'quack:localhost' AS remote;
FROM remote.hello;
```

Benchmarks vs. Arrow Flight SQL and Postgres:

| | Bulk transfer (60M rows) | Small writes, 8 threads |
|---|---|---|
| Quack | 4.94s | 5,434 tx/s |
| PostgreSQL | 158.37s | 4,320 tx/s |
| Arrow Flight | 17.40s | 1,358 tx/s |

Limitation: beyond 8 parallel threads, concurrent insert throughput into the same table hits "a current limitation of DuckDB itself" — scaling further is future work.

[Quack: The DuckDB Client-Server Protocol – DuckDB](https://duckdb.org/2026/05/12/quack-remote-protocol)

#### DuckLake

DuckLake is "a lakehouse format built on SQL" that "delivers advanced data lake features without traditional lakehouse complexity by using Parquet files and a SQL database." It's a two-tier architecture:

- **Catalog:** metadata lives in an ACID-compliant SQL database — Postgres, MySQL, SQLite, or DuckDB itself. "No custom catalog server required."
- **Storage:** data lives in plain Parquet files, on local disk or object storage, and is "compatible with Iceberg" — no vendor lock-in.

This split lets multiple concurrent clients (local or cloud) query and modify the same lake with full ACID transactional guarantees over multi-table operations, plus snapshots, time-travel queries, schema evolution, partitioning, and filter-pushdown via stored statistics.

For DuckDB multi-user access specifically: point several separate, free local DuckDB installations (or servers) at the same SQL catalog + shared object storage, and they read/write the same tables concurrently — the catalog is the coordination point, not a bespoke server process.

DuckLake v1.0 shipped April 2026 as "a production-ready release with guaranteed backward-compatibility," already in use at PostHog, Ascend.io, and others.

[DuckLake](https://ducklake.select/) · [GitHub - duckdb/ducklake](https://github.com/duckdb/ducklake)

#### Layerbase

Cloud-hosted, free-tier option: wraps an open-source DuckDB engine behind a Postgres-compatible wire protocol, so a whole team can connect with standard Postgres clients or BI tools (Tableau, Superset). Free plan: 2 databases, 5GB storage, up to 20 concurrent connections, no card required.

## Tutorials

- [Hands-On Exploratory Data Analysis with DuckDB](https://www.packtpub.com/en-us/learning/how-to-tutorials/hands-on-exploratory-data-analysis-with-duckdb)

## CDC

- [Replicate PostgreSQL to DuckDB with CDC \| ingestr](https://getbruin.com/docs/ingestr/tutorials/cdc-postgres-duckdb.html)
- [pg\_duckpipe: Real-time CDC for streaming Postgres Table into Columnar Ducklake - DEV Community](https://dev.to/ywxiao/pgduckpipe-real-time-cdc-for-streaming-postgres-table-into-columnar-ducklake-536d)
- [GitHub - relytcloud/pg\_duckpipe: Real-time streaming ingestion (CDC) for HTAP in PostgreSQL · GitHub](https://github.com/relytcloud/pg_duckpipe)

## Links

- [My First Billion (of Rows) in DuckDB | by João Pedro | Towards Data Science](https://towardsdatascience.com/my-first-billion-of-rows-in-duckdb-11873e5edbb5)
- [How fast is DuckDB really? | Blog | Fivetran](https://www.fivetran.com/blog/how-fast-is-duckdb-really)
- [Benchmarking Ourselves over Time at DuckDB – DuckDB](https://duckdb.org/2024/06/26/benchmarks-over-time.html)
- "One Size Fits All": An Idea Whose Time Has Come and Gone - [stonebraker-centintemel-one-size-fits-all-icde-2015.pdf](https://blobs.duckdb.org/papers/stonebraker-centintemel-one-size-fits-all-icde-2015.pdf)
- [GitHub - duckdb/duckdb: DuckDB is an analytical in-process SQL database management system](https://github.com/duckdb/duckdb) ⭐ 41k
- [DuckDB – An in-process SQL OLAP database management system](https://duckdb.org/)
- [GitHub - duckdb-in-action/examples](https://github.com/duckdb-in-action/examples) ⭐ 191
- [Introduction to DuckDB: A Guide for Data Analysis | DataCamp](https://www.datacamp.com/blog/an-introduction-to-duckdb-what-is-it-and-why-should-you-use-it)
- [Handling Billions of Rows with SQL in Minutes Using DuckDB | Towards Data Science](https://towardsdatascience.com/handling-billions-of-records-in-minutes-with-sql-%EF%B8%8F-484d2d6027bc)
- [QuackETL\| DuckDB-Powered Lightweight ETL: An Extensible Framework for Seamless Data Integration - YouTube](https://youtu.be/fo7-rRRVHf8)
- [DuckDB in 100 Seconds - YouTube](https://www.youtube.com/watch?v=uHm6FEb2Re4&ab_channel=Fireship)
- [Announcing DuckDB 1.4.2 LTS – DuckDB](https://duckdb.org/2025/11/12/announcing-duckdb-142)
- [Distributed DuckDB - dual execution and differential storage | Github - citguru/openduck](https://github.com/citguru/openduck) ⭐ 570
- [A Preview of DuckDB v2.0 – DuckDB](https://duckdb.org/2026/08/17/duckdb-20-highlights)
- [GitHub - motherduckdb/metabase\_duckdb\_driver: Metabase DuckDB Driver shipped as 3rd party plugin · GitHub](https://github.com/motherduckdb/metabase_duckdb_driver)
- [The fastest OLAP databases compared: DuckDB, MotherDuck, ClickHouse, Snowflake, BigQuery](https://motherduck.com/learn/fastest-olap-databases-compared/)
