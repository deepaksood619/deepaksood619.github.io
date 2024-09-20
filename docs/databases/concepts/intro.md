# Intro

## Choosing the Database

1. Instant performance (respond in less than 1ms)
2. Scalability (Linear and horizontal scaling)
3. High availability (quickly recover from database failure without loss of data, replication)
4. Tiered memory support (hottest data in DRAM and warm data in persistent memory)
5. Simplicity and extensibility
6. Developer tools
7. Cloud native
8. Open source
9. NoSQL for the future

## Transactions

A transaction is defined as a sequence of actionsthat are executed on a shared database to perform some higher-level function. It is a basic unit of change in the DBMS. No partial transactions are allowed.
There are three categories of actions that the DBMS can execute.

- Unprotected Actions

Low-level operations on physical resources (e.g., disk, memory). These lack all of the ACID properties except for consistency. Their effects cannot be depended upon.

- Protected Actions

These are the high-level changes that the application wants to perform on the database. The DBMS does not externalize their results before they are completely done. Fully ACID.

- Real Actions

These affect the physical world in a way that is hard or impossible to reverse. For example, if the application sends out an email, then the DBMS cannot retract it.

## Transaction Models

A transaction model specifies the execution semantics of protected actions.

## Flat Transactions

Standard transaction model that starts with BEGIN, followed by one or more actions, and then completed with either COMMIT or ROLLBACK. This is what most people think of when discussing transaction support in a DBMS.
There are several limitations to flat transactions that motivate us to consider other models. Foremost is that the application can only rollback the entire transaction (i.e., no partial rollbacks). All of a transaction's work is lost if the DBMS fails before that transaction finishes. Each transaction takes place at a single point in time.

## Transaction Savepoints

Save the current state of processing for the transaction and provide a handle for the application to refer to that savepoint.The application can control the state of the transaction through these savepoints. The application can create a handle with the SAVEPOINT command during a transaction. It can use ROLLBACK to revert all changes back to the state of the database at a given savepoint. It can also use RELEASE to destroy a savepoint previously defined in the transaction.

## Nested Transactions

The invocation of a transaction during the execution of another transaction. The nested transactions form a hierarchy of work. The outcome of a child transaction depends on the outcome of its parent transaction.

## Chained Transactions

The ability to link multiple transactions one after each other. The combined COMMIT and BEGIN operations between two transactions is atomic. This means that no other transaction can change the state of the databaseas seen by the second transaction from the time that the first transaction commits and the second transaction begins.

## Compensating Transactions

A special type of transaction that is designed to semantically reverse the effects of another already committed transaction. Such a reversal has to be logical instead of physical.

## Saga Transactions

A sequence of chained transactions T1-Tn and compensating transactions C1-Cn−1 where one of the following is guaranteed: The transactions will commit in the order T1,. . .Tj, Cj. . .C1 (where j < n).

## Schedule

A schedule is a series of operations from one or more transactions. A schedule can be of two types:

### Serial Schedule

When one transaction completely executes before starting another transaction, the schedule is called serial schedule. A serial schedule is always consistent. e.g.; If a schedule S has debit transaction T1 and credit transaction T2, possible serial schedules are T1 followed by T2 (T1->T2) or T2 followed by T1 ((T1->T2). A serial schedule has low throughput and less resource utilization.

### Concurrent Schedule

When operations of a transaction are interleaved with operations of other transactions of a schedule, the schedule is called Concurrent schedule. But concurrency can lead to inconsistency in the database.

## Conflict Serializability in DBMS

Serial schedules have less resource utilization and low throughput. To improve it, two are more transactions are run concurrently. But concurrency of transactions may lead to inconsistency in database. To avoid this, we need to check whether these concurrent schedules are serializable or not.

**Conflict Serializable:** A schedule is called conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations

**Conflicting operations:** Two operations are said to be conflicting if all conditions satisfy

- They belong to different transactions
- They operate on the same data item
- At Least one of them is a write operation

Example

- **Conflicting** operations pair (R1(A), W2(A)) because they belong to two different transactions on same data item A and one of them is write operation.
- Similarly, (W1(A), W2(A)) and (W1(A), R2(A)) pairs are also **conflicting**.
- On the other hand, (R1(A), W2(B)) pair is**non-conflicting**because they operate on different data item.
- Similarly, ((W1(A), W2(B)) pair is**non-conflicting**.

## Topics

- Concurrency Control
- Indexing
- Storage Models, Compression
- Parallel Join Algorithms
- Networking Protocols
- Logging & Recovery Methods
- Query Optimization, Execution, Compilation

## Others

https://docs.oracle.com/cd/B19306_01/server.102/b14220/toc.htm

https://medium.com/@rakyll/things-i-wished-more-developers-knew-about-databases-2d0178464f78

https://littlekendra.com

[**https://www.freecodecamp.org/news/watch-a-cornell-university-database-course-for-free/**](https://www.freecodecamp.org/news/watch-a-cornell-university-database-course-for-free/)

[**https://www.youtube.com/watch?v=BQBGORBPytw**](https://www.youtube.com/watch?v=BQBGORBPytw)

[**https://www.youtube.com/watch?v=ER8oKX5myE0**](https://www.youtube.com/watch?v=ER8oKX5myE0)

- **Database modeling**
- **Isolation levels**
