# Interview Questions

## Question 1: Optimizing Flink Queries

Which of the following are distinct, effective, and commonly recommended ways to optimize a Flink query? (Select 2)

1. Filter later on in the query to reduce data shuffling.
2. Enable nested message grouping.
3. Minimize retraction cost by preferring append-only sinks.
4. Reduce data shuffling by filtering early.

**Correct Answers: 3 and 4**

**Technical Explanation**

- **Filtering Early (4):** This is a fundamental optimization known as "Predicate Pushdown." By filtering data as close to the source as possible, you reduce the number of records that need to be serialized, sent over the network (shuffled), and processed by downstream operators.
- **Append-only Sinks (3):** In Flink SQL/Table API, updates and deletes are handled via "retractions." Processing retractions is computationally expensive and state-heavy. Using append-only streams/sinks avoids the overhead of managing these "undo" messages.
- **Why 1 is wrong:** Filtering later is inefficient; you've already paid the "cost" of moving that data through the pipeline.

## Question 2: The Role of Watermarks

What is the primary role of a watermark in Apache Flink?

1. To calculate the latency between the source and the sink operators.
2. To define the maximum throughput for a stream partition.
3. To measure the progress of checkpointing.
4. To measure the progress of event time and signal when time-based operations can be finalized.

**Correct Answer: 4**

**Technical Explanation**

In stream processing, events can arrive out of order. Watermarks are special markers embedded in the stream that act as a clock. A watermark with timestamp $T$ tells Flink: _"We are reasonably sure no more events with a timestamp older than $T$ will arrive."_ This allows Flink to close time windows and trigger computations for event-time operations.

## Question 3: Data Shuffling Strategies

When performing a stateful operation like a GROUP BY in Flink, which data shuffling strategy is required to ensure all related events are processed together by the same task?

1. Broadcast
2. Embarrassingly parallel (forwarded)
3. Round-robin
4. Key-partitioned

**Correct Answer: 4**

**Technical Explanation**

To perform an aggregation (like `SUM` or `COUNT`) on a specific key, all records sharing that key must reside on the same physical operator instance. Key-partitioning (triggered by `keyBy()` in DataStream or `GROUP BY` in SQL) uses a hash function to route data.

- **Key-partitioning Formula:** $shard = hash(key) \pmod{parallelism}$

This ensures that "User A" always goes to "Task 1," allowing "Task 1" to maintain an accurate running total in its local state.

## Question 4: Scalability Bottlenecks

What can prevent a key-partitioned Flink job from scaling effectively, even when parallelism is increased?

1. High event latency
2. Schema evolution
3. High key cardinality
4. Data skew

**Correct Answer: 4**

**Technical Explanation**

