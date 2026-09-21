---
slug: /data-platform-architecture-clickhouse
title: "Data Platform Alternative: ClickHouse Instead of DuckDB"
description: A full alternative architecture using ClickHouse as the OLAP/gold layer instead of DuckDB - native concurrent writers, WalShadow CDC, performance/CPU/memory/storage trade-offs, and why it was evaluated but not adopted for the current scale.
created: 2026-09-19
updated: 2026-09-19
---

## Status

Design/decision record, not a build log — nothing here is implemented, and this specific
architecture was **evaluated and not adopted** in favor of the
[Postgres + DuckDB baseline](/data-platform-architecture-postgres-duckdb). Documented in full because the
trade-off was real and close enough to be worth a complete record — not a strawman that lost
immediately, and worth revisiting if the trigger conditions in the final section become true.

## Overview

Same OLTP/OLAP split as the baseline — Postgres stays the transactional source of truth — but the
gold/analytical layer is a real client-server warehouse (ClickHouse) instead of an embedded,
file-based one (DuckDB), fed continuously via change-data-capture instead of periodic batch sync.

## Why This Was Considered At All

Two specific requirements exposed real gaps in the DuckDB baseline that ClickHouse closes
natively, not through a workaround:

1. **One BI-tool connection needs to see and join everything.** DuckDB has no client-server
   daemon — a BI tool connection maps to one file, and files can't be joined across separate
   connections. Avoiding a full-warehouse-file rewrite on every sync (at real data volume) means
   splitting into multiple files, which then means multiple BI connections and no native
   cross-file joins in the tool analysts actually use.
2. **Concurrent writers.** DuckDB allows many readers or one writer, never both — fine for a
   single nightly build job, awkward for continuous CDC (a long-lived writer) running alongside
   people querying, or for a table multiple people need to edit at once.

ClickHouse is a real client-server warehouse: one connection, natively joinable tables, multiple
concurrent readers *and* writers — solving both directly, at the cost of running (or paying for)
an actual server instead of a file on disk.

## Storage Layers → Concrete Technology

- **Bronze**: object storage, unchanged from the baseline — one prefix per source, partitioned by
  ingestion date, immutable.
- **Silver**: Postgres, unchanged — the only layer the frontend/backend touches directly, and the
  only place concurrent transactional writes (ETL, backfills, corrections) happen.
- **Gold / OLAP**: ClickHouse, kept continuously in sync with silver via CDC (§5 below) — this is
  the one layer that differs from the baseline.

## Postgres's Role

Unchanged from the baseline: source of truth for silver, full-text search via `tsvector`/GIN
planned in from the start, a dedicated least-privilege role for anything that isn't the app's own
writes (now including the CDC consumer specifically).

## ClickHouse's Role

A client-server, distributed-capable (though not necessarily deployed as a cluster at this scale)
columnar warehouse. Practical notes on using it well:

- Use the `MergeTree` engine family for CDC-fed tables — specifically `ReplacingMergeTree` (keyed
  by primary key, versioned by an LSN/updated-at column) so repeated updates to the same row
  converge to one current version.
- `ReplacingMergeTree` reconciles duplicate versions in a **background merge, not instantly** —
  queries against a table with recent updates need `FINAL` (correct but slower) or an explicit
  dedup pattern (e.g. `argMax` per key) to avoid seeing stale/duplicate rows. This is the real
  tradeoff for the write concurrency ClickHouse buys — budget for it, don't assume updates behave
  like a plain Postgres `UPDATE`.

## Performance, CPU, Memory, Storage — the Full Comparison

**Performance**
- Both ClickHouse and DuckDB are vectorized, columnar engines near the top of published
  single-node OLAP benchmarks (e.g. ClickBench) — neither is "slow"; the difference is in shape.
- DuckDB has no network hop and near-zero startup cost — for a single analyst running ad hoc
  queries against data that fits on one machine, it can feel as fast or faster. Its join optimizer
  and out-of-core hash join are genuinely excellent, often more predictable on complex multi-way
  joins than ClickHouse, which favors denormalized/wide tables and rewards careful query design.
- ClickHouse's advantage is specifically **concurrent multi-user load** — a query scheduler and
  thread pool built for many simultaneous queries against one shared server, with central resource
  governance (per-user/role memory quotas, query queueing). DuckDB has no equivalent.

**CPU**
- DuckDB: no background daemon, CPU spent only when a query runs.
- ClickHouse: `MergeTree` engines run continuous background merge/compaction threads — a real,
  ongoing CPU cost even when idle, worse under frequent small writes. See the "too many parts"
  discussion below — directly relevant given this architecture's CDC-driven ingestion.

**Memory**
- DuckDB can spill larger-than-RAM operations (sorts, joins, aggregations) to disk gracefully.
- ClickHouse manages memory server-side with configurable per-query/per-user limits — better
  central control once several analysts share one server, but the server needs headroom for
  concurrent queries *and* background merges simultaneously.

