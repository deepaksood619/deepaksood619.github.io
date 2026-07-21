---
slug: confluent-kafka-connect-connectors
title: Obsidian Simple New Note Template
description: Obsidian Simple New Note Template for creating a new note.
created: 2026-06-24
updated: 2026-07-16
---
## Connectors

- Landoop mqtt source connector
- Confluent mqtt source connector

The connector requires a [Confluent enterprise license](https://www.confluent.io/product/confluent-enterprise/), which is stored inside Kafka in a topic. The connector must be configured with Kafka client configuration properties so that it can connect to Kafka and validate the license.

- Evokly open source mqtt connector

https://github.com/evokly/kafka-connect-mqtt

## MongoDB

- [Debezium MongoDB Source Connector for Confluent Platform \| Confluent Documentation](https://docs.confluent.io/kafka-connectors/debezium-mongodb-source/current/overview.html#debezium-mongodb-source-connector-for-cp)
	- Debezium’s MongoDB connector can monitor a MongoDB replica set or a MongoDB sharded cluster for document changes in databases and collections, recording those changes as events in Apache Kafka® topics. The connector automatically handles the addition or removal of shards in a sharded cluster, changes in membership of each replica set, elections within each replica set, and dynamically adjusts when communication issues occur.
	- The Debezium MongoDB connector uses MongoDB’s oplog to capture changes. Since it makes use of MongoDB’s replication mechanism, the connector works only with MongoDB replica sets or sharded clusters.
	- The Debezium MongoDB connector is **not capable of monitoring the changes of a standalone MongoDB server**, since standalone servers do not have an oplog. The connector will work if the standalone server is converted to a replica set with one member.
- [MongoDB Atlas Source Connector for Confluent Cloud Quick Start \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-mongo-db-source.html)
	- The fully-managed MongoDB Atlas Source connector for Confluent Cloud moves data from a MongoDB replica set into an Apache Kafka® cluster. The connector configures and consumes change stream event documents and publishes them to a Kafka topic.

## SQL Server Connector

The fully-managed Microsoft SQL Server Change Data Capture (CDC) Source V2 (Debezium) connector for Confluent Cloud streams row-level changes from a Microsoft SQL Server database into Apache Kafka® topics, using the Debezium engine internally. The connector can also take an initial snapshot of existing data before streaming subsequent `INSERT`, `UPDATE`, and `DELETE` changes. Each table’s events are recorded to a separate Kafka topic, and the connector supports Avro, JSON Schema, Protobuf, or JSON (schemaless) output formats.

### V2 Improvements

- Supports capturing changes from multiple databases on a single SQL Server database engine using a single connector instance and multiple tasks. You must configure the `database.names` property with a comma-separated list of databases and set `tasks.max` to match the number of databases. Each task handles one database, so increasing `tasks.max` beyond the number of databases provides no additional performance benefit.
- Heartbeat events are emitted even if the connector does not find any changes or the changes that did occur are not of relevance to the connector.
- Can stop or pause an in-progress incremental snapshot. Can resume the incremental snapshot if it was previously been paused.
- Supports regular expressions to specify table names for incremental snapshots.
- Supports SQL-based predicates to control the subset of records to be included in the incremental snapshot.
- Supports specifying a single column as a surrogate key for performing incremental snapshots.
- Can perform ad-hoc blocking snapshots.
- Indices that rely on hidden, auto-generated columns, or columns wrapped in database functions are no longer considered primary key alternatives for tables that do not have a primary key defined.
- Configuration options to specify how topic and schema names should be adjusted for compatibility.

[Microsoft SQL Server CDC Source V2 (Debezium) Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-microsoft-sql-server-source-cdc-v2-debezium/cc-microsoft-sql-server-source-cdc-v2-debezium.html)

### Microsoft SQL Server Source (JDBC) vs Microsoft SQL Server CDC Source V2 (Debezium)

[Microsoft SQL Server Source Connector for Confluent Cloud Quick Start \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-microsoft-sql-server-source.html)

[Microsoft SQL Server CDC Source V2 (Debezium) Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-microsoft-sql-server-source-cdc-v2-debezium/cc-microsoft-sql-server-source-cdc-v2-debezium.html)

Use **Microsoft SQL Server Source (JDBC)** when you want periodic table polling/snapshots; use **Microsoft SQL Server CDC Source V2 (Debezium)** when you need true change data capture with inserts, updates, and deletes from SQL Server CDC. The CDC V2 connector is the strategic choice for ongoing replication and low-latency change streaming.

#### Key difference

The **SQL Server Source (JDBC)** connector captures an initial snapshot and then monitors tables for subsequent row-level changes, but its docs explicitly note that **deleted records are not captured**.

The **SQL Server CDC Source V2 (Debezium)** connector uses SQL Server **CDC**, can take an initial snapshot, and then streams subsequent **INSERT, UPDATE, and DELETE** changes.

#### When to choose which

| Use case                                          | Better connector                        | Why                                                                  |
| ------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------- |
| Full CDC, including deletes                       | **SQL Server CDC Source V2 (Debezium)** | Streams row-level CDC events from SQL Server CDC.                    |
| Simpler polling-style ingestion                   | **SQL Server Source (JDBC)**            | Simpler source connector flow, but not full CDC semantics.           |
| Multi-database capture from one SQL Server engine | **SQL Server CDC Source V2 (Debezium)** | V2 supports `database.names` with one task per DB.                   |
| Lowest-latency operational replication            | **SQL Server CDC Source V2 (Debezium)** | Built around CDC log/change-table consumption and heartbeat support. |
| Source DB cannot enable CDC                       | **SQL Server Source (JDBC)**            | CDC V2 requires SQL Server CDC to be enabled.                        |

#### Important details

The **CDC V2** connector supports SQL Server versions **2017, 2019, and 2022**.

It also supports **multiple databases**, **heartbeat emission even with no relevant changes**, and richer incremental snapshot controls like pause/resume and regex/predicate-based selection.

The **legacy SQL Server CDC Source (Debezium) v1** reached **end of life on March 31, 2026**, and Confluent recommends migrating to **CDC Source V2**.

One caveat: **CDC V2 does not currently support Active Directory authentication** in Confluent Cloud.

#### Practical recommendation

For almost all new production builds, choose **Microsoft SQL Server CDC Source V2 (Debezium)**.

Choose **Microsoft SQL Server Source (JDBC)** only if you specifically want a simpler non-CDC connector model or cannot enable SQL Server CDC.
