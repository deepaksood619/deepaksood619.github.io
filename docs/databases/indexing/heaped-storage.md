# Heaped storage

Heaped storage is a term for tables that live on the database with no clustered index. The data is stored in no particular order and new data simply gets added as it comes in.

A heap is a table without a clustered index. One or more nonclustered indexes can be created on tables stored as a heap. Data is stored in the heap without specifying an order. Usually data is initially stored in the order in which the rows are inserted. However, the Database Engine can move data around in the heap to store the rows efficiently. In query results, data order cannot be predicted. To guarantee the order of rows returned from a heap, use the `ORDER BY` clause. To specify a permanent logical order for storing the rows, create a clustered index on the table, so that the table is not a heap.

**Note -** There are sometimes good reasons to leave a table as a heap instead of creating a clustered index, but using heaps effectively is an advanced skill. Most tables should have a carefully chosen clustered index unless a good reason exists for leaving the table as a heap.

### Quick definitions

- **Heap:** A table without a clustered index. Rows are stored unordered.
- **Clustered Table:** A table with a clustered index, where the data rows are physically stored in order of the clustered key.

### When is a Heap better?

- **Fast inserts:** Since there's no index maintenance for clustered keys, inserts can be slightly faster.
- **Staging or temporary data:** When you bulk load data and then drop the table or quickly process it.
- **Simple tables with no key or access pattern:** If you don’t query the table often or do only full scans, heaps can be okay.

### When is a Clustered Table better?

- **Range queries:** If you frequently query ranges of data (e.g., date ranges), clustered indexes help a lot.
- **Seek performance:** Clustered indexes allow fast lookups by the key.
- **Avoiding forwarding pointers:** In heaps, when a row is updated and grows in size, it can get moved, leaving a forwarding pointer which can slow reads.
- **Secondary indexes:** Nonclustered indexes on heaps store the row identifier (RID), which is less stable and can lead to more fragmentation and overhead than the clustered key in a clustered table.

### Summary / Recommendations

- In general, **clustered tables** (tables with a clustered index) are preferred in OLTP systems for efficient querying and better maintenance.
- **Heaps** can be useful in some ETL, staging, or append-only scenarios.
- Avoid heaps if your workload involves many updates or you need good seek performance.

## Links

- [ChatGPT - Heap vs Clustered Table](https://chatgpt.com/share/68376b78-5254-8012-a4db-93591e08fb6c)
- [Heap Table in PostgreSQL for beginners \| Quadcode](https://medium.com/quadcode-life/structure-of-heap-table-in-postgresql-d44c94332052)
- [Heaps (Tables without clustered indexes) - SQL Server \| Microsoft Learn](https://learn.microsoft.com/en-us/sql/relational-databases/indexes/heaps-tables-without-clustered-indexes)
- [SQL Server Best Practices Article \| Microsoft Learn - Comparing Tables Organized with Clustered Indexes versus Heaps](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2005/administrator/cc917672(v=technet.10))
