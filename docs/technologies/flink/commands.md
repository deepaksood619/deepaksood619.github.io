# Commands

[Docker Setup for the Hands-on Exercises](https://developer.confluent.io/courses/apache-flink/docker-setup/)

```bash
git clone https://github.com/confluentinc/learn-apache-flink-101-exercises.git
cd learn-apache-flink-101-exercises
docker compose up --build -d

docker compose run sql-client

# http://localhost:8081/#/job-manager/metrics

docker compose ps
# sql-client
# taskmanager
# jobmanaer
# Kafka broker
# kcat

docker compose down -v
```

```sql
CREATE TABLE `bounded_pageviews` (
  `url` STRING,
  `ts` TIMESTAMP(3)
)
WITH (
  'connector' = 'faker',
  'number-of-rows' = '500',
  'rows-per-second' = '100',
  'fields.url.expression' = '/#{GreekPhilosopher.name}.html',
  'fields.ts.expression' =  '#{date.past ''5'',''1'',''SECONDS''}'
);

SELECT * FROM bounded_pageviews LIMIT 10;
```

## Jobs

- [Create Confluent Manager for Apache Flink Applications \| Confluent Documentation](https://docs.confluent.io/platform/current/flink/jobs/applications/create.html)
- [How to Package a Flink Job with Confluent Manager for Apache Flink \| Confluent Documentation](https://docs.confluent.io/platform/current/flink/jobs/applications/packaging.html)

## Links

- [GitHub - confluentinc/learn-apache-flink-101-exercises](https://github.com/confluentinc/learn-apache-flink-101-exercises)
