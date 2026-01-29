# Architectural Design

![Architectural Design](../../../media/Screenshot%202026-01-29%20at%2011.06.59%20PM.png)

## High-Level Architecture Diagram Description

The architecture follows a "Split-Enrich-Merge" pattern, designed to isolate the high-latency external dependencies from the low-latency internal logic.

1. **Ingestion Layer:** POS terminals send Loan Application events to the `loan_applications` topic in Confluent Cloud via a secure API Gateway (using Confluent REST Proxy or native Producer clients).
2. **Routing Layer (Flink):** A Flink job consumes the `loan_applications` topic. It inspects the payload to determine if the applicant is `KNOWN` or `UNKNOWN`. It splits the stream into two distinct logical paths: `internal_processing_stream` and `external_processing_stream`.
3. **Internal Enrichment Layer (The Fast Lane):**
    - The `internal_processing_stream` is joined with the `customer_360` topic.  
    - The `customer_360` topic is populated by the Oracle CDC connector, containing real-time snapshots of existing customers.  
    - The join is a **Temporal Join**, ensuring the application is evaluated against the customer's status _at the exact time of application_.
4. **External Enrichment Layer (The Async Lane):**
    - The `external_processing_stream` is processed by a Flink job utilizing **Async I/O**.  
    - This job makes a non-blocking HTTP request to the Credit Bureau API.  
    - While waiting for the bureau to respond (e.g., 500ms), Flink continues to process other records.  
    - Once the response arrives, the event is enriched with the credit score.
5. **Decisioning & Egress:**
    - Both streams merge into a final Scoring Operator (Flink SQL `CASE` logic).  
    - The result (`APPROVED` / `DECLINED`) is written to the `loan_decisions` topic.  
    - The POS system (listening via WebSocket or long-polling) receives the decision.

## Detailed Data Flow and Schema Design

**Data Contract: The Loan Application Event**

Defining the schema is the first step in ensuring system stability. We utilize Avro for its compact binary format and schema evolution capabilities.

```json
{
  "namespace": "com.bfb.pos",
  "name": "LoanApplication",
  "type": "record",
  "fields":}},
    {"name": "applicant_details", "type": "com.bfb.PII.Applicant"} 
  ]
}
```

_Note the `applicant_details` field. This contains sensitive PII (SSN, Name, Address) and must be encrypted._

## Handling The Known Customer: The Temporal Join Pattern

For known customers, BFB requires sub-millisecond decisioning. Querying the Oracle database directly for every POS transaction is an anti-pattern; it introduces latency and creates a dependency that can crash the core banking system under load.

Instead, we use the **Side-Car Database Pattern** implemented via Kafka.

1. **CDC Ingestion:** The Oracle CDC Source Connector monitors the Redo Logs of the core banking system. Any change to a customer's balance or risk tier is immediately captured and written to the `customer_360` Kafka topic.
2. **Compacted Topic:** This topic is configured with `cleanup.policy=compact`. This ensures that we always retain the _latest_ state for every `customer_id`, effectively turning the Kafka topic into a high-performance, streaming database table.
3. **Flink Temporal Join:**

In Flink SQL, we model this topic as a versioned table. When a loan application arrives at `T1`, Flink joins it with the state of the customer record as it existed at `T1`.

```sql
SELECT 
  L.application_id, 
  C.credit_limit - C.current_balance AS available_credit
FROM loan_applications AS L
JOIN customer_360 FOR SYSTEM_TIME AS OF L.timestamp AS C
ON L.customer_id = C.customer_id;
```

This operation happens entirely within Flink's managed state, requiring no external network calls, ensuring maximum speed.

## Handling The Unknown Applicant: The Async I/O Pattern

This workflow represents the highest technical risk due to the reliance on external Credit Bureau APIs. These APIs are slow (200ms - 2s) and unreliable.

**The Naive Approach (And Why It Fails):** A standard implementation might use a synchronous function: `get_credit_score(ssn)`. If the API takes 500ms, the processing thread blocks for 500ms. If the system has 10 processing threads, the maximum throughput is limited to 20 events per second (10 threads / 0.5s). To handle holiday traffic of 10,000 events/second, BFB would need to provision 5,000 threads, which is prohibitively expensive and resource-intensive.

**The Flink Async Solution:**

Flink’s Async I/O operator decouples the request from the response.

1. **Request:** Flink sends the HTTP request to the Credit Bureau.
2. **Suspend:** The operator suspends the processing of that specific event _without blocking the thread_. The thread immediately moves on to process the next event.
3. **Buffer:** Flink maintains a buffer of "in-flight" requests.
4. **Callback:** When the Credit Bureau API responds (e.g., 500ms later), the callback is triggered, the result is matched to the original event, and processing resumes.

By using this pattern, a single Flink task can manage thousands of concurrent API calls, maintaining high throughput even when the external API is slow.

**Implementation with Flink SQL:**

Confluent Cloud Flink supports this via the `KEY_SEARCH_AGG` function or specialized REST lookup connectors that support the `lookup.async` hint.

```sql
SELECT 
  L.application_id, 
  Bureau.fico_score
FROM loan_applications AS L
JOIN LATERAL TABLE (
  KEY_SEARCH_AGG(
    'CreditBureauRestService', 
    DESCRIPTOR(ssn), 
    L.applicant_ssn, 
    MAP['async_enabled', 'true', 'capacity', '100']
  )
) AS Bureau ON TRUE;
```

This declarative SQL approach abstracts the complexity of threading and callbacks, allowing BFB’s developers to focus on business logic rather than concurrency programming.
