---
slug: /data-platform-architecture-postgres-duckdb
title: "Data Platform Architecture: Postgres + DuckDB Baseline"
description: Design notes for a hybrid OLTP/OLAP data platform - Postgres as source of truth, a DuckDB analytical layer, shared Metabase BI, and whether a lakehouse format (DuckLake) is actually needed for collaborative gold tables.
created: 2026-09-19
updated: 2026-09-19
---

## Status

This is a design/decision record, not a build log. Nothing described here is implemented yet —
there is no real data in any of these layers. The point of writing it down now is to pressure-test
the architecture on paper (and later against synthetic/mock data) before writing pipeline code
against it, so the reasoning survives even if the first attempt at the design changes.

This is the **current recommendation**. Two alternatives were evaluated in full and set aside for
now, each with its own document: **[a full DuckDB ecosystem variant](/data-platform-architecture-duckdb-ecosystem)**
(CDC + DuckLake + QUACK adopted together) and **[a ClickHouse-based warehouse](/data-platform-architecture-clickhouse)**.
See the **[comparison document](/data-platform-architecture-comparison)** for a side-by-side and
the conditions that would justify switching.

## Overview

Architecture for a personal data platform: keep a transactional Postgres database as the single
source of truth for a live application, while giving a small team of analysts fast, shared,
self-serve analytics on top of a dataset that's expected to grow into the tens-of-GB range and be
updated regularly (not just appended to) — without adding operational overhead the project's
actual scale doesn't justify yet.

## Requirements

- Postgres stays the OLTP source of truth; the app never gets slower because analysts are running
  heavy aggregate queries against the same data.
- Analysts get fast ad hoc/aggregate query performance, shared across the team, not one person's
  laptop.
- The source database is expected to be updated regularly — existing rows change, not just new
  rows appended — so the analytics layer needs a real answer for "how does it stay in sync without
  re-copying everything on every change."
- A data-quality fix lands once, in one place, and every downstream table inherits it — never
  patched per-analysis.
- Room for a handful of people to collaboratively curate a shared table (not just read
  dashboards), without reaching for more infrastructure than the problem actually needs.
- No infrastructure added ahead of an actual scale/concurrency need.

## Bronze / Silver / Gold Layering

- **Bronze** — raw ingested payloads in object storage, one prefix per source, partitioned by
  ingestion date. Append-only, never mutated after write — the durable source of truth precisely
  because it never changes; every downstream fix is a script that reads bronze and rewrites
  silver, not a hand patch applied once.
- **Silver** — normalized, structured tables in Postgres. This is what the application reads and
  writes directly, and the only layer that gets corrected when a data-quality bug is found.
- **Gold** — aggregated, analysis-ready tables. Splits three ways depending on audience and write
  pattern (below) rather than one blanket answer.

## Postgres: Serving Layer and Source of Truth

- The only thing the frontend/backend touches directly — the right tool for low-traffic,
  mostly-read, occasional-write, transactional access.
- **Full-text search**: a generated `tsvector` column over the relevant text fields plus a GIN
  index, planned in from the start rather than assumed to fall out of the schema for free.
- **Least-privilege access**: the app gets a read-write role; a dedicated **read-only role** for
  anything else that touches this database (BI tool connections, sync jobs) — separate from the
  app's credential, so a shared analytics box or a nightly job can never mutate production data.

## DuckDB: the Analytical Layer

- A local, columnar, embedded copy of the OLTP data, rebuilt/synced on a schedule — free, fast,
  and safe to query as hard as analysis needs without loading the instance the product depends on.
- Always derived, never hand-edited directly.
- Default path for any OLAP-shaped question (aggregates, dashboards, exploration); fall back to
  querying Postgres directly only when the copy is confirmed stale for the question being asked,
  or the very latest row is genuinely required.
- Key constraint that shapes everything else in this design: **DuckDB has no client-server
  daemon and allows many readers or one writer on a file, never both at once.**

## The ClickHouse Detour: Performance, CPU, Memory, Storage

Before settling on DuckDB, seriously considered replacing it with ClickHouse — a real
client-server warehouse with native concurrent writers and mature CDC ingestion tooling. Worth
recording the actual trade-off, since it wasn't a quick dismissal:

**What ClickHouse would have fixed cleanly:**
- A single BI-tool connection can join across every table on the server — no per-file/per-domain
  connection juggling the way DuckDB requires (see the Metabase section below).
- Native concurrent readers *and* writers — the single-writer constraint DuckDB has just doesn't
  exist.
- Mature, purpose-built Postgres CDC paths (below), instead of having to defer CDC as "a later
  option once batch sync is the bottleneck."

**Performance**
- Both are vectorized, columnar engines and sit near the top of published single-node OLAP
  benchmarks (e.g. ClickBench) — neither is "slow"; the difference is in shape, not raw speed.
