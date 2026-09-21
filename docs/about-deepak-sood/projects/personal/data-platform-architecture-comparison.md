---
slug: /data-platform-architecture-comparison
title: "Data Platform Architecture Comparison: Three Options"
description: Side-by-side comparison of the three data platform architectures considered - the Postgres+DuckDB baseline, a full DuckDB ecosystem with CDC/DuckLake/QUACK, and a ClickHouse-based warehouse - with a decision guide for which to use when.
created: 2026-09-19
updated: 2026-09-19
---

## Status

Design/decision record, not a build log. This document doesn't introduce anything new — it
indexes and compares the three architecture documents written alongside it, to make the choice
between them (and the conditions for switching later) explicit in one place.

## The Three Documents

1. **[Baseline: Postgres + DuckDB](/data-platform-architecture-postgres-duckdb)** — the current recommendation.
   Embedded DuckDB analytical layer, incremental batch sync, per-domain file splitting, the one
   collaborative gold table leaning toward living in Postgres rather than DuckLake.
2. **[DuckDB Ecosystem: + CDC + DuckLake + QUACK](/data-platform-architecture-duckdb-ecosystem)**
   — the same Postgres + DuckDB core, but with all three deferred technologies adopted together:
   `ingestr`-based CDC into DuckDB, DuckLake for the collaborative table instead of Postgres, and
   QUACK for remote direct access.
3. **[ClickHouse](/data-platform-architecture-clickhouse)** — replaces the DuckDB analytical layer
   entirely with a client-server ClickHouse warehouse, fed via WalShadow CDC (physical WAL) or a
   logical-replication fallback (PeerDB/Debezium).

## Side-by-Side Comparison

| Dimension | Baseline (Postgres + DuckDB) | DuckDB Ecosystem (+CDC/DuckLake/QUACK) | ClickHouse |
|---|---|---|---|
| **Cost at rest / idle** | Zero — a file on disk, no server | Zero for DuckDB itself, but CDC (`ingestr`) and DuckLake's catalog traffic run continuously | Non-zero — a correctly-sized server must run 24/7 regardless of query load |
| **Ingestion freshness** | Nightly / incremental batch (minutes-to-hours latency) | Near-real-time for CDC-covered tables (`ingestr`, seconds-to-low-minutes) | Near-real-time (~200ms with WalShadow; ~10s with the logical-replication fallback) |
| **Concurrent writers** | Single-writer per file; the collaborative table routed to Postgres | Single-writer for plain DuckDB files; DuckLake adds real multi-writer support for the one pilot table | Native multi-writer across every table, no special-casing needed |
| **BI-tool joins across domains** | Limited to one file/connection at a time; cross-domain needs a dedicated rollup build | Same limitation as baseline for plain DuckDB files; unaffected by CDC/DuckLake/QUACK | Native — one connection joins everything |
| **CDC operational risk** | N/A (not adopted) | Replication-slot WAL retention if the CDC consumer dies (same class of risk as ClickHouse's fallback path) | WalShadow avoids the logical-replication-slot risk entirely (physical WAL); the logical-replication fallback carries the same risk as `ingestr` |
| **New infrastructure to operate** | None beyond the shared VM + BI tool | Three additional pieces: a long-lived CDC process, a DuckLake catalog, optionally a QUACK endpoint | One additional piece, but a larger one: a full database server |
| **Technology maturity risk** | Low — DuckDB's single-writer model is well-understood and worked around, not fought | Medium — DuckLake has real open concurrent-write issues; QUACK is explicitly beta | Low-medium — ClickHouse itself is mature; WalShadow is newer (physical-WAL access itself may be gated by Postgres hosting choice) |
| **Compression/storage tuning ceiling** | Good defaults, less tunable | Same as baseline | Higher ceiling with per-column codec tuning, but requires the effort to use it |
| **Best fit** | Current actual scale and requirements | A team that wants CDC-level freshness and/or real multi-writer gold tables without leaving the DuckDB ecosystem | A team already needing (not just wanting) native multi-writer + one universal BI connection + minimal CDC latency |

## Decision Guide

**Start with the baseline.** Nothing about the current scale (tens of GB, a handful of analysts,
data that grows with more sources over time rather than orders-of-magnitude more query traffic)
justifies either alternative yet. The baseline's two real limitations — per-domain file splitting
for BI joins, and routing the one collaborative table to Postgres instead of DuckDB — are workable,
not blocking.

**Move to the DuckDB Ecosystem variant if, and only if, at least one of these becomes true:**
- Incremental batch sync (the baseline's sync strategy) starts running uncomfortably often, and
  near-real-time freshness is worth an always-on process to get.
- A second table needs genuine concurrent multi-person editing, and routing multiple tables into
  Postgres starts to feel like it's dragging OLTP scope back into the analytics layer.
- Power users specifically ask for direct remote query access from their own machines, and SSH+CLI
  is a real point of friction, not a hypothetical one.

**Move to ClickHouse if, and only if, at least one of these becomes true:**
- The warehouse approaches the hundreds-of-GB/low-TB range, where DuckDB's single-node embedded
  model starts to strain regardless of file-splitting tricks.
- Analysts need heavy concurrent queries *directly* against the warehouse, not mediated by the BI
  tool's connection pooling — i.e., the BI tool itself becomes the bottleneck, not just the storage
  engine underneath it.
- CDC latency requirements become strict enough that even `ingestr`-based CDC (seconds-to-minutes)
  isn't good enough, and sub-second freshness is a real product/analysis requirement, not a nice-
  to-have.
- Multiple tables need genuine concurrent multi-writer support at once, to the point that the
  DuckLake pilot (one table, deliberately narrow) no longer fits the actual need.

**Don't jump straight to ClickHouse to get CDC or concurrent writers alone** — the DuckDB Ecosystem
variant gets most of the way there (near-real-time CDC via `ingestr`, real multi-writer via
DuckLake) without taking on a continuously-running server. ClickHouse is the right move when the
*scale* or *BI-tool-joins-everything* requirements are also real, not just the CDC/concurrency
ones in isolation.

## What All Three Share, Regardless of Which Is Chosen

- Postgres remains the OLTP source of truth and the only thing the application touches directly,
  in every option.
- Bronze stays immutable object storage; data-quality fixes always go through a script that reads
  bronze and rewrites silver, never a patch applied to a downstream analytical copy.
- Least-privilege Postgres roles (app read-write, everything else read-only or narrowly scoped) are
  non-negotiable in all three.
- None of these should be built against real data before validating the chosen design against
  synthetic/mock data first — the failure modes discussed in each document (file-splitting
  granularity, replication-slot risk, DuckLake conflict handling, "too many parts") are exactly the
  kind of thing cheaper to discover against fake data than in production.
