# Parameters / Configurations / Optimizations

## Postgres database tunable parameters to optimize performance (configurations)

#### shared_buffer

PostgreSQL uses its own buffer and also uses kernel buffered IO. That means data is stored in memory twice, first in PostgreSQL buffer and then kernel buffer. Unlike other databases, PostgreSQL does not provide direct IO. This is called double buffering. The PostgreSQL buffer is called **shared_buffer** which is the most effective tunable parameter for most operating systems. This parameter sets how much dedicated memory will be used by PostgreSQL for cache.

#### wal_buffers

PostgreSQL writes its WAL (write ahead log) record into the buffers and then these buffers are flushed to disk. The default size of the buffer, defined bywal_buffers, is 16MB, but if you have a lot of concurrent connections then a higher value can give better performance.

#### effective_cache_size

Theeffective_cache_sizeprovides an estimate of the memory available for disk caching. It is just a guideline, not the exact allocated memory or cache size. It does not allocate actual memory but tells the optimizer the amount of cache available in the kernel. If the value of this is set too low the query planner can decide not to use some indexes, even if they'd be helpful. Therefore, setting a large value is always beneficial.

#### work_mem

This configuration is used for complex sorting. If you have to do complex sorting then increase the value ofwork_memfor good results. In-memory sorts are much faster than sorts spilling to disk. Setting a very high value can cause a memory bottleneck for your deployment environment because this parameter is per user sort operation. Therefore, if you have many users trying to execute sort operations, then the system will allocatework_mem*totalsortoperationsfor all users. Setting this parameter globally can cause very high memory usage. So it is highly recommended to modify this at the session level.

#### maintenance_work_mem

maintenance_work_memis a memory setting used for maintenance tasks. The default value is 64MB. Setting a large value helps in tasks like [VACUUM](https://www.percona.com/blog/2018/08/06/basic-understanding-bloat-vacuum-postgresql-mvcc/), RESTORE, CREATE INDEX, ADD FOREIGN KEY and ALTER TABLE.

#### synchronous_commit

This is used to enforce that commit will wait for WAL to be written on disk before returning a success status to the client. This is a trade-off between performance and reliability. If your application is designed such that performance is more important than the reliability, then turn offsynchronous_commit. This means that there will be a time gap between the success status and a guaranteed write to disk. In the case of a server crash, data might be lost even though the client received a success message on commit. In this case, a transaction commits very quickly because it will not wait for a WAL file to be flushed, but reliability is compromised.

#### checkpoint_timeout, checkpoint_completion_target

PostgreSQL writes changes into WAL. The checkpoint process flushes the data into the data files. This activity is done when CHECKPOINT occurs. This is an expensive operation and can cause a huge amount of IO. This whole process involves expensive disk read/write operations. Users can always issue CHECKPOINT whenever it seems necessary or automate the system by PostgreSQL's parameters checkpoint_timeout and checkpoint_completion_target.

The checkpoint_timeout parameter is used to set time between WAL checkpoints. Setting this too low decreases crash recovery time, as more data is written to disk, but it hurts performance too since every checkpoint ends up consuming valuable system resources. The checkpoint_completion_target is the fraction of time between checkpoints for checkpoint completion. A high frequency of checkpoints can impact performance. For smooth checkpointing, checkpoint_timeoutmust be a low value. Otherwise the OS will accumulate all the dirty pages until the ratio is met and then go for a big flush.

<https://www.percona.com/blog/2018/08/31/tuning-postgresql-database-parameters-to-optimize-performance>

<https://postgresqlco.nf/en/doc/param>

## Links

<https://tightlycoupled.io/my-goto-postgres-configuration-for-web-services>