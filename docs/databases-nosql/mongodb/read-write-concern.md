# Read / Write Concern

## Read Concern

The `readConcern` option allows you to control the consistency and isolation properties of the data read from replica sets and replica set shards.

[Read Concern - MongoDB Manual](https://www.mongodb.com/docs/manual/reference/read-concern/)

### Read Concern Levels

#### local

The query returns data from the instance with no guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back).

Default for reads against the primary and secondaries.

**Availability:** Read concern [`"local"`](https://www.mongodb.com/docs/manual/reference/read-concern-local/#mongodb-readconcern-readconcern.-local-) is available for use with or without causally consistent sessions and transactions.

#### available

The query returns data from the instance with no guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back).

**Availability:** Read concern [`"available"`](https://www.mongodb.com/docs/manual/reference/read-concern-available/#mongodb-readconcern-readconcern.-available-) is **unavailable for use** with causally consistent sessions and transactions.

For sharded clusters, [`"available"`](https://www.mongodb.com/docs/manual/reference/read-concern-available/#mongodb-readconcern-readconcern.-available-) read concern provides the lowest latency reads possible among the various read concerns. However, this comes at the expense of consistency as [`"available"`](https://www.mongodb.com/docs/manual/reference/read-concern-available/#mongodb-readconcern-readconcern.-available-) read concern can return [orphaned documents](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-orphaned-document) when reading from a sharded collection. To avoid the risk of returning orphaned documents when reading from sharded collections, use a different read concern such as read concern [`"local"`.](https://www.mongodb.com/docs/manual/reference/read-concern-local/#mongodb-readconcern-readconcern.-local-)

#### majority

The query returns the data that has been acknowledged by a majority of the replica set members. The documents returned by the read operation are durable, even in the event of failure.

To fulfill read concern "majority", the replica set member returns data from its in-memory view of the data at the majority-commit point. As such, read concern [`"majority"`](https://www.mongodb.com/docs/manual/reference/read-concern-majority/#mongodb-readconcern-readconcern.-majority-) is comparable in performance cost to other read concerns.

**Availability:**

Read concern [`"majority"`](https://www.mongodb.com/docs/manual/reference/read-concern-majority/#mongodb-readconcern-readconcern.-majority-) is available for use with or without causally consistent sessions and transactions.

**Requirements:** To use [read concern](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-read-concern) level of [`"majority"`](https://www.mongodb.com/docs/manual/reference/read-concern-majority/#mongodb-readconcern-readconcern.-majority-), replica sets must use [WiredTiger storage engine.](https://www.mongodb.com/docs/manual/core/wiredtiger/#std-label-storage-wiredtiger)

#### linearizable

The query returns data that reflects all successful majority-acknowledged writes that completed prior to the start of the read operation. The query may wait for concurrently executing writes to propagate to a majority of replica set members before returning results.

If a majority of your replica set members crash and restart after the read operation, documents returned by the read operation are durable if [`writeConcernMajorityJournalDefault`](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.writeConcernMajorityJournalDefault) is set to the default state of `true`.

With [`writeConcernMajorityJournalDefault`](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.writeConcernMajorityJournalDefault) set to `false`, MongoDB does not wait for [`w: "majority"`](https://www.mongodb.com/docs/manual/reference/write-concern/#mongodb-writeconcern-writeconcern.-majority-) writes to be written to the on-disk journal before acknowledging the writes. As such, [`"majority"`](https://www.mongodb.com/docs/manual/reference/write-concern/#mongodb-writeconcern-writeconcern.-majority-) write operations could possibly roll back in the event of a transient loss (e.g. crash and restart) of a majority of nodes in a given replica set.

Availability:

- Read concern [`"linearizable"`](https://www.mongodb.com/docs/manual/reference/read-concern-linearizable/#mongodb-readconcern-readconcern.-linearizable-) is **unavailable for use** with causally consistent sessions and transactions.
- You can specify linearizable read concern for read operations on the [`primary`](https://www.mongodb.com/docs/manual/reference/replica-states/#mongodb-replstate-replstate.PRIMARY) only.

You cannot use the [`$out`](https://www.mongodb.com/docs/manual/reference/operator/aggregation/out/#mongodb-pipeline-pipe.-out) or the [`$merge`](https://www.mongodb.com/docs/manual/reference/operator/aggregation/merge/#mongodb-pipeline-pipe.-merge) stage in conjunction with read concern [`"linearizable"`](https://www.mongodb.com/docs/manual/reference/read-concern-linearizable/#mongodb-readconcern-readconcern.-linearizable-). That is, if you specify [`"linearizable"`](https://www.mongodb.com/docs/manual/reference/read-concern-linearizable/#mongodb-readconcern-readconcern.-linearizable-) read concern for [`db.collection.aggregate()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/#mongodb-method-db.collection.aggregate), you cannot include either stages in the pipeline.

**Requirements:** Linearizable read concern guarantees only apply if read operations specify a query filter that uniquely identifies a single document.

#### snapshot

A query with read concern `"snapshot"` returns majority-committed data as it appears across shards from a specific single point in time in the recent past. Read concern `"snapshot"` provides its guarantees only if the transaction commits with write concern [`"majority"`.](https://www.mongodb.com/docs/manual/reference/write-concern/#mongodb-writeconcern-writeconcern.-majority-)

If a transaction is not part of a [causally consistent session](https://www.mongodb.com/docs/manual/core/read-isolation-consistency-recency/#std-label-sessions), upon transaction commit with write concern [`"majority"`](https://www.mongodb.com/docs/manual/reference/write-concern/#mongodb-writeconcern-writeconcern.-majority-), the transaction operations are guaranteed to have read from a snapshot of majority-committed data.

If a transaction is part of a [causally consistent session](https://www.mongodb.com/docs/manual/core/read-isolation-consistency-recency/#std-label-sessions), upon transaction commit with write concern [`"majority"`](https://www.mongodb.com/docs/manual/reference/write-concern/#mongodb-writeconcern-writeconcern.-majority-), the transaction operations are guaranteed to have read from a snapshot of majority-committed data that provides causal consistency with the operation immediately preceding the transaction start.

**Availability:**

Read concern [`"snapshot"`](https://www.mongodb.com/docs/manual/reference/read-concern-snapshot/#mongodb-readconcern-readconcern.-snapshot-) is available for

- All read operations inside multi-document transactions with the read concern set at the transaction level.
- The following methods outside of multi-document transactions:
    - [`find`](https://www.mongodb.com/docs/manual/reference/command/find/#mongodb-dbcommand-dbcmd.find)
    - [`aggregate`](https://www.mongodb.com/docs/manual/reference/command/aggregate/#mongodb-dbcommand-dbcmd.aggregate)
    - [`distinct`](https://www.mongodb.com/docs/manual/reference/command/distinct/#mongodb-dbcommand-dbcmd.distinct) (on unsharded collections)

All other read operations prohibit [`"snapshot"`.](https://www.mongodb.com/docs/manual/reference/read-concern-snapshot/#mongodb-readconcern-readconcern.-snapshot-)

## Write Concern

Write concern describes the level of acknowledgment requested from MongoDB for write operations to a standalone [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) or to [Replica sets](https://www.mongodb.com/docs/manual/replication/#std-label-replication) or to [sharded clusters](https://www.mongodb.com/docs/manual/sharding/#std-label-sharding-background). In sharded clusters, [`mongos`](https://www.mongodb.com/docs/manual/reference/program/mongos/#mongodb-binary-bin.mongos) instances will pass the write concern on to the shards.

[Write Concern - MongoDB Manual](https://www.mongodb.com/docs/manual/reference/write-concern/)

### Write Concern Levels

#### majority

Requests acknowledgment that write operations have been durably committed to the [calculated majority](https://www.mongodb.com/docs/manual/reference/write-concern/#std-label-calculating-majority-count) of the data-bearing voting members (i.e. primary and secondaries with [`members[n].votes`](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.votes) greater than `0`). `{ w: "majority" }` is the default write concern for _most_ MongoDB deployments. See [Implicit Default Write Concern.](https://www.mongodb.com/docs/manual/reference/write-concern/#std-label-wc-default-behavior)

For example, consider a replica set with 3 voting members, Primary-Secondary-Secondary (P-S-S). For this replica set, [calculated majority](https://www.mongodb.com/docs/manual/reference/write-concern/#std-label-calculating-majority-count) is two, and the write must propagate to the primary and one secondary to acknowledge the write concern to the client.

#### `<number>`

Requests acknowledgment that the write operation has propagated to the specified number of [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) instances.

#### `<custom write concern name>`

Requests acknowledgment that the write operations have propagated to [`tagged`](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.tags) members that satisfy the custom write concern defined in [`settings.getLastErrorModes`](https://www.mongodb.com/docs/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.settings.getLastErrorModes). For an example, see [Custom Multi-Datacenter Write Concerns.](https://www.mongodb.com/docs/manual/tutorial/configure-replica-set-tag-sets/#std-label-configure-custom-write-concern)

Data can be [rolled back](https://www.mongodb.com/docs/manual/core/replica-set-rollbacks/#std-label-rollback-avoid) if the custom write concern only requires acknowledgment from the primary and the primary steps down before the write operations have replicated to any of the secondaries.
