---
slug: /snowflake-tasks-cron-scheduling
title: Snowflake Tasks and Cron Job Scheduling
description: Build automated Snowflake workflows using Tasks with cron-based scheduling and DAG orchestration.
created: 2026-08-19
updated: 2026-08-19
---

A Snowflake cron job workflow is built using Snowflake Tasks, which are first-class database objects that execute a single SQL statement or stored procedure on a scheduled basis. The core of this workflow relies on the `SCHEDULE = 'USING CRON <expr> <time_zone>'` clause to trigger the root task, which can then orchestrate a Directed Acyclic Graph (DAG) of downstream dependent tasks.

## Cron Expression Format

Snowflake supports a standard five-field cron syntax followed by a mandatory time zone:

```text
USING CRON 0 2 * * * UTC
           │ │ │ │ │ └── Time Zone (e.g., UTC, America/Los_Angeles)
           │ │ │ │ └──── Day of the week (0-6, Sunday to Saturday)
           │ │ │ └────── Month (1-12 or JAN-DEC)
           │ │ └──────── Day of the month (1-31 or L for last day)
           │ └────────── Hour (0-23)
           └──────────── Minute (0-59)
```

## Complete Workflow Implementation

### Step 1: Create the Root Task (The Cron Trigger)

The root task initiates the workflow pipeline. It is the only task in the chain that requires a `SCHEDULE` parameter.

```sql
CREATE OR REPLACE TASK my_root_cron_task
  WAREHOUSE = my_compute_wh
  SCHEDULE = 'USING CRON 0 6 * * 1-5 America/New_York' -- Every weekday at 6:00 AM EST
AS
  CALL prc_extract_staging_data();
```

### Step 2: Create Dependent Tasks (Building the DAG)

Downstream tasks are linked to their parent task using the `AFTER` keyword instead of a cron schedule. They execute automatically as soon as the parent finishes successfully.

```sql
CREATE OR REPLACE TASK my_child_task_transform
  WAREHOUSE = my_compute_wh
  AFTER my_root_cron_task
AS
  INSERT INTO analytics.sales_fact SELECT * FROM staging.stg_sales;
```

### Step 3: Activate the Workflow Pipeline

By default, all new tasks are created in a `SUSPENDED` state. You must enable them starting from the bottom of the tree up to the root task.

```sql
-- Resume child tasks first
ALTER TASK my_child_task_transform RESUME;

-- Resume the root task last to start the cron engine
ALTER TASK my_root_cron_task RESUME;
```

## Monitoring and Managing the Workflow

**Check scheduled executions** via the `TASK_HISTORY` table function:

```sql
SELECT *
FROM TABLE(information_schema.task_history(task_name=>'MY_ROOT_CRON_TASK'))
ORDER BY scheduled_time DESC;
```

**Overlap guard rails:** By default, Snowflake sets `OVERLAP_POLICY = NO_OVERLAP`. If a prior cron run is still processing when the next scheduled minute arrives, the new run is safely skipped to prevent race conditions.

**Pause the pipeline:** To freeze the workflow, suspend the root task:

```sql
ALTER TASK my_root_cron_task SUSPEND;
```

## Links

- [Snowflake Terms - tasks](data-warehouses/snowflake/terms.md)
- [Snowflake Documentation](data-warehouses/snowflake/documentation.md)
