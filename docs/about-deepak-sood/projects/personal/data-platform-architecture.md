---
slug: /data-platform-architecture
title: Postgres, DuckDB & Metabase Data Platform Architecture
description: Designing a hybrid OLTP/OLAP data platform - Postgres as source of truth, a DuckDB analytical mirror, shared Metabase BI, and a DuckLake pilot for collaborative gold tables.
created: 2026-09-19
updated: 2026-09-19
---

## Overview

Architecture for a personal data platform that needed to keep a transactional Postgres database as the single source of truth for a live application, while giving a small team of analysts fast, shared, self-serve analytics on top of a large and continuously growing dataset — without adding operational overhead the project's actual scale didn't justify.

## Requirements

- Postgres stays the OLTP source of truth; the app never gets slower because analysts are running heavy aggregate queries.
- Analysts get fast ad hoc/aggregate query performance, shared across the team, not one person's laptop.
- A data-quality fix lands once, in one place, and every downstream table inherits it — never patched per-analysis.
- Room for a handful of people to collaboratively curate a shared table (not just read dashboards), without reaching for a full second database to get there.
- No infrastructure added ahead of an actual scale/concurrency need.

## Bronze / Silver / Gold Layering

- **Bronze** — raw ingested payloads, append-only, never mutated after write. The durable source of truth precisely because it never changes; every downstream fix is a script that reads bronze and rewrites silver, not a hand patch applied once.
- **Silver** — normalized, structured tables in Postgres. This is what the application reads and writes directly, and the only layer that gets corrected when a data-quality bug is found.
- **Gold** — aggregated, analysis-ready tables. Splits three ways depending on audience and write pattern (below) rather than one blanket answer.

## Postgres: Serving Layer and Source of Truth

- The only thing the frontend/backend touches directly — right tool for low-traffic, mostly-read, occasional-write, transactional access.
- A dedicated **read-only role** for anything that isn't the app's own writes (BI tool connections, sync jobs) — separate from the app's read-write credential, so a shared BI server or a nightly job can never mutate production data.
- Full-text search, where needed, via a generated `tsvector` column + GIN index rather than assuming it already exists.

## DuckDB: the Analytical Mirror

- A local, columnar, embedded copy of the OLTP data, rebuilt on a schedule — free, fast, and safe to query as hard as analysis needs, without putting load on the instance the product depends on.
- **Read-only, atomic-swap refresh**: build into a temp file, then rename — never open the live analytical file read-write outside the controlled build step, since the engine allows many readers or one writer, never both.
- Default path for any OLAP-shaped question (aggregates, dashboards, exploration); fall back to querying Postgres directly only when the mirror is confirmed stale for the question being asked, or the very latest row is required.
- Moving ad hoc analysis off the live transactional database onto this mirror cut query times from minutes to well under 15 seconds.

## Shared Hosting, Not One Laptop

- One modest VM, colocated on the same private network as the OLTP database — not reached only over a residential VPN, since network hop distance turned out to be the actual bottleneck in sync timing, not compute.
- **A BI tool's web UI as the primary shared-access path** — no SSH, no query-engine knowledge required, and it already covers the SQL editor, saved questions, and dashboards this need is really after.
- **SSH access for power users** who need raw access beyond the BI editor, with one hard rule carried through every script that touches the analytical file: build into a temp file, swap atomically — never touch the live file read-write from an ad hoc session.

## Sync Cadence

- Start with a nightly full resync — simple, and the right starting point before building anything more complex.
- Run the sync from inside the same network as the source database rather than over VPN; network latency/throughput, not query cost, was the real limiter on how long a full sync takes.
- Move from full resync to incremental **only once full-resync time genuinely approaches the batch window** — a resumable-sync bookkeeping table is most of the way there; a true incremental sync additionally needs a reliable "changed since" signal on every table, which is worth confirming rather than assuming. Don't build CDC machinery before the simple version is actually the bottleneck.
- Surface **"data as of {last successful sync timestamp}"** on every dashboard, sourced from the sync job's own bookkeeping — staleness should be visible at a glance, not something someone has to check manually.

## Gold Layer: Three Homes, by Audience and Write Pattern

1. **Scheduled, analyst-facing, never hand-edited** — computed once per refresh cycle, not once per person, and persisted as a real table anyone can query, join against, or build a new question on top of. Registering each gold file as its own connection in the BI tool puts its tables in the schema browser like any other table.
2. **Product-facing** — materializations the application itself serves stay in Postgres, refreshed on the sync cadence, because that's the only thing the app's connection reaches.
3. **Human-curated, collaboratively edited** — e.g. a canonicalization/aliasing table, or a manually reviewed flag queue, where multiple people edit the *same* rows over time. This is the one case a single-writer analytical file genuinely can't serve, and the case the next section is specifically for.

