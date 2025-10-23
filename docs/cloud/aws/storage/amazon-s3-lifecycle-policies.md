# Object Lifecycle Management

To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects.

There are two types of actions:

- **Transition actions -** Define when objects transition to another [storage class](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html). For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them.
- **Expiration actions -** Define when objects expire. Amazon S3 deletes expired objects on your behalf.

Amazon S3 runs lifecycle rules once every day. After the first time Amazon S3 runs the rules, all objects eligible for expiration are marked for deletion. You're no longer charged for objects that are marked for deletion. It can take a few days for the rules to run until the bucket is empty. This is because expiring object versions and cleaning up delete markers are asynchronous steps.

https://aws.amazon.com/premiumsupport/knowledge-center/s3-empty-bucket-lifecycle-rule

https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html

https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html

[Configuring a bucket lifecycle configuration to delete incomplete multipart uploads - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html)

[removing expired delete markers, how does it work? | AWS re:Post](https://repost.aws/questions/QUK1eCj2OjT3mSOJbendDYWw/removing-expired-delete-markers-how-does-it-work)

![S3 Lifecycle policies](../../../media/Screenshot%202025-09-27%20at%2011.28.51%20PM.jpg)

## Minimum days for transition from S3 Standard or S3 Standard-IA to S3 Standard-lA or S3 One Zone-IA

Before you transition objects from the S3 Standard or S3 Standard-IA storage classes to S3 Standard-IA or S3 One Zone-lA, you must store them **at least 30 days in the S3 Standard storage class**. For example, you cannot create a Lifecycle rule to transition objects to the S3 Standard-lA storage class one day after you create them. Amazon S3 doesn't transition objects within the first 30 days because newer objects are often accessed more frequently or deleted sooner than is suitable for S3 Standard-IA or S3 One Zone-IA storage.

Similarly, if you are transitioning noncurrent objects (in versioned buckets), you can transition only objects that are at least 30 days noncurrent to S3 Standard-lA or S3 One Zone-IA storage.

## Deleting huge amount of objects

To delete an AWS S3 bucket with 500TB of data, the fastest and most cost-effective solution would be to use the S3 Lifecycle configuration.

[Deleting a S3 bucket of size 500 TB | AWS re:Post](https://repost.aws/questions/QU5FKQm2XFSaCfNyYKHfzbRw/deleting-a-s3-bucket-of-size-500-tb)