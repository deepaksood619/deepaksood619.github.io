---
slug: /computer-science/interview-question/system-design-orderbuddy
title: OrderBuddy Data Infrastructure Design
description: Explore OrderBuddy's zero-loss, real-time analytics architecture for
  AI interaction with CDC pipeline and Apache Kafka.
created: '2026-05-18'
last_update: '2026-05-19'
---

## Executive Summary

This document presents a **zero-loss, real-time analytics architecture** for OrderBuddy's AI conversation platform. The design captures every AI interaction, streams data through a CDC pipeline, and enables real-time calculation of Order Accuracy and AI Hallucination Rates.

**Core Design Decisions:**

| Decision               | Choice                     | Rationale                                                          |
| ---------------------- | -------------------------- | ------------------------------------------------------------------ |
| **Data Capture**       | Change Data Capture (CDC)  | No application code changes, guaranteed completeness               |
| **Event Streaming**    | Apache Kafka               | Industry standard, exactly-once semantics, 7-day replay            |
| **CDC Technology**     | Debezium MongoDB Connector | Battle-tested, automatic resume, rich ecosystem                    |
| **Analytics Database** | ClickHouse                 | Sub-second queries, real-time inserts, 100x faster than PostgreSQL |
| **Stream Processing**  | Kafka Streams              | Real-time hallucination detection, claim extraction                |

**Zero-Loss Guarantee:**

3-layer durability (MongoDB replica set → Kafka 3x replication → ClickHouse) ensures no data loss under crashes, network failures, or infrastructure outages.

**Key Metrics Delivered:**

- **Hallucination Rate:** < 0.5% target (updated every 60 seconds)
- **Order Accuracy:** > 95% target (real-time per-order scoring)
- **End-to-End Latency:** < 5 seconds (MongoDB write → ClickHouse query)

---

## Unified Architecture

```text
┌─────────────────────────────────────────────────────────────────────┐
│                     Application Layer (NestJS)                      │
│  Customer → AI Chat → MongoDB ai_conversations (direct write)       │
│  • No WAL, No Queue, No CDC logic in application                    │
│  • Simple insertOne() / updateOne() operations                      │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ MongoDB Oplog (Transaction Log)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   OLTP Layer (Source of Truth)                      │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ MongoDB Replica Set (3 nodes, w: majority, j: true)      │      │
│  │  • ai_conversations collection                           │      │
│  │  • menus (ground truth for validation)                   │      │
│  │  • orders (actual customer orders)                       │      │
│  │  • locations (working hours, features)                   │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Debezium CDC (tails oplog)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│              Event Streaming Layer (Apache Kafka)                   │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ Topics:                                                   │      │
│  │  • ai_conversations.changes  (raw CDC events)            │      │
│  │  • ai_conversations.messages (flattened messages)        │      │
│  │  • ai_conversations.claims   (extracted claims)          │      │
│  │  • ai_conversations.hallucinations (detected errors)     │      │
│  │                                                           │      │
│  │ Config: 3 brokers, 3x replication, 7-day retention       │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Kafka Streams (real-time processing)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│         Stream Processing (NLP + Validation)                        │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ 1. Extract Claims:                                        │      │
│  │    • Menu items: "Vegan Pizza", "Caesar Salad"           │      │
│  │    • Prices: "$12.99", "$8.99"                           │      │
│  │    • Modifiers: "extra cheese", "gluten-free"            │      │
│  │    • Availability: "we are open", "delivery available"   │      │
│  │                                                           │      │
│  │ 2. Validate Against Ground Truth (ClickHouse lookup):    │      │
│  │    • JOIN dim_menu_items WHERE item_name = extracted     │      │
│  │    • Compare claimed_price vs actual_price               │      │
│  │    • Validate modifiers exist for item                   │      │
│  │                                                           │      │
│  │ 3. Detect Hallucinations:                                │      │
│  │    • Phantom items (not in menu)                         │      │
│  │    • Wrong prices (claimed ≠ actual)                     │      │
│  │    • Invalid modifiers (not available)                   │      │
│  │    • False availability (closed when claimed open)       │      │
│  │                                                           │      │
│  │ 4. Classify Severity: critical | major | minor           │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Batch inserts (100 msgs/batch)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│           OLAP Layer (ClickHouse Data Warehouse)                    │
│  ┌──────────────────────────────────────────────────────────┐      │
│  │ Fact Tables:                                              │      │
│  │  • fact_ai_messages (all messages + validation results)  │      │
│  │  • fact_ai_claims (granular claim tracking)              │      │
│  │  • fact_order_accuracy (conversation → order link)       │      │
│  │                                                           │      │
│  │ Dimension Tables (Ground Truth):                         │      │
│  │  • dim_menu_items (SCD Type 2 for price history)         │      │
│  │  • dim_modifiers (valid options)                         │      │
│  │  • dim_restaurants, dim_locations                        │      │
│  │                                                           │      │
│  │ Aggregates (Materialized Views, updated every minute):   │      │
│  │  • agg_ai_performance_realtime                           │      │
│  │  • agg_hallucinations_by_minute                          │      │
│  │  • agg_order_accuracy_by_hour                            │      │
│  └──────────────────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ SQL queries (< 100ms)
                         ▼
                ┌─────────────────────────────┐
                │   Real-Time Dashboards      │
                │  • Hallucination Rate       │
                │  • Order Accuracy           │
                │  • Live Conversations       │
                │  • Critical Alerts          │
                └─────────────────────────────┘
```

