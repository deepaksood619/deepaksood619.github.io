# Questions

- what is opslog in mongodb, location of opslog in mongodb
- what is mongodump and if we take backup through mongodump so it will take backup of all the databases or particular databases
- how do you create replicaset performance matrix in mongodb
- how to check replicaset is sync or not
- user roles how do you set roles our database is not connected with outside network security authorisation configuration file
- difference between sharding and replicaset
- how to configure replica set
- capped collections
- How do you optimize a MongoDB query performance?
- How would you handle a situation where a replica set member is consistently lagging behind the others?
- How do you enable authentication in MongoDB?
- How can you create an index in MongoDB, If we have 100 of mongodb servers?
- How to do monitoring of all the databases the default interval to write updates to the disk?
- RAM usage in mongodb db.stat() Monitoring tools and features
- Mongodb TTL index
- Mongodb Change streams
- Mongodb read and write concern
- Mongodb profiler - [Database Profiler - MongoDB Manual](https://www.mongodb.com/docs/manual/tutorial/manage-the-database-profiler/)
- Mongodb Pipeline

## Top 10 MongoDB Questions for a Senior Database Architect

## 1. Schema Design & Modeling

**Q:** MongoDB is schema-less, but in production we still need schema planning. How would you design collections for a high-write, high-read analytics platform that needs both transactional consistency and flexible query capabilities? What trade-offs would you consider between embedding vs. referencing?

**A:**

- **Approach:**
    - Use **schema versioning** to track document evolution over time.
    - For **high-write workloads** → Avoid deep nesting; keep documents under 16MB BSON limit.
    - **Embedding**: Good for _one-to-few_ relationships, avoids joins, improves read performance.
    - **Referencing**: Better for _many-to-many_ relationships, reduces document growth and avoids hot document locking.
- **Example Decision:**
    - User profiles: embed address & preferences (read together often).
    - Transactions: separate collection with reference to user_id (to allow indexing & partitioning).
- **Trade-offs:**
    - Embedding = faster reads but potential for large doc updates.
    - Referencing = smaller docs, more flexible but requires `$lookup` joins.
- **Performance note:** Pre-compute and denormalize only where query speed is critical.

## 2. Sharding Strategy

**Q:** How would you choose a shard key for a multi-terabyte, globally distributed MongoDB cluster?

**A:**

- **Principles:**
    - High **cardinality** (to spread data evenly).
    - Avoid **monotonically increasing values** (like timestamps) to prevent hotspot shards.
    - Consider **zone sharding** for geo-distribution.
- **Process:**
    - Analyze current query patterns & write distribution (`system.profile`, `collStats`).
    - Test candidate keys in staging with `sh.status()` and chunk distribution metrics.
- **Example:**
    - E-commerce orders: `(region_code, order_id)` compound key — region controls geo-locality, order_id ensures randomness.
- **Pitfall:** Avoid sharding on fields that change frequently — causes expensive document migrations.

## 3. Indexing Optimization

**Q:** How to identify & resolve performance bottlenecks from inefficient indexes?

**A:**

- Use `db.collection.explain("executionStats")` to check **IXSCAN vs COLLSCAN**.
- Remove unused indexes (`db.collection.getIndexes()` + MongoDB Atlas Index suggestions).
- **Compound indexes**: Match query prefix fields order to improve coverage.
- **Partial indexes**: For filtered queries (e.g., only `status:"active"` docs).
- **Wildcard indexes**: For dynamic field names in semi-structured data.
- **Pitfall:** Too many indexes slow writes — balance read vs write performance.

## 4. Replication & High Availability

**Q:** How to ensure minimal downtime in a mission-critical financial app?

**A:**

- Use **Replica Set** with **5+ members** (e.g., 3 voting, 2 hidden backups).
- **Write Concern:** `"majority"` to ensure durability.
- **Read Preference:** `"nearest"` or `"secondaryPreferred"` for global reads.
- Use **hidden members** for analytics to offload queries.
- Deploy **arbiter** only if required for voting quorum (avoid if possible).
- **Pitfall:** Never run majority writes with low `wtimeout` without understanding rollback implications.

## 5. Aggregation Pipeline Performance

**Q:** How to optimize aggregation pipelines for billions of docs?

**A:**

- Always `$match` & `$project` early to reduce document size.
- Use **covered queries** when possible.
- For `$lookup`, limit joined dataset with `$match` on both sides.
- Avoid unbounded `$group` — use `$bucket` or `$bucketAuto` for summarization.
- For memory-intensive stages, ensure indexes align with `$sort` fields to avoid `allowDiskUse` overhead.
- Consider **pre-aggregated collections** via `$merge` for hot dashboards.

## 6. Transactions in MongoDB

**Q:** When _not_ to use multi-document ACID transactions?

**A:**

- **When:**
    - Writes can be modeled as **single-document atomic updates**.
    - For high-throughput writes — transactions add ~30–50% latency.
    - Large multi-collection updates in high-traffic systems.
- **Alternatives:**
    - Use **two-phase commit pattern** for critical updates.
    - Restructure schema for single-document updates.

## 7. Data Lifecycle Management

**Q:** How to implement time-series retention in IoT telemetry?

**A:**

- Use **Time Series Collections** (`createCollection` with `timeseries` option).
- Configure **TTL Index** on the `timestamp` field: `db.telemetry.createIndex({ ts: 1 }, { expireAfterSeconds: 7776000 }); // 90 days`
- For high-ingest IoT:
    - Partition by time & device_id.
    - Archive expired data to S3 via Change Streams.

## 8. Security & Compliance

**Q:** How to make MongoDB HIPAA-compliant?

**A:**

- **RBAC:** Create roles per microservice with least privilege.
- **Encryption:** Enable **Encryption At Rest** (KMIP or AWS KMS) + TLS for in-transit.
- **Field-Level Encryption:** Encrypt sensitive fields (SSN, PHI) with client-side keys.
- **Auditing:** Enable `auditLog` to track access.
- Test performance hit — field-level encryption can double document size.

## 9. Operational Monitoring & Troubleshooting

**Q:** How to monitor real-time MongoDB performance?

**A:**

- **Tools:** `mongostat`, `mongotop`, Atlas metrics dashboard, `db.currentOp()`.
- Key metrics:

    - Replication lag
    - Opcounters (reads/writes per sec)
    - Cache hit ratio (`wiredTiger.cache`)
    - Slow queries from profiler.

- **Actions:**

    - Optimize slow queries first.
    - Rebalance chunks if uneven.
    - Increase WiredTiger cache if hitting read misses.

## 10. Migration & Upgrade Strategies

**Q:** How to upgrade a 10TB v4.2 cluster to v6.0 with minimal downtime?

**A:**

- **Prep:**

    - Review [MongoDB Compatibility Changes](https://www.mongodb.com/docs/upgrades/).
    - Validate in staging with production snapshot.
    - Ensure backup (Ops Manager / mongodump + snapshots).

- **Plan:**

    - Rolling upgrade on replica set (secondary → primary).
    - Monitor replication lag before stepping down primary.

- **Validation:**

    - Run `dbHash` before & after upgrade.
    - Check app logs & profiler for query plan changes.

- **Pitfall:** Do not skip major versions — must upgrade sequentially (4.2 → 4.4 → 5.0 → 6.0).