- DuckDB has no network hop and near-zero startup cost (it's in-process) — for a single analyst
  running ad hoc queries against data that fits on one machine, it can feel as fast or faster than
  ClickHouse. Its join optimizer and out-of-core hash join are genuinely excellent — often more
  predictable on complex multi-way joins than ClickHouse, which favors denormalized/wide tables
  and rewards careful query design.
- ClickHouse's advantage is specifically **concurrent multi-user load** — a query scheduler and
  thread pool built for many simultaneous queries against one shared server, with central resource
  governance (per-user/role memory quotas, query queueing). DuckDB has no equivalent; each
  connection/process manages its own memory, fine when mediated through one BI tool connection,
  but with no centralized control.

**CPU**
- DuckDB: no background daemon. CPU is spent only when a query runs.
- ClickHouse: `MergeTree` engines run continuous background merge/compaction threads — a real,
  ongoing CPU cost even when idle, and worse under frequent small writes. Streaming CDC writes
  row-by-row into ClickHouse is a known way to hit the "too many parts" problem: small parts
  accumulate faster than merges can consolidate them, background-merge CPU spikes, and inserts
  eventually throttle. The fix is well-established (batch inserts via a buffer/async_insert rather
  than per-row CDC writes) but it's a design constraint to build in from day one.

**Memory**
- DuckDB can spill larger-than-RAM operations (sorts, joins, aggregations) to disk gracefully — a
  real strength for a single box without sizing RAM for worst-case query size.
- ClickHouse manages memory server-side with configurable per-query/per-user limits, which matters
  more once several analysts share one server — but the server needs headroom for concurrent
  queries *and* background merges running simultaneously, not just peak query size.

**Storage / compression**
- Both use strong columnar compression by default (dictionary encoding, RLE, DuckDB's FSST for
  strings, ZSTD support in both) — out of the box, comparable.
- ClickHouse's edge is tunability at scale: per-column codecs (`Delta`, `DoubleDelta`, `Gorilla`
  for floats/time series, `LowCardinality` for repeated strings) can meaningfully beat DuckDB's
  defaults — but only if someone invests the time to choose codecs per column. Untuned, the gap is
  small.
- Redundancy/backup is the bigger structural difference: DuckDB's "backup" is copying one file.
  ClickHouse gives native replication and tiered/object-storage-backed storage, but that's
  infrastructure to own and operate, not something that comes free.

**The actual cost trade-off**: DuckDB is free at rest — zero cost when idle, since there's no
server. ClickHouse requires a continuously-running, correctly-sized box (headroom for concurrent
queries *and* background merges) even when idle. At the scale this project is actually at (tens of
GB, a handful of analysts), that's a real, ongoing cost DuckDB doesn't have, and it isn't justified
by the two gaps ClickHouse would close — **finalized on DuckDB**, solving its two real gaps
directly instead (file-splitting strategy below, and the DuckLake question further down).

### CDC research done during the detour (kept for later reference)

Even though ClickHouse wasn't adopted, the CDC research is worth keeping, since "Postgres updated
regularly" may eventually justify CDC into whatever the analytical layer is:

- **[WalShadow](https://clickhouse.com/blog/introducing-walshadow)** — ClickHouse's own open
  source Postgres CDC tool. Instead of logical replication (what most CDC tools use), it consumes
  the same **physical WAL** stream Postgres uses for standby replication, decoding it directly into
  ClickHouse-native blocks. Per ClickHouse's own published benchmarks against PeerDB: ~200ms
  commit-to-visible latency at full source throughput, versus ~10s latency and roughly 40% of
  source throughput for a logical-replication-based pipeline. Also handles schema evolution
  (`ADD/RENAME/DROP COLUMN`, `CREATE TABLE`) as normal operation, not a special case.
  - **Caveat**: consuming physical WAL requires the source Postgres to expose it, which most
    managed Postgres offerings don't. Works on self-hosted Postgres or ClickHouse's own Managed
    Postgres (physical-WAL access was private preview at time of research). Confirm this before
    assuming it's a drop-in for whatever Postgres hosting gets chosen.
  - Land CDC'd tables using `ReplacingMergeTree` (keyed by primary key, versioned by an
    LSN/updated-at column); queries against recently-updated rows need `FINAL` or an explicit
    dedup pattern (`argMax` per key) to avoid seeing stale/duplicate versions — the real tradeoff
    for the write concurrency this buys.
- **Fallback: logical-replication-based CDC** (PeerDB, or Debezium) if physical WAL access isn't
  available — higher latency, lower throughput, but works against logical replication, which
  essentially every managed Postgres supports.
