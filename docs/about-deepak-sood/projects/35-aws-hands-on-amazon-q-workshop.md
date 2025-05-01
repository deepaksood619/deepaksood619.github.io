# AWS Hands-On Amazon Q Workshop

1. Amazon Q Developer Cloud Operations Workshop
2. Amazon Q Developer Data Engineering Workshop

## Intro

Experience the power of Amazon Q Developer, your AI-powered assistant for software development. Explore how Amazon Q Developer can streamline your daily workflow on AWS. Stuck in the console? Open the Amazon Q Developer panel for instant assistance. Need help crafting CLI commands? Amazon Q Developer has you covered. Want assistance right in Slack or Microsoft Teams? Amazon Q Developer is by your side, helping you work smarter, faster, and more efficiently across your favorite tools.

## Overview

In this workshop, you'll take on the role of a new developer for a company that is assigned with a few tasks:

1. Completing a partially built data processing pipeline. The previous developer left the company and there are minimal notes and documentation associated with the parts of the data processing pipeline that was built.
2. Assisting an engineering team that is building a new web application to deploy the required resources on AWS.

You will be leveraging Q Developer to help you complete these tasks more efficiently.

## Amazon Q Prompts

### Lambda
- What Lambda functions are deployed in my account?
- What is the execution timeout for the file-download-data-processing-function Lambda function?
- Please generate the AWS CLI command to set the execution timeout to 30 seconds for the file-download-data-processing-function Lambda function
- Lambda - Diagnose console errors with Amazon Q

### Glue

- Please create a Glue script that reads a CSV file from S3 and writes to a Redshift table

### Redshift

- Redshift Data Analysis with Generative SQL
	1. Load Data from S3
	2. Accessing Generative SQL in Redshift
	3. Authoring Queries with Generative SQL
* What are the top 3 regions by units_sold?
* Create a table called revenue_by_item that finds the average total_profit for each item_type in sales.
* What is the top country by total_revenue?

### Deploy Web Application

- Creating the resources in the AWS console that are needed for the web application.
- Formalizing the created resources as Infrastructure as Code (IaC) so the web application can easily be recreated across environments.
- OPTIONAL - Recommending an EC2 instance type for a web cache.
- Console-to-Code
- OPTIONAL - EC2 Instance Type Finder
	- Give me which EC2 instances can be a good fit to create a web application ?
	- What is the recommended instance type for a web cache using squid?

### Summary

- You were able to understand and update the current AWS resources as part of the pipeline
- You were able to successfully troubleshoot AWS resources with Amazon Q
- You utilized Amazon Q to generate the code needed to complete the AWS Glue job for your data processing pipeline.
- You utilized the Generative SQL tool of Amazon Q Developer to author SQL queries that produce insights from our business data
- You were able to deploy resources on AWS to support a new web application with Q Developer
- You leveraged Amazon Q's ability to help you in finding the right EC2 instances for your project.

## Amazon Q Developer Data Engineering Workshop

### Lab 1: Accelerate building SQL reports in Amazon Redshift

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write prompts to interact with generative SQL to generate simple SQL reports.
    - Specify requirements and incorporate details in prompts to generate advanced SQL reports.
- Queries
	- Find out the event that have the least total number of tickets sold in December. Use tickit.event and tickit.date. December is coded as 'DEC' in the month column.
	- Analyze sales performance for different events and their categories in December. List the event name with their categories, the number of sales, total quantity of tickets sold, and the total revenue.

### Lab 2: Accelerate Spark-based ETL pipelines in AWS Glue

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write single-line prompts as comments to tackle simple ETL task with Amazon Q Developer in a AWS Glue Notebook.
    - Write multi-line prompts as comments to tackle complex ETL task with Amazon Q Developer in a AWS Glue Notebook.
    - Consult Amazon Q chat for general guidance on data engineering questions.

### Lab 3: Accelerate data transformations in Amazon EMR

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write single-line prompts as comments to extract and load data with Amazon Q Developer in an Amazon EMR Notebook.
    - Write multi-line prompts as comments to perform a series of data transforamtion jobs with Amazon Q Developer in an Amazon EMR Notebook.
    - Leverage Amazon Q chat in the AWS management console to learn more about use cases of EMR serverless.

### Lab 4: Accelerate feature engineering in Amazon SageMaker

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write single-line prompts as comments to apply simple feature engineering tasks with Amazon Q Developer in Jupyterlab of Amazon SageMaker.
    - Write multi-line prompts as comments to execute complex feature engineering tasks with Amazon Q Developer in Jupyterlab of Amazon SageMaker.
    - Learn how Amazon Q chat functionality integrated in Amazon SageMaker can help accelerate development of your work in the notebook.

### Lab 5: Accelerate building AWS Lambda functions

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write a multi-line prompt as a docstring to create a AWS Lambda function with Amazon Q Developer in AWS Lambda's code editor.
    - Learn how to utilize Amazon Q to help troubleshooting a failed test.

### Lab 6: Accelerate building Python-based ETL jobs in VS Code

- **Duration**: 20 minutes
- **Learning Objectives**
    - Write single-line prompts as comments to extract data source with Amazon Q Developer in VS Code Studio.
    - Write multi-line prompts as docstrings to complete the whole ETL script with Amazon Q Developer in VS Code Studio.
    - Explore the Amazon Q chat's functionalities, such as explain, refactor, fix, or optimize the selected code.

## Infra

- http://join.workshops.aws/
