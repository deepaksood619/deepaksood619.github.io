# Change Data Capture (CDC)

In [databases](https://en.wikipedia.org/wiki/Database), change data capture(CDC) is a set of software [design patterns](https://en.wikipedia.org/wiki/Design_pattern_(computer_science)) used to determine (and track) the data that has changed so that action can be taken using the changed data. CDC is also an approach to data integration that is based on the identification, capture and delivery of the changes made to enterprise data sources.

CDC solutions occur most often in [data-warehouse](https://en.wikipedia.org/wiki/Data_warehouse) environments since capturing and preserving the state of data across time is one of the core functions of a data warehouse, but CDC can be utilized in any database or data repository system.

[What Is Change Data Capture - Understanding Data Engineering 101 - YouTube](https://www.youtube.com/watch?v=hNJCxF3IWC4)

[Change Data Capture for Microservices - YouTube](https://www.youtube.com/watch?v=M6Z-RpEdaN4&ab_channel=InfoQ)

### Tools (Data Migration / CDC)

#### Debezium

Debezium is an open source distributed platform for change data capture. Start it up, point it at your databases, and your apps can start responding to all of the inserts, updates, and deletes that other apps commit to your databases. Debezium is durable and fast, so your apps can respond quickly and never miss an event, even when things go wrong.

[Debezium](https://debezium.io)

[GitHub - ivangfr/springboot-kafka-connect-debezium-ksqldb: Experiment with Kafka, Debezium, and ksqlDB. research-service: Performs MySQL record manipulation. Source Connectors: Monitor MySQL changes, push messages to Kafka. Sink Connectors and kafka-research-consumer: Listen to Kafka, insert/update Elasticsearch. ksqlDB-Server: Listens to Kafka, performs joins, and pushes new messages to new Kafka topics.](https://github.com/ivangfr/springboot-kafka-connect-debezium-ksqldb)

#### AWS DMS (Data Migration Service)

[aws-database-migration-service-dms](cloud/aws/aws-database-migration-service-dms.md)

https://en.wikipedia.org/wiki/Change_data_capture

#### Others

- fivetran
- Talend
- Matillion
- Integrate.io
- Panoply
- Informatica
- Singer.io
- Hadoop
- Dataddo
- AWS Glue
- Stitch
- Hevo Data

[12 best data migration tools of 2023](https://www.fivetran.com/learn/data-migration-tools)

[11 Best Data Migration Tools for 2023](https://hevodata.com/learn/data-migration-tools/)
