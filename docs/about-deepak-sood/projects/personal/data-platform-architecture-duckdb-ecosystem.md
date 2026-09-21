---
slug: /data-platform-architecture-duckdb-ecosystem
title: "Data Platform Alternative: Full DuckDB Ecosystem (CDC + DuckLake + QUACK)"
description: What the baseline Postgres + DuckDB architecture looks like if CDC ingestion, DuckLake, and QUACK are all adopted now instead of deferred - what each adds, the real operational cost, and the trigger conditions that would justify it.
created: 2026-09-19
updated: 2026-09-19
---

## Status

Design/decision record, not a build log — nothing here is implemented. This is a **variant** of
the [baseline Postgres + DuckDB architecture](/data-platform-architecture-postgres-duckdb): same Postgres +
DuckDB core, but with three technologies the baseline explicitly defers — CDC ingestion, DuckLake,
and QUACK — adopted together instead. Written to keep the reasoning for *when* this variant
becomes worth it in one place, separate from the simpler default.

## Relationship to the Baseline

The baseline's stance on all three of these was "not yet, revisit if a specific condition
becomes true":

| Technology | Baseline's stance | Trigger to revisit |
|---|---|---|
| CDC (logical replication into DuckDB) | Deferred — incremental batch sync first | Even incremental batch sync runs uncomfortably often |
| DuckLake | Leaning against — put the one collaborative table in Postgres instead | That table's size/edit volume grows into analytical territory, or a *second* concurrently-written table appears that doesn't fit Postgres |
| QUACK | Not adopted — Metabase + SSH already cover access | Power users need direct remote `ATTACH` from their own machines, not just SSH+Metabase |

This document assumes those trigger conditions are true (or expected soon) and works out what
adopting all three together actually looks like, including the parts of the baseline design
(per-domain file splitting, atomic-swap discipline, least-privilege Postgres roles) that don't
change.

## 1. CDC Ingestion into DuckDB

**Why the baseline defers this**: incremental batch sync (`updated_at`-based upsert, per-domain
files) already solves "don't rebuild everything on every change" reasonably well without adding a
long-lived streaming process to operate. CDC is the next step only once that stops being enough —
either because update *latency* needs to be much lower than a batch interval, or because update
*frequency* makes even incremental batch sync run uncomfortably often.

**Tool choice**: unlike ClickHouse (which has WalShadow, a purpose-built physical-WAL CDC tool —
see the [ClickHouse architecture doc](/data-platform-architecture-clickhouse)), DuckDB has no
first-party CDC ingestion tool. The practical options:

