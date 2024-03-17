# AWS Certified Data Engineer - Associate Questions

## Question 1

A consultant company uses a cloud-based time-tracking system to track employee work hours. The company has thousands of employees that are globally distributed. The time-tracking system provides a REST API to obtain the records from the previous day in CSV format. The company has a cron on premises that is scheduled to run a Python program each morning at the same time. The program saves the data into an Amazon S3 bucket that serves as a data lake. A data engineer must provide a solution with AWS services that reuses the same Python code and cron configuration.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO.)

A - Schedule the cron by using AWS CloudShell

B - Run the Python code on AWS Lambda functions

C - Install Python and the AWS SDK for Python (Boto3) on an Amazon EC2 instance to run the code

D - Schedule the cron by using Amazon EventBridge Scheduler

E - Run the Python code on AWS Cloud9