**Data Flow Latency:**

- MongoDB write → Debezium capture: < 100ms
- Debezium → Kafka publish: < 50ms
- Kafka → Stream processing: < 500ms
- Stream processing → ClickHouse: < 2s
- **Total: < 3 seconds** (MongoDB → queryable in ClickHouse)

---

## Question 1: Core Data Entities (Cart & Checkout)

### Cart Data Model (Frontend - Zustand Store)

| Entity | Key Fields | Purpose |
|--------|------------|---------|
| **Cart** | `items[]`, `subtotalCents`, `totalPriceCents`, `tax` | Shopping cart with calculated totals |
| **OrderItem** | `id`, `menuItemId`, `name`, `price`, `variants[]`, `modifiers[]`, `notes`, `stationTags[]` | Individual cart item with customizations |
| **Customer** | `name`, `phone` | Contact info for order notifications |
| **Discount** | `name`, `type`, `amountCents` | Campaign-based discount (from DB) |
| **Order (Preview)** | `previewOrderId`, `totalPriceCents` | Server-validated order before payment |

### Server-Side Entities (MongoDB)

| Collection | Purpose | Key Fields |
|------------|---------|------------|
| **orders_preview** | Temporary order storage (pre-payment) | `_id`, `orderCode`, `restaurantId`, `locationId`, `customer`, `items[]`, `totalPriceCents`, `status`, `discount` |
| **orders** | Final confirmed orders | `_id`, `originId`, `items[]`, `paymentMethod`, `customerInfo`, `status`, `createdAt` |
| **menus** | Menu catalog (ground truth) | `_id`, `restaurantId`, `locationId`, `items[]`, `categories[]`, `salesTax` |

### Data Flow: Cart → Order

```text
1. Customer adds items to cart (client-side)
   └─ Zustand store calculates: subtotal + tax + discount

2. Customer clicks "Checkout"
   └─ POST /order-app/cart/preview-order
      • Server fetches menu from DB
      • Validates all items exist and are available
      • Recalculates prices from menu (ignores client prices)
      • Applies tax from menu.salesTax
      • Fetches active campaign discount from DB
      • Creates orders_preview document
      • Returns: { previewOrderId, totalPriceCents }

3. Frontend navigates to payment page
   └─ Uses previewOrderId for payment processing

4. After payment success
   └─ POST /payments/finalize
      • Reads orders_preview
      • Creates final orders document
      • Returns orderId for tracking
```

**Critical Design: Server-Side Price Validation**

- Client sends item selections, NOT prices
- Server recalculates from authoritative menu data
- Prevents price manipulation attacks
- Ensures consistency with menu changes

