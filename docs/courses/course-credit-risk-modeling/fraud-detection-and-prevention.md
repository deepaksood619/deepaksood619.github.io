# Fraud Detection and Prevention

- **Anomaly Detection:** Identify unusual patterns in transaction data that may indicate fraudulent activity.
- **Real-time Fraud Detection:** Use real-time analytics to detect and prevent fraudulent transactions as they occur.
- **Behavioral Biometrics:** Analyze user behavior (e.g., face detection, liveness in KYC) to detect potential fraud.

## [Amazon Fraud Detector](https://aws.amazon.com/fraud-detector/) (Deprecated)

[Amazon Fraud Detector availability change - Amazon Fraud Detector](https://docs.aws.amazon.com/frauddetector/latest/ug/frauddetector-availability-change.html)

- Thank you for your interest in Amazon Fraud Detector. After careful consideration, we have made the decision to no longer accept new customers as of November 7th, 2025.
- If you're looking for a fraud detection solution, we recommend AutoGluon, which is an open-source automated machine learning (AutoML) library. More details are available at the [AutoGluon website](https://auto.gluon.ai/stable/index.html) and the [AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/machine-learning-with-autogluon-an-open-source-automl-library/). The AutoGluon Fraud Detection notebook can be found [here](https://www.kaggle.com/code/jaquelinenoonan/autogluon-on-fraud-detection/notebook) on Kaggle. A general framework notebook is [here](https://docs.aws.amazon.com/sagemaker/latest/dg/autogluon-tabular.html) for Amazon SageMaker AI notebook. After training AutoGluon models, you can use SageMaker AI for deploying models (more information [here](https://auto.gluon.ai/dev/tutorials/cloud_fit_deploy/cloud-aws-sagemaker-deployment.html)). AWS also has a [workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/f440a5f2-c806-4a9f-b472-aab4cecf1391/en-US) built to help you set up real-time payment processing architecture.

Amazon Fraud Detector is a fully managed service that makes it easy to identify potentially fraudulent online activities such as online payment fraud and the creation of fake accounts.

![Amazon Fraud Detector](../../media/Pasted%20image%2020240916160527.jpg)

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

### Model metrics

![Model performance charts](../../media/Screenshot%202024-10-16%20at%203.52.43%20PM.jpg)

![ROC Curve](../../media/Screenshot%202024-10-16%20at%203.52.52%20PM.jpg)

![Model variable importance](../../media/Screenshot%202024-10-16%20at%203.53.40%20PM.jpg)

### Links

- [What is Amazon Fraud Detector? - Amazon Fraud Detector](https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html)
- [Amazon Fraud Detector features](https://aws.amazon.com/fraud-detector/features/)
- [Amazon Fraud Detector pricing](https://aws.amazon.com/fraud-detector/pricing/)
- [Amazon Fraud Detector FAQs](https://aws.amazon.com/fraud-detector/faqs/)
- [Github Sample Datasets](https://github.com/aws-samples/aws-fraud-detector-samples/tree/master/data)
- [Get and upload example dataset - Amazon Fraud Detector](https://docs.aws.amazon.com/frauddetector/latest/ug/step-1-get-s3-data.html)
- [GitHub - aws-solutions-library-samples/fraud-detection-using-machine-learning: Setup end to end demo architecture for predicting fraud events with Machine Learning using Amazon SageMaker](https://github.com/aws-solutions-library-samples/fraud-detection-using-machine-learning)

## Others

- [Nametag: Identity Verification & Account Protection Solutions](https://getnametag.com/)
	- Prevent breaches and reduce IT support costs with ready-to-use solutions for secure onboarding, self-service account recovery, helpdesk verification and agentic AI security. Built on Deepfake Defense™ identity verification and integrations with your identity stack.
	- Data breaches
	- Ransomware
	- Social engineering
	- AI deepfakes
	- Fake IT workers
	- Account takeovers
	- Insider threats
	- Presentation attacks
	- Injection attacks

## Links

- [Real-time Fraud Detection with Yoda and ClickHouse | by Nick Shieh | tech-at-instacart](https://tech.instacart.com/real-time-fraud-detection-with-yoda-and-clickhouse-bd08e9dbe3f4)
- Fraud Detection using Amazon Sagemaker
