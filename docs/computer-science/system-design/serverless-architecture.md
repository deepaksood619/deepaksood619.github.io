# Serverless Architecture

Serverless computing simply means using existing, auto-scaling cloud services to achieve system behaviours. In other words, I don't manage any servers or docker containers. I don't set up networks or manage operation (ops). I merely provide the serverless solution my recipe and it handles creation of any needed assets and performs the required computational process.

1. Containerisation - Gives a uniform development environment that is independent of the systems the code is running on.

2. Microservices architecture - Developers are able to quickly understand a certain module without going through the whole code base.
    - Also changing something on one part of the code doesn't effect the other parts of the product.
    - Apis are used to communicate between different modules
    - Messaging Queue is used for inter-modules communication (AMQP, MQTT, etc.)

3. Event Based Architecture
    - Events are triggered when some event happens
    - Example - When a photo is uploaded automatically trigger the thumbnail creation function.
    - Functions subscribe to events, and based on that event react accordingly.

4. AWS Lambda
5. AWS CloudFunctions
6. AWS CloudFormation (for provisioning)

## Stateless Services

- Not a cache or a database
- Frequently accessed metadata
- No instance affinity
- Loss of a node is a non-event

## Durable Functions

Durable Functionsis an extension of [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) that lets you write stateful functions in a serverless compute environment. The extension lets you define stateful workflows by writing [orchestrator functions](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-orchestrations) and stateful entities by writing [entity functions](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-entities) using the Azure Functions programming model. Behind the scenes, the extension manages state, checkpoints, and restarts for you, allowing you to focus on your business logic.

https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview

## AWS SAM (Serverless Application Model)

The AWS Serverless Application Model (SAM) is an open-source AWS framework that allows developers to more efficiently build serverless applications. It includes SAM CLI options for local testing and integrates with various AWS serverless tools.

https://www.toptal.com/aws/typescript-jest-aws-sam-tutorial

[AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/)

[What is the AWS Serverless Application Model (AWS SAM)? - AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)

## References

- https://cloudplatform.googleblog.com/2018/04/Cloud-native-architecture-with-serverless-microservices-the-Smart-Parking-story.html
- SE Radio - 320: Serverless Applications - Kishore Bhatia with Nate Taggart
- https://www.freecodecamp.org/news/complete-back-end-system-with-serverless
- [Serverless Compute at the Heart of Your EDA • Julian Wood • GOTO 2024 - YouTube](https://www.youtube.com/watch?v=wYvQv_MTMNs&ab_channel=GOTOConferences)
