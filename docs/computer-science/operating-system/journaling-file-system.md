# Journaling File System

Ajournaling file systemis a [file system](https://en.wikipedia.org/wiki/File_system) that keeps track of changes not yet committed to the file system's main part by recording the intentions of such changes in a data structure known as a "[journal](https://en.wikipedia.org/wiki/Journal_(computing))", which is usually a [circular log](https://en.wikipedia.org/wiki/Circular_log). In the event of a system crash or power failure, such file systems can be brought back online more quickly with a lower likelihood of becoming corrupted.
Depending on the actual implementation, a journaling file system may only keep track of stored [metadata](https://en.wikipedia.org/wiki/Metadata), resulting in improved performance at the expense of increased possibility for data corruption. Alternatively, a journaling file system may track both stored data and related metadata, while some implementations allow selectable behavior in this regard.

## Rationale

Updating file systems to reflect changes to files and directories usually requires many separate write operations. This makes it possible for an interruption (like a power failure or system [crash](https://en.wikipedia.org/wiki/Crash_(computing))) between writes to leave data structures in an invalid intermediate state.
For example, deleting a file on a Unix file system involves three steps:

1. Removing its directory entry.

2. Releasing the [inode](https://en.wikipedia.org/wiki/Inode) to the pool of free inodes.

3. Returning all disk blocks to the pool of free disk blocks.
If a crash occurs after step 1 and before step 2, there will be an orphaned inode and hence a [storage leak](https://en.wikipedia.org/wiki/Storage_leak); if a crash occurs between steps 2 and 3, then the blocks previously used by the file cannot be used for new files, effectively decreasing the storage capacity of the file system. Re-arranging the steps does not help, either. If step 3 preceded step 1, a crash between them could allow the file's blocks to be reused for a new file, meaning the partially deleted file would contain part of the contents of another file, and modifications to either file would show up in both. On the other hand, if step 2 preceded step 1, a crash between them would cause the file to be inaccessible, despite appearing to exist.
Detecting and recovering from such inconsistencies normally requires a complete [walk](https://en.wikipedia.org/wiki/Glossary_of_graph_theory_terms#walk) of its data structures, for example by a tool such as [fsck](https://en.wikipedia.org/wiki/Fsck)(the file system checker).This must typically be done before the file system is next mounted for read-write access. If the file system is large and if there is relatively little I/O bandwidth, this can take a long time and result in longer downtimes if it blocks the rest of the system from coming back online.
To prevent this, a journaled file system allocates a special area - the journal - in which it records the changes it will make ahead of time. After a crash, recovery simply involves reading the journal from the file system and replaying changes from this journal until the file system is consistent again. The changes are thus said to be [atomic](https://en.wikipedia.org/wiki/Atomicity_(database_systems))(not divisible) in that they either succeed (succeeded originally or are replayed completely during recovery), or are not replayed at all (are skipped because they had not yet been completely written to the journal before the crash occurred).

## Techniques

Some file systems allow the journal to grow, shrink and be re-allocated just as a regular file, while others put the journal in a contiguous area or a hidden file that is guaranteed not to move or change size while the file system is mounted. Some file systems may also allowexternal journalson a separate device, such as a [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive) or battery-backed non-volatile RAM. Changes to the journal may themselves be journaled for additional redundancy, or the journal may be distributed across multiple physical volumes to protect against device failure.
The internal format of the journal must guard against crashes while the journal itself is being written to. Many journal implementations (such as the JBD2 layer in [ext4](https://en.wikipedia.org/wiki/Ext4)) bracket every change logged with a checksum, on the understanding that a crash would leave a partially written change with a missing (or mismatched) checksum that can simply be ignored when replaying the journal at next remount.

## Physical journals

Aphysical journallogs an advance copy of every block that will later be written to the main file system. If there is a crash when the main file system is being written to, the write can simply be replayed to completion when the file system is next mounted. If there is a crash when the write is being logged to the journal, the partial write will have a missing or mismatched checksum and can be ignored at next mount.
Physical journals impose a significant performance penalty because every changed block must be committedtwiceto storage, but may be acceptable when absolute fault protection is required.

## Logical journals

Alogical journalstores only changes to file [metadata](https://en.wikipedia.org/wiki/Metadata) in the journal, and trades fault tolerance for substantially better write performance. A file system with a logical journal still recovers quickly after a crash, but may allow unjournaled file data and journaled metadata to fall out of sync with each other, causing data corruption.
For example, appending to a file may involve three separate writes to:

1. The file's [inode](https://en.wikipedia.org/wiki/Inode), to note in the file's metadata that its size has increased.

2. The free space map, to mark out an allocation of space for the to-be-appended data.

3. The newly allocated space, to actually write the appended data.
In a metadata-only journal, step 3 would not be logged. If step 3 was not done, but steps 1 and 2 are replayed during recovery, the file will be appended with garbage.

## Write hazards

The write cache in most operating systems sorts its writes (using the [elevator algorithm](https://en.wikipedia.org/wiki/Elevator_algorithm) or some similar scheme) to maximize throughput. To avoid an out-of-order write hazard with a metadata-only journal, writes for file data must be sorted so that they are committed to storage before their associated metadata. This can be tricky to implement because it requires coordination within the operating system kernel between the file system driver and write cache. An out-of-order write hazard can also occur if a device cannot write blocks immediately to its underlying storage, that is, it cannot flush its write-cache to disk due to deferred write being enabled.
To complicate matters, many mass storage devices have their own write caches, in which they may aggressively reorder writes for better performance. (This is particularly common on magnetic hard drives, which have large seek latencies that can be minimized with elevator sorting.) Some journaling file systems conservatively assume such write-reordering always takes place, and sacrifice performance for correctness by forcing the device to flush its cache at certain points in the journal (called barriers in [ext3](https://en.wikipedia.org/wiki/Ext3) and [ext4](https://en.wikipedia.org/wiki/Ext4)).

## Alternatives

## Soft updates

Some [UFS](https://en.wikipedia.org/wiki/Unix_File_System) implementations avoid journaling and instead implement [soft updates](https://en.wikipedia.org/wiki/Soft_updates): they order their writes in such a way that the on-disk file system is never inconsistent, or that the only inconsistency that can be created in the event of a crash is a storage leak. To recover from these leaks, the free space map is reconciled against a full walk of the file system at next mount. This [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) is usually done in the background.

## Log-structured file systems

In [log-structured file systems](https://en.wikipedia.org/wiki/Log-structured_file_system), the write-twice penalty does not apply because the journal itselfisthe file system: it occupies the entire storage device and is structured so that it can be traversed as would a normal file system.

## Copy-on-write file systems

Full [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write) file systems (such as [ZFS](https://en.wikipedia.org/wiki/ZFS) and [Btrfs](https://en.wikipedia.org/wiki/Btrfs)) avoid in-place changes to file data by writing out the data in newly allocated blocks, followed by updated metadata that would point to the new data and disown the old, followed by metadata pointing to that, and so on up to the superblock, or the root of the file system hierarchy. This has the same correctness-preserving properties as a journal, without the write-twice overhead.
<https://en.wikipedia.org/wiki/Journaling_file_system>

## ZFS

## ZFSis a combined [file system](https://en.wikipedia.org/wiki/File_system) and [logical volume manager](https://en.wikipedia.org/wiki/Logical_volume_management) designed by [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems). ZFS is scalable, and includes extensive protection against [data corruption](https://en.wikipedia.org/wiki/Data_corruption), support for high storage capacities, efficient data compression, integration of the concepts of filesystem and [volume management](https://en.wikipedia.org/wiki/Volume_(computing)), [snapshots](https://en.wikipedia.org/wiki/Snapshot_(computer_storage)) and [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write) clones, continuous integrity checking and automatic repair, [RAID-Z](https://en.wikipedia.org/wiki/ZFS#RAID-Z), native [NFSv4](https://en.wikipedia.org/wiki/NFSv4)[ACLs](https://en.wikipedia.org/wiki/Access_control_lists), and can be very precisely configured. The two main implementations, by [Oracle](https://en.wikipedia.org/wiki/Oracle_Corporation) and by the [OpenZFS](https://en.wikipedia.org/wiki/OpenZFS) project, are extremely similar, making ZFS widely available within [Unix-like](https://en.wikipedia.org/wiki/Unix-like) systems

<https://en.wikipedia.org/wiki/ZFS>

## Btrfs

Btrfs, an abbreviation for [b-tree](https://en.wikipedia.org/wiki/B-tree)[file system](https://en.wikipedia.org/wiki/File_system), (pronounced as "butter fuss","better F S","butter F S","b-tree F S", or simply by spelling it out) is a file system based on the [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write#In_computer_storage)(COW) principle, initially designed at [Oracle Corporation](https://en.wikipedia.org/wiki/Oracle_Corporation) for use in [Linux](https://en.wikipedia.org/wiki/Linux). The development of Btrfs began in 2007, and since November 2013 the file system's on-disk format has been declared stable in the Linux kernel.
Btrfs is intended to address the lack of [pooling](https://en.wikipedia.org/wiki/Pool_(computer_science)), [snapshots](https://en.wikipedia.org/wiki/Snapshot_(computer_storage)), [checksums](https://en.wikipedia.org/wiki/Checksum), and integral multi-device spanning in [Linux file systems](https://en.wikipedia.org/wiki/Linux_file_systems).Chris Mason, the principal Btrfs author, has stated that its goal was "to let Linux scale for the storage that will be available. Scaling is not just about addressing the storage but also means being able to administer and to manage it with a clean interface that lets people see what's being used and makes it more reliable".
<https://en.wikipedia.org/wiki/Btrfs>

## ext4

The **ext4 journaling file system** or **fourth extended filesystem** is a [journaling file system](https://en.wikipedia.org/wiki/Journaling_file_system) for [Linux](https://en.wikipedia.org/wiki/Linux), developed as the successor to [ext3](https://en.wikipedia.org/wiki/Ext3).

## Features

- Large file system
- Extents
- Backward compatibility
- Persistent pre-allocation
- Delayed allocation
- Unlimited number of subdirectories
- Journal checksums
- Metadata checksumming
- Faster file-system checking
- Multiblock allocator
- Improved timestamps
- Project quotas
- Transparent encryption
- Lazy initialization
- Write barriers
