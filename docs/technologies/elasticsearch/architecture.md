# Architecture

## Cluster and Node

Anodeis a running instance ofElasticsearch, while aclusterconsists of one or more nodes with the samecluster.namethat are working together to share their data and workload. As nodes are added to or removed from the cluster, the cluster reorganizes itself to spread the data evenly.

One node in the cluster is elected to be themasternode, whichis in charge of managing cluster-wide changes like creating or deleting an index, or adding or removing a node from the cluster. The master node does not need to be involved in document-level changes or searches, which means that having just one master node will not become a bottleneck as traffic grows. Any node can become the master. Our example cluster has only one node, so it performs the master role.

As users, we can talk toany node in the cluster, including the master node. Every node knows where each document lives and can forward our request directly to the nodes that hold the data we are interested in. Whichever node we talk to manages the process of gathering the response from the node or nodes holding the data and returning the final response to the client. It is all managed transparently by Elasticsearch.

## Index

To add data to Elasticsearch, we need anindex - a place to store related data.In reality, an index is just alogical namespacethat points to one or more physicalshards.

Ashardis a low-levelworker unitthat holdsjust a slice of all the data in the index. A shard is a single instance of Lucene, and is a complete search engine in its own right. Our documents are stored and indexed in shards, but our applications don't talk to them directly. Instead, they talk to an index.

Shards are how Elasticsearch distributes data around your cluster. Think of shards as containers for data. Documents are stored in shards, and shards are allocated to nodes in your cluster. As your cluster grows or shrinks, Elasticsearch will automatically migrate shards between nodes so that the cluster remains balanced.

A shard can be either aprimaryshard or areplicashard.Each document in your index belongs to a single primary shard, so the number of primary shards that you have determines the maximum amount of data that your index can hold.

A replica shard is just a copy of a primary shard.Replicas are used to provide redundant copies of your data to protect against hardware failure, and to serve read requests like searching or retrieving a document.

The number of primary shards in an index is fixed at the time that an index is created, but the number of replica shards can be changed at any time.

## Document

Most entities or objects in most applications can be serialized into a JSON object, with keys and values.Akeyis the name of a field or property, and avaluecanbe a string, a number, a Boolean, another object, an array of values, or some other specialized type such as a string representing a date or an object representing a geolocation.

Often, we use the termsobjectanddocumentinterchangeably. However, there is a distinction.An object is just a JSON object - similar to what is known as a hash, hashmap, dictionary, or associative array. Objects may contain other objects. In Elasticsearch, the termdocumenthas a specific meaning. It refers to the top-level, or root object thatis serialized into JSON and stored in Elasticsearch under a unique ID.

## Document Metadata

_index - Where the document lives

_type - The class of object that the document represents

_id - The unique identifier for the document

_version - Every time a change is made to a document (including deleting it), the_versionnumber is incremented.