**Storage / compression**
- Both use strong columnar compression by default (dictionary encoding, RLE, DuckDB's FSST for
  strings, ZSTD in both) — comparable out of the box.
- ClickHouse's edge is tunability at scale: per-column codecs (`Delta`, `DoubleDelta`, `Gorilla`
  for floats/time series, `LowCardinality` for repeated strings) can meaningfully beat DuckDB's
  defaults, but only with the effort to choose codecs per column.
- ClickHouse gives native replication and tiered/object-storage-backed storage; DuckDB's "backup"
  is copying one file — a real capability difference, at the cost of ClickHouse's storage being
  infrastructure to operate rather than a file to copy.

**The bottom-line cost trade-off**: DuckDB is free at rest — zero cost when idle, no server.
ClickHouse requires a continuously-running, correctly-sized box (headroom for concurrent queries
*and* background merges) even when idle. At this project's actual scale (tens of GB, a handful of
analysts), that ongoing cost is the main reason this architecture wasn't adopted — not a
performance deficiency.

## Hosting

- Run ClickHouse as one server — self-hosted in the same VPC/region as Postgres, or ClickHouse
  Cloud if avoiding day-to-day database operations is worth the cost.
- Run a BI tool (e.g. Metabase) against it with a **single connection** — every domain's tables
  live in the same server and can be joined directly, no per-file connection juggling like the
  DuckDB baseline needs.
- Someone needs to own this server: sizing, upgrades, backups, monitoring — go in with that
  ownership explicitly assigned, not assumed.

## CDC: Postgres → ClickHouse via WalShadow

