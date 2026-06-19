---
slug: /data-structures/graph/implementation
title: Graph Representation in Python
description: Learn how to use a dictionary to represent a graph in Python with this simple implementation example.
created: 2023-03-05
last_update: 2023-12-06
---
## Python

Use dictionary to represent a graph in Python

```python
graph = { "a" : ["c"],
        "b" : ["c", "e"],
        "c" : ["a", "b", "d", "e"],
        "d" : ["c"],
        "e" : ["c", "b"],
        "f" : []
    }
```
