---
slug: /about-deepak-sood/projects/92-stashfin-redshift-to-snowflake-migration
title: "Stashfin: Redshift to Snowflake Migration"
description: Explore Stashfin's migration from Redshift to Snowflake to overcome BI reporting delays and enhance data processing capabilities.
created: 2026-05-29
last_update: 2026-05-29
---
## Slide 1: Stashfin Context & Challenge

### About Stashfin

- **Industry**: Digital Lending / FinTech
- **Scale**: Millions of loan applications, billions in loan disbursals
- **Data**: High-velocity transaction data, credit scoring models, compliance reporting

### The Redshift Bottleneck

**Business Pain Points:**

- 📊 **BI Reports taking 30+ minutes** during peak hours (loan approval delays)
- 💰 **Rising infrastructure costs** - cluster always-on for 24/7 operations
- 🔄 **ETL jobs competing** with analytics queries (resource contention)
- 📈 **Scaling limitations** - unable to handle seasonal loan spikes (festive seasons)
- 🛠️ **DevOps overhead** - weekly VACUUM operations impacting availability

**Regulatory Requirement**: Real-time fraud detection + audit trail retention

---

## Slide 2: Migration Approach - Phased Rollout

### Phase 1: Analytics Workloads (Weeks 1-4)

**Target**: Non-critical BI dashboards & historical reports

- Migrated 12TB of historical transaction data via S3
- Converted 45 Tableau dashboards (minimal stored procedure dependencies)
- **Result**: 5x faster dashboard load times, zero user complaints

### Phase 2: Credit Scoring Models (Weeks 5-7)

**Target**: ML feature pipelines & model training workloads

- Rewrote 8 PL/pgSQL stored procedures → Snowflake Python UDFs
- Integrated Snowpark for in-database ML feature engineering
- **Result**: Model training time reduced from 6 hours → 45 minutes

### Phase 3: Transaction Processing (Weeks 8-10)

**Target**: Near real-time loan application processing

- Implemented Snowpipe for continuous ingestion from Kafka → S3 → Snowflake
- Set up multi-cluster warehouses (auto-scale 1-10 clusters)
- **Result**: Loan approval SLA improved from 15 min → 3 min

### Phase 4: Compliance & Archival (Weeks 11-12)

**Target**: Regulatory reporting & 7-year data retention

- Leveraged Time Travel (90 days) + Fail-Safe (7 days)
- Configured external tables for cost-effective long-term archival in S3
- **Result**: Audit query performance 20x faster, storage costs 40% lower

---

## Slide 3: Technical Migration Details

### Code Conversion Highlights

**Biggest Challenge: Credit Risk Stored Procedures**

```sql
-- Before (Redshift PL/pgSQL - 850 lines)
CREATE OR REPLACE PROCEDURE calculate_credit_score(user_id INT)
AS $$
DECLARE
  -- Complex cursor logic, temp tables, loops
BEGIN
  -- 200+ lines of procedural code
END;
$$ LANGUAGE plpgsql;

-- After (Snowflake JavaScript - 120 lines)
CREATE OR REPLACE PROCEDURE calculate_credit_score(user_id NUMBER)
RETURNS NUMBER
LANGUAGE JAVASCRIPT
AS $$
  // Rewritten using set-based operations
  // Leverage Snowflake's native JSON functions
  // 70% code reduction via SQL optimization
$$;
```

### Data Migration Stats

- **Volume**: 35TB total data (12TB historical + 23TB active)
- **Method**: Redshift UNLOAD → S3 (Parquet, gzip) → Snowflake COPY
- **Duration**: 18 hours for initial load (parallelized across 50 virtual warehouses)
- **Validation**: 100% row count match, zero data loss
- **Cutover**: 2-hour maintenance window on Sunday 2 AM

---

## Slide 4: Business Impact & ROI

### Quantified Results (6 Months Post-Migration)

#### Performance Gains

| Metric | Before (Redshift) | After (Snowflake) | Improvement |
|--------|-------------------|-------------------|-------------|
| **Dashboard Load Time** | 45 sec | 4 sec | **11x faster** |
| **Loan Approval SLA** | 15 min | 3 min | **5x faster** |
| **ML Model Training** | 6 hours | 45 min | **8x faster** |
| **Peak Hour Queries** | 120/min (throttled) | 1,200/min | **10x concurrency** |

#### Cost Optimization

- **Infrastructure**: $42K/month → $28K/month (**33% reduction**)
- **DevOps**: 20 hrs/week → 2 hrs/week (maintenance elimination)
- **Storage**: $8K/month → $4.8K/month (40% savings via compression)
- **Total Annual Savings**: **$250K+**

#### Business Value

✅ **Seasonal Scalability**: Auto-scaled from 2 → 10 clusters during Diwali season (3x loan volume)
✅ **Regulatory Compliance**: Instant audit reports (previously 2-day turnaround)
✅ **Data Democratization**: 150+ business users now self-serve (was 20)
✅ **New Revenue Streams**: Real-time cross-sell offers (personalization engine enabled)

---

## Slide 5: Lessons Learned & Best Practices

### What Went Well ✅

1. **S3-based migration** - Reliable, resumable, no data loss
2. **Phased approach** - De-risked cutover, early wins built momentum
3. **Snowpipe for continuous data** - Zero-code CDC solution
4. **Auto-scaling** - Handled seasonal spikes without pre-provisioning
5. **Python UDFs** - Faster stored procedure conversion than rewriting in Snowflake Scripting

### Challenges & Mitigations ⚠️

| Challenge | Mitigation |
|-----------|----------|
| **Stored Procedure Complexity** | Hired Snowflake partner for 2-week sprint |
| **BI Tool Connectors** | Upgraded Tableau to latest version (native Snowflake support) |
| **Cost Surprises** | Implemented resource monitors with 80% budget alerts |
| **User Training** | 3-day workshop for analysts on Snowflake SQL differences |

### Recommendations for Similar Migrations

1. **Start with read-only analytics** - Build confidence before touching transactional data
2. **Invest in data validation scripts** - Automated row count & checksum comparisons
3. **Over-communicate with stakeholders** - Weekly status updates, demo sessions
4. **Keep Redshift read-only for 1 month** - Safety net for edge cases
5. **Budget 20% extra time for stored procedures** - Underestimated complexity

---

## Key Takeaway

**Stashfin's Snowflake migration delivered:**

- ⚡ **10x better performance** for mission-critical operations
- 💰 **$250K+ annual cost savings**
- 🚀 **Business agility** - launched 3 new data products in 6 months
- ✅ **Zero customer-facing incidents** during migration

**Migration Duration**: 12 weeks (planning to production)
**Team Size**: 4 engineers + 1 Snowflake consultant
**Business Downtime**: 2 hours (single cutover window)
