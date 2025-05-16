# Powering Granular Cloud Cost Analytics with ClickHouse

- **Product:** Unit Econ Pro – Opstree’s internal FinOps observability and optimization platform  
- **Goal:** Real-time, high-scale storage and querying of time-series **cloud cost metrics**  
- **Technology Stack:** ClickHouse, Python (ETL), Prometheus Exporters, Kubernetes, Grafana

## The Challenge

While building **Unit Econ Pro**, our in-house FinOps platform for cloud cost observability and optimization, we faced several key technical challenges related to the original **InfluxDB-based architecture**:

- **High write amplification and ingestion lag** under heavy workloads.
- **Query limitations for multi-dimensional joins**, such as combining cost with tags or team ownership.
- **Slow query performance** on high-cardinality datasets.
- **Inability to run real-time queries on incoming data**:
  - InfluxDB (prior to v3.0) does **not support querying newly ingested data** until it is flushed to disk — creating a delay between ingestion and visibility.
  - This was a major blocker for **live dashboards**, anomaly alerts, and immediate cost reaction.
  - While **InfluxDB 3.0** addresses this with real-time query capabilities, its **open-source implementation is still unavailable**, and only a **cloud-hosted public beta** exists as of now.

Due to these constraints, InfluxDB no longer aligned with the **scale, flexibility, and real-time insight** needs of Unit Econ Pro.

## Our Approach: Re-architecting with ClickHouse

To overcome the limitations of InfluxDB, we re-engineered Unit Econ Pro’s core metrics engine using **ClickHouse** — a columnar OLAP database optimized for time-series and analytical workloads.

## Step 1: Data Modeling

- Transformed cloud billing exports (AWS CUR, GCP billing, Azure cost exports) into **normalized, wide-format records**.
- Modeled metrics using MergeTree with partitioning by date and ordering by (account, service, timestamp) for efficient scan and aggregation.
- Captured metadata dimensions like:
  - Service
  - SKU / Resource ID
  - Project / Environment / Owner tags
  - Usage type, Region, Provider

## Step 2: Cost Ingestion & ETL

- Built a **streaming ETL pipeline** in Python to:
  - Fetch cloud cost exports periodically
  - Normalize and transform records
  - Insert into ClickHouse using batch inserts for performance
- Achieved ingestion of **10M+ cost records per day**, with `<10s` latency

## Step 3: Real-time Dashboards & Query Engine

- Created **real-time cost dashboards** for:
  - Daily cost breakdown by service/team
  - Anomaly detection in sudden spikes
  - Idle resource tracking
- Enabled advanced slicing & dicing: “Show EC2 cost by environment for last 30 days filtered by idle hours > X”
- Integrated with **Grafana** for flexible visualizations and alerting

## Step 4: Cost Recommendations Engine

- Used historical cost usage patterns stored in ClickHouse to:
  - Suggest **commitment plan savings** (RI / Savings Plans)
  - Detect **underutilized resources**
  - Identify **rightsizing opportunities**

## Impact & Outcomes

| **Metric** | **Before (InfluxDB)** | **After (ClickHouse)** |
| --- | --- | --- |
| Daily ingestion volume | ~2M records | **10M+ records** |
| Dashboard response time | ~8-15s | **`<1s`** |
| Storage cost per 100M rows | High | **~70%** (compression) |
| Join support across dimensions | Limited | Rich & flexible |
| Anomaly detection & cost recommendations | Not feasible | Fully supported |

## Why ClickHouse?

ClickHouse gave us:

- 🚀 **High throughput ingestion** and **real-time query performance**
- 🧠 **Analytical flexibility** with joins, group-bys, and window functions
- 💾 **Advanced compression**, reducing storage footprint significantly
- 🔄 **Continuous aggregations** using materialized views

## Sample Use Cases Unlocked

- “Which team is spending the most on underutilized EC2 instances?”
- “What are the top 5 services with the steepest week-over-week cost rise?”
- “Show me Kubernetes workloads with constant CPU throttling but no traffic”

## Summary

By replacing InfluxDB with ClickHouse, **Unit Econ Pro** evolved into a **real-time FinOps powerhouse** — capable of storing billions of time-series metrics, running advanced queries instantly, and driving actionable cost insights for engineering and finance teams.
