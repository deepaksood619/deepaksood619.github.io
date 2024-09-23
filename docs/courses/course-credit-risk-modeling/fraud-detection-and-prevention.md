# Fraud Detection and Prevention

- **Anomaly Detection:** Identify unusual patterns in transaction data that may indicate fraudulent activity.
- **Real-time Fraud Detection:** Use real-time analytics to detect and prevent fraudulent transactions as they occur.
- **Behavioral Biometrics:** Analyze user behavior (e.g., face detection, liveness in KYC) to detect potential fraud.

## [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/)

Amazon Fraud Detector is a fully managed service that makes it easy to identify potentially fraudulent online activities such as online payment fraud and the creation of fake accounts.

![Amazon Fraud Detector](../../media/Pasted%20image%2020240916160527.png)

1. Step 1 - Explore data models for your business use case.
2. Step 2 - Define the event you want to evaluate for fraud.
3. Step 3 - Upload your historical event dataset to Amazon S3 or stream and store your event data directly in AFD.
4. Step 4 - Select a model type and train your model. The service automatically inspects and enriches data, performs feature engineering, selects algorithms, trains and tunes your model, and hosts the model.
5. Step 5 - Create rules to either accept, review, or collect more information based on model predictions.
6. Step 6 - Call the Amazon Fraud Detector API from your online application to receive real-time fraud predictions and take action based on your configured detection rules.

### Models

- Transaction Fraud Insights
- Online Fraud Insights
- Account Takeover Insights

### Links

- [What is Amazon Fraud Detector? - Amazon Fraud Detector](https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html)
- [Amazon Fraud Detector features](https://aws.amazon.com/fraud-detector/features/)
- [Amazon Fraud Detector pricing](https://aws.amazon.com/fraud-detector/pricing/)
- [Amazon Fraud Detector FAQs](https://aws.amazon.com/fraud-detector/faqs/)
- [Github Sample Datasets](https://github.com/aws-samples/aws-fraud-detector-samples/tree/master/data)
- [Get and upload example dataset - Amazon Fraud Detector](https://docs.aws.amazon.com/frauddetector/latest/ug/step-1-get-s3-data.html)

## Fraud Detection using Amazon Sagemaker

## Links

- [Real-time Fraud Detection with Yoda and ClickHouse | by Nick Shieh | tech-at-instacart](https://tech.instacart.com/real-time-fraud-detection-with-yoda-and-clickhouse-bd08e9dbe3f4)
