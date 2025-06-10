# Parameters / Configurations / Optimizations

### Variables

```sql
SELECT @@global.time_zone, @@session.time_zone;

SELECT @@global.transaction_ISOLATION;
SELECT @@transaction_ISOLATION;

SET global max_execution_time = 60000;
SELECT @@global.max_execution_time -- 60000

SET session max_execution_time=300000;
SELECT @@session.max_execution_time -- 15000
```

### pg_hba.conf (postgres host based authentication config)

`pg_hba.conf` file controls client authentication and access to the database server. Configuring it involves specifying rules for different authentication methods, IP addresses, and users. To enhance security, you can restrict access based on IP addresses, require SSL, and use strong authentication methods.

## Postgres database tunable parameters to optimize performance (configurations)

#### shared_buffer

PostgreSQL uses its own buffer and also uses kernel buffered IO. That means data is stored in memory twice, first in PostgreSQL buffer and then kernel buffer. Unlike other databases, PostgreSQL does not provide direct IO. This is called double buffering. The PostgreSQL buffer is called **shared_buffer** which is the most effective tunable parameter for most operating systems. This parameter sets how much dedicated memory will be used by PostgreSQL for cache.

##### shared_buffers

Sets the amount of memory the database server uses for shared memory buffers. The default is typically 32 megabytes (32MB), but might be less if your kernel settings will not support it (as determined during initdb). This setting must be at least 128 kilobytes. (Non-default values of BLCKSZ change the minimum.) However, settings significantly higher than the minimum are usually needed for good performance. This parameter can only be set at server start.

[PostgreSQL: Documentation: 9.1: Resource Consumption](https://www.postgresql.org/docs/9.1/runtime-config-resource.html)

#### wal_buffers

PostgreSQL writes its WAL (write ahead log) record into the buffers and then these buffers are flushed to disk. The default size of the buffer, defined bywal_buffers, is 16MB, but if you have a lot of concurrent connections then a higher value can give better performance.

#### effective_cache_size

Theeffective_cache_sizeprovides an estimate of the memory available for disk caching. It is just a guideline, not the exact allocated memory or cache size. It does not allocate actual memory but tells the optimizer the amount of cache available in the kernel. If the value of this is set too low the query planner can decide not to use some indexes, even if they'd be helpful. Therefore, setting a large value is always beneficial.

#### work_mem

This configuration is used for complex sorting. If you have to do complex sorting then increase the value ofwork_memfor good results. In-memory sorts are much faster than sorts spilling to disk. Setting a very high value can cause a memory bottleneck for your deployment environment because this parameter is per user sort operation. Therefore, if you have many users trying to execute sort operations, then the system will allocate work_mem *totalsortoperations* for all users. Setting this parameter globally can cause very high memory usage. So it is highly recommended to modify this at the session level.

#### maintenance_work_mem

maintenance_work_mem is a memory setting used for maintenance tasks. The default value is 64MB. Setting a large value helps in tasks like [VACUUM](https://www.percona.com/blog/2018/08/06/basic-understanding-bloat-vacuum-postgresql-mvcc/), RESTORE, CREATE INDEX, ADD FOREIGN KEY and ALTER TABLE.

#### synchronous_commit

This is used to enforce that commit will wait for WAL to be written on disk before returning a success status to the client. This is a trade-off between performance and reliability. If your application is designed such that performance is more important than the reliability, then turn off synchronous_commit. This means that there will be a time gap between the success status and a guaranteed write to disk. In the case of a server crash, data might be lost even though the client received a success message on commit. In this case, a transaction commits very quickly because it will not wait for a WAL file to be flushed, but reliability is compromised.

#### checkpoint_timeout, checkpoint_completion_target

PostgreSQL writes changes into WAL. The checkpoint process flushes the data into the data files. This activity is done when CHECKPOINT occurs. This is an expensive operation and can cause a huge amount of IO. This whole process involves expensive disk read/write operations. Users can always issue CHECKPOINT whenever it seems necessary or automate the system by PostgreSQL's parameters checkpoint_timeout and checkpoint_completion_target.

The checkpoint_timeout parameter is used to set time between WAL checkpoints. Setting this too low decreases crash recovery time, as more data is written to disk, but it hurts performance too since every checkpoint ends up consuming valuable system resources. The checkpoint_completion_target is the fraction of time between checkpoints for checkpoint completion. A high frequency of checkpoints can impact performance. For smooth checkpointing, checkpoint_timeoutmust be a low value. Otherwise the OS will accumulate all the dirty pages until the ratio is met and then go for a big flush.

#### max_parallel_workers

These are a helpful set of parameters to tune if your partitions are getting aggregated whenever you query data. For us, having a server with more cores for our DB made sense, as then we can have a `max max_parallel_workers` = number of cores, and then `max_parallel_workers_per_gather` to be half of that count. This count changes based upon how many processes parallelly run and need workers to be spawned. For instance, if you have set up parallel workers to do replication, then you need additional workers for that. Thus, when a user queries data across different months (logical partitions), the parallel workers for gathering run parallelly over multiple partitions and then aggregate the data, thus improving the speeds of `SELECT` queries. `EXPLAIN ANALYZE` would be your friend here to figure out how many workers you need for your workload.

## Links

- https://www.percona.com/blog/2018/08/31/tuning-postgresql-database-parameters-to-optimize-performance
- https://postgresqlco.nf/en/doc/param
- **[Working with PostgreSQL - Zerodha Tech Blog](https://zerodha.tech/blog/working-with-postgresql/)**
- https://tightlycoupled.io/my-goto-postgres-configuration-for-web-services
- [Database Tuning at Zerodha - India's Largest Stock Broker - YouTube](https://www.youtube.com/watch?v=XB2lF_Z9cbs&ab_channel=Perfology)
