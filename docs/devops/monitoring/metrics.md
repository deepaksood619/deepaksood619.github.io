# Metrics

## Monitoring Introduction

- What are your monitoring goals?
- Which resources will you monitor?
- How often will you monitor these resources?
- Which monitoring tools will you use?
- Who will perform the monitoring tasks?
- Whom should be notified when something goes wrong?

- Gives you a base line
- Tells you what has happened
    - Useful to investigate performance issues
- Allows you to proactively handle potential issues
- Make sure to configure alerts so you can react appropriately to all events based on the severity level

### Use Percentiles

The term "perc50" indicates you're looking at a number where 50% of requests are at or below that number.

#### Why do averages suck?🤔

Consider this example: you have some code which measures how long your users wait for a page to load. You have collected 6 data points, in milliseconds: 62, 920, 37, 20, 850, and 45. If you average these load times, you get 322. But 322ms is not representative of your users' experience. From this data, it's clear some of your users are having a very fast experience (less than 70ms), and some are having a very slow experience (greater than 850ms). But none of them are having a mathematically average experience. Bimodal distributions like this are very common when measuring response times. Using an average can mislead you.

#### How to fix it?🤔

The way to avoid being misled is to use percentiles. A good place to start is P50 and P90. To compute P50, which is really just the median, sort the data points in ascending order: 20, 37, 45, 62, 850, 920. You get P50 by throwing out the bottom 50% of the points and looking at the first point that remains: 62ms. You get P90 by throwing out the bottom 90% of the points and looking at the first point which remains: 920.

#### Using percentiles has these advantages

1. Percentiles aren't skewed by outliers like averages are.
2. Every percentile data point is an actual user experience, unlike averages.

You can plot percentiles on a time series graph just like averages. My current team plots P50, P90, P99, and P99.9. This is pretty common. We also have separate alarm thresholds for each percentile. Our P50 latency, for example, tends to be less than one third of our P99 latency (and less than a fifth of P99.9), so we have different thresholds for alarming on these different percentiles.

Percentile metrics work for more than just latency. Imagine you have a set of 50 web servers, and you want to know how much memory they are using. If you look at the average memory utilization across all hosts, you won't necessarily see a representative picture. Instead, use the P0, P50, and P100 of all the hosts' memory. Then you have a nice picture that tells you the lowest usage, highest usage and median usage. As a bonus, you also get to see the difference between the high and low host, giving you valuable insights into how your application behaves on multiple hosts.

When you use percentile-based metrics, you get a much better sense for reality.

### Use Alarms

This one is obvious. A metric without an alarm is a manual chore you've assigned yourself, dooming you to one of two fates:

- Fate 1: You'll never look at it (what's the point of having the metric)
- Fate 2: You'll force yourself to look at it on a routine schedule (boring)

1. Grace Periods
2. Daytime Alarms

### Adaptive Thresholds

### Missing Metric

### Regular Automated Reviews

### What to measure

If you're building a web application or web service, here are some more specific ideas to get you started:

