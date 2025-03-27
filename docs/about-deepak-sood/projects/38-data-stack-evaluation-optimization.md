# Data Stack Evaluation & Optimization

## How do you evaluate and select tools and technologies for your data stack?

- Scalability
- Storage capacity
- Data types
- Request volume
- Cost-efficiency
- Integration with existing systems
- Security & compliance

## What factors do you consider when deciding between building a custom solution vs. using an off-the-shelf tool?

- Development time
- Scalability
- Cost
- Team expertise
- Business focus
- Maintenance overhead
- Vendor lock-in risks
- Performance and customization needs

## Have you worked with real-time data pipelines? If so, what challenges did you face, and how did you overcome them?

- Yes, worked with Kafka, Flink, Databricks, and Airflow
- Scalability: Load testing with different broker configs
- Performance: Parallelized Spark jobs, optimized with indexing, clustering, and partitioning
- Latency: Tuned batch size, windowing strategies, and compression
- Data consistency: Implemented exactly-once processing with idempotent writes
- Fault tolerance: Implemented retries, dead-letter queues, and monitoring

## How do you design data systems to handle scalability and performance as data volume grows? What strategies do you use to optimize query performance in a data warehouse?

- Indexing, clustering, and partitioning
- Pre-processing at data modeling stage
- Materialized views & caching
- Data sharding & distribution strategies
- Columnar storage formats (Parquet, ORC)
- Query optimization & execution plan analysis

## Have you worked on feature stores or data pipelines for ML models? Can you describe your approach? What is your experience with MLOps and integrating ML models into production systems?

- Yes, worked with MLFlow, Kubeflow for MLOps
- Used vector databases for RAG systems
- Feature engineering & versioning with feature stores
- Model monitoring & retraining pipelines
- CI/CD for ML models with automated deployment
- A/B testing and performance benchmarking

## How do you monitor the health and performance of your data pipelines and infrastructure? How do you handle pipeline failures or data quality issues?

- Monitoring & alerts at each stage
- Exception handling in code
- Distributed tracing & logging (ELK, OpenTelemetry)
- Data validation & anomaly detection
- Auto-scaling & load balancing
- Failover & rollback mechanisms

## Have you ever had to rebuild or refactor a data system? What was the reason, and how did you approach it?

- Yes, migrated from OLTP to OLAP
- Shifted from Redshift to Athena + S3 for a data lake architecture
- Re-architected ETL pipelines for better performance & cost optimization
- Introduced schema evolution to support changing data needs
- Adopted event-driven architecture for real-time analytics

## What are some of the latest trends in data engineering that you’re excited about? Can you share an example of a new tool or technology you learned and implemented in a project? How have you incorporated them into your work?

- Generative BI, integration of GenAI for data cataloguing, Natural Language to SQL are some areas I am very much excited about
- DuckDB, LangChain, Bedrock, SmolAgents are some of the tools and technologies I have learned and implemented in my projects. Yes we have delivered an edtech RAG based project with this.

## What’s the most challenging data engineering project you’ve worked on, and what did you learn from it?

- Migration from Redshift to AWS Athena + S3 architecture. It was challenging as we have to migrate all the data sources, databases, ETLs etc

## Problem solving 1: Solve for X: 3,1,4,13,21,X?

- Tried this with ChatGPT and Gemini cannot find answer
- Tried Consecutive terms, second order term differences, odd indexes, even indexes
- 3, 1, 4, 13, 21, 41
	- 3, 4, 21
		- 1, 17
			- 16
	- 1, 13, 41
		- 12, 28
			- 16