### Key Relationships

```text
Cart Items ──references──> Menu Items (by menuItemId)
         └──validates──> Variants (by variant.id)
         └──validates──> Modifiers (by modifier.id)

Preview Order ──links to──> Customer (embedded)
              └──links to──> Origin (QR code / table)
              └──contains──> Validated Items (server-calculated prices)

Final Order ──created from──> Preview Order
            └──links to──> Payment Transaction (paymentId)
            └──routed to──> Stations (via stationTags)
```

---

## Question 2: Zero-Loss Data Ingestion Strategy

### Architecture: CDC-Based Streaming (No Application Changes)

**Why CDC over Application-Layer WAL:**

- ✅ Zero application code changes (NestJS stays simple)
- ✅ Guaranteed completeness (MongoDB oplog captures every write)
- ✅ Separation of concerns (ETL is infrastructure, not application logic)
- ✅ Already have MongoDB → Leverage existing transaction log

### Three-Layer Durability

| Layer | Technology | Durability Mechanism | Survives |
|-------|-----------|----------------------|----------|
| **Layer 1: OLTP** | MongoDB Replica Set | `writeConcern: { w: 'majority', j: true }` | Process crash, single-node failure |
| **Layer 2: Streaming** | Kafka (3 brokers) | `replication.factor=3`, `min.insync.replicas=2` | 2 broker failures, connector crash |
| **Layer 3: OLAP** | ClickHouse ReplacingMergeTree | Idempotent inserts via `_version` column | Duplicate inserts, consumer retries |

### Failure Recovery Scenarios

| Failure | Recovery Mechanism | Data Lost? | Recovery Time |
|---------|-------------------|------------|---------------|
| **Debezium crashes** | Resume from Kafka-stored offset (MongoDB oplog position) | ❌ No | < 30 seconds |
| **Kafka broker fails** | Leader election, Debezium reconnects | ❌ No | < 10 seconds |
| **MongoDB primary fails** | Replica set election, Debezium tails new primary from offset | ❌ No | < 30 seconds |
| **ClickHouse crashes** | Kafka retains messages (7 days), consumer replays from last committed offset | ❌ No | < 5 minutes |
| **Network partition** | Debezium buffers, resumes when network heals | ❌ No | Automatic |
| **Oplog rotates past offset** | ⚠️ Requires re-snapshot (prevented by 48hr+ oplog size) | Potential gap | Manual intervention |

**Preventing Oplog Rotation Loss:**

```javascript
// Increase MongoDB oplog to 200 GB (48+ hours retention at high volume)
db.adminCommand({ replSetResizeOplog: 1, size: 204800 });

// Monitor oplog lag (alert if < 4 hours headroom)
db.getReplicationInfo().timeDiff
```

### Debezium Configuration (Kafka Connect)

**Connector Settings:**

- Source: MongoDB oplog (via replica set member)
- Output: Kafka topic `ai_conversations.changes`
- Offset storage: Kafka `__consumer_offsets` (replicated 3x)
- Snapshot mode: `initial` (full snapshot on first run, then incremental)
- Resume capability: Automatic from last committed offset

**Change Event Structure:**

```json
{
  "op": "u",  // create, update, delete
  "after": { /* full updated document */ },
  "source": {
    "ts_ms": 1715868225123,  // MongoDB oplog timestamp
    "ord": 1,                // Oplog operation order
    "h": 1234567890          // Oplog hash (uniqueness)
  }
}
```

### Exactly-Once Processing

**Kafka → ClickHouse:**

```text
1. Consumer reads batch (100 messages) from Kafka
2. Inserts to ClickHouse with _version = kafka_offset
3. ClickHouse ReplacingMergeTree auto-deduplicates on (message_id, _version)
4. Consumer commits Kafka offset (only after successful insert)
5. On crash: Kafka re-delivers, ClickHouse ignores duplicates
```

**Result:** Exactly-once semantics end-to-end

### Real-Time Dashboard Updates (Parallel Path)

