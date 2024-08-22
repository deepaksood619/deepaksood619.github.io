# Design

## Partitioner

- Token Value Distribution
    - +2^63^ - 1 to -2^63^

## Membership

- Any server in cluster could be the coordinator
- So every server needs to maintain a list of all the other servers that are currently in the serveran
- List needs to be updated automatically as servers join, leave, and fail
- Cassandra uses gossip-based cluster membership
    - Nodes periodically gossip their membership list
    - On receipt, the local membership list is updated
    - If any heartbeat older than Tfail, node is marked as failed

## Joining the cluster

- Nodes join the cluster by communicating with any node
- Cassandra finds these nodes list of possible nodes in cassandra.yaml
- Seed nodes communicate cluster topology to the joining node
- Once the new node joins the cluster, all nodes are peers
- States of nodes
    - Joining
    - Leaving
    - Up
    - Down- Cassandra uses a Ring-based DHT but without finger tables or routing

## Drivers

- Drivers intelligently choose which node would best coordinate a request
- Per-query basis: `ResultSet results = session.execute("[query]");`
- TokenAwarePolicy - driver chooses node which contains the data
- RoundRobinPolicy - driver round robins the ring
- DCAwareRoundRobinPolicy - driver round robins the target data center

## Data Placement Strategies

- Replication Strategy
    - **SimpleStrategy**

Uses the partitioner, of which there are two kinds

1. **RandomPartitioner**: Chord-like hash partitioning

2. **ByteOrderedPartitioner**: Assigns ranges of keys to servers
    - Easier for range queries (e.g., Get me all twitter users starting with [a-b])

- **NetworkTopologyStrategy**: for multi-DC deployments
    - Two replicas per DC
    - Three replicas per DC
    - Per DC
        - First replica placed according to Partitioner
        - Then go clockwise around ring until you hit a different rack

## Snitches

- **Maps:** IPs to racks and DCs. Configured in cassandra.yaml config file
- Some options:
    - **SimpleSnitch:** Unaware of Topology (Rack-unaware)
    - **RackInferring:** Assumes topology of network by octet of server's IP address
    - 101.102.103.104 = x.< DC octet >.< rack octet >.< node octet >
    - **PropertyFileSnitch:** uses a config file
    - **EC2Snitch:** uses EC2
   	    - EC2 Region = DC
   	    - Availability zone = rack
    - Other snitch options available

[Snitch | Apache Cassandra Documentation](https://cassandra.apache.org/doc/stable/cassandra/architecture/snitch.html)

## Suspicion mechanisms

- Suspicion mechanisms to adaptively set the timeout based on underlying network and failure behavior
- **Accural detector:** Failure Detector outputs a value (PHI) representing suspicion
- Applications set an appropriate threshold
- PHI calculation for a member
    - Inter-arrival times for gossip messages
    - PHI(t) = -log(CDF or Probability(t_now - t_last))/log 10
    - PHI basically determines the detection timeout, but takes into account historical inter-arrival time variations for gossiped heatbeats
- In practice, PHI = 5 => 10-15 sec detection time
