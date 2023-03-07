# AWS Lambda

<https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html>

<https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale>

<https://www.toptal.com/aws/service-oriented-architecture-aws-lambda>

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