- **Operational risk either way**: a dead CDC consumer means the warehouse goes silently stale, or
  — for logical-replication tools — the replication slot's retained WAL grows unbounded on the
  source until disk fills, a production incident on the serving database. Alert on consumer
  liveness and (for logical replication) slot/WAL size.

For the DuckDB path specifically, CDC stays a later option: Postgres logical replication into
DuckDB is the next step only once incremental batch sync (below) genuinely can't keep up — not
adopted by default, given the added operational surface (replication slot monitoring) isn't
justified until batch sync is the proven bottleneck.

## Shared Hosting, Not One Laptop

- One modest VM, colocated on the same private network as the Postgres instance — not reached only
  over a residential VPN, since network hop distance is the more likely bottleneck in sync timing
  than raw compute.
- Metabase's web UI as the primary shared-access path — no SSH, no query-engine knowledge
  required, and it already covers the SQL editor, saved questions, and dashboards this need is
  really after.
- **File-splitting strategy matters, and per-table is the wrong granularity.** Metabase maps one
  connection to one DuckDB file, and files can't be joined across separate connections — so:
  - **Per-table files**: sync/atomic-swap cost per change would be small, but this means one
    Metabase connection *per table* — dozens of unjoinable connections. Rejected.
  - **One giant warehouse file**: joins work fine in Metabase, but an atomic-swap rebuild has to
    copy the whole file even for a one-row change — cost scales with total warehouse size, not
    with what changed. Rejected for a source that updates regularly.
  - **Per-domain files** (the actual choice): tables that get queried/joined together stay in the
    same file/connection; an atomic-swap rebuild only copies one domain's data; the number of
    Metabase connections stays small (single digits to low tens, matching analysis domains, not
    table count).
  - For genuine cross-domain joins, build a dedicated rollup file as its own scheduled artifact
    (reads from multiple domain files, writes a joined result) rather than relying on ad hoc
    `ATTACH` tricks inside a Metabase query — DuckDB does support `ATTACH`-ing another file
    mid-session, but it's driver/version-dependent and better treated as a power-user escape hatch
    than the primary design.
- SSH access to the box for anyone who needs raw DuckDB/Python access beyond the BI editor.
- **Concurrency rule to enforce in every script**: never open a live `.duckdb` file read-write from
  an ad hoc session while a scheduled build/sync might also touch it. Build into a temp file,
  atomically rename — scoped to the one domain file being updated, not the whole warehouse.

## Sync Cadence: Postgres (Silver) → DuckDB

The core worry that shaped this section: a source database that's updated *regularly* — new
tables added over time, existing rows changed, not just appended — naively implies "rebuild
everything, constantly." That's only true if the sync job is built two specific wrong ways:

- **Discover tables dynamically** (introspect `information_schema`, or an explicit versioned
  config) rather than a hardcoded table list — a new Postgres table shouldn't require editing the
  sync job to be picked up.
- **Sync incrementally by default** (`updated_at`-based append/upsert), not truncate-and-reload.
  Requires every silver table to reliably bump `updated_at` on both insert *and* update — confirm
  this before relying on it. Done this way, a regularly-updated source does not mean "rebuild
  everything" on each sync — only the rows that actually changed move.
- Combined with the per-domain file split above, an atomic-swap rebuild's cost is bounded by "one
  domain's changed rows," not "the whole warehouse," regardless of how often Postgres changes.
- If update frequency ever makes even incremental batch sync run uncomfortably often, Postgres
  logical replication (CDC) into the affected domain file is the next step for specifically the
  high-churn tables — with the WAL-retention monitoring caveat from the CDC section above.
- Surface **"data as of `{last sync}`"** on every dashboard, sourced from the sync job's own
  bookkeeping, so staleness is visible rather than assumed.

## Gold Layer: Three Homes, by Audience and Write Pattern

1. **Scheduled, analyst-facing, never hand-edited** (e.g. cross-entity rollups, aggregate
   summaries) — a plain DuckDB domain file, single writer per refresh, registered as its own
   Metabase connection so any analyst can query, join against, or build a new question on top of
   it.
2. **Product-facing** — materializations the application itself serves stay in Postgres, refreshed
   on the sync cadence, because that's the only thing the app's connection reaches.
3. **Human-curated, collaboratively edited** — e.g. a canonicalization/aliasing table, or a
   manually reviewed flag queue, where multiple people edit the *same* rows over time. This is the
   one case a single-writer DuckDB file genuinely can't serve — and the case the next section
   works through, rather than assuming a lakehouse format is automatically the answer.

## Do We Actually Need DuckLake?

DuckLake (a lakehouse format: SQL-database catalog + Parquet data files, adding transactional
multi-writer support on top of DuckDB) only matters for gold-layer case 3 above — every other
table in this design has exactly one writer at a time, which plain DuckDB already handles.