```text
Kafka ai_conversations.messages
      │
      ├──> ClickHouse consumer (analytics)
      └──> Socket.io broadcaster (live dashboard)
           └─> Emits to restaurant:{id}:admin room
           └─> Admin sees message in < 1 second
```

**Fallback:** Dashboard polls REST API every 5 seconds if WebSocket disconnects

---

## Question 3: Analytics Warehouse Schema

### Fact Tables (Star Schema)

| Table | Granularity | Key Metrics | Partitioning |
|-------|-------------|-------------|--------------|
| **fact_ai_messages** | Per AI message | `has_hallucination`, `hallucination_count`, `severity`, `tokens_used`, `response_time_ms` | `toYYYYMM(timestamp)` |
| **fact_ai_claims** | Per extracted claim | `claim_type` (item/price/modifier), `is_accurate`, `ground_truth_value` vs `claimed_value` | `toYYYYMM(timestamp)` |
| **fact_order_accuracy** | Per order | `order_accuracy_rate`, `intent_match_score`, `customer_corrections`, `had_hallucinations` | `toYYYYMM(order_timestamp)` |

### Dimension Tables (Ground Truth for Validation)

| Table | Purpose | SCD Type | Key Fields |
|-------|---------|----------|------------|
| **dim_menu_items** | Menu catalog | Type 2 (track price changes) | `item_id`, `price_cents`, `available_modifiers[]`, `is_current`, `valid_from`, `valid_to` |
| **dim_modifiers** | Valid modifier options | Type 2 | `modifier_id`, `price_cents`, `valid_for_items[]`, `is_current` |
| **dim_restaurants** | Restaurant metadata | Type 1 | `restaurant_id`, `name`, `concept` |
| **dim_locations** | Location details | Type 1 | `location_id`, `working_hours[]`, `features[]` |

**Why SCD Type 2 for Menu Items:**

- Track menu price changes over time
- Validate AI claims against menu state at conversation time
- Detect when AI references outdated prices (hallucination type: `outdated_info`)

### Aggregate Tables (Pre-Computed Metrics)

| Table | Update Frequency | Aggregation Level | Purpose |
|-------|------------------|-------------------|---------|
| **agg_ai_performance_realtime** | Every 60 seconds | Per minute, per restaurant, per AI model | Real-time dashboard queries |
| **agg_hallucinations_by_hour** | Every hour | Per hour, per hallucination type | Trend analysis |
| **agg_order_accuracy_daily** | Daily (2 AM) | Per day, per restaurant | Historical reporting |

**Materialized View (Auto-Update):**

```sql
CREATE MATERIALIZED VIEW mv_ai_performance_realtime
TO agg_ai_performance_realtime AS
SELECT
    toStartOfMinute(timestamp) as time_bucket,
    restaurant_id,
    ai_model,
    count() as total_messages,
    sumIf(1, has_hallucination = 1) / count() as hallucination_rate,
    sum(hallucination_count * severity_weight) / (count() * 3) as weighted_hallucination_rate,
    -- ... more metrics
FROM fact_ai_messages
GROUP BY time_bucket, restaurant_id, ai_model;
```

**Query Performance:**

- Pre-aggregated queries: < 50ms
- Raw fact table queries: < 500ms (with proper indexes)

### Schema Indexes

```sql
-- Fast conversation lookups
CREATE INDEX idx_conversation ON fact_ai_messages(conversation_id) TYPE bloom_filter;

-- Fast hallucination filtering
CREATE INDEX idx_hallucination ON fact_ai_messages(has_hallucination) TYPE set(0);

-- Time-range queries
ORDER BY (restaurant_id, timestamp, conversation_id, message_id)
PARTITION BY toYYYYMM(timestamp)
```

---

## Real-Time Metrics Calculation

### Hallucination Detection Pipeline

**Step 1: Claim Extraction (NLP)**

