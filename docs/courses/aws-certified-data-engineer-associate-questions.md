# AWS Certified Data Engineer - Associate Questions

[AWS Certified Data Engineer - Associate DEA-C01 Exam - Free Exam Q&As, Page 1 | ExamTopics](https://www.examtopics.com/exams/amazon/aws-certified-data-engineer-associate-dea-c01/view/)

## Question 1

A consultant company uses a cloud-based time-tracking system to track employee work hours. The company has thousands of employees that are globally distributed. The time-tracking system provides a REST API to obtain the records from the previous day in CSV format. The company has a cron on premises that is scheduled to run a Python program each morning at the same time. The program saves the data into an Amazon S3 bucket that serves as a data lake. A data engineer must provide a solution with AWS services that reuses the same Python code and cron configuration.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO.)

- [ ] A - Schedule the cron by using AWS CloudShell

Incorrect. CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console. CloudShell is only for interactive work through a browser.

Learn more about [CloudShell](https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html).

- [x] B - Run the Python code on AWS Lambda functions

Correct. Lambda provides runtimes for Python that run your code to process events. Your code runs in an environment that includes the SDK for Python to access various AWS services, including S3 buckets.

Learn more about [how to build Lambda functions with Python](https://docs.aws.amazon.com/lambda/latest/dg/lambda-python.html).

- [ ] C - Install Python and the AWS SDK for Python (Boto3) on an Amazon EC2 instance to run the code

Incorrect. You can use the SDK for Python with Amazon EC2. You can configure a scheduler by using cron. However, this solution will require additional operational overhead.

Learn more about [how to build Lambda functions with Python](https://docs.aws.amazon.com/lambda/latest/dg/lambda-python.html).

- [x] D - Schedule the cron by using Amazon EventBridge Scheduler

Correct. EventBridge Scheduler is a serverless scheduler that gives you the ability to create, run, and manage tasks from one centrally managed service.

Learn more about [EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html).

- [ ] E - Run the Python code on AWS Cloud9

Incorrect. You can run Python and Python libraries in AWS Cloud9. However, this is an ephemeral instance. Additionally, this solution does not meet the requirement to use AWS services.

Learn more about [how to run Python in AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-python.html).

## Question 2

A finance company has developed a machine learning (ML) model to enhance its investment strategy. The model uses various sources of data about stock, bond, and commodities markets. The model has been approved for production. A data engineer must ensure that the data being used to run ML decisions is accurate, complete, and trustworthy. The data engineer must automate the data preparation for the model's production deployment.

Which solution will meet these requirements?

- [ ] A - Use Amazon SageMaker Feature Store to prepare the data, store the data, and track the data lineage for the model.

Incorrect. You can use SageMaker Feature Store to create, store, and share features for an ML model. However, SageMaker Feature Store does not have any native functionality to ensure that the data being used to run ML decisions is accurate, complete, and trustworthy.

Learn more about [SageMaker Feature Store](https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html).

- [x] B - Use Amazon SageMaker workflows with an Amazon SageMaker ML Lineage Tracking step to prepare the data for the model.

Correct. SageMaker ML Lineage Tracking creates and stores information about the steps of an ML workflow. SageMaker ML Lineage Tracking gives you the ability to establish model governance and audit standards. SageMaker ML Lineage Tracking helps to ensure that the data being used to run ML decisions is accurate, complete, and trustworthy.

Learn more about [SageMaker ML Lineage Tracking](https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html).

- [ ] C - Use Amazon SageMaker Data Wrangler to run an exploratory data analysis (EDA) to prepare the data for the model.

Incorrect. You can use SageMaker Data Wrangler to run an EDA and to prepare data for use in ML. However, SageMaker Data Wrangler does not have any native functionality to ensure that the data being used to run ML decisions is accurate, complete, and trustworthy.

Learn more about [SageMaker Data Wrangler](https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html).

- [ ] D - Use Amazon SageMaker Processing to process the input data. Output the processed data to Amazon S3 for the model.

Incorrect. SageMaker Processing is a managed service that you can use to run operations, including data-processing workloads, data validation, model evaluation, and model interpretation. However, SageMaker Processing does not have any native functionality to ensure that the data being used to run ML decisions is accurate, complete, and trustworthy.

Learn more about [SageMaker Processing](https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html).

## Question 3

An ecommerce company is running an application on AWS. The application sources recent data from tables in Amazon Redshift. Data that is older than 1 year is accessible in Amazon S3. Recently, a new report has been written in SQL. The report needs to compare a few columns from the current year sales table with the same columns from tables with sales data from previous years. The report runs slowly, with poor performance and long wait times to get results.

A data engineer must optimize the back-end storage to accelerate the query.

Which solution will meet these requirements MOST efficiently?

- [ ] A - Run a Redshift SQL COPY command and load the data from Amazon S3 to Amazon Redshift before running the report. Configure the report to query the table with the most recent data and the newly loaded tables.

Incorrect. A solution that loads older data into Amazon Redshift by using the COPY command would consume unnecessary resources in the Redshift cluster. Additionally, the command would not significantly improve the performance of the report.

Learn more about [Redshift COPY examples](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html).

- [ ] B - Run a SQL JOIN clause by using Amazon Redshift Spectrum to create a new table from the most recent data and the data in the S3 external table. Configure the report to query the newly created table.

Incorrect. A solution that creates a new table in Amazon Redshift with the JOIN clause would consume unnecessary resources in the Redshift cluster. Additionally, the clause would not significantly improve the performance of the report.

Learn more about [Redshift JOIN examples](https://docs.aws.amazon.com/redshift/latest/dg/r_Join_examples.html).

- [x] C - Run the report SQL statement to gather the data from Amazon S3. Store the result set in an Amazon Redshift materialized view. Configure the report to run SQL REFRESH. Then, query the materialized view.

Correct. You can use Redshift materialized views to speed up queries that are predictable and repeated. A solution that runs SQL REFRESH on the materialized view would ensure that the latest data from the current sales table is included in the report.

Learn more about [Redshift materialized views](https://docs.aws.amazon.com/redshift/latest/dg/materialized-view-overview.html).

- [ ] D - Run the SQL UNLOAD command on the current sales table to a new external table in Amazon S3. Configure the report to use Amazon Redshift Spectrum to query the newly created table and the existing tables in Amazon S3.

Incorrect. A solution that transfers the sales table by using the Redshift UNLOAD command would not improve the performance of the report. This solution would query all the data in place on Amazon S3.

Learn more about [Redshift UNLOAD](https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html).

## Question 4

A company is storing data in an Amazon S3 bucket. The company is in the process of adopting a new data lifecycle and retention policy. The policy is defined as follows:

- Any newly created data must be available online and will occasionally need to be analyzed with SQL.
- Data older than 3 years must be securely stored and made available when needed for compliance evaluation within 12 hours.
- Data older than 10 years must be securely deleted.

A data engineer must configure a solution that would ensure that the data is stored cost effectively according to the lifecycle and retention policy.

Which solution will meet these requirements?

- [x] A - Store new data on the S3 Infrequent Access storage class. Query the data in-place on Amazon S3 with Amazon Athena. Create a lifecycle rule to migrate the data to the S3 Glacier Flexible Retrieval storage class after 3 years. Configure the lifecycle rule to delete the data after 10 years.

Correct. A solution that uses S3 Lifecycle policies ensures that data is stored cost effectively throughout the data lifecycle. You can lifecycle data to a cheaper storage class based on age when you have predictable usage patterns. You can use this solution to comply with lifecycle and retention policies. A solution that uses the S3 Infrequent-Access storage class will ensure that data is cost effectively made available for occasional analysis by using SQL with Athena. A lifecycle rule that migrates data to the S3 Glacier Flexible Retrieval storage class will ensure that data is available for compliance evaluation within 12 hours.

Learn more about [S3 Lifecycles](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html).

Learn more about [how to query S3 data with Athena](https://docs.aws.amazon.com/athena/latest/ug/using-athena-sql.html).

Learn more about [S3 Glacier retrieval times](https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html).

- [ ] B - Store new data on the S3 Intelligent-Tiering storage class. Configure the storage class with the Deep Archive Access tier. Query the data in-place on Amazon S3 with Amazon Athena. Configure the Intelligent-Tiering actions to delete the data after 10 years.

Incorrect. S3 Intelligent-Tiering can optimize storage costs by automatically moving data to the most cost-effective access tier. S3 Intelligent-Tiering is useful when access patterns change or are unknown. However, the scenario has a known access pattern. Data needs to be available online for the first 3 years. S3 Intelligent-Tiering would not be the appropriate solution because some of the data could transition into the Archive Access tier during the first 10 years. Additionally, any data that migrates to the Deep Archive Access tier could take more than 12 hours to retrieve.

Learn more about [S3 Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html).

Learn more about [how to query S3 data with Athena](https://docs.aws.amazon.com/athena/latest/ug/using-athena-sql.html).

Learn more about [S3 Glacier Deep Archive retrieval times](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/amazon-s3-glacier.html).

- [ ] C - Store new data on an Amazon Redshift cluster. Unload older data to the S3 Standard storage class. Create a lifecycle rule that migrates the data to the S3 Glacier Deep Archive storage class after 3 years. Configure the lifecycle rule actions to delete the data after 10 years.

Incorrect. This solution would give you the ability to immediately query new data on Amazon Redshift. However, a solution that stores the data in this manner would not be cost effective because the data is only queried occasionally. Additionally, any data that migrates to the S3 Glacier Deep Archive storage class could take more than 12 hours to retrieve.

Learn more about [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html).

Learn more about [S3 Glacier Deep Archive retrieval times](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/amazon-s3-glacier.html).

- [ ] D - Store new data on an Amazon RDS database. Create database snapshots to the S3 Standard storage class. Create a lifecycle rule that migrates the snapshots to the S3 Glacier Flexible Retrieval storage class after 3 years. Configure the lifecycle rule actions to delete the data after 10 years.

Incorrect. This solution would give you the ability to immediately query new data on Amazon RDS. However, a solution that stores the data in this manner would not be cost effective. Additionally, you cannot directly migrate RDS snapshots to S3 Glacier.

Learn more about [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html).

## Question 5

A company ingests data into an Amazon S3 data lake from multiple operational sources. The company then ingests the data into Amazon Redshift for a business analysis team to analyze. The business analysis team requires access to only the last 3 months of customer data.

Additionally, once a year, the company runs a detailed analysis of the past year's data to compare the overall results of the previous 12 months. After the analysis and comparison, the data is no longer accessed. However, the data must be kept after 12 months for compliance reasons.

Which solution will meet these requirements in the MOST cost-effective manner?

- [ ] A - Ingest 12 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to Amazon S3 after the data is over 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive.

Incorrect. You can use Redshift Spectrum to access and query S3 data from Amazon Redshift. However, this solution is not the most cost effective. After the data is 3 months old, the company needs to access the data only one more time for the yearly analysis. The most cost-effective solution is to ingest only the last 3 months of data into Amazon Redshift. This solution ingests 12 months of data. Therefore, this solution includes unused data in the Redshift cluster.

- [ ] B - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to S3 Glacier Deep Archive after the data is over 3 months old. Use Redshift Spectrum for the yearly analysis to include data up to 12 months old.

Incorrect. You can use Redshift Spectrum to access and query S3 data from Amazon Redshift. This solution archives the data after 3 months. However, the data will need to be accessed again for the yearly analysis. Redshift Spectrum does not give you the ability to access and query S3 Glacier Deep Archive data. Additionally, Amazon Redshift cannot unload data directly to S3 Glacier Deep Archive.

Learn more about [Redshift UNLOAD](https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html).

- [x] C - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to Amazon S3 after the data is over 3 months old. Use Amazon Redshift Spectrum for the yearly analysis to include data up to 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive after the data is over 12 months old.

Correct. You can use Redshift Spectrum to access and query S3 data from Amazon Redshift. You do not need to keep data over 3 months old in Amazon Redshift. Instead, you can unload the data to Amazon S3. Then, you can use Redshift Spectrum for the yearly analysis. Additionally, S3 Glacier Deep Archive provides the most cost-effective option for long-term data storage for compliance reasons.

Learn more about [Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html).

Learn more about [how to manage storage classes in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-infreq-data-access).

- [ ] D - Ingest 3 months of data into Amazon Redshift. Automate an unload process from Amazon Redshift to S3 Glacier Instant Retrieval after the data is over 3 months old. Use Amazon Redshift Spectrum for the yearly analysis to include data up to 12 months old. Implement a lifecycle policy in Amazon S3 to move the unloaded data to S3 Glacier Deep Archive after the data is over 12 months old.

Incorrect. You can use Redshift Spectrum to access and query S3 data from Amazon Redshift. This solution archives the data after 3 months. However, the data will need to be accessed again for the yearly analysis. Redshift Spectrum does not give you the ability to access and query S3 Glacier Instant Retrieval data. Additionally, Amazon Redshift cannot unload data directly to S3 Glacier Instant Retrieval.

Learn more about [Redshift UNLOAD](https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html).

## Question 6

A company is using an Amazon S3 data lake. The company ingests data into the data lake by using Amazon Kinesis Data Streams. The company reads and processes the incoming data from the stream by using AWS Lambda. The data being ingested has highly variable and unpredictable volume. Currently, the IteratorAge metric is high at peak times when a high volume of data is being posted to the stream. A data engineer must design a solution to increase performance when reading Kinesis Data Streams with Lambda.

Which solution will meet these requirements? (Select THREE.)

- [x] A - Increase the number of shards for the Kinesis data stream.

Correct. By default, Lambda will create one concurrent instance of the Lambda function for each shard. If you have three shards, you will have three concurrent functions. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. One way to increase throughput when you use Kinesis Data Streams and Lambda is to reshard. To reshard is to increase the number of shards for Kinesis Data Streams. If there are more shards, there will be more Lambda function invocations that concurrently process data.

Learn more about [how to use Lambda with Kinesis Data Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html).

- [x] B - Test different parallelization factor settings to find the most performant.

Correct. By default, Lambda will create one concurrent instance of the Lambda function for each shard. If you have three shards, you will have three concurrent functions. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. One way to increase throughput when you use Kinesis Data Streams and Lambda is to increase the parallelization factor. This solution can cause multiple Lambda function invocations to concurrently process one shard. Therefore, this solution could increase performance.

Learn more about [how to use Lambda with Kinesis Data Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html).

- [ ] C - Configure the Kinesis data stream to use provisioned capacity mode.

Incorrect. Kinesis Data Streams can run in on-demand mode or in provisioned capacity mode. These capacity modes control the scaling of the Kinesis data stream. A solution that uses provisioned concurrency might not increase performance. Because of the highly unpredictable and variable nature of the data, on-demand capacity mode would be more performant.

Learn more about [provisioned and on-demand capacity modes for Kinesis](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html).

- [x] D - Register the Lambda function as a consumer with enhanced fan-out.

Correct. By default, all consumers of a Kinesis data stream share throughput across consumers. Sharing can restrict throughput for any one consumer, such as the Lambda function that processes the data. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. One way to increase throughput when you use Kinesis Data Streams and Lambda is to register the Lambda function as a consumer with enhanced fan-out. This solution would give the Lambda function dedicated throughput capacity for the Kinesis data stream. Therefore, this solution could increase performance.

Learn more about [enhanced fan-out consumers and Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-configure).

- [ ] E - Increase the reserved concurrency for the Lambda function.

Incorrect. The scenario states that the IteratorAge is high. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. The scenario does not mention anything about reaching Lambda concurrency quotas. Additionally, Lambda scales based on the number of shards and the parallelization factor for Kinesis Data Streams. Therefore, a solution that increases the reserved concurrency for the function will not improve performance.

Learn more about [reserved concurrency for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html).

- [ ] F - Increase the provisioned concurrency for the Lambda function.

Incorrect. The scenario states that the IteratorAge is high. A high IteratorAge implies that the last record that is read from the Kinesis data stream is increasing in age. A high IteratorAge could mean that the data is not being processed in a timely manner. The scenario does not mention anything about reaching Lambda concurrency quotas. Additionally, Lambda scales based on the number of shards and the parallelization factor for Kinesis Data Streams. Therefore, a solution that increases the provisioned concurrency for the function will not improve performance.

Learn more about [provisioned concurrency for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html).

## Question 7

A data engineer is designing an application that will add data for transformation to an Amazon Simple Queue Service (Amazon SQS) queue. A microservice will receive messages from the queue. The data engineer wants to ensure message persistence.

Which events can remove messages from an SQS queue? (Select THREE.)

- [x] A - An application makes a DeleteMessage API call to Amazon SQS.

Correct. Amazon SQS is a message queue service. An SQS queue adds a highly available buffer between data producers and consumers. A DeleteMessage API call is the typical method to remove messages from a queue. A consumer application receives the message, processes the message, and then tells the queue to delete the message.

Learn more about [how to work with SQS messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/working-with-messages.html).

Learn more about [the DeleteMessage action in Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html).

- [x] B - The maxReceiveCount has been reached for a message.

Correct. Amazon SQS is a message queue service. An SQS queue adds a highly available buffer between data producers and consumers. Typically, a consumer application receives the message, processes the message, and then tells the queue to delete the message in a separate API call. The maxReceiveCount is a property of a queue that indicates how many times a message can be received before the message is deleted and added to a dead-letter queue. If a message is received repeatedly but not deleted, then the issue could originate in the data in the queue rather than in the consumers.

Learn more about [SQS dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).

- [x] C - The queue is purged.

Correct. Amazon SQS is a message queue service. An SQS queue adds a highly available buffer between data producers and consumers. To purge a queue removes all messages from the queue without the deletion of the queue. You can purge a queue as a troubleshooting step to reset an application.

Learn more about [how to purge messages from an SQS queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-purge-queue.html).

- [ ] D - An application makes a ReceiveMessage API call to Amazon SQS.

Incorrect. A ReceiveMessage call gives a consumer the ability to get data from the queue. The data is not deleted from the queue, but can invoke a visibility timeout. Visibility timeouts do not remove messages from an SQS queue. Typically, a consumer application receives the message, processes the message, and then tells the queue to delete the message in a separate API call.

Learn more about [how to work with SQS messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/working-with-messages.html).

Learn more about [Amazon SQS visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html).

- [ ] E - The visibility timeout expires on a message.

Incorrect. A visibility timeout is a period when Amazon SQS ensures that no consumers can receive or process the message after the message is received. Visibility timeouts do not remove messages from an SQS queue.

Learn more about [Amazon SQS visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html).

- [ ] F - The configuration for a queue is edited.

Incorrect. To edit a queue can change properties of the queue. However, to edit a queue does not remove messages from the queue. To purge a queue would remove the messages.

Learn more about [how to edit a queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-edit-queue.html).

Learn more about [how to purge messages from an SQS queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-purge-queue.html).

## Question 8

A company is running an Amazon Redshift data warehouse on AWS. The company has recently started using a software as a service (SaaS) sales application that is supported by several AWS services. The company wants to transfer some of the data in the SaaS application to Amazon Redshift for reporting purposes.

A data engineer must configure a solution that can continuously send data from the SaaS application to Amazon Redshift.

Which solution will meet these requirements with the LEAST operational overhead?

- [x] A - Create an Amazon AppFlow flow to ingest the selected source data to Amazon Redshift. Configure the flow to run on event.

Correct. With Amazon AppFlow, a flow transfers data between a source and a destination. Amazon AppFlow supports many AWS services and SaaS applications as sources or destinations. A solution that uses Amazon AppFlow can continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

Learn more about [Amazon AppFlow flows](https://docs.aws.amazon.com/appflow/latest/userguide/create-flow-console.html).

- [ ] B - Create an Amazon EventBridge rule that reacts to selected data creation events in the SaaS application. Send the events to Amazon Redshift.

Incorrect. You can use EventBridge to create rules. When an event matches the event pattern defined in a rule, EventBridge sends the event to the specified target. However, to achieve the desired outcome, you would need to use an intermediary service to write the output data to Amazon Redshift. This solution would not continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

Learn more about [how to create EventBridge rules that react to events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule.html).

- [ ] C - Create an Amazon Redshift user-defined function (UDF) in AWS Lambda that can transfer data between the SaaS application and Amazon Redshift. Configure the SaaS application to invoke the Lambda function.

Incorrect. Amazon Redshift can use custom functions defined in Lambda as part of SQL queries. Lambda user-defined functions run in a managed environment that has limited access to any systems beyond Amazon Redshift. This solution would not continuously send data from the SaaS application to Amazon Redshift.

Learn more about [Lambda user-defined functions](https://docs.aws.amazon.com/redshift/latest/dg/udf-creating-a-lambda-sql-udf.html).

- [ ] D - Deploy an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) workflow. Configure the SaaS application to send the data to Amazon MWAA and output the data by using an Amazon Redshift Java Database Connectivity (JDBC) connector.

Incorrect. Amazon MWAA is a managed orchestration service for Apache Airflow that you can use to set up and operate end-to-end data pipelines in the cloud at scale. You can use Amazon MWAA to connect to Amazon Redshift through a JDBC connector. However, this solution would require additional configuration and management of Amazon MWAA. This solution would not continuously send data from the SaaS application to Amazon Redshift with the least operational overhead.

## Question 9

A company is collecting data that is generated by its users for analysis by using an Amazon S3 data lake. Some of the data being collected and stored in Amazon S3 includes personally identifiable information (PII).

The company wants a data engineer to design an automated solution to identify new and existing data that needs PII to be masked before analysis is performed. Additionally, the data engineer must provide an overview of the data that is identified. The task of masking the data will be handled by an application already created in the AWS account. The data engineer needs to design a solution that can invoke this application in real time when PII is found.

Which solution will meet these requirements with the LEAST operational overhead?

- [ ] A - Create an AWS Lambda function to analyze data for PII. Configure notification settings on the S3 bucket to invoke the Lambda function when a new object is uploaded.

Incorrect. This solution could identify data with PII for new objects written to Amazon S3. However, this solution does not account for the existing objects in Amazon S3. Additionally, this solution does not address the requirement to provide an overview of data found with PII or the requirement to integrate with the masking application.

Learn more about [how to use Lambda with Amazon S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html).

- [ ] B - Configure notification settings on the S3 bucket. Configure an Amazon EventBridge rule for the default event bus for new object uploads. Set the masking application as the target for the rule.

Incorrect. This solution would send all new objects to the masking application. However, this solution does not account for the existing objects in Amazon S3. Additionally, this solution would send all new objects to the masking application, instead of only the objects with PII. Therefore, this solution is not an efficient use of resources. Additionally, this solution does not address the requirement to provide an overview of data found with PII.

Learn more about [how to use EventBridge with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html).

- [ ] C - Enable Amazon Macie in the AWS account. Create an AWS Lambda function to run on a schedule to poll Macie findings and invoke the masking application.

Incorrect. This solution could meet most of the requirements of the scenario. However, the creation and management of the Lambda function involves more overhead than the use of EventBridge.

Learn more about [Macie findings](https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html).

- [x] D - Enable Amazon Macie in the AWS account. Create an Amazon EventBridge rule for the default event bus for Macie findings. Set the masking application as the target for the rule.

Correct. Macie can analyze data in S3 buckets and determine if the data contains sensitive data like PII. Macie creates findings based on its analysis. Users can view the findings as a report in the AWS Management Console. Macie can also create events that are sent to the default event bus for EventBridge. You can create a rule that filters the findings being generated by Macie. Then, EventBridge can invoke the masking application. This solution meets all requirements and has the lowest operational overhead.

Learn more about [Macie and EventBridge integration](https://docs.aws.amazon.com/macie/latest/user/findings-monitor-events-eventbridge.html).

## Question 10

An ecommerce company runs several applications on AWS. The company wants to design a centralized streaming log ingestion solution. The solution needs to be able to convert the log files to Apache Parquet format. Then, the solution must store the log files in Amazon S3. The number of log files being created varies throughout the day. A data engineer must configure a solution that ensures the log files are delivered in near real time.

Which solution will meet these requirements with the LEAST operational overhead?

- [ ] A - Configure the applications to send the log files to an input S3 bucket. Create an Amazon EventBridge event that starts an AWS Glue extract, transform, and load (ETL) workflow when the log files are delivered to Amazon S3. Configure the workflow to output the Parquet files to an output S3 bucket.

Incorrect. This solution could automatically convert the log files to Parquet as the log files are delivered to the S3 bucket. However, this solution is highly dependent on the log rotation schedule set within the applications. Because of this dependency, this solution would not ensure that the log files are delivered in near real time.

Learn more about [how to automate AWS Glue workflows with EventBridge](https://docs.aws.amazon.com/glue/latest/dg/starting-workflow-eventbridge.html).

- [x] B - Configure the applications to send the log files to Amazon Kinesis Data Firehose. Configure Kinesis Data Firehose to invoke an AWS Lambda function that converts the log files to Parquet format. Configure Kinesis Data Firehose to deliver the Parquet files to an output S3 bucket.

Correct. You can use Kinesis Data Firehose to deliver log files to Amazon S3 with the least operational overhead. You can use a data-transformation Lambda function with Kinesis Data Firehose. This solution can convert log files to the correct format before the log files are delivered to Amazon S3.

Learn more about [how to transform incoming source data with Lambda functions on Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html).

- [ ] C - Configure the applications to send the log files to Amazon Kinesis Data Streams. Install the Kinesis Client Library (KCL) on a group of Amazon EC2 instances. Use the EC2 instances to read the stream records and convert the log files to Parquet and store the Parquet files in Amazon S3.

Incorrect. You can use Kinesis Data Streams and a group of EC2 instances to convert log files and to deliver the log files to an S3 bucket in near real time. However, this solution requires you to develop a custom consumer application. Additionally, a solution that requires you to manage a group of EC2 instances can increase the amount of operational overhead. This solution would not ensure that the log files are delivered with the least operational overhead.

Learn more about [how to develop custom consumer applications by using KCL](https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html).

- [ ] D - Configure the applications to send the log files to an Amazon EMR cluster with Hive installed. Create a table from the log files by using a regex. Create an external table on Amazon S3 in Hive with the format set to Parquet. Schedule a HiveQL UNLOAD query to store the log files to the external S3 table.

Incorrect. This solution could convert log files and deliver the log files to the S3 bucket in near real time. However, this solution requires you to develop a custom HiveQL script. Additionally, a solution that requires you to manage an EMR cluster can increase the amount of operational overhead. This solution would not ensure that the log files are delivered with the least operational overhead.

Learn more about [how to use Hive on Amazon EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hive.html).

## Question 11

A company has deployed a data pipeline that uses AWS Glue to process records. The records include a JSON-formatted event and can sometimes include base64-encoded images. The AWS Glue job is configured with 10 data processing units (DPUs). However, the AWS Glue job regularly scales to several hundred DPUs and can take a long time to run.

A data engineer must monitor the data pipeline to determine the appropriate DPU capacity.

Which solution will meet these requirements?

- [x] A - Inspect the job run monitoring section of the AWS Glue console. Review the results of the previous job runs. Visualize the profiled metrics to determine the appropriate number of DPUs.

Correct. You can use the job run monitoring section of the AWS Glue console to determine the appropriate DPU capacity for this scenario. The job monitoring section of the AWS Glue console uses the results of previous job runs to determine the appropriate DPU capacity.

Learn more about [how to determine DPU capacity](https://docs.aws.amazon.com/glue/latest/dg/monitor-debug-capacity.html).

- [ ] B - Inspect the visual extract, transform, and load (ETL) section of the AWS Glue console. Review the job details with the visual section. Visualize the selected job details to determine the appropriate number of DPUs.

Incorrect. The visual ETL section of the AWS Glue console can help create and customize jobs in the console. However, you cannot use this solution to determine the appropriate DPU capacity.

Learn more about [how to use the visual editor to create and customize your jobs](https://docs.aws.amazon.com/glue/latest/ug/creating-jobs-chapter.html).

- [ ] C - Inspect the metrics section of the Amazon CloudWatch console. Filter the metrics by searching for AWS Glue. Inspect the aggregate job details to determine the appropriate number of DPUs.

Incorrect. You can use the CloudWatch metrics section to access historical information about AWS Glue performance. However, a solution that inspects the aggregate job details would not provide you with the information necessary to determine the appropriate DPU capacity.

Learn more about [how to monitor AWS Glue by using CloudWatch metrics](https://docs.aws.amazon.com/glue/latest/dg/monitoring-awsglue-with-cloudwatch-metrics.html).

- [ ] D - Inspect the logs insights section of the Amazon CloudWatch console. Select the log group that belongs to the AWS Glue job. Query the logs for "DPU" to determine the appropriate number of DPUs.

Incorrect. You can use the CloudWatch logs insights section to analyze Apache Spark job logs, including driver logs, executor logs, and an Apache Spark job progress bar. The logs do not capture information about consumed DPUs. Therefore, a solution that filters for DPUs would not provide you with the information necessary to determine the appropriate DPU capacity.

Learn more about [logs for AWS Glue jobs](https://docs.aws.amazon.com/glue/latest/dg/monitor-continuous-logging.html).

## Question 12

A company has data in an on-premises NFS file share. The company plans to migrate to AWS. The company uses the data for data analysis. The company has written AWS Lambda functions to analyze the data. The company wants to continue to use NFS for the file system that Lambda accesses. The data must be shared across all concurrently running Lambda functions.

Which solution should the company use for this data migration?

- [ ] A - Migrate the data into the local storage for each Lambda function. Use the local storage for data access.

Incorrect. A solution that migrates the data to the local storage for Lambda does not meet the requirements of using NFS. Additionally, this solution does not allow the data to be accessible across all concurrently running Lambda functions because local storage for Lambda is ephemeral.

Learn more about [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

- [ ] B - Migrate the data to Amazon Elastic Block Store (Amazon EBS) volumes. Access the EBS volumes from the Lambda functions.

Incorrect. Amazon EBS is a block storage service that you can use with Amazon EC2. This solution does not meet the requirements. You cannot use Lambda to access the data on an EBS volume.

Learn more about [Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html).

- [ ] C - Migrate the data to Amazon DynamoDB. Ensure the Lambda functions have permissions to access the table.

Incorrect. DynamoDB is a serverless NoSQL database service. This solution does not meet the requirements because you cannot access DynamoDB by using NFS.

Learn more about [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html).

- [x] D - Migrate the data to Amazon Elastic File System (Amazon EFS). Configure the Lambda functions to mount the file system.

Correct. Amazon EFS is a scalable file storage service that you can integrate with Lambda or other compute options. A solution that uses Amazon EFS for file storage meets the requirements. Lambda can access the data by using NFS. Additionally, the data is accessible from all concurrently running Lambda functions.

Learn more about [how to use a Lambda function to mount an Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html).

## Question 13

A company is running a cloud-based software application in an Amazon EC2 instance backed by an Amazon RDS for Microsoft SQL Server database. The application collects, processes, and stores confidential information and records in the database. The company wants to eliminate the risk of credential exposure.

Which solution will meet this requirement?

- [ ] A - Use AWS Identity and Access Management (IAM) database authentication to configure authentication to the RDS for Microsoft SQL Server database.

Incorrect. Microsoft SQL Server does not support IAM database authentication. IAM database authentication only works with MariaDB, MySQL, and PostgreSQL.

Learn more about [IAM database authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html).

- [ ] B - Use AWS Systems Manager Parameter Store to store the credentials. Configure automatic rotation in Parameter Store to rotate the credentials every 30 days.

Incorrect. You can use Parameter Store to store credentials. However, Parameter Store does not support the automatic rotation of credentials.

Learn more about [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).

- [ ] C - Use AWS Security Token Service (AWS STS) to configure authentication to the RDS for Microsoft SQL Server database.

Incorrect. AWS STS provides temporary, limited-privilege credentials for users. A solution that uses AWS STS would not eliminate the risk of credential exposure.

Learn more about [AWS STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html).

- [x] D - Use AWS Secrets Manager to store the credentials. Configure automatic rotation in Secrets Manager to rotate the credentials every 30 days.

Correct. You can use Secrets Manager to store credentials and to configure automatic rotation.

Learn more about [how to rotate secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html).

## Question 14

A data engineer is designing an application that will transform data in containers managed by Amazon Elastic Kubernetes Service (Amazon EKS). The containers run on Amazon EC2 nodes. Each containerized application will transform independent datasets and then store the data in a data lake. Data does not need to be shared to other containers. The data engineer must decide where to store data before transformation is complete.

Which solution will meet these requirements with the LOWEST latency?

- [ ] A - Containers should use an ephemeral volume provided by the node's RAM.

Correct. Amazon EKS is a container orchestrator that provides Kubernetes as a managed service. Containers run in pods. Pods run on nodes. Nodes can be EC2 instances, or nodes can use AWS Fargate. Ephemeral volumes exist with the pod's lifecycle. Ephemeral volumes can access drives or memory that is local to the node. The data does not need to be shared, and the node provides storage. Therefore, this solution will have lower latency than storage that is external to the node.

Learn more about [Amazon EKS storage](https://docs.aws.amazon.com/eks/latest/userguide/storage.html).

Learn more about [persistent storage for Kubernetes](https://aws.amazon.com/blogs/storage/persistent-storage-for-kubernetes/).

Learn more about [EC2 instance root device volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/RootDeviceStorage.html).

Learn more about [Amazon EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/eks-compute.html).

- [ ] B - Containers should establish a connection to Amazon DynamoDB Accelerator (DAX) within the application code.

Incorrect. DAX is an in-memory write-through cache for DynamoDB tables. DAX can provide lower latency access to items that you store in DynamoDB. You can create and manage DynamoDB tables and DAX with Kubernetes applications by using AWS Controllers for Kubernetes (ACK). However, this solution requires network calls to access the storage. Additionally, the storage is external to the node. Therefore, this solution will have higher latency than storage that is local to the node.

Learn more about [in-memory acceleration with DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html).

Learn more about [ACK](https://aws-controllers-k8s.github.io/community/docs/community/overview/).

- [ ] C - Containers should use a PersistentVolume object provided by an NFS storage.

Incorrect. You can use a PersistentVolume object to create storage as part of the lifecycle of a pod or independently. A PersistentVolume object can access external storage systems that support the NFS protocol. However, this solution requires network calls to access the storage. Additionally, the storage is external to the node. Therefore, this solution will have higher latency than storage that is local to the node.

Learn more about [persistent storage for Kubernetes](https://aws.amazon.com/blogs/storage/persistent-storage-for-kubernetes/).

- [ ] D - Containers should establish a connection to Amazon MemoryDB for Redis within the application code.

Incorrect. MemoryDB is an in-memory database that runs the Redis engine. MemoryDB provides lower latency than databases that store data on a drive. You can create and manage MemoryDB instances with Kubernetes applications by using AWS Controllers for Kubernetes (ACK). However, this solution requires network calls to access the storage. Additionally, the storage is external to the node. Therefore, this solution will have higher latency than storage that is local to the node.

Learn more about [MemoryDB](https://docs.aws.amazon.com/memorydb/latest/devguide/what-is-memorydb-for-redis.html).

Learn more about [ACK for MemoryDB](https://aws.amazon.com/about-aws/whats-new/2023/04/aws-controllers-kubernetes-amazon-memorydb/).

Learn more about [ACK](https://aws-controllers-k8s.github.io/community/docs/community/overview/).

## Question 15

An insurance company is using vehicle insurance data to build a risk analysis machine learning (ML) model. The data contains personally identifiable information (PII). The ML model should not use the PII. Regulations also require the data to be encrypted with an AWS Key Management Service (AWS KMS) key. A data engineer must select the appropriate services to deliver insurance data for use with the ML model.

Which combination of steps will meet these requirements in the MOST cost-effective manner? (Select TWO.)

- [ ] A - Deliver the data to an Amazon RDS database encrypted with AWS KMS.

Incorrect. AWS KMS is a managed service that you can use to create and control encryption keys to protect data. You can use Amazon RDS to set up, operate, and scale a relational database in the AWS Cloud. You can store the data in an AWS KMS encrypted Amazon RDS database. However, this design would not be the most cost-effective option to provide data to the ML model.

Learn more about [how to encrypt Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html).

- [ ] B - Deliver the data to an Amazon S3 bucket encrypted with server-side encryption with AWS KMS (SSE-KMS).

Correct. You can deliver the output to an S3 bucket that is encrypted with SSE-KMS. This solution would be the most cost-effective option to provide data to the ML model.

Learn more about [how to specify SSE-KMS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-kms-encryption.html).

- [ ] C - Deliver the data to an Amazon Redshift cluster with default settings.

Incorrect. Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the AWS Cloud. You can store the data in Amazon Redshift. However, this design would not ensure that the data is encrypted.

Learn more about [encryption in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html).

- [ ] D - Use AWS Glue DataBrew to configure data ingestion and mask the PII.

Correct. DataBrew is a visual data preparation tool that gives you the ability to clean and normalize data without  the need to write code. DataBrew provides data masking mechanisms to obfuscate PII data during the data preparation process.

Learn more about [how to handle PII with DataBrew](https://docs.aws.amazon.com/databrew/latest/dg/personal-information-protection.html).

- [ ] E - Use Amazon SageMaker Data Wrangler to ingest the data and encode the PII.

Incorrect. Data Wrangler is a feature of Amazon SageMaker Studio. Data Wrangler provides an end-to-end solution to import, prepare, transform, featurize, and analyze data for use in the ML pipeline. A solution that ingests and encodes PII data with Data Wrangler would expose the encoded PII to the ML model. This solution would not satisfy the requirement that the ML model should not use the PII.

Learn more about [how to prepare ML data with Data Wrangler](https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html).

## Question 16

An Amazon Kinesis application is trying to read data from a Kinesis data stream. However, the read data call is rejected. The following error message is displayed: ProvisionedThroughputExceededException.

Which combination of steps will resolve the error? (Select TWO.)

- [ ] A - Configure enhanced fan-out on the stream

Incorrect. The ProvisionedThroughputExceededException error is caused by the capacity quotas of the data stream exceeding its provisioned amount. The capacity quotas of a Kinesis data stream are defined by the number of shards within the stream. Therefore, a solution that configures enhanced fan-out on the stream does not resolve the error. Enhanced fan-out is a Kinesis Data Streams feature that scales up the number of stream consumers by offering each stream consumer its own read throughput.

- [ ] B - Enable enhanced monitoring on the stream

Incorrect. The ProvisionedThroughputExceededException error is caused by the capacity quotas of the data stream exceeding its provisioned amount. A solution that uses the EnableEnhancedMonitoring operation on the stream will not resolve the error. Instead, the operation will send shard-level data to Amazon CloudWatch every minute for an additional cost. Kinesis Data Streams and CloudWatch are integrated to collect, view, and analyze CloudWatch metrics for your Kinesis data stream.

- [ ] C - Increase the number of shards within the stream to provide enough capacity for the read data calls

Correct. The ProvisionedThroughputExceededException error is caused by the capacity quotas of the data stream exceeding its provisioned amount. A sustained rise of the stream's output data rate can cause this issue. To resolve the issue, you can increase the number of shards within your stream to provide enough capacity for the read data calls to consistently succeed.

- [ ] D - Increase the size of the GetRecords requests

Incorrect. The ProvisionedThroughputExceededException error is caused by the capacity quotas of the data stream exceeding its provisioned amount. A solution that increases GetRecords requests would increase the polling frequency. However, this solution would not resolve the ProvisionedThroughputExceededException error.

- [ ] E - Make the application retry to read data from the stream

Correct. The ProvisionedThroughputExceededException is caused by the capacity quotas of the data stream exceeding its provisioned amount. A sustained rise of the stream's output data rate can cause this issue. A solution that retries the Kinesis application will eventually lead to completions of the requests.

## Question 17

A finance company is storing paid invoices in an Amazon S3 bucket. After the invoices are uploaded, an AWS Lambda function uses Amazon Textract to process the PDF data and persist the data to Amazon DynamoDB. Currently, the Lambda execution role has the following S3 permission:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ExampleStmt",
            "Action": ["s3:*"],
            "Effect": "Allow",
            "Resource": ["*"]
        }
    ]
}
```

The company wants to correct the role permissions specific to Amazon S3 according to security best practices.

Which solution will meet these requirements?

- [ ] A - Append "s3:GetObject" to the Action. Append the bucket name to the Resource.

Incorrect. A solution that appends to the Action would result in the following statement: "Action": ["s3:*", "s3:GetObject"]. This statement is overly permissive. It is best practice to remove the "s3:*" action completely. Additionally, the resource needs to be the ARN. Therefore, a solution that uses the bucket name alone is not valid for the statement policy.

Learn more about [the Lambda execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).

- [ ] B - Modify the Action to be "s3:GetObjectAttributes." Modify the Resource to be only the bucket name.

Incorrect. You should modify the Action. However, this modification would grant permission to retrieve attributes related to a specific object, which does not address the requirements in the scenario. Additionally, the resource needs to be the ARN. Therefore, a solution that uses the bucket name alone is not valid for the statement policy.

Learn more about [S3 actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html).

- [ ] C - Append "s3:GetObject" to the Action. Modify the Resource to be only the bucket ARN.

Incorrect. A solution that appends to the Action would result in the following statement: "Action": ["s3:*", "s3:GetObject"]. This statement is overly permissive. It is best practice to remove the "s3:*" action completely.

Learn more about [the Lambda execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).

- [ ] D - Modify the Action to be: "s3:GetObject." Modify the Resource to be only the bucket ARN.

Correct. According to the principle of least privilege, permissions should apply only to what is necessary. The Lambda function needs only the permissions to get the object. Therefore, this solution has the most appropriate modifications.

Learn more about [least-privilege permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Question 18

A company is running an Amazon Redshift cluster. A data engineer must design a solution that would give the company the ability to provide analysis on a separate test environment in Amazon Redshift. The solution would use the data from the main Redshift cluster. The second cluster is expected to be used for only 2 hours every 2 weeks as part of the new testing process.

Which solution will meet these requirements in the MOST cost-effective manner?

- [ ] A - Unload the data from the main Redshift cluster to Amazon S3 every 2 weeks. Create an AWS Glue job that loads the data into the Redshift test cluster.

Incorrect. You can use AWS Glue to load data from Amazon S3 to a Redshift cluster or to a Redshift Serverless endpoint. However, this is not the most cost-effective solution because the company will incur additional costs. Some costs will come from the data being replicated to Amazon S3. Additional costs will come from the AWS Glue jobs that you need to load the data to the Redshift test environment.

Learn more about [Redshift data sharing use cases](https://docs.aws.amazon.com/redshift/latest/dg/use_cases.html).

- [ ] B - Create a data share from the main Redshift cluster to the Redshift test cluster. Use Amazon Redshift Serverless for the test environment.

Correct. Redshift data sharing gives you the ability to share live data across Redshift clusters and Redshift Serverless endpoints at no additional cost. Redshift Serverless automatically provisions and scales data warehouse capacity to run the test workloads. You pay only for the compute capacity provisioned. There are no compute costs when no workloads are running. The test environment is used for only 2 hours every 2 weeks. Therefore, a solution that uses Redshift Serverless for the test environment will help reduce compute costs.

Learn more about [Redshift data sharing](https://docs.aws.amazon.com/redshift/latest/dg/datashare-overview.html).

Learn more about [Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html).

Learn more about [Redshift Serverless billing](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-billing.html).

- [ ] C - Unload the data from the main Redshift cluster to Amazon S3 every 2 weeks. Access the data from the Redshift test cluster by using Amazon Redshift Spectrum.

Incorrect. You can use Redshift Spectrum to access data in Amazon S3 from a Redshift cluster. However, this is not the most cost-effective solution. This solution requires the company to replicate data from the main Redshift cluster to Amazon S3. Therefore, the company will incur S3 storage costs. Additionally, a solution that uses Redshift Spectrum will further increase the costs of the test cluster because billing is based on the data scanned from Amazon S3.

Learn more about [Redshift data sharing use cases](https://docs.aws.amazon.com/redshift/latest/dg/use_cases.html).

- [ ] D - Create a manual snapshot from the main Redshift cluster every 2 weeks. Restore the snapshot into the Redshift test cluster by using the same node configuration as the main cluster.

Incorrect. Redshift manual snapshots give you the ability to create point-in-time recovery backups from the data of a cluster. This solution is not cost effective. This solution uses a test cluster with the same configuration and number of nodes as the main production cluster. Because this would be a provisioned cluster, you would be billed for compute capacity even when the cluster is not in use.

Learn more about [Redshift manual snapshots](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html#about-manual-snapshots).

Learn more about [the differences between Redshift Serverless and a Redshift provisioned data warehouse](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-console-comparison.html).

## Question 19

A data engineer must deploy a centralized metadata storage solution on AWS. The solution needs to be reliable and scalable. The solution needs to ensure that fine-grained permissions can be controlled at the database, table, column, row, and cell levels.

Which solution will meet these requirements with the LEAST operational overhead?

- [ ] A - Use AWS Glue to create a data catalog. Control access with resource-level policies for the AWS Glue Data Catalog objects.

Incorrect. You can control permissions at the table level with Data Catalog. However, this solution does not provide fine-grained permissions that you can control at the database, table, column, row, and cell levels.

Learn more about [how to control fine-grained access to databases and tables in the Data Catalog](https://docs.aws.amazon.com/athena/latest/ug/fine-grained-access-to-glue-resources.html).

- [ ] B - Use an Amazon Aurora database as a catalog. Control access by using SQL GRANTs at the database, table, column, row, and cell levels.

Incorrect. You can use an Aurora database as the storage solution for a Hive metastore. However, this solution would require the data engineer to also deploy the Hive application, either on Amazon EMR or on a standalone Linux instance.

Learn more about [how to use Aurora as a Hive metastore](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hive-metastore-external.html).

- [ ] C - Use AWS Lake Formation to create a data lake and a data catalog. Control access by using Lake Formation data filters.

Correct. You can use Lake Formation to implement security at the database, table, column, row, and cell levels. To implement security at these levels, you can create data filters. This solution would be reliable and scalable. This solution would ensure that you can apply the correct permissions.

Learn more about [Lake Formation data filters](https://docs.aws.amazon.com/lake-formation/latest/dg/data-filters-about.html).

- [ ] D - Use Amazon EMR to deploy a Hive metastore. Control user access by using HiveQL data definition language statements.

You can use Amazon EMR to deploy a Hive metastore. However, you cannot control access to the Hive metastore with the HiveQL data definition language statements.

Learn more about [Hive on Amazon EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hive.html).

## Question 20

A data engineer has created a new account to deploy an AWS Glue extract, transform, and load (ETL) pipeline. The pipeline jobs need to ingest raw data from a source Amazon S3 bucket. Then, the pipeline jobs write the transformed data to a destination S3 bucket in the same account. The data engineer has written an IAM policy with permissions for AWS Glue to access the source S3 bucket and destination S3 bucket. The data engineer needs to grant the permissions in the IAM policy to AWS Glue to run the ETL pipeline.

Which solution will meet these requirements?

- [ ] A - Create a new IAM user and an access key pair. Apply the policy to the user. Provide the access key ID and secret key when configuring the AWS Glue jobs.

Incorrect. A solution that creates an IAM user and uses access keys is not the correct way to configure permissions for AWS Glue jobs. A solution that stores the keys as part of the job configuration would not be secure. The credentials would be insecurely stored inside the AWS Glue job.

- [ ] B - Create two IAM policies from the existing policy. One policy for the source S3 bucket and one policy for the destination S3 bucket. Attach the policies when configuring the AWS Glue jobs.

Incorrect. A solution that creates two IAM policies is not the correct way to configure permissions for AWS Glue jobs. Additionally, you cannot apply IAM policies directly to AWS Glue jobs.

- [ ] C - Create a new IAM service role for AWS Glue. Attach the policy to the new role. Configure AWS Glue to use the new role.

Correct. Permissions for AWS Glue are granted through an IAM service role for AWS Glue. A default role exists in the account with loose permissions that allow the service to use any S3 bucket. You can create and attach a new IAM role to AWS Glue. This solution would give you the ability to use more strict permissions in the AWS Glue jobs.

Learn more about [how to grant permissions so that AWS Glue can access other AWS services](https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role.html).

- [ ] D - Create two resource policies from the existing policy. One policy for the source S3 bucket and one policy for the destination S3 bucket. Attach the policies to the correct S3 buckets.

Incorrect. A solution that attaches resource policies to the S3 buckets would not allow the AWS Glue jobs to access either of the buckets in this scenario. You need to grant permissions to AWS Glue for AWS Glue to be able to access other AWS services, including Amazon S3.
