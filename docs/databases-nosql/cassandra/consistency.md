# Consistency

## ANY

- any server (may not be replica)
- Fastest: coordinator caches write and replies quickly to client

## ALL

- all replicas
- Ensures strong consistency, but slowest

## ONE

- at least one replica
- Faster than ALL, but cannot tolerate a failure

## QUORUM

- quorum across all replicas in all datacenters
- Majority > 50%
- Quorums faster than ALL, but still ensure strong consistency
- Several key-value/NoSQL stores (e.g., Riak and Cassandra) use quorums

![image](../../../media/Cassandra_Consistency-image1.jpg)

![image](../../../media/Cassandra_Consistency-image2.jpg)

![image](../../../media/Cassandra_Consistency-image3.jpg)

![image](../../../media/Cassandra_Consistency-image4.jpg)

### Types of Consistency

- Cassandra offers **Eventual Consistency**
