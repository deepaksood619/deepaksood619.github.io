# Design of Zookeeper

Zookeeper - Service for coordinating processes of distributed applications

- Fundamentals
- Design goals
- Architecture
- Applications

## Classic Distributed System

![image](../../../media/Big-Data_Design-of-Zookeeper-image1.jpg)

- Most of the system like HDFS have one Master and couple of slave nodes and these slave nodes report to the master.

## Fault Tolerant Distributed System

![image](../../../media/Big-Data_Design-of-Zookeeper-image2.jpg)

- Real distributed fault tolerant system have Coordination service, Master and backup master
- If primary failed then backup works for it

![image](../../../media/Big-Data_Design-of-Zookeeper-image3.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image4.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image5.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image6.jpg)

## What is Coordination?

- Group membership: Set of datanodes (tasks) belong to same group
- Leader election: Electing a leader between primary and backup
- Dynamic Configuration: Multiple services are joining, communicating and leaving (Service lookup registry)
- Status monitoring: Monitoring various processes and services in a cluster
- Queuing: One process is embedding and other is using
- Barriers: All the processes showing the barrier and leaving the barrier
- Critical sections: Which process will go to the critical section and when?

## What is ZooKeeper?

- ZooKeeper is a highly reliable distributed coordination kernel, which can be used for distributed locking, configuration management, leadership election, work queues
- Zookeeper is a replicated service that holds the metadata of distributed applications
- Key attributed of such data
    - Small size
    - Performance sensitive
    - Dynamic
    - Critical
- In very simple words, it is a central store of key-value using which distributed systems can coordinate. Since it needs to be able to handle the load, ZooKeeper itself runs on many machines
- Exposes a simple set of primitives
- Very easy to program
- Uses a data model like directory tree
- Used for
    - Synchronisation
    - Locking
    - Maintaining Configuration
- Coordination service that does not suffer from
    - Race Conditions
    - Dead locks

## Design Goals

1. **Simple**
    - **A shared hierarchal namespace looks like standard file system**
    - **The namespace has data nodes - znodes (similar to files/dirs)**
    - **Data is kept in-memory**
    - **Achieve high throughput and low latency numbers**
    - **High performance**
        - **Used in large, distributed systems**
    - **Highly available**
        - **No single point of failure**
    - **Strictly ordered access**
        - **Synchronisation**

2. **Replicated**
    - **All servers have a copy of the state in memory**
    - **A leader is elected at startup**
    - **Followers service clients, all updates go through leader**
    - **Update responses are sent when a majority of servers have persisted the change**
    - **We need 2f+1 machines to tolerate f failures**

![image](../../../media/Big-Data_Design-of-Zookeeper-image7.jpg)

3. **Ordered**
    - **Zookeeper stamps each update with a number**
    - **The number:**
        - **Reflects the order of transactions**
        - **Used implement higher-level abstractions, such as synchronization primitives**

4. **Fast**
    - **Performs best where reads are more common than writes, at ratios of around 10:1**

## Data Model

- The way you store data in any store is called data model
- Think of it as highly available file system
- Znode: we store data in an entity called znode
- JSON data: The data that we store should be in JSON format
- No append operation: The znode can only be updated. It does not support append operations
- Data access (read/write) is atomic: The read or write is atomic operation meaning either it will be full or would throw an error if failed. There is no intermediate state like half written
- Znode: Can have children
- So znodes inside znodes make a tree like hierarchy
- The top level znode is "/"
- The znode "/zoo" is child of "/" which top level znode
- duck is child znode of zoo. It is denoted as /zoo/duck
- Though "." or ".." are invalid characters as opposed to the file system

![image](../../../media/Big-Data_Design-of-Zookeeper-image8.jpg)

## Data model - Znode - Types

- **Persistent**

Such kind of znodes remain in zookeeper until deleted. This is the default type of znode. To create such node you can use the command: create /name_of_myznode "mydata"

- **Ephemeral**
    - Ephermal node gets deleted if the session in which the node was created has disconnected. Though it is tied to client's session but it is visible to the other users.
    - An ephermal node can not have children not even ephermal children

![image](../../../media/Big-Data_Design-of-Zookeeper-image9.jpg)

## Architecture

- Zookeeper can run in two nodes
    - Standalone
        - In standalone mode, it is just running on one machine and for practical purposes we do not use standalone mode
        - This is only for testing purposes
        - It doesn't have high availability
    - Replicated
        - Run on cluster of machines called an ensemble
        - High availability
        - Tolerates as long as majority

## Architecture: Phase 1

Phase 1: Leader election (Paxos Algorithm)

- The machines elect a distinguished member - leader
- The others are termed followers
- The phase is finished when majority sync their state with leader
- If leader fails, the remaining machines hold election takes 200ms
- If the majority of the machines aren't available at any point of time the leader automatically steps down

![image](../../../media/Big-Data_Design-of-Zookeeper-image10.jpg)

## Architecture: Phase 2

## Phase 2: Atomic broadcast

- All write requests are forwarded to the leader
- Leader broadcasts the update to the followers
- When a majority have persisted the change
    - The leader commits the up-date
    - The client gets success response
