# AWS Backup

AWS Backup is a fully-managed service that makes it easy to centralize and automate data protection across AWS services, in the cloud, and on premises. Using this service, you can configure backup policies and monitor activity for your AWS resources in one place. It allows you to automate and consolidate backup tasks that were previously performed service-by-service, and removes the need to create custom scripts and manual processes. With a few clicks in the AWS Backup console, you can automate your data protection policies and schedules.

[What is AWS Backup? - AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)

[RDS Backup/Restore with AWS Backup Service - YouTube](https://www.youtube.com/watch?v=EwnajIFNCf8)

[Backup As A Service - Centralized Backups - AWS Backup - AWS](https://aws.amazon.com/backup/)

[What is AWS Backup? - AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)

[RDS Database Backup and Recovery with AWS Backup. Check it out. - YouTube](https://www.youtube.com/watch?v=qX7g8v5Zh2Y)

[Using AWS Backup to manage automated backups - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AutomatedBackups.AWSBackup.html)

### RDS Backup

[AWS RDS Backups: What’s the True Cost?](https://www.percona.com/blog/aws-rds-backups-whats-the-true-cost/)

- 7 daily full backups
- 4 weekly backups
- 12 monthly backups
- For above configuration, min total cost is **$10,482 USD annually** for 400 GB db size

### Pricing

| Resource Type                                 | Warm Storage        | Cold Storage ^^         |
| --------------------------------------------- | ------------------- | ----------------------- |
| **Amazon EFS File System Backup†**            | $0.055 per GB-Month | $0.011 per GB-Month     |
| **Amazon EBS Volume Snapshot**                | $0.05 per GB-Month  | $0.0125 per GB-Month †† |
| **Amazon RDS Database Snapshot**              | $0.095 per GB-Month | n/a*                    |
| **Amazon Aurora Cluster Snapshot**            | $0.023 per GB-Month | n/a*                    |
| **Amazon DynamoDB Table Backup**              | $0.114 per GB-Month | $0.0342 per GB-Month**  |
| **AWS Storage Gateway Volume Backup**         | $0.05 per GB-Month  | n/a*                    |
| **Amazon FSx for Windows File Server Backup** | $0.05 per GB-Month  | n/a*                    |
| **Amazon FSx for Lustre Backup**              | $0.05 per GB-Month  | n/a*                    |
| **Amazon Fsx for NetApp ONTAP Backup**        | $0.05 per GB-Month  | n/a*                    |
| **Amazon FSx for OpenZFS Backup**             | $0.05 per GB-Month  | n/a*                    |
| **Amazon DocumentDB Cluster Snapshot**        | $0.023 per GB-Month | n/a*                    |
| **Amazon Neptune Cluster Snapshot**           | $0.023 per GB-Month | n/a*                    |
| **Amazon S3 Backup****† *****                 | $0.055 per GB-Month | n/a*                    |
[AWS Backup Pricing | Centralized Cloud Backup | Amazon Web Services](https://aws.amazon.com/backup/pricing/)
