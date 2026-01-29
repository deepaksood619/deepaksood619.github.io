## Demo

## Component 1: Traffic Generator (POS Simulator)

We will use the **Datagen Source Connector** available in Confluent Cloud.

- **Purpose:** Simulate a stream of loan applications.
- **Configuration:** We define a custom Avro schema for the `loan_applications` topic.
    - `applicant_type`: Randomly distributed between `KNOWN` and `UNKNOWN`.  
    - `amount`: Random values between $100 and $5000.  
    - `ssn`: Random strings (mocking PII).
    - **Scale:** We will configure Datagen to produce 10 events/second to demonstrate the system handling a continuous stream.

## Component 2: Mock Credit Bureau (The External API)

We need a REST endpoint that Flink can call.

- **Tool:** A simple Python (FastAPI) or Node.js container running on a cloud function or local tunnel (e.g., ngrok).
- **Behavior:**
    - Endpoint: `POST /v1/score`  
    - Input: `{"ssn": "..."}`  
    - Logic: Sleep for `random(200, 1000)` milliseconds. This artificially introduces latency to prove the Async I/O capability.  
    - Output: `{"score": random(300, 850)}`
    - **Why this matters:** This mock allows us to visually demonstrate that Flink is processing multiple records in parallel despite the 1-second delay per request.

## Component 3: The Flink Logic (SQL)

We will execute the following Flink SQL statements in the Confluent Cloud Workspace during the demo.

**Step A: Define the Tables**

```sql
-- The Input Stream (From Datagen)
CREATE TABLE LoanApps (
  request_id STRING,
  applicant_type STRING,
  amount DOUBLE,
  ssn STRING,
  ts TIMESTAMP(3),
  WATERMARK FOR ts AS ts - INTERVAL '5' SECOND
) WITH (
  'kafka.topic' = 'loan_applications',
  'value.format' = 'avro',
  'scan.startup.mode' = 'latest-offset'
);

-- The Output Stream
CREATE TABLE LoanDecisions (
  request_id STRING,
  status STRING,
  reason STRING
) WITH (
  'kafka.topic' = 'loan_decisions',
  'value.format' = 'json'
```

**Step B: The Decision Logic (Hybrid Join)**

This query demonstrates the conditional logic and the external lookup.

```sql
INSERT INTO LoanDecisions
SELECT 
  L.request_id,
  CASE 
    -- Logic for Known Customers (Simplified for Demo)
    WHEN L.applicant_type = 'KNOWN' THEN 'APPROVED'
    -- Logic for Unknown: Check Credit Score from External API
    WHEN L.applicant_type = 'UNKNOWN' AND Bureau.score > 700 THEN 'APPROVED'
    ELSE 'DENIED'
  END AS status,
  CASE
    WHEN L.applicant_type = 'UNKNOWN' THEN 'Based on External Bureau Score: ' |

| CAST(Bureau.score AS STRING)
    ELSE 'Internal Customer Check'
  END AS reason
FROM LoanApps L
-- The Async Lookup Join
LEFT JOIN LATERAL TABLE(
  KEY_SEARCH_AGG(
    'MockBureauConnection',  -- Defined Connection to our Mock API
    DESCRIPTOR(ssn),         -- The Key to lookup
    L.ssn,                   -- The input field
    MAP['async_enabled', 'true', 'client_timeout', '2000'] -- Async Config
  )
) AS Bureau ON L.applicant_type = 'UNKNOWN'; -- Only call for Unknowns
```

_Note: The `ON L.applicant_type = 'UNKNOWN'` clause is an optimization to prevent calling the API for known customers._

## Demo Walkthrough Script

1. **Show the Latency:** Open the logs of the Mock Credit Bureau. Show requests taking ~500ms.
2. **Show the Stream:** Open Confluent Cloud Console. Show Datagen producing events.
3. **Run the Query:** Submit the Flink SQL job.
4. **Prove Performance:** Switch to the `loan_decisions` topic view. Show that decisions are arriving rapidly (high throughput) despite the individual latency of the API calls shown in step 1. This definitively proves the Async I/O architecture works.
