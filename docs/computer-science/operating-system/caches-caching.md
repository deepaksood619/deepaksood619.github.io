# Caches / Caching

## Points to remeber about cache

- Cache data cannot be the source of truth
- Cache data has to be pretty small because cache tends to keep all the data in-memory
- Consider Eviction policies (Page replacement policies)

In [computing](https://en.wikipedia.org/wiki/Computing), acacheis a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere. Acache hitoccurs when the requested data can be found in a cache, while acache missoccurs when it cannot. Cache hits are served by reading data from the cache, which is faster than recomputing a result or reading from a slower data store; thus, the more requests that can be served from the cache, the faster the system performs.

To be cost-effective and to enable efficient use of data, caches must be relatively small. Nevertheless, caches have proven themselves in many areas of computing, because typical [computer applications](https://en.wikipedia.org/wiki/Application_software) access data with a high degree of [locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference). Such access patterns exhibit temporal locality, where data is requested that has been recently requested already, and [spatial](https://en.wikipedia.org/wiki/Memory_address) locality, where data is requested that is stored physically close to data that has already been requested.

A cache hit happens whenever data is already available in the cache and can be returned without any other operation, otherwise the cache responds with a cache miss or, if available, can transparently retrieve the value from another underlying backend system and cache it before returning it to the requestor.

Caches are designed to respond to cache requests in near real-time and therefore are implemented as simple key-value stores. The underlying data structure, however, can still be different and depends on the storage backend. In addition, caches can most often be used by multiple front end consumers such as web applications.

Caches can have multiple levels, so-called tiered storages, which are ordered by their speed factor. Frequently or recently used data are typically held in memory, whereas other data (depending on the tiered storage implementations) can be written to SSD, slower spinning disk systems and later on other even slower systems, or can be evicted completely - if reproducible.
Typical use cases are in-memory caches for database, slowly retrievable disk-based data, data stored remotely behind slow network connections or results of previous calculations.

- Caching first approach

## Benefits of caching

- Improved responsiveness
- Decreased network costs
- Improved performance with same hardware
- Availability of content with interruption on network or backend resources

## WHAT TO CACHE?

A good starting point to find out what to cache in your application is to imagine everything where multiple executions of some request result in the same outcome. This can be database queries, HTML fragments, complete web pages or an output of a heavy computation.

It also makes sense to store any kind of language related data geographically local to the content consumer. Common elements of this type of data is translations, user data for people living in a given region. Only one rule applies: data should not change too often or fast but should be read very frequently.

## WHAT NOT TO CACHE?

A common misconception is if you cache everything, you'll automatically benefit from it. What often works in the first place delivers another problem during high data peaks.
Data that changes often is generally not very good for caches. Whenever data changes, the cache must be invalidated and, depending on the chosen caching strategy, this can be a costly operation. Imagine a caching system that is located around the world and your data change with a rate of more than 100 changes per second. The benefit of having those data cached will be nullified by the fact that all caches need to invalidate and maybe re-retrieve that changed data record for every single change.

Another point to think about is to not cache data that is fast to retrieve anyways. Caching those elements will introduce an additional round-trip while filling the cache, requiring additional memory. The benefit might not show the expected results or be worth the overhead of bringing in another layer into the architecture.

## Cache Types

### HTTP Cache

A HTTP Cache is mostly used in browsers. This kind of cache keeps information about the last modification date of a resource or a content hash to identify changes to its content. Web servers are expected to deliver useful information about the state of an element to prevent retrieval of an already cached element from the server.

This kind of cache is used to reduce network traffic, minimize cost and offer the user an instant experience for multiple visits.

### Fragment Cache

A Fragment Cache caches parts of a response or result. This could be a database query outcome or a part of an HTML page. Whatever it is, it should not change often.

A common use case for a Fragment Cache is a web page known to contain user specific and user unspecific content. The user-independent content can be cached as a fragment and augmented with user specific content on retrieval. This process is called **Content Enrichment.**

This caching type is used to reduce operation cost and hardware by providing the same throughput with less computational overhead.

### Object Cache

An Object Cache stores any sort of objects that otherwise need to be read from other data representations. A cache of this type can be used in front of a database to speed up queries and store the resulting objects (e.g. Object Relational Mapping, ORM), or store un-marshalled results of XML, JSON or other general data representations transformed into objects.

These caches often act as a proxy between some external resource, like a database or webservice, and they speed up transformation processes or prevent additional network round-trips between the consumer and producer systems.

[Cache Access Patterns](cache-access-patterns)

[Caching Strategies / Topologies](caching-strategies-topologies)

[Cache Coherence / Invalidation](cache-coherence-invalidation)

### [BFCache | others](frontend/frontend-intro/others.md)

## Locality of reference / Cache locality / Principle of locality

It is the tendency of a processor to access the same set of memory locations repetitively over a short period of time.

Locality is a type of [predictable](https://en.wikipedia.org/wiki/Predictability) behavior that occurs in computer systems. Systems that exhibit stronglocality of referenceare great candidates for performance optimization through the use of techniques such as the [caching](https://en.wikipedia.org/wiki/CPU_cache), [prefetching](https://en.wikipedia.org/wiki/Prefetch_instruction) for memory and advanced [branch predictors](https://en.wikipedia.org/wiki/Branch_predictor) at the [pipelining](https://en.wikipedia.org/wiki/Pipeline_(computing)) stage of a processor core.

### Types of locality

#### Temporal locality

If at one point a particular memory location is referenced, then it is likely that the same location will be referenced again in the near future. There is a temporal proximity between the adjacent references to the same memory location. In this case it is common to make efforts to store a copy of the referenced data in faster memory storage, to reduce the latency of subsequent references. Temporal locality is a special case of spatial locality (see below), namely when the prospective location is identical to the present location.

#### Spatial locality

If a particular storage location is referenced at a particular time, then it is likely that nearby memory locations will be referenced in the near future. In this case it is common to attempt to guess the size and shape of the area around the current reference for which it is worthwhile to prepare faster access for subsequent reference.

#### Memory locality

Spatial locality explicitly relating to [memory](https://en.wikipedia.org/wiki/Computer_memory).

#### [Branch](https://en.wikipedia.org/wiki/Branch_(computer_science)) locality

If there are only a few possible alternatives for the prospective part of the path in the spatial-temporal coordinate space. This is the case when an instruction loop has a simple structure, or the possible outcome of a small system of conditional branching instructions is restricted to a small set of possibilities. Branch locality is typically not a spatial locality since the few possibilities can be located far away from each other.

#### Equidistant locality

It is halfway between the spatial locality and the branch locality. Consider a loop accessing locations in an equidistant pattern, i.e., the path in the spatial-temporal coordinate space is a dotted line. In this case, a simple linear function can predict which location will be accessed in the near future.

In order to benefit from the very frequently occurring temporal and spatial locality, most of the information storage systems are [hierarchical](https://en.wikipedia.org/wiki/Computer_data_storage#Hierarchy_of_storage). The equidistant locality is usually supported by the diverse nontrivial increment instructions of the processors. For branch locality, the contemporary processors have sophisticated branch predictors, and on the basis of this prediction the memory manager of the processor tries to collect and preprocess the data of the plausible alternatives.

https://en.wikipedia.org/wiki/Locality_of_reference

https://www.geeksforgeeks.org/locality-of-reference-and-cache-operation-in-cache-memory

https://www.geeksforgeeks.org/computer-organization-locality-and-cache-friendly-code

## Cache-oblivious algorithm

In [computing](https://en.wikipedia.org/wiki/Computing), a cache-oblivious algorithm (or cache-transcendent algorithm) is an [algorithm](https://en.wikipedia.org/wiki/Algorithm) designed to take advantage of a [CPU cache](https://en.wikipedia.org/wiki/CPU_cache) without having the size of the cache (or the length of the [cache lines](https://en.wikipedia.org/wiki/Cache_line), etc.) as an explicit parameter. An**optimal cache-oblivious algorithm**is a cache-oblivious algorithm that uses the cache optimally (in an [asymptotic](https://en.wikipedia.org/wiki/Asymptotic_notation) sense, ignoring constant factors). Thus, a cache-oblivious algorithm is designed to perform well, without modification, on multiple machines with different cache sizes, or for a [memory hierarchy](https://en.wikipedia.org/wiki/Memory_hierarchy) with different levels of cache having different sizes. Cache-oblivious algorithms are contrasted with explicit [blocking](https://en.wikipedia.org/wiki/Loop_tiling), as in [loop nest optimization](https://en.wikipedia.org/wiki/Loop_nest_optimization), which explicitly breaks a problem into blocks that are optimally sized for a given cache.

Optimal cache-oblivious algorithms are known for [matrix multiplication](https://en.wikipedia.org/wiki/Cache-oblivious_matrix_multiplication), [matrix transposition](https://en.wikipedia.org/wiki/Matrix_transposition), [sorting](https://en.wikipedia.org/wiki/Funnelsort), and several other problems. Some more general algorithms, such as [Cooley--Tukey FFT](https://en.wikipedia.org/wiki/Cooley%E2%80%93Tukey_FFT_algorithm), are optimally cache-oblivious under certain choices of parameters. Because these algorithms are only optimal in an asymptotic sense (ignoring constant factors), further machine-specific tuning may be required to obtain nearly optimal performance in an absolute sense. The goal of cache-oblivious algorithms is to reduce the amount of such tuning that is required.

Typically, a cache-oblivious algorithm works by a [recursive](https://en.wikipedia.org/wiki/Recursion)[divide and conquer algorithm](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm), where the problem is divided into smaller and smaller subproblems. Eventually, one reaches a subproblem size that fits into cache, regardless of the cache size. For example, an optimal cache-oblivious matrix multiplication is obtained by recursively dividing each matrix into four sub-matrices to be multiplied, multiplying the submatrices in a [depth-first](https://en.wikipedia.org/wiki/Depth-first) fashion. In tuning for a specific machine, one may use a [hybrid algorithm](https://en.wikipedia.org/wiki/Hybrid_algorithm) which uses blocking tuned for the specific cache sizes at the bottom level, but otherwise uses the cache-oblivious algorithm.

https://en.wikipedia.org/wiki/Cache-oblivious_algorithm

## HTTP ETag (Entity tag)

The **ETag** or **entity tag** is part of [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), the protocol for the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web). It is one of several mechanisms that HTTP provides for [Web cache](https://en.wikipedia.org/wiki/Web_cache) validation, which allows a client to make conditional requests. This allows caches to be more efficient and saves bandwidth, as a Web server does not need to send a full response if the content has not changed. ETags can also be used for [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), as a way to help prevent simultaneous updates of a resource from overwriting each other.

An ETag is an opaque identifier assigned by a Web server to a specific version of a resource found at a [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator). If the resource representation at that URL ever changes, a new and different ETag is assigned. Used in this manner, ETags are similar to [fingerprints](https://en.wikipedia.org/wiki/Fingerprint_(computing)) and can quickly be compared to determine whether two representations of a resource are the same.

https://en.wikipedia.org/wiki/HTTP_ETag

## Others

- set-associative (SA) caches
- log-structured (LS) caches
- Kangaroo - https://engineering.fb.com/2021/10/26/core-data/kangaroo

## References

[https://en.wikipedia.org/wiki/Cache_(computing)](https://en.wikipedia.org/wiki/Cache_(computing)#WRITE-BACK)

https://www.freecodecamp.org/news/what-is-cached-data

https://engineering.fb.com/2021/09/02/open-source/cachelib
