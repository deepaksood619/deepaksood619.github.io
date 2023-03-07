# CLI Commands

## AWS cli (brew install awscli)

```bash
pip install awscli

Graphical installer - <https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html>

# Linux
curl "<https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip>" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

<https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html>

aws configure list-profiles
aws configure list

aws configure
region - ap-south-1
output - json

# adding new profile
aws configure --profile zen
aws ec2 describe-instances --profile {{profile_name}}
aws s3 ls --profile zen

# get current user
aws sts get-caller-identity

aws sts get-access-key-info --access-key-id AKIAU2R6AAK3KKWSWRFU

aws organizations describe-account --account-id 331916247734

aws s3 ls s3://migration-data/year=2020/month=05/day=09/1334d4026463437b

aws s3 mb s3://bigbet90 --region us-west-2

aws s3 presign s3://bigbet90/index.html --expires-in 90 # in seconds max 36 hours

aws s3 cp aws.jpg s3://bigbet90 --region us-west-2 --endpoint-url <https://bigbet90.s3-accelerate.amazonaws.com>
```

## Download folder / bucket from s3

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

aws rds create-db-instance --db-instance-identifier <db_name> --db-cluster-identifier db_name --engine aurora-mysql --db-instance-class db.r5.2xlarge --availability-zone ap-south-1b

aws rds delete-db-instance --db-instance-identifier <db_name>

aws rds modify-db-parameter-group --db-parameter-group-name [aurora-data-analytics-group](https://ap-south-1.console.aws.amazon.com/rds/home?region=ap-south-1#parameter-groups-detail:ids=aurora-data-analytics-group;type=DbParameterGroup;editing=false) --parameters "ParameterName='max_execution_time',ParameterValue=3200000,ApplyMethod=immediate"

aws rds modify-db-parameter-group --db-parameter-group-name aurora-prod-db-write-group --parameters "ParameterName='max_execution_time',ParameterValue=1500000,ApplyMethod=immediate"
```

## Tools

### awslog

awslogsis a simple command line tool for querying groups, streams and events from [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) logs.

<https://github.com/jorgebastida/awslogs>

- Set credentials at your env vars;
- Logs in production: `awslogs get production-zf-backend ALL --aws-region sa-east-1`;
- Logs in staging: `awslogs get staging-zf-backend ALL --aws-region us-east-1`.
