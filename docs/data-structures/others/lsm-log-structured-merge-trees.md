# LSM (Log Structured Merge Trees)

In [computer science](https://en.wikipedia.org/wiki/Computer_science), the log-structured merge-tree (or LSM tree) is a [data structure](https://en.wikipedia.org/wiki/Data_structure) with performance characteristics that make it attractive for providing [indexed](https://en.wikipedia.org/wiki/Database_index) access to files with high insert volume, such as [transactional log data](https://en.wikipedia.org/wiki/Transaction_log). LSM trees, like other [search trees](https://en.wikipedia.org/wiki/Search_tree), maintain key-value pairs. LSM trees maintain data in two or more separate structures, each of which is optimized for its respective underlying storage medium; data is synchronized between the two structures efficiently, in batches.

One simple version of the LSM tree is a two-level LSM tree. As described by [Patrick O'Neil](https://en.wikipedia.org/wiki/Patrick_O%27Neil), a two-level LSM tree comprises two [tree-like](https://en.wikipedia.org/wiki/Tree_(data_structure)) structures, called C0and C1. C0 is smaller and entirely resident in memory, whereas C1 is resident on disk. New records are inserted into the memory-resident C0 component. If the insertion causes the C0 component to exceed a certain size threshold, a contiguous segment of entries is removed from C0 and merged into C1 on disk. The performance characteristics of LSM trees stem from the fact that each component is tuned to the characteristics of its underlying storage medium, and that data is efficiently migrated across media in rolling batches, using an algorithm reminiscent of [merge sort](https://en.wikipedia.org/wiki/Merge_sort).

Most LSM trees used in practice employ multiple levels. Level 0 is kept in main memory, and might be represented using a tree. The on-disk data is organized into sorted runs of data. Each run contains data sorted by the index key. A run can be represented on disk as a single file, or alternatively as a collection of files with non-overlapping key ranges. To perform a query on a particular key to get its associated value, one must search in the Level 0 tree and each run.

A particular key may appear in several runs, and what that means for a query depends on the application. Some applications simply want the newest key-value pair with a given key. Some applications must combine the values in some way to get the proper aggregate value to return. For example, in [Apache Cassandra](https://en.wikipedia.org/wiki/Apache_Cassandra), each value represents a row in a database, and different versions of the row may have different sets of columns.

In order to keep down the cost of queries, the system must avoid a situation where there are too many runs.

Extensions to the 'leveled' method to incorporate [B+ tree](https://en.wikipedia.org/wiki/B%2B_tree) structures have been suggested, for example bLSMand Diff-Index.

LSM trees are used in data stores such as [Bigtable](https://en.wikipedia.org/wiki/Bigtable), [HBase](https://en.wikipedia.org/wiki/HBase), [LevelDB](https://en.wikipedia.org/wiki/LevelDB), [SQLite4](https://en.wikipedia.org/wiki/SQLite4), [Tarantool](https://en.wikipedia.org/wiki/Tarantool) , [RocksDB](https://en.wikipedia.org/wiki/RocksDB), [WiredTiger](https://en.wikipedia.org/wiki/WiredTiger) (MongoDB Engine), [Apache Cassandra](https://en.wikipedia.org/wiki/Apache_Cassandra), [InfluxDB](https://en.wikipedia.org/wiki/InfluxDB) and [VictoriaMetrics](https://en.wikipedia.org/w/index.php?title=VictoriaMetrics&action=edit&redlink=1).

### Time complexity in big O notation

| **Algorithm** | **Average** | **Worst case** |
|---------------|-------------|----------------|
| Insert        | O(1)        | O(1)           |
| Find-min      | O(N)        | O(N)           |
| Delete-min    | O(N)        | O(N)           |

[Log-structured merge-tree - Wikipedia](https://en.wikipedia.org/wiki/Log-structured_merge-tree)

## Anatomy

In LSM Trees, all the writes are performed against the mutable in-memory data structure (once again, often implemented using a data structure allowing logarithmic time lookup, such as a B-Tree or a [SkipList](http://epaperpress.com/sortsearch/download/skiplist.pdf)). Whenever the size of the tree reaches a certain threshold (or after some predefined time period elapses, whichever comes first), we write the data the disk, creating a new SSTable. This process is sometimes called "flush". Retrieving the data may require searching all SSTables on disk, checking the in-memory table and merging their contents together before returning the result.

![image](../../media/LSM-(Log-Structured-Merge-Trees)-image1.jpg)

Structure of an LSM Tree: a memory-resident table, used for writes. Whenever the memory table is large enough, it's sorted contents are written on disk, becoming an SSTable. Reads are served, hitting all SSTables and the memory-resident table, requiring a merge process to reconcile the data.

The merge step during the read is required, since the data can be split in several parts (for example, an insert followed by delete operation, where delete would shadow the originally inserted record; or an insert, followed by the update operation, where a new field is added to the record).

Every data item in SSTable has a timestamp associated with it. For inserts it specifies the write time, for updates --- an update time and removal time for deletes.

## Summary

LSM Tree databases are typically write-optimized, since all the writes are performed against the write-ahead log (for durability and fail over) and memory resident tables. Reads are usually slower, because of the merge process and a need to check multiple files on disk.
Because of the maintenance, LSM-Trees might result into worse latency, since both CPU and IO bandwidth is spent re-reading and merging tables instead of just serving reads and writes. It's also possible, under a write-heavy workload, to saturate IO by just writes and flushes, stalling the compaction process. Lagging compaction results into slower reads, increasing CPU and IO pressure, making the matters worse. This is something to watch out for.

LSM-Trees cause some write amplification: data has to be written to the write-ahead log, then flushed on disk, where it will be eventually re-read and written again during the compaction process. That said, mutable B-Tree structures also suffer from write amplification, so I'd prefer to leave the cost analysis until after we discuss B-Trees and a conjecture that helps understanding that we are just trading read performance against write performance and memory overhead.

## Closing Words

As you can see all write operations in LSM Trees are sequential: Write-Ahead Log appends, Memtable flushes, Compactions. Using [per-SSTable indexes](https://github.com/apache/cassandra/blob/trunk/doc/SASI) or pre-sorting data can also help to make at least some read operations sequential. It can only be done to a certain extend as reads have to be performed against multiple files and then merged together.

<https://medium.com/databasss/on-disk-io-part-3-lsm-trees-8b2da218496f>

<https://medium.com/databasss/on-disk-io-access-patterns-in-lsm-trees-2ba8dffc05f9>

## LMS Trees (Copy on Write B-Trees)

- Take B-Tree, let's make the pages immutable (every page is a new instance appended to old instance)

<https://blog.acolyer.org/2014/11/26/the-log-structured-merge-tree-lsm-tree>
