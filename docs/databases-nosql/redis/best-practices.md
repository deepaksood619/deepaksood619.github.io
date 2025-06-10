# Best Practices

- [Introduction](https://redislabs.com/redis-best-practices/introduction/)
- [Indexing Patterns](https://redislabs.com/redis-best-practices/indexing-patterns/)

https://redis.io/topics/indexes- [Sorted Sets as Indexes](https://redislabs.com/redis-best-practices/indexing-patterns/sorted-sets-indexes/)

- [Lexicographical Encoding](https://redislabs.com/redis-best-practices/indexing-patterns/lexicographical-encoding/)
- [Geospatial](https://redislabs.com/redis-best-practices/indexing-patterns/geospatial/)
- [IP Range Indexing](https://redislabs.com/redis-best-practices/indexing-patterns/ip-range-indexing/)
- [Full Text Search](https://redislabs.com/redis-best-practices/indexing-patterns/full-text-search/)
- [Partitioned Index](https://redislabs.com/redis-best-practices/indexing-patterns/partitioned-index/)- [Communication Patterns](https://redislabs.com/redis-best-practices/communication-patterns/)
    - [Event Queue](https://redislabs.com/redis-best-practices/communication-patterns/event-queue/)
    - [Redlock](https://redislabs.com/redis-best-practices/communication-patterns/redlock/)

In a system, sometimes you must lock a resource. This might be to make critical modifications that cannot be resolved in any concurrent way. The goals for locks are:

- One worker (and only one) worked to be able to acquire rights to a resource
- Be able to release this lock reliably
- Not deadlock any resource meaning that a resource should be unlocked after a given time period.
Redis is a good option locking since has a simple key-based data model, each shard is single-threaded, and is quite quick. There is a well-established, canonical implementations of locking using Redis called Redlock.- [Pub/Sub](https://redislabs.com/redis-best-practices/communication-patterns/pub-sub/)
- [Distributed Events](https://redislabs.com/redis-best-practices/communication-patterns/distributed-events/)- [Data Storage Patterns](https://redislabs.com/redis-best-practices/data-storage-patterns/)
    - [JSON Storage](https://redislabs.com/redis-best-practices/data-storage-patterns/json-storage/)
    - [Object->Hash Storage](https://redislabs.com/redis-best-practices/data-storage-patterns/object-hash-storage/)
- [Time Series Patterns](https://redislabs.com/redis-best-practices/time-series/)
    - [Sorted Set Time Series](https://redislabs.com/redis-best-practices/time-series/sorted-set-time-series/)
    - [Lexicographic Sorted Set Time Series](https://redislabs.com/redis-best-practices/time-series/lexicographic-sorted-set-time-series/)
    - [Time Series with Bitfields](https://redislabs.com/redis-best-practices/time-series/time-series-bitfields/)
- [Basic Rate Limiting Pattern](https://redislabs.com/redis-best-practices/basic-rate-limiting/)
- [Bloom Filter Pattern](https://redislabs.com/redis-best-practices/bloom-filter-pattern/)
- [Counting](https://redislabs.com/redis-best-practices/counting/)
    - [Bit Counting Pattern](https://redislabs.com/redis-best-practices/counting/bit-counting-pattern/)
    - [HyperLogLog](https://redislabs.com/redis-best-practices/counting/hyperloglog/)
- [Lua Helpers](https://redislabs.com/redis-best-practices/lua-helpers/)
https://redislabs.com/redis-best-practices

## Best practices and performance tuning

## TCP-KeepAlive

Keepalive is a method to allow the same TCP connection for HTTP conversation instead of opening a new one with each new request.

## Pipelining

Pipelining facilitates a client to send multiple requests to the server without waiting for the replies at all and finally reads the reply in a single step.
Pipelines are a subclass of the base Redis class that provide support for buffering multiple commands to the server in a single request. They can be used to dramatically increase the performance of groups of commands by reducing the number of back-and-forth TCP packets between the client and server.

https://github.com/andymccurdy/redis-py#pipelines
Pipelining isn't a silver bullet - you need to understand what it does before you use it. What pipelining does is batch several operations that are sent as bulk, as is their response from the server. What you gain is that the network round trip time for each operation is replaced by that of the batch. But infinitely-sized batches are a real drain on resource - you need to keep their size small enough to be effective. As a rule of thumb I usually try to aim to 60KB per pipeline and since every data is different, so does the number of actual operations in a pipeline. Assuming that your key and its value are ~1KB, you need to callpipeline.execute()every 60 operations or so.

https://stackoverflow.com/questions/32149626/how-to-insert-billion-of-data-to-redis-efficiently

## Mass Insertion / Bulk Inserts

https://redis.io/topics/mass-insert

## Max-Connection

define the maximum connection limit to the Redis Server.

## Overcommit memory

Overcommit memory is a kernel parameter which checks if the memory is available or not. If the overcommit memory value is 0 then there is a chance that your Redis will get OOM (Out of Memory) error.

`echo 'vm.overcommit_memory = 1' >> /etc/sysctl.conf`

| **Config Option** | **Value**         | **Description**                                                                                                                                                                                                     |
|---------------|-----------|-----------------------------------------------|
| maxmemory         | 70% of the system | maxmemory should be 70 percent of the system so that it will not take all the resource of the server.                                                                                                               |
| maxmemory-policy  | volatile-lru      | It adds a random key with an expiry time                                                                                                                                                                            |
| loglevel          | notice            | Loglevel should be "notice", so that log will not take too much resource                                                                                                                                            |
| timeout           | 300               | There should be a timeout value as well in redis configuration which prevents redis from spending too much time on the connection. It closes the connection of the client if it is ideal for more than 300 seconds. |

## Memory Optimizations

### [Compress Values](https://docs.redislabs.com/latest/ri/memory-optimizations/compress-values/)

Redis and clients are typically IO bound and the IO costs are typically at least 2 orders of magnitude in respect to the rest of the request/reply sequence. **Redis by default does not compress any value that is stored in it**, hence it becomes important to compress your data before storing in Redis. This helps in reducing the payload which in return gives you higher throughput, lower latency and higher savings in your cost.

### [Use Smaller Keys](https://docs.redislabs.com/latest/ri/memory-optimizations/use-smaller-keys/)

Redis keys can play a devil in increasing the memory consumption for your Redis instances. In general, you should always prefer descriptive keys but if you have a large dataset having millions of keys then these large keys can eat a lot of your money. How to Convert to Smaller Keys In a well written application, switching to shorter keys usually involves updating a few constant strings in the application code.

### [Switch to 32 Bits](https://docs.redislabs.com/latest/ri/memory-optimizations/switch-to-32-bits/)

Redis gives you the following statistics for a 64-bit machine. An empty instance uses ~ 3MB of memory. 1 Million small Keys -> String Value pairs use ~ 85MB of memory. 1 Million Keys -> Hash value, representing an object with 5 fields, use ~ 160 MB of memory. 64-bit has more memory available as compared to a 32-bit machine. **But if you are sure that your data size does not exceed 3 GB then storing in 32 bits is a good option.**

### [Upgrade Redis Version](https://docs.redislabs.com/latest/ri/memory-optimizations/upgrade-redis-version/)

Redis 4.0 is the latest version that has been launched. It contains various big improvements compared to the previous versions. It supports mixed RDB+AOF Format. Improvement in memory usage and performance. New Memory Command has been introduced. Active Memory Defragmentation. Faster Redis Cluster key creation. Trade Offs Redis 4.0 is still not a stable release but is a very battle tested release, so Redis 3.2 is a better pick for critical applications till Redis 4.

### [Use Better Serializer](https://docs.redislabs.com/latest/ri/memory-optimizations/use-better-serializer/)

Redis does not have any specific data type to store the serialized objects, they are stored as byte array in Redis. If we are using regular means of serializing our java, python and PHP objects, they can be of larger size which impacts the memory consumption and latency. Which Serializers to Use Instead of default serializer of your programming language (java serialzed objects, python pickle, PHP serialize etc), switch to a better library.

### [Combine Smaller Strings to Hashes](https://docs.redislabs.com/latest/ri/memory-optimizations/combine-smaller-strings-to-hash/)

Strings data type has an overhead of about 90 bytes on a 64 bit machine. In other words, calling set foo bar uses about 96 bytes, of which 90 bytes is overhead. You should use the String data type only if: The value is at least greater than 100 bytes You are storing encoded data in the string - JSON encoded or Protocol buffer You are using the string data type as an array or a bitset If you are not doing any of the above, then use Hashes.

### [Switch from Set to Intset](https://docs.redislabs.com/latest/ri/memory-optimizations/switch-set-to-intset/)

Sets that contain only integers are extremely efficient memory wise. If your set contains strings, try to use integers by mapping string identifiers to integers. You can either use enums in your programming language, or you can use a redis hash data structure to map values to integers. Once you switch to integers, Redis uses the IntSet encoding internally. This encoding is extremely memory efficient. By default, the value of set-max-intset-entries is 512, but you can set this value in redis.

### [Switch to bloom filter or hyperloglog](https://docs.redislabs.com/latest/ri/memory-optimizations/switch-to-bloom-filters/)

Unique items can be difficult to count. Usually this means storing every unique item then recalling this information somehow. With Redis, this can be accomplished by using a set and a single command, however both the storage and time complexity of this with very large sets is prohibitive. HyperLogLog provides a probabilistic alternative. If your set contains a very large number of elements, and you are only using the set for existence checks or to eliminate duplicates - then you benefit by using a bloom filter.

### [Shard Big Hashes to Small Hashes](https://docs.redislabs.com/latest/ri/memory-optimizations/shard-big-hash-to-small-hash/)

If you have a hash with large number of key, value pairs, and if each key, value pair is small enough - break it into smaller hashes to save memory. To shard a HASH table, we need to choose a method of partitioning our data. Hashes themselves have keys which can be used for partitioning the keys into different shards. The number of shards are determined by the total number of keys we want to store and the shard size.

### [Convert Hashtable to Ziplist for Hashes](https://docs.redislabs.com/latest/ri/memory-optimizations/convert-hash-to-ziplist/)

Hashes have two types of encoding- HashTable and Ziplist. The decision of storing in which of the data structures in done based on the two configurations Redis provides - hash-max-ziplist-entries and hash-max-ziplist-values. By default the redis conf has these settings as: hash-max-ziplist-entries = 512 hash-max-ziplist-values = 64 So if any value for a key exceeds the two configurations it is stored automatically as a Hashtable instead of a Ziplist.

### [Convert to a List Instead of Hash](https://docs.redislabs.com/latest/ri/memory-optimizations/convert-to-list-instead-of-hash/)

A Redis Hash stores field names and values. If you have thousands of small hash objects with similar field names, the memory used by field names adds up. To prevent this, consider using a list instead of a hash. The field names become indexes into the list. While this may save memory, you should only use this approach if you have thousands of hashes, and if each of those hashes have similar fields.

### [Compress Field Names](https://docs.redislabs.com/latest/ri/memory-optimizations/compress-field-names/)

Redis Hash consists of Fields and their values. Like values, field name also consumes memory, so it is required to keep in mind while assigning field names. If you have a large number of hashes with similar field names, the memory adds up significantly. To reduce memory usage, you can use smaller field names. What do We Mean By Compress Field Names Referring to the previous example in convert hashes to list, we had a hash having user details.

### [Avoid Dynamic Lua Script](https://docs.redislabs.com/latest/ri/memory-optimizations/avoid-dynamic-lua-script/)

Refrain from generating dynamic scripts, which can cause your Lua cache to grow and get out of control. Memory is consumed as we have scripts loaded. The memory consumption are because of the following factors. Memory used by the server.lua_scripts dictionary holding original text memory used internally by Lua to keep the compiled byte-code. So If you have to use dynamic scripting, then just use plain EVAL, as there's no point in loading them first.

### [Enable Compression for List](https://docs.redislabs.com/latest/ri/memory-optimizations/enable-compression-for-list/)

List is just a link list of arrays, where none of the arrays are compressed. By default, redis does not compress elements inside a list. However, if you use long lists, and mostly access elements from the head and tail only, then you can enable compression. We have two configurations: List-max-ziplist-size: 8kb(default) List-compression-depth: 0,1,2 (0 by default) A configuration change in redis.conf list-compression-depth=1 helps you achieve compression. What is compression-depth Compression depth is the number of list nodes from each end of the list to leave untouched before we start compressing inner nodes.

### [Reclaim Expired Keys Memory Faster](https://docs.redislabs.com/latest/ri/memory-optimizations/reclaim-expired-keys-memory-faster/)

When you set an expiry on a key, redis does not expire it at that instant. Instead, it uses a randomized algorithm to find out keys that should be expired. Since this algorithm is random, there are chances that the keys are not expired. This means that redis consumes memory to hold keys that have already expired. The moment the key is accessed, it is deleted. If there are only a few keys that have expired and redis hasn't deleted them - it is fine.

https://docs.redislabs.com/latest/ri/memory-optimizations

https://redis.io/topics/memory-optimization

https://cloud.google.com/memorystore/docs/redis/memory-management-best-practices

https://www.datadoghq.com/pdf/Understanding-the-Top-5-Redis-Performance-Metrics.pdf

## Performance Metrics

1. Memory Usage: used_memory
2. Number of commands processed: total_commands_processed
3. Latency
4. Fragmentation Ratio
5. Evictions

## Parsers

Parser classes provide a way to control how responses from the Redis server are parsed. redis-py ships with two parser classes, the PythonParser and the Hiredis Parser. By default, redis-py will attempt to use the Hiredis Parser if you have the hiredis module installed and will fallback to the PythonParser otherwise.

Hiredis is a C library maintained by the core Redis team. Pieter Noordhu is was kind enough to create Python bindings. Using Hiredis can provide up to a 10x speed improvement in parsing responses from the Redis server. The performance increase is most noticeable when retrieving many pieces of data, such as from LRANGE or SMEMBERS operations.

`$ pip install hiredis`
