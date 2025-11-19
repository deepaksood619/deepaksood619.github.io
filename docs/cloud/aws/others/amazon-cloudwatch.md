# Amazon CloudWatch

Monitor Resources and Applications

[GitHub - monitoringartist/grafana-aws-cloudwatch-dashboards: :cloud: 40+ Grafana dashboards for AWS CloudWatch metrics: EC2, Lambda, S3, ELB, EMR, EBS, SNS, SES, SQS, RDS, EFS, ElastiCache, Billing, API Gateway, VPN, Step Functions, Route 53, CodeBuild, ...](https://github.com/monitoringartist/grafana-aws-cloudwatch-dashboards)

## Queries

### Cloudwatch search queries

```sql
-Select -query

-QUERY -READ -WRITE

-server -lms_p2021030122 -sttashrdsmain -vishal_goyal -rdsadmin -deepak_sood -api-v2_p2021030121 -loan-tape-etl_c2021030122
```

### Logs Insight

```sql
fields *@timestamp*, *@message*
| sort *@timestamp* desc
| limit 20

fields *@timestamp*, *@message* | filter *@message* like /(?i)(connect)/ # | filter @timestamp > 1668527666 | fields tomillis(*@timestamp*) as millis # | filter @millis < 1668566034 | parse *@message* ',*,*,' as @instance,@user | parse *@message* /(?<@ip>d{1,3}.d{1,3}.d{1,3}.d{1,3})/ | stats count() AS counter by @user | sort by @counter desc | limit 100
```

## 3 categories of logs

1. Vended logs - natively published by AWS services on behalf of the customer
2. Logs published by AWS services
3. Custom logs

[CloudWatch billing and cost - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_billing.html)

[Publish custom metrics - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html)

## Amazon CloudWatch Application Insights

[Amazon CloudWatch Application Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html)

## Cost Optimizing

- [Determine which log group is causing a bill increase | AWS re:Post](https://repost.aws/knowledge-center/cloudwatch-logs-bill-increase)
- [Optimizing Amazon CloudWatch Costs in Under 5 Minutes (Step-by-Step Guide) - YouTube](https://www.youtube.com/watch?v=FuHJu58n0Zk&ab_channel=AWSDevelopers)
- [Reduce and prevent charges in Amazon CloudWatch | AWS re:Post](https://repost.aws/knowledge-center/cloudwatch-understand-and-reduce-charges?sc_channel=sm)

## Cloudwatch Alarm Actions

Using Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.

There are a number of scenarios in which you might want to automatically stop or terminate your instance. For example, you might have instances dedicated to batch payroll processing jobs or scientific computing tasks that run for a period of time and then complete their work. Rather than letting those instances sit idle (and accrue charges), you can stop or terminate them, which helps you to save money. The main difference between using the stop and the terminate alarm actions is that you can easily restart a stopped instance if you need to run it again later. You can also keep the same instance ID and root volume. However, you cannot restart a terminated instance. Instead, you must launch a new instance.

You can add the stop, terminate, or reboot, actions to any alarm that is set on an Amazon EC2 per-instance metric, including basic and detailed monitoring metrics provided by Amazon CloudWatch (in the AWS/EC2 namespace), in addition to any custom metrics that include the "InstanceId=" dimension, as long as the InstanceId value refers to a valid running Amazon EC2 instance. You can also add the recover action to alarms that is set on any Amazon EC2 per-instance metric except for `StatusCheckFailed_Instance`.

[Create alarms to stop, terminate, reboot, or recover an EC2 instance - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html)

## Composite Alarms

[Combining alarms - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html)

CW composite alert to create complex alert. We can use operators like OR, AND and NOT. For example, if we want to trigger an alert when both CPU and DiskReadOnly breach their thresholds, we would need to create a composite alert. This involves using two metrics with an AND operator to ensure that both conditions are met before triggering the alert.

```bash
ALARM("django-slave-2-alarm-CPU-80%") OR
ALARM("learn-dbread-alarm-CPU-80%") OR
ALARM("django-prod-slave1-alarm-CPU-80%") OR
ALARM("prod-django-master-alarm-CPU-80%")
```
