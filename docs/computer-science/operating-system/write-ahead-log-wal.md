# Write Ahead Log, WAL

In [computer science](https://en.wikipedia.org/wiki/Computer_science), write-ahead logging(WAL) is a family of techniques for providing [atomicity](https://en.wikipedia.org/wiki/Atomic_(computer_science)) and [durability](https://en.wikipedia.org/wiki/Durability_(database_systems))(two of the [ACID](https://en.wikipedia.org/wiki/ACID) properties) in [database systems](https://en.wikipedia.org/wiki/Database_system). The changes are first recorded in the log, which must be written to stable storage, before the changes are written to the database.
In a system using WAL, all modifications are written to a [log](https://en.wikipedia.org/wiki/Database_log) before they are applied. Usually both redo and undo information is stored in the log.
The purpose of this can be illustrated by an example. Imagine a program that is in the middle of performing some operation when the machine it is running on loses power. Upon restart, that program might need to know whether the operation it was performing succeeded, succeeded partially, or failed. If a write-ahead log is used, the program can check this log and compare what it was supposed to be doing when it unexpectedly lost power to what was actually done. On the basis of this comparison, the program could decide to undo what it had started, complete what it had started, or keep things as they are.
WAL allows updates of a database to be done [in-place](https://en.wikipedia.org/wiki/In-place_algorithm). Another way to implement atomic updates is with [shadow paging](https://en.wikipedia.org/wiki/Shadow_paging), which is not in-place. The main advantage of doing updates in-place is that it reduces the need to modify indexes and block lists.
[ARIES](https://en.wikipedia.org/wiki/Algorithms_for_Recovery_and_Isolation_Exploiting_Semantics) is a popular algorithm in the WAL family.
Modern [file systems](https://en.wikipedia.org/wiki/File_system) typically use a variant of WAL for at least file system [metadata](https://en.wikipedia.org/wiki/Metadata) called [journaling](https://en.wikipedia.org/wiki/Journaling_file_system).
<https://en.wikipedia.org/wiki/Write-ahead_logging>

## InfluxDB WAL

The temporary cache for recently written points. To reduce the frequency with which the permanent storage files are accessed, InfluxDB caches new points in the WAL until their total size or age triggers a flush to more permanent storage. This allows for efficient batching of the writes into the TSM.
Points in the WAL can be queried, and they persist through a system reboot. On process start, all points in the WAL must be flushed before the system accepts new writes.
Some data structures are inherently sequential. For example, a Write Ahead Log used by the databases and filesystems. It is used in order to facilitate durability: changes to the data files are first appended to the log sequentially.
When main storage catches up and records are committed to the data files, commit log segment holding recovery data for it is discarded. If the process dies before the main storage has a chance to catch up, Write Ahead Log is replayed to restore the state database had before restart. If we follow this procedure, data files don't have to be flushed on disk on every operation: operations can be batched together, while still guaranteeing durability. Using Write-Ahead Log significantly reduces amount of writes for both mutable and immutable storage types.
It's often advised to use a separate physical device for Write Ahead Log to make sure both memory table flushes and WAL writes are sequential. There are many other reasons to do so, too: to avoid IO saturation, for better failover, more predictable latencies.

## Batching Writes

LSM-Trees are using Memory tables, where data is stored before it gets to the main storage, for serving reads and batching writes together. After reaching a size threshold, memory table is written on disk.
Here, memory table serves as a buffer: read, write and update operations are performed against memory tables, allowing batching a few items together. When data is written on disk, it's done sequentially, in one pass. This amortises a cost of small random writes and converts them into larger sequential allocations on disk, transforming updates of logically unrelated data into physically sequential I/O.
Unlike Write-Ahead Log (which writes items in the incoming order) Memory Tables pre-sort the data before it reaches disk in order to facilitate sequential read access. Records that are more likely to be read together, are written together.
<https://medium.com/databasss/on-disk-io-access-patterns-in-lsm-trees-2ba8dffc05f9>
<https://bravenewgeek.com/building-a-distributed-log-from-scratch-part-1-storage-mechanics>

[Redo, Undo and WAL logs | The Backend Engineering Show](https://youtu.be/uHvR7nOu5m4)
