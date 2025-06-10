# Redis

## Redis (Remote Dictionary Service)

Redis is an open source (BSD licensed), extremely fast, in-memory data structure store, used as a database, cache and message broker. It can optionally persist to a disk also. It supports different data structures like simple key-value pairs, sets, queues, strings, hashes, lists, sorted sets with range queries, bitmaps, hyprloglogs and geospatial indexes with radis queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster

You can run atomic operations on these types, like [appending to a string](https://redis.io/commands/append);[incrementing the value in a hash](https://redis.io/commands/hincrby);[pushing an element to a list](https://redis.io/commands/lpush);[computing set intersection](https://redis.io/commands/sinter), [union](https://redis.io/commands/sunion) and [difference](https://redis.io/commands/sdiff); or [getting the member with highest ranking in a sorted set](https://redis.io/commands/zrangebyscore).

In order to achieve its outstanding performance, Redis works with anin-memory dataset. Depending on your use case, you can persist it either by [dumping the dataset to disk](https://redis.io/topics/persistence#snapshotting) every once in a while, or by [appending each command to a log](https://redis.io/topics/persistence#append-only-file). Persistence can be optionally disabled, if you just need a feature-rich, networked, in-memory cache.

Redis also supports trivial-to-setup [master-slave asynchronous replication](https://redis.io/topics/replication), with very fast non-blocking first synchronization, auto-reconnection with partial resynchronization on net split.

## Features

- Distributed Cache
- Holds all data in-memory
- Can also flush data into hard-drive
- Master-slave, slaves can hold same data as master
- Redis can also do key-value storage

## Other features include

- [Transactions](https://redis.io/topics/transactions)
- [Pub/Sub](https://redis.io/topics/pubsub)
    - Channels
    - PUSH model
- [Lua scripting](https://redis.io/commands/eval)
- [Keys with a limited time-to-live](https://redis.io/commands/expire)
- [LRU eviction of keys](https://redis.io/topics/lru-cache)
- [Automatic failover](https://redis.io/topics/sentinel)

Redis is written in ANSI C and works in most POSIX systems like Linux, *BSD, OS X without external dependencies.

## Advantages

- **Exceptionally fast−** Redis is very fast and can perform about 110000 SETs per second, about 81000 GETs per second.
- **Supports rich data types−** Redis natively supports most of the datatypes that developers already know such as list, set, sorted set, and hashes. This makes it easy to solve a variety of problems as we know which problem can be handled better by which data type.
- **Operations are atomic−** All Redis operations are atomic, which ensures that if two clients concurrently access, Redis server will receive the updated value.
- **Multi-utility tool−** Redis is a multi-utility tool and can be used in a number of use cases such as caching, messaging-queues (Redis natively supports Publish/Subscribe), any short-lived data in your application, such as web application sessions, web page hit counts, etc.

## Optional Durability

- Journaling (append only log AOL)
- Snapshotting
- Both happens asynchronously in the background

## Transport Protocol

- TCP
- Request / response just like HTTP
- Message format is RESP (REdis Serialization Protocol)

## Redis 6

Redis 6.0 open source

- Access control lists (ACLs)
- Improved evictions
- Threaded I/O
- RESP3 protocol

Redis Enterprise 6.0

- Role-based access control (RBAC)
- Extending active-active
- HyperLogLog
- Streams

## Memory Footprint

- An empty instance uses ~ 3MB of memory
- 1 Million small Keys -> String Value pairs use ~ 85MB of memory
- 1 Million Keys -> Hash value, representing an object with 5 fields, use ~ 160 MB of memory

https://redis.io/topics/faq

## Use Cases

- String
	- Session
	- Cache
	- Distributed Lock
- Int
	- Counter
	- Rate Limiter
	- Global ID
- Hash - Shopping Cart
- Bitmap - User Retention
- List - Message Queue
- ZSet - Rank / Leaderboard

## References

- Book - https://redislabs.com/redis-in-action
- [https://redis.io/](https://redis.io/commands)
- https://redis.io/commands
- https://www.tutorialspoint.com/redis
- https://redis.io/topics/rediscli
- https://dzone.com/articles/introduction-to-redis-data-structures-bitmaps
- [Redis Crash Course](https://www.youtube.com/watch?v=sVCZo5B8ghE)
- https://www.youtube.com/channel/UCybK6TMZFQeSN74jzTiDWfg
- https://university.redislabs.com/courses/course-v1:redislabs+RU202+2020_03/about
- https://university.redislabs.com/courses/course-v1:redislabs+RU201+2020_03/about
- https://github.com/antirez/redis
- [The Bucket Pattern: NoSQL Data Modeling with Redis Stack](https://www.youtube.com/watch?v=5m4YgClPKCg)
- [The Revision Pattern: NoSQL Data Modeling](https://www.youtube.com/watch?v=AtPcQ-jpP6M)
- [Redis Can Do More Than Caching - ByteByteGo Newsletter](https://blog.bytebytego.com/p/redis-can-do-more-than-caching)
- [The 6 Most Impactful Ways Redis is Used in Production Systems](https://blog.bytebytego.com/p/the-6-most-impactful-ways-redis-is)
