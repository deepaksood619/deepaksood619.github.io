# Queries

## Source Tables

As with all SQL engines, Flink queries operate on top of tables. It differs from a traditional database because Flink does not manage data at rest locally; instead, its queries operate continuously over external tables.

Flink data processing pipelines begin with source tables. Source tables produce rows operated over during the query’s execution; they are the tables referenced in the `FROM` clause of a query. These could be Kafka topics, databases, filesystems, or any other system that Flink knows how to consume.

Tables can be defined through the SQL client or using environment config file. The SQL client support [SQL DDL commands](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/overview/) similar to traditional SQL. Standard SQL DDL is used to [create](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/create/), [alter](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/alter/), [drop](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/drop/) tables.

Flink has a support for different [connectors](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/overview/) and [formats](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/formats/overview/) that can be used with tables. Following is an example to define a source table backed by a [CSV file](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/formats/csv/) with `emp_id`, `name`, `dept_id` as columns in a `CREATE` table statement.

```sql
SHOW FUNCTIONS;

CREATE TABLE employee_information (
    emp_id INT,
    name VARCHAR,
    dept_id INT
) WITH (
    'connector' = 'filesystem',
    'path' = '/path/to/something.csv',
    'format' = 'csv'
);

SELECT * from employee_information WHERE dept_id = 1;
```

## Examples

```sql
-- Create a table for raw ratings
CREATE TABLE ratings (
	movie_id INT,
	rating DOUBLE,
	event_time TIMESTAMP (3) ,
	WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
) WITH (
	'connector' = 'kafka'
	'topic' = 'raw-ratings',
	'properties.bootstrap.servers' = 'localhost:9092',
	'format' = 'json'
);

CREATE TABLE avg_ratings AS
SELECT
	movie_id,
	AVG (rating) AS avg_rating,
	window_start,
	window_time
FROM
	TUMBLE(DATA = TABLE ratings,
		TIMECOL => DESCRIPTOR (event_time),
		SIZE => INTERVAL '5' MINUTES)
GROUP BY movie_id, window_start, window_end,
	window_time;
	
-- Create a table for movies
CREATE TABLE movies (
	movie_id INT,
	title STRING
) WITH (
	'connector' = 'kafka'
	'topic' = 'movies',
	'properties.bootstrap,servers' = 'localhost:9092',
	'format' = 'json'
);

-- Join the computed ratings with movie data
CREATE TABLE rated_movies AS
SELECT r. movie_id,
	m. title,
	r.avg_rating,
	r. window_start
FROM avg_ratings r
JOIN movies m ON r.movie_id = m.movie_id;
```
