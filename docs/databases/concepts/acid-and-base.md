# ACID and BASE

## ACID (SQL)

- A - Atomic, Everything in a transaction succeeds or the entire transaction is rolled back
- C - Consistent - A transaction cannot leave the database in an inconsistent state. (MVCC - Locking)
- I - Isolated - Transaction cannot interfere with each other
- D - Durable - Completed Transaction persist, even when the server restarts.

## BASE - Basically Available, Soft-state Eventual consistency (NoSQL)

In partitioned databases, trading some consistency for availability can lead to dramatic improvements in scalability. BASE is optimistic and accepts that the database consistency will be in a state of flux. Although this sounds impossible to cope with, in reality it is quite manageable and leads to levels of scalability that cannot be obtained with ACID.

### BA - Basic Availability

This constraint states that the system does guarantee the availability of the data as regards CAP Theorem; there will be a response to any request. But, that response could still be 'failure' to obtain the requested data or the data may be in an inconsistent or changing state, much like waiting for a check to clear in your bank account.

### S - Soft State

The state of the system could change over time, so even during times without input there may be changes going on due to 'eventual consistency,' thus the state of the system is always 'soft.'

### E - Eventual Consistency

The system will *eventually* become consistent once it stops receiving input. The data will propagate to everywhere it should sooner or later, but the system will continue to receive input and is not checking the consistency of every transaction before it moves onto the next one.

## BASE in terms of NoSQL Databases

### Basic Availability

The NoSQL database approach focuses on the availability of data even in the presence of multiple failures. It achieves this by using a highly distributed approach to database management. Instead of maintaining a single large data store and focusing on the fault tolerance of that store, NoSQL databases spread data across many storage systems with a high degree of replication. In the unlikely event that a failure disrupts access to a segment of data, this does not necessarily result in a complete database outage

### Soft State

BASE databases abandon the consistency requirements of the ACID model pretty much completely. One of the basic concepts behind BASE is that data consistency is the developer's problem and should not be handled by the database

### Eventual Consistency

The only requirement that NoSQL databases have regarding consistency is to require that at some point in the future, data will converge to a consistent state. No guarantees are made, however, about when this will occur. That is a complete departure from the immediate consistency requirement of ACID that prohibits a transaction from executing until the prior transaction has completed and the database has converged to a consistent state

## References

BASE - https://queue.acm.org/detail.cfm?id=1394128
