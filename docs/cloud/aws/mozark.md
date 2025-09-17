# Mozark 

### About

[Digital Experience Monitoring Platform by Mozark](https://www.mozark.ai/)
- Device Farm and Selenium Grid

Digital Experience Management

Deliver a seamless Digital Experience to your customers using MOZARK’s innovative platform that integrates Networks, Apps, Cloud, and Device testing.

AI based network and application testing software. The products offered by the company include 5GMARK, AQUAMARK, INDOORMARK. The features of the product include monitoring, benchmarking. It also provides high footfall venue monitoring, VIP location monitoring, etc. It provides testing of applications on real devices. The clients of the company include SONY, SNCF, etc.

Mozark serves in the B2B, SaaS space.

## Product

- App Testing platform
- FCC - US Govt Platform
- Mozark AI GCP - Live Streaming (2 workflow - image processing and video processing)
- 5G Mark

### Architecture

- Synthetic monitoring
    - 10 new ec2 in multiple regions
        - This is not running
    - wayfair - each 30 mins, go inside website, login, etc
    - Data saved in HAR file

## Cost Savings

### Done

- Delete RDS snapshots 
- Add Index for IOPS
- PIOPS to gp3, reduce size of DB too (savings - $313)
- Reduce instances and its sizes
- Cloudwatch charges high - 5417 log groups (savings - $400-$450)
    - ECS turn off metrics
    - API gateway info logs turned off
- Dynamodb savings - $20-30
- Cloud run - minimum instances at Revision level is set to 1, therefore we are getting idle costs without any requests
- Delete all live streaming resources

### TODO

- [ ] Visual Synthetic Monitoring - Anjali and Anshul
- [ ] FCC - Straightforward
- [ ] CloudRun vs Containers - move to VM
- [ ] **Mozark - Review Architecture**
- [ ] **Product DEMO**

- S3 - Huge costs, add different tiers for data retention - 23.6 TB
    - S3 direct upload to onezone-IA (56% costs savings - $350-$400)
- Quicksight costs
- Fargate, Lambda, Kinesis, ECS, API Gateway
- ECR costs
- IMP
    - Small instances - EC2
    - s3 - directly upload to ONEZONE_IA
- Access to AWS Accounts
- Billing not working
- Cost accelerator mails
- Daily Standup
- Confluence - Architecture
- S3
    - Daily storage capacity for execution-output-files/: 23.16 GB
    - Daily storage capacity for execution-screenshots/: 0.94 GB

### Asks

**Actions**

1. _ DevOps work retrospection for Jul - Anjali Kaushal
2. _ cost optimization activities summary - Jul - Deepak Kumar Sood Anjali Kaushal
3. _ cost goals - Aug - Deepak Kumar Sood Anjali Kaushal
4. _ cost optimization activities - Aug - Deepak Kumar Sood Anjali Kaushal
5. _ setting a meeting for GCP cost actions - Deepak Kumar Sood
6. _ GCP architecture and actions - Anjali Kaushal Sumit Kumar Gupta

## Infra

### Team

- Anjali is the Lead
- Anshul does execution
- Others - Agamjot (replaced by Anjali, on-notice), Rajat
- AM - Akash

### Docs

[Centralised_cost_Mozark](https://docs.google.com/spreadsheets/d/1hgk-iYVF1Yb7anF0gAu2LvpllYiEN4UMQtJ8i3-kqfU/edit?gid=1534908864#gid=1534908864)

https://mozarkai.atlassian.net/wiki/spaces/DO/pages/626393144/Discovery+Phase

https://mozarkai.atlassian.net/wiki/spaces/EN/pages/597065733/MOZARK+Platform+Architecture

### Microsoft

https://www.office.com/?auth=2

https://mozark-management.awsapps.com/start/#/?tab=accounts
<span style="background:#000">deepaks@mozark.ai</span>
<span style="background:#000">B)971761161665ox</span>
<span style="background:#000">#KqBZL!Jtj#;g6z</span>
<span style="background:#000">b7609b3332cc3c60319f4ad2</span>

### GCP

https://workspace.google.com/dashboard
Username - deepaks@mozark.ai
U<D7WuG4E7Uj9hU=

- Cloud Functions
- Cloud Run
    - rotate-image-final
- Cloud Workflows

```bash
gcloud run services describe convert-mkv-mp4-final --region us-central1

gcloud run services describe convert-mp4-res --region us-central1

gcloud run services describe create-initial-result --region asia-south1

gcloud run services describe crop-image-final --region us-central1

gcloud run services describe crop-video --region us-central1

gcloud run services describe crop-video-final --region us-central1

gcloud run services describe deskew-image-final --region us-central1

gcloud run services describe deskew-video-final --region us-central1

gcloud run services describe detect-event --region asia-south1

gcloud run services describe detect-text --region us-central1

gcloud run services describe detect-text-final --region us-central1

gcloud run services describe detect-text-image-final --region us-central1

gcloud run services describe dominant-color-final --region us-central1

gcloud run services describe fcc-speed-test-vm--alert-cloud-function --region us-central1

gcloud run services describe file-upload-api-final --region us-central1

gcloud run services describe frame-events --region asia-south1

gcloud run services describe function-1 --region us-central1

gcloud run services describe function-2 --region asia-south1

gcloud run services describe image-similarity-final --region us-central1

gcloud run services describe image-template-api --region us-central1

gcloud run services describe match-template-image-final --region us-central1

gcloud run services describe match-template-video-final --region us-central1

gcloud run services describe processimage --region asia-south1

gcloud run services describe processvideo --region asia-south1

gcloud run services describe result --region asia-south1

gcloud run services describe rotate-crop-deskew-image --region asia-south1

gcloud run services describe rotate-crop-deskew-video --region asia-south1

gcloud run services describe rotate-image-final --region us-central1

gcloud run services describe rotate-video-final --region us-central1

gcloud run services describe set-fps-final --region us-central1

gcloud run services describe set-fps1 --region us-central1

gcloud run services describe single-api --region us-central1

gcloud run services describe single-image-api-final --region us-central1

gcloud run services describe single-video-api-final --region us-central1

gcloud run services describe upload --region asia-south1

gcloud run services describe validatecognitoaccesstoken --region asia-east1

gcloud run services describe validatemozarkcognitoaccesstoken --region asia-east1

gcloud run services describe video-freeze --region us-central1

gcloud run services describe video-freeze-final --region us-central1

gcloud run services describe vqa-final --region us-central1
```

### AWS

User name: <span style="background:#000">anjali@mozark.ai</span>
password: <span style="background:#000">D%795343035526oj</span>
https://mozark-management.awsapps.com/start/#/?tab=accounts
Account name : App Platform Production

#### Top accounts

- App Platform Production (351450525359) - $12,927.81
- Public Network Platform (811343552696) - $5,004.48 - US East (N. Virginia)
- mozark-aws-staging (274305851183) - $1,119.92
- Network Platform - FCC Staging (206313106281) - $771.99
- Dev Public Network Platform (189888046981) - $610.08
- Network Platform - Public Production (232748664561) - $192.34
- AWS Administration Account (966711687879) - $15.12

### DB

automation-dashboard-mysql-rds.chgg9hhqherh.ap-south-1.rds.amazonaws.com
user : <span style="background:#000">mozarkadmin</span>
password: <span style="background:#000">Mozark##2023</span>

Get key generated from Anshul to connect with mysqlworkbench
prod-mozark-mysql-db.chgg9hhqherh.ap-south-1.rds.amazonaws.com
user- admin  
MtoXwPgpPQ

### Applications

https://integration-app-testing.mozark.ai/login
https://integration-api.mozark.ai/v1
https://integration-app-testing.mozark.ai
https://uob-app-testing.mozark.ai
https://mozarkdemo-app-testing.mozark.ai
https://hotstar-app-testing.mozark.ai
https://mozark-app-testing.mozark.ai
https://icici-app-testing.mozark.ai
https://fcc-app-testing.mozark.ai
https://demo-app-testing.mozark.ai
https://phonepe-app-testing.mozark.ai
https://cicc-app-testing.mozark.ai
https://fccstaging-app-testing.mozark.ai
https://spn-app-testing.mozark.ai
https://hotstarperf-app-testing.mozark.ai
https://hscare-app-testing.mozark.ai
https://uobprod-app-testing.mozark.ai
https://zee5-app-testing.mozark.ai
https://viacomlr-app-testing.mozark.ai
https://icicipoc-app-testing.mozark.ai
https://philcom-app-testing.mozark.ai
https://viacom-app-testing.mozark.ai
https://cox-app-testing.mozark.ai
https://vfq-app-testing.mozark.ai
https://digitallife-app-testing.mozark.ai
https://yondu-app-testing.mozark.ai
https://cicc-app-testing.mozark.ai/login

### VPN

pritunl
- username: "pritunl"
- password: "nJvrkCuQgrye"

## Meetings

### 2024-07-29 - Mozark architecture diagram overview

- MongoDB Atlas
- Cognito
- Cron lambdas and Scheduled ECS tasks - Missing
- Product
    - Automation
    - Interact
- FCC documentation
    - Add all the configurations
    - FCC diagrams - Sumit?
- Sumit - pre signed url api gateway
- Long running vs high concurrency - Move hotstarperf-v1-GetScheduleFunction to ECS

### 2024-07-02 - Meeting - Cost Optimization

**Major TODOs**

- Single tracker  
- Uniformity across infrastructure  
- Proactive costs monitoring - daily basis

- Involve - Sumit, and Lalitanad, Rajat

- What are the requirements, expectations?
    - Architecture overhaul
        - Cost secondary factor if used right
    - Architecture diagram - Yes, with Agam
- B2B vs B2C - B2B
- How many accounts? - AWS (6-7, max in 2 accounts (12K, 5-6K)) and GCP (migrating to GCP < 10%)
- Cost Alerts todos?
- Priorities?
- Accesses?
    - Drop email to Nishi for microsoft account, agam - nishi@mozark.ai
- Approvals?
- Communications - Teams
- Support?
- Architecture?
    - Application not too heavy
    - REST architecture - CRUD
    - MongoDB
    - Streams - mobile phone, controllers, batching - lambda functions?
    - KVS - webrtc, data streams (to better architect)
    - Analytics solution - Quicksight dashboard - iframe
    - 70-90% above
    - invalid costs also more
        - ECS, lambda, guard-duty
    - Video length
- Cloud - AWS / GCP
- K8s - No, fargate, ECS
- Databases - MongoDB, RDS
- Tech stack
    - Backend - python, nodejs
    - frontend - cloudfront, reactjs
    - Middleware - kinesis data streams
- Product?
- POC?

### 2024-05-04, 2024-05-08 - Meeting

- Selenium Grid - POC using docker-compose done
- EKS / GKE
- Monitoring
- Logging
- Alerting
- Patches
- CICD
- Listing in Marketplaces (gcloud and AWS)
- Cloudformation / Terraform
- AMI - ECR
- Kubernetes Operator
- Benchmarking
- OS Versions - Ubuntu / Amazon Linux / Windows
- Testing
    - ⁠Stress / Load testing / Performance testing
- End to end setup (automated / manual)
- Dashboards
- Internally available or Externally available

#### Estimate

- Rajat - 6-7 months with 2 resources approx (since scope can be increased)
- 3-4 months for AWS with 2 resources approx
- Marketplace listing - 15-20 days (for testing and review from AWS side)

### 2024-05-01 - Selenium Grid - Agamjot & Rajat

- Kubernetes - GKE and EKS
- Custom monitoring solution
- Marketplace - AMI cannot be done? Use HELM
- Monitoring & Logging
- Share Selenium gdoc

### Questions for Mozark (2024-02-01)

- Priorities
    - Monitoring
        - Availability
    - Controller Management
        - Security (SIEM tool)
    - Maintenance
- What is DHMS (full form??)
    - **Device hosting and management services**
- How many devices are there bifurcated by OS? Which version of OS we are currently using?
    - **100 controllers (mac mini + linux) - 500-600 endpoints (mobile devices - android + tvs + cameras - all 500-600 monitoring**
    - **Metrics**
        - Major metric - availability - Disconnections
        - controllers - 16GB
    - Current CPU and Memory utilization in percentage (for controllers)
    - What's the configuration of these devices? How much fee RAM or CPU is available for running exporters and other telemetry processes?
- How much metrics are being generated in mbps or gbps?
    - **CPU, disk, memory** - 3rd party tools - site 24x7
- How much logs are being generated in mbps or gbps?
    - power or internet is gone, (maybe required, don't use extensively right now)
- **Controller stack**
    - Availability of devices (to the backend - custom backend)
    - adb disconnection
    - All devices are connected via controllers via adb (per controller 10-12 devices), idb for ios
    - Cameras (ls -usb) - listing, (camera disconnection alert too)
- API request per second?
    - **30 mins (initially 15 mins) - api is 5 mins**
    - **Active alerts (real time) (must have)**
    - **Escalation matrix (maybe)**
    - **Jira integration (maybe)**
- End device monitoring for only controllers or all the devices i.e. end user devices, accessories and passive components too?
    - If yes, then are exporters for each devices available?
        - **Scripts / Commands will be shared**
    - Will we be monitoring network devices too for 5G Mark and Mag-M products
        - **Don't require as of now**
- How we are connecting to edge controllers currently, VPN server?
    - **Team Viewer - licensed**
        - Audit logs
    - **SSH for some BFSI clients**
        - What tool is used for this??
- How OTA updates are being handled currently?
    - Manual
    - Generally don't update the OS
    - Control all OS versions
- Are devices accessible in a single or multiple locations or difficult to access locations?
    - 30+ locations globally
    - each location have 10-12 devices
    - DC (India) - hosts many devices
- Any MDM tool currently being used?
    - **No - nothing works for mac or linux as explored**
    - Controller management
        - IAM - Read only, access directories, admin
        - Updates / Patches
        - OS Versions
        - Security policies
        - Locks
    - Tried zoho
- Environments
    - Staging, Integration, Pre-prod (dedicated devices available)
    - Amazon - Staging and production
- How many endpoints these devices are connecting too?
- How many services are running in edge devices which needs to be monitored?
    - Any long running services, that runs all the time?
    - What type of services are these?
    - **9 - 10 services** - making controller available (Python - Celery)
- How frequently are the updates being pushed?
- What is KVS (**Kinesis Video Data Service**)??
- Are we using virtual devices like bluestacks or VMWare too or pure hardware devices?
- Backend
    - Is it microservices or monolith
- On call support (continuous or one-time setup)
    - Can be both (team to monitor for long term fixes)
- Account / Project questions
    - How big is the project?
    - Current team size?
        - Daily operations - 4 People (monitoring) (24x7) - 3 shifts
        - L1 + L2 - 2-3 People
        - Product + dev team - 30
    - Long term or capped project?
- **Network architecture**
- Timeline
    - ASAP

### People

- Monitoring + Networking = 2.5 people for 3 months
- Controller Manager - MDM - POC - Jumpcloud

### Tools

- One time setup
    - Open-vpn server, open client in all 100 controllers, architecture, network
    - Monitoring
        - POC - **telegraf** vs prom exporter
        - InfluxDB / prometheus
        - Grafana - dashboards
        - Alertmanager - alerting
    - Logging
        - telegraf + Loki
        - ~~ELK /  EFK~~
    - Sentry
    - Firewall
- Controller management
    - POC - MDM?
- Dependency
    - All process monitoring commands
- Maintenance
    - Linux (debugging, troubleshooting)
    - Mac
    - Team Viewer
    - SSH

### Pending questions

- What tool is used for ssh to controllers??
    - IPs are being changed

## Scope

For DHMS, following components are used.

1. End User Devices - Mobiles (android / iOS), streaming devices, smart TVs, set up boxes etc.
2. Controller - Mac mini, Linux NUC machines which are connected to our cloud.
3. Accessories - Cameras, USB hubs, Wi-Fi routers, switches etc.
4. Passive components - Hosting kits (inhouse built), UPS, mobile trays, racks etc.

The IT partner would be responsible for and is not limited to:

### 1. End User Devices and Controllers Management 

This would include

1. Ensuring 99% availability of the existing infra
2. 24/7 Monitoring controllers and devices connectivity and resolving the physical/ infra level disconnections, if any
3. Weekly maintenance of the deployed hardware for high performance as per plan
4. Endpoint protection and incident response: Hardening of the controllers and devices as per standard guidelines, MDM and XDR solutions
5. Regulatory compliance & IT hygiene - SIEM solution
6. Introduce and implement process and policies for on-boarding of existing and new controllers, devices, etc. using MDM or equivalent management tools for users’ identity, access and control
7. Introduce new tools for more efficient pro-active monitoring of endpoints
8. Enrolment of new devices and controllers in the pool as per policy for identity/ access management
9. OS upgrades as and when necessary

### 2. Controller Service Management

1. Monitor docker, celery, KVS, other services running on the controllers
2. Resolve service related disconnects to ensure 99% uptime
3. Monitoring scheduled test run and ensure there are no failures due to service break in the corresponding controllers
4. Post maintenance restart the relevant services to bring up the environment within the maintenance window
5. Coordinate between cross functional teams for L3 issues
6. Introduce process and system for better monitoring at different levels to minimize failures and ensue higher services uptime

### 3. Network Architecture

Mozark device farms have 2 different network topologies, open internet Vs Firewall

1. Foster a more secure and resilient IT architecture
2. IT Network security and management
3. Setup peer to peer VPN tunnel between device farm (controllers) and AWS
4. Support in case of new network architecture requirements for different network or VPN setups

## Architecture

### High Level Architecture

![high level architecture](media/Pasted%20image%2020240711001406.png)

### Device Interact 1.0(Detailed)

![image](media/Pasted%20image%2020240711001433.png)

### Device Interact 2.0(Detailed)

![image](media/Pasted%20image%2020240711001448.png)

### Synthetic Monitoring(Detailed)

![image](media/Pasted%20image%2020240711001501.png)

### Architecture Diagram

![image](media/Pasted%20image%2020240711001524.png)

Here’s a brief explanation of the points in architecture diagram

1. Frontend url registered in godaddy points to Cloudfront.
2. Frontend is hosted as a reactjs app in S3 bucket named {tenantName}-app-testing.mozark.
3. So before accessing the S3 bucket named {tenantName}-app-testing.mozark for user authentication Cognito Identity Pool is used.
4. After User authentication S3 bucket {tenantName}-app-testing.mozark connects to backend Api Gateway through api {tenantName}-api.mozark.ai.
5. Api Gateway further invoke some Lambda Fuctions and a kinesis stream after invoking batch event lambda.
6. Api /hub invoke lambda function hub which stores cache data in redis.
7. Event and KPI further goes to backend S3 named {tenantName}-app-testing which further invokes Lamda Function and SQS respectively , SQS will invoke the Lambda Funtion’s.
8. After invoking lambda's the transactional data is stored in MongoDB.
9. Other than the above workflow there’s also there’s Migrations tasks stored in ECS which tranfers data from MongoDB to RDS.
10. Quicksight Dashboard is then used for better Visualization of RDS data.
