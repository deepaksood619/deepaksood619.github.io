---
slug: /databases-nosql/cassandra/drivers-clients
title: Drivers / Clients
description: Discover how to connect to a Cassandra database using the Cassandra driver
  in Python to efficiently query video data by tags.
created: '2023-03-05'
last_update: '2025-06-10'
---

```python
pip install cassandra-driver

from cassandra.cluster import Cluster

cluster = Cluster(protocol_version = 3)

session = cluster.connect('killrvideo')
for val in session.execute("select * from videos_by_tag"):

print(val)
```
