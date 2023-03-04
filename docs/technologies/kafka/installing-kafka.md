# Installing Kafka

- A Zookeeper cluster is called an *ensemble*, it is recommended that ensembles contain an odd number of servers
- Note: Consider running Zookeeper in a five-node ensemble. In order to make configuration changes to the ensemble, including swapping a node, you will need to reload nodes one at a time. If your ensemble cannot tolerate more than one node being down, doing maintenance work introduces additional risk. It is also not recommended to run more than seven nodes, as performance can start to degrade due to the nature of the consensus protocol.
- Kafka Configurations
  - General Broker
    - broker.id
    - port
    - zookeeper.connect
    - log.dirs
    - num.recovery.threads.per.data.dir
    - auto.create.topics.enable
  - Topic Defaults
    - num.partitions
    - log.retention.ms
    - log.retention.bytes
    - log.segment.bytes
    - log.segment.ms
    - message.max.bytes

## Cross-Cluster Data Mirroring

- Multicluster architecture
  - Hub-and-Spokes architecture
  - Active-Active architecture
  - Active-standby architecture
  - Stretch clusters
- MirrorMaker
- Other cross-cluster mirroring solutions
  - Uber uReplicator
  - Confluent's Replicator

## Administering Kafka

- Topic operations
- Consumer groups
- Dynamic configuration changes
- Partition management
- Consuming and Producing
- Client ACLs
- Unsafe operations
