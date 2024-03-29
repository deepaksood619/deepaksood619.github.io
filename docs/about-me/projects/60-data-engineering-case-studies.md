# Data Engineering Case Studies

## Internet of Things (IoT)

### Challenges

The IoT industry faces several challenges, including managing the vast amount of data generated by connected devices, real-time analysis and alerting, and efficient storage and archival of this data. In addition to the challenges related to big data and real-time analysis, the IoT industry often grapples with the complexity of maintaining cron jobs over multiple microservices, managing alerting, handling retries, and managing dependencies efficiently.

### Solution

After careful consideration of various solutions such as Vernemq, RabbitMQ, Cassandra, Influx, BigQuery etc the team opted for a combination of Kafka and Druid. Kafka efficiently handles the high volume of data, providing real-time streaming capabilities. Druid, on the other hand, was chosen for its powerful analytics and storage capabilities. The integration of Kafka and Druid enabled the organization to overcome challenges related to big data, real-time analysis, and data storage, providing a robust and scalable solution for their IoT data needs.

To address the cron challenges, we implemented Apache Airflow. Airflow provided a centralized platform for managing, scheduling, and monitoring cron jobs across various microservices. Its DAG (Directed Acyclic Graph) structure allowed for defining workflows, handling dependencies, and automating retries in case of failures. This streamlined approach significantly improved the management of cronjobs, alerting mechanisms, and the overall reliability of the IoT system.

### Outcomes

- Setup Kafka, Druid, Airflow in HA mode, increasing the resiliency and uptime of the system
- Migrated 10 TB of data from old databases to Druid
- Reduced query time from hours to seconds and minutes
- Real time processing of 1 gbps of streaming data
- Migrated around 100 crons from disparate sources to Airflow

### Tools Used

Kafka + Kafka Connectors + Kafka Manager, Druid + S3, Airflow, Kubernetes + Terraform

Client Name - Zenatix Solutions

A leading IOT firm focussed on powered energy and asset management solutions for small and mid-sized buildings.

## Financial Technology (Fintech)

### Challenges

In the Fintech sector, two critical challenges are fraud detection and credit risk analysis. Real-time monitoring and analysis of transaction data are essential for identifying potential fraud, and effective credit risk analysis requires a comprehensive data warehouse solution.

### Solution

To address these challenges, the organization implemented Redis Streams for real-time data processing, S3 + Athena for efficient data modeling, and AWS DMS for seamless data migration from OLTP RDS to OLAP Redshift. The use of PowerBI for data analysis further enhanced the organization's capabilities in making informed decisions. This comprehensive solution enabled the Fintech company to detect and prevent fraud in real-time and conduct thorough credit risk analysis, all while leveraging the power of AWS services.

### Outcomes

- Setup of end to end data streaming and analytics pipeline
- Setup Kafka, Redis, AWS RDS, AWS DMS, AWS Redshift, S3 + Athena
- Reduced query time from hours to seconds and minutes
- Reduced ETL and Reporting time from days to real time
- Scaled the stack and team to increase loan disbursals from 100K USD to 60M USD per month
- Increased the resiliency and stability of the system many fold. Achieved 99.99% of infrastructure uptime
- Reduced NPAs from 9% to 6%, using multiple fraud policies and algorithms throughout the process
- Migrated around 300 crons from disparate sources to Airflow

### Tools Used

Redis Streams, S3 + Athena, AWS RDS, AWS DMS, AWS Redshift + AWS Redshift Spectrum, PowerBI, Airflow, Kubernetes + Terraform

Client Name - Stashfin

## Cryptocurrency and Web3

### Challenges

The cryptocurrency and web3 industry face unique challenges, including the need to analyze both internal and on-chain data in a cost-effective manner. With the decentralized nature of blockchain technology, efficient data modeling becomes crucial for actionable insights.

### Solution

To overcome these challenges, the organization implemented Databricks and Tableau. This combination provided a robust platform for analyzing internal and on-chain data efficiently. The implementation included a cost-effective data modeling strategy using bronze, silver, and gold layers, ensuring that the organization could derive valuable insights from their data without compromising on cost efficiency. This solution empowered the cryptocurrency and web3 company to navigate the complexities of blockchain data analysis effectively.

### Outcomes

- Reduced ETL and Reporting time from days to real time
- Reduced data engineering and data analytics cost by 50% by optimizing time of running ETLs
- Simplified all reporting and ETLs by using single Databricks account for all processing and analytics

### Tools Used

Databricks + Pyspark, Tableau

Client - Bake.io

## Ads Platform

### Challenges

The ads platform industry contends with the immense volume of data generated from ad impressions, clicks, and user interactions. Challenges include managing ETL (Extract, Transform, Load) processes, creating data warehouses, defining schemas, and overall administration of data pipelines.

### Solution

To overcome these challenges, the organization implemented Snowflake and Snowpipe. Snowflake's cloud-based data warehousing and Snowpipe's automatic data ingestion facilitated multiple ETL and ELT processes. This solution allowed the ads platform to efficiently create and manage data warehouses, define schemas dynamically, and automate the flow of data into the system, reducing the administrative burden on the organization.

Client Name - Apple

### Tools Used

Snowflake + Terraform

## Cloud + Data Migration for Multiple Clients

### Challenges

Companies dealing with multiple clients often encounter challenges when migrating data between on-premise and cloud environments. Managing data migration online, minimizing downtime, and supporting various databases (MySQL, MariaDB, PostgreSQL, Oracle, MongoDB, Elasticsearch, Cassandra) pose significant challenges.

### Solution

The organization adopted Debezium to address these migration challenges. Debezium, with its CDC (Change Data Capture) capabilities, enabled online data migration with minimal downtime. It supported various databases, ensuring a smooth transition from on-premise to cloud environments for multiple clients, irrespective of the database technology they used. This streamlined migration approach enhanced the flexibility and efficiency of the migration process.

### Outcomes

- Break multiple monolith databases into specialized databases, reducing the cost of storage and processing and increasing query time
- Real time migration from OLTP databases to OLAP databases and warehouses
- Moved from on-prem infrastructure to cloud infrastructure and vice-versa based on client requirements

Client Name - Coto World, Akamai, Times

### Tools Used

- Debezium, Kafka, Spark, Terraform, Jenkins, etc
- DBs - RDMS, MongoDB, Redis, Druid, Elasticsearch, Cassandra, etc
- Data Warehouses - Clickhouse, Redshift, Snowflake, Databricks, etc