- **[`ingestr`](https://github.com/bruin-data/ingestr)** — a general-purpose CDC/ELT tool that
  supports Postgres logical replication as a source and DuckDB as a destination:
  `ingestr ingest --source-uri 'postgres+cdc://...' --dest-uri 'duckdb:///...' --stream` snapshots
  a table once, then tails the WAL continuously, flushing batched changes into the DuckDB file on
  a configurable interval. This is the recommended default — mature enough, and doesn't require
  standing up Kafka.
- **Debezium + Kafka + a DuckDB sink** — the "proper" enterprise CDC stack (Debezium captures
  Postgres changes via logical decoding, publishes to Kafka, a sink connector writes into DuckDB).
  Real and battle-tested at scale, but adds an entire Kafka cluster to operate for a workload this
  project's scale doesn't need. Not recommended here — mentioned for completeness, since it's the
  answer once volumes genuinely outgrow a single-process tool like `ingestr`.

**What it needs on Postgres**:
- `rds.logical_replication = 1` (or the equivalent for whatever Postgres host is chosen) — a
  static parameter requiring an instance reboot, so this needs a scheduled maintenance window, not
  an ad hoc flip.
- A dedicated Postgres role granted replication privileges, separate from the app's read-write
  role and the BI tool's read-only role — one more entry in the same least-privilege pattern the
  baseline already establishes.

**Landing pattern**:
- Land into its own small, frequently-updated domain file (e.g. a `*_live.duckdb` alongside the
  per-domain files from the baseline), never the large/rarely-changing bulk files — CDC apply is
  cheap per-row; don't reintroduce the whole-file-copy cost the baseline's per-domain split was
  specifically designed to avoid.
- `ingestr`'s `--stream` mode adds `_cdc_lsn`/`_cdc_deleted`/`_cdc_synced_at` columns and
  implements deletes as **soft deletes** (the row stays, flagged) — anything querying the table
  directly (or a view over it) needs to filter `_cdc_deleted = false`.
- Runs as a long-lived process (systemd, or `docker compose` with `restart: always`), not a cron
  job — this is now a service to keep alive, monitor, and restart on crash, unlike a nightly batch
  job that just leaves yesterday's data in place if it fails once.

**Scope narrowly**: CDC is worth it for specifically the high-churn silver tables identified as
the actual pain point — not bronze (append-mostly, not iterated on live) and not every table by
default. Putting bronze-scale JSONB through a replication slot adds WAL retention risk for a
workload nobody's editing minute-to-minute anyway.

**The one operational risk that's genuinely new versus batch sync**: a logical replication slot
makes Postgres **retain WAL indefinitely until the consumer catches up**. If the `ingestr` process
dies and nothing restarts it, WAL storage grows unbounded on the source until disk fills — a
production incident on the *serving* database, not just a stale dashboard. This is strictly worse
than a failed nightly batch (which just leaves stale data in place) and needs dedicated monitoring
— alert on the source's replication-slot/WAL-retention metric, and confirm the consumer process
actually restarts on crash rather than silently staying down.

**Pros**: near-real-time freshness for the tables that need it; incremental by construction, no
periodic re-scan cost regardless of table size; removes the "does batch sync still fit the window"
question entirely for the tables it covers.

**Cons**: a new always-on process to operate and monitor; a genuine production-incident risk
(unbounded WAL growth) that batch sync doesn't have; soft-delete semantics that every downstream
query needs to know about; no first-party DuckDB tooling for this, so you're gluing a generic tool
into the pipeline rather than using something purpose-built.

## 2. DuckLake for the Collaborative Gold Table

The baseline's [DuckLake discussion](/data-platform-architecture-postgres-duckdb#do-we-actually-need-ducklake)
leaned toward putting the one human-curated, concurrently-edited gold table in Postgres instead of
adopting DuckLake, on the reasoning that the table is small and row-oriented — a good fit for
Postgres, not really what a columnar/Parquet format is for.

This variant adopts DuckLake anyway. The case for doing so: keeping *everything* gold-layer inside
the DuckDB/Parquet ecosystem, rather than introducing Postgres as a second system with its own
concurrency model that the DuckDB-side tooling then has to reach across (via `ATTACH`/the
`postgres` scanner) for every join. This is a real, legitimate trade — it's "one ecosystem,
accepted immaturity" versus "two proven systems, one extra cross-system read path" — not a clearly
wrong choice, just a different one than the baseline's lean.

**What DuckLake is**: a lakehouse format — metadata (schema, snapshots, transaction bookkeeping)
in a transactional SQL database acting as the catalog, actual data as open Parquet files. This
adds transactional multi-writer support on top of DuckDB/Parquet, which is exactly the gap plain
DuckDB has for a table multiple people edit concurrently.

**Setup**:
- **Catalog**: a dedicated Postgres database (e.g. `CREATE DATABASE ducklake_catalog`) on the
  existing Postgres instance — no new service to stand up, one instance to back up/monitor.
  Attached via `ATTACH 'ducklake:postgres:dbname=ducklake_catalog host=...' AS lake (DATA_PATH
  '...')`, per DuckLake's own setup convention (a separate database, not a schema bolted onto the
  app's database).
- A dedicated Postgres role (e.g. `ducklake_rw`) scoped to only that database — separate from the
  app's role, the BI tool's read-only role, and the CDC role from §1. DuckLake's catalog writes
  (snapshot/schema bookkeeping on every commit) have nothing to do with the app's own tables; keep
  the blast radius and credentials separate.
- **Data path**: local disk on the shared VM initially, not object storage — the VM and the
  process reading/writing Parquet are the same machine, so no network hop, no request cost, no
  IAM/bucket policy to manage. Real-world reports on DuckLake's own issue tracker note a *higher*
  conflict rate on object-storage-backed data paths, since a raw Parquet write can land before its
  catalog transaction commits. Cheap to move to object storage later — swapping `DATA_PATH`
  doesn't change the catalog or the query surface.

**Scope the pilot deliberately narrow**:
- Single-row inserts/updates only, not batch/partition-level changes — DuckLake's automatic
  conflict retry (`ducklake_max_retry_count`, default 10; `ducklake_retry_backoff`, default 1.5×)
  is designed for exactly this write shape.
- Avoid concurrent schema changes (adding columns/partitions) to the pilot table while multiple
  people might be writing rows — several of DuckLake's own open issues (e.g. "Concurrent writes
  fail on first write to table," "Concurrent writes fail often," table-level compaction conflicts
  even on disjoint file sets) flag this as the still-fragile edge, even post-1.0.
- Treat "reached 1.0" as young enough to pilot on one table, not to migrate the whole warehouse
  onto — re-evaluate extending it further only after this pilot has real mileage.

**Pros**: stays inside one storage ecosystem (DuckDB/Parquet everywhere, no Postgres-as-analytics-
adjacent-store); genuinely solves the multi-writer gap rather than routing around it; catalog
reuses infrastructure already being paid for (the existing Postgres instance).

**Cons**: newer technology with real, documented rough edges in exactly the multi-writer scenario
it's being adopted for; another thing to monitor (catalog traffic on the shared Postgres instance,
even if small); more moving parts than "just use Postgres for this one small table," for a benefit
(ecosystem purity) that's more about consistency than capability.

## 3. QUACK for Remote Direct Access