| Claim Type | Extraction Method | Example |
|------------|-------------------|---------|
| **Menu Items** | Fuzzy match against menu catalog | "Vegan Pizza" → lookup in dim_menu_items |
| **Prices** | Regex: `\$?(\d+\.?\d{0,2})` | "$12.99" → compare to menu.price_cents |
| **Modifiers** | Pattern: `(extra\|no\|with\|add) (\w+)` | "extra cheese" → validate in dim_modifiers |
| **Availability** | Keyword: `(open\|closed\|delivery\|pickup)` | "we are open" → check location.working_hours |

**Step 2: Ground Truth Validation (Stream-Table Join)**

```text
For each claim:
  1. Query ClickHouse dimension table
     SELECT * FROM dim_menu_items
     WHERE item_name = extracted_entity
       AND is_current = 1

  2. Compare claimed value vs ground truth
     - Item exists? YES ✅ / NO ❌ (phantom_item)
     - Price matches? YES ✅ / NO ❌ (wrong_price)
     - Modifier valid? YES ✅ / NO ❌ (invalid_modifier)

  3. Classify hallucination severity
     - Critical: wrong_price, phantom_item
     - Major: invalid_modifier, false_availability
     - Minor: incorrect_ingredient_detail
```

**Step 3: Aggregate Metrics**

### Key Metric Formulas

**Hallucination Rate:**

```text
Simple Rate = (Messages with hallucinations) / (Total AI messages)

Weighted Rate = SUM(hallucinations × severity_weight) / (Total messages × 3)

Where severity_weight:
  critical = 3
  major = 2
  minor = 1
```

**Order Accuracy:**

```text
Order Accuracy = (Accurate orders) / (Total AI-assisted orders)

Where "Accurate order" = ALL of:
  ✅ All mentioned items exist in menu
  ✅ All quoted prices match menu
  ✅ All suggested modifiers valid
  ✅ No customer corrections
  ✅ Order completed successfully
```

**Component Scores:**

```text
Intent Match Score = (Recommended items in final order) / (Total items in order)
Price Accuracy = (Correct prices quoted) / (Total prices quoted)
Modifier Accuracy = (Valid modifiers suggested) / (Total modifiers suggested)
```

### Real-Time Dashboard Queries

**1. Current Hallucination Rate (Last Hour):**

```sql
SELECT
    sum(messages_with_hallucinations) / sum(total_messages) as rate,
    sum(weighted_hallucination_rate * total_messages) / sum(total_messages) as weighted_rate
FROM agg_ai_performance_realtime
WHERE time_bucket >= now() - INTERVAL 1 HOUR;
```

**2. Order Accuracy Breakdown:**

```sql
SELECT
    countIf(is_accurate_order = 1) / count() as accuracy_rate,
    avg(intent_match_score) as avg_intent,
    avg(price_accuracy) as avg_price,
    countIf(customer_corrections > 0) / count() as correction_rate
FROM fact_order_accuracy
WHERE order_timestamp >= now() - INTERVAL 24 HOUR;
```

**3. Critical Hallucinations (Alert Feed):**

```sql
SELECT
    timestamp,
    restaurant_id,
    conversation_id,
    hallucination_types,
    content as ai_message
FROM fact_ai_messages
WHERE hallucination_severity = 'critical'
  AND timestamp >= now() - INTERVAL 1 HOUR
ORDER BY timestamp DESC
LIMIT 10;
```

### Alerting Thresholds

| Alert | Condition | Severity | Action |
|-------|-----------|----------|--------|
| Hallucination Rate Spike | > 5% in 5 minutes | Critical | Page on-call, investigate menu data |
| Order Accuracy Drop | < 90% in 1 hour | Critical | Check AI model, review recent changes |
| Critical Hallucination Storm | > 10 critical in 1 minute | Critical | Auto-disable AI for restaurant |
| Systematic Pattern | Same hallucination 10+ times | Warning | Create AI training feedback ticket |

---

## Technology Justification

### Why Change Data Capture (CDC)?

| Requirement | CDC Approach | Application-Layer WAL Approach |
|-------------|--------------|-------------------------------|
| **Zero application changes** | ✅ Yes (tails oplog) | ❌ No (add WAL + queue code) |
| **Guaranteed completeness** | ✅ Yes (oplog = source of truth) | ⚠️ Depends on app discipline |
| **Historical backfill** | ✅ Easy (oplog or snapshot) | ❌ Difficult (WAL has limited retention) |
| **Separation of concerns** | ✅ ETL is infrastructure | ❌ ETL logic in application |
| **Multiple consumers** | ✅ Kafka supports many | ⚠️ Each needs separate queue publish |

