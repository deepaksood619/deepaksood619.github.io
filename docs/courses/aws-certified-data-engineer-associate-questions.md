# AWS Certified Data Engineer - Associate Questions

## Question 1

A consultant company uses a cloud-based time-tracking system to track employee work hours. The company has thousands of employees that are globally distributed. The time-tracking system provides a REST API to obtain the records from the previous day in CSV format. The company has a cron on premises that is scheduled to run a Python program each morning at the same time. The program saves the data into an Amazon S3 bucket that serves as a data lake. A data engineer must provide a solution with AWS services that reuses the same Python code and cron configuration.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO.)

- [ ] A - Schedule the cron by using AWS CloudShell
- [x] B - Run the Python code on AWS Lambda functions
- [ ] C - Install Python and the AWS SDK for Python (Boto3) on an Amazon EC2 instance to run the code
- [x] D - Schedule the cron by using Amazon EventBridge Scheduler
- [ ] E - Run the Python code on AWS Cloud9

## Question 2

A finance company has developed a machine learning (ML) model to enhance its investment strategy. The model uses various sources of data about stock, bond, and commodities markets. The model has been approved for production. A data engineer must ensure that the data being used to run ML decisions is accurate, complete, and trustworthy. The data engineer must automate the data preparation for the model's production deployment.

Which solution will meet these requirements?

- [ ] A - Use Amazon SageMaker Feature Store to prepare the data, store the data, and track the data lineage for the model.
- [x] B - Use Amazon SageMaker workflows with an Amazon SageMaker ML Lineage Tracking step to prepare the data for the model.
- [ ] C - Use Amazon SageMaker Data Wrangler to run an exploratory data analysis (EDA) to prepare the data for the model.
- [ ] D - Use Amazon SageMaker Processing to process the input data. Output the processed data to Amazon S3 for the model.

## Question 3

An ecommerce company is running an application on AWS. The application sources recent data from tables in Amazon Redshift. Data that is older than 1 year is accessible in Amazon S3. Recently, a new report has been written in SQL. The report needs to compare a few columns from the current year sales table with the same columns from tables with sales data from previous years. The report runs slowly, with poor performance and long wait times to get results.

A data engineer must optimize the back-end storage to accelerate the query.

Which solution will meet these requirements MOST efficiently?

- [ ] A - Run a Redshift SQL COPY command and load the data from Amazon S3 to Amazon Redshift before running the report. Configure the report to query the table with the most recent data and the newly loaded tables.
- [ ] B - Run a SQL JOIN clause by using Amazon Redshift Spectrum to create a new table from the most recent data and the data in the S3 external table. Configure the report to query the newly created table.
- [x] C - Run the report SQL statement to gather the data from Amazon S3. Store the result set in an Amazon Redshift materialized view. Configure the report to run SQL REFRESH. Then, query the materialized view.
- [ ] D - Run the SQL UNLOAD command on the current sales table to a new external table in Amazon S3. Configure the report to use Amazon Redshift Spectrum to query the newly created table and the existing tables in Amazon S3.

## Question 4

A company is storing data in an Amazon S3 bucket. The company is in the process of adopting a new data lifecycle and retention policy. The policy is defined as follows:

- Any newly created data must be available online and will occasionally need to be analyzed with SQL.
- Data older than 3 years must be securely stored and made available when needed for compliance evaluation within 12 hours.
- Data older than 10 years must be securely deleted.

A data engineer must configure a solution that would ensure that the data is stored cost effectively according to the lifecycle and retention policy.

Which solution will meet these requirements?

- [x] A - Store new data on the S3 Infrequent Access storage class. Query the data in-place on Amazon S3 with Amazon Athena. Create a lifecycle rule to migrate the data to the S3 Glacier Flexible Retrieval storage class after 3 years. Configure the lifecycle rule to delete the data after 10 years.
- [ ] B - Store new data on the S3 Intelligent-Tiering storage class. Configure the storage class with the Deep Archive Access tier. Query the data in-place on Amazon S3 with Amazon Athena. Configure the Intelligent-Tiering actions to delete the data after 10 years.
- [ ] C - Store new data on an Amazon Redshift cluster. Unload older data to the S3 Standard storage class. Create a lifecycle rule that migrates the data to the S3 Glacier Deep Archive storage class after 3 years. Configure the lifecycle rule actions to delete the data after 10 years.
- [ ] D - Store new data on an Amazon RDS database. Create database snapshots to the S3 Standard storage class. Create a lifecycle rule that migrates the snapshots to the S3 Glacier Flexible Retrieval storage class after 3 years. Configure the lifecycle rule actions to delete the data after 10 years.

