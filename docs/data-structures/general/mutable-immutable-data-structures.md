# Mutable/Immutable Data Structures

## Immutable Data Structure

The obvious advantage of the immutable data structures is that the storage overhead can be minimized: we do not have to reserve any extra space for data that is going to be inserted later or for the cases when the updated records require more space than the originally written ones.
Keeping the data structure immutable favors the sequential writes: data is written on disk in a single pass, append-only. The mutable data structure will be pre-allocated in a single pass, but the subsequent writes will be random. Some structures require node splitting, that will relocate already written parts. After some time, randomly written file might require defragmentation.
Some databases, instead of doing in-place updates, just mark the outdated record as "deleted" (so that it will eventually be garbage-collected) and append new records to the specially designated update area of the file. While this is a nice compromise, sometimes writes fill up all the designated space and overflow areas have to be created. All of this might slow down both subsequent reads and writes.
Another advantage of immutable files is that data can be read from the disk without any segment locking between operations, which significantly simplifies concurrent access. In contrast, mutable data structures employ hierarchical [locks and latches](http://15721.courses.cs.cmu.edu/spring2017/papers/06-latching/a16-graefe.pdf) in order to ensure on disk data structure integrity, allow multiple readers at the same time but give exclusive ownership for parts of tree to writers.
Both mutable and immutable data structures require some housekeeping in order to optimize performance but for different reasons. Since amount of allocated files constantly grows, immutable data structures have to merge and rewrite files in order to make sure that the least amount of files is hit during the query, as the requested record might be spread across multiple files. On the other hand, mutable files may have to be rewritten partially or completely to decrease fragmentation, merge overflow areas and reclaim space occupied by updated or deleted records (as their new contents were written elsewhere). Of course, the exact scope of work done by the housekeeping process heavily depends on the concrete implementation.

## Summary

Using immutable data structures can often simplify the work of programmer. When using immutable on-disk structures, you trade the need to occasionally merge your tables for better space management (by avoiding overflow pages and boosting space occupancy to 100%), concurrency (because readers and writers are never compete over the same file, therefore requiring no mutual exclusion) and potentially simpler implementations.
<https://medium.com/databasss/on-disk-io-part-3-lsm-trees-8b2da218496f>

## Mutable Data Structure

Mutable storage is often implemented using Heap Table File, combined with some sort of index.
Example

- B-Tree
<https://medium.com/databasss/on-disk-storage-part-4-b-trees-30791060741>
