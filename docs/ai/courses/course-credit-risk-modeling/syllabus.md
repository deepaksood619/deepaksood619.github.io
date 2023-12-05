# Course - Credit Risk Modeling

https://365datascience.teachable.com/p/credit-risk-modeling-in-python

https://365datascience.teachable.com/courses/629877

https://www.dropbox.com/sh/7oslws1xhsm1zbf/AABkdWDKqpdcGmY1NbXAnkrBa?dl=0&lst=

## Introduction

- What is credit risk and why is it important?
- Expected loss (EL) and its components: PD, LGD and EAD
- Capital adequacy, regulations, and the Basel II accord
- Basel II approaches: SA, F-IRB, and A-IRB
- Different facility types (asset classes) and credit risk modeling approaches

## Dataset description

- Our example: consumer loans. A first look at the dataset
- Dependent variables and independent variables

## General preprocessing

- Importing the data into Python
- Preprocessing few continuous variables
- Preprocessing few continuous variables: Homework
- Preprocessing few discrete variables
- Check for missing values and clean
- Check for missing values and clean: Homework.

## PD model: data preparation

- How is the PD model going to look like?
- Dependent variable: Good/ Bad (default) definition
- Fine classing, weight of evidence, and coarse classing
- Information value
- Data preparation. Splitting data
- Data preparation. An example
- Data preparation. Preprocessing discrete variables: automating calculations
- Data preparation. Preprocessing discrete variables: visualizing results
- Data Preparation. Preprocessing Discrete Variables: Creating Dummies (Part 1)
- Data preparation. Preprocessing discrete variables: creating dummies (Part 2)
- Data preparation. Preprocessing discrete variables. Homework.
- Data preparation. Preprocessing continuous variables: automating calculations
- Data preparation. Preprocessing continuous variables: creating dummies (Part 1)
- Data preparation. Preprocessing continuous variables: creating dummies (Part 2)
- Data preparation. Preprocessing continuous variables: creating dummies. Homework
- Data preparation. Preprocessing continuous variables: creating dummies (Part 3)
- Data preparation. Preprocessing continuous variables: creating dummies. Homework
- Data preparation. Preprocessing the test dataset

## PD model estimation

- The PD model. Logistic regression with dummy variables
- Loading the data and selecting the features
- PD model estimation
- Build a logistic regression model with p-values.
- Interpreting the coefficients in the PD model

## PD model validation

- Out-of-sample validation (test).
- Evaluation of model performance: accuracy and area under the curve (AUC)
- Evaluation of model performance: Gini and Kolmogorov-Smirnov.

## Applying the PD model for decision making

- Calculating probability of default for a single customer
- Creating a scorecard
- Calculating credit score
- From credit score to PD
- Setting cut-offs
- Setting cut-offs. Homework

## PD model monitoring

- PD model monitoring via assessing population stability
- Population stability index: preprocessing
- Population stability index: calculation and interpretation
- Homework: building an updated PD model

## LGD and EAD models

- LGD and EAD models: independent variables
- LGD and EAD models: dependent variables
- LGD and EAD models: distribution of recovery rates and credit conversion factors

## LGD model

- LGD model: preparing the inputs
- LGD model: testing the model
- LGD model: estimating the accuracy of the model
- LGD model: saving the model
- LGD model: stage 2 -- linear regression
- LGD model: stage 2 -- linear regression evaluation
- LGD model: combining stage 1 and stage 2
- Homework: building an updated LGD model

## EAD model

- EAD model estimation and interpretation
- EAD model validation
- Homework: building an updated EAD model

## Calculating expected loss

- Calculating expected loss
- Homework: calculate expected loss on more recent data

https://www.openriskmanual.org/wiki/Main_Page

https://www.openriskmanual.org/wiki/Category:Credit_Portfolio_Management

## Analytics

Monitoring or KPIs & flag anything > 5% deviation

### Daily

- Payment rates (elev8, libr8, sentinel, DSA)
- FCP rates
- Fresh collection cases
- FPD , SPD (7 15 30)
- Daily dashboard

### Weekly

- Weekly -- > Collection bucket performance trend
- Weekly -- >Flow rates into 90+
- Weekly -- >0 5 10 15 30 day payment rates
- Weekly -- >FCP % disbursement
- Weekly -- >0-1 Roll rates
- Weekly -- >Origination Mix
- Weekly -- >Collection efforts (Dialer data)

### Monthly

- Monthly → Credit committee pack
- Monthly → Static pools
- Monthly → Roll rates
- Monthly → Resolution Rates
- Monthly → Total expected payment
- Monthly → Origination Mix
- Monthly → Loan vintage MIS
- Monthly → ECM MIS
- Monthly → BB Collections
- Monthly → SMS Model MOnitoring
- Monthly → PSI CSI Monitoring
- Monthly → Bank Model Monitoring
- Monthly → BB Collections
- Monthly → 90+ Recovery

https://www.youtube.com/playlist?list=PLhViQpMavSBgxcLV34bRrJY-rwHqeml2i

## Links

- [Intro](ai/courses/course-credit-risk-modeling/intro.md)
- [Credit and Debt](credit-and-debt)
- [Decision Areas and Credit Scorecards](decision-areas-and-credit-scorecards)
- [Fraud Features](fraud-features)
