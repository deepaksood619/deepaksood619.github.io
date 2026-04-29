## Automated "Straight-Through" Claims Processing

### 1. The Architecture Stack

This architecture required bridging the gap between a modern, event-driven cloud environment and legacy on-premises infrastructure.

- **API Layer:** WSO2 API Manager (exposing claims submission APIs to mobile and web apps).
- **Integration Layer:** WSO2 Micro Integrator (MI) for orchestration and external API calls.
- **Complex Event Processing (CEP):** WSO2 Streaming Integrator (running Siddhi applications for real-time rules execution).
- **Event Broker:** Apache Kafka.
- **Legacy Backend:** IBM Mainframe running COBOL applications, connected via IBM MQ.
- **External Services:** REST APIs for Vehicle Valuation (e.g., Kelley Blue Book) and municipal Police Report databases.

### 2. Kafka Topic Topology

The topics were designed to represent the state machine of a claim's lifecycle:

- `claim-submitted` (Partitions: 3) – Raw payload received from the customer.
- `claim-enriched` (Partitions: 3) – Claim data merged with external API data.
- `claim-decision` (Partitions: 3) – The output from the rules engine (Status: `AUTO_APPROVED` or `MANUAL_REVIEW`).

### 3. Step-by-Step Technical Workflow

#### Phase 1: Ingestion and Enrichment (WSO2 MI)

1. **API Invocation:** A customer uploads photos and details via the mobile app. The payload hits WSO2 API Manager, which routes it to a WSO2 MI REST endpoint.
2. **Concurrent API Calls:** WSO2 MI receives the initial claim. Using the **Clone Mediator**, WSO2 branches the flow to make asynchronous, parallel calls to two external systems:
    - _Call 1:_ Vehicle Valuation API (to get the car's current market value).
    - _Call 2:_ Police Report API (to verify no citations were issued to the policyholder).
3. **Data Mapping:** Once responses are received, the **Aggregate Mediator** waits for both branches to complete. The visual **Data Mapper** is then used to transform and merge the external JSON responses with the original claim data into a single, unified "Enriched Claim" JSON object.
4. **Publishing:** WSO2 MI uses the **Kafka Connector** to publish this massive JSON object to the `claim-enriched` topic.

#### Phase 2: Stream Processing & Rules Engine (WSO2 Streaming Integrator)

1. **Siddhi Application:** We deployed a Siddhi app within WSO2 Streaming Integrator. This app was configured with a **Kafka Source** to consume from `claim-enriched`.
2. **Rule Execution:** The Siddhi app runs a continuous query in memory:
    - _IF_ estimated repair cost < 20% of Vehicle Valuation
    - _AND_ Police Report status == `CLEAR`
    - _THEN_ set state to `AUTO_APPROVED`.
    - _ELSE_ set state to `MANUAL_REVIEW`.
3. **Decision Output:** The Streaming Integrator uses a **Kafka Sink** to push the result to the `claim-decision` topic.

#### Phase 3: Legacy Mainframe Integration (WSO2 MI)

1. **Inbound Endpoint:** A separate WSO2 MI instance uses a **Kafka Inbound Endpoint** to listen to the `claim-decision` topic.
2. **Payload Transformation:** When an `AUTO_APPROVED` message is received, it must be sent to the mainframe. Because mainframes don't natively understand JSON, WSO2 MI uses the **PayloadFactory Mediator** and **Data Mapper** to convert the JSON into a highly specific, fixed-length XML or EBCDIC string format.
3. **IBM MQ Transport:** WSO2 MI utilizes its built-in **JMS Transport** configured with the IBM MQ client libraries. It pushes the transformed message directly into the mainframe's message queue, which triggers the legacy COBOL payout application.

### 4. Handling Failures and Edge Cases (Resiliency)

- **External API Timeouts (Circuit Breaker):** External APIs (like the Police Database) can be unreliable. We wrapped the external calls in WSO2 MI using the **Call Mediator** with the **Circuit Breaker Enterprise Integration Pattern**. If the external API failed 3 times in a row, the circuit "opened," and WSO2 immediately routed the claim directly to the `MANUAL_REVIEW` path, bypassing the wait time.
- **Mainframe Downtime (JMS Transactions):** The connection between WSO2 MI and IBM MQ was configured as a **Distributed Transaction (XA)**. If the mainframe queue was full or unavailable, WSO2 would roll back the transaction. The message would remain safely in the Kafka `claim-decision` topic (uncommitted) until the mainframe became available again.

### 5. Performance Metrics Achieved

- **Straight-Through Processing (STP):** Reached **40%**, meaning nearly half of all minor claims bypassed human adjusters entirely.
- **Processing Time:** The time from customer submission to the mainframe payout trigger was reduced from an average of **3 days to under 2 minutes**.
