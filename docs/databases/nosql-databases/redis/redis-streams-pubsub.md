# Redis Streams / PUBSUB

## Messaging

**Redis Streams** doubles as a communication channel for building streaming architectures and as a log-like data structure for persisting data, making Streams the perfect solution for event sourcing

**Redis Pub/Sub** is an extremely lightweight messaging protocol designed for broadcasting live notifications within a system. It's ideal for propagating short-lived messages when low latency and huge throughput are critical

**Redis Lists and Redis Sorted Sets** are the basis for implementing message queues. They can be used both directly to build bespoke solutions, or via a framework that makes message processing more idiomatic for your programming language of choice

<https://redislabs.com/solutions/use-cases/messaging>

The Stream is a new data type introduced with Redis 5.0, which models alog data structurein a more abstract way, however the essence of the log is still intact: like a log file, often implemented as a file open in append only mode, Redis streams are primarily an append only data structure. At least conceptually, because being Redis Streams an abstract data type represented in memory, they implement more powerful operations, to overcome the limits of the log file itself.

What makes Redis streams the most complex type of Redis, despite the data structure itself being quite simple, is the fact that it implements additional, non mandatory features: a set of blocking operations allowing consumers to wait for new data added to a stream by producers, and in addition to that a concept calledConsumer Groups.

Consumer groups were initially introduced by the popular messaging system called Kafka. Redis reimplements a similar idea in completely different terms, but the goal is the same: to allow a group of clients to cooperate consuming a different portion of the same stream of messages.

## Commands

```bash
# show a list of all streams
SCAN 0 TYPE stream
XLEN dead:letter:queue
XREVRANGE dead:letter:queue + - COUNT 1
XINFO STREAM customer:profile:updated
XINFO STREAM customer:profile:updated FULL
```

## Streams basics

Because streams are an append only data structure, the fundamental write command, calledXADD, appends a new entry into the specified stream. A stream entry is not just a string, but is instead composed of one or multiple field-value pairs. This way, each entry of a stream is already structured, like an append only file written in CSV format where multiple separated fields are present in each line.

```bash
> XADD mystream *sensor-id 1234 temperature 19.8
1518951480106-0
```

The above call to the XADD command adds an entry sensor-id: 1234, temperature: 19.8to the stream at keymystream, using an auto-generated entry ID, which is the one returned by the command, specifically1518951480106-0. It gets as first argument the key namemystream, the second argument is the entry ID that identifies every entry inside a stream. However, in this case, we passed*because we want the server to generate a new ID for us. Every new ID will be monotonically increasing, so in more simple terms, every new entry added will have a higher ID compared to all the past entries. Auto-generation of IDs by the server is almost always what you want, and the reasons for specifying an ID explicitly are very rare. We'll talk more about this later. The fact that each Stream entry has an ID is another similarity with log files, where line numbers, or the byte offset inside the file, can be used in order to identify a given entry. Returning back at our XADD example, after the key name and ID, the next arguments are the field-value pairs composing our stream entry.
It is possible to get the number of items inside a Stream just using the XLEN command:

```bash
> XLEN mystream
(integer) 1
```

## Entry IDs

The entry ID returned by theXADDcommand, and identifying univocally each entry inside a given stream, is composed of two parts:

millisecondsTime - sequenceNumber

The milliseconds time part is actually the local time in the local Redis node generating the stream ID, however if the current milliseconds time happens to be smaller than the previous entry time, then the previous entry time is used instead, so if a clock jumps backward the monotonically incrementing ID property still holds. The sequence number is used for entries created in the same millisecond. Since the sequence number is 64 bit wide, in practical terms there are no limits in the number of entries that can be generated within the same millisecond.
The format of such IDs may look strange at first, and the gentle reader may wonder why the time is part of the ID. The reason is that Redis streams support range queries by ID. Because the ID is related to the time the entry is generated, this gives the ability to query for ranges of time basically for free. We will see this soon while covering theXRANGEcommand.
If for some reason the user needs incremental IDs that are not related to time but are actually associated to another external system ID, as previously already observed, theXADDcommand can take an explicit ID instead of the*wildcard ID that triggers auto-generation, like in the following examples:

