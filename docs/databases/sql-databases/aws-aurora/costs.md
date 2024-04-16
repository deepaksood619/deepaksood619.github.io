# Costs

1. ⁠⁠Aurora Serverless
2. ⁠⁠Aurora IO Optimized MySQL
3. ⁠Aurora MySQL - [AWS Pricing Calculator](https://calculator.aws/#/estimate?id=814a47de14501bd81ae41433ed31dcf94963c626)
4. ⁠⁠RDS MySQL
5. ⁠⁠MySQL on EC2 (self managed)

### Instances

- R6g instances are powered by Arm-based AWS Graviton2 processors.
- [Amazon EC2 R7g instances](https://aws.amazon.com/ec2/instance-types/r7g/) are powered by Arm-based AWS Graviton3 processors.

| Instance Type | Price / hour (linux) |
| ------------- | -------------------- |
| r6g.xlarge    | 0.2016               |
| r7g.xlarge    | 0.2142               |

[Amazon EC2 R7g Instances](https://aws.amazon.com/ec2/instance-types/r7g/)

[Amazon EC2 R6g Instances](https://aws.amazon.com/ec2/instance-types/r6g/)

## Aurora vs RDS

### Type

- Storage - 2TB
- Baseline IO - 30 per second
- Peak IO rate - 300 per second
- Duration of peak IO activity - 360 hours per month

### Costs

[AWS Pricing Calculator - Comparision](https://calculator.aws/#/estimate?id=bfde117555e574ecfae0f16ea74a5ae4e6ef2723)

- **Aurora MySQL**
	- db.r6g.xlarge - 751.04 USD
	- db.r6g.large - 534.96 USD
- **Amazon RDS for MySQL**
	- db.r6g.xlarge - 1,242.49 USD
- **Aurora Serverless v2** 
	- 3 ACU - 713.81 USD
	- 10 ACU - 1,633.61 USD
- **EC2 m7g.xlarge**
	- 609.39 USD with EC2 Instance Savings Plans
	- m5a.xlarge - 634.21 USD with On demand
- **Aurora IO Optimized**
	- db.r6g.xlarge - 1,068.54 USD

![Different MySQL Comparisons](../../../media/Screenshot%202024-04-15%20at%207.27.11%20PM.jpg)
