# Architecture

PostgreSQL uses processes in their internal architecture. It has been a topic of debate whether going to threads are better or not, but meanwhile I think it is a good idea to understand all these processes and what they do. Let us go through them

### Main processes

These are the main processes that are critical for Postgres to function.

### Postmaster Process

This is the main process that manages everything in Postgres. It creates a listener on the configured interfaces and port (default 5432). It is also responsible for forking other processes to do various tasks.

### Backend Process

The postmaster process creates a new "backend" process for every connection it accepts. The connection is then handed over to the new backend process to perform the reading of the TCP stream, request parsing, SQL query parsing (yes those are different), planning, execution and returning the results. The process uses its local virtual memory for sorting and parsing logic, this memory is controlled by the work_mem parameter.

### Background Workers

Postgres spin these background workers for various jobs like parallel queries and logical replication. So to minimize the load on backend process.

### Auxiliary Processes

Auxiliary processes that do all sort of important but side tasks.

- Background Writer (bw) - For parallel queries
- Checkpointer (cp) - Sync data files to WAL for faster crash recovery
- Startup Process (st) - Actually performs crash recovery
- Logger (lg) - Someone needs to write database events, warnings, errors
- Autovacuum Launcher (avl) - Launches the autovacuum processes
- WAL writer (ww) - Process that writes to the WAL
- WAL archiver (wa) - Process that archives the WAL
- WAL receiver (wr) - Process on standby that receives the WAL from primary

### Other Processes

Autovaccum workers - Processes that run autovacuume

WAL senders - Processes that send WAL from primary to standby WAL receiver
