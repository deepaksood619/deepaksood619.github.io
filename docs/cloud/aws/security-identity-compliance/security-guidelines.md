# Security Guidelines

## Access Management

| S.No. | Checklist                                                    | Reason                                                                                                      | Priorities               | Comments                                                                                                                                                                                 |
| ----- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Root should not be used at all.                              | Obivisouly using root account always increase the risk of security breach                                   | Must have                |                                                                                                                                                                                          |
| 2     | Enable MFA for all the accounts that have Web Console access | For accessing Web UI. Two factor authentication should be enabled.                                          | Must have                |                                                                                                                                                                                          |
| 3     | Access key should not be used                                | Use IAM role. In case if access key is required, make sure that it's usable from a specified source ip only | Must have with exception | 1. legacy application might not work with IAM role, if iam user is created, should be created for a source ip specifically.  2. IAM users should use the IAM role by assuming it |
| 4     | IAM roles should be very granular                            |                                                                                                             | Good to have             |                                                                                                                                                                                          |
| 5     | Integrate SSO with AWS for access management                 |                                                                                                             | Must have with exception | could be deprioritized but needs to be done if client uses any OIDC                                                                                                                      |

## Networking

| S.No. | Checklist                                                            | Reason                                                                                                                                                                    | Priorities               | Comments                    |
| ----- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------- |
| 1     | Beyond 80,443 none port should be opened for world 0.0.0.0           |                                                                                                                                                                           | Must have                |                             |
|       | Beyond 80,443 port any port access should be given to whitelisted IP |                                                                                                                                                                           | Must have                |                             |
| 2     | Within AWS all SG access should only be given via a SG and not by IP |                                                                                                                                                                           | Must have with exception |                             |
| 3     | use CDN on top of ALB and allow traffic from CDN only                | Even if caching is not require, it's good practice to CDN recieving all the traffic as it's surface area much larger then ALB                                             | Must have                |                             |
| 4     | segerate networking subnets according to the componets               | web server, application server and database server should have their own subnets so that proper isolation is there. Avoid having all the components in one type of subnet | Must have                |                             |
| 5     | Proper NACL rules allowing what is required only                     | Subnets should have it's own NACL to allow traffic only which is required                                                                                                 | Must have                |                             |
| 6     | use waf wherever possblle                                            | we use use waf and allow traffic to our infra which is legit                                                                                                              | Good to have             | cost could be a factor here |

## Object Storage

| S.No. | Checklist                                                                                                                | Reason                                                                                                                                                       | Priorities               | Comments                                                             |
| ----- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------------------------------------------------------------------- |
| 1     | Bucket should never be public for access                                                                                 | In case a bucket need be made public do it via CDN                                                                                                           | Must have                | If anything needs to be exposed publically it should be done via CDN |
|       | Bucket should never be public for writing                                                                                | Whitelisting should be done                                                                                                                                  | Must have                |                                                                      |
| 2     | Versioning should be enabled for buckets which holds data which customer can't afford to loose as per compliance process | In case of deletion it can be recovered                                                                                                                      | Must have                |                                                                      |
| 3     | bucket should be encrypted at rest                                                                                       | It's good practice to encrypte the object, cloud won't even have access to this in this case. Also it's recommended to use CMK instead of default KMS | Must have with exception | In case of Fintech. could be "good to have" for other field          |

## Generic

| S.No. | Checklist                                               | Reason                                                | Priorities   | Comments                                       |
| ----- | ------------------------------------------------------- | ----------------------------------------------------- | ------------ | ---------------------------------------------- |
| 1     | Cloud trail should be enabled                           |                                                       | Must have    |                                                |
| 2     | Cost Budgets should be defined                          |                                                       | Must have    |                                                |
| 3     | OpsTree recommended SCP policies should be implemented  |                                                       | Good to have |                                                |
| 4     | OpsTree recommended IAM designing should be implemented |                                                       | Good to have |                                                |
| 5     | Logging should be enabled for every resource            |                                                       | Good to have |                                                |
| 6     | AWS security tooling should be implemented              |                                                       | Good to have |                                                |
| 7     | Infra should be managed via IAAC                        |                                                       | Good to have |                                                |
| 8     | Backup of every data storage resource should be enabled | Frequency should be discussed with OpsTree architects | Must have    | Not a security concern but rather a HA concern |
| 9     | Wherever privalte link can be used, we should use       | Cost implication                                      | Good to have | cost could be a factor here                    |