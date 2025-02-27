# Oracle Database

- Oracle corporation owns Oracle DB, and the code is not open source.
- Oracle DB is for large applications, particularly in the banking industry. Most of the world's top banks run Oracle applications because Oracle offers a powerful combination of technology and comprehensive, pre-integrated business applications, including essential functionality built specifically for banks.
- The main disadvantage of using Oracle is that it is not free to use like its open source competitors and can be quite expensive.

[Bi-Directional Replication](https://docs.oracle.com/en/middleware/goldengate/core/21.3/coredoc/administer-configuring-bi-directional-replication.html)

## Replication

Debezium, including its connector for Oracle, does not replicate data at the block level. It relies on Change Data Capture (CDC) by streaming changes at the transaction log (redo log) level rather than capturing changes at the storage block level. In the case of Oracle, Debezium uses the Oracle LogMiner utility to extract changes from the Oracle redo logs, which focuses on data changes such as inserts, updates, and deletes, and operates at the row level.

Regarding the gaps you mentioned with Confluent CDC and Oracle, this is a known issue. Tools like Debezium and Confluent's CDC (which also uses Debezium for some connectors) do not replicate database objects like indexes, sequences, stored procedures, functions, views, materialized views, or triggers. These tools are designed to capture data changes at the logical level (insert/update/delete operations), not to fully replicate the entire database schema or structural objects like the ones you mentioned.

The limitations of tools like Debezium and Confluent CDC when it comes to replicating Oracle database changes at the block level or fully replicating all database objects such as indexes, sequences, stored procedures, views, and triggers. These tools are primarily focused on capturing data changes at the logical level (inserts, updates, deletes) and do not handle structural changes or database object replication.

- **Open-source -** Debezium, Confluent CDC (basic features)
- **Paid -** Oracle GoldenGate, Oracle Data Guard, Attunity Replicate (Qlik), SAP HANA Smart Data Integration (SDI)

### Regarding Oracle and Block-Level Replication

Oracle does not typically replicate data at the block level via logical replication tools. Block-level replication generally refers to capturing changes in raw database storage blocks, which is a lower-level operation often handled by specialized replication or backup solutions like Oracle Data Guard or Oracle GoldenGate.

**Oracle GoldenGate** is a well-known solution that supports both logical and physical replication of Oracle data. Unlike CDC-based tools like Debezium, GoldenGate allows for more advanced replication features, including:

- **Replicating structural changes:** It can handle changes to objects like sequences, stored procedures, views, and other schema elements.
- **Block-level replication:** GoldenGate can replicate at the transaction level and provide capabilities to capture more granular database changes, potentially including block-level replication with certain configurations.
- For block-level replication specifically, Oracle's Data Guard or Active Data Guard provides a more comprehensive solution. Data Guard replicates at the physical level, which means it handles the entire database, including all the structural components (e.g., indexes, sequences, triggers, etc.). However, this is typically used for disaster recovery and high availability rather than as a primary method of replication for database migration or ETL.

### Other Tools for Full Replication

If you need a tool that handles the replication of both data and schema objects (like indexes, sequences, stored procedures, views, and triggers), you could consider the following:

#### Oracle GoldenGate

GoldenGate supports full database replication and can capture changes at both the logical and physical levels.

It is highly configurable, and you can use it to replicate Oracle database changes, including structural objects, to other databases or environments.

#### Oracle Data Guard

For full physical replication (including schema, data, and all objects), Oracle Data Guard offers a strong solution for disaster recovery and high availability.

#### Oracle GoldenGate vs Oracle Data Guard

While both Oracle GoldenGate and Data Guard are used for database replication, the key difference is that GoldenGate is a more flexible, heterogeneous replication solution, allowing data replication across different database platforms, while Data Guard is primarily designed for Oracle-specific disaster recovery with a focus on high availability and data protection within an Oracle environment; meaning GoldenGate is better for complex data transformations and cross-platform replication, while Data Guard excels at fast failover and switchover in a disaster scenario.

##### Key points to differentiate

- **Heterogeneous Support:** GoldenGate can replicate data between different database systems (like MySQL, DB2, etc.) while Data Guard is limited to replicating within Oracle databases only.
- **Replication Modes:** GoldenGate supports bi-directional replication (both source to target and target to source), whereas Data Guard primarily operates in a unidirectional mode (primary to standby).
- **Data Transformation:** GoldenGate allows for data filtering and transformation during replication, while Data Guard focuses on pure data copying with minimal manipulation.
- **Performance:** GoldenGate is often considered to have better performance for high-volume, real-time replication due to its optimized change data capture mechanism.

##### Primary Use Cases

- **GoldenGate:** Data integration, data migration, real-time data replication across different platforms, data cleansing and filtering during replication.
- **Data Guard:** Disaster recovery, high availability, ensuring minimal data loss during switchover or failover operations.

#### Attunity Replicate (now part of Qlik)

This tool offers comprehensive data replication for various databases, including Oracle, and can handle both logical and physical replication.

It is often used in data warehousing and ETL processes, and can replicate both data and schema changes.

#### SAP HANA Smart Data Integration (SDI)

For enterprises using SAP, SDI can handle Oracle-to-SAP replication, including the ability to manage data changes as well as schema synchronization.

### Conclusion

If you're looking for a more comprehensive solution for Oracle data replication, including the replication of structural objects (indexes, sequences, stored procedures, etc.), Oracle GoldenGate is likely your best option. It provides flexibility to replicate both logical and physical changes across Oracle databases, including schema changes.

For simpler use cases, where you are primarily interested in data changes (without needing full schema replication), tools like Debezium or Confluent CDC can work well for Oracle using CDC. However, if schema replication is a critical requirement, you may need to combine these tools with more advanced solutions like GoldenGate or consider a hybrid approach.
