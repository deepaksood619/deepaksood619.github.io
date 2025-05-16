# Case Study: Optimizing Real-time User Analytics for a Large EdTech Platform Using ClickHouse

- **Client:** A leading EdTech platform with millions of active college students across India.
- **Technology Stack:** ClickHouse, Kafka, Python (ETL), Grafana, Kubernetes

## The Challenge

The EdTech platform was facing challenges in delivering **real-time ad personalization** for its internal college ad network. The core issues included:

- **Slow analytics pipelines** due to a legacy OLAP database.
- **Inability to track fine-grained clickstream data** from internal ad placements.
- **Difficulty in aggregating user interaction data** (searches, course clicks, page visits) in real time.
- **Poor ad relevance** leading to low engagement and click-through rates.

The client needed a high-performance analytics solution to:

1. Track and analyze **user behavior in real time**.
2. Run **complex aggregations on billions of events** quickly.
3. Optimize ad recommendations using deep user interaction data.

## Our Approach at Opstree

We designed and implemented a modern **ClickHouse-based analytics pipeline** to solve this at scale.

## Step 1: Event Pipeline & Modeling

- Built a **Kafka-based event ingestion layer** for real-time user interaction events (ad clicks, scrolls, hovers, etc.).
- Modeled the data to support **wide-column schema design** in ClickHouse optimized for analytical queries.
- Partitioned by day, and used MergeTree engines for efficient compression and fast reads.

## Step 2: ClickHouse Deployment & Optimization

- Deployed ClickHouse in **HA mode on Kubernetes**, ensuring scalability and fault tolerance.
- Tuned system configurations (merge settings, buffer sizes) for high-throughput ingestion.
- Created **materialized views and pre-aggregated tables** for faster dashboard loading and complex joins.

## Step 3: Analytics & Visualization

- Integrated ClickHouse with **Grafana and Superset** for real-time dashboards.
- Built custom ad-performance dashboards showing:
  - CTR per college/user cohort
  - Heatmaps of ad positions on pages
  - Funnel analysis (search → view → click)
- Enabled **real-time campaign performance tracking** for the internal marketing team.

## Step 4: Ad Personalization Engine (Phase 2)

- Leveraged user interaction logs stored in ClickHouse to build a **lightweight personalization layer**.
- Queried user interest segments and behavior patterns to **serve dynamic, more relevant ads**.
- Enabled the platform to run **A/B experiments** efficiently using event data snapshots.

## Business Impact

| **Metric** | **Before ClickHouse** | **After Opstree's Solution** |
| --- | --- | --- |
| Ad CTR | ~1.1% | **`2.8%`** |
| Dashboard load time | ~40s | **`2s`** |
| Query time on 1B+ records | ~30s | **`<1s`** |
| Infrastructure cost (OLAP) | High | **`~35%`** with ClickHouse compression |
| Ad personalization capability | None | **Live & contextual** |

## Why ClickHouse?

ClickHouse was selected due to its:

- **Columnar storage** ideal for analytical queries
- **Blazing-fast aggregation** over large datasets
- **Advanced compression** for reduced storage cost
- Native support for **real-time inserts and joins**

## Summary

Opstree delivered a high-performance, scalable analytics solution using ClickHouse, enabling real-time user behavior tracking and ad personalization for a leading EdTech platform. The result: faster insights, better user targeting, and measurable business outcomes.
