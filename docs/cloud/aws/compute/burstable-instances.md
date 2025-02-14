# Burstable Instances

Traditional Amazon EC2 instance types provide fixed CPU resources, while burstable performance instances provide a baseline level of CPU utilization with the ability to burst CPU utilization above the baseline level. This ensures that you pay only for baseline CPU plus any additional burst CPU usage resulting in lower compute costs. The baseline utilization and ability to burst are governed by CPU credits. Burstable performance instances are the only instance types that use credits for CPU usage.

Each burstable performance instance continuously earns credits when it stays below the CPU baseline, and continuously spends credits when it bursts above the baseline. The amount of credits earned or spent depends on the CPU utilization of the instance:

- If the CPU utilization is below baseline, then credits earned are greater than credits spent.
- If the CPU utilization is equal to baseline, then credits earned are equal to credits spent.
- If the CPU utilization is higher than baseline, then credits spent are higher than credits earned.

When the credits earned are greater than credits spent, then the difference is called accrued credits, which can be used later to burst above baseline CPU utilization. Similarly, when the credits spent are more than credits earned, then the instance behavior depends on the credit configuration mode—Standard mode or Unlimited mode.

### Standard Mode

In **Standard mode**, when credits spent are more than credits earned, the instance uses the accrued credits to burst above baseline CPU utilization. If there are no accrued credits remaining, then the instance gradually comes down to baseline CPU utilization and cannot burst above baseline until it accrues more credits.

### Unlimited Mode

In **Unlimited mode**, if the instance bursts above baseline CPU utilization, then the instance first uses the accrued credits to burst. If there are no accrued credits remaining, then the instance spends surplus credits to burst. When its CPU utilization falls below the baseline, it uses the CPU credits that it earns to pay down the surplus credits that it spent earlier. The ability to earn CPU credits to pay down surplus credits enables Amazon EC2 to average the CPU utilization of an instance over a 24-hour period. If the average CPU usage over a 24-hour period exceeds the baseline, the instance is billed for the additional usage at a [flat additional rate](https://aws.amazon.com/ec2/pricing/on-demand/#T2.2FT3.2FT4g_Unlimited_Mode_Pricing) per vCPU-hour.

[Unlimited mode concepts - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html)

## Baseline utilization

The _baseline utilization_ is the level at which the CPU can be utilized for a net credit balance of zero, when the number of CPU credits being earned matches the number of CPU credits being used. Baseline utilization is also known as _the baseline_.

Baseline utilization is expressed as a percentage of vCPU utilization, which is calculated as follows:

`(number of credits earned/number of vCPUs)/60 minutes = % baseline utilization`

For example, a `t3.nano` instance, with 2 vCPUs, earns 6 credits per hour, resulting in a baseline utilization of 5% , which is calculated as follows:

`(6 credits earned/2 vCPUs)/60 minutes = 5% baseline utilization`

A `t3.large` instance, with 2 vCPUs, earns 36 credits per hour, resulting in a baseline utilization of 30% (`(36/2)/60`).

The following graph provides an example of a `t3.large` with an average CPU utilization below the baseline.

## Earn CPU Credits

| Instance type | CPU credits earned per hour | Maximum earned credits that can be accrued* | vCPUs*** | Baseline utilization per vCPU |
| :-----------: | :-------------------------: | :-----------------------------------------: | :------: | :---------------------------: |
|    **T2**     |                             |                                             |          |                               |
|   `t2.nano`   |              3              |                     72                      |    1     |              5%               |
|  `t2.micro`   |              6              |                     144                     |    1     |              10%              |
|  `t2.small`   |             12              |                     288                     |    1     |              20%              |
|  `t2.medium`  |             24              |                     576                     |    2     |             20%**             |
|  `t2.large`   |             36              |                     864                     |    2     |             30%**             |
|  `t2.xlarge`  |             54              |                    1296                     |    4     |            22.5%**            |
| `t2.2xlarge`  |            81.6             |                   1958.4                    |    8     |             17%**             |
|    **T3**     |                             |                                             |          |                               |
|   `t3.nano`   |              6              |                     144                     |    2     |             5%**              |
|  `t3.micro`   |             12              |                     288                     |    2     |             10%**             |
|  `t3.small`   |             24              |                     576                     |    2     |             20%**             |
|  `t3.medium`  |             24              |                     576                     |    2     |             20%**             |
|  `t3.large`   |             36              |                     864                     |    2     |             30%**             |
|  `t3.xlarge`  |             96              |                    2304                     |    4     |             40%**             |
| `t3.2xlarge`  |             192             |                    4608                     |    8     |             40%**             |
|    **T3a**    |                             |                                             |          |                               |
|  `t3a.nano`   |              6              |                     144                     |    2     |             5%**              |
|  `t3a.micro`  |             12              |                     288                     |    2     |             10%**             |
|  `t3a.small`  |             24              |                     576                     |    2     |             20%**             |
| `t3a.medium`  |             24              |                     576                     |    2     |             20%**             |
|  `t3a.large`  |             36              |                     864                     |    2     |             30%**             |
| `t3a.xlarge`  |             96              |                    2304                     |    4     |             40%**             |
| `t3a.2xlarge` |             192             |                    4608                     |    8     |             40%**             |
|    **T4g**    |                             |                                             |          |                               |
|  `t4g.nano`   |              6              |                     144                     |    2     |             5%**              |
|  `t4g.micro`  |             12              |                     288                     |    2     |             10%**             |
|  `t4g.small`  |             24              |                     576                     |    2     |             20%**             |
| `t4g.medium`  |             24              |                     576                     |    2     |             20%**             |
|  `t4g.large`  |             36              |                     864                     |    2     |             30%**             |
| `t4g.xlarge`  |             96              |                    2304                     |    4     |             40%**             |
| `t4g.2xlarge` |             192             |                    4608                     |    8     |             40%**             |

## Instances

- [Amazon EC2 T3 Instances](https://aws.amazon.com/ec2/instance-types/t3/)
- [Amazon EC2 T4g Instances](https://aws.amazon.com/ec2/instance-types/t4/)
    - Amazon EC2 T4g instances are powered by Arm-based AWS Graviton2 processors. T4g instances are the next generation low cost burstable general purpose instance type that provide a baseline level of CPU performance with the ability to burst CPU usage at any time for as long as required. They deliver up to 40% better price performance over T3 instances and are ideal for running applications with moderate CPU usage that experience temporary spikes in usage.

## Summary

The burstable instance accumulates a number of "performance credits" per hour. These credits can be consumed when traffic increases and you needs a significant amount of resources. When the credits are spent, the instance still runs, but has only "baseline performance" which is, frankly, insufficient to handle production traffic.

I've seen many users try to economize by using the T family of instance types. They are usually quite disappointed, because they underestimate their need for resources. They end up consuming their burst credits too quickly, and then operate at the baseline performance level too often.

I'd use a burstable instance only for CI testing servers, or development. These instances typically run idle most of the time, and accumulate a good level of performance credits. They use these credits for brief periods, and then return to an idle level of activity.

[mysql - AWS RDS Optimized Memory vs Burstable Instance - Stack Overflow](https://stackoverflow.com/questions/72622547/aws-rds-optimized-memory-vs-burstable-instance)

## Links

- [Key concepts and definitions for burstable performance instances - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html)
- [Monitor your CPU credits for burstable performance instances - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-monitoring-cpu-credits.html)
- [Calculate burst credit billing on EC2 instances | AWS re:Post](https://repost.aws/knowledge-center/ec2-calculate-burst-credit-billing)