```bash
> XADD somestream 0-1 field value
0-1
> XADD somestream 0-2 foo bar
0-2
Note that in this case, the minimum ID is 0-1 and that the command will not accept an ID equal or smaller than a previous one:

> XADD somestream 0-1 foo bar
(error) ERR The ID specified in XADD is equal or smaller than the target stream top item
```

## Getting data from Streams

Now we are finally able to append entries in our stream viaXADD. However, while appending data to a stream is quite obvious, the way streams can be queried in order to extract data is not so obvious. If we continue with the analogy of the log file, one obvious way is to mimic what we normally do with the Unix commandtail -f, that is, we may start to listen in order to get the new messages that are appended to the stream. Note that unlike the blocking list operations of Redis, where a given element will reach a single client which is blocking in apop styleoperation likeBLPOP, with streams we want that multiple consumers can see the new messages appended to the Stream, like manytail -fprocesses can see what is added to a log. Using the traditional terminology we want the streams to be able tofan outmessages to multiple clients.

However, this is just one potential access mode. We could also see a stream in quite a different way: not as a messaging system, but as atime series store. In this case, maybe it's also useful to get the new messages appended, but another natural query mode is to get messages by ranges of time, or alternatively to iterate the messages using a cursor to incrementally check all the history. This is definitely another useful access mode.

Finally, if we see a stream from the point of view of consumers, we may want to access the stream in yet another way, that is, as a stream of messages that can be partitioned to multiple consumers that are processing such messages, so that groups of consumers can only see a subset of the messages arriving in a single stream. In this way, it is possible to scale the message processing across different consumers, without single consumers having to process all the messages: each consumer will just get different messages to process. This is basically what Kafka (TM) does with consumer groups. Reading messages via consumer groups is yet another interesting mode to read from a Redis stream.
Redis streams support all the three query modes described above via different commands.

## Querying by range: XRANGE and XREVRANGE

To query the stream by range we are only required to specify two IDs, startandend. The range returned will include the elements having start or end as ID, so the range is inclusive. The two special IDs-and+respectively means the smallest and the greatest ID possible.

```bash
> XRANGE mystream - +

1) 1) 1518951480106-0
2) 1) "sensor-id"
2) "1234"
3) "temperature"
4) "19.8"
2) 1) 1518951482479-0
2) 1) "sensor-id"
2) "9999"
3) "temperature"
4) "18.2"
```

Since XRANGE complexity is `O(log(N))` to seek, and then `O(M)` to return M elements, with a small count the command has a logarithmic time complexity, which means that each step of the iteration is fast. So XRANGE is also the defacto streams iteratorand does not require an XSCAN command.

The command XREVRANGE is the equivalent of XRANGE but returning the elements in inverted order, so a practical use for XREVRANGE is to check what is the last item in a Stream

## Listening for new items with XREAD

When we do not want to access items by a range in a stream, usually what we want instead is tosubscribeto new items arriving to the stream. This concept may appear related to Redis Pub/Sub, where you subscribe to a channel, or to Redis blocking lists, where you wait for a key to get new elements to fetch, but there are fundamental differences in the way you consume a stream:

- A stream can have multiple clients (consumers) waiting for data. Every new item, by default, will be delivered toevery consumerthat is waiting for data in a given stream. This behavior is different than blocking lists, where each consumer will get a different element. However, the ability tofan outto multiple consumers is similar to Pub/Sub.

- While in Pub/Sub messages arefire and forgetand are never stored anyway, and while when using blocking lists, when a message is received by the client it ispopped(effectively removed) from the list, streams work in a fundamentally different way. All the messages are appended in the stream indefinitely (unless the user explicitly asks to delete entries): different consumers will know what is a new message from its point of view by remembering the ID of the last message received.

- Streams Consumer Groups provide a level of control that Pub/Sub or blocking lists cannot achieve, with different groups for the same stream, explicit acknowledge of processed items, ability to inspect the pending items, claiming of unprocessed messages, and coherent history visibility for each single client, that is only able to see its private past history of messages.

The command that provides the ability to listen for new messages arriving into a stream is called XREAD.

```bash
> XREAD COUNT 2 STREAMS mystream 0

1) 1) "mystream"
2) 1) 1) 1519073278252-0
2) 1) "foo"
2) "value_1"
2) 1) 1519073279157-0
2) 1) "foo"
2) "value_2"
```

