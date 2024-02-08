# Indexes

Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

Indexes are special data structures that store a small portion of the collection's data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. The ordering of the index entries supports efficient equality matches and range-based query operations. In addition, MongoDB can return sorted results by using the ordering in the index.

[Indexes - MongoDB Manual](https://www.mongodb.com/docs/manual/indexes)

### Single Field Index

This is the most basic type of index, where an index is created on a single field of a document. It speeds up queries that filter on the indexed field.

`db.collection.createIndex({ fieldName: 1 });`

### Compound Index

A compound index involves creating an index on multiple fields. It is useful for queries that filter on multiple fields or involve sorting.

`db.collection.createIndex({ field1: 1, field2: -1 });`

### Unique Index

A unique index enforces the uniqueness of values in the indexed field(s). It is commonly used for fields that should have unique values, such as usernames or email addresses.

`db.collection.createIndex({ fieldName: 1 }, { unique: true });`

### Sparse Index

A sparse index only indexes documents that contain the indexed field. It is useful when the indexed field is not present in all documents.

`db.collection.createIndex({ fieldName: 1 }, { sparse: true });`

### Text Index

Text indexes are designed for text search queries. They tokenize and index the text content of string fields.

`db.collection.createIndex({ textField: "text" });`

### Hashed Index

Hashed indexes store a hash value of the indexed field. They are suitable for equality queries but not range queries.

`db.collection.createIndex({ fieldName: "hashed" });`

### Wildcard Index (for Array)

This index is useful for queries on arrays. It indexes each element of the array separately, enabling efficient queries on array elements.

`db.collection.createIndex({ "arrayField.$**": 1 });`

### Wildcard Index (for Document)

This index is used to create an index on all fields of a document.

`db.collection.createIndex({ "$**": 1 });`

### Geospatial Index

Geospatial indexes are used for queries involving geographic coordinates. MongoDB supports 2D and 3D geospatial indexes.

`db.collection.createIndex({ locationField: "2dsphere" });`

### TTL (Time-To-Live) Index

A TTL index is used to automatically remove documents from a collection after a specified amount of time, providing a way to expire data. Data expiration is useful for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.

`db.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });`

[TTL Indexes - MongoDB Manual](https://docs.mongodb.com/manual/core/index-ttl)