## Question 5

A company ingests data into an Amazon S3 data lake from multiple operational sources. The company then ingests the data into Amazon Redshift for a business analysis team to analyze. The business analysis team requires access to only the last 3 months of customer data.

Additionally, once a year, the company runs a detailed analysis of the past year's data to compare the overall results of the previous 12 months. After the analysis and comparison, the data is no longer accessed. However, the data must be kept after 12 months for compliance reasons.

Which solution will meet these requirements in the MOST cost-effective manner?

- [ ] A - Ingest 12 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to Amazon S3 after the data is over 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive.
- [ ] B - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to S3 Glacier Deep Archive after the data is over 3 months old. Use Redshift Spectrum for the yearly analysis to include data up to 12 months old.
- [x] C - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to Amazon S3 after the data is over 3 months old. Use Amazon Redshift Spectrum for the yearly analysis to include data up to 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive after the data is over 12 months old.
- [ ] D - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to S3 Glacier Instant Retrieval after the data is over 3 months old. Use Amazon Redshift Spectrum for the yearly analysis to include data up to 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive after the data is over 12 months old.

## Question 6

A company is using an Amazon S3 data lake. The company ingests data into the data lake by using Amazon Kinesis Data Streams. The company reads and processes the incoming data from the stream by using AWS Lambda. The data being ingested has highly variable and unpredictable volume. Currently, the IteratorAge metric is high at peak times when a high volume of data is being posted to the stream. A data engineer must design a solution to increase performance when reading Kinesis Data Streams with Lambda.

Which solution will meet these requirements? (Select THREE.)

- [x] A - Increase the number of shards for the Kinesis data stream.
- [x] B - Test different parallelization factor settings to find the most performant.
- [ ] C - Configure the Kinesis data stream to use provisioned capacity mode.
- [x] D - Register the Lambda function as a consumer with enhanced fan-out.
- [ ] E - Increase the reserved concurrency for the Lambda function.
- [ ] F - Increase the provisioned concurrency for the Lambda function.

### Solution

A, B - By default, Lambda will create one concurrent instance of the Lambda function for each shard. If you have three shards, you will have three concurrent functions. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. One way to increase throughput when you use Kinesis Data Streams and Lambda is to increase the parallelization factor. This solution can cause multiple Lambda function invocations to concurrently process one shard. Therefore, this solution could increase performance.

D - By default, all consumers of a Kinesis data stream share throughput across consumers. Sharing can restrict throughput for any one consumer, such as the Lambda function that processes the data. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. One way to increase throughput when you use Kinesis Data Streams and Lambda is to register the Lambda function as a consumer with enhanced fan-out. This solution would give the Lambda function dedicated throughput capacity for the Kinesis data stream. Therefore, this solution could increase performance.

## Question 7

A data engineer is designing an application that will add data for transformation to an Amazon Simple Queue Service (Amazon SQS) queue. A microservice will receive messages from the queue. The data engineer wants to ensure message persistence.

Which events can remove messages from an SQS queue? (Select THREE.)

- [x] A - An application makes a DeleteMessage API call to Amazon SQS.
- [x] B - The maxReceiveCount has been reached for a message.
- [x] C - The queue is purged.
- [ ] D - An application makes a ReceiveMessage API call to Amazon SQS.
- [ ] E - The visibility timeout expires on a message.
- [ ] F - The configuration for a queue is edited.

## Question 8

A company is running an Amazon Redshift data warehouse on AWS. The company has recently started using a software as a service (SaaS) sales application that is supported by several AWS services. The company wants to transfer some of the data in the SaaS application to Amazon Redshift for reporting purposes.

A data engineer must configure a solution that can continuously send data from the SaaS application to Amazon Redshift.

Which solution will meet these requirements with the LEAST operational overhead?

- [x] A - Create an Amazon AppFlow flow to ingest the selected source data to Amazon Redshift. Configure the flow to run on event.

Correct. With Amazon AppFlow, a flow transfers data between a source and a destination. Amazon AppFlow supports many AWS services and SaaS applications as sources or destinations. A solution that uses Amazon AppFlow can continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

