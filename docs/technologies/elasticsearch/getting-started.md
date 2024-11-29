# Getting Started

## Points

- Uses Optimisitic Concurrency Control

Used by Elasticsearch, this approach assumes that conflicts are unlikely to happen and doesn't block operations from being attempted. However, if the underlying data has been modified between reading and writing, the update will fail. It is then up to the application to decide how it should resolve the conflict. For instance, it could reattempt the update, using the fresh data, or it could report the situation to the user.

## Java API

If you are using Java, Elasticsearch comes with two built-in clients that you can use in your code:

#### Node client

The node clientjoins a local cluster as anon data node. In other words, it doesn't hold any data itself, but it knows what data lives on which node in the cluster, and can forward requests directly to the correct node.

#### Transport client

The lighter-weighttransport client can be used to send requests to a remote cluster. It doesn't join the cluster itself, but simply forwards requests to a node in the cluster.

Both Java clients talk to the cluster over port9300, usingthe native Elasticsearch transport protocol. The nodes in the cluster also communicate with each other over port 9300. If this port is not open, your nodes will not be able to form a cluster.

## Document Oriented

Elasticsearch is *document oriented*, meaningthat it stores entire objects or *documents*. It not only stores them, but also *indexes* the contents of each document in order to make them searchable. In Elasticsearch, you index, search, sort, and filter documents - not rows of columnar data. This is a fundamentally different way of thinking about data and is one of the reasons Elasticsearch can perform complex full-text search.

## JSON

Elasticsearch uses JavaScript Object Notation, or [*JSON*](http://en.wikipedia.org/wiki/Json), asthe serialization format for documents.

## Documents

The act of storing data in Elasticsearch is called *indexing*, but before we can index a document, we need to decide *where*to store it.

An Elasticsearch cluster cancontain multiple *indices*, which in turn contain multiple *types*.These types hold multiple *documents*, and each document hasmultiple *fields*.

Elasticsearch doesn't delete documents -

Internally, Elasticsearch has marked the old document as deleted and added an entirely new document.

Update api

1. Retrieve the JSON from the old document
2. Change it
3. Delete the old document
4. Index a new document

The only difference is that theupdateAPI achieves this through a single client request, instead of requiring separategetandindexrequests.

## Index

### Index (noun)

As explained previously, an *index* is like a *database* in a traditional relational database. It is the place to store related documents. The plural of *index* is *indices* or *indexes*.

### Index (verb)

*To index a document* is to store a document in an *index (noun)* so that it can be retrieved and queried. It is much like the `INSERT` keyword in SQL except that, if the document already exists, the new document would replace the old.

### Inverted index

Relational databases add an *index*, such as a B-tree index, to specific columns in order to improve the speed of data retrieval. Elasticsearch and Lucene use a structure called an *inverted index* for exactly the same purpose.

**By default, every field in a document is indexed (has an inverted index) and thus is searchable. A field without an inverted index is not searchable**

## Query

Elasticsearch provides a rich, flexible, query language called the *query DSL*, which allows us to build much more complicated, robust queries.

The *domain-specific language* (DSL) is specified using a JSON request body.

Think of the Query DSL as an AST (Abstract Syntax Tree) of queries, consisting of two types of clauses:

## Leaf query clauses

Leaf query clauses look for a particular value in a particular field, such as the [match](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html), [term](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html) or [range](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html) queries. These queries can be used by themselves.

## Compound query clauses

Compound query clauses wrap other leaf or compound queries and are used to combine multiple queries in a logical fashion (such as the [bool](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html) or [dis_max](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html) query), or to alter their behaviour (such as the [constant_score](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-constant-score-query.html) query).

## Relevance Score

By default, Elasticsearch sortsmatching results by their relevance score, that is, by how well each document matches the query. The first and highest-scoring result is obvious: John Smith'sabout field clearly says "rock climbing" in it.

## Distributed Nature

Elasticsearch tries hard to hide the complexity of distributed systems. Here are some of the operations happening automatically under the hood:

- Partitioning your documents into different containersorshards, which can be stored on a single node or on multiple nodes
- Balancing these shards across the nodes in your cluster to spread the indexing and search load
- Duplicating each shard to provide redundant copies of your data, to prevent data loss in case of hardware failure
- Routing requests from any node in the cluster to the nodes that hold the data you're interested in
- Seamlessly integrating new nodes as your cluster grows or redistributing shards to recover from node loss

## Search

A *search* can be any of the following:

- A structured query on concrete fieldslikegenderorage, sorted by a field likejoin_date, similar to the type of query that you could construct in SQL
- A full-text query, which finds all documents matching the search keywords, and returns them sorted by *relevance*
- A combination of the two

*Mapping -* How the data in each field is interpreted

*Analysis -* How full text is processed to make it searchable

*Query DSL -* The flexible, powerful query language used by Elasticsearch

## Exact Values vs Full Text

Data in Elasticsearch can be broadly divided into two types: exact values and full text.

*Exact values* are exactly what they sound like.Examples are a date or a user ID, but can also include exact strings such as a username or an email address. The exact value Foo is not the same as the exact value foo. The exact value 2014 is not the same as the exact value 2014-09-15.

*Full text*, on the other hand, refers to textual data - usually written in some human language --- like the text of a tweet or the body of an email.
