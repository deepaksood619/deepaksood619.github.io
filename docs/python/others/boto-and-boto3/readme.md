# boto & boto3

AWS SDK for python

## Security

- There should never be a need to put access credentials in your code (it is bad for security). If the code is running on an Amazon EC2 instance, simply assign an IAM Role to the instance. If the code is running on your own computer, use the[AWS Command-Line Interface (CLI)](http://aws.amazon.com/cli/) aws configurecommand to store the credentials in a local configuration file.

## Catching Exceptions

```python
from botocore.exceptions import ClientError

try:
    iam = boto3.client('iam')
    user = iam.create_user(UserName='fred')
    print("Created user: %s" % user)
except ClientError as e:
    if e.response['Error']['Code'] == 'EntityAlreadyExists':
        print("User already exists")
    else:
        print("Unexpected error: %s" % e)

# ['Error']['Code'] e.g. 'EntityAlreadyExists' or 'ValidationError'
# ['ResponseMetadata']['HTTPStatusCode'] e.g. 400
# ['ResponseMetadata']['RequestId'] e.g. 'd2b06652-88d7-11e5-99d0-812348583a35'
# ['Error']['Message'] e.g. "An error occurred (EntityAlreadyExists) ..."
# ['Error']['Type'] e.g. 'Sender'
```

<https://stackoverflow.com/questions/33068055/how-to-handle-errors-with-boto3>

## Client - RDS

```python
client = boto3.client('rds')

response = client.delete_db_instance(
DBInstanceIdentifier=db_cluster_identifier,
SkipFinalSnapshot=True,
)

response = client.delete_db_cluster(
DBClusterIdentifier=db_cluster_identifier,
SkipFinalSnapshot=True,
)

response = client.restore_db_cluster_to_point_in_time(
DBClusterIdentifier=db_cluster_identifier,
RestoreType='copy-on-write',
SourceDBClusterIdentifier=source_db_cluster_identifier,
UseLatestRestorableTime=True,
VpcSecurityGroupIds=[
'sg-d1d6adbe',
'sg-0f708a9e0b68bc732',
],
DBClusterParameterGroupName='aurora-analytics-cluster-group',
)

response = client.create_db_instance(
DBInstanceIdentifier=db_cluster_identifier,
DBInstanceClass='db.r5.large',
Engine='aurora-mysql',
AvailabilityZone='ap-south-1a',
DBParameterGroupName='aurora-data-analytics-group',
AutoMinorVersionUpgrade=True,
PubliclyAccessible=True,
DBClusterIdentifier=db_cluster_identifier,
)

response = client.add_role_to_db_cluster(
DBClusterIdentifier=db_cluster_identifier,
RoleArn='arn:aws:iam::331916247734:role/rds_s3_migration_role',
)

response = client.modify_db_parameter_group(
    DBParameterGroupName='aurora-prod-db-write-group',
    Parameters=[
        {
            'ParameterName': 'max_execution_time',
            'ParameterValue': '1500000',
            'Description': 'string',
            'Source': 'string',
            'ApplyType': 'string',
            'DataType': 'string',
            'AllowedValues': 'string',
            'IsModifiable': True|False,
            'MinimumEngineVersion': 'string',
            'ApplyMethod': 'immediate'|'pending-reboot',
            'SupportedEngineModes': [
                'string',
            ]
        },
    ]
)
```

## Client S3

```python
import boto3
s3_client = boto3.client('s3', aws_access_key_id = 'XXX', aws_secret_access_key = 'XXX')

key = f"test/{datetime.now().strftime('%Y%m%d')}/{payload['cust_id']}-{datetime.now().strftime('%Y%m%d%H%M%S%f')}.json"

s3_client.put_object(Body=json.dumps(payload), Bucket='stashfin-migration-data', Key=key)
```

The **upload_file** method is handled by the S3 Transfer Manager, this means that it will automatically handle multipart uploads behind the scenes for you, if necessary.

The put_object method maps directly to the low-level S3 API request. It does not handle multipart uploads for you. It will attempt to send the entire body in one request.

```python
def uploadFileTos3Bucket(self,fileName):
    response ={}
    try:
        client = boto3.client('s3',aws_access_key_id=AWS_ACC_KEY,
                                aws_secret_access_key=AWS_SEC_ACC_KEY,
                                region_name="ap-south-1")

        date = datetime.now().strftime("%Y-%m-%d")

        response = client.upload_file(fileName, 'stasfin-pinpoint-segmant-bucket', date+'/'+fileName)
    except ClientError as e:
        logging.error(e.response['Error']['Message'])
        return "error"
    else:
        logging.info(f'response {response}')
    return response

# fetch json from s3 using boto3 client
result = client.get_object(Bucket=BUCKET, Key=FILE_TO_READ)
text = result["Body"].read().decode()
print(text['Details']) # Use your desired JSON Key for your value

# fetch json from s3 using boto3 resource
s3 = boto3.resource('s3')
content_object = s3.Object('test', 'sample_json.txt')
file_content = content_object.get()['Body'].read().decode('utf-8')
json_content = json.loads(file_content)
print(json_content['Details'])

# download file
import boto3
s3 = boto3.client('s3')
s3.download_file('BUCKET_NAME', 'OBJECT_NAME', 'FILE_NAME')

download_file(Bucket, Key, Filename, ExtraArgs=None, Callback=None, Config=None)

# Download an S3 object to a file.
s3 = boto3.client('s3')
with open('FILE_NAME', 'wb') as f:
s3.download_fileobj('BUCKET_NAME', 'OBJECT_NAME', f)

download_fileobj(Bucket, Key, Fileobj, ExtraArgs=None, Callback=None, Config=None)
    # Download an object from S3 to a file-like object. The file-like object must be in binary mode. This is a managed transfer which will perform a multipart download in multiple threads if necessary.

https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-download-file.html

# create signed url
url = s3_client.generate_presigned_url(
        ClientMethod="get_object",
        Params={"Bucket": bucket, "Key": path},
        ExpiresIn=settings.REPORT_TTL,
    )
```

## Boto3 Error handling

<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/error-handling.html>

## AWS

Here's some more detailed information on what[Client](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/clients.html), [Resource](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/resources.html), and[Session](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/session.html) are all about.

### Client

- low-level AWS service access
- generated from AWSservicedescription
- exposes botocore client to the developer
- typically maps 1:1 with the AWS service API
- all AWS service operations are supported by clients
- snake-cased method names (e.g. ListBuckets API => list_buckets method)

Here's an example of client-level access to an S3 bucket's objects (at most 1000**):

```python
import boto3

client = boto3.client('s3')
response = client.list_objects_v2(Bucket='mybucket')

for content in response['Contents']:
    obj_dict = client.get_object(Bucket='mybucket', Key=content['Key'])
    print(content['Key'], obj_dict['LastModified'])
```

** you would have to use a [paginator](http://boto3.readthedocs.io/en/latest/guide/paginators.html), or implement your own loop, calling list_objects() repeatedly with a continuation marker if there were more than 1000.

## Resource

- higher-level, object-oriented API
- generated fromresourcedescription
- uses identifiers and attributes
- has actions (operations on resources)
- exposes subresources and collections of AWS resources
- does not provide 100% API coverage of AWS services

Here's the equivalent example using resource-level access to an S3 bucket's objects (all):

```python
import boto3

s3 = boto3.resource('s3')
bucket = s3.Bucket('mybucket')

for obj in bucket.objects.all():
    print(obj.key, obj.last_modified)
```

Note that in this case you do not have to make a second API call to get the objects; they're available to you as a collection on the bucket. These collections of subresources are lazily-loaded.

You can see that theResourceversion of the code is much simpler, more compact, and has more capability (it does pagination for you). TheClientversion of the code would actually be more complicated than shown above if you wanted to include pagination.

## Session

- stores configuration information (primarily credentials and selected region)
- allows you to create service clients and resources
- boto3 creates a default session for you when needed

<https://stackoverflow.com/questions/42809096/difference-in-boto3-between-resource-client-and-session>

## Retries

Your AWS client might see calls to AWS services fail due to unexpected issues on the client side. Or calls might fail due to rate limiting from the AWS service you're attempting to call. In either case, these kinds of failures often don't require special handling and the call should be made again, often after a brief waiting period. Boto3 provides many features to assist in retrying client calls to AWS services when these kinds of errors or exceptions are experienced.

<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/retries.html>

<https://docs.aws.amazon.com/general/latest/gr/api-retries.html>

## References

<https://github.com/boto/boto3>

<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/migrations3.html#creating-the-connection>

<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html>

Example for sending email - <https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-using-sdk-python.html>

<https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/rds.html>

<https://www.youtube.com/watch?v=Cb2czfCV4Dg>

<https://medium.com/tysonworks/concurrency-with-boto3-41cfa300aab4>
