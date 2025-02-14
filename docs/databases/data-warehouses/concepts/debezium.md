# Debezium

Debezium is an open source distributed platform for change data capture. Start it up, point it at your databases, and your apps can start responding to all of the inserts, updates, and deletes that other apps commit to your databases. Debezium is durable and fast, so your apps can respond quickly and never miss an event, even when things go wrong.

### [Message Filtering | Debezium Documentation](https://debezium.io/documentation/reference/stable/transformations/filtering.html)

By default, Debezium delivers every data change event that it receives to the Kafka broker. However, in many cases, you might be interested in only a subset of the events emitted by the producer. To enable you to process only the records that are relevant to you, Debezium provides the _filter_ [single message transform](https://cwiki.apache.org/confluence/display/KAFKA/KIP-66%3A+Single+Message+Transforms+for+Kafka+Connect) (SMT).

### Debezium UI

[Introducing the Debezium UI](https://debezium.io/blog/2021/08/12/introducing-debezium-ui/)

[Debezium UI | Debezium Documentation](https://debezium.io/documentation/reference/stable/operations/debezium-ui.html)

```bash
docker run -it --rm --name debezium-ui -p 8080:8080 -e KAFKA_CONNECT_URIS=http://connect:8083 quay.io/debezium/debezium-ui:2.1
```

## Connectors

[Connectors | Debezium Documentation](https://debezium.io/documentation/reference/stable/connectors/index.html)

- [MongoDB](https://debezium.io/documentation/reference/stable/connectors/mongodb.html)
- [PostgreSQL](https://debezium.io/documentation/reference/stable/connectors/postgresql.html)
- [SQL Server](https://debezium.io/documentation/reference/stable/connectors/sqlserver.html)
- [Oracle](https://debezium.io/documentation/reference/stable/connectors/oracle.html)
- [Db2](https://debezium.io/documentation/reference/stable/connectors/db2.html)
- [Cassandra](https://debezium.io/documentation/reference/stable/connectors/cassandra.html)
- [Vitess](https://debezium.io/documentation/reference/stable/connectors/vitess.html) (Incubating)
- [Spanner](https://debezium.io/documentation/reference/stable/connectors/spanner.html) (Incubating)
- [JDBC](https://debezium.io/documentation/reference/stable/connectors/jdbc.html) (Incubating)
- [Informix](https://debezium.io/documentation/reference/stable/connectors/informix.html) (Incubating)

### [MySQL](https://debezium.io/documentation/reference/stable/connectors/mysql.html)

MySQL has a binary log (binlog) that records all operations in the order in which they are committed to the database. This includes changes to table schemas as well as changes to the data in tables. MySQL uses the binlog for replication and recovery.

The Debezium MySQL connector reads the binlog, produces change events for row-level `INSERT`, `UPDATE`, and `DELETE` operations, and emits the change events to Kafka topics. Client applications read those Kafka topics.

As MySQL is typically set up to purge binlogs after a specified period of time, the MySQL connector performs an initial _consistent snapshot_ of each of your databases. The MySQL connector reads the binlog from the point at which the snapshot was made.

## Links

- [Debezium](https://debezium.io)
- [Introduction to Debezium | Baeldung](https://www.baeldung.com/debezium-intro)
- [GitHub - ivangfr/springboot-kafka-connect-debezium-ksqldb](https://github.com/ivangfr/springboot-kafka-connect-debezium-ksqldb)
- [Deploying Debezium on Kubernetes | Debezium Documentation](https://debezium.io/documentation/reference/stable/operations/kubernetes.html)
- [Tutorial | Debezium Documentation](https://debezium.io/documentation/reference/stable/tutorial.html)
- [Incremental Snapshots in Debezium](https://debezium.io/blog/2021/10/07/incremental-snapshots/)
- [A Quick Start Guide to Change Data Capture with Debezium | Hashmap, an NTT DATA Company](https://medium.com/hashmapinc/a-quick-start-guide-to-change-data-capture-with-debezium-aa1a2d0a9296)
- [Streaming Data Changes from Your Database to Elasticsearch](https://debezium.io/blog/2018/01/17/streaming-to-elasticsearch/)
- [Release Notes for Debezium 2.0](https://debezium.io/releases/2.0/release-notes)
- [GitHub - bykvaadm/debezium-helm-chart](https://github.com/bykvaadm/debezium-helm-chart)
- [Operational DB Migrations with Zero Downtime | The Write Ahead Log](https://platformatory.io/blog/Operational-db-Migration-Zero-Downtime/)
