# Amazon EC2 Auto Scaling Group (ASG)

Scale Compute Capacity to Meet Demand

[Amazon EC2 Auto Scaling lifecycle hooks - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html?icmpid=docs_ec2as_help_panel)

Auto Scaling Policies

- Simple Scaling
- Step Scaling
- Target Tracking

**Simple Scaling** uses a single, static capacity adjustment in response to an alarm, while **Step Scaling** uses predefined, varying adjustments based on the "size" of the alarm breach for more granular control. **Target Tracking** is the most automated and recommended policy, continuously adjusting capacity to keep a specific metric (like CPU utilization) at a defined target value without requiring you to set thresholds.

[Step Scaling vs Simple Scaling Policies vs Target Tracking Policies in Amazon EC2](https://tutorialsdojo.com/step-scaling-vs-simple-scaling-policies-in-amazon-ec2/)

### Predictive Scaling

Predictive scaling works by analyzing historical load data to detect daily or weekly patterns in traffic flows. It uses this information to forecast future capacity needs so Amazon EC2 Auto Scaling can proactively increase the capacity of your Auto Scaling group to match the anticipated load.

Predictive scaling uses machine learning to analyze historical workload patterns and forecast future usage. It can schedule capacity adjustments in advance based on expected demand.

Predictive scaling is well suited for situations where you have:

- Cyclical traffic, such as high use of resources during regular business hours and low use of resources during evenings and weekends
- Recurring on-and-off workload patterns, such as batch processing, testing, or periodic data analysis
- Applications that take a long time to initialize, causing a noticeable latency impact on application performance during scale-out events

In general, if you have regular patterns of traffic increases and applications that take a long time to initialize, you should consider using predictive scaling. Predictive scaling can help you scale faster by launching capacity in advance of forecasted load, compared to using only dynamic scaling, which is reactive in nature. Predictive scaling can also potentially save you money on your EC2 bill by helping you avoid the need to over provision capacity.

For example, consider an application that has high usage during business hours and low usage overnight. At the start of each business day, predictive scaling can add capacity before the first influx of traffic. This helps your application maintain high availability and performance when going from a period of lower utilization to a period of higher utilization. You don't have to wait for dynamic scaling to react to changing traffic. You also don't have to spend time reviewing your application's load patterns and trying to schedule the right amount of capacity using scheduled scaling.

[Predictive scaling for Amazon EC2 Auto Scaling - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html)

### Removing Instances

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

1. Determine which Availability Zones (Azs) have the most instances and at least one instance that is not protected from scale-in.
2. Determine which instances to terminate to align the remaining instances to the allocation strategy for the On-Demand or Spot Instance that is terminating.
3. Determine whether any of the instances use the oldest launch template or configuration:
	1. Determine whether any of the instances use the oldest launch template unless there are instances that use a launch configuration.
	2. Determine whether any of the instances use the oldest launch configuration.
4. After applying all of the above criteria, if there are multiple unprotected instances to terminate, determine which instances are closest to the next billing hour.

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
