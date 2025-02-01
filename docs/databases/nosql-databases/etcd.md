# etcd

etcd is a distributed key value store that provides a reliable way to store data across a cluster of machines. It's open-source and available on GitHub. etcd gracefully handles leader elections during network partitions and will tolerate machine failure, including the leader.

Your applications can read and write data into etcd. A simple use-case is to store database connection details or feature flags in etcd as key value pairs. These values can be watched, allowing your app to reconfigure itself when they change.

Advanced uses take advantage of the consistency guarantees to implement database leader elections or do distributed locking across a cluster of workers.

etcd is a distributed key-value store. In fact, etcd is the primary datastore of Kubernetes; storing and replicating all Kubernetes cluster state. As a critical component of a Kubernetes cluster having a reliable automated approach to its configuration and management is imperative.

As a distributed consensus-based system, the cluster configuration of etcd can be complicated. Bootstrapping, maintaining quorum, reconfiguring cluster membership, creating backups, handling disaster recovery, and monitoring critical events are tedious work, and require etcd-specific expertise.

- uses Raft consensus algorithm - https://raft.github.io
- etcd means distributed etc directory
- used by kubernetes, emqx, openshift

### Operator

An Operator builds upon the basic Kubernetes resource and controller concepts but includes application domain knowledge to take care of common tasks. They reduce the complexity of running distributed systems and help you focus on the desired configuration, not the details of manual deployment and lifecycle management.

https://coreos.com/etcd

https://github.com/etcd-io/etcd

https://etcd.readthedocs.io/en/latest/faq.html#what-is-etcd

https://jepsen.io/analyses/etcd-3.4.3

### Is it possible for etcd to have a split-brain scenario?

What is split-brain scenario?

Split brain scenarios occur when a group of nodes in a distributed system loses communication with each other primarily due to network partitioning, resulting in inconsistent or conflicting system states.

etcd is designed to avoid split-brain scenarios, as it relies on a leader election mechanism to ensure that only one node is active and in control of the cluster at any given time.

The official documentation says, there is no "split-brain" in etcd. Here is why.

- A network partition divides the etcd cluster into two parts; one with a member majority and the other with a member minority.
- The majority side becomes the available cluster and the minority side is unavailable
- If the leader is on the majority side, then from the majority point of view the failure is a minority follower failure.
- If the leader is on the minority side, then it is a leader failure.
- The leader on the minority side steps down and the majority side elects a new leader.
- Once the network partition clears, the minority side automatically recognizes the leader from the majority side and recovers its state.

So how does the leader know weather its in the majority or minority?

etcd nodes regularly send "heartbeats" to each other.

If the leader is in the minority part of the split, it will not receive acknowledgments from the majority of the nodes.

When the leader doesn't get enough responses to its heartbeats, it realizes that it might be in the minority.

To maintain the integrity of the system, it steps down from its leadership role.

On the other side of the partition, where the majority of nodes are, they also notice they're not getting heartbeats from the leader. Since they are the majority, they can elect a new leader among themselves.
