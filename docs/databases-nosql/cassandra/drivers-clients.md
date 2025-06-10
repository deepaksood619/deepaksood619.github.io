# Drivers / Clients

```python
pip install cassandra-driver

from cassandra.cluster import Cluster

cluster = Cluster(protocol_version = 3)

session = cluster.connect('killrvideo')
for val in session.execute("select * from videos_by_tag"):

print(val)
```
