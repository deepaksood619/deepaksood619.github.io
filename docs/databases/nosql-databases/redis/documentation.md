# Documentation

## Programming with Redis

- [The full list of commands](https://redis.io/commands) implemented by Redis, along with thorough documentation for each of them.
- [Pipelining](https://redis.io/topics/pipelining): Learn how to send multiple commands at once, saving on round trip time.

sendmultiple commandsto the server without waiting for the replies at all, and finally read the replies in a single step.

- [Redis Pub/Sub](https://redis.io/topics/pubsub): Redis is a fast and stable Publish/Subscribe messaging system
- [Redis Lua scripting](https://redis.io/commands/eval): Redis Lua scripting feature documentation.
- [Debugging Lua scripts](https://redis.io/topics/ldb): Redis 3.2 introduces a native Lua debugger for Redis scripts.
- [Memory optimization](https://redis.io/topics/memory-optimization): Understand how Redis uses RAM and learn some tricks to use less of it.
- [Expires](https://redis.io/commands/expire): Redis allows to set a time to live different for every key so that the key will be automatically removed from the server when it expires.
- [Redis as an LRU cache](https://redis.io/topics/lru-cache): How to configure and use Redis as a cache with a fixed amount of memory and auto eviction of keys.
- [Redis transactions](https://redis.io/topics/transactions): It is possible to group commands together so that they are executed as a single transaction.
- [Mass insertion of data](https://redis.io/topics/mass-insert): How to add a big amount of pre existing or generated data to a Redis instance in a short time.
- [Partitioning](https://redis.io/topics/partitioning): How to distribute your data among multiple Redis instances.
- [Distributed locks](https://redis.io/topics/distlock): Implementing a distributed lock manager with Redis.
- [Redis keyspace notifications](https://redis.io/topics/notifications): Get notifications of keyspace events via Pub/Sub (Redis 2.8 or greater).
- [Creating secondary indexes with Redis](https://redis.io/topics/indexes): Use Redis data structures to create secondary indexes, composed indexes and traverse graphs.

<https://redis.io/topics/indexes>

## Redis modules API

- [Introduction to Redis modules](https://redis.io/topics/modules-intro). A good place to start learing about Redis 4.0 modules programming.
- [Implementing native data types](https://redis.io/topics/modules-native-types). Modules scan implement new data types (data structures and more) that look like built-in data types. This documentation covers the API to do so.
- [Blocking operations](https://redis.io/topics/modules-blocking-ops) with modules. This is still an experimental API, but a very powerful one to write commands that can block the client (without blocking Redis) and can execute tasks in other threads.
- [Redis modules API reference](https://redis.io/topics/modules-api-ref). Directly generated from the top comments in the source code insidesrc/module.c. Contains many low level details about API usage.

## Tutorials & FAQ

- [Introduction to Redis data types](https://redis.io/topics/data-types-intro): This is a good starting point to learn the Redis API and data model.
- [Introduction to Redis streams](https://redis.io/topics/streams-intro): A detailed description of the Redis 5 new data type, the Stream.
- [Writing a simple Twitter clone with PHP and Redis](https://redis.io/topics/twitter-clone)
- [Auto complete with Redis](http://autocomplete.redis.io/)
- [Data types short summary](https://redis.io/topics/data-types): A short summary of the different types of values that Redis supports, not as updated and info rich as the first tutorial listed in this section.
- [FAQ](https://redis.io/topics/faq): Some common questions about Redis.

## Administration

- [Redis-cli](https://redis.io/topics/rediscli): Learn how to master the Redis command line interface, something you'll be using a lot in order to administer, troubleshoot and experiment with Redis.
- [Configuration](https://redis.io/topics/config): How to configure redis.
- [Replication](https://redis.io/topics/replication): What you need to know in order to set up master-replicas replication.
- [Persistence](https://redis.io/topics/persistence): Know your options when configuring Redis' durability.
- [Redis Administration](https://redis.io/topics/admin): Selected administration topics.
- [Security](https://redis.io/topics/security): An overview of Redis security.
- [Encryption](https://redis.io/topics/encryption): How to encrypt Redis client-server communication.
- [Signals Handling](https://redis.io/topics/signals): How Redis handles signals.
- [Connections Handling](https://redis.io/topics/clients): How Redis handles clients connections.
- [High Availability](https://redis.io/topics/sentinel): Redis Sentinel is the official high availability solution for Redis.
- [Latency monitoring](https://redis.io/topics/latency-monitor): Redis integrated latency monitoring and reporting capabilities are helpful to tune Redis instances for low latency workloads.
- [Benchmarks](https://redis.io/topics/benchmarks): See how fast Redis is in different platforms.
- [Redis Releases](https://redis.io/topics/releases): Redis development cycle and version numbering.

## Embedded and IoT

- [Redis on ARM and Raspberry Pi](https://redis.io/topics/ARM): Starting with Redis 4.0 ARM and the Raspberry Pi are officially supported platforms. This page contains general information and benchmarks.
- [A reference implementation of Redis for IoT and Edge Computing can be found here](https://redislabs.com/redis-enterprise/redis-edge/).