**[WalShadow](https://clickhouse.com/blog/introducing-walshadow)** is ClickHouse's own open-source
Postgres CDC tool, and the main reason this architecture is competitive on ingestion freshness.

**How it works, technically** (per ClickHouse's own writeup):
1. **Schema tracking** — a shadow Postgres instance replays catalog WAL records to maintain an
   up-to-date view of table structures, columns, and types as the schema evolves.
2. **Parallel decoding** — Rust-based decoders process heap records independently, without
   bottlenecking through the schema tracker.
3. **Block assembly** — decoded rows are grouped directly into ClickHouse-native blocks, with no
   intermediate serialization format (no JSON, no Kafka hop).
4. **Concurrent insertion** — multiple blocks write to ClickHouse in parallel, so decode and
   insert scale independently of each other.
5. **Correctness under concurrency** — rows carry their WAL position (`_lsn`), and ClickHouse
   retains the latest version per key, so out-of-order block arrival doesn't produce incorrect
   results.

**Why physical WAL instead of logical replication**: WalShadow consumes the same physical WAL
stream Postgres uses for standby replication, rather than decoding via a logical replication slot
the way most CDC tools do. This eliminates the logical-replication-slot's source-side overhead and
gets dramatically better numbers:

| Metric | WalShadow (physical WAL) | PeerDB (logical replication) |
|---|---|---|
| Commit-to-visible latency | ~200 ms | ~10 s (≈50× slower) |
| Throughput | 289,000 rows/sec (matches source rate) | 120,000 rows/sec (≈40% of source rate) |

It also handles schema evolution (`ADD COLUMN`, `RENAME COLUMN`, `DROP COLUMN`, `CREATE TABLE`) as
part of normal operation, and supports the full replication lifecycle: initial load, continuous
replication, schema evolution, restart recovery, and planned source switchovers.

**The caveat that matters most for adoption**: consuming physical WAL requires the source Postgres
to expose it, which **most managed Postgres offerings don't**. This works today on self-hosted
Postgres, or on ClickHouse's own Managed Postgres (physical-WAL access was in private preview at
time of writing). If Postgres ends up hosted somewhere that only supports logical replication
(e.g. a stock managed instance), WalShadow isn't a drop-in — confirm this explicitly before
assuming it, rather than discovering the gap mid-build.

**Fallback: logical-replication-based CDC** — PeerDB (ClickHouse's own acquired CDC tool) or
Debezium into ClickHouse, if physical WAL access isn't available. Slower and heavier on the source
per the numbers above, but works against logical replication, which essentially every managed
Postgres supports. Either is a reasonable, proven fallback — not a downgrade to something
unsupported, just a slower one.

**Deciding Postgres hosting should account for this**: if minimizing CDC latency matters, prefer a
Postgres hosting option that can expose physical WAL over one that only supports logical
replication — this is a real input into that decision, not an afterthought.

**Operational risk regardless of which CDC tool is used**: a consumer that dies silently means the
warehouse goes stale (or, for logical-replication tools specifically, the replication slot's
retained WAL grows unbounded on the source until disk fills — a production incident on the serving
database). Alert on consumer liveness, and on WAL/slot size if using logical replication.

## The "Too Many Parts" Problem

Directly relevant given CDC-driven ingestion: streaming individual row changes into ClickHouse as
one-row-at-a-time inserts is a known way to create far more small `MergeTree` parts than
background merges can consolidate, spiking merge CPU and eventually throttling inserts entirely
("too many parts" errors). Mitigations, well-established in ClickHouse operational practice:

- Batch inserts rather than inserting per row — buffer changes and flush in batches (WalShadow's
  own block-assembly step already does this internally; a hand-rolled CDC pipeline would need to
  replicate this discipline explicitly).
- Consider `async_insert` or a buffer-table pattern in front of the target `MergeTree` table if
  the ingestion path can't naturally batch on its own.
- Choose partition/merge settings deliberately for high-churn tables rather than accepting
  defaults tuned for bulk, infrequent loads.

This is a design constraint to build in from day one, not something to discover after ingestion is
already live.

## Gold Layer Strategy

With ClickHouse as the warehouse, all three cases from the baseline's gold-layer split live in the
same server, under the same BI connection — no picking a different storage engine per case:

1. **Scheduled, wholesale-recomputed marts** — a materialized view or a scheduled
   `INSERT ... SELECT` job, computed once, queried by everyone through the single connection.
2. **Product-facing aggregates** — materialized in Postgres if the app needs them directly from
   its own connection; otherwise served straight from ClickHouse if the product's read path can
   reach it.
3. **Human-curated tables needing concurrent multi-person edits** — a plain ClickHouse table. This
   is the biggest structural difference from the baseline: **no DuckLake-equivalent special case
   is needed at all** — ClickHouse's concurrent-writer model handles multiple people editing the
   same table directly. Use `ReplacingMergeTree` and the same `FINAL`/dedup awareness from above
   if edits can overwrite the same row.

## Data Quality Loop

Unchanged in principle from the baseline: bronze immutable, fixes are scripts that read bronze and
rewrite silver in Postgres, and CDC carries the fix into ClickHouse automatically — nobody needs
to reimplement the same workaround in analysis SQL. One tracked list of known data-quality issues,
same as the baseline.

## Script Organization

Same shape as the baseline (ingestion → transform → analyst toolkit → BI provisioning), with one
addition: the CDC consumer (WalShadow or the logical-replication fallback) is a long-lived service
(systemd/`docker compose restart: always`), not a script invoked on a schedule — it needs to be
treated and monitored like a service, not a job.

## Open Items

- Confirm whether the chosen Postgres hosting exposes physical WAL before committing to WalShadow
  as the CDC path; otherwise plan the logical-replication fallback from the start.
- Validate against synthetic/mock data before real ingestion starts, same as the baseline —
  exercise CDC ingestion, a gold-mart build, and the BI-tool connection end to end.
- Size the ClickHouse instance with explicit headroom for background merge CPU, not just query
  load — this is the part most likely to be under-provisioned if sized like a typical query-only
  database server.

## Why This Wasn't Adopted (For Now)

At this project's actual scale — tens of GB, a handful of analysts, growing with more sources over
time rather than orders-of-magnitude more query traffic — the continuous cost of a correctly-sized
ClickHouse server (idle CPU for background merges, someone owning upgrades/monitoring/backups)
isn't justified by the two gaps it closes (cross-file BI joins, concurrent writers), both of which
have workable, if less elegant, answers in the DuckDB baseline (per-domain file splitting,
Postgres for the one collaborative table). ClickHouse Cloud reduces the operational-ownership part
of this cost but not the continuous-billing part.

**Concrete signals that would flip this decision**:
- The warehouse approaches the hundreds-of-GB/low-TB range, where DuckDB's single-node model
  starts to strain.
- Analysts genuinely need heavy concurrent queries *directly* against the warehouse, not mediated
  by the BI tool's connection pooling.
- CDC latency requirements become strict enough that even the baseline's incremental batch sync
  (or the DuckDB-ecosystem variant's `ingestr`-based CDC) isn't fast enough.
- More than one table needs genuine concurrent multi-writer support, making the
  [DuckLake pilot](/data-platform-architecture-duckdb-ecosystem) feel like it's fighting the tool
  rather than using it as intended.

## Stack (This Alternative)

- **Postgres** — OLTP source of truth, dedicated read-only/CDC roles.
- **ClickHouse** — single-server (or cluster, if ever needed) OLAP warehouse, `ReplacingMergeTree`
  for CDC-fed and collaboratively-edited tables alike.
- **WalShadow** — primary CDC path (physical WAL), with PeerDB/Debezium as the logical-replication
  fallback.
- **Metabase** (or equivalent BI tool) — single connection covering the entire warehouse.
- **A server (self-hosted VM or ClickHouse Cloud)**, sized for concurrent queries plus continuous
  background merge load.
