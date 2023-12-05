# Others

## CRDTs (Conflict-free Replicated Data Types)

A conflict-free replicated data type (CRDT) is an abstract data type, with a well defined interface, designed to be replicated at multiple processes and exhibiting the following properties

1. Any replica can be modified without coordinating with another replicas;
2. When any two replicas have received the same set of updates, they reach the same state, deterministically, by adopting mathematically sound rules to guarantee state convergence.

Riak is the most popular open source library of CRDT's and is used by Bet365 and League of Legends.

### Types of CRDTs

There are two approaches to CRDTs, both of which can provide [strong](https://en.wikipedia.org/wiki/Strong_consistency)[eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency): **operation-based CRDTs and state-based CRDTs.**

The two alternatives are equivalent, as one can emulate the other.Operation-based CRDTs require additional guarantees from the [communication middleware](https://en.wikipedia.org/wiki/Communications_protocol);namely that the operations not be dropped or duplicated when transmitted to the other replicas, though they can be delivered in any order. State-based CRDTs also have a disadvantage, which is that the entire state must be transmitted to the other replicas, which may be costly.

### Operation-based CRDTs

Operation-based CRDTs are referred to as **commutative replicated data types, or CmRDTs.** CmRDT replicas propagate state by transmitting only the update operation. For example, a CmRDT of a single integer might broadcast the operations (+10) or (−20). Replicas receive the updates and apply them locally. The operations are [commutative](https://en.wikipedia.org/wiki/Commutative). However, they are not [idempotent](https://en.wikipedia.org/wiki/Idempotent). The communications infrastructure must therefore ensure that all operations on a replica are delivered to the other replicas, without duplication, but in any order.

Pure operation-based CRDTs are a variant of operation-based CRDTs that reduces the metadata size.

### State-based CRDTs

State-based CRDTs are called**convergent replicated data types, orCvRDTs**. In contrast to CmRDTs, CvRDTs send their full local state to other replicas, where the states are merged by a function which must be [commutative](https://en.wikipedia.org/wiki/Commutative), [associative](https://en.wikipedia.org/wiki/Associative), and [idempotent](https://en.wikipedia.org/wiki/Idempotent). Themergefunction provides a [join](https://en.wikipedia.org/wiki/Join_(mathematics)) for any pair of replica states, so the set of all states forms a [semilattice](https://en.wikipedia.org/wiki/Semilattice). Theupdatefunction must [monotonically increase](https://en.wikipedia.org/wiki/Monotonic_function) the internal state, according to the same [partial order](https://en.wikipedia.org/wiki/Partial_order) rules as the semilattice.

Delta state CRDTs(or simply Delta CRDTs) are optimized state-based CRDTs where only recently applied changes to a state are disseminated instead of the entire state.

### Comparison

While CmRDTs place more requirements on the protocol for transmitting operations between replicas, they use less bandwidth than CvRDTs when the number of transactions is small in comparison to the size of internal state. However, since the CvRDT merge function is associative, merging with the state of some replica yields all previous updates to that replica.[Gossip protocols](https://en.wikipedia.org/wiki/Gossip_protocol) work well for propagating CvRDT state to other replicas while reducing network use and handling topology changes.

Some lower bounds on the storage complexity of state-based CRDTs are known.

https://arxiv.org/abs/1805.06358

https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

http://christophermeiklejohn.com/crdt/2014/07/22/readings-in-crdts.html

[Ep 2 - Introduction to CRDTs - Conflict-free Replicated Data Types - with @VipulVaibhaw - YouTube](https://www.youtube.com/watch?v=Paau_t0aZKw&ab_channel=AsliEngineeringbyArpitBhayani)

## Actor Model

The actor model provides a higher level of abstaction for writing concurrent and distributed systems, which shields the developer from explicit locking and thread management. It provides the core functionality of reactive systems, defined in the Reactive Manifesto as responsive, resilient, elastic, and message-driven. Akka is an actor-based framework that is easy to implement with full Java 8 Lambda support. Actors enable developers to design and implement systems in ways that help focus more on the core functionality and less on the plumbing. Actor-based systems are the perfect foundation for quickly evoling microservices architectures.

Actor (encapsulate 3 things)

1. Processing
2. Storage
3. Communication

If an actor receive a message it can do 3 things

1. Create more actors
2. Send messages to actors it knows
3. Designate what to do with the next message

https://www.brianstorti.com/the-actor-model

https://www.youtube.com/watch?v=7erJ1DV_Tlo

[Actor Model Explained - YouTube](https://www.youtube.com/watch?v=ELwEdb_pD0k&ab_channel=Finematics)

## Multi-Tenancy

Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. Tenants may be given the ability to customize some parts of the application, such as color of the user interface ([UI](http://searchsoa.techtarget.com/definition/user-interface)) or [business rules](http://whatis.techtarget.com/definition/business-rule), but they cannot customize the application's [code](http://whatis.techtarget.com/definition/code).

Multi-tenancy can be economical because software development and maintenance costs are shared. It can be contrasted with single-tenancy, an architecture in which each customer has their own software instance and may be given access to code. With a multi-tenancy architecture, the provider only has to make updates once. With a single-tenancy architecture, the provider has to touch multiple instances of the software in order to make updates.

In [cloud computing](http://searchcloudcomputing.techtarget.com/definition/cloud-computing), the meaning of multi-tenancy architecture has broadened because of new service models that take advantage of [virtualization](http://searchservervirtualization.techtarget.com/definition/virtualization) and [remote access](http://searchmidmarketsecurity.techtarget.com/definition/remote-access). A software-as-a-service ([SaaS](http://whatis.techtarget.com/definition/SaaS)) provider, for example, can run one instance of its application on one instance of a database and provide web access to multiple customers. In such a scenario, each tenant's data is isolated and remains invisible to other tenants.

https://whatis.techtarget.com/definition/multi-tenancy

https://www.computerworld.com/article/2517005/data-center/multi-tenancy-in-the-cloud--why-it-matters.html

## Failure Modes

This brings us to an important subject of Failure Detectors, which are widely used in practical consensus algorithms and help to solve consensus problem in a partial synchronous or synchronous system.Failure Detectoris an abstraction that helps to reason about liveness in the system, detect and mark participants as active or failed.

If processes A and B communicate through perfect link and all process B stops receiving messages from A and A does not receive any messages from B, most of the time from the process perspective it's impossible to know whetherBhas crashed, B is simply running very slow or there's a network partition. If two processes are separated by the network partition, for both of them it will seem as if the other process just crashed.

The simplest way for a process to fail is Crash-Failure, where the process stops executing steps required by the algorithm. Here, the assumption is that processes are executing algorithm correctly, but stop at some point and never recover. In real-life system, this type of failure occurs less often than, say, Crash-Recovery, where the process stops executing steps required by the algorithm, but recovers at the later point and tries to execute further steps. For correctness, some algorithms still assume crashed and recovered process as failed and further steps do not influence the outcome of the algorithm.

This means that the algorithm should be designed in a way that does not rely for on process recovery for correctness, since it may never recover or recover too late.

Another type of failure is Omission Fault. This failure model assumes that the process omits some of the algorithm steps, is not able to execute algorithm steps or this execution is not visible for other participants.

The hardest failures to overcome are Arbitrary or Byzantine Failures, where the process continues executing algorithm steps, but in a way that contradicts the algorithm in some way (for example, by deciding on a value that was never proposed).

https://medium.com/databasss/on-ways-to-agree-part-1-links-and-flp-impossibility-f6bd8a6a0980

## Shared-Nothing architecture (SN)

A shared-nothing architecture (SN) is a [distributed-computing](https://en.wikipedia.org/wiki/Distributed_computing) architecture in which each update request is satisfied by a single node (processor/memory/storage unit). The intent is to eliminate contention among nodes. Nodes do not share (independently access) memory or storage. One alternative architecture is shared everything, in which requests are satisfied by arbitrary combinations of nodes. This may introduce contention, as multiple nodes may seek to update the same data at the same time.

SN eliminates [single points of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), allowing the overall system to continue operating despite failures in individual nodes and allowing individual nodes to upgrade without a system-wide shutdown.

A SN system can scale simply by adding nodes, since no central resource bottlenecks the system.Another term for SN is [sharding](https://en.wikipedia.org/wiki/Sharding). A SN system typically partitions its data among many nodes. A refinement is to replicate commonly used but infrequently modified data across many nodes, allowing more requests to be resolved on a single node.

https://en.wikipedia.org/wiki/Shared-nothing_architecture

## Redundancy, Replication, Transparency

Replication takes a redundant node one step further; it ensures that the redundant node (a replica) is identical to all of its other copies.

[Transparency](https://medium.com/baseds/transparency-illusions-of-a-single-system-part-1-b01c25f7dddd) in [a system](https://medium.com/baseds/transparency-illusions-of-a-single-system-part-2-2b21c5047774) means that all the replicas and the original node must behave similarly, which means that a consumer of the system (like an end user or another node) could potentially write to one replica, while another consumer of the system could read from another replica!

https://medium.com/baseds/redundancy-and-replication-duplicating-in-a-distributed-system-7ab4322d7378

## Designing Distributed Systems

#### *Patterns and Paradigms for Scalable, Reliable Services by Brendon Burns (cofounder of Kubernetes)*

- Both an object and interface for expressing core distributed system patterns
- side-car, adapter and ambassador patterns to split application into a group of containers on a single machine
- Loosely coupled multi-node distributed patterns for replication, scaling, and communication between the components
- Work queues, event-based processing and coordinated workflows# Event-Driven Batch Processing