Learn more about [Amazon AppFlow flows](https://docs.aws.amazon.com/appflow/latest/userguide/create-flow-console.html).

- [ ] B - Create an Amazon EventBridge rule that reacts to selected data creation events in the SaaS application. Send the events to Amazon Redshift.

Incorrect. You can use EventBridge to create rules. When an event matches the event pattern defined in a rule, EventBridge sends the event to the specified target. However, to achieve the desired outcome, you would need to use an intermediary service to write the output data to Amazon Redshift. This solution would not continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

Learn more about [how to create EventBridge rules that react to events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule.html).

- [ ] C - Create an Amazon Redshift user-defined function (UDF) in AWS Lambda that can transfer data between the SaaS application and Amazon Redshift. Configure the SaaS application to invoke the Lambda function.

Incorrect. Amazon Redshift can use custom functions defined in Lambda as part of SQL queries. Lambda user-defined functions run in a managed environment that has limited access to any systems beyond Amazon Redshift. This solution would not continuously send data from the SaaS application to Amazon Redshift.

Learn more about [Lambda user-defined functions](https://docs.aws.amazon.com/redshift/latest/dg/udf-creating-a-lambda-sql-udf.html).

- [ ] D - Deploy an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) workflow. Configure the SaaS application to send the data to Amazon MWAA and output the data by using an Amazon Redshift Java Database Connectivity (JDBC) connector.

Incorrect. Amazon MWAA is a managed orchestration service for Apache Airflow that you can use to set up and operate end-to-end data pipelines in the cloud at scale. You can use Amazon MWAA to connect to Amazon Redshift through a JDBC connector. However, this solution would require additional configuration and management of Amazon MWAA. This solution would not continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

## Question 9

A company is collecting data that is generated by its users for analysis by using an Amazon S3 data lake. Some of the data being collected and stored in Amazon S3 includes personally identifiable information (PII).

The company wants a data engineer to design an automated solution to identify new and existing data that needs PII to be masked before analysis is performed. Additionally, the data engineer must provide an overview of the data that is identified. The task of masking the data will be handled by an application already created in the AWS account. The data engineer needs to design a solution that can invoke this application in real time when PII is found.

Which solution will meet these requirements with the LEAST operational overhead?

- [ ] A - Create an AWS Lambda function to analyze data for PII. Configure notification settings on the S3 bucket to invoke the Lambda function when a new object is uploaded.

Incorrect. This solution could identify data with PII for new objects written to Amazon S3. However, this solution does not account for the existing objects in Amazon S3. Additionally, this solution does not address the requirement to provide an overview of data found with PII or the requirement to integrate with the masking application.

Learn more about [how to use Lambda with Amazon S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

- [ ] B - Configure notification settings on the S3 bucket. Configure an Amazon EventBridge rule for the default event bus for new object uploads. Set the masking application as the target for the rule.

Incorrect. This solution would send all new objects to the masking application. However, this solution does not account for the existing objects in Amazon S3. Additionally, this solution would send all new objects to the masking application, instead of only the objects with PII. Therefore, this solution is not an efficient use of resources. Additionally, this solution does not address the requirement to provide an overview of data found with PII.

Learn more about [how to use EventBridge with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html).

- [ ] C - Enable Amazon Macie in the AWS account. Create an AWS Lambda function to run on a schedule to poll Macie findings and invoke the masking application.

Incorrect. This solution could meet most of the requirements of the scenario. However, the creation and management of the Lambda function involves more overhead than the use of EventBridge.

Learn more about [Macie findings](https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html).

- [x] D - Enable Amazon Macie in the AWS account. Create an Amazon EventBridge rule for the default event bus for Macie findings. Set the masking application as the target for the rule.

Correct. Macie can analyze data in S3 buckets and determine if the data contains sensitive data like PII. Macie creates findings based on its analysis. Users can view the findings as a report in the AWS Management Console. Macie can also create events that are sent to the default event bus for EventBridge. You can create a rule that filters the findings being generated by Macie. Then, EventBridge can invoke the masking application. This solution meets all requirements and has the lowest operational overhead.

Learn more about [Macie and EventBridge integration](https://docs.aws.amazon.com/macie/latest/user/findings-monitor-events-eventbridge.html).

## Question 10