Worth noticing about that one table specifically: it's almost certainly **small and
row-oriented** — an alias/canonicalization table or a review queue is hundreds to low-thousands of
rows, edited a few at a time by a handful of people. That's a transactional access pattern, not an
analytical one — exactly what Postgres is already good at, and arguably a mismatch for a
columnar/Parquet-backed format regardless of how solid the format's concurrency story is.

Two real options considered:
1. **Put that one table in Postgres, not DuckDB at all.** Postgres already handles concurrent
   writers natively — no new technology, no pilot risk. For read-side joins against the rest of
   the gold layer, DuckDB can query Postgres live via its `postgres` scanner/`ATTACH` (read-only,
   at query time) instead of the table needing to physically live in DuckDB.
2. **Adopt DuckLake anyway**, if the goal is keeping everything inside one DuckDB/Parquet
   ecosystem and avoiding a second system with its own concurrency model — accepting a newer,
   still-maturing multi-writer conflict story (real GitHub issues report concurrent-write failures
   and compaction conflicts, even post-1.0) as a tradeoff, piloted on this one low-stakes table.

**Current lean: option 1 — Postgres, not DuckLake.** The table in question is small and
row-shaped, which plays to Postgres's proven strengths rather than DuckLake's still-settling ones,
and avoids adopting new infrastructure to solve a problem that already has a boring, reliable
answer. DuckLake would only earn its place if this table's edit volume or size grew into genuinely
analytical territory (unlikely for an alias/review-queue table), or if a second concurrently-
written table appeared that didn't fit Postgres for some other reason. **Not fully closed out** —
worth revisiting if either of those conditions shows up.

## Evaluated and Deferred: QUACK

A beta client-server protocol for remote `ATTACH` access to a DuckDB instance over the network was
evaluated and **not** adopted: it solves *remote network access* to a live DuckDB file, which isn't
the actual gap here — Metabase plus SSH already gives everyone access to the shared VM. The real
gap was the file-splitting/Metabase-connection problem (solved above) and the concurrent-writer
question (the DuckLake discussion above). No built-in TLS, permissive default authorization, and a
documented concurrent-insert ceiling past 8 threads at time of evaluation — revisit once it reaches
a stated production release, but nothing here currently depends on it.

## Data Quality Loop

- **Bronze immutable, silver corrected** — every fix, including retroactive backfills for
  already-ingested rows, is a script that reads bronze and rewrites silver. The DuckDB copy
  inherits the fix for free on the next sync; nobody re-implements the same workaround in analysis
  queries.
- **One tracked list of known data-quality issues** (what's wrong, how it was found, whether it
  needs a one-time backfill vs. an ongoing pipeline fix, status) instead of the same issue being
  independently rediscovered by whoever happens to be looking next.

## Script Organization

- Split by pipeline stage: ingestion (source collection) → transform (bronze→silver ETL,
  backfills) → an analyst toolkit (gold-mart builders, ad hoc profiling) → a BI-tool provisioning
  script for dashboards.
- Label one-off/bootstrap scripts (initial migrations, one-time backfills) clearly as non-recurring
  so nobody later assumes they're scheduled jobs.
- Every script reads database credentials from the environment — never hardcode them or commit a
  credentials file.

## Open Questions / Next Steps

- Resolve the DuckLake-vs-Postgres question for the human-curated table once it's clear whether
  that table actually needs to exist yet.
- Validate this whole design against synthetic/mock data before real ingestion starts — exercise
  the sync job, the read-only role, dynamic table discovery, and a gold-mart build end to end to
  find what breaks before committing to it at real scale.
- Confirm whether `updated_at` is reliably bumped on every silver table before depending on
  incremental sync.
- Build full-text search (tsvector/GIN) alongside the first version of the silver schema, not as a
  later addition.
- Basic operational hygiene before this is more than one person's dependency: alerting on sync job
  failure, confirmed automated Postgres backups, and a real migration tool for schema changes.

## Stack (Proposed)

- **Postgres** — OLTP source of truth, dedicated read-only role for analytical access.
- **DuckDB** — embedded columnar analytical layer, per-domain files, atomic-swap refresh.
- **Postgres** (again, not DuckLake, current lean) — home for the one human-curated
  concurrently-edited gold table, read into DuckDB analysis via live `ATTACH`/scanner.
- **Metabase** — shared analyst-facing SQL editor, saved questions, dashboards.
- **A cloud VM, colocated with the Postgres instance** — shared hosting for the DuckDB files and
  Metabase.
- **Considered and set aside for now**: ClickHouse (proper warehouse, real cost of a
  continuously-running server), DuckLake (lakehouse format, open question above), WalShadow/PeerDB
  (CDC, deferred until batch sync is the proven bottleneck), QUACK (remote DuckDB protocol, no
  current gap it closes).
