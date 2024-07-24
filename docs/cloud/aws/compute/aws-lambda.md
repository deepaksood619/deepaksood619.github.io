# AWS Lambda

https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html

https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale

https://www.toptal.com/aws/service-oriented-architecture-aws-lambda

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
