# AWS SNS

Amazon Simple Notification Service

Fully managed Pub/Sub service for A2A and A2P messaging

- Deliver application-to-application (A2A) notifications to integrate and decouple distributed applications.
- Distribute application-to-person (A2P) notifications to your customers with SMS texts, push notifications, and email.
- Simplify your architecture and reduce costs with message filtering, batching, ordering, and deduplication.
- Increase message durability with archiving, replay, delivery retries, and dead-letter queues (DLQs).

Amazon Simple Notification Service (Amazon SNS) sends notifications two ways, A2A and A2P. A2A provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. A2P functionality lets you send messages to your customers with SMS texts, push notifications, and email.

## Topic types

### Standard Topics

Standard topics can be used in many scenarios, as long as your application can process messages that arrive more than once and out of order, for example: fanning out messages to media encoding, fraud detection, tax calculation, search index, and critical alerting applications.

**Maximum throughput**: Standard topics support a nearly unlimited number of messages per second.

**Best-effort ordering**: Occasionally, messages might be delivered in an order different from which they were published.

![image](https://d1.awsstatic.com/product-marketing/SNS/Img.29963b2823bc048492c7af2757535d500aa2c159.png)

**Best-effort deduplication**: A message is delivered at least once, but occasionally more than one copy of a message is delivered.

**Multiple subscription types**: Messages can be delivered to application-to-application (A2A) endpoints (Amazon SQS, Amazon Kinesis Data Firehose, AWS Lambda, HTTPS) as well as application-to-person (A2P) endpoints (SMS, mobile push, and email).

**Message fanout**: Each account can support 100,000 Standard topics and each topic supports up to 12.5M subscriptions.

### FIFO Topics

FIFO topics are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates can't be tolerated, for example: fanning out messages to bank transaction logging, stock monitoring, flight tracking, inventory management, and price update applications.

**High throughput**: FIFO topics support up to 300 messages per second or 10 MB per second per FIFO topic (whichever comes first).

**Strict ordering**: The order in which messages are published and delivered is strictly preserved (i.e. first-in-first-out).

![image](https://d1.awsstatic.com/product-marketing/SNS/Img2.8f1c8d366f58845ce03bb2983c16349102cf1524.png)

**Strict deduplication**: Duplicate messages aren't delivered. Deduplication happens within a 5-minute interval, from the message publish time.

**SQS subscriptions**: Messages can be delivered to Amazon SQS queues.

**Message fanout**: Each account can support 1,000 FIFO topics and each topic supports up to 100 subscriptions.

[AWS SNS](https://aws.amazon.com/sns/)

[AWS SNS Features](https://aws.amazon.com/sns/features/)
