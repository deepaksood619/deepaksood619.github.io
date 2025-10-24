# Amazon EC2 Auto Scaling Group (ASG)

Scale Compute Capacity to Meet Demand

[Amazon EC2 Auto Scaling lifecycle hooks - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html?icmpid=docs_ec2as_help_panel)

Auto Scaling Policies

- Simple Scaling
- Step Scaling
- Target Tracking

**Simple Scaling** uses a single, static capacity adjustment in response to an alarm, while **Step Scaling** uses predefined, varying adjustments based on the "size" of the alarm breach for more granular control. **Target Tracking** is the most automated and recommended policy, continuously adjusting capacity to keep a specific metric (like CPU utilization) at a defined target value without requiring you to set thresholds.

[Step Scaling vs Simple Scaling Policies vs Target Tracking Policies in Amazon EC2](https://tutorialsdojo.com/step-scaling-vs-simple-scaling-policies-in-amazon-ec2/)

[Temporarily remove instances from your Auto Scaling group - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html)

- You can put an instance that is in the `InService` state into the `Standby` state, update or troubleshoot the instance, and then return the instance to service. Instances that are on standby are still part of the Auto Scaling group, but they do not actively handle load balancer traffic.
- The `ReplaceUnhealthy` process terminates instances that are marked as unhealthy and then creates new instances to replace them. Amazon EC2 Auto Scaling stops replacing instances that are marked as unhealthy. Instances that fail EC2 or Elastic Load Balancing health checks are still marked as unhealthy. As soon as you resume the `ReplaceUnhealthly` process, Amazon EC2 Auto Scaling replaces instances that were marked unhealthy while this process was suspended.

## Termination Policy

Amazon EC2 Auto Scaling uses termination policies to decide the order for terminating instances. You can use a predefined policy or create a custom policy to meet your specific requirements. By using a custom policy or instance scale in protection, you can also prevent your Auto Scaling group from terminating instances that aren't yet ready to terminate.

### When Amazon EC2 Auto Scaling uses termination policies

- Scale in events
- Instance refresh
- Availability Zone rebalancing

### Default termination policy

When Amazon EC2 Auto Scaling needs to terminate an instance, it first identifies which Availability Zone (or Zones) has the most instances and at least one instance that is not protected from scale in. Then, it proceeds to evaluate unprotected instances within the identified Availability Zone as follows:

#### Instances that use outdated configurations

- **For groups that use a launch template** – Determine whether any of the instances use outdated configurations, prioritizing in this order:

    1. First, check for instances launched with a launch configuration.
    2. Then, check for instances launched using a different launch template instead of the current launch template.
    3. Finally, check for instances using the oldest version of the current launch template.

- For groups that use a launch configuration – Determine whether any of the instances use the oldest launch configuration.

If no instances with outdated configurations are found, or there are multiple instances to choose from, Amazon EC2 Auto Scaling considers the next criteria of instances approaching their next billing hour.

#### Instances approaching next billing hour

Determine whether any of the instances that meet the previous criteria are closest to the next billing hour. If multiple instances are equally close, terminate one at random. This helps you maximize the use of your instances that are billed hourly. However, most EC2 usage is now billed per second, so this optimization provides less benefit.

![AWS Default Termination Policy](../../../media/Pasted%20image%2020251022093028.png)

### Example

**Question -** Amazon EC2 Auto Scaling needs to terminate an instance from Availability Zone (AZ) `us-east-1a` as it has the most number of instances amongst the Availability Zone (AZs) being used currently. There are 4 instances in the Availability Zone (AZ) `us-east-1a` like so: Instance A has the oldest launch template, Instance B has the oldest launch configuration, Instance C has the newest launch configuration and Instance D is closest to the next billing hour.

**Answer -** Per the default termination policy, the first priority is given to any allocation strategy for On-Demand vs Spot instances. As no such information has been provided for the given use-case, so this criterion can be ignored. The next priority is to consider any instance with the **oldest launch template** unless there is an instance that uses a launch configuration. So this rules out Instance A. Next, you need to consider any instance which has the **oldest launch configuration**. This implies Instance B will be selected for termination and Instance C will also be ruled out as it has the newest launch configuration. Instance D, which is **closest to the next billing hour**, is not selected as this criterion is last in the order of priority.

[Control which Auto Scaling instances terminate during scale in - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html)

[Configure termination policies for Amazon EC2 Auto Scaling - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html)
