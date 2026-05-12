# PostgreSQL 17 vs 18

**PostgreSQL 17:** Released September 26, 2024

**PostgreSQL 18:** Released 2026

PostgreSQL 18 focuses on performance optimization (async I/O, index improvements), enterprise features (OAuth, temporal constraints), and enhanced logical replication.

## Feature Comparison

| Feature Area | PostgreSQL 17 | PostgreSQL 18 | Performance Impact |
|--------------|---------------|---------------|-------------------|
| **I/O & Storage** | Standard synchronous I/O | Async I/O subsystem (AIO) via `io_method` parameter | **Up to 3× faster** sequential scans, bitmap heap scans, vacuum |
| **Index Optimization** | BRIN parallel creation, hash indexes for ltree | Skip scans for multicolumn B-tree, parallel GIN builds, ARM NEON/SVE support | Multicolumn indexes usable without prefix column |
| **Query Optimizer** | CTE improvements, correlated IN → joins, partition pruning | OR optimization, self-join elimination, incremental sorts with merge joins | Better hash join, reduced memory |
| **SQL Features** | SQL/JSON (JSON_TABLE, JSON_EXISTS, JSON_QUERY, JSON_VALUE) | Virtual generated columns (default), temporal constraints (WITHOUT OVERLAPS), OLD/NEW in RETURNING | Computed columns without storage overhead |
| **Data Types & Functions** | `uuid_extract_timestamp()`, `random(min, max)`, `to_bin()`, `to_oct()` | `uuidv7()` (timestamp-ordered), `casefold()`, `array_sort()`, `array_reverse()`, `crc32()`, `gamma()` | Better UUID indexing with v7 |
| **Security & Auth** | `sslnegotiation=direct` (eliminates round-trip) | OAuth 2.0 support, MD5 deprecation warnings, FIPS mode, TLS 1.3 cipher control | SSO integration, enhanced security |
| **Logical Replication** | `pg_createsubscriber`, failover control, hash index support | Generated column replication, conflict logging, parallel streaming default, auto idle slot cleanup | Better conflict visibility via `pg_stat_subscription_stats` |
| **Backup & Recovery** | Incremental backup (`pg_basebackup --incremental`, `pg_combinebackup`) | `pg_upgrade` preserves statistics, parallel checks, `--swap` flag | Faster major version upgrades |
| **Monitoring** | `pg_stat_checkpointer`, `pg_wait_events`, VACUUM index progress | Enhanced EXPLAIN with auto buffer display, CPU/WAL stats, per-connection I/O stats | Better performance troubleshooting |
| **Defaults** | `effective_io_concurrency=1`, page checksums OFF | `effective_io_concurrency=16`, page checksums **ON by default** | Better out-of-box performance, data integrity |

## Top Performance Wins in PostgreSQL 18

- **Async I/O:** 3× performance improvement for sequential scans and vacuum operations
- **Skip Scans:** Multicolumn indexes usable even when first column not in WHERE clause
- **Hash Join Memory:** Reduced memory consumption and better performance
- **Parallel GIN Builds:** Index creation parallelized for GIN indexes
- **Page Checksums Default:** Data corruption detection enabled by default (use `--no-data-checksums` to disable)
- **Higher I/O Concurrency:** Default `effective_io_concurrency` increased from 1 to 16
- **Statistics Preservation:** `pg_upgrade` keeps optimizer stats for faster post-upgrade performance
- **Virtual Generated Columns:** Now default, compute at query time without storage overhead
- **Self-Join Elimination:** Optimizer automatically removes unnecessary table self-joins
- **Better Index Utilization:** OR conditions optimized to use indexes more effectively
- **Parallel Streaming Default:** Logical replication streaming changed from `off` to `parallel`

## Breaking Changes & Migration Gotchas

### PostgreSQL 18 Critical Changes