## Closing the Single-Writer Gap: a Lakehouse-Format Pilot

An embedded OLAP engine's single-writer model actively fights concurrent human editing — that gap needed a real fix, not "everyone just be careful":

- Adopted a **SQL-catalog lakehouse format** (metadata in a transactional SQL database, data as open Parquet files) for exactly the one table type that needs it — the human-curated collaborative gold table — rather than defaulting it into the OLTP database as a workaround, or migrating the whole warehouse onto it speculatively.
- **Catalog**: a dedicated database on the existing OLTP instance (no new service to run), with its own dedicated role — separate blast radius and credentials from both the app's read-write role and the BI tool's read-only role.
- **Data path**: local disk on the same VM, not object storage, for the initial rollout — colocated storage avoids a network hop, and real-world reports on this format's own issue tracker note a *higher* conflict rate on object-storage-backed data paths, since a raw file write can land before its catalog transaction commits. Cheap to move to object storage later; changing the data path doesn't change the catalog or the query surface.
- **Scoped narrowly on purpose**: single-row inserts/updates only, no concurrent schema changes while multiple people might be writing — the format's automatic conflict-retry behavior is designed for exactly that write shape, and several of its own open issues flag batch/schema-level concurrent writes as the still-fragile edge. Piloted on one table before trusting it with more.

## Evaluated and Deferred: a Remote Protocol for Direct Access

A beta client-server protocol for talking to an embedded OLAP engine over the network was evaluated and explicitly **not** adopted yet: it solves *remote network access* to a live instance, which wasn't the actual gap here — the BI tool plus SSH already gave everyone access. The real gap was *concurrent multi-writer* access to a shared table, which the lakehouse-format pilot above addresses directly. Worth revisiting once the protocol reaches a stated production release; nothing here currently depends on it.

## Why Not a Distributed OLAP Engine

Stuck with a single-node embedded engine rather than reaching for a distributed one — the latter would solve a scale/concurrency problem this project doesn't have yet, at the cost of real operational overhead it doesn't need yet either:

- Current scale sits squarely in a single-node engine's comfort zone, nowhere near the hundreds-of-millions-of-rows / many-TB scale, or the thousands-of-concurrent-query load, where a distributed engine starts paying for itself.
- The actual concurrency need is "a handful of analysts through one BI tool," not "many concurrent direct database connections" — the BI tool already pools and mediates that access.
- Zero extra infrastructure to run: the entire analytical footprint is a file on disk plus whatever reads it, versus standing up and operating a real server or cluster.

Defined concrete signals to revisit instead of guessing at a timeline: warehouse size approaching the low-TB range, analysts needing heavy *direct* concurrent access bypassing the BI tool's pooling, a move from batch to streaming ingestion, or built-in replication/HA becoming a hard requirement. Until one of those is true, this is deliberately not pre-optimized for scale the project isn't at.

## Data Quality Loop

- **Bronze immutable, silver corrected** — every fix, including retroactive backfills for already-ingested rows, is a script that reads bronze and rewrites silver. The analytical mirror inherits the fix for free on the next sync; nobody re-implements the same workaround in analysis queries.
- **One tracked list of known data-quality issues** (what's wrong, how it was found, whether it needs a one-time backfill vs. an ongoing pipeline fix, status) instead of the same issue being independently rediscovered by whoever happens to be looking next.

## Outcomes

- Ad hoc analytical queries that took minutes directly against the live OLTP database dropped to well under 15 seconds against the local analytical mirror.
- Moved from one person's laptop being the only place analysis could happen, to a shared BI surface + shared analytical files multiple people can query, extend, and save work against.
- A concurrent-write gap that would otherwise have pushed a curated table back into the OLTP database (adding load and scope creep to the one thing meant to stay lean) got solved inside the analytical stack instead, via a narrowly scoped pilot.

## Stack

- **Postgres** — OLTP source of truth, dedicated read-only role for analytical access.
- **DuckDB** — embedded columnar analytical mirror, atomic-swap refresh.
- **A SQL-catalog lakehouse format** — pilot for the one collaboratively-edited gold table.
- **A BI tool** (SQL editor, saved questions, dashboards) — shared analyst-facing surface.
- **A cloud VM, colocated with the OLTP instance** — shared hosting for the mirror + BI tool.
