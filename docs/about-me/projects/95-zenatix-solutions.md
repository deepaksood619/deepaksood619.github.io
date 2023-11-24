# Zenatix Solutions

### Android Development (Wattman Lite)

- Launch Screen and Splash Activity (Launch screen for adding a logo at cold start of an application)
- Item touch helper for touch listeners in card view (like swipe to remove and drag up and down)
- WiFi Provisioning using SmartConfig (Texas Instrument) provisioning system
- **Android Testing Support Library -** Writing Test cases (Android JUnitRunner4 and Function UI Testing using Espresso and UIAutomater)
- MQTT pub-sub for sending configuration to WattMan Lite devices
- Enterprise configuration of multiple devices together

### Backend Development

#### Created new issues in issues framework

1. ControllerHighDiskUsage(SensorIssue) - Stream (DiskUsage)
2. ControllerHighRebootCount(SensorIssue) - Stream (RPIReboot)
3. ControllerHighDriverRestartCount(SensorIssue) - Stream (DriverRestart)
4. HighBufferedDataUpload(SensorIssue) - Stream (ValuesReceived)
5. AdvanceESPHighReboot(AdvanceIssue) - Stream (RSSI, Reboot)
6. AdvanceESPPoorSignalStrength(AdvanceIssue) - Stream (RSSI, Reboots, Temperature, DriverOperationalSeconds)
7. Count200TemperatureValueWiredTempSensor(SensorIssue)
8. Count200TemperatureValueESP(Count200TemperatureValueWiredTempSensor)
9. Update UnexpectedValuesWiredTempSensors for not > 85

#### Created test cases for the issues

1. Created and updated 51 issues in the issue framework

#### Integrated ticketing system (ZOHO) to issues management system

1. Tickets can be created from issue logs directly
2. Duplicate tickets can be handled
3. Miscellaneous issues can be added
4. Tickets are updated with status from ZOHO (Closed, Open, Deleted)

#### Others

- Implemented REST APIs using GraphQL when moving towards microservices architecture
- Created APIs for a new project (Dashboard) with admin validations.
- New api service for collecting weather data

### Frontend development (HTML + CSS + Bootstrap + JS + jQuery + Django Template Language + Django + Python + Docker)

- Created dynamic forms using jquery and javascript
- Uploading forms, downloading forms
- Grid System
- DOM Manipulation
- bepemis.zenatix.com
- Site used by government to run simulation of buildings and then validate the building for saving energy.
- Dashboard for all states to see there energy consumption and savings
- Added email notification system
- Form Validations and checks

### 5. ECBC Work

#### Stakeholders in the project

1. BO (Building Owner)
2. TPA (Third Party Accessor)
3. ULB (Urban Local Body)
4. SDA (State Development Authority)
5. BEE (Bureau of Energy Efficiency)

#### Proposed Model

- BEP (Building Energy Passport)

	1. Design Phase
	2. Construction Phase
	3. Operations or Monitoring Phase

#### EMIS (Energy Monitoring)

##### User Flow

- BO will signup
- Mail sent to BO with confirmation mail (for verifying email address)
- Bo will sign in after verification
- Complete all the forms and upload all the documents
- Submit to TPA
- TPA can raise issue and BO can reply to it
- TPA approves the project and generates the certificate
- BO submits to ULB
- ULB approves the project and generate the certificate
- Bo moves to construction phase and same process is repeated

##### Monitoring

- Data is pulled from example sMAP archive and plotted as graph

Demo, presentation and meetings with Director General (Shri Abhay Bakre) and Director (Shri Saurabh Diddi).

### R&D

- Implemented GraphQL from scratch for a POC and then taken it to production.
	- Moved to micorservices architecture and for communication used GraphQL over HTTP
	- Framework used
		- Graphene-Python
		- Graphene-Django
		- django-filter
- Implementation of authentication using JWT (JSON Web Tokens) for stateless authentication
- Volttron POC
- Google Cloud - IoT Core, Pub/Sub, Dataflow, BigQuery, DataStudio, Datalab
- Github Actions

### DevOps

- Moved from VMs to Kubernetes
	- Kubernetes cluster deployment, dockerizing applications
- Monitoring and alerting
	- Prometheus, Alertmanager, Grafana
	- Telegraf, Influx, Chronograf, Kapacitor (TICK stack)
- Centralized logging in distributed systems - ELK (elastic search operator)
	- Added Elastalert for Alerting on Elasticsearch metrics (created alerts too)
	- LogTrail plugin for elasticsearch
- API gateway management Kong installed and configured in kubernetes (kong dbless)
- Jenkins Pipeline (build, test, deploy)
- Setting up ingress gateway for all north south traffic
- Nginx setup as web server
- Automation using Ansible

### Data Engineering

- Kafka production deployment
	- Multiple kafka consumers
- Emqtt/VerneMQ production deployment
- Data pipeline created using paho, emqtt, kafka-connect source, kafka, kafka consumer, smap
- Dashboards - Kafka-manager, topics-ui, schema-registry-ui, emqx dashboard, confluent control-center
- Deployed airflow, moved all cronjobs to airflow (Airflow Kubernetes Executor / Celery workers)

### Code Maintainance

- Moved from Django 1.9 to Django 1.11 with other supporting libraries and tools
- Setup standards for following good coding practices
- Code cleanups - removed lot of legacy code
- Bug Fixes
	- example
	- Issues
	- Dashboard
- Moved from Python 2.7 to Python 3.7

### Mangement

- Documentation reviews
- New joinees onboarding and training
- Hiring and taking interviews (Setting up ThinkExam platform)
- Engagement with third party vendors (OpsTree), reviewing their work and guiding them througout.
- Code Review

### Core Infrastructure Team/Platform Engineering

### Database Administrator

- Influxdb
- Redis
- Postgres
- Cassandra
- Druid
- Kafka
- VoltDB/LevelDB (VerneMQ)
- MongoDB