- **Data checksums enabled by default** - Adds overhead; use `--no-data-checksums` if not needed
- **MD5 password authentication deprecated** - Warnings emitted; migrate to SCRAM-SHA-256
- **VACUUM/ANALYZE inheritance changes** - Now process children by default; use `ONLY` for old behavior
- **Time zone abbreviation precedence** - Session TZ abbreviations checked before `timezone_abbreviations` variable
- **COPY FROM `\.` handling** - In CSV mode, `\.` must be alone on line to signal EOF
- **Unlogged partitioned tables disallowed** - Previously allowed but non-functional
- **AFTER trigger execution role** - Uses role active at queue time, not execution time
- **Memory context level now one-based** - Previously zero-based
- **HPPA/PA-RISC platform support removed**
- **32-bit atomic operations now mandatory**

### PostgreSQL 17 Removed Features

- `old_snapshot_threshold` server variable removed
- `db_user_namespace` feature removed (per-database users)
- `adminpack` extension removed (pgAdmin III support)
- OpenSSL 1.0.1 support dropped
- AIX platform support dropped
- `trace_recovery_messages` variable removed
- `--disable-thread-safety` configure option removed

## Should I Upgrade? Decision Matrix

| Use Case | Upgrade Priority | Key Benefits |
|----------|------------------|--------------|
| High I/O workloads (analytics, reporting) | **High** | 3× async I/O performance gains |
| OAuth/SSO integration needs | **High** | Native OAuth authentication |
| Logical replication users | **Medium-High** | Better conflict visibility, parallel streaming default |
| Multicolumn index queries | **Medium-High** | Skip scans enable index usage |
| General OLTP applications | **Medium** | Incremental performance improvements |
| Development/testing environments | **Medium** | Virtual generated columns, temporal constraints |
| Legacy MD5 authentication | **High** | Deprecation warnings, migration required |

### Migration Readiness Checklist

- [ ] Test with `--no-data-checksums` if checksum overhead is concern
- [ ] Migrate MD5 authentication to SCRAM-SHA-256
- [ ] Review VACUUM/ANALYZE scripts for inheritance behavior changes
- [ ] Test COPY operations with `\.` markers in CSV files
- [ ] Verify time zone abbreviation handling
- [ ] Check for unlogged partitioned tables
- [ ] Review AFTER trigger execution contexts
- [ ] Update monitoring scripts for new `pg_stat` columns
- [ ] Plan for removed platform support (HPPA, AIX in PG17)

## Key Configuration Changes

### New Parameters in PostgreSQL 18

- `io_method` - Controls async I/O (`worker`, `io_uring`, `sync`)
- `io_combine_limit` / `io_max_combine_limit` - I/O operation combining
- `ssl_tls13_ciphers` - TLS v1.3 cipher suite control
- `autovacuum_worker_slots` - Maximum background autovacuum workers
- `autovacuum_vacuum_max_threshold` - Fixed dead tuple threshold
- `vacuum_truncate` - Control file truncation during vacuum
- `idle_replication_slot_timeout` - Auto-invalidate idle slots
- `md5_password_warnings` - Control MD5 deprecation warning frequency
- `track_cost_delay_timing` - Enable vacuum delay tracking

### Changed Defaults (PG17 → PG18)

- `effective_io_concurrency`: 1 → **16**
- `maintenance_io_concurrency`: 1 → **16**
- Page checksums: OFF → **ON**
- Logical replication streaming: `off` → **`parallel`**

### Important PostgreSQL 17 Parameters

- `transaction_timeout` - Restrict maximum transaction duration
- `allow_alter_system` - Can disable ALTER SYSTEM command
- `huge_pages_status` - Report huge page usage
- `summarize_wal` - Enable WAL summarization for incremental backups
- `sync_replication_slots` - Enable failover slot synchronization
- SLRU cache configurations: `commit_timestamp_buffers`, `multixact_member_buffers`, `notify_buffers`, etc.

## Sources

- [PostgreSQL 18 Release Announcement](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [PostgreSQL 18.0 Release Notes](https://www.postgresql.org/docs/release/18.0/)
- [PostgreSQL 17.0 Release Notes](https://www.postgresql.org/docs/release/17.0/)
