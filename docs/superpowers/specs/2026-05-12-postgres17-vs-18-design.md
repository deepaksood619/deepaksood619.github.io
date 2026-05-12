---
name: postgres17-vs-18-comparison
description: Quick reference guide comparing PostgreSQL 17 vs 18 features, performance, and migration considerations
metadata:
  type: design-spec
  created: 2026-05-12
  target_file: databases-sql/postgres/postgres17-vs-postgres18.md
---

# PostgreSQL 17 vs 18 Comparison - Design Specification

## Overview

Create a 1-page quick reference document comparing PostgreSQL 17 (released September 2024) and PostgreSQL 18 (released 2026), focusing on key differences, performance metrics, and upgrade decision guidance.

## Goals

1. Provide scannable comparison of major features and changes
2. Highlight performance improvements with specific metrics
3. Identify breaking changes and migration gotchas
4. Help readers quickly decide if/when to upgrade
5. Keep document to ~200 lines maximum (1 page)

## Target Audience

- Database administrators evaluating upgrade paths
- Developers working with PostgreSQL
- Technical decision-makers assessing version migration
- Users of the knowledge base seeking quick PostgreSQL version comparison

## Document Structure

### Section 1: Header (5 lines)
```markdown
# PostgreSQL 17 vs 18

**PostgreSQL 17:** Released September 26, 2024
**PostgreSQL 18:** Released 2026

PostgreSQL 18 focuses on performance optimization (async I/O, index improvements), enterprise features (OAuth, temporal constraints), and enhanced logical replication.
```

### Section 2: Performance Comparison Table (60-70 lines)

A markdown table with columns:
- **Feature Area** - Category name
- **PostgreSQL 17** - What PG17 offered
- **PostgreSQL 18** - What changed/added in PG18
- **Performance Impact** - Measured improvements with metrics

**Categories to include:**

1. **I/O & Storage Performance**
   - PG17: Standard synchronous I/O
   - PG18: Async I/O subsystem (AIO), configurable via `io_method`
   - Impact: Up to 3× faster sequential scans, bitmap heap scans, vacuum

2. **Index Optimization**
   - PG17: BRIN parallel creation, hash indexes for ltree
   - PG18: Skip scans for multicolumn B-tree indexes, parallel GIN index builds, ARM NEON/SVE support
   - Impact: Queries without prefix columns can use indexes

3. **Query Optimizer**
   - PG17: CTE improvements, correlated IN subqueries → joins, partition pruning
   - PG18: OR condition optimization, self-join elimination, incremental sorts with merge joins
   - Impact: Better hash join performance, reduced memory usage

4. **SQL Features**
   - PG17: SQL/JSON (JSON_TABLE, JSON_EXISTS, JSON_QUERY, JSON_VALUE)
   - PG18: Virtual generated columns (default), temporal constraints (WITHOUT OVERLAPS), OLD/NEW in RETURNING
   - Impact: Computed columns at query time, temporal validity constraints

5. **Data Types & Functions**
   - PG17: uuid_extract_timestamp(), random(min, max), to_bin(), to_oct()
   - PG18: uuidv7() (timestamp-ordered), casefold(), array_sort(), array_reverse(), crc32(), gamma()
   - Impact: Better UUID indexing performance with v7

6. **Security & Authentication**
   - PG17: Improved client connection with sslnegotiation=direct
   - PG18: OAuth 2.0 support, MD5 deprecation warnings, FIPS mode, TLS 1.3 cipher control
   - Impact: SSO integration, enhanced security posture

7. **Logical Replication**
   - PG17: pg_createsubscriber, failover control, hash index support
   - PG18: Generated column replication, conflict logging, default parallel streaming, automatic idle slot cleanup
   - Impact: Better conflict visibility via pg_stat_subscription_stats

8. **Backup & Recovery**
   - PG17: Incremental backup support (pg_basebackup --incremental, pg_combinebackup)
   - PG18: pg_upgrade preserves statistics (faster post-upgrade), parallel checks, --swap flag
   - Impact: Faster major version upgrades

9. **Monitoring & Observability**
   - PG17: pg_stat_checkpointer, pg_wait_events, VACUUM progress with index stats
   - PG18: Enhanced EXPLAIN with auto buffer display, CPU/WAL stats, per-connection I/O stats
   - Impact: Better performance troubleshooting visibility

10. **Configuration & Defaults**
    - PG17: transaction_timeout, builtin collation provider, SLRU cache configs
    - PG18: Page checksums default ON, io_combine_limit, effective_io_concurrency default=16, autovacuum_worker_slots
    - Impact: Better out-of-box performance, data integrity default

### Section 3: Top Performance Wins (20-30 lines)

**Biggest Performance Improvements in PG18:**

- **Async I/O:** 3× performance improvement for sequential scans and vacuum operations
- **Skip Scans:** Multicolumn indexes usable even when first column not in WHERE clause
- **Hash Join Memory:** Reduced memory consumption and better performance
- **Parallel GIN Builds:** Index creation parallelized for GIN indexes
- **Page Checksums Default:** Data corruption detection enabled by default (use --no-data-checksums to disable)
- **Higher I/O Concurrency:** Default effective_io_concurrency increased from 1 to 16
- **Statistics Preservation:** pg_upgrade keeps optimizer stats for faster post-upgrade performance
- **Virtual Generated Columns:** Now default, compute at query time without storage overhead
- **Self-Join Elimination:** Optimizer automatically removes unnecessary table self-joins
- **Better Index Utilization:** OR conditions optimized to use indexes more effectively

