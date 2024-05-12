# MongoDB

## MongoDB / CouchBase

Json like structure and you want to persist that than mongodb works fine, provide ACID properties at a document level and scale pretty well
MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++

## COMPONENTS

- mongod - The database server.
- mongos - Sharding router.
- mongo - The database shell (uses interactive javascript).

## UTILITIES

- mongodump - Create a binary dump of the contents of a database.
- mongorestore - Restore data from the output created by mongodump.
- mongoexport - Export the contents of a collection to JSON or CSV.
- mongoimport - Import data from JSON, CSV or TSV.
- mongofiles - Put, get and delete files from GridFS.
- mongostat - Show the status of a running mongod/mongos.
- bsondump - Convert BSON files into human-readable formats.
- mongoreplay - Traffic capture and replay tool.
- mongotop - Track time spent reading and writing data.
- install_compass - Installs MongoDB Compass for your platform.

## Storage Engine

A storage engine is the part of a database that is responsible for managing how data is stored, both in memory and on disk. Many databases support multiple storage engines, where different engines perform better for specific workloads. For example, one storage engine might offer better performance for read-heavy workloads, and another might support a higher throughput for write operations.
The [storage engine](https://docs.mongodb.com/manual/reference/glossary/#term-storage-engine) is the component of the database that is responsible for managing how data is stored, both in memory and on disk. MongoDB supports multiple storage engines, as different engines perform better for specific workloads. Choosing the appropriate storage engine for your use case can significantly impact the performance of your applications.

### WiredTiger Storage Engine (Default)

[WiredTiger](https://docs.mongodb.com/manual/core/wiredtiger/) is the default storage engine starting in MongoDB 3.2. It is well-suited for most workloads and is recommended for new deployments. WiredTiger provides a document-level concurrency model, checkpointing, and compression, among other features.

https://docs.mongodb.com/manual/faq/storage

https://docs.mongodb.com/manual/core/storage-engines

## ODM (Object Document Mapper)

```bash
## Commands

use admin
db.createUser(
  {
    user: 'admin',
    pwd: 'password',
    roles: [ { role: 'root', db: 'admin' } ]
  }
);
exit;

# Connect to mongodb database

mongo admin --username root --password YOURPASSWORD
```

## Mongo vs SQL

### Pros

- Document oriented
- High performance
- High availability - Replication
- High scalability -- Sharding
- Dynamic - No rigid schema.
- Flexible -- field addition/deletion have less or no impact on the application
- Heterogeneous Data
- No Joins
- Distributed
- Data Representation in JSON or BSON
- Geospatial support
- Easy Integration with BigData Hadoop
- Document-based query language that's nearly as powerful as SQL
- Cloud distributions such as AWS, Microsoft, RedHat,dotCloud and SoftLayer etc:-. In fact, MongoDB is built for the cloud. Its native scale-out architecture, enabled by 'sharding,' aligns well with the horizontal scaling and agility afforded by cloud computing.

### Cons

- A downside of NoSQL is that most solutions are not as strongly ACID-compliant (Atomic, Consistency, Isolation, Durability) as the more well-established RDBMS systems.
- Complex transaction
- No function or stored procedure exists where you can bind the logic

## Implementation

### Good For

- E-commerce product catalog.
- Blogs and content management.
- Real-time analytics and high-speed logging, caching, and high scalability.
- Configuration management.
- Maintaininglocation-based data - Geospatial data.
- Mobile and social networking sites.
- Evolving data requirements.
- Loosely coupled objectives - the design may change by over time.

### Not so Good For

- Highly transactional systems or where the data model is designed up front.
- Tightly coupled systems- MongoDB is not magically faster. If you store the same data, organised in basically the same fashion, and access it exactly the same way, then you really shouldn't expect your results to be wildly different. After all, MySQL and MongoDB are both GPL, so if Mongo had some magically better IO code in it, then the MySQL team could just incorporate it into their codebase.

https://stackoverflow.com/questions/9702643/mysql-vs-mongodb-1000-reads

Performance metrics - https://stackoverflow.com/a/37654411/5424888

- MongoDB doesn't write the data to the disk straight away which is why it "looks" faster, but if your computer crashes, the data is lost.

## Questions

- How to add access control for some fields in a document (like some users cannot access first_name, last_name in a customer_id document

## Optimizations

[2x Faster Reads and Writes with this MongoDB feature | Clustered Collections - YouTube](https://www.youtube.com/watch?v=OhJ3xcjtpis&ab_channel=HusseinNasser)

## GridFS

[GridFS](https://docs.mongodb.com/manual/reference/glossary/#term-gridfs) is a specification for storing and retrieving files that exceed the [BSON](https://docs.mongodb.com/manual/reference/glossary/#term-bson)-document [size limit](https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size) of 16 MB.

https://docs.mongodb.com/manual/core/gridfs

## Others

https://www.ferretdb.io - A truly Open Source MongoDB alternative

[MongoDB Limits and Thresholds - MongoDB Manual](https://www.mongodb.com/docs/manual/reference/limits/)

## References

- https://www.tutorialspoint.com/mongodb
- https://github.com/mongodb/mongo
- https://www.toptal.com/mongodb/interview-questions
- https://github.com/ramnes/awesome-mongodb
- [**https://university.mongodb.com/**](https://university.mongodb.com/)
- [**https://medium.com/swlh/mongodb-developer-roadmap-for-2021-bec3eb10891d**](https://medium.com/swlh/mongodb-developer-roadmap-for-2021-bec3eb10891d)
- [MongoDB Internal Architecture](https://www.youtube.com/watch?v=ONzdr4SmOng)
- [Building with Patterns: The Document Versioning Pattern | MongoDB](https://www.mongodb.com/blog/post/building-with-patterns-the-document-versioning-pattern)
