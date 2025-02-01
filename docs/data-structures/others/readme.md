# Others

- [SSTables, Sorted String Tables](sstables-sorted-string-tables)
- [LSM (Log Structured Merge Trees)](lsm-log-structured-merge-trees)
- [Bitmap](bitmap)
- [Large Objects](data-structures/others/large-objects.md)

### Eight Key Data Structures That Power Modern Databases

- **Skiplist:** a common in-memory index type. Used in Redis
- **Hash index:** a very common implementation of the "Map" data structure (or "Collection")
- **SSTable:** immutable on-disk "Map" implementation
- **LSM tree:** Skiplist + SSTable. High write throughput
- **B-tree:** disk-based solution. Consistent read/write performance
- **Inverted index:** used for document indexing. Used in Lucene
- **Suffix tree:** for string pattern search
- **R-tree:** multi-dimension search, such as finding the nearest neighbor

![8 data structures that power your databases](../../media/Pasted%20image%2020240112150921.jpg)
