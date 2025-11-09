# WAF Logging

You can enable logging to get detailed information about traffic that is analyzed by your web ACL. Logged information includes the time that AWS WAF received a web request from your AWS resource, detailed information about the request, and details about the rules that the request matched.

You can send protection pack (web ACL) logs to
1. Amazon CloudWatch Logs log group
2. Amazon Simple Storage Service (Amazon S3) bucket
3. Amazon Data Firehose delivery stream

In addition to logs that you can enable for your protection packs (web ACLs), AWS also uses service logs of website or application traffic processed by AWS WAF to provide support for and protect the security of AWS customers and services.

[Logging AWS WAF protection pack (web ACL) traffic - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html)

## S3 Logging

To send your protection pack (web ACL) traffic logs to Amazon S3, you set up an Amazon S3 bucket from the same account as you use to manage the protection pack (web ACL), and you name the bucket starting with `aws-waf-logs-`. When you enable logging in AWS WAF, you provide the bucket name.

You can access and analyze your Amazon S3 logs using the Amazon Athena interactive query service. Athena makes it easy to analyze data directly in Amazon S3 using standard SQL. With a few actions in the AWS Management Console, you can point Athena at data stored in Amazon S3 and quickly begin using standard SQL to run ad-hoc queries and get results.

Log files from your protection pack (web ACL) are published to the Amazon S3 bucket at 5-minute intervals. Each log file contains log records for the traffic recorded in the previous 5 minutes.

The maximum file size for a log file is 75 MB. If the log file reaches the file size limit within the 5-minute period, the log stops adding records to it, publishes it to the Amazon S3 bucket, and then creates a new log file.

The log files are compressed. If you open the files using the Amazon S3 console, Amazon S3 decompresses the log records and displays them. If you download the log files, you must decompress them to view the records.

A single log file contains interleaved entries with multiple records. To see all the log files for a protection pack (web ACL), look for entries aggregated by the protection pack (web ACL) name, Region, and your account ID.

`s3://aws-waf-logs-LOGGING-BUCKET-SUFFIX/KEY-NAME-PREFIX/AWSLogs/account-id/WAFLogs/Region/web-acl-name/YYYY/MM/dd/HH/mm/account-id_waflogs_Region_web-acl-name_timestamp_hash.log.gz`

`s3://aws-waf-logs-LOGGING-BUCKET-SUFFIX/AWSLogs/11111111111/WAFLogs/us-east-1/TEST-WEBACL/2021/10/28/19/50/11111111111_waflogs_us-east-1_TEST-WEBACL_20211028T1950Z_e0ca43b5.log.gz`

[Sending protection pack (web ACL) traffic logs to an Amazon Simple Storage Service bucket - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/logging-s3.html)

On rare occasions, it's possible for AWS WAF log delivery to fall below 100%, with logs delivered on a **best effort basis**. The AWS WAF architecture prioritizes the security of your applications over all other considerations. In some situations, such as when logging flows experience traffic throttling, this can result in records being dropped. This shouldn't affect more than a few records. If you notice a number of missing log entries, contact the AWS Support Center.

In the logging configuration for your protection pack (web ACL), you can customize what AWS WAF sends to the logs.

### Field redaction

You can redact the following fields from the log records for the rules that use the corresponding match settings: **URI path**, **Query string**, **Single header**, and **HTTP method**. Redacted fields appear as `REDACTED` in the logs. For example, if you redact the **Query string** field, in the logs, it will be listed as `REDACTED` for all rules that use the **Query string** match component setting. Redaction applies only to the request component that you specify for matching in the rule, so the redaction of the **Single header** component doesn't apply to rules that match on **Headers**. For a list of the log fields, see [Log fields for protection pack (web ACL) traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html).

### Log filtering

You can add filtering to specify which web requests are kept in the logs and which are dropped. You filter on the settings that AWS WAF applies during the web request evaluation. You can filter on the following settings:

- **Fully qualified label** – Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or protection pack (web ACL) context of the rule that added the label. For information about labels, see [Web request labeling in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-labels.html).
- **Rule action** – You can filter on any normal rule action setting and also on the legacy `EXCLUDED_AS_COUNT` override option for rule group rules. For information about rule action settings, see [Using rule actions in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-action.html). For information about current and legacy rule action overrides for rule group rules, see [Overriding rule group actions in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-rule-group-override-options.html).
	- The normal rule action filters apply to actions that are configured in rules and also to actions that are configured using the current option for overriding a rule group rule action.
	- The `EXCLUDED_AS_COUNT` log filter overlaps with the `Count` action log filter. `EXCLUDED_AS_COUNT` filters both the current and legacy options for overriding a rule group rule action to Count.

[Finding your protection pack (web ACL) records - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/logging-management.html)

### Analyze WAF Logs in Athena

