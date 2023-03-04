# Sub-linear time

An algorithm is said to run in**sub-linear time**(often spelled**sublinear time**) if*T*(*n*) = o(*n*) (small oh)

Which of the following expressions is not sublinear?
O(log log n)
O(n)
O(logn)
O(root(n))

Solution - O(n) (because it's linear time)

Example, string processing algorithm takes advantage of sublinear time algorithm.

They don't have to look at whole string to tell if both strings are equal. They have to just find first difference and then say that these two strings are not equal. This type of algorithms are callled sublinear algorithm

- Just have to find the first place where they differ (sorting algorithm take advantage of that)

## If you don't look at all the data, that's sublinear time

Algorithm -

- Longest Common Prefix (Just have to find first place that doesn't match on both the strings and return) (Doesn't have to look whole string)
