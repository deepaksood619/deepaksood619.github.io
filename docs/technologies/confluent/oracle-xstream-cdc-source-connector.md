# Oracle Xstream CDC Source Connector

- [Oracle XStream CDC Source](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/index.html)
	- [Overview](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html)
	- [Configure and Launch the connector](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source.html)
	- [Oracle Database Prerequisites](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/prereqs-validation.html)
	- [Change Events](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/changes-events.html)
	- [Signals and Actions](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/signals-actions.html)
	- [Examples](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/examples.html)
	- [Troubleshooting](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-troubleshoot.html)
- [Oracle CDC Source](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/index.html)
	- [Overview](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/cc-oracle-cdc-source-features.html)
	- [Configure and Launch the connector](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/cc-oracle-cdc-source.html)
	- [Horizontal Scaling](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/oracle-cdc-setup-includes/high-level-architecture.html)
	- [Oracle Database Prerequisites](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/oracle-cdc-setup-includes/prereqs-validation.html)
	- [SMT Examples](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/cc-oracle-cdc-source-smt-examples.html)
	- [DDL Changes](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/oracle-cdc-setup-includes/ddl-changes.html)
	- [Troubleshooting](https://docs.confluent.io/cloud/current/connectors/cc-oracle-cdc-source/cc-oracle-cdc-source-troubleshooting.html)

## Overview and Features of Oracle XStream CDC Source Connector for Confluent Cloud

The fully-managed Oracle XStream CDC Source connector for Confluent Cloud captures all changes made to rows in an Oracle database and represents the changes as change event records in Apache Kafka® topics. The connector uses Oracle’s XStream API to read changes from the database [redo log](https://docs.oracle.com/en/database/oracle/oracle-database/19/admin/managing-the-redo-log.html#GUID-79189E7E-7431-49CA-B342-3B971186503A).

[Oracle XStream](https://docs.oracle.com/en/database/oracle/oracle-database/19/xstrm/index.html) is a set of components and APIs in Oracle database that enables client applications, such as the connector, to receive changes from an Oracle database.

The connector leverages [XStream Out](https://docs.oracle.com/en/database/oracle/oracle-database/19/xstrm/introduction-to-xstream.html) to capture both Data Manipulation Language (DML) and Data Definition Language (DDL) changes from the database redo log. When XStream Out is used, a capture process captures changes made to an Oracle database, converts the changes into Logical Change Records (LCRs), and sends the LCRs to an outbound server. The outbound server then sends the LCRs to the connector.

The connector is built using the [Debezium](https://debezium.io/) and [Kafka Connect](https://docs.confluent.io/platform/current/connect/index.html?session_ref=https%3A%2F%2Fdocs.confluent.io%2Fcloud%2Fcurrent%2Fconnectors%2Fcc-oracle-xstream-cdc-source%2Fprereqs-validation.html&url_ref=https%3A%2F%2Fdocs.confluent.io%2Fcloud%2Fcurrent%2Fconnectors%2Fcc-oracle-xstream-cdc-source%2Fcc-oracle-xstream-cdc-source-features.html) frameworks.

### Features

The Oracle XStream CDC Source connector provides the following features:

- [Snapshots](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-snapshots)
- [Streaming](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-streaming)
- [Change event topics](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-change-event-topics)
- [Schema changes](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-schema-changes)
- [At-least-once delivery](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-message-deliver-guarantees)
- [Large object (LOB) type handling](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-lob-handling)
- [Before and after state for change events](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-before-state-update-operations)
- [Oracle multi-tenant architecture support](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-oracle-multi-tenant-support)
- [Customizable data type handling](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-customizable-data-type-handling)
- [Tombstone events](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-tombstone-events)
- [Heartbeats](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-heartbeats)
- [Automated error recovery](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-automated-error-recovery)
- [Oracle Real Application Cluster (RAC) support](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-rac-support)
- [Signals and actions](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-signals-actions)
- [Client-Side Encryption (CSFLE and CSPE)](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-features.html#xstream-csfle-support)

## Oracle End User Terms

The Oracle XStream CDC source connector uses Oracle’s XStream API technology to read data from the logs. XStream technology is licensed as part of the Oracle GoldenGate family. Confluent has an agreement with Oracle that allows Confluent to use this technology with its products. Therefore, users do not need to buy additional licenses from Oracle to use XStream with this connector.

## Oracle XStream CDC Source Connector for Confluent Cloud

The connector can be configured to capture changes from a subset of tables in a database by using an include regular expression to match the table identifiers. It can also be configured to not capture tables that match a separate exclude regular expression.

### Oracle versions

The connector is compatible with the following Oracle versions:

- Oracle 19c Enterprise Edition
- Oracle 19c Standard Edition
- Oracle 21c Enterprise Edition
- Oracle 21c Standard Edition

The connector supports Oracle Exadata.

The connector supports Oracle Database 19c using the non-CDB architecture on Amazon RDS for Oracle.

[Oracle XStream CDC Source Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source.html)

## Oracle Database Prerequisites for Oracle XStream CDC Source Connector for Confluent Cloud

### Working with Amazon RDS for Oracle

The connector supports Oracle Database 19c using the non-CDB architecture on [Amazon RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html). It does not support CDBs on Amazon RDS for Oracle.

The connector also does not support [Amazon RDS Custom for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-custom-oracle.html), including both CDB and non-CDB architectures.

This section only highlights the differences in the prerequisite setup steps specific to Amazon RDS for Oracle.

Because Amazon RDS for Oracle is a managed service, you do not have access to a user with `SYSDBA` privileges. Instead, use the `master` user account to perform any administrative tasks described in this documentation that requires `SYSDBA` privileges.

[Oracle Database Prerequisites for Oracle XStream CDC Source Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/prereqs-validation.html)

## Stream Changes from Oracle Database to Confluent Cloud

The connector creates change events for database changes and sends them to Kafka topics. A change event includes a `key` and a `value`, with their structures based on the schema of the table where the change occurred.

Every message in key and value consists of two components: a `schema` and a `payload`. The schema defines the structure of the payload, and the payload holds the actual data.

[Stream Changes from Oracle Database to Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/changes-events.html)

## Signals and Actions for Oracle XStream CDC Source Connector for Confluent Cloud

The connector offers a signaling mechanism to trigger specific actions, such as performing an ad-hoc snapshot of a table.

You can send signals through one or more channels, such as a database table or a Kafka topic. To configure which channels are enabled, use the `signal.enabled.channels` configuration property.

[Signals and Actions for Oracle XStream CDC Source Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/signals-actions.html)

## Challenges with LogMiner connector

1. **Performance:** LogMiner is single threaded. It was designed as a diagnostic tool for reading the database redo logs.
2. **Long running transaction:** As the transaction ages, the connector has to mine a larger SCN range leading to higher resource utilization on the database and increased latencies.
3. **Large transaction:** High memory usage that increases with the size of the transaction. This could cause the connector to fail due to insufficient memory on the Connect worker.
4. **Connector restarts:** When the connector restarts, it needs to start mining from an SCN that corresponds to the start SCN of the oldest open transaction. If the archived redo log for this SCN is no longer available, the restart fails.
5. **Schema change handling:** Requires the database administrator to extract the log miner dictionary to the redo log files when a DDL statement is executed to change the schema.
6. **Oracle Real Application Cluster support:** A 3 second delay is implemented in the mining process to ensure there is no data loss at high load.

## Oracle GoldenGate vs Oracle XStream vs Oracle LogMiner

Oracle GoldenGate is the premier, high-performance CDC solution, is a built-in, slower SQL-based utility. GoldenGate offers the best performance and features, XStream is ideal for third-party integration (e.g., Kafka), and LogMiner is a free but resource-intensive option for low-volume CDC.

**Oracle GoldenGate (Premium Feature-Rich)**

- **Best for:** High-volume, mission-critical, real-time data integration, replication, and high availability.
- **Pros:** Extremely high performance, minimal source database overhead, comprehensive DDL/DML support, supports heterogeneous targets.
- **Cons:** Expensive licensing costs.
- **Use Case:** Large enterprise active-active replication or real-time data warehousing.

**Oracle XStream (High-Speed API)**

- **Best for:** Streaming changes to non-Oracle systems (e.g., Kafka, Big Data) with low latency.
- **Pros:** Very high speed (faster than raw LogMiner), supported by Oracle GoldenGate licensing.
- **Cons:** Requires additional Oracle GoldenGate licensing.
- **Use Case:** ETL tools needing high-speed CDC without installing the full GoldenGate agent.

**Oracle LogMiner (Built-in Diagnostic Tool)**

- **Best for:** Low-cost, low-volume change data capture.
- **Pros:** Included in Oracle Enterprise Edition, no additional licenses, allows SQL-based query of redo logs.
- **Cons:** High impact on database performance, lower scalability, limited support for complex data types.
- **Use Case:** Small, infrequent data syncs or debugging.

**Summary Table**

|Feature|GoldenGate|XStream|LogMiner|
|---|---|---|---|
|**Speed**|Extremely High|High|Low to Medium|
|**Cost**|High (License)|High (w/ GoldenGate)|Free (Built-in)|
|**Resource Usage**|Low Impact|Low-Medium Impact|High Impact|
|**Best Use Case**|Real-time Replication|Kafka/Streaming|Low-volume CDC|
|**Complexity**|High Setup|Moderate Setup|Simple Setup|

## Links

- [GoldenGate - oracle-database](databases-sql/oracle-database.md)
- [Examples for Oracle XStream CDC Source Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/examples.html)
- [Troubleshooting Oracle XStream CDC Source Connector for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/connectors/cc-oracle-xstream-cdc-source/cc-oracle-xstream-cdc-source-troubleshoot.html)