- [Analyze AWS WAF logs in Amazon Athena \| AWS re:Post](https://repost.aws/knowledge-center/aws-waf-logs-athena)
- [Query AWS WAF logs - Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/waf-logs.html)
	- [Create a table for AWS WAF S3 logs in Athena using partition projection - Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/create-waf-table-partition-projection.html)
- [GitHub - aws-samples/waf-log-sample-athena-queries](https://github.com/aws-samples/waf-log-sample-athena-queries)

## Opensearch Logging

You can create a log ingestion into Amazon OpenSearch Service either by using the Centralized Logging with OpenSearch console or by deploying a standalone CloudFormation stack.

- Deploy Centralized Logging with OpenSearch solution in the same Region as your Web ACLs, or you will not be able to create a AWS WAF pipeline. For example:
    - If your Web ACL is associated with Global CloudFront, you must deploy the solution in us-east-1.
    - If your Web ACL is associated with other resources in Regions like Ohio, your Centralized Logging with OpenSearch stack must also be deployed in that Region.
- The AWS WAF logging bucket must be the same as the Centralized Logging with OpenSearch solution.
- [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) logs are not supported in Centralized Logging with OpenSearch. Learn more about [migrating rules from AWS WAF Classic to the new AWS WAF](https://aws.amazon.com/blogs/security/migrating-rules-from-aws-waf-classic-to-new-aws-waf/).
- The Amazon OpenSearch Service index is rotated on a daily basis by default, and you can adjust the index in the Additional Settings.

**Engines**
- OpenSearch Engine
- Light Engine

[AWS WAF logs - Centralized Logging with OpenSearch](https://docs.aws.amazon.com/solutions/latest/centralized-logging-with-opensearch/aws-waf-logs.html)

## Amazon Data Firehose delivery stream

To send logs to Amazon Data Firehose, you send logs from your protection pack (web ACL) to an Amazon Data Firehose delivery stream which you configure in Firehose. After you enable logging, AWS WAF delivers logs to your storage destination through the HTTPS endpoint of Firehose.

One AWS WAF log is equivalent to one Firehose record. If you typically receive 10,000 requests per second and you enable full logs, you should have a 10,000 records per second setting in Firehose. If you don't configure Firehose correctly, AWS WAF won't record all logs.

[Sending protection pack (web ACL) traffic logs to an Amazon Data Firehose delivery stream - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director](https://docs.aws.amazon.com/waf/latest/developerguide/logging-kinesis.html)

### AWS WAF logging in parquet

AWS WAF logs can be stored in Apache Parquet format, which is a columnar storage format optimized for analytical queries. This can significantly improve the performance and reduce the cost of analyzing your WAF logs.

Here's how you can achieve this:

- **Enable AWS WAF Logging to Kinesis Data Firehose:**
    
    - Configure your AWS WAF Web ACL to send its logs to an Amazon Kinesis Data Firehose delivery stream. This is done in the AWS WAF console under the "Logging and metrics" section of your Web ACL.
    - When configuring the Kinesis Data Firehose, you will specify Amazon S3 as the destination.
    
- **Configure Kinesis Data Firehose for Parquet Conversion:**
    
    - Within the Kinesis Data Firehose delivery stream configuration, you can enable "Record format conversion."
    - Choose "Apache Parquet" as the target format.
    - You can also specify an AWS Glue table for the schema definition, which helps Firehose convert the incoming JSON logs into the structured Parquet format.
    
- **Store in Amazon S3:**
    
    - The Kinesis Data Firehose will then deliver the converted Parquet files to your designated Amazon S3 bucket.
    
- **Analyze with Amazon Athena:**
    
    - Once the logs are in Parquet format in S3, you can create an Amazon Athena table that points to the S3 location of your WAF logs.
    - Athena can efficiently query these Parquet files, allowing you to perform fast and cost-effective analysis of your WAF traffic.

#### Benefits of using Parquet for WAF logs:

- **Improved Query Performance:** Columnar storage allows Athena to read only the necessary columns for your queries, significantly speeding up analysis.
- **Reduced Storage Costs:** Parquet files are highly compressed, leading to lower storage costs in Amazon S3.
- **Enhanced Analytics:** The structured nature of Parquet makes it easier to perform complex analytical queries and integrate with other data analysis tools.

[Convert input data format in Amazon Data Firehose - Amazon Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html)
- Amazon Data Firehose can convert the format of your input data from JSON to [Apache Parquet](https://parquet.apache.org/) or [Apache ORC](https://orc.apache.org/) before storing the data in Amazon S3. Parquet and ORC are columnar data formats that save space and enable faster queries compared to row-oriented formats like JSON. If you want to convert an input format other than JSON, such as comma-separated values (CSV) or structured text, you can use AWS Lambda to transform it to JSON first.
- You can convert the format of your data even if you aggregate your records before sending them to Amazon Data Firehose.
- [Enabling serverless security analytics using AWS WAF full logs, Amazon Athena, and Amazon QuickSight \| AWS Security Blog](https://aws.amazon.com/blogs/security/enabling-serverless-security-analytics-using-aws-waf-full-logs/)
