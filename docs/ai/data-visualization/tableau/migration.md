---
slug: /ai/data-visualization/tableau/migration
title: Migration
description: Learn how to successfully migrate Tableau dashboards from Amazon Redshift
  to Snowflake, ensuring SQL compatibility, performance, and security are maintained.
created: '2026-06-12'
last_update: '2026-06-13'
---

Migrating Tableau dashboards from Amazon Redshift to Snowflake involves transitioning the underlying data connection while ensuring SQL compatibility, performance optimization, and security mapping remain intact.

Here is the high-level step-by-step process to guide your migration strategy.

## High-Level Migration Process

### 1. Phase 1: Assessment & Inventory

- **Audit Dashboards:** Identify all workbooks using Redshift connections. Document whether they use **Live** connections or **Extracts**.

- **Analyze Custom SQL:** Look for workbooks using Custom SQL. Redshift is based on PostgreSQL syntax, whereas Snowflake has its own SQL dialect. Custom SQL will require manual review for syntax mismatches (e.g., date functions, string concatenation, regular expressions).

- **Map Security Rules:** Note any Row-Level Security (RLS) implemented via Redshift database views or Tableau user filters to replicate them in Snowflake.

### 2. Phase 2: Snowflake Environment Preparation

- **Warehouse Sizing:** Set up dedicated Snowflake Virtual Warehouses for Tableau. Enable auto-suspend (e.g., 1–5 minutes) to optimize costs.

- **Network & Security:** Ensure Snowflake network policies allow traffic from your Tableau Server/Cloud IPs. Set up authentication (Username/Password or OAuth/SSO).

- **Replicate Data Structure:** Ensure all schemas, tables, and views are fully migrated and populated in Snowflake with identical naming conventions where possible to minimize mapping effort.

### 3. Phase 3: Tableau Connection Migration

- **Install Drivers:** Ensure the latest Snowflake driver is installed on all Tableau Desktop machines and Tableau Server nodes (not required for Tableau Cloud).

- **Update Data Sources:** * Open the workbook in Tableau Desktop.

    - Add a new data source connecting to Snowflake.

    - Replace the Redshift tables/Custom SQL with the corresponding Snowflake objects.

- **Use "Replace Data Source":** Right-click the old Redshift data source and select **Replace Data Source** to seamlessly swap it with the new Snowflake connection. This preserves calculated fields, hierarchies, and folder structures.

### 4. Phase 4: Validation & Optimization

- **Syntax and Data Verification:** Check for broken calculated fields (indicated by a red exclamation mark) caused by dialect differences. Verify row counts and aggregate metrics against the Redshift baseline.

- **Performance Tuning:** For live connections, leverage Snowflake’s caching layers (Result Cache and Metadata Cache). Use appropriate warehouse sizing for heavy extract refreshes.

- **Publish & Schedule:** Publish the updated workbooks to Tableau Server/Cloud and re-configure extract refresh schedules.

## Scoping

To accurately scope the timeline for migrating a single Tableau dashboard from Redshift to Snowflake, you need to look at three buckets: **Technical Complexity**, **Data Volume/Security**, and **Testing/Sign-off**.

Here are the direct pointer questions to ask the dashboard owner or developer to pinpoint the exact level of effort.

### 1. Data Layer & SQL Complexity

- **Does the workbook use standard tables/views, or does it rely on Custom SQL?** (Custom SQL requires manual syntax translation from Redshift/PostgreSQL to Snowflake dialect).

- **If it uses Custom SQL, how many lines of code and how many joins are involved?**

- **Are there any `RAWSQL` pass-through functions used in Tableau calculated fields?** (These pass commands directly to the underlying database and will break if they use Redshift-specific syntax).

- **How many distinct data sources (connections) are embedded within this single workbook?** ### 2. Connection Type & Performance

- **Is the dashboard using a Live connection or a Tableau Extract?**

- **If it's an Extract, how large is the data volume (in rows/GB), and how long does it currently take to refresh?** (Heavy extracts require time to test refresh stability and optimize Snowflake warehouse sizing).

- **For Live connections, are there complex, nested Level of Detail (LOD) expressions?** (LODs translate into heavy SQL queries that need to be performance-tested against Snowflake's virtual warehouses).

### 3. Security & Governance

- **Is Row-Level Security (RLS) implemented within this dashboard?**

- **If yes, is RLS handled via Tableau user filters, or is it driven by database entitlement tables that need to be re-mapped in Snowflake?**

- **Are the Snowflake service accounts, roles, and schema permissions already fully provisioned, or is there a dependency on the DBA/DevOps team?**

### 4. Scale of the Workbook & QA

- **How many individual worksheets and dashboard tabs are contained in this single workbook?** (More tabs mean more visual elements to manually validate for formatting alignment).

- **Is there an existing QA baseline or automated script to verify data parity (e.g., comparing row counts and aggregate KPIs between Redshift and Snowflake)?**

- **Who is the business stakeholder responsible for User Acceptance Testing (UAT), and what is their availability for final sign-off?**

### Timeline Scoping Cheat Sheet (General Rule of Thumb)

- **Low Complexity (1–3 hours):** Standard tables, 1 data source, no Custom SQL, no RLS, Extract connection, few tabs.

- **Medium Complexity (1–2 days):** 2–3 data sources, minor Custom SQL (easily converted functions), Live connection requiring minor warehouse tuning, light RLS.

- **High Complexity (3–5+ days):** Massive Custom SQL blocks with incompatible functions (like complex regex or date logic), heavy RLS, dozens of tabs, and extensive UAT requirements.