**Decision:** CDC for cleaner architecture and zero-risk deployment

### Why ClickHouse for Analytics?

| Capability | ClickHouse | PostgreSQL | MongoDB |
|------------|-----------|------------|---------|
| **Analytical query speed** | 100-1000x faster | Baseline | Slow for aggregations |
| **Real-time inserts** | 10K+ rows/sec | 1K rows/sec | High (but not for analytics) |
| **Compression** | 10x (columnar) | 2-3x | Minimal |
| **Complex aggregations** | Native (ARRAY JOIN, etc) | Standard SQL | Limited |
| **Cost (100M rows)** | $ | $$$ | $$ |

**Decision:** ClickHouse for sub-second analytics at scale

### Why Kafka?

| Feature | Kafka | Redis Streams | SQS |
|---------|-------|---------------|-----|
| **Message replay** | ✅ 7 days | ⚠️ Limited | ❌ No |
| **Exactly-once** | ✅ Yes | ⚠️ Manual | ❌ No |
| **Ecosystem** | ✅ Huge (Debezium, ksqlDB, Flink) | Small | AWS-only |
| **Multi-consumer** | ✅ Consumer groups | ✅ Yes | ⚠️ Fan-out complexity |

**Decision:** Kafka for enterprise-grade streaming

---

## Scalability & Cost Summary

### Cost Projection (100K conversations/day)

| Component | Monthly Cost | Notes |
|-----------|--------------|-------|
| MongoDB Atlas M40 (3 nodes) | $1,110 | Source database |
| Kafka (3 brokers, m5.xlarge) | $660 | Event streaming |
| Debezium (3 Kafka Connect workers) | $330 | CDC connectors |
| ClickHouse (3 nodes, c5.2xlarge) | $1,050 | Analytics warehouse |
| Kafka Streams (2 processors) | $220 | Stream processing |
| **Total Infrastructure** | **$3,370/month** | ~$0.0011 per conversation |

**OpenAI API Costs** (separate): ~$1,200/month (GPT-4 Turbo @ $0.04/conversation)

### Performance Characteristics

| Metric | Value | Target |
|--------|-------|--------|
| **End-to-end latency** | < 3 seconds | MongoDB → ClickHouse queryable |
| **Dashboard update rate** | 1 second | Live conversation feed |
| **Query response time** | < 100ms | Pre-aggregated metrics |
| **Throughput** | 10K messages/sec | Sustained, with headroom |
| **Data retention** | Hot: 90 days, Cold: 2 years | Automatic archival to S3 |

### Scalability Thresholds

| Scale | Breaking Point | Solution |
|-------|----------------|----------|
| **10K msg/sec** | Redis single-node | Already using Kafka ✅ |
| **100M documents** | MongoDB single replica | Shard on `restaurant_id` |
| **1 TB/month growth** | Storage cost | Archive to S3 Glacier ($0.004/GB) |
| **Global deployment** | Latency | Multi-region with regional ClickHouse |

---

## Conclusion

This architecture delivers:

- ✅ **Zero-Loss Guarantee** through 3-layer durability (MongoDB → Kafka → ClickHouse)
- ✅ **Real-Time Analytics** with sub-second hallucination detection and order accuracy scoring
- ✅ **Separation of Concerns** via CDC (no application changes, infrastructure handles ETL)
- ✅ **Production-Ready** using battle-tested components (Debezium, Kafka, ClickHouse)
- ✅ **Cost-Efficient** at $0.001 per conversation ($3,370/mo for 100K/day)
- ✅ **Scalable** to 10x volume with horizontal scaling

**Key Innovation:**
Stream processing (Kafka Streams) validates every AI claim against ground truth in real-time, enabling immediate detection of hallucinations and automatic alerting before customers are affected.
