---
slug: /data-structures/hashtable/questions
title: Key Questions on Hash Tables
description: Explore essential questions about hash tables and their advantages over B-Trees for efficient data handling and indexing.
created: 2023-03-05
last_update: 2023-12-05
---
## Hash Table

- Find symmetric pairs in an array
- Trace complete path of a journey
- Find if an array is a subset of another array
- Check if given arrays are disjoint

## Why databases use ordered indexes but programming uses hash tables

B-Trees are more "general purpose," which results in lower "total cost" for very large persistent data. In other words, even though they are slower for single value accesses that make up the majority of the workload, they are better when you consider rare operations and the cost of multiple indexes.

And also range queries are better in B-Trees than in Hash Tables

https://www.evanjones.ca/ordered-vs-unordered-indexes.html