**What it is**: a client-server network protocol for DuckDB (`ATTACH 'quack:hostname'`, default
port 9494) that lets a client — an analyst's own laptop, a script running elsewhere — directly
`ATTACH` to a live DuckDB instance over the network, instead of going through Metabase's web UI or
SSHing into the shared VM to run the DuckDB CLI locally.

**What it would add over the baseline's access model**: the baseline covers "everyone can do
analysis" via Metabase (no DuckDB knowledge needed) plus SSH (power users, but tied to being on
the box). QUACK would let a power user query the shared DuckDB files directly from their own
machine/tooling (a local Python notebook, a personal DuckDB CLI) without SSH — a genuine
convenience improvement, not a capability the baseline is missing entirely.

**Current limitations, as of this evaluation**:
- Beta status, with the DuckDB team's own "initial implementation" framing and a stated
  fall-2026/DuckDB-v2.0 GA target — not yet the finished product.
- No built-in TLS — traffic between client and server isn't encrypted in transit by the protocol
  itself.
- Permissive default authorization — needs care in how it's exposed, not something to open beyond
  a trusted network by default.
- A documented concurrent-insert ceiling past 8 threads — a real scaling limit if multiple writers
  use it simultaneously.

**Mitigations if adopted now, ahead of GA**:
- Restrict access to the same private network/VPN the SSH access already requires — never expose
  port 9494 publicly.
- Treat it as a read-only, power-user convenience layer on top of the existing access model, not a
  replacement for it — Metabase remains the primary path for most people regardless.
- Don't depend on it for anything write-path-critical (e.g. don't route CDC or scheduled builds
  through it) given the concurrent-insert ceiling and beta status.

**Pros**: removes the SSH-and-run-DuckDB-CLI step for power users who want to query from their own
tooling; a real quality-of-life improvement once mature.

**Cons**: beta, with real gaps (no TLS, permissive default authz) that need to be actively
mitigated rather than assumed away; doesn't close any gap the baseline's Metabase+SSH combination
doesn't already cover, just makes one path more convenient; adds one more network-facing service
to secure and monitor on the shared VM.

## How the Three Combine

These are independent, additive adoptions — none of them requires the others:

- **CDC (§1)** feeds the high-churn per-domain "hot" files continuously, replacing their portion
  of the nightly batch sync. The rest of the warehouse (bulk/rarely-changing domains) stays on the
  baseline's incremental batch sync.
- **DuckLake (§2)** hosts specifically the one (or few) collaboratively-edited gold table(s),
  sitting alongside the plain DuckDB domain files — a different storage mechanism for a different
  write pattern, not a replacement for the rest of the warehouse.
- **QUACK (§3)** is purely an access-layer addition — it doesn't change how any data gets into the
  warehouse, only how people/tools can reach it once it's there.

Adopting all three moves this from "DuckDB plus two deferred technologies" to "DuckDB plus three
actively-operated pieces of newer infrastructure" — each individually justifiable if its specific
trigger condition is real, but collectively a meaningfully larger operational surface than the
baseline.

## Pros/Cons vs. the Baseline

**Pros of this variant**:
- Near-real-time data freshness where it matters (CDC), instead of nightly/incremental-batch
  latency.
- A genuinely solved concurrent-writer story for gold tables (DuckLake), without introducing
  Postgres as a second analytics-adjacent datastore.
- More convenient direct access for power users (QUACK), without giving up the baseline's
  Metabase-first model for everyone else.

**Cons of this variant**:
- Three additional pieces of infrastructure to operate, monitor, and secure, each with real,
  documented immaturity (CDC's WAL-retention risk, DuckLake's concurrent-write edge cases, QUACK's
  beta security posture) — versus the baseline's "a file on disk plus a nightly job."
- Each piece is justified only by a specific condition being true; adopting all three
  speculatively, without those conditions actually holding, is exactly the kind of
  ahead-of-need infrastructure the baseline's requirements explicitly ruled out.

## Operational Maturity Snapshot

| Piece | Maturity | Biggest open risk |
|---|---|---|
| `ingestr` (Postgres CDC → DuckDB) | Established open-source ELT tool, less DuckDB-specific polish than a purpose-built tool | Replication slot WAL retention if the process dies |
| DuckLake | Reached 1.0/"production-ready," but multiple open concurrent-write issues in practice | Compaction/concurrent-write conflicts under real multi-user load |
| QUACK | Beta, stated GA in fall 2026/DuckDB v2.0 | No built-in TLS, permissive default authz |

## Stack (This Variant)

- **Postgres** — OLTP source of truth, dedicated roles per consumer (app, BI tool, CDC, DuckLake
  catalog).
- **DuckDB** — embedded columnar analytical layer, per-domain files (baseline) plus dedicated
  hot-table files fed by CDC.
- **`ingestr`** — Postgres logical-replication CDC into the hot-table DuckDB files.
- **DuckLake** — lakehouse format (Postgres catalog + local Parquet) for the collaboratively-
  edited gold table(s).
- **QUACK** — optional remote-`ATTACH` access layer for power users, network-restricted.
- **Metabase** — still the primary shared-access surface for most analysts, unchanged from the
  baseline.
