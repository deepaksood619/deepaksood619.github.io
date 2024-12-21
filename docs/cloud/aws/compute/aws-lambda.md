# AWS Lambda

https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html

https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale

https://www.toptal.com/aws/service-oriented-architecture-aws-lambda

[Managing applications in the AWS Lambda console - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/applications-console.html)

Run Your Code in Response to Events

```python
# Stock Check Lambda function

# This function is triggered when values are inserted into the Inventory DynamoDB table.
# Inventory counts are checked, and if an item is out of stock, a notification is sent to an SNS topic.

# This handler is executed every time the Lambda function is triggered
def lambda_handler(event, context):

    # Show the incoming event in the debug log
    print("Event received by Lambda function: " + json.dumps(event, indent=2))

    # For each inventory item added, check if the count is zero
    for record in event['Records']:
    newImage = record['dynamodb'].get('NewImage', None)
    if newImage:

        count = int(record['dynamodb']['NewImage']['Count']['N'])

        if count == 0:
        store = record['dynamodb']['NewImage']['Store']['S']
        item  = record['dynamodb']['NewImage']['Item']['S']

        # Construct message to be sent
        message = store + ' is out of stock of ' + item
        print(message)

        # Connect to SNS
        sns = boto3.client('sns')
        alertTopic = 'NoStock'
        snsTopicArn = [t['TopicArn'] for t in sns.list_topics()['Topics']
                        if t['TopicArn'].lower().endswith(':' + alertTopic.lower())][0]

        # Send message to SNS
        sns.publish(
            TopicArn=snsTopicArn,
            Message=message,
            Subject='Inventory Alert!',
            MessageStructure='raw'
        )

    # Finished!
    return 'Successfully processed {} records.'.format(len(event['Records']))
```

## Slack notifications

```python
import logging
import json
from urllib.parse import urlencode
from urllib.request import Request, urlopen

def lambda_handler(event, context):
    webhook_url = "https://hooks.slack.com/services/xxx/org_id/api_key"
    print(event)
    message = json.loads(event["Records"][0]["Sns"]["Message"])
    name = message["AlarmName"]
    reason = message["NewStateReason"]
    state = message["NewStateValue"]
    if state == "ALARM":
        color = "danger"
    else:
        color = "good"
    slack_data = {
        "channel": "monitoring",
        "color": color,
        "fields": [
            {
            "title": "Alarm: %s"  % (name),
            "value": "%s \n https://ap-south-1.console.aws.amazon.com/cloudwatch/home?region=ap-south-1#alarmsV2:alarm/%s?" % (reason, name),
            }
        ]
    }
    request = Request(
        webhook_url,
        data=json.dumps(slack_data).encode(),
        headers={"Content-Type": "application/json"},
    )
    response = urlopen(request)
    return {"statusCode": response.getcode(), "body": response.read().decode()}
```

[AWS Serverless Lambda Supports Response Streaming - YouTube](https://www.youtube.com/watch?v=iwX9dYrcL1k&ab_channel=HusseinNasser)

[Unlocking Faster & Efficient Data Processing w/ Serverless • Uma Ramadoss & Adam Wagner • GOTO 2023 - YouTube](https://www.youtube.com/watch?v=Mbt78pAfuOs&ab_channel=GOTOConferences)

## Cost

| Metric             | EC2 Spot Instance (including EBS) | Lambda (7 requests/hr) | Lambda (8 requests/hr) |
| ------------------ | --------------------------------- | ---------------------- | ---------------------- |
| Monthly Cost (USD) | $41.50892                         | $38.33                 | $43.80                 |
| Cost Breakdown     |                                   |                        |                        |
| EC2 Spot Instance  | $0.87892                          |                        |                        |
| EBS Storage        | $40.63                            |                        |                        |
| Lambda Compute     |                                   | $38.33                 | $38.33                 |

- Lambda can be cheaper than EC2 Spot Instance (including EBS) when the Lambda workload is lower (7 requests per hour).
- Lambda becomes more expensive than EC2 Spot Instance (including EBS) when the Lambda workload increases (8 requests per hour).

[Lambda vs EC2 cost - AWS Pricing Calculator](https://calculator.aws/#/estimate?id=aaae8951c6dbd405046d9682f381355fe1d1fe10)

## Working

![What makes aws lambda fast](../../../media/Pasted%20image%2020240924013035.jpg)

### What makes AWS Lambda so fast?

There are 4 main pillars:

### 1 -  Function Invocation

AWS Lambda supports synchronous and asynchronous invocation.

In synchronous invocation, the caller directly calls the Lambda function using AWS CLI, SDK, or other services.

In asynchronous invocation, the caller doesn’t wait for the function’s response. The request is authorized and an event is placed in an internal SQS queue. Pollers read messages from the queue and send them for processing.

### 2 - Assignment Service

The Assignment Service manages the execution environments.

The service is written in Rust for high performance and is divided into multiple partitions with a leader-follower approach for high availability.

The state of execution environments is written to an external journal log.

### 3 - Firecracker MicroVM

Firecracker is a lightweight virtual machine manager designed for running serverless workloads such as AWS Lambda and AWS Fargate.

It uses Linux’s Kernel-based virtual machine to create and manage secure, fast-booting microVMs.

### 4 - Component Storage

AWS Lambda also has to manage the state consisting of input data and function code.

To make it efficient, it uses multiple techniques:

- Chunking to store the container images more efficiently.
- Using convergent encryption to secure the shared data. This involves appending additional data to the chunk to compute a more robust hash.
- SnapStart feature to reduce cold start latency by pre-initializing the execution environment
