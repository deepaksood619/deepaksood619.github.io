# WaterMarks

Watermarks determine how long the system should wait for out-of-order events.

Watermarks in Apache Flink are calculated from **the largest event time that has been seen so far.**

In Flink SQL, if a table has a `WATERMARK` defined, any record where `event_time < CURRENT_WATERMARK(event_time)` is considered "late." By default, Flink operators **drop** these records immediately to maintain correctness in windowed operations. Your `WHERE` clause is trying to catch records that Flink has already discarded.

Events that arrive later than the current watermark (which accounts for the **180ms tolerance** by default) are considered "late" and are dropped from time-based operations like windows.

- [Understanding Watermarks in Apache Flink \| by Giannis Polyzos \| Medium](https://medium.com/@ipolyzos_/understanding-watermarks-in-apache-flink-c8793a50fbb8)
- [Watermark \| Apache Flink](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream-v2/watermark/)
- [Event Time and Watermarks \| Apache Flink 101 - YouTube](https://youtu.be/sdhwpUAjqaI)
- [Windowing and Watermarks in Flink \| Flink with Java - YouTube](https://youtu.be/j1Ud8blbMKo)
