# Redis Eviction Policies

**Cache Eviction Policies**

The exact behavior Redis follows when the maxmemory limit is reached is configured using the maxmemory-policy configuration directive.

The following policies are available:

- **noeviction:** return errors when the memory limit was reached and the client is trying to execute commands that could result in more memory to be used (most write commands, but [DEL](https://redis.io/commands/del) and a few more exceptions).
- **allkeys-lru:** evict keys by trying to remove the less recently used (LRU) keys first, in order to make space for the new data added.
- **volatile-lru:** evict keys by trying to remove the less recently used (LRU) keys first, but only among keys that have anexpire set, in order to make space for the new data added.
- **allkeys-random:** evict keys randomly in order to make space for the new data added.
- **volatile-random:** evict keys randomly in order to make space for the new data added, but only evict keys with anexpire set.
- **volatile-ttl:** evict keys with anexpire set, and try to evict keys with a shorter time to live (TTL) first, in order to make space for the new data added.

The policies **volatile-lru, volatile-random** and **volatile-ttl** behave like **noeviction** if there are no keys to evict matching the prerequisites.

Picking the right eviction policy is important depending on the access pattern of your application, however you can reconfigure the policy at runtime while the application is running, and monitor the number of cache misses and hits using the Redis [INFO](https://redis.io/commands/info) output in order to tune your setup.

In general as a rule of thumb:

- Use the **allkeys-lru** policy when you expect a power-law distribution in the popularity of your requests, that is, you expect that a subset of elements will be accessed far more often than the rest. **This is a good pick if you are unsure.**
- Use the **allkeys-random** if you have a cyclic access where all the keys are scanned continuously, or when you expect the distribution to be uniform (all elements likely accessed with the same probability).
- Use the **volatile-ttl** if you want to be able to provide hints to Redis about what are good candidate for expiration by using different TTL values when you create your cache objects.

The **volatile-lru and volatile-random** policies are mainly useful when you want to use a single instance for both caching and to have a set of persistent keys. However it is usually a better idea to run two Redis instances to solve such a problem.

It is also worth noting that setting an expire to a key costs memory, so using a policy like **allkeys-lru** is more memory efficient since there is no need to set an expire for the key to be evicted under memory pressure.

## How the eviction process works

It is important to understand that the eviction process works like this:

- A client runs a new command, resulting in more data added.
- Redis checks the memory usage, and if it is greater than themaxmemorylimit , it evicts keys according to the policy.
- A new command is executed, and so forth.

So we continuously cross the boundaries of the memory limit, by going over it, and then by evicting keys to return back under the limits.
If a command results in a lot of memory being used (like a big set intersection stored into a new key) for some time the memory limit can be surpassed by a noticeable amount.

## Approximated LRU algorithm

Redis LRU algorithm is not an exact implementation. This means that Redis is not able to pick thebest candidatefor eviction, that is, the access that was accessed the most in the past. Instead it will try to run an approximation of the LRU algorithm, by sampling a small number of keys, and evicting the one that is the best (with the oldest access time) among the sampled keys.

However since Redis 3.0 the algorithm was improved to also take a pool of good candidates for eviction. This improved the performance of the algorithm, making it able to approximate more closely the behavior of a real LRU algorithm.

What is important about the Redis LRU algorithm is that youare able to tunethe precision of the algorithm by changing the number of samples to check for every eviction. This parameter is controlled by the following configuration directive:

`maxmemory-samples 5`

## LFU Mode (Least Frequently Used)

If you think at LRU, an item that was recently accessed but is actually almost never requested, will not get expired, so the risk is to evict a key that has an higher chance to be requested in the future. LFU does not have this problem, and in general should adapt better to different access patterns.

To configure the LFU mode, the following policies are available:

- **volatile-lfu** Evict using approximated LFU among the keys with an expire set.
- **allkeys-lfu** Evict any key using approximated LFU.

LFU is approximated like LRU: it uses a probabilistic counter, called a [Morris counter](https://en.wikipedia.org/wiki/Approximate_counting_algorithm) in order to estimate the object access frequency using just a few bits per object, combined with a decay period so that the counter is reduced over time: at some point we no longer want to consider keys as frequently accessed, even if they were in the past, so that the algorithm can adapt to a shift in the access pattern.

https://redis.io/topics/lru-cache

https://tokers.github.io/posts/lru-and-lfu-in-redis-memory-eviction

![cache-problems](../../../media/Pasted%20image%2020240105232856.jpg)

## Important Points

### 1. Cache density is more impactful than eviction policy

That means data compression and reducing cache metadata is more important than the choice made between LRU and FIFO algorithms.

The more objects you can stuff in a cache, the more performant it is.

### 2. Object sizes change in the course of time

This significantly impacts cache performance, since memory either fragments or calcifies (new objects can't be added because other size slabs have taken up space).

There are no efficient proven algorithms to deal with this problem!

### 3. Object TTL (TIME TO LIVE) can be more important than its eviction policy

Despite it's importance, there are no good proven algorithms for evicting expired objects.

A full scan is inefficient, and algorithms like the timer wheel (explained at InterviewReady) don't work on all objects.

Again, we notice that some principles of Java's garbage collection can be applied here (especially the generational hypothesis). Do check out the videos mentioned above.

### 4. Not all workloads are read-heavy

Facebook has very read heavy workloads, and Memcached is accordingly optimised for reads.

Twemcache has some write heavy workloads too (about 35-40% of the queries result in write operations).

The result is a break of many expectations, like behavior changes in TTL of objects and the number of times these objects are accessed.

Understandably, with these expectations breaking, cache performance of write heavy clusters isn't great.

- Using production log traces from Twitter to evaluate different caching strategies.

## Top 8 Cache Eviction Strategies

### LRU (Least Recently Used)

LRU eviction strategy removes the least recently accessed items first. This approach is based on the principle that items accessed recently are more likely to be accessed again in the near future.

### MRU (Most Recently Used)

Contrary to LRU, the MRU algorithm removes the most recently used items first. This strategy can be useful in scenarios where the most recently accessed items are less likely to be accessed again soon.

### SLRU (Segmented LRU)

SLRU divides the cache into two segments: a probationary segment and a protected segment. New items are initially placed into the probationary segment. If an item in the probationary segment is accessed again, it is promoted to the protected segment.

### LFU (Least Frequently Used)

LFU algorithm evicts the items with the lowest access frequency.

### FIFO (First In First Out)

FIFO is one of the simplest caching strategies, where the cache behaves in a queue-like manner, evicting the oldest items first, regardless of their access patterns or frequency.

### TTL (Time-to-Live)

While not strictly an eviction algorithm, TTL is a strategy where each cache item is given a specific lifespan.

### Two-Tiered Caching

In Two-Tiered Caching strategy, we use an in-memory cache for the first layer and a distributed cache for the second layer.

### RR (Random Replacement)

Random Replacement algorithm randomly selects a cache item and evicts it to make space for new items. This method is also simple to implement and does not require tracking access patterns or frequencies.

![Top 8 Cache Eviction Strategies](../../../media/Pasted%20image%2020240429231428.jpg)