Data Skew occurs when a single key has significantly more events than others (e.g., in a social media app, a celebrity's ID will have millions more interactions than an average user). Because Flink maps one key to exactly one parallel subtask, that specific subtask becomes a bottleneck. Even if you increase parallelism to 1,000, the one subtask handling the "hot key" will still be overwhelmed while the others sit idle.

_Note: High key cardinality (C) actually helps scaling, as it allows for a more even distribution across tasks._

## Question 5: Flink APIs

What are the different APIs exposed by Apache Flink? (Select 3)

1. GraphStream API
2. Flink SQL
3. DataFrame API
4. Table API
5. DataStream API

**Correct Answers: 2, 4, and 5**

**Technical Explanation**

Apache Flink offers a layered API stack:

1. SQL: The highest-level API, using standard SQL syntax.
2. Table API: A declarative DSL (Domain Specific Language) that looks like SQL but is integrated into Java/Python/Scala code.
3. DataStream API: The core API for low-level control over state and time.
4. _(Bonus)_ ProcessFunction: The lowest level, providing the most granular control.

DataFrame API is a Spark concept, and while Flink has a similar "Table" concept, it is not officially called the DataFrame API.

## Question 6: Stateful vs. Stateless Queries

What is the difference between a stateful and stateless Flink query?

1. It is not possible to have a stateful Flink query; queries are always stateless.
2. A stateful query has context about events that were processed previously while a stateless query does not.
3. A stateless query has context about events that were processed previously while a stateful query does not.
4. There are no differences between stateless and stateful Flink queries.

**Correct Answer: 2**

**Technical Explanation**

In stream processing, state is the "memory" of the application.

- **Stateless Operations:** These process each event independently. For example, a `MAP` transformation that converts a string to uppercase doesn't need to know what the previous string was.
- **Stateful Operations:** These require information from previous events to produce a result. Examples include aggregations (SUM, COUNT), joining two streams, or detecting a pattern (CEP). Without state, Flink would "forget" the running total as soon as an event passed through.

## Question 7: Event Time vs. Processing Time

How is event time different from processing time?

1. Processing time is the system time of the machine that is executing the operation while event time is the time when each individual event occurred on its producing device.
2. Event time is the system time of the machine that is executing the operation while processing time is the time when each individual event occurred on its producing device.
3. Event time and processing time are always the same.
4. None of the above.

**Correct Answer: 1**

**Technical Explanation**

- **Event Time:** This is the timestamp embedded in the data itself (e.g., when a user clicked a button on their phone). It is robust against out-of-order data or network delays.
- **Processing Time:** This is the wall-clock time of the Flink operator's machine. It is the simplest notion of time but results in non-deterministic behavior because if the system slows down, the windows will contain different data points.

## Question 8: Delivery Semantics (Select 2)

What would you expect when switching from exactly-once to at-least-once semantics?

1. Missing output
2. Duplicate output
3. Increased latency
4. Reduced latency

**Correct Answers: 2 and 4**

**Technical Explanation**

Exactly-once processing ensures that even if a failure occurs, the final state reflects each record being processed exactly one time.

- Why Duplicate Output (B)? At-least-once ensures no data is lost, but during a failure/recovery, some records might be re-processed and re-emitted to the sink.
- Why Reduced Latency (D)? Exactly-once in Flink (especially with sinks) often requires a two-phase commit or buffering until a checkpoint completes. At-least-once removes these coordination constraints, allowing data to flow faster through the pipeline.

## Question 9: Primary Key vs. Upsert Key Warning (Select 2)

What does the following warning indicate? `The primary key <pk_column> does not match the upsert key <upsert_key_column> that is derived from the query.`

1. Flink is going to automatically introduce an internal operator that will improve the query with no impact on performance.
2. The query is inserting data into a table where the table's defined PRIMARY KEY doesn't align with the key columns derived from the INSERT INTO ... SELECT or CREATE TABLE ... AS SELECT query statements.
3. Flink is going to introduce an expensive internal operator that will greatly increase resource utilization.
4. Nothing, this warning should be ignored since there will be no performance impact.

**Correct Answers: 2 and 3**

**Technical Explanation**

This warning is common in Flink SQL.

- **Mismatch (B):** Flink expects the stream of data to be keyed by the physical table's Primary Key. If your query groups or joins by a different column, the "upsert" logic is broken.
- **Performance Impact (C):** To resolve this mismatch and ensure the correct record is updated, Flink must inject a "Changelog Normalize" or a stateful operator to keep track of the keys. This adds significant state overhead and CPU usage.

## Question 10: Purpose of Checkpointing

What is the primary purpose of Flink's checkpointing mechanism?

1. Validate the schema of incoming and outgoing data.
2. Provide fault tolerance by capturing consistent snapshots of application state.
3. Manage network data shuffles for key-partitioned operations.
4. Improve query performance by caching intermediate results.

**Correct Answer: 2**

**Technical Explanation**

Checkpointing is Flink's "save game" feature. It periodically takes a distributed, consistent snapshot of the state of all operators and the positions in the input streams (offsets). If a job fails, Flink restores the state from the last successful checkpoint and resumes, ensuring data integrity without manual intervention.

## Question 11: Parallelism and Scaling

Which type of Flink operation is considered "embarrassingly parallel" and can scale almost linearly with the addition of more resources?

1. Tumbling window
2. Temporal JOIN between two streams
3. Stateful GROUP BY aggregation
4. Stateless WHERE filter

**Correct Answer: 4**

**Technical Explanation**

- **Stateless vs. Stateful:** A `WHERE` filter is stateless. Each record is processed in isolation; the engine doesn't need to know about previous records to decide if the current one passes the filter.
- **Scaling:** Because there is no shared state or need for data shuffling (re-partitioning) between parallel instances, you can split the stream into $N$ parts and process them independently. This leads to linear scaling, where doubling your resources nearly doubles your throughput.
- **Why the others differ:** Operations like Windows, Joins, and Group Bys are stateful. They require "shuffling" data by a key so that all related records land on the same worker, which introduces network overhead and state management complexity.

## Question 12: Storage in Flink SQL

When working with Flink SQL, where is the original data for your tables being stored?

1. In an Apache Kafka cluster.
2. In the Apache Flink cluster.
3. In an external source such as Kafka or a database.
4. In a relational database.

**Correct Answer: 3**

**Technical Explanation**

- **Compute vs. Storage:** Apache Flink is a compute engine, not a storage layer. When you define a `CREATE TABLE` in Flink SQL, you are actually creating a connector (a virtual mapping) to an external system.
- **The "Catalog":** Flink stores the _metadata_ (schema and table name) in its Catalog, but the actual "source of truth" for the data remains in systems like Kafka, S3, Cassandra, or Postgres.

## Question 13: Join State Retention

What is the state retention behavior of the join statement provided in the code? (Context: An INNER JOIN between `trades` and `settlements` on `trade_id`).

1. State is cleaned up after each successful join.
2. State grows in an unbounded way and is never cleaned up automatically.
3. State is kept for as long as the retention is configured in Kafka.
4. State is kept for 5 seconds based on the watermark interval.

**Correct Answer: 2**

**Technical Explanation**

- **Regular Joins:** The SQL provided is a Regular Join (`FROM trades t INNER JOIN settlements s ON t.trade_id = s.trade_id`). In Flink, regular joins require the engine to keep _all_ historical data for both sides of the join forever because a matching record might arrive at any time in the future.
- **The Watermark Trap:** Even though the tables have watermarks defined, a regular join does not automatically use them to "expire" state. To prevent unbounded state growth, you must either use an Interval Join (using time constraints in the `WHERE` clause) or configure a Table State Retention Time (TTL) in the Flink configuration.

## Question 14: Continuous vs. Windowed Aggregation

What is the difference between these two streaming SQL statements? (1: Global Group By vs. 2: Tumble Window).

1. The first statement executes on the orders table; the second executes on a table copied every minute.
2. The first statement emits records continuously; the second statement emits on close of 1 minute tumbling windows.
3. The first statement emits once; the second statement emits on close of 1 minute tumbling windows.

**Correct Answer: 2**

**Technical Explanation**

- **Continuous Aggregation (Query 1):** This is a "Global" aggregation. Every time a new record arrives, Flink updates the count for that `id` and immediately emits an update (an upsert) to the result table.
- **Windowed Aggregation (Query 2):** This uses a `TUMBLE` window. Flink buffers the records in state and only triggers the calculation/emission when the watermark passes the end of the 1-minute window. It produces a single final result per window.

## Question 15: Watermark Calculation

Watermarks are calculated from which of the following?

1. The most recently seen event time.
2. The largest event time that has been seen so far.
3. The smallest event time that has been seen so far.
4. The current processing time.

**Correct Answer: 2**

**Technical Explanation**

- **Progress Tracking:** A Watermark is a heuristic that tells Flink: _"I am reasonably sure no more events with a timestamp earlier than this will arrive."_
- **Calculation:** It is typically calculated as $MaxEventTime - OutOfOrdernessAllowance$. If Flink sees timestamps 10, 15, 12, and 20, the watermark is derived from 20 (the maximum seen), not 12 (the most recent).

## Question 16

If a Flink application is configured for at-least-once semantics, what behavior is expected upon recovery from a failure?

1. The job will roll back its state and also roll back the duplicate records in the output sink.
2. The job will restart from the last checkpoint and may re-process and emit duplicate results.
3. Some data will be lost as the job skips the unprocessed data from the failure.
4. The job will fail and require a manual restart from the beginning.

**Correct Answer: 2**

**Technical Explanation**

In at-least-once semantics, Flink guarantees that no data is lost, but it does not guarantee that data won't be processed more than once. When a failure occurs, the job restarts from the last successful checkpoint. Any data that was processed _between_ the last checkpoint and the time of failure will be read again from the source. Since the sink (output) in this configuration does not have a mechanism to "undo" or deduplicate previous writes, the external system may receive the same record twice. Achieving exactly-once would require a coordinated two-phase commit with the sink.

## Question 17

How does shifting a workload from periodic nightly batch processing to continuous stream processing typically impact infrastructure resource utilization?

1. It smoothes out resource consumption, removing the need to over-provision for short bursts of peak activity.
2. It eliminates the need for storage, as streaming data is never persisted to disk.
3. It reduces network bandwidth usage by compressing data into large static files before transmission.
4. It increases resource costs by requiring the cluster to be provisioned for peak load 24/7.

**Correct Answer: 1**

**Technical Explanation**

Batch processing is "bursty"—it requires a massive amount of CPU and Memory to process 24 hours of data in a short window (e.g., 2 hours), leading to "spiky" utilization. Stream processing spreads that same workload across the entire 24-hour period. By processing data as it arrives, you can provision smaller, more consistent instances rather than over-provisioning for a massive nightly peak.

## Question 18

While using the Flink `EXPLAIN` Statement, what is the purpose of the Physical Plan and Physical Details in the output?

1. The physical plan provides the structure of the query while the physical details show the runtime specifics for each operator in the plan.
2. The physical plan and physical details show and outline the optimal order of operations for the query to the user.
3. The physical details provide the structure of the query while the physical plan shows the runtime specifics for each operator listed in the plan.
4. The physical plan and physical details allow the user to see the total expected job execution time and the estimated resource cost for the entire query.

**Correct Answer: 1**

**Technical Explanation**

When you run `EXPLAIN`, Flink generates a multi-stage plan. The Physical Plan (often referred to as the ExecNode plan) describes the DAG (Directed Acyclic Graph) of how the query is structured into actual Flink operators. The Physical Details include the fine-grained implementation specifics, such as the exact serialization methods, join strategies (e.g., hash vs. sort-merge), and data distribution patterns.

## Question 19

Which of the following are examples of stateful Flink operations? (Select 2)

1. Filtering orders with a price under $10.
2. Keeping a running tally of the total price for all orders.
3. Mapping an orders table to a new schema.
4. Correlating a stream of orders with a stream of shipments.

**Correct Answers: 2 and 4**

**Technical Explanation**

- **B (Aggregations):** To keep a "running tally," Flink must remember the current sum. This "memory" of previous events is the definition of State.
- **D (Joins):** To correlate (Join) two streams, Flink must buffer records from one stream while waiting for the matching record to arrive on the other stream. This buffer is stored in Flink's managed state.
- **_Note:** Filtering (A) and Mapping (C) are stateless because they only look at one record at a time and don't need to remember anything about the past._

## Question 20

What is a specific challenge of managing state in an unbounded streaming application that does not apply to bounded batch processing?

1. State must be stored on a separate external database to ensure persistence.
2. The state size can grow indefinitely if a Time-to-Live (TTL) or windowing strategy is not implemented.
3. Streaming state cannot be partitioned across multiple parallel tasks.
4. State is distributed across the cluster, therefore accessing state is significantly slower in streaming due to network latency.

**Correct Answer: 2**

**Technical Explanation**

In batch processing, the dataset is finite; once the job ends, the state is cleared. In unbounded streaming, the job runs forever. If you are storing information about every user who visits a site, the state will grow every single day. Without a State TTL (Time-To-Live) or a windowing strategy to expire and "garbage collect" old data, the application will eventually run out of disk space (RocksDB) or memory (Heap).

## Question 21: Watermarks and Window Firing

You have defined the watermark on your Flink table as follows:

`WATERMARK FOR event_time AS event_time - INTERVAL '5' SECONDS`

Assume that the watermarks are generated after every event. You are running a Flink job that counts the events in 10-minute tumbling windows. The events are ingested in this order:

- A: 12:20:35
- B: 12:09:35
- C: 12:10:15
- D: 12:20:00

What happens after event D arrives?

1. The window 12:10:00 - 12:20:00 fires with count = 3 (events A, B, and C).
2. The window 12:10:00 - 12:20:00 fires with count = 1 (event B).
3. The window 12:00:00 - 12:10:00 fires with count = 2 (events A and C).
4. The window 12:10:00 - 12:20:00 fires with count = 2 (events C and D).

**Correct Answer: 4**

**Technical Explanation**

1. Watermark Calculation: The watermark is $EventTime - 5s$. After Event A (12:20:35) arrives, the watermark advances to 12:20:30.
2. Window Boundaries: 10-minute tumbling windows align to the clock: `[12:00-12:10), [12:10-12:20), [12:20-12:30)`.
3. Event Processing:
    - A (12:20:35): Belongs to `[12:20-12:30)`. Watermark is now `12:20:30`. This watermark is already `_past_` the end of the previous window `(12:20:00)`, so the `[12:10-12:20)` window is triggered.
    - B (12:09:35): Belongs to `[12:00-12:10)`. However, the watermark is already `12:20:30`. Since `$12:09:35 < 12:20:30$`, this is "late" and dropped (unless lateness is configured).
    - C (12:10:15): Belongs to `[12:10-12:20).` But this window already fired when A arrived.
    - D (12:20:00): Belongs to `[12:20-12:30)`.
4. Why D is the logic: In Flink, a window fires when $Watermark \geq WindowEnd$. When A arrives, the watermark becomes 12:20:30, which triggers the 12:10-12:20 window. At that exact moment, only events that arrived _before or with_ A that fall in that range are counted. C and D are the only events in the 12:10-12:20 range that arrive before the watermark moves significantly further.

## Question 22: UNNESTing Arrays

You have a table `Orders` with one row:

`order_id: 101, product_ids: ARRAY[50, 51, 52]`

Your Flink job is running this query:

```sql
SELECT order_id, pid
FROM Orders
CROSS JOIN UNNEST(product_ids) AS t(pid)
```

What will be the result of this query?

1. One row: (101, 50)
2. Three rows: (101, 50), (101, 51), and (101, 52)
3. One row: (101, [50, 51, 52])
4. Three rows: (101, null), (101, null), and (101, null)

**Correct Answer: 2**

**Technical Explanation**

In Flink SQL, `UNNEST` is a table-generating function used to flatten complex types like Arrays or Maps into multiple rows. When you perform a `CROSS JOIN` with `UNNEST`, Flink takes each element in the array and joins it with the original row's other columns. Since there are 3 elements in the array, the single original row is expanded into 3 distinct rows.

## Question 23: Production Deployment

How is a Flink streaming application typically deployed in production?

1. By configuring a Kafka broker to directly execute the Flink application.
2. By compiling the Flink runtime and the application into a single, self-executing binary.
3. By submitting the application logic as a job to a long-running Flink cluster.
4. By embedding the Flink engine as a library within a standalone application.

**Correct Answer: 3**

**Technical Explanation**

While Flink supports several deployment modes (Session, Job, Application), the standard production architecture involves a Flink Cluster (consisting of a JobManager and multiple TaskManagers). The developer packages their code into a JAR file and submits it to the JobManager, which then distributes the execution across the TaskManagers. Option D describes "library" mode (like Kafka Streams), which is not the typical way Flink is operated.

## Question 24: Left Outer Join and Watermarks

You have two tables `market_quotes` and `trade_executions`. A market quote arrives at 10:00:00.000. No matching execution arrives within 100ms.

```sql
SELECT ...
FROM market_quotes q
LEFT JOIN trade_executions e
ON q.security_id = e.security_id
AND e.execution_time BETWEEN q.quote_time AND q.quote_time + INTERVAL '100' MILLISECONDS;
```

When will the result (the quote with a NULL execution) be emitted?

1. Exactly 100 milliseconds after the quote arrives.
2. When the watermark passes `quote_time + 100ms`.
3. As soon as the market quote arrives.
4. Never, left joins don't emit results when there's no match.

**Correct Answer: 2**

**Technical Explanation**

In a Time-Interval Join (Outer Join), Flink must wait to ensure that a matching event will _never_ arrive before it can safely emit a row with a NULL value. Because Flink operates on Event Time, it doesn't use the system clock; it uses Watermarks. Flink must wait until the Watermark for `trade_executions` exceeds the upper bound of the join interval ($10:00:00.000 + 100ms$) to guarantee that no late-arriving trade execution will satisfy the join condition.

## Question 25: Handling Late Data

You are building an application to process payment events for fraud detection. The logic aggregates events into 5-minute windows and must allow events to arrive late by up to 30 seconds. How would you implement this in Flink SQL?

1. Ensure the retention on the Kafka topic is set to at least 5 minutes. Create a SQL windowing function to aggregate the events into 5-minute windows.
2. Use a SQL windowing function to aggregate events into 5 minute 30 second windows.
3. Set the checkpoint interval of the Flink job to 5 minutes. Then create a SQL windowing function to aggregate events into 5-minute windows.
4. Configure a watermark strategy with bounded out-of-orderness of 30 seconds. Use a SQL windowing function to aggregate events into 5-minute windows.

**Correct Answer: 4**

**Technical Explanation**

In Flink, "Lateness" or "Out-of-orderness" is handled primarily via Watermarks.

- **Bounded Out-of-orderness:** By setting this to 30 seconds, you are telling Flink: "Don't assume a window is finished until you see an event with a timestamp at least 30 seconds past the window end."
- The window size (5 minutes) remains the same, but the Watermark delay ($T - 30s$) ensures that events arriving up to 30 seconds late are still included in the correct window calculation before it closes.

## Question 26

You have a Flink job doing event-time windowing. It is running with a parallelism of 2, consuming events from a topic with 2 partitions. The data arriving on one partition is continuous, but the data arriving in the other partition is sparse. How does that impact the window results?

1. The window results are emitted for every event.
2. The window results are only emitted when events from both the partitions cause the watermark to advance.
3. The window results are emitted regularly based on the window length and system clock.
4. The window results are emitted as soon as the triggering event arrives on either partition.

**Correct Answer: 2**

**Technical Explanation**

In Flink, the watermark of an operator with multiple input streams (or partitions) is defined as the minimum of the watermarks of its input streams.

- If one partition is "sparse" (idle), its watermark stops advancing.
- Because the operator tracks the minimum watermark, the overall event-time clock of the job will "stall" waiting for the slow partition.
- Windows are only triggered when the watermark passes the window end time. Therefore, if the sparse partition doesn't provide updates, the watermark won't advance, and the window results will be delayed or never emitted.
- **_Note:**_ This is why Flink introduced `WatermarkStrategy.withIdleness()` to allow watermarks to advance even when a partition is temporarily inactive.

## Question 27

What is the fundamental relationship between batch processing and stream processing in Apache Flink?

1. They are unrelated processing paradigms that share a common API but use different runtime binaries.
2. Batch processing is a distinct engine designed solely for static files, while streaming handles dynamic data.
3. Batch processing is a special case of stream processing where the input data stream is bounded.
4. Stream processing is a special case of batch processing where the micro-batches are extremely small.

**Correct Answer: 3**

**Technical Explanation**

Flink follows the "Streaming First" philosophy. It treats batch data as simply a stream that has a defined start and a defined end (bounded). This unified model allows Flink to use the same core engine for both use cases. Unlike Spark (which uses micro-batches for streaming), Flink is a native stream processor that treats batching as a subset of streaming logic.

## Question 28

Beyond infrastructure costs, what is the primary business value driver for adopting stream processing over batch processing?

1. The simplification of the architecture by removing all time-based logic.
2. The reduction in latency between data generation and actionable insight.
3. The guarantee that results will always be perfectly accurate without late data.
4. The ability to recover from failures without using checkpoints.

**Correct Answer: 2**

**Technical Explanation**

The core value proposition of stream processing is low latency. Batch processing introduces a "waiting period" (e.g., waiting for the hour or day to end) before data is processed. Stream processing allows businesses to react to events in real-time (fraud detection, dynamic pricing, or immediate alerts), significantly shortening the time-to-insight.

## Question 29

When a developer submits a batch job to a Flink cluster, how does the runtime engine process the data?

1. It converts the bounded data into micro-batches and schedules them sequentially.
2. It spins up a separate MapReduce engine optimized specifically for disk-based sorting.
3. It processes the data as a bounded stream using the same operators available to streaming applications.
4. It disables all state management features to maximize throughput for static files.

**Correct Answer: 3**

**Technical Explanation**

Flink uses a unified runtime. When a job is set to `BATCH` execution mode, Flink uses the same operator graph logic as `STREAMING` mode but applies optimizations specific to bounded data (like using sort-merge joins instead of hash joins or ignoring watermarks since all data is already "present"). It does not switch to a completely different engine like MapReduce.

## Question 30

In Apache Flink, Changelog streams can contain which of the following event types?

1. +I (Insert)
2. -U (Update Before)
3. +U (Update After)
4. -D (Delete)
5. +C (Create)

**Correct Answer: 1, 2, 3, 4**

**Technical Explanation**

Flink SQL and Table API use a retracted stream (Changelog) model to handle dynamic updates. The standard event types in a Flink Changelog stream are:

1. +I (INSERT): A new record.
2. -U (UPDATE_BEFORE): The state of a record before it was modified (used to retract the old value).
3. +U (UPDATE_AFTER): The new state of a record after modification.
4. -D (DELETE): Removal of a record. _Option E (+C) is not a standard Flink RowKind code._
