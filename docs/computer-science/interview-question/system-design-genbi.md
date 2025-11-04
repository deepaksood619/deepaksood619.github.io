# System Design GenBI

## Problem Statement: GenBI — Unified Natural Language Business Intelligence Platform for Telecom

The telecom enterprise maintains large volumes of operational, customer, and network data across multiple siloed systems—such as CRM (Customer Relationship Management), OSS/BSS (Operational/Business Support Systems), billing databases, network performance logs, and customer interaction platforms. Product and business analyst teams need quick insights spanning these heterogeneous data sources for decision-making, but current processes require technical mediation, SQL knowledge, and manual data joins, slowing down analysis and experimentation.

We aim to design **GenBI**, a **Generative AI–powered Business Intelligence system**, that allows analysts and product managers to **query and visualize data in natural language** while **abstracting away data source complexity**.

## Core System Design Challenge

How can we design a **scalable, secure, multi-source conversational BI platform** that:

1. **Connects to multiple databases** (e.g., PostgreSQL, Snowflake, Redshift, MySQL, and NoSQL stores like MongoDB) across various telecom domains.
2. **Understands and translates natural language questions** (e.g., “Show churn rate by region for the last quarter”) into optimized cross-source SQL or query plans.
3. **Resolves semantic differences** (e.g., “subscriber” vs “customer_id”) via a **unified semantic layer or knowledge graph**.
4. **Ensures data governance and role-based access control** while executing queries.
5. **Caches and optimizes frequent queries** to maintain real-time response performance.
6. **Provides visual explanations and dashboarding capabilities** based on LLM-generated outputs.

## Key Design Goals

- **Accuracy:** Generate correct queries across multiple heterogeneous schemas.
- **Latency:** Maintain sub-5-second query responses for common analytics.
- **Scalability:** Handle data connections across multiple business units and terabyte-scale datasets.
- **Security:** Enforce access policies and data masking in generated queries.
- **Explainability:** Show how natural language was interpreted and translated into query logic.

## Example Use Cases

- Product managers query: “What’s the ARPU trend for prepaid users in South India over the past 6 months?”
- Analysts ask: “Compare customer complaints against dropped call rates for 4G networks.”
- Executives request: “Summarize top churn reasons and affected revenue segments.”
