# Amazon Athena

**Based on Presto**

Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

Athena is easy to use. Simply point to your data in Amazon S3, define the schema, and start querying using standard SQL. Most results are delivered within seconds. With Athena, there's no need for complex ETL jobs to prepare your data for analysis. This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.

Athena is out-of-the-box integrated with [AWS Glue](https://aws.amazon.com/glue/) Data Catalog, allowing you to create a unified metadata repository across various services, crawl data sources to discover schemas and populate your Catalog with new and modified table and partition definitions, and maintain schema versioning.

https://aws.amazon.com/athena

## When should I use Athena

Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3. Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC. You can use Athena to run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena.

Athena integrates with Amazon QuickSight for easy data visualization. You can use Athena to generate reports or to explore data with business intelligence tools or SQL clients connected with a JDBC or an ODBC driver. For more information, see [What is Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/welcome.html) in theAmazon QuickSight User Guideand [Connecting to Amazon Athena with ODBC and JDBC Drivers](https://docs.aws.amazon.com/athena/latest/ug/athena-bi-tools-jdbc-odbc.html).

Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store for your data in Amazon S3. This allows you to create tables and query data in Athena based on a central metadata store available throughout your AWS account and integrated with the ETL and data discovery features of AWS Glue. For more information, see [Integration with AWS Glue](https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html) and [What is AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) in theAWS Glue Developer Guide.

https://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html

## Partitioning Data

By partitioning your data, you can restrict the amount of data scanned by each query, thus improving performance and reducing cost. Athena leverages Hive for [partitioning](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-AlterPartition) data. You can partition your data by any key. A common practice is to partition the data based on time, often leading to a multi-level partitioning scheme. For example, a customer who has data coming in every hour might decide to partition by year, month, date, and hour. Another customer, who has data coming from many different sources but loaded one time per day, may partition by a data source identifier and date.

If you issue queries against Amazon S3 buckets with a large number of objects and the data is not partitioned, such queries may affect the Get request rate limits in Amazon S3 and lead to Amazon S3 exceptions. To prevent errors, partition your data. Additionally, consider tuning your Amazon S3 request rates.

## Note

If you query a partitioned table and specify the partition in theWHEREclause, Athena scans the data only from that partition. For more information, see [Table Location and Partitions](https://docs.aws.amazon.com/athena/latest/ug/tables-location-format.html#table-location-and-partitions).

To create a table with partitions, you must define it during theCREATE TABLEstatement. UsePARTITIONED BYto define the keys by which to partition data. There are two scenarios discussed in the following sections:

1. Data is already partitioned, stored on Amazon S3, and you need to access the data on Athena.

2. Data is not partitioned.

https://docs.aws.amazon.com/athena/latest/ug/partitions.html

When you create a table from CSV data in Athena, determine what types of values it contains:

- If data contains values enclosed in double quotes ("), you can use the [OpenCSV SerDe](https://cwiki.apache.org/confluence/display/Hive/CSV+Serde) to deserialize the values in Athena. In the following sections, note the behavior of this SerDe withSTRINGdata types.
- If data does not contain values enclosed in double quotes ("), you can omit specifying any SerDe. In this case, Athena uses the defaultLazySimpleSerDe. For information, see [LazySimpleSerDe for CSV, TSV, and Custom-Delimited Files](https://docs.aws.amazon.com/athena/latest/ug/lazy-simple-serde.html).

## Key Points

- Does not support embedded line breaks in CSV files.
- Does not support empty fields in columns defined as a numeric data type.

ACID - https://aws.amazon.com/about-aws/whats-new/2022/04/amazon-athena-acid-transactions-powered-apache-iceberg

## Athena iceberg

Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format for data and the AWS Glue catalog for their metastore.

[Apache Iceberg](https://iceberg.apache.org/) is an open table format for very large analytic datasets. Iceberg manages large collections of files as tables, and it supports modern analytical data lake operations such as record-level insert, update, delete, and time travel queries. The Iceberg specification allows seamless table evolution such as schema and partition evolution, and its design is optimized for usage on Amazon S3. Iceberg also helps guarantee data correctness under concurrent write scenarios.

https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html

[Build a serverless transactional data lake with Apache Iceberg, Amazon EMR Serverless, and Amazon Athena | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/build-a-serverless-transactional-data-lake-with-apache-iceberg-amazon-emr-serverless-and-amazon-athena/)

## Query

https://docs.aws.amazon.com/athena/latest/ug/functions-operators-reference-section.html

Use **approx distinct count** whenever you don't have to have an exact count. so replace your distinct count(distinct x) with approx_distinct(x). This is a big one (exact distinct count causes your query to run on a single Presto node. This function has a standard error of 2.3% (you can actually customize this with approx_distinct(x, e))

```sql
SELECT count(*) AS TOTALNUMBEROFTABLES
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_SCHEMA = 's3_db';

SELECT device_id, message.sendernumber,message.message,message.dateTime, udsms, partition_0, partition_1,partition_2
FROM "s3_db"."folder_0d23a883b4a272dd4892202efbac8b59"
CROSS JOIN UNNEST(udsms) as t(message)
where device_id = '1f385b6e17c395d0';

Example Queries
    select * FROM "pinpointanalytics"."emailanalyticsfinal" where  event_type in ('email.open',
    '_email.softbounce',
    '_email.send',
    '_email.delivered',
    '_email.rendering_failure',
    '_email.click',
    '_email.hardbounce')
    and  year = '2021'
    AND month = '11'
    AND day >= '08'

    Based event type aggregation query -
        SELECT event_type,count(*) FROM "pinpointanalytics"."emailanalytics" where attributes.campaign_id = '33d07428932540adafcfd0679558957e' group by event_type

    Detailed info on hard bounce
        SELECT facets.email_channel.mail_event.mail.destination,facets.email_channel.mail_event.bounce.bounce_sub_type FROM "pinpointanalytics"."emailanalytics" where attributes.campaign_id = '33d07428932540adafcfd0679558957e' and event_type = '_email.hardbounce'

    Detailed info on email click.
        SELECT facets.email_channel.mail_event.mail.destination[0],facets.email_channel.mail_event.click.link FROM "pinpointanalytics"."emailanalytics" where attributes.campaign_id = '33d07428932540adafcfd0679558957e' and event_type = '_email.click'

    Differen sub status on campaign send
        SELECT attributes.campaign_send_status,count(*) FROM "pinpointanalytics"."emailanalytics" where attributes.campaign_id = '33d07428932540adafcfd0679558957e' and event_type = '_campaign.send' group by attributes.campaign_send_status

    Email Open query
        SELECT facets.email_channel.mail_event.mail.destination[0] FROM "pinpointanalytics"."emailanalytics" where attributes.campaign_id = '33d07428932540adafcfd0679558957e' and event_type = '_email.open'

-- SMS Analytics
        SELECT event_type, count(*)
FROM "pinpointanalytics"."emailanalyticsfinal"
WHERE year = '2021'
    AND month = '08'
    AND day = '22'
    AND event_type in ('_SMS.FAILURE', '_SMS.SUCCESS')
GROUP BY event_type;

        SELECT attributes['record_status'], count(*)
FROM "pinpointanalytics"."emailanalyticsfinal"
WHERE year = '2021'
    AND month = '08'
    AND day = '22'
    AND event_type in ('_SMS.FAILURE', '_SMS.SUCCESS')
GROUP BY attributes['record_status']

-- sms clicked
SELECT attributes['customer_id'], count(*)
FROM "pinpointanalytics"."emailanalyticsfinal"
WHERE year = '2021'
        AND month = '11'
        AND day = '22'
        AND attributes['template_id'] = 'razorpay_link'
        AND event_type= '_SMS.CLICKED'
    group by attributes['customer_id'];

SELECT event_type, count(*)
FROM "pinpointanalytics"."emailanalyticsfinal"
WHERE year = '2021'
        AND month >= '09'
        AND day = '24'
        AND event_type in ('_SMS.FAILURE', '_SMS.SUCCESS')
GROUP BY event_type;

SELECT attributes['record_status'], count(*)
FROM "pinpointanalytics"."emailanalyticsfinal"
WHERE year = '2021'
        AND month >= '09'
        AND day = '24'
        AND event_type in ('_SMS.FAILURE', '_SMS.SUCCESS')
GROUP BY attributes['record_status'];

select * FROM "pinpointanalytics"."emailanalyticsfinal" where event_type in ('_SMS.FAILURE') and json_extract_scalar(attributes['customer_context'], '$.customer_id') ='4547012' limit 5

select * FROM "pinpointanalytics"."emailanalyticsfinal" where json_extract_scalar(attributes['customer_context'], '$.customer_id') ='4990002' limit 5

CREATE EXTERNAL TABLE IF NOT EXISTS join_test (
    customer_id int,
    occupation string,
    salary int,
    Current_City_Name string,
    Current_State_Name string,
    is_operational int,
    is_elevate_operational int )
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.OpenCSVSerde'
LOCATION 's3://example-migration-data/rds/equifax_raw_response/join_test_1000';

CREATE EXTERNAL TABLE IF NOT EXISTS user_device_sms (
    id int,
    customer_id int,
        occupation string,
        sender string,
        message string,
        message_type string,
        sms_time date,
        create_date date,
    device_id string)
    ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.OpenCSVSerde'
LOCATION 's3://example-migration-data/rds/user_device_sms/user_device_sms.part_1000';

CREATE EXTERNAL TABLE `user_device_sms`(
`col0` bigint,
`col1` bigint,
`col2` string)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/rds/user_device_sms/user_device_sms.part_00000'

CREATE EXTERNAL TABLE IF NOT EXISTS `s3_db.st_bank_sms`(
`avlbal` double,
`amount` double,
`trns_type` string,
`hash_key` string,
`sender` string,
`created_at` timestamp,
`id` int,
`customer_id` int,
`trns_mode` string,
`sms_time` string)
ROW FORMAT SERDE
'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/glue/st_bank_sms'
TBLPROPERTIES (
'has_encrypted_data'='false');

CREATE EXTERNAL TABLE IF NOT EXISTS `s3_db.st_bank_sms`(
    `avlbal` double,
    `amount` double,
    `trns_type` string,
    `hash_key` string,
    `sender` string,
    `created_at` timestamp,
    `id` int,
    `customer_id` int,
    `trns_mode` string,
    `sms_time` string)
ROW FORMAT SERDE
    'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
    'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
    'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
    's3://example/example/folder';

CREATE EXTERNAL TABLE IF NOT EXISTS s3_db.test (
    `id` string,
    `customer_id` string,
    `sender` string,
    `message` string,
    `message_type` string,
    `sms_time` date,
    `create_date` date,
    `device_id` string
)
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
WITH SERDEPROPERTIES (
    'serialization.format' = ',',
    'field.delim' = '|||'
) LOCATION 's3://example/example/folder/'
TBLPROPERTIES ('has_encrypted_data'='false');

CREATE EXTERNAL TABLE `parquet`(
`customer_id` bigint,
`loanid` bigint,
`@amount` string,
`@balance` string,
`@category` string,
`@chqno` string,
`@date` string,
`@narration` string,
`__index_level_0__` bigint)
ROW FORMAT SERDE
'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'
LOCATION
's3://example-migration-data/parquet/'
TBLPROPERTIES (
'CrawlerSchemaDeserializerVersion'='1.0',
'CrawlerSchemaSerializerVersion'='1.0',
'UPDATED_BY_CRAWLER'='parquet',
'averageRecordSize'='40',
'classification'='parquet',
'compressionType'='none',
'objectCount'='1',
'recordCount'='56464',
'sizeKey'='2301512',
'typeOfData'='file')

CREATE EXTERNAL TABLE IF NOT EXISTS `s3_db.example_account_transactions`(
`date` date,
`example_account_id` int,
`amount` double,
`chqno` string,
`second_category` string,
`remark` string,
`example_count_id` int,
`balance` double,
`narration` string,
`id` int,
`customer_id` int,
`category` string,
`loan_id` int)
ROW FORMAT SERDE
'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/glue/example_account_transactions'
TBLPROPERTIES (
'has_encrypted_data'='false');

s3://example-migration-data/test/request_1364644_20191017132643.json
s3://ap-south-1.example.com/example-migration-data/test/

CREATE EXTERNAL TABLE IF NOT EXISTS s3_db.test (
    `id` string,
    `customer_id` string,
    `sender` string,
    `message` string,
    `message_type` string,
    `sms_time` date,
    `create_date` date,
    `device_id` string
)
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'
WITH SERDEPROPERTIES (
    'serialization.format' = ',',
    'field.delim' = ','
) LOCATION 's3://ap-south-1.example.com/example/example/folder/'
TBLPROPERTIES ('has_encrypted_data'='false');

CREATE EXTERNAL TABLE `test_json_1`(
`header` map<string,string> COMMENT 'from deserializer',
`tracking-id` string COMMENT 'from deserializer',
`acknowledgement-id` string COMMENT 'from deserializer',
`response-format` array<string> COMMENT 'from deserializer')
ROW FORMAT SERDE
'org.openx.data.jsonserde.JsonSerDe'
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/test'
TBLPROPERTIES (
'transient_lastDdlTime'='1583144161')

CREATE EXTERNAL TABLE x (
    `acknowledgement-id` string,
    `header` struct<`application-id`:string, `cust-id`:string, `request-received-time`:string, `request-type`:string>,
    `response-format` array<string>,
    `tracking-id` string)
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe'
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/test'

CREATE EXTERNAL TABLE example (
            `acknowledgement-id` int,
            `finished` array<struct<`bureau`:string,
            `json-response-object`:struct<`accountlist`:array<struct<`accounttype`:string,
            `currentbalance`:string,
            `dateopenedordisbursed`:string,
            `datereportedandcertified`:string,
            `ownershipindicator`:string,
            `paymenthistory1`:string,
            `paymenthistoryenddate`:string,
            `paymenthistorystartdate`:string,
            `reportingmembershortname`:string>>,
            `addresslist`:array<struct<`addresscategory`:string,
            `addressline1`:string,
            `datereported`:string,
            `enrichedthroughtenquiry`:string,
            `pincode`:string,
            `statecode`:string>>,
            `employmentlist`:array<struct<`accounttype`:string,
            `datereported`:string,
            `occupationcode`:string>>,
            `enquirylist`:array<struct<`datereported`:string,
            `enquiryamount`:string,
            `enquirypurpose`:string,
            `reportingmembershortname`:string>>,
            `header`:struct<`dateproceed`:string,
            `enquirycontrolnumber`:string,
            `enquirymemberuserid`:string,
            `memberreferencenumber`:string,
            `serialversionuid`:int,
            `subjectreturncode`:string,
            `timeproceed`:string,
            `version`:string>,
            `idlist`:array<struct<`idtype`:string,
            `idvalue`:string>>,
            `name`:struct<`dob`:string,
            `gender`:string,
            `name1`:string,
            `name2`:string,
            `name3`:string>,
            `phonelist`:array<struct<`enrichenquiryforphone`:string,
            `telephonenumber`:string,
            `telephonetype`:string>>,
            `scorelist`:array<struct<`reasoncode1`:string,
            `reasoncode2`:string,
            `reasoncode3`:string,
            `score`:string,
            `scorecardname`:string,
            `scorecardversion`:string,
            `scoredate`:string,
            `scorename`:string>>>,
            `pdf report`:array<int>,
            `product`:string,
            `status`:string,
            `tracking-id`:int>>,
            `header` struct<`application-id`:string,
            `cust-id`:string,
            `request-received-time`:string,
            `response-type`:string>,
            `status` string
)
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe' STORED AS INPUTFORMAT 'org.apache.hadoop.mapred.TextInputFormat' OUTPUTFORMAT 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat' LOCATION 's3://example-migration-data/example_response';

WITH  SERDEPROPERTIES ('ignore.malformed.json' = 'true')

CREATE external TABLE complex_json (
    docid string,
    `user` struct<
                id:INT,
                username:string,
                name:string,
                shippingaddress:struct<
                                        address1:string,
                                        address2:string,
                                        city:string,
                                        state:string
                                        >,
                orders:array<
                            struct<
                                    itemid:INT,
                                    orderdate:string
                                    >
                                >
                >
    )
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe'
LOCATION 's3://mybucket/myjsondata/';

CREATE EXTERNAL TABLE `folder_0d23a883b4a272dd4892202efbac8b59`(
`device_id` string COMMENT 'from deserializer',
`udsms` array<struct<sendernumber:string,message:string,datetime:string,messagetype:string,smsid:int>> COMMENT 'from deserializer',
`cust_id` string COMMENT 'from deserializer')
PARTITIONED BY (
`partition_0` string,
`partition_1` string,
`partition_2` string)
ROW FORMAT SERDE
'org.openx.data.jsonserde.JsonSerDe'
WITH SERDEPROPERTIES (
'paths'='cust_id,device_id,udsms')
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/folder/'
TBLPROPERTIES (
'CrawlerSchemaDeserializerVersion'='1.0',
'CrawlerSchemaSerializerVersion'='1.0',
'UPDATED_BY_CRAWLER'='s3_folder',
'averageRecordSize'='28252',
'classification'='json',
'compressionType'='none',
'objectCount'='4198',
'recordCount'='4197',
'sizeKey'='122901020',
'typeOfData'='file')

# adding partitions manually
    ALTER TABLE s3_db.test_response add partition (partition_0="2020", partition_1="04", partition_2="23")
    location "s3://example-migration-data/folder_request/response/2020/04/23";

# creating tables with or without some columns are supported
CREATE EXTERNAL TABLE `test_response`(
`delay_time` string COMMENT 'from deserializer',
`create_date` string COMMENT 'from deserializer',
`customer_id` double COMMENT 'from deserializer',
`device_id` string COMMENT 'from deserializer',
`oldest_sms` string COMMENT 'from deserializer',
`latest_sms` string COMMENT 'from deserializer',
`nummessages` int COMMENT 'from deserializer',
`score` double COMMENT 'from deserializer',
`model_execution_status` string COMMENT 'from deserializer',
`reason_code` string COMMENT 'from deserializer',
`tier` double COMMENT 'from deserializer',
`model_name` string COMMENT 'from deserializer',
`decision_model_flag` int COMMENT 'from deserializer',
`request_key` string COMMENT 'from deserializer',
`request_response_flag` string COMMENT 'from deserializer')
PARTITIONED BY (
`partition_0` string,
`partition_1` string,
`partition_2` string)
ROW FORMAT SERDE
'org.openx.data.jsonserde.JsonSerDe'
WITH SERDEPROPERTIES (
'paths'='create_date,customer_id,decision_model_flag,delay_time,device_id,latest_sms,model_execution_status,model_name,numMessages,oldest_sms,reason_code,request_key,request_response_flag,score,tier')
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://example-migration-data/folder_request/response/'

https://aws.amazon.com/blogs/big-data/analyzing-data-in-s3-using-amazon-athena/

CREATE EXTERNAL TABLE IF NOT EXISTS http_requests (
`referrer_url` string,
`target_url` string,
`method` string,
`request_headers` map,
`request_params` map,
`is_https` boolean,
`user_agent` string,
`response_http_code` int,
`response_headers` map,
`transaction_id` string,
`server_hostname` string)
PARTITIONED BY (`date` string)
STORED AS PARQUET
LOCATION 's3://httprequests/'
tblproperties ("parquet.compress"="GZIP");
    https://medium.com/@costimuraru/querying-terabytes-of-proto-parquet-data-with-amazon-athena-or-apache-hive-fb51addce5ac

SELECT  create_date,customer_id,loan_id,credit_amt_2m,credit_cnt_2m,debit_amt_2m,debit_cnt_2m
    ,credit_amt_3m,credit_cnt_3m,debit_amt_3m,debit_cnt_3m,avg_eod_balance_3M
FROM bank_data.meta_data where cast(substring(create_date,1,19) as timestamp) between date_add('month',-3,now()) and now();
```

## Things to remember

- MSCK repair statement loads the partition data for Hive-compatible data/partitions like year=2020/month=04/day=20. In this case, you would have to use ALTER TABLE ADD PARTITION to add each partition manually.
- msck - is Hive's **m**eta**s**tore **c**onsistency **c**heck, similar to `fsck` which stands for [filesystem consistency check](https://en.wikipedia.org/wiki/Fsck)
- Hive Schema mismatch

    It can happen that partition schema is different from table's schema leading to 'HIVE_PARTITION_SCHEMA_MISMATCH' error. At the beginning of query execution, Athena verifies the table's schema by checking that each column data type is compatible between the table and the partition. If you create a table in CSV, JSON, and AVRO in Athena with AWS Glue Crawler, after the Crawler finishes processing, the schemas for the table and its partitions may be different. If there is a mismatch between the table's schema and the partition schemas, your queries fail in Athena due to the schema verification error.

    A typical workaround for such errors is to drop the partition that is causing the error and recreate it. Suggest to use ALTER TABLE DROP PARTITION and ALTER TABLE ADD PARTITION to drop and add partition manually. It is recommended to go thru documentation link provided below for more information on updates in tables with partitions. https://docs.aws.amazon.com/athena/latest/ug/updates-and-partitions.html

## Performance tuning guides

1. Partition your data (year=2019/month=12/day=21)
2. Bucket your data
3. Compress and split files (snappy)
4. Optimize file sizes (Athena (Presto) likes big files. Recommended minimum is 128MB per file.)
5. Optimize columnar data store generation (parquet/orc)
6. Optimize ORDER BY
7. Optimize joins
8. Optimize GROUP BY
9. Optimize the LIKE operator
10. Use approximate functions
11. Only include the columns that you need

https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-tips-for-amazon-athena

## Connectors

- DynamoDB Connector

The Amazon Athena DynamoDB connector enables Amazon Athena to communicate with DynamoDB so that you can query your tables with SQL.

https://docs.aws.amazon.com/athena/latest/ug/athena-prebuilt-data-connectors-dynamodb.html

## CSV to bulk import

https://mbejda.github.io/CSV-to-Athena-Bulk-Import

## Debugging

https://aws.amazon.com/premiumsupport/knowledge-center/error-json-athena

## Links

- [Understand Amazon S3 data transfer costs by classifying requests with Amazon Athena | AWS Storage Blog](https://aws.amazon.com/blogs/storage/understand-amazon-s3-data-transfer-costs-by-classifying-requests-with-amazon-athena/)
- https://aws.amazon.com/athena/faqs
- https://www.linkedin.com/pulse/my-top-5-gotchas-working-aws-glue-tanveer-uddin
- https://aws.amazon.com/blogs/big-data/create-tables-in-amazon-athena-from-nested-json-and-mappings-using-jsonserde
- [ThornyDev: Querying JSON records via Hive](http://thornydev.blogspot.com/2013/07/querying-json-records-via-hive.html)
- [Athena engine version reference - Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/engine-versions-reference.html)
- [Multicloud data lake analytics with Amazon Athena | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/multicloud-data-lake-analytics-with-amazon-athena/)
- [Visualize MongoDB data from Amazon QuickSight using Amazon Athena Federated Query | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/visualize-mongodb-data-from-amazon-quicksight-using-amazon-athena-federated-query/)
    - [Real Time: MongoDB data to AWS QuickSight - Working with Data / Connectors & Integrations - MongoDB Developer Community Forums](https://www.mongodb.com/community/forums/t/real-time-mongodb-data-to-aws-quicksight/2314)

### [GitHub - quux00/hive-json-schema: Tool to generate a Hive schema from a JSON example doc](https://github.com/quux00/hive-json-schema)

`java -jar target/json-hive-schema-1.0-jar-with-dependencies.jar in.json TopQuark`

```sql
CREATE TABLE TopQuark (
description string,
foo struct<bar:string, level1:struct<l2string:string, l2struct:struct<level3:string>>, quux:string>,
wibble string,
wobble array<struct<entry:int, entrydetails:struct<details1:string, details2:int>>>)
ROW FORMAT SERDE 'org.openx.data.jsonserde.JsonSerDe';
```