Apart from the fact that XREAD can access multiple streams at once, and that we are able to specify the last ID we own to just get newer messages, in this simple form the command is not doing something so different compared to XRANGE. However, the interesting part is that we can turnXREADin ablocking commandeasily, by specifying the BLOCK argument:

`> XREAD BLOCK 0 STREAMS mystream $`

Note that when the BLOCK option is used, we do not have to use the special ID$. We can use any valid ID. If the command is able to serve our request immediately without blocking, it will do so, otherwise it will block. Normally if we want to consume the stream starting from new entries, we start with the ID$, and after that we continue using the ID of the last message received to make the next call, and so forth.

## Consumer groups

When the task at hand is to consume the same stream from different clients, thenXREADalready offers a way tofan-outto N clients, potentially also using slaves in order to provide more read scalability. However in certain problems what we want to do is not to provide the same stream of messages to many clients, but to provide adifferent subsetof messages from the same stream to many clients. An obvious case where this is useful is the case of slow to process messages: the ability to have N different workers that will receive different parts of the stream allows us to scale message processing, by routing different messages to different workers that are ready to do more work.

Redis uses a concept calledconsumer groups. It is very important to understand that Redis consumer groups have nothing to do from the point of view of the implementation with Kafka (TM) consumer groups, but they are only similar from the point of view of the concept they implement

A consumer group is like apseudo consumerthat gets data from a stream, and actually serves multiple consumers, providing certain guarantees:

- Each message is served to a different consumer so that it is not possible that the same message is delivered to multiple consumers.

- Consumers are identified, within a consumer group, by a name, which is a case-sensitive string that the clients implementing consumers must choose. This means that even after a disconnect, the stream consumer group retains all the state, since the client will claim again to be the same consumer. However, this also means that it is up to the client to provide a unique identifier.

- Each consumer group has the concept of thefirst ID never consumedso that, when a consumer asks for new messages, it can provide just messages that were never delivered previously.

- Consuming a message however requires explicit acknowledge using a specific command, to say: this message was correctly processed, so can be evicted from the consumer group.

- A consumer group tracks all the messages that are currently pending, that is, messages that were delivered to some consumer of the consumer group, but are yet to be acknowledged as processed. Thanks to this feature, when accessing the history of messages of a stream, each consumerwill only see messages that were delivered to it.
Actually, it is even possible for the same stream to have clients reading without consumer groups via **XREAD**, and clients reading via **XREADGROUP** in different consumer groups.

```bash
## Creating a consumer group
XGROUP CREATE mystream mygroup $

## Recovering from permanent failures
## Claiming and the delivery counter

## Streams observability
XINFO STREAM mystream
XINFO GROUPS mystream
XINFO CONSUMERS mystream mygroup
XINFO HELP
```

### XPENDING