### Section 4: Breaking Changes & Migration Gotchas (30-40 lines)

**Critical Breaking Changes:**

**PG18 Specific:**
- **Data checksums enabled by default** - Adds overhead; use `--no-data-checksums` if not needed
- **MD5 password authentication deprecated** - Warnings emitted; migrate to SCRAM-SHA-256
- **VACUUM/ANALYZE inheritance changes** - Now process children by default; use `ONLY` for old behavior
- **Time zone abbreviation precedence** - Session TZ abbreviations checked before `timezone_abbreviations` variable
- **COPY FROM `\.` handling** - In CSV mode, `\.` must be alone on line to signal EOF
- **Unlogged partitioned tables disallowed** - Previously allowed but non-functional
- **AFTER trigger execution role** - Uses role active at queue time, not execution time
- **Memory context level now one-based** - Previously zero-based

**PG17 Removed Features:**
- `old_snapshot_threshold` removed
- `db_user_namespace` feature removed
- `adminpack` extension removed
- OpenSSL 1.0.1 support dropped
- AIX support dropped

**PG18 Removed Features:**
- HPPA/PA-RISC platform support removed
- 32-bit atomic operations now mandatory

### Section 5: Should I Upgrade Decision Matrix (20-30 lines)

**Upgrade Priority by Use Case:**

| Use Case | Upgrade Priority | Key Benefits |
|----------|------------------|--------------|
| High I/O workloads (analytics, reporting) | **High** | 3× async I/O performance gains |
| OAuth/SSO integration needs | **High** | Native OAuth authentication |
| Logical replication users | **Medium-High** | Better conflict visibility, parallel streaming default |
| Multicolumn index queries | **Medium-High** | Skip scans enable index usage |
| General OLTP applications | **Medium** | Incremental performance improvements |
| Development/testing environments | **Medium** | Virtual generated columns, temporal constraints |
| Legacy MD5 authentication | **High** | Deprecation warnings, migration required |

**Migration Readiness Checklist:**

- [ ] Test with `--no-data-checksums` if checksum overhead is concern
- [ ] Migrate MD5 authentication to SCRAM-SHA-256
- [ ] Review VACUUM/ANALYZE scripts for inheritance behavior changes
- [ ] Test COPY operations with `\.` markers in CSV files
- [ ] Verify time zone abbreviation handling
- [ ] Check for unlogged partitioned tables
- [ ] Review AFTER trigger execution contexts
- [ ] Update monitoring scripts for new pg_stat columns

### Section 6: Key Configuration Changes (20-30 lines)

**New Important Parameters in PG18:**

- `io_method` - Controls async I/O (`worker`, `io_uring`, `sync`)
- `io_combine_limit` / `io_max_combine_limit` - I/O operation combining
- `ssl_tls13_ciphers` - TLS v1.3 cipher suite control
- `autovacuum_worker_slots` - Maximum background autovacuum workers
- `autovacuum_vacuum_max_threshold` - Fixed dead tuple threshold
- `vacuum_truncate` - Control file truncation during vacuum
- `idle_replication_slot_timeout` - Auto-invalidate idle slots
- `md5_password_warnings` - Control MD5 deprecation warning frequency

**Changed Defaults in PG18:**

- `effective_io_concurrency`: 1 → 16
- `maintenance_io_concurrency`: 1 → 16
- Page checksums: OFF → ON
- Logical replication streaming: `off` → `parallel`

**PG17 Important Parameters:**

- `transaction_timeout` - Restrict maximum transaction duration
- `allow_alter_system` - Can disable ALTER SYSTEM command
- `huge_pages_status` - Report huge page usage
- `summarize_wal` - Enable WAL summarization for incremental backups
- `sync_replication_slots` - Enable failover slot synchronization

## Document Format

- **File location:** `databases-sql/postgres/postgres17-vs-postgres18.md`
- **Markdown format** - Compatible with Docusaurus
- **Blank lines** - Between all sections for proper rendering
- **Tables** - Use markdown table syntax
- **Code blocks** - Specify language for syntax highlighting where applicable
- **Lists** - Use bullet points and checkboxes for scannable content
- **Links** - Use standard markdown links (not wikilinks)

## Content Sources

All information sourced from:
- https://www.postgresql.org/about/news/postgresql-18-released-3142/
- https://www.postgresql.org/docs/release/18.0/
- https://www.postgresql.org/docs/release/17.0/

## Why This Design

1. **Combination of approaches** - Table format (Approach C) for direct comparison + Feature categories (Approach A) for logical grouping
2. **Scannable** - Bulleted lists, tables, clear headers
3. **Decision-focused** - Upgrade decision matrix helps readers act
4. **Complete** - Covers performance, features, breaking changes, configuration
5. **Compact** - ~200 lines fits on one page
6. **Docusaurus-compatible** - Follows markdown best practices for proper rendering

## Success Criteria

- [ ] Document is ~200 lines or less
- [ ] All major PG18 features compared to PG17
- [ ] Performance metrics included with specific numbers
- [ ] Breaking changes clearly highlighted
- [ ] Upgrade decision guidance provided
- [ ] Follows Docusaurus markdown formatting rules
- [ ] Renders correctly in npm start preview
- [ ] No broken links when built
