# HyperLogLog

HyperLogLog is a streaming algorithm used for estimating the number of distinct elements (the cardinality) of very large data sets. HyperLogLog counter can count one billion distinct items with an accuracy of 2% using only 1.5 KB of memory. It is based on the bit pattern observation that for a stream of randomly distributed numbers, if there is a number x with the maximum of leading 0 bits k, the cardinality of the stream is very likely equal to 2^k.
HyperLogLog, it's a statistical data structure that derives approximations- in O(1) time complexity and O(log(log(n)) space complexity. The catch is that you get about 1.5% accuracy, configurable of course by taking up more space. As an example, 1.3KB can estimate the cardinality of tens of billions of unique values with an accuracy of a few percent.

## Reference

<https://dzone.com/articles/introduction-probabilistic-0>
