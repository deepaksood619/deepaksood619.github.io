# 1d Range Search

## Operations

- Insert key-value pair
- Search for key k
- Delete key k
- Range Search: find all keys between k1 and k2
- Range Count: number of keys between k1 and k2

Application - Database queries

### Geometric interpretation

- Keys are point on a line
- Find/count points in a given 1 d interval

## Implementation

### Unordered list - Fast insert, slow range search

### Ordered array - Slow insert, binary search for k1 and k2 to do range search

### BST implementation

- For range count - use rank with each node ( log N )
- For range search - Find all keys between lo and hi ( R + log N )