- **P50, P90, P99 latency**: This is the amount of time the server spends processing each HTTP request, between the time the request arrives at your code, and the time your code generates the response. Slice this per URL and in aggregate.
- **Latency breakdown**: time spent in application code, time spent waiting for the database, cache, or downstream services. There are great tools that can help with this like NewRelic (but last I checked, NewRelic only used averages and not percentiles, ugh).
- Number of requests that result in response code 200--299, 400--499, and 500--599. Set alarms on the last 2. A 400-series alarm may tell you that your clients can't figure out how to use your API. A 500-series alarm tells you you've got serious issues.
- Number of GET, PUT, POST, DELETE, etc. requests.
- **Total number of requests.** Set an alarm that tells you if traffic surges unexpectedly, or if request counts go to zero!
- **Application-specific load times (P50, P90, P99).** Twitter uses [time to first tweet](https://blog.alexmaccaw.com/time-to-first-tweet). We use the [performance API](https://www.w3.org/TR/navigation-timing/#sec-window.performance-attribute) to determine how long it took before the user could start interacting with our page. What is the best measure of your application's startup time?
- P50, P90, P99 request and response payload sizes.
- P50, P90, and P99 gzip compression ratio. How much is gzip helping your clients? Are your payloads actually compressible?
- **Number of load balancer spillovers.** How often are your inbound requests rejected because your web servers are at capacity.
- Cache hit and miss counts.
- P0, P50, and P100 for the sizes of objects stored in your cache.
- **The basic host metrics:** disk utilization, disk I/O rate, memory utilization, and cpu utilization. One very useful metric lots of people don't think of is [load average](https://www.howtogeek.com/194642/understanding-the-load-average-on-linux-and-other-unix-like-systems/), which tells you how well your hardware (including disk and network) is keeping up with the demands of your software.
- **Service input/output operations.** If you're on AWS, you may be using services like ELB or DynamoDB which throttle you if you exceed a certain I/O threshold. If this happens, your app can slow to a crawl and even become unavailable (this happened to my team a few years ago, and it was a pain to diagnose - we added lots of alarms after this event).
- **Unhealthy host count.** This is a common metric reported by web load balancers. It tells you how many hosts your load balancer currently considers healthy.
- **Number of connections open** to each web server, database host, queue server, and any other service you have.

https://medium.com/@djsmith42/how-to-metric-edafaf959fc7

## Latency

Latency is the interval between two points in time. you measure the start time and the end time of an event, and you want to know how long it took.

**"unix timestamp"**, the number of seconds (or milliseconds) since january 1st, 1970. This time is sometimes referred to as "wall clock time"

### Example

the code for measuring latency in your programs will look something like this:

```python
started_at = time_monotonic()
# code that does something, and takes some time
finished_at = time_monotonic()
duration = finished_at - started_at
```

to measure the latency of an entire incoming request, you can wrap that around the entire request/response lifecycle. in many cases, this can be accomplished through the use of middlewares or event listeners. adding code that tracks latency is often called "**instrumentation**".

### Aggregation

in practice you want to summarise or "aggregate" the data into fewer numbers that are easier to deal with.

### Average

in the context of latency, the average is not a meaningful metric

### Percentiles

1. P99

  the 99th percentile latency is the worst latency that was observed by 99% of all requests. it is the maximum value if you ignore the top 1%.

2. P999
3. P100

### Histograms

storing and computing percentiles is quite expensive.

but there is a data structure that can approximate percentiles, is very storage efficient, and allows results to be merged. that data structure is called ahistogram.

a histogram is a representation of a distribution. it stores the range and count of values.

instead of storing raw values, a histogram creates bins (or buckets) and then sorts values into those buckets. it only stores the count of each bucket.

#### Example

here is a histogram over a 10 second window of request data:

0 - 50 [1620]: ∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ (74.55%)
50 - 100 [ 447]: ∎∎∎∎∎∎∎∎∎∎ (20.57%)
100 - 150 [ 49]: ∎ (2.25%)
150 - 200 [ 15]: (0.69%)
200 - 250 [ 15]: (0.69%)
250 - 300 [ 10]: (0.46%)
300 - 350 [ 6]: (0.28%)
350 - 400 [ 1]: (0.05%)
400 - 450 [ 0]: (0.00%)
450 - 500 [ 4]: (0.18%)

you can see that most requests are quite fast, 75% of all requests are under 50ms. the next 20% are under 100ms. and the remaining 5% are in the slower range.

this phenomenon is quite common in web latency data, it's called "**tail latency**". the high percentiles correspond to this tail

a nice property of histograms is that because they are based on counters, they can be merged by adding up the counters. you can merge histograms from different machines, or combine them in the time dimension (this is called a "roll-up").

#### Heatmap

a latency heatmap is a way of visualizing histograms over time.

it visualises the full distribution by plotting time in the x-axis and latency buckets in the y-axis. the color of the bucket indicates how many values fell into that bucket. this conveys much more information than a single percentile would.

https://igor.io/latency

### What is Latency

Latency is defined as **the time it took one operation to happen**. This means every operation has its own latency - with one million operations there areone million latencies. As a result, latencycannotbe measured aswork units / time. What we're interested in is how latency behaves. To do this meaningfully, we must describe the complete distribution of latencies. Latency almost never follows a normal, Gaussian, or Poisson distribution, so looking at averages, medians, and even standard deviations is useless.

Latency tends to be heavily multi-modal, and part of this is attributed to "hiccups" in response time. Hiccupsresemble periodic freezes and can be due to any number of reasons - GC pauses, hypervisor pauses, context switches, interrupts, database reindexing, cache buffer flushes to disk, etc. These hiccups never resemble normal distributions and the shift between modes is often rapid and eclectic.

The number one indicator you should never get rid of is the maximum value. That is not noise, that is the signal. The rest of it is noise.

https://bravenewgeek.com/everything-you-know-about-latency-is-wrong

## Long Tail Latency

Network latencies between machines within a data center can be low. Generally, all communication takes a few microseconds, but every once in a while, some packets take a few milliseconds. The packets that take a few milliseconds generally belong to the 90th percentile or higher of latencies. Longtail latencies occur when these high percentiles begin to have values that go well beyond the average and can be magnitudes greater than the average.

https://engineering.linkedin.com/performance/who-moved-my-99th-percentile-latency

## Instrumentation

In the context of [computer programming](https://en.wikipedia.org/wiki/Computer_programming), instrumentationrefers to an ability to monitor or measure the level of a product's performance, to diagnose errors, and to write [trace](https://en.wikipedia.org/wiki/Tracing_(software)) information.Programmers implement instrumentation in the form of code [instructions](https://en.wikipedia.org/wiki/Instruction_(computer_science)) that monitor specific components in a system (for example, instructions may output logging information to appear on the screen). When an application contains instrumentation code, it can be managed by using a management tool. Instrumentation is necessary to review the performance of the application. Instrumentation approaches can be of two types: source instrumentation and binary instrumentation.

In programming, instrumentation means the ability of an application to incorporate:

- **Code [tracing](https://en.wikipedia.org/wiki/Tracing_(software)) -** receiving informative messages about the execution of an application at run time.
- **[Debugging](https://en.wikipedia.org/wiki/Debugging) and (structured)[exception handling](https://en.wikipedia.org/wiki/Exception_handling) -** tracking down and fixing programming errors in an application under development.
- **[Profiling](https://en.wikipedia.org/wiki/Profiling_(computer_programming)) -** a means by which dynamic program behaviors can be measured during a training run with a representative input. This is useful for properties of a program that cannot be [analyzed statically](https://en.wikipedia.org/wiki/Static_program_analysis) with sufficient precision, such as [alias analysis](https://en.wikipedia.org/wiki/Alias_analysis).
    - Flame Graph
- **Performance counters -** components that allow the tracking of the performance of the application.
- **[Computer data logging](https://en.wikipedia.org/wiki/Computer_data_logging) -** components that allow the logging and tracking of major events in the execution of the application.

https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)

https://labs.meanpug.com/custom-application-metrics-with-django-prometheus-and-kubernetes

## Metrics (Kubernetes)

Determining Important Metrics

### Four Golden Signals (SRE)

1. Latency - The time it takes to service a request
2. Errors - The rate of requests that fail, either explicily, implicitly, or by policy
3. Traffic - A measure of how much demand is being placed on your system
4. Saturation - How "full" your service is

### USE Method (by Brendan Gregg for reasoning about system resources)

1. Utilization - The average time that the resource was busy servicing work
2. Saturation - The degree to which the resource has extra work which it can't service, often queued
3. Errors - The count of error events

### RED Method by Tom Wilkie for measuring services

1. Rate - The number of requests per second
2. Errors - The number of errors per second
3. Duration - The length of time required to service the request

## Source of Metrics in Kubernetes

- USE for Node CPU
    - Utilization - node_cpu
    - Saturation - Load Average, node_load1

- USE for Node Memory
    - Utilization
        - node_memory_MemAvailable
        - node_memory_MemTotal
        - kube_node_status_capacity_memory_bytes
        - kube_node_status_allocatable_memory_bytes

    - Saturation - Don't go into swap
    - Errors
        - node_edac_correctable_errors_total
        - node_edac_uncorrectable_errors_total
        - node_edac_csrow_correctable_errors_total
        - node_edac_csrow_uncorrectable_errors_total

- USE for container cpu
    - Utilization - container_cpu_usage_seconds_total
    - Saturation - container_cpu_cfs_throttled_seconds_total

- USE for container memory
    - Utilization
        - container_memory_usage_bytes
        - container_memory_working_set_bytes

    - Saturation - Ratio of container_memory_working_set_bytes / kube_pod_container_resource_limits_memory_bytes

    - Errors
        - container_memory_failcnt
        - container_memory_failures_total

### Sources of Metrics

1. Node
2. kubelet and containers
3. Kubernetes API
4. etcd
5. Derived metrics (kube-state-metrics)

Metric Aggregation through the Kubenetes Hierarchy

## cAdvisor

- cAdvisor is embedded into the kubelet, so we scrape the kubelet to get container metrics
- These are the so-called Kubernetes "core" metrics
- For each container on the node:
    - CPU Usage (user and system) and time throttled
    - Filesystem read/writes/limits
    - Memory usage and limits
    - Network transmit/receive/dropped

## Kubernetes Metrics from the K8s API Server

- Performance of controller work queues
- Request Rates and Latencies
- Etcd helper cache work queues and cache performance
- General process status (File descriptors/Memory/CPU seconds)
- Golang status (GC/Memory/Threads)

RED for Kubernetes API Server

- Rate - apiserver_request_count
- Errors - apiserver_request_count
- Duration - apiserver_request_latencies_bucket

## Etcd Metrics from etcd

- Etcd is "master of all truth" within a K8s cluster
    - Leader existence and leader change rate
    - Proposals committed/applied/pending/failed
    - Disk write performance
    - Inbound gRPC stats
        - etcd_http_received_total
        - etcd_http_failed_total
        - etcd_http_successful_duration_seconds_bucket
    - Intra-cluster gRPC stats
        - etcd_network_member_round_trip_time_seconds_bucket

https://www.youtube.com/watch?v=1oJXMdVi0mM

## Types of Metrics

### Counter

Represents a monotonically increasing value.

In this example, a counter metric is used to calculate the rate of events over time, by counting events per second

A counter is a cumulative metric that represents a single [monotonically increasing counter](https://en.wikipedia.org/wiki/Monotonic_function) whose value can only increase or be reset to zero on restart. For example, you can use a counter to represent the number of requests served, tasks completed, or errors.

Do not use a counter to expose a value that can decrease. For example, do not use a counter for the number of currently running processes; instead use a gauge.

### Gauge

Represents a single value that can go up or down.

In this example, a gauge metric is used to monitor the [user CPU](https://blog.appsignal.com/2018/03/06/understanding-cpu-statistics.html) in percentages

Agaugeis a metric that represents a single numerical value that can arbitrarily go up and down.

Gauges are typically used for measured values like temperatures or current memory usage, but also "counts" that can go up and down, like the number of concurrent requests.

### Histogram

A counting of observations (like request durations or sizes) in configurable buckets.

In this example, a histogram metric is used to calculate the 75th and 90th percentiles of an HTTP request duration.

A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.

A histogram with a base metric name of `<basename>` exposes multiple time series during a scrape:

- cumulative counters for the observation buckets, exposed as `<basename>_bucket{le="<upper inclusive bound>"}`
- thetotal sumof all observed values, exposed as `<basename>_sum`
- thecountof events that have been observed, exposed as `<basename>_count(identical to<basename>_bucket{le="+Inf"}above)`

Use the [histogram_quantile()function](https://prometheus.io/docs/prometheus/latest/querying/functions/#histogram_quantile) to calculate quantiles from histograms or even aggregations of histograms. A histogram is also suitable to calculate an [Apdex score](https://en.wikipedia.org/wiki/Apdex). When operating on buckets, remember that the histogram is [cumulative](https://en.wikipedia.org/wiki/Histogram#Cumulative_histogram). See [histograms and summaries](https://prometheus.io/docs/practices/histograms) for details of histogram usage and differences to [summaries](https://prometheus.io/docs/concepts/metric_types/#summary).

### Summary

Similar to a histogram, asummarysamples observations (usually things like request durations and response sizes). While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window.

A summary with a base metric name of `<basename>` exposes multiple time series during a scrape:

- streaming `φ-quantiles(0 ≤ φ ≤ 1)` of observed events, exposed as `<basename>{quantile="<φ>"}`
- the total sumof all observed values, exposed as `<basename>_sum`
- the count of events that have been observed, exposed as `<basename>_count`

## Two rules of thumb

1. If you need to aggregate, choose histograms.
2. Otherwise, choose a histogram if you have an idea of the range and distribution of values that will be observed. Choose a summary if you need an accurate quantile, no matter what the range and distribution of the values is.

https://prometheus.io/docs/concepts/metric_types

https://prometheus.io/docs/practices/histograms

## Apdex (Application Performance Index)

Apdex is an [open standard](https://en.wikipedia.org/wiki/Open_standard) for measuring performance of [software applications](https://en.wikipedia.org/wiki/Software_applications) in [computing](https://en.wikipedia.org/wiki/Computing). Its purpose is to convert measurements into insights about user satisfaction, by specifying a uniform way to analyze and report on the degree to which measured performance meets [user expectations](https://en.wikipedia.org/wiki/User_expectations). It was developed by an alliance of companies

https://en.wikipedia.org/wiki/Apdex

## Common types of Alert

https://www.freecodecamp.org/news/metrics-driven-development

## Others

SLI - Service Level Indicators

[Choosing Good SLIs - Brave New Geek](https://bravenewgeek.com/choosing-good-slis/)

[Best Practices for Tagging Your Infrastructure and Applications | Datadog](https://www.datadoghq.com/blog/tagging-best-practices/)
