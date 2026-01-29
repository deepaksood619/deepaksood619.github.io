# Appendix

**Detailed Technical Appendix: Implementation Reference**

## A.1 Comparison of Stream Processing Options

The following table details the technical evaluation performed to select the processing engine for BFB.

|**Feature**|**Apache Flink (Recommended)**|**ksqlDB**|**Kafka Streams**|**Spark Structured Streaming**|
|---|---|---|---|---|
|**Primary Use Case**|Complex stateful processing, Event-driven apps.|Streaming Database, Simple SQL transformations.|Microservices, Java/Kotlin apps.|Micro-batch processing, Analytics.|
|**External Async I/O**|**Native Support.** High throughput via non-blocking I/O.|Limited. UDFs are synchronous/blocking (performance bottleneck).|Supported but requires complex manual threading code.|Supported but micro-batch architecture increases minimum latency.|
|**State Management**|RocksDB backend. Handles TBs of state.|RocksDB backend. Good state handling.|RocksDB. Tied to the application instance.|HDFS/S3 checkpoints. Higher latency for state updates.|
|**Join Support**|Interval, Temporal, Window, Lookup Joins.|Stream-Stream, Stream-Table.|Stream-Stream, Stream-Table.|Stream-Stream, Stream-Static.|
|**Latency**|**True Streaming (Event-at-a-time).** Sub-second.|True Streaming. Sub-second.|True Streaming. Sub-second.|Micro-batch (Seconds).|
|**Deployment Model**|Fully Managed in Confluent Cloud (Serverless).|Fully Managed (Confluent Cloud).|Self-managed library (embedded in app).|Managed (Databricks) or Self-managed.|

_Justification:_ Spark was rejected due to its micro-batch architecture, which introduces inherent latency unacceptable for POS. Kafka Streams was rejected due to the complexity of implementing non-blocking Async I/O manually. ksqlDB was rejected because its UDF architecture blocks processing threads during external API calls. Flink remains the only viable option for high-throughput, low-latency asynchronous enrichment.

## A.2 Data Lineage and Governance

Using Confluent **Stream Lineage**, BFB can visualize the data flow.

- **Node 1 (Source):** `POS_Connector` (Datagen) -> Topic: `loan_applications`
- **Node 2 (Process):** `Flink_Router_Job`
    - -> Path A: Topic `internal_checks`  
    - -> Path B: Topic `external_checks`
    - **Node 3 (Process):** `Flink_Enrichment_Job` (The Async Bureau Lookup)
- **Node 4 (Sink):** Topic `loan_decisions` -> `POS_Response_Service`

This visualization is automated in Confluent Cloud, providing immediate operational visibility into throughput and lag at every stage of the BNPL pipeline.

## A.3 Mocking the External API: Technical Detail

To replicate the "Unknown User" challenge without a real Equifax subscription, we use a simple Python simulation script.

**`mock_bureau.py`**

```python
from fastapi import FastAPI
from pydantic import BaseModel
import random
import asyncio

app = FastAPI()

class CreditRequest(BaseModel):
    ssn: str

@app.post("/v1/score")
async def get_score(req: CreditRequest):
    # Simulate Network Latency (The Core Challenge)
    # Random delay between 200ms and 1.5 seconds
    delay = random.uniform(0.2, 1.5)
    await asyncio.sleep(delay)
    # Logic to make demo deterministic if needed
    # e.g. SSN ending in 9 always fails
    if req.ssn.endswith("9"):
        return {"ssn": req.ssn, "score": 450}
        
    return {
        "ssn": req.ssn,
        "score": random.randint(300, 850)
    }
```

_Deployment:_ This script is containerized (Docker) and deployed to a cloud run service (AWS Lambda / Google Cloud Run) to provide a publicly accessible HTTPS endpoint that Flink can query via the `KEY_SEARCH_AGG` function or REST connector.

## A.4 Flink "Create Connection" Syntax

In Confluent Cloud, we secure the credentials for this external API using the `CREATE CONNECTION` statement. This abstracts the URL and Auth headers from the SQL logic.

```sql
CREATE CONNECTION CreditBureauConn WITH (
  'type' = 'rest',
  'endpoint' = 'https://api.mock-bureau.com',
  -- For a real bureau, we would use proper auth
  -- 'api-key' = '<SECRET_API_KEY>' 
  'auth.type' = 'none' 
);
```

This ensures that sensitive API keys are stored in the Confluent Secret Store and not hardcoded in the SQL queries, adhering to BFB's security policies.

## A.5 Handling Scale: The "Thundering Herd"

If a marketing campaign drives 100,000 users to apply simultaneously, the external Credit Bureau API might rate-limit BFB.

**Architecture Mitigation:**

1. **Flink Backpressure:** Flink's Async I/O operator has a `capacity` setting (buffer size). If the external API slows down or the buffer fills, Flink will naturally exert backpressure upstream.
2. **Impact:** The Kafka consumer in Flink slows down. The `loan_applications` topic accumulates lag.
3. **Result:** No data is lost. The system processes at the maximum rate the Credit Bureau allows. BFB can monitor `consumer_lag` metrics in Confluent Cloud to alert operations if the delay becomes unacceptable, triggering discussions with the Bureau for higher rate limits.

This native handling of backpressure is a key advantage of the EDA approach over synchronous REST services, which would simply time out and crash under the load.
