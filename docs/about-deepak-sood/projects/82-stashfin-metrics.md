# Stashfin Metrics

## Management Metrics / Tools

### Gitlab / Code

- Number of repositories
- Size of repositories
- Number of commits and MRs
- Test cases
    - CodeCoverage
- SonarQube - Smells and Errors / CodeClimate
    - Number of bugs in module
- Sentry alerts
- ECR Images
- Gitlab
- Response times of modules
- Jenkins
    - Number of CICD Pipelines
    - Number of deployments
- Contribution Analytics (Bronze paid version gitlab)
    [https://docs.gitlab.com/ee/user/group/contribution_analytics/](https://docs.gitlab.com/ee/user/group/contribution_analytics/)

### Grafana

- Istio Service Mesh
    - Response Time
    - Tail latencies (95th percentile)
    - newrelic dashboard
        - [https://one.nr/0bEjOymn0w6](https://one.nr/0bEjOymn0w6)
- Pod usage
- DB Audit logs
- CloudFlare metrics
- Loki -  logs - search for error

### Databases

- AWS / MySQL WorkBench Performance
    - Top most high cost sql queries
- Table Size
- Index sizes
- Number of tables

### AWS

- Billing review
- IAM Users / configurations
- Resources

### Key Metrics

#### Concurrency

Current - 3500 req/min = 60 req/sec
Scalable - 500 req/sec
10 cr users - 10 cr / 3000 - 33333 users
With lead to approval ratio of 10%, you need - 3,33,333
Tech scalable for 8 lakh users

#### Write key metrics of stashfin (peak workloads till now and expected workloads)

- number of customers (active customers)
- number of loans processed daily / monthly
- % of people who default goes to collection process
- number of daily email sent
- number of marketing email sent
- number of daily / monthly sms sent

## Business Metrics / PowerBI

### PowerBI Dashboard / Reports

1. Communications
2. Payment Inflow Dashboard
3. Funnel SF
    1. Elevate Daily Tracker
        1. Daily Summary
        2. Funnel Reports
        3. TAT Reports
4. General Funnel - Monthly disbursal

### Other Metrics

1. Vendor Billing external API
2. Capacity planning
3. Add all the metrics value
4. Revised ETA column in sheet

### Core Metrics

#### 1. Devops

1. Uptime to be 100% (less than 45 mins a month of TSO (Total System Outage) & less 2 hours of MSO & Less than 4 hours of SSO)
2. Infra cost on a unit loan disbursed to be reduced by 20% QOQ - Pls publish current (CPU, Storage, Overall)
3. Website / API Response time (Website less than 3 seconds on all platforms, API's less than 500ms)
4. 4XX / 5XX to come down by 20% MOM
5. Complete metering of all External API calls to tally 100% with Vendor billing
6. 90% ETA compliance on tasks
7. 100% compliance of Post incident analysis on all issues within 24hrs including actions items to be put in Dev Q
8. Publish a scale out plan & Infra budget based on sales growing MOM 20% & adhere to it in actuals

#### 2. Engineering

1. DB performance to improve by 15% MOM (net CPU to go down / net cost to go down & choking issues to reduce)
2. Sonar issues to come down by 20% MOM
3. Code Complexity to reduce by 20%
4. 50% of outages reported should have a preemptive time stamp on engineering side (we should know before users)
5. 100% test case coverage of user journey for all customers
6. All user facing properties to be tested 10+ times each day
7. Optimizations
1. 2 New implementations each months for Scalability enhancements
2. 2 New implementations each months for Security
3. 2 New implementations each months for Confidence / Testing / Alerting

#### 3. Tech PMO

1. Number of Projects per week (New, In Progress, Complete)
    1. Cut by Adhoc, Project & Bugs
2. ETA Compliance to be >95% (Net of Dependencies)
3. All dependencies to be communicated within first 20% of Project cycle
4. All projects to have Infosec sign off

#### 4. Tech QA

1. Measure weekly production bug count
2. Test case coverage to be >95%
3. Test case automation off coverage to be >75%
4. 100% API documentation on PostMan & Runners

#### 5. Decision Engine

1. 100% Monitoring of DE Daily
2. All cases (100%) to be decisioned with 0% miss & 1% (or below) error rate
3. 100% documentation of all changes in DE
4. 10 cases in Libr8 FPD & 20 cases in Elev8 Non starter to be reviewed & feedback posted each week