Fetching data from a stream via a consumer group, and not acknowledging such data, has the effect of creating*pending entries*.The [XACK](https://redis.io/commands/xack) command will immediately remove the pending entry from the Pending Entries List (PEL) since once a message is successfully processed, there is no longer need for the consumer group to track it and to remember the current owner of the message.

The [XPENDING](https://redis.io/commands/xpending) command is the interface to inspect the list of pending messages, and is as thus a very important command in order to observe and understand what is happening with a streams consumer groups: what clients are active, what messages are pending to be consumed, or to see if there are idle messages

<https://redis.io/commands/xpending>

## Differences with Kafka partitions

The partitions are onlylogicaland the messages are just put into a single Redis key, so the way the different clients are served is based on who is ready to process new messages, and not from which partition clients are reading. For instance, if the consumer C3 at some point fails permanently, Redis will continue to serve C1 and C2 all the new messages arriving, as if now there are only twologicalpartitions.
Similarly, if a given consumer is much faster at processing messages than the other consumers, this consumer will receive proportionally more messages in the same unit of time. This is possible since Redis tracks all the unacknowledged messages explicitly, and remembers who received which message and the ID of the first message never delivered to any consumer.

However, this also means that in Redis if you really want to partition messages in the same stream into multiple Redis instances, you have to use multiple keys and some sharding system such as Redis Cluster or some other application-specific sharding system. A single Redis stream is not automatically partitioned to multiple instances.
We could say that schematically the following is true:

- If you use 1 stream -> 1 consumer, you are processing messages in order.
- If you use N streams with N consumers, so that only a given consumer hits a subset of the N streams, you can scale the above model of 1 stream -> 1 consumer.
- If you use 1 stream -> N consumers, you are load balancing to N consumers, however in that case, messages about the same logical item may be consumed out of order, because a given consumer may process message 3 faster than another consumer is processing message 4.

So basically Kafka partitions are more similar to using N different Redis keys. While Redis consumer groups are a server-side load balancing system of messages from a given stream to N different consumers.

## Capped Streams

Many applications do not want to collect data into a stream forever. Sometimes it is useful to have at maximum a given number of items inside a stream, other times once a given size is reached, it is useful to move data from Redis to a storage which is not in memory and not as fast but suited to take the history for potentially decades to come. Redis streams have some support for this. One is theMAXLENoption of theXADDcommand.

XADD mystream MAXLEN 2 * value 1
UsingMAXLENthe old entries are automatically evicted when the specified length is reached, so that the stream is taken at a constant size.

### Special IDs in the streams API

We have `-,+,$,> and *`, and all have a different meaning, and most of the times, can be used in different contexts.

### Persistence, replication and message safety

A Stream, like any other Redis data structure, is asynchronously replicated to slaves and persisted into AOF and RDB files.

### Removing single items from a stream

### Zero length streams

### Total latency of consuming a message

### How serving blocked consumers work

### Latency tests results

<https://redis.io/topics/streams-intro>

<https://events.redislabs.com/sessions/build-message-bus-redis-streams-fastapi>

[Delayed Message Processing with Redis Streams - RedisConf 2020](https://www.youtube.com/watch?v=hkGYRYe5NE8)

## PUBSUB

[SUBSCRIBE](https://redis.io/commands/subscribe), [UNSUBSCRIBE](https://redis.io/commands/unsubscribe) and [PUBLISH](https://redis.io/commands/publish) implement the [Publish/Subscribe messaging paradigm](http://en.wikipedia.org/wiki/Publish/subscribe) where (citing Wikipedia) senders (publishers) are not programmed to send their messages to specific receivers (subscribers). Rather, published messages are characterized into channels, without knowledge of what (if any) subscribers there may be. Subscribers express interest in one or more channels, and only receive messages that are of interest, without knowledge of what (if any) publishers there are. This decoupling of publishers and subscribers can allow for greater scalability and a more dynamic network topology.
<https://redis.io/topics/pubsub>

### PUBSUB vs Streams

## Data storage

Pub/Sub is a Publisher/Subscriber platform, it's not data storage. Published messages evaporate, regardless if there was any subscriber.
In Redis Streams, stream is a data type, a data structure on its own right. Messages or entries are stored in memory and stay there until commanded to be deleted.

## Sync/Async communication

Pub/Sub is synchronous communication. All parties need to be active at the same time to be able to communicate. Here Redis is a pure synchronous messaging broker.
Redis Streams allows for both synchronous (XREADwithBLOCKand the special$ID) and asynchronous communication. It is like Pub/Sub, but with the ability to resume on disconnection without losing messages.

## Delivery Semantics

Pub/Sub is At-most-once, i.e. "fire and forget".
Redis Streams allows for both At-most-once or At-least-once (explicit acknowledgement sent by the receiver)

## Blocking mode for consumers

Pub/Sub is blocking-mode only. Once subscribed to a channel, the client is put into subscriber mode and it cannot issue commands (except for [P]SUBSCRIBE, [P]UNSUBSCRIBE, PINGandQUIT), it has become read-only.
Redis Streams allows consumers to read messages in blocking mode or not.

## Fan-out

Pub/Sub is fan-out only. All active clients get all messages.
Redis Streams allows fan-out (withXREAD), but also to provide a different subset of messages from the same stream to many clients. This allows scaling message processing, by routing different messages to different workers, in a way that it is not possible that the same message is delivered to multiple consumers. This last scenario is achieved withconsumer groups.

Redis Streams provide many more features, like time-stamps, field-value pairs, ranges, etc. It doesn't mean you should always go for Streams. If your use-case can be achieved with Pub/Sub, it is better for you to use Pub/Sub then. With Streams, you have to care for memory usage.
