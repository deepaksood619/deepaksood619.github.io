# AWS/Tech/Other Questions

### AWS

- DMS - How to not migrate delete commands to redshift from mysql aurora (so only insert/updates are propagated)
- Savings plan or RI for busty cyclical workload where in day we run 100 nodes and at night we run 10 nodes
- DynamoDB with bigger document size > 400KB, like documents?
- S3 too slow
    - 370ms for 1kb
    - 504ms for 10kb
    - 880ms for 1MB
- S3 delete old files (lifecycle policy configured later)
- Should we store files/binary blobs in mysql aurora for like smaller total storage of 1-2TB of data?
- What is this strategy to separate both compute and storage in REDSHIFT?
- Can we configure rds master/slave in a way that read queries are automatically load-balanced between master and slave?

Should we use protobuf, Avro, JSON, thrift?

What is the dynamodb model for notifications clickstream data

gRPC

- How does grpc scale vs gunicorn (gevent)
- logging
- api gateway?
    - Authentication
- Nginx proxy infront
- Kafka compression

**Right way to keep master tables in databases?**

Right way to bring data from database at start of application?

- Should we keep this kind of data in database or code?

How much to normalize the database?

how to decide that should I keep value in each row or normalize further database

### Tech Questions

- How to share only specific sheet/single tab in google spreadsheet? (AirTable)
- Why same code runs in local laptop having less memory and cpu, but in kubernetes with larger cpu and ram gets evicted. How to add backpressure in pods
    - **HPA takes into account both pods requests together in CPU and not on a single pod**
    - **Grafana workload dashboard shows wrong CPU Limits for a pod**
- right way to pass config and env variables in python application with all checks
    - https://hackersandslackers.com/simplify-your-python-projects-configuration
- Kafka Compression (using snappy, how to do it?)
    - Set topic level compression as snappy but topic log shows data as plaintext
    - Set producer level compression but log shows data as plaintext
    - Consumer with kafkacat shows plain text packets sizes
    - https://github.com/confluentinc/confluent-kafka-python/issues/881
- how does grpc server side streaming work
    - How much clients can grpc handle
    - Do we have to add nginx proxy infront
- **General**
    - Why WhatsApp doesn't let you turn off online feature
- Nginx as sidecar inside pod or as a standalone pod?
- **Why AWS load balancer is showing requests, when nothing is passing through it?**
- Cloud native web server (apache and nginx is not) When to increase threads and when to increase pods / When to add new instance vs optimizing application
- Python - Time complexity of getting an item using index in set, x = (1,2,3), Time Complexity => x[1]

### Designs

You can't pull data from AWS RDS to S3 using Athena. Athena is a query engine over S3 data. To be able to extract data from RDS to S3, you can run a Glue job to read from a particular RDS table and create S3 dump in parquet format which will create another external table pointing to S3 data. Then you can query that S3 data using Athena.

https://stackoverflow.com/questions/53717151/pipeline-from-aws-rds-to-s3-using-glue

https://blog.panoply.io/an-amazonian-battle-comparing-athena-and-redshift

https://blog.openbridge.com/the-definitive-setup-guide-for-aws-athena-analytics-343c507d8449

We have our data source in Amazon Aurora, We run an ETL that sends this data to Amazon Redshift for analytics. We are looking for a data warehousing solution so ETL can be streamlined. We are currently looking at Amazon Athena, Glue, Redshift Spectrum.

**Direct RDS to Redshift Sync (row based logging)**

https://aws.amazon.com/blogs/aws/fast-easy-free-sync-rds-to-redshift

### Personal Questions

1. How can I run an innovative, **operationally efficient** company without increasing stress and sacrificing creativity?
2. How can I build a ship fast, ship early culture while retaining a **culture of excellence?**
3. How can I **monetize** a low-stress life where I get to explore ideas for a living?
4. How can I **push myself** and reflect on my weaknesses without descending into self-loathing?
5. How can I learn to enjoy activities as **ends, not means**?
6. How can I be a thriving knowledge worker **without compromising my health**?
7. How can I use the Internet tolift hundreds of people out of financial insecurity?
8. What's your produest momemt in your life

### Science

- Why mirrors to reflect sunlight from space is not a thing instead of air conditioner and cooling (economically and technologically)
- Sun gives protons this protons are pure energy what happens to the mass which is converted does it follow conservation of energy that is it can neither be created nor be destroyed.
- How can we know that we are going forward or backward in a closed compartment when no external force is applied and we are in a state of motion.

### Health

- Drinking sip sip water or glass of water
- Eating 3 big meals vs 6 small meals
- Drinking just after eating or not

### Jobs

- How to learn so much
- Management vs individual contributor
- How's the job?
	- Solutions architect
- Love going into deep tech, but don't love competitive programming that much
- Want a great set of people to work with

### Others

- Which are the loudest / softest cultures in the world
