# Questions

<https://www.edureka.co/blog/interview-questions/cassandra-interview-questions>
Which of the following is *not* a feature of Cassandra?

- No single point of failure
- High availability
- **ACID compliance**
- Linear scalability
Cassandra uses a master/slave architecture.

False
Cassandra supports multiple datacenters out of the box.

True
Which of the following statements about Cassandra is false?

- All nodes hold data and can answer queries
- **A master node determines who gets what data**
- Data is replicated on different nodes
- Data is partitioned around the ring
With the CAP theorum, Cassandra is:
- **Available and partition tolerant**
- Consistent and partition tolerant
- Available and consistent
- None of the above
Replication Factor (RF) is how many copies of each piece of data should you have in your cluster.

True
Where is Replication Factor (RF) set in Cassandra?

- **When creating a keyspace**
- When creating a table
- On a per-query basis
- In Cassandra configuration file
Hinted handoff is used when a node is down to replay all of the writes that occured.

True
Consistency level can be set for:

- Read requests
- Write requests
- **Both read and write requests**
- Is not configurable
Read and write speed is *not* impacted by the consistency level chosen.

False
Where is Consistency Level (CL) set in Cassandra?

- **On a per-query basis**
- When creating a table
- When creating a keyspace
- Is not configurable
Any node in a cluster can service a write request.

True
What is the node that handles a request called?

- Leader node
- Master node
- Slave node
- **Coordinator node**
The order for the write path in Cassandra is:
- Commit log to SSTable to MemTable
- **Commit log to MemTable to SSTable**
- Commit log to MemTable to DiskTable
- None of the above
Cassandra does not do any writes or deletes in place.

True
SSTables in Cassandra are *not* immutable.

False
Compaction is the process of:

- **Taking small SSTables and merges them into bigger ones.**
- Taking Memtables and merging them into SSTables.
- Merging Memtables into larger Memtables.
- Merging Memtables into larger Memtables.
"Last write wins" uses what to determine what data to return to client?
- Tombstones
- **Timestamps**
- Compaction
- Coordinator
Partitions...
- format data for CQL queries.
- maintain a log of all executed queries.
- optimize query-time joins keeping frequently queried rows together on disk.
- **group rows physically together on disk based on the partition key.**
What is the role of the partitioner?
- It organizes the data together physically on disk.
- **It hashes the partition key values to create a partition token.**
- It retrieves partition data for a CQL query.
- It physically separates rows into equal-sized partitions.
Partition key columns are optional if you have clustering columns.

False
What benefits do Clustering columns provide?

- **Reading sorted data is a matter of seeking the disk head once.**
- They allow partitions to be spread over several drives.
- You can change the clustering criteria on a table at any time.
- The optimize writes by shuffling the data on disk at write time.