- The protocol for achieving consensus is atomic like two-phase commit
- Machines write to disk before in-memory

![image](../../../media/Big-Data_Design-of-Zookeeper-image11.jpg)

## Election in Zookeeper

- Centralized service for maintaining configuration information
- Uses a **variant of Paxos called Zab (Zookeeper Atomic Broadcast)**
- Needs to keep a leader elected at all times
- Each server creates a new sequence number for itself
    - Let's say the sequence number are ids
    - Gets highers id so far (from ZK file system), creates next-higher id, writes it into ZK file system
- Elect the highest-id server as leader

![image](../../../media/Big-Data_Design-of-Zookeeper-image12.jpg)

- Failures:
    - One option: everyone monitors current master (directly or via a failure detector)
        - On failure, initiate election
        - Leads to a flood of elections
        - Too many messages

![image](../../../media/Big-Data_Design-of-Zookeeper-image13.jpg)

- Second option: (implemented in Zookeeper)
    - Each process monitors its next-higher id process
    - **if** that successor was the leader and it has failed
        - Become the new leader
    - **else**
        - wait for a timeout, and check your successor again

![image](../../../media/Big-Data_Design-of-Zookeeper-image14.jpg)

- What about id conflicts? What if leader fails during election?
- To address this, Zookeeper uses a two-phase commit (run after the sequence/id) protocol to commit the leader
    - Leader sends NEW_LEADER message to all
    - Each process responds with ACK to at most one leader, i.e., one with highest process id
    - Leader waits for a majority of ACKs, and then sends COMMIT to all
    - On receiving COMMIT, process updates its leader variable
- Ensures that safety is still maintained

## Election Demo

- If you have three nodes A, B, C with A as Leader. And A dies. Will someone become leader?

![image](../../../media/Big-Data_Design-of-Zookeeper-image15.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image16.jpg)

- If you have three nodes A, B, C and A and B die. Will C become Leader?

![image](../../../media/Big-Data_Design-of-Zookeeper-image17.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image18.jpg)

## Why do we need majority?

- Imagine: We have an ensemble spread over two data centres.

![image](../../../media/Big-Data_Design-of-Zookeeper-image19.jpg)

- Imagine: The network between data centres got disconnected. If we did not need majority for electing Leader
- What will happen?

![image](../../../media/Big-Data_Design-of-Zookeeper-image20.jpg)

- Each data centre will have their own Leader. No Consistency and utter Chaos. That is why it requires majority.

## Sessions

- Let's try to understand how do the zookeeper decides to delete ephermals nodes and takes care of session management.
    - A client has list of servers in the ensemble
    - It tries each until successful
    - Server creates a new session for the client
    - A session has a timeout period - decided by caller
    - If the server hasn't received a request within the timeout period, it may expire the session
    - On session expire, ephermal nodes are lost
    - To keep sessions alive client sends pings (heartbeats)
    - Client library takes care of heartbeats
    - Sessions are still valid on switching to another server
    - Failover is handled automatically by the client
    - Application can't remain agnostic of server reconnections because the operations will fail during disconnection

![image](../../../media/Big-Data_Design-of-Zookeeper-image21.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image22.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image23.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image24.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image25.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image26.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image27.jpg)

## Multi Update

- Batches together multiple operations together
- Either all fail or succeed in entirely
- Possible to implement transactions
- Others never observe any inconsistent state

![image](../../../media/Big-Data_Design-of-Zookeeper-image28.jpg)

## Watches

- Clients to get notifications when a znode changes in some way
- Watchers are triggered only once
- For multiple notifications, re-register

![image](../../../media/Big-Data_Design-of-Zookeeper-image29.jpg)

## ACLs - Access Control Lists

ACL determines who can perform certain operations on it

- ACL is the combination
    - authentication scheme
    - an identity for that scheme
    - and a set of permissions
- Authentication Scheme
    - **digest -** The client is authenticated by a username & password
    - **sasl -** The client is authenticated using Kerberos
    - **ip -** The client is authenticated by its IP address

## Use Cases

### Building a reliable configuration service

- A Distributed lock service

Only single process may hold the lock

## When not to use?

1. To store big data because:
    - The number of copies == number of nodes
    - All data is loaded in RAM too
    - Network load of transferring all data to all Nodes

2. Extermely strong consistency

![image](../../../media/Big-Data_Design-of-Zookeeper-image30.jpg)

## Katta - Lucene & more in the cloud

Katta is a scalable, failure tolerant, distributed, data storage for real time access.

Katta serves large, replicated, indices as shards to serve high loads and very large data sets. These indices can be of different type. Currently implementations are available for Lucene and Hadoop mapfiles.

- Makes serving large or high load indices easy
- Serves very large Lucene or Hadoop Mapfile indices as index shards on many servers
- Replicate shards on different servers for performance and fault-tolerance
- Supports pluggable network topologies
- Master fail-over
- Fast, lightweight, easy to integrate
- Plays well with Hadoop clusters
- Apache Version 2 License

http://katta.sourceforge.net

![image](../../../media/Big-Data_Design-of-Zookeeper-image31.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image32.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image33.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image34.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image35.jpg)

![image](../../../media/Big-Data_Design-of-Zookeeper-image36.jpg)
