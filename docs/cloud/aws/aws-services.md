# AWS Services

[https://docs.aws.amazon.com/index.html](https://docs.aws.amazon.com/index.html)

## Migration

1. AWS Application Discovery Service - Discover On-Premises Applications to Streamline Migration
2. AWS Database Migration Service - Migrate Databases with Minimal Downtime
3. AWS Migration Hub - Track Migrations from a Single Place
4. AWS Server Migration Service - Migrate On-Premises Servers to AWS
5. AWS Snowball - Petabyte-scale Data Transport
6. AWS Snowball Edge - Petabyte-scale Data Transport with On-board Compute
7. AWS Snowmobile - Exabyte-scale Data Transport
8. [AWS Application Migration Service](https://aws.amazon.com/application-migration-service/)

## Management Tools

### 1. Amazon CloudWatch

Monitor Resources and Applications

https://github.com/monitoringartist/grafana-aws-cloudwatch-dashboards

**Cloudwatch search queries**

```sql
-Select -query

-QUERY -READ -WRITE

-server -lms_p2021030122 -sttashrdsmain -vishal_goyal -rdsadmin -deepak_sood -api-v2_p2021030121 -loan-tape-etl_c2021030122
```

**Logs Insight**

```sql
fields *@timestamp*, *@message*
| sort *@timestamp* desc
| limit 20

fields *@timestamp*, *@message* | filter *@message* like /(?i)(connect)/ # | filter @timestamp > 1668527666 | fields tomillis(*@timestamp*) as millis # | filter @millis < 1668566034 | parse *@message* ',*,*,' as @instance,@user | parse *@message* /(?<@ip>d{1,3}.d{1,3}.d{1,3}.d{1,3})/ | stats count() AS counter by @user | sort by @counter desc | limit 100
```

#### 3 categories of logs

1. Vended logs - natively published by AWS services on behalf of the customer
2. Logs published by AWS services
3. Custom logs

[CloudWatch billing and cost - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_billing.html)

[Publish custom metrics - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html)

#### Amazon CloudWatch Application Insights

[Amazon CloudWatch Application Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html)

#### Cost Optimizing

[Determine which log group is causing a bill increase | AWS re:Post](https://repost.aws/knowledge-center/cloudwatch-logs-bill-increase)

[Optimizing Amazon CloudWatch Costs in Under 5 Minutes (Step-by-Step Guide) - YouTube](https://www.youtube.com/watch?v=FuHJu58n0Zk&ab_channel=AWSDevelopers)

[Reduce and prevent charges in Amazon CloudWatch | AWS re:Post](https://repost.aws/knowledge-center/cloudwatch-understand-and-reduce-charges?sc_channel=sm)

#### Cloudwatch Alarm Actions

Using Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.

There are a number of scenarios in which you might want to automatically stop or terminate your instance. For example, you might have instances dedicated to batch payroll processing jobs or scientific computing tasks that run for a period of time and then complete their work. Rather than letting those instances sit idle (and accrue charges), you can stop or terminate them, which helps you to save money. The main difference between using the stop and the terminate alarm actions is that you can easily restart a stopped instance if you need to run it again later. You can also keep the same instance ID and root volume. However, you cannot restart a terminated instance. Instead, you must launch a new instance.

You can add the stop, terminate, or reboot, actions to any alarm that is set on an Amazon EC2 per-instance metric, including basic and detailed monitoring metrics provided by Amazon CloudWatch (in the AWS/EC2 namespace), in addition to any custom metrics that include the "InstanceId=" dimension, as long as the InstanceId value refers to a valid running Amazon EC2 instance. You can also add the recover action to alarms that is set on any Amazon EC2 per-instance metric except for `StatusCheckFailed_Instance`.

[Create alarms to stop, terminate, reboot, or recover an EC2 instance - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html)

#### Composite Alarms

[Combining alarms - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html)

CW composite alert to create complex alert. We can use operators like OR, AND and NOT. For example, if we want to trigger an alert when both CPU and DiskReadOnly breach their thresholds, we would need to create a composite alert. This involves using two metrics with an AND operator to ensure that both conditions are met before triggering the alert.

```bash
ALARM("django-slave-2-alarm-CPU-80%") OR
ALARM("learn-dbread-alarm-CPU-80%") OR
ALARM("django-prod-slave1-alarm-CPU-80%") OR
ALARM("prod-django-master-alarm-CPU-80%")
```

### 2. AWS Auto Scaling

Scale Multiple Resources to Meet Demand

### 3. AWS CloudFormation

Create and Manage Resources with Templates

AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment. AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This gives you a single source of truth for your AWS and third party resources.

AWS CloudFormation utilizes templates, stacks, and stack sets to manage infrastructure as code. Each component serves a distinct purpose in defining, deploying, and managing AWS resources.

- **CloudFormation Template:**

    - A JSON or YAML-formatted text file that defines the AWS resources to be provisioned, their properties, and dependencies.
    - It acts as a blueprint or declarative specification for your infrastructure.
    - Templates are reusable and can be version-controlled, promoting consistency and automation.

- **CloudFormation Stack:**

    - A collection of AWS resources created and managed as a single unit based on a CloudFormation template.
    - When you "create" a stack, CloudFormation provisions the resources specified in the template in a specific AWS account and region.
    - Stacks provide a way to manage the lifecycle of a group of related resources, allowing for creation, update, and deletion of all resources together.

- **CloudFormation StackSet:**

    - An extension of stacks that allows you to deploy and manage a common CloudFormation template across multiple AWS accounts and regions with a single operation.
    - StackSets are ideal for managing infrastructure in multi-account or multi-region environments, ensuring consistency across deployments.
    - You define a StackSet in an administrator account, specifying target accounts and regions where stack instances will be created based on the same template.
    - This enables centralized management of infrastructure deployments across an organization.

[GitHub - stelligent/cfn\_nag: Linting tool for CloudFormation templates](https://github.com/stelligent/cfn_nag)

### Others

1. AWS CloudTrail - Track User Activity and API Usage
2. AWS Config - Track Resource Inventory and Changes
	1. There are two frequencies at which AWS Config can deliver configuration items: periodic and continuous. Periodic recording delivers configuration data once every 24 hours, only if a change has occurred, which may be useful for use cases such as operational planning or audit. Continuous recording delivers configuration items whenever a change occurs. It helps you meet security and compliance requirements to track all configuration changes.
3. AWS OpsWorks - Automate Operations with Chef and Puppet
	1. OpsWorks is a configuration management service that helps you configure and operate applications in a cloud enterprise by using Puppet or Chef. OpsWorks Stacks and AWS OpsWorks for Chef Automate let you use Chef cookbooks and solutions for configuration management, while OpsWorks for Puppet Enterprise lets you configure a Puppet Enterprise master server in AWS. Puppet offers a set of tools for enforcing the desired state of your infrastructure, and automating on-demand tasks.
4. AWS Service Catalog - Create and Use Standardized Products
	1. [Introduction to AWS Service Catalog - YouTube](https://www.youtube.com/watch?v=A6-jv3gZa4U&ab_channel=AmazonWebServices)
	2. Service Catalog enables organizations to create and manage catalogs of IT services that are approved for AWS. These IT services can include everything from virtual machine images, servers, software, databases, and more to complete multi-tier application architectures.
	3. Service Catalog allows organizations to centrally manage commonly deployed IT services, and helps organizations achieve consistent governance and meet compliance requirements. End users can quickly deploy only the approved IT services they need, following the constraints set by your organization.
5. AWS Systems Manager - Gain Operational Insights and Take Action
6. AWS Trusted Advisor - Optimize costs, improve performance, and address security gaps
    1. [How do I start using Trusted Advisor? - YouTube](https://www.youtube.com/watch?v=i0IkKN9NoPk)
    2. Minimum spend of $29.00 or 3% of monthly AWS charges, whichever is higher
7. AWS Personal Health Dashboard - Personalized View of AWS Service Health

## Media Services

1. Amazon Elastic Transcoder - Easy-to-use Scalable Media Transcoding
2. Amazon Kinesis Video Streams - Process and Analyze Video Streams
3. AWS Elemental MediaConvert - Convert File-based Video Content
4. AWS Elemental MediaLive - Convert Live Video Content
5. AWS Elemental MediaPackage - Video Origination and Packaging
6. AWS Elemental MediaStore - Media Storage and Simple HTTP Origin
7. AWS Elemental MediaTailor - Video Personalization and Monetization

## Mobile Services

1. AWS Mobile Hub - Build, Test, and Monitor Apps
2. Amazon API Gateway - Build, Deploy, and Manage APIs
3. Amazon Pinpoint - Push Notifications for Mobile Apps
4. AWS AppSync - Real-time and Offline Mobile Data Apps
	1. AWS AppSync is a fully managed GraphQL API and pub/sub service that simplifies the creation of real-time data-driven applications by connecting them to multiple data sources using a single API endpoint. It provides serverless APIs for data access, subscriptions, and events, handling tasks like data synchronization, scaling, and security. You can use it to build backends for web, mobile, and IoT apps, connecting to data stores like DynamoDB, Aurora, and Lambda functions, and even other HTTP endpoints.
5. AWS Device Farm - Test Android, FireOS, and iOS Apps on Real Devices in the Cloud
    1. [Digital Experience Monitoring Platform by Mozark](https://www.mozark.ai/)
    2. [Device Farm - ATOMP.IO](https://atomp.io/devicefarm/)
    3. [Why use Device Farm / Device Cloud for Testing | BrowserStack](https://www.browserstack.com/guide/importance-of-device-farms)
    4. [AWS Device Farm](https://aws.amazon.com/device-farm/)
    5. [What is AWS Device Farm? - AWS Device Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html)
    6. Device Farm is an app testing service that you can use to test and interact with your Android, iOS, and web apps on real, physical phones and tablets that are hosted by Amazon Web Services (AWS). There are two main ways to use Device Farm:
		- Automated testing of apps using a variety of testing frameworks.
		- Remote access of devices onto which you can load, run, and interact with apps in real time.
	- [What is AWS Device Farm? - AWS Device Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html)
6. AWS Mobile SDK - Mobile Software Development Kit
7. AWS Location Service
8. AR & VR - Amazon Sumerian - Build and Run VR and AR Applications

### AWS Amplify

[Amplify UI - Build UI fast with Amplify on React](https://ui.docs.amplify.aws/?platform=react)

[Amplify Documentation - AWS Amplify Documentation](https://docs.amplify.aws)

To serve traffic, Amplify Hosting points to a CloudFront URL via a CNAME record. In the process of connecting an app to a custom domain, the Amplify console displays the CloudFront URL for the app. However, you cannot access your application directly using this CloudFront URL. It returns a 404 error. Your application resolves only using the Amplify app URL (for example, `https://main.d5udybEXAMPLE.amplifyapp.com`, or your custom domain (for example `www.example.com`).

[Troubleshooting custom domains - AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domain-troubleshoot-guide.html)

[Build Fullstack AI Apps in Minutes With the New Amplify AI Kit - YouTube](https://www.youtube.com/watch?v=f-UeIlQ1tAI)

#### Build settings

```bash
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --cache .npm --prefer-offline
    build:
      commands:
        - if [ "${AWS_BRANCH}" = "master" ]; then npm run build:production; fi
        - if [ "${AWS_BRANCH}" = "staging" ]; then npm run build:staging; fi
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - .npm/**/*
```

[Configuring build settings - AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html)

## Application Integeration

### 1. AWS Step Functions

Coordinate Distributed Applications

AWS Step Functions is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications. Through its visual interface, you can create and run a series of checkpointed and event-driven workflows that maintain the application state.The output of one step acts as an input to the next. Each step in your application executes in order, as defined by your business logic.

Orchestrating a series of individual serverless applications, managing retries, and debugging failures can be challenging. As your distributed applications become more complex, the complexity of managing them also grows. Step Functions automatically manages error handling, retry logic, and state.With its built-in operational controls, Step Functions manages sequencing, error handling, retry logic, and state, removing a significant operational burden from your team.

### 2. Amazon Simple Queue Service (SQS) - Managed Message Queues

### 3. Amazon Simple Notification Service (SNS)

Pub/Sub, Mobile Push and SMS

Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging. Using Amazon SNS topics, your publisher systems can fan out messages to a large number of subscriber endpoints for parallel processing, including [Amazon SQS](https://aws.amazon.com/sqs/) queues, [AWS Lambda](https://aws.amazon.com/lambda/) functions, and HTTP/S webhooks. Additionally, SNS can be used to fan out notifications to end users using mobile push, SMS, and email.

### 4. Amazon MQ

Managed Message Broker for ActiveMQ

Amazon MQ is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud. Message brokers allow different software systems--often using different programming languages, and on different platforms--to communicate and exchange information. Amazon MQ reduces your operational load by managing the provisioning, setup, and maintenance of ActiveMQ, a popular open-source message broker. Connecting your current applications to Amazon MQ is easy because it uses industry-standard APIs and protocols for messaging, including JMS, NMS, AMQP, STOMP, MQTT, and WebSocket. Using standards means that in most cases, there's no need to rewrite any messaging code when you migrate to AWS.

It supports **Apache ActiveMQ Classic and RabbitMQ**, enabling applications to communicate asynchronously using standard messaging protocols like JMS, AMQP, and MQTT.

### 5. Amazon Eventbridge

Amazon EventBridge is a serverless event bus that makes it easy to connect applications together using data from your own applications, integrated Software-as-a-Service (SaaS) applications, and AWS services. EventBridge delivers a stream of real-time data from event sources, such as Zendesk, Datadog, or Pagerduty, and routes that data to targets like AWS Lambda. You can set up routing rules to determine where to send your data to build application architectures that react in real time to all of your data sources. EventBridge makes it easy to build event-driven applications because it takes care of event ingestion and delivery, security, authorization, and error handling for you.

Schema Registry - Now in Preview: As your applications become more interconnected through events, you need to spend more effort in finding events and understanding their structure in order to write code to react to those events. The Amazon EventBridge schema registry stores event structure - or schema - in a shared central location and maps those schemas to code for Java, Python, and Typescript so it's easy to use events as objects in your code. Schema from your event bus can be automatically added to the registry through the schema discovery feature. You can connect to and interact with the schema registry from the AWS Management Console, APIs, or the SDK Toolkits for Jetbrains (Intellij, PyCharm, Webstorm, Rider) and VS Code.

EventBridge includes two ways to process and deliver events: _event buses_ and _pipes_.

- [Event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html) are routers that receive [events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events.html) and delivers them to zero or more targets. Use EventBridge to route events from sources such as home-grown applications, AWS services, and third-party software to consumer applications across your organization. Event buses are well-suited for routing events from many sources to many targets, with optional transformation of events prior to delivery to a target.
- [Pipes](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html) EventBridge Pipes is intended for point-to-point integrations; each pipe receives events from a single source for processing and delivery to a single target. Pipes also include support for advanced transformations and enrichment of events prior to delivery to a target.

Pipes and event buses are often used together. A common use case is to create a pipe with an event bus as its target; the pipe sends events to the event bus, which then sends those events on to multiple targets. For example, you could create a pipe with a DynamoDB stream for a source, and an event bus as the target. The pipe receives events from the DynamoDB stream and sends them to the event bus, which then sends them on to multiple targets according to the rules you've specified on the event bus.

https://aws.amazon.com/eventbridge

[What Is Amazon EventBridge? - Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html)

### Amazon EventBridge Scheduler

Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. Highly scalable, EventBridge Scheduler allows you to schedule millions of tasks that can invoke more than 270 AWS services and over 6,000 API operations. Without the need to provision and manage infrastructure, or integrate with multiple services, EventBridge Scheduler provides you with the ability to deliver schedules at scale and reduce maintenance costs.

EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. With EventBridge Scheduler, you can create schedules using cron and rate expressions for recurring patterns, or configure one-time invocations. You can set up flexible time windows for delivery, define retry limits, and set the maximum retention time for failed triggers.

- Use a _cron_ expression to run the rule at specific times and dates.
- Use a _rate_ expression to run the rule at regular intervals.

[Using cron and rate expressions to schedule rules in Amazon EventBridge - Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-rule-pattern.html)

#### Key features of EventBridge Scheduler

EventBridge Scheduler offers the following key features that you can use to configure targets and scale your schedules.

- **Templated targets** - EventBridge Scheduler supports templated targets to perform common API operations using Amazon SQS, Amazon SNS, Lambda, and EventBridge. With predefined targets, you can configure your schedules quickly using the EventBridge Scheduler console, the EventBridge Scheduler SDK, or the AWS CLI.
- **Universal targets** - EventBridge Scheduler provides a universal target parameter (UTP) that you can use to create customized triggers that target more than 270 AWS services and over 6,000 API operations on a schedule. With UTP, you can configure your customized triggers using the EventBridge Scheduler console, the EventBridge Scheduler SDK, or the AWS CLI.
- **Flexible time windows** - EventBridge Scheduler supports flexible time windows, allowing you to disperse your schedules and improve the reliability of your triggers for use cases that do not require precise scheduled invocation of targets.
- **Retries** - EventBridge Scheduler provides at-least-once event delivery to targets, meaning that at least one delivery succeeds with a response from the target. EventBridge Scheduler allows you to set the number of retries for your schedule for a failed task. EventBridge Scheduler retries failed tasks with delayed attempts to improve the reliability of your schedule and ensure targets are available.

[Introducing Amazon EventBridge Scheduler | AWS Compute Blog](https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/)

[What is Amazon EventBridge Scheduler? - EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html)

### Amazon EventBridge to decouple the system architecture

Amazon EventBridge is recommended when you want to **build an application that reacts to events from SaaS applications and/or AWS services.** Amazon EventBridge is the only event-based service that **integrates directly with third-party SaaS partners.** Amazon EventBridge also automatically ingests events from over 90 AWS services without requiring developers to create any resources in their account. Further, Amazon EventBridge uses a defined JSON-based structure for events and allows you to create rules that are applied across the entire event body to select events to forward to a target. Amazon EventBridge currently supports over 15 AWS services as targets, including AWS Lambda, Amazon SQS, Amazon SNS, and Amazon Kinesis Streams and Firehose, among others. At launch, Amazon EventBridge is has limited throughput (see Service Limits) which can be increased upon request, and typical latency of around half a second.

## Customer Engagement

1. Amazon Connect - Cloud-based Contact Center
2. Amazon Pinpoint - Push Notifications for Mobile Apps
3. Amazon Simple Email Service (SES) - Email Sending and Receiving

## Business Productivity

### 1. Alexa for Business - Empower your Organization with Alexa

### 2. Amazon Chime

Frustation-free Meetings, Video Calls, and Chat

Amazon Chime is a communications service that lets you meet, chat, and place business calls inside and outside your organization, all using a single application. Developers can use the same communications infrastructure and services that power Amazon Chime, and add audio calling, video calling, and screen sharing capabilities directly to their applications using the Amazon Chime SDK.

Amazon Chime Voice Connector is a service that enables enterprises to migrate their telephony workloads to AWS. IT professionals can use Voice Connector for low-cost SIP trunking from on-premises or cloud-based phone systems. Voice Connector supports inbound calling, outbound calling, or both. Developers can also use Voice Connector to build PSTN calling in their own applications using the Amazon Chime SDK or stream audio for phone call analytics and machine learning.

https://aws.amazon.com/chime

### 3. Amazon WorkDocs - Enterprise Storage and Sharing Service

### 4. Amazon WorkMail - Secure and Managed Business Email and Calendaring

## Desktop & App Streaming

1. Amazon WorkSpaces - Desktop Computing Service
2. Amazon AppStream 2.0 - Stream Desktop Applications Securely to a Browser
	1. Amazon AppStream is a fully managed AWS service for streaming desktop applications and providing virtual desktops (DaaS) without the need to rewrite applications or manage infrastructure. It allows users to access applications from any device using an HTML5-capable web browser or native client, ensuring they always have the latest software version. Key benefits include reduced costs, accelerated time to market for software vendors, simplified application management, enhanced security, and global scalability.

## Internet of Things

1. AWS IoT Core - Connect Devices to the Cloud
2. Amazon FreeRTOS - IoT Operating System for Microcontrollers
3. AWS Greengrass - Local Compute, Messaging, and Sync for Devices
4. AWS IoT 1-Click - One Click Creation of an AWS Lambda Trigger
5. AWS IoT Analytics - Analytics for IoT Devices
6. AWS IoT Button - Cloud Programmable Dash Button
7. AWS IoT Device Defender - Security Management for IoT Devices
8. AWS IoT Device Management - Onboard, Organize, and Remotely Manage IoT Devices

## Game Development

1. Amazon GameLift - Simple, Fast, Cost-effective Dedicated Game Server Hosting
2. Amazon Lumberyard - A Free Cross-Platform 3D Game Engine with Full Source, Integrated with AWS and Twitch

## Others

### Distributed Load Testing on AWS

Amazon Web Services (AWS) offers customers a scalable, distributed, and serverless architecture to deliver a load testing tool for web application performance testing. The Distributed Load Testing on AWS solution automatically launches and configures containers running on AWS Fargate to help you easily create and simulate thousands of connected users generating a select number of transactions per second without having to provision servers. This solution delivers application performance monitoring, which will help you understand how your application will perform at scale and at expected load, identifying bottlenecks before you release your application.

https://aws.amazon.com/solutions/implementations/distributed-load-testing-on-aws

https://aws.amazon.com/about-aws/whats-new/2020/10/introducing-distributed-load-testing-v1-1

### FinSpace

https://aws.amazon.com/about-aws/whats-new/2021/05/introducing-amazon-finspace-a-fully-managed-service-to-store-prepare-and-analyze-data-for-the-financial-services-industry-fsi

https://aws.amazon.com/blogs/big-data/analyzing-petabytes-of-trade-and-quote-data-with-amazon-finspace
