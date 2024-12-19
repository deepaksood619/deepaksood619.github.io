# CLI Commands

## AWS cli (brew install awscli)

```bash
pip install awscli

Graphical installer - https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html

aws configure list-profiles
aws configure list

aws configure
region - ap-south-1
output - json

# adding new profile
aws configure --profile zen
aws ec2 describe-instances --profile {{profile_name}}
# query to filter based on Hypervisor
--query "Reservations[].Instances[?Hypervisor=='xen' && State.Name=='running'].[InstanceId,InstanceType,Placement.AvailabilityZone]"

aws s3 ls --profile zen

# set default profile
export AWS_DEFAULT_PROFILE=personal

# get current user
aws sts get-caller-identity

aws sts get-access-key-info --access-key-id AKIAU2R6AAK3KKWSWRFU

aws organizations describe-account --account-id 331916247734

aws s3 ls s3://migration-data/year=2020/month=05/day=09/1334d4026463437b

aws s3 mb s3://bigbet90 --region us-west-2

aws s3 presign s3://bigbet90/index.html --expires-in 90 # in seconds max 36 hours

aws s3 cp aws.jpg s3://bigbet90 --region us-west-2 --endpoint-url https://bigbet90.s3-accelerate.amazonaws.com
```

## Download / Upload folder / bucket from s3

```bash
aws s3 sync

aws s3 sync . s3://bigbet90

aws s3 sync s3://source-bucket/source-path ./local_folder

aws s3 sync test s3://storage-dev/test

aws s3api get-object --bucket DOC-EXAMPLE-BUCKET1--key dir/my_images.tar.bz2 my_images.tar.bz2

## download file
AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX aws s3 cp s3://2022-03-07-12-44-11-7946.jpg 2022-03-07-12-44-11-7946.jpg

# Upload a file to s3
AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX aws s3 cp s3://<folder_name>/sms_data_oct_20_to_feb_21_new.csv sms_data_oct_20_to_feb_21_new.csv

aws iam delete-policy --policy-arn arn:aws:iam::331916247734:policy/ssh_update_policy

# personal sync
aws s3 sync . s3://deep-personal-bucket/photos --storage-class DEEP_ARCHIVE --cli-read-timeout 0 --cli-connect-timeout 0

aws s3 cp abc.zip s3://deep-personal-bucket/photos/abc.zip --storage-class DEEP_ARCHIVE
```

## RDS + Route53

```bash
aws rds create-db-instance --db-instance-identifier <db_name> --db-cluster-identifier db_name --engine aurora-mysql --db-instance-class db.r5.2xlarge --availability-zone ap-south-1b

aws rds delete-db-instance --db-instance-identifier <db_name>

aws rds modify-db-parameter-group --db-parameter-group-name [aurora-data-analytics-group](https://ap-south-1.console.aws.amazon.com/rds/home?region=ap-south-1#parameter-groups-detail:ids=aurora-data-analytics-group;type=DbParameterGroup;editing=false) --parameters "ParameterName='max_execution_time',ParameterValue=3200000,ApplyMethod=immediate"

aws rds modify-db-parameter-group --db-parameter-group-name aurora-prod-db-write-group --parameters "ParameterName='max_execution_time',ParameterValue=1500000,ApplyMethod=immediate"

aws rds create-db-instance-read-replica \
--source-db-instance-identifier django-master \
--db-instance-identifier django-daily \
--availability-zone ap-south-1a \
--db-instance-class db.m5.8xlarge \
--no-multi-az \
--storage-type gp3 \
--enable-performance-insights \
--performance-insights-kms-key-id 8044ba2e-b763-4649-b41f-ed4867e76f67 \ --performance-insights-retention-period 7 \
--enable-cloudwatch-logs-exports slowquery \
--no-deletion-protection \
--allocated-storage 450 \
--no-auto-minor-version-upgrade \
--region ap-south-1

aws rds delete-db-instance \ --db-instance-identifier django-daily \ --skip-final-snapshot \ --delete-automated-backups

aws route53 change-resource-record-sets \ --hosted-zone-id ABCD \ --change-batch file://prod_rds_create.json
```

```json
{
   "Changes": [
       {
       "Action": "CREATE",
        "ResourceRecordSet": {
       "Name": "a.example.com",
       "Type": "CNAME",
       "SetIdentifier": "daily-db",
       "Weight": 64,
       "TTL": 300,
       "ResourceRecords": [{  "Value": "daily-db.abc.ap-south-1.rds.amazonaws.com"} ]
        }
       },
    {
       "Action": "CREATE",
       "ResourceRecordSet": {
           "Name": "b.example.com",
           "Type": "CNAME",
           "SetIdentifier": "daily-db",
           "Weight": 64,
           "TTL": 300,
           "ResourceRecords": [{  "Value":"daily-db.abc.ap-south-1.rds.amazonaws.com"} ]
    } }
]
}
```

## Cleanups

```bash
aws ec2 describe-volumes --filter Name=status,Values=available
```

## Tools

### awslog

awslogsis a simple command line tool for querying groups, streams and events from [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) logs.

https://github.com/jorgebastida/awslogs

- Set credentials at your env vars;
- Logs in production: `awslogs get production-zf-backend ALL --aws-region sa-east-1`;
- Logs in staging: `awslogs get staging-zf-backend ALL --aws-region us-east-1`.
