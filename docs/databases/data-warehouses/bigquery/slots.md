# Slots

- A BigQuery slot is a virtual compute unit used by BigQuery to execute SQL queries or other job types. During the execution of a query, BigQuery automatically determines how many slots are used by the query. The number of slots used depends on the amount of data being processed, the complexity of the query, and the number of slots available.
- Fair scheduling in BigQuery
- Idle slots

## Utilizing Slots and Autoscaling

BigQuery offers a slot-based pricing model where you can reserve slots (compute capacity) to run queries. This can be more cost-effective than on-demand pricing, especially for workloads with consistent or predictable query patterns.

### Steps to Implement

#### 1. Determine Slot Requirements

- Analyze your current query workload to understand the number of slots required to process queries efficiently. Start with an estimate based on historical usage or query patterns.
- Based on the previous pattern of usage, we have observed that the slots that you are on average using is around 100 slots and a max of 300 slots autoscaling

![image](../../../media/Screenshot%202025-01-27%20at%209.27.34%20PM.jpg)

![image](../../../media/Screenshot%202025-01-27%20at%209.27.25%20PM.jpg)

#### 2. Reserve Slots

- Based on your analysis, purchase a reservation for a specific number of slots. The slot monitoring chart shows a baseline of 100 slots running 24/7, with an increased capacity of 300 slots as needed. It is assumed that all 300 slots will be used for at least 6 hours a day, even though the chart indicates less than 6 hours of usage. You will be charged for the reserved slots for the entire month, while autoscaling charges will be based solely on usage.

Note: BigQuery allows you to reserve slots in increments of 100.

##### Implementation Method

- Purchase a reservation for 100 slots. This will cover your baseline needs 24/7 and 300 slots with 25% utilization a day (6 hours of usage of all 300 slots) provide a significant cost reduction compared to on-demand pricing.
- Enable autoscaling to automatically increase slot allocation up to 300 during peak usage times. This flexibility ensures your queries run smoothly without overspending on unnecessary capacity

![image](../../../media/Screenshot%202025-01-27%20at%209.26.58%20PM.jpg)

Select the maximum reservation and baseline slots. Additionally, you can view the estimated cost when combining baseline and autoscaling. Below is a sample cost breakdown for autoscaling usage at 25%, 50%, and 100% in a day.

- Baseline Slots: 100 slots (running 24/7)

![image](../../../media/Screenshot%202025-01-27%20at%209.26.38%20PM.jpg)

- Maximum Reservation Slots: 300 slots (used for increased capacity)

![image](../../../media/Screenshot%202025-01-27%20at%209.26.16%20PM.jpg)

##### Estimated Cost Breakdown

- Baseline Cost: Cost for 100 slots running continuously for the entire month.
- Autoscaling Costs (based on usage percentages):
- 25% Usage: Cost for using up to 300 slots for 25% of the day.
- 50% Usage: Cost for using up to 300 slots for 50% of the day.
- 100% Usage: Cost for using up to 300 slots for the entire day.

##### Sample Calculations

- Baseline Cost: Fixed monthly cost for 100 slots.
- Autoscaling 25% Usage Cost: Cost for 300 slots running for 6 hours per day.
- Autoscaling 50% Usage Cost: Cost for 300 slots running for 12 hours per day.
- Autoscaling 100% Usage Cost: Cost for 300 slots running for 24 hours per day.

By comparing these estimates, you can better understand the cost implications of different levels of autoscaling usage.

![image](../../../media/Screenshot%202025-01-27%20at%209.25.50%20PM.jpg)

### 3. Monitor and Adjust

- Regularly monitor your query performance and adjust the number of reserved slots and autoscaling settings based on actual usage patterns. This ensures that you are optimizing costs while maintaining performance.

## Cost Impact

- Predictable Costs: Slot reservations provide predictable costs compared to on-demand pricing, where costs can fluctuate based on usage.
- Efficient Resource Allocation: Autoscaling ensures efficient use of compute resources, scaling up when needed and scaling down during idle times, which helps in cost optimization.

## Summary

Implementing slot-based pricing with autoscaling in BigQuery can help reduce analysis costs significantly while ensuring that you have the necessary compute resources to handle your workload efficiently. By optimizing your slot reservations based on actual usage patterns and workload characteristics, you can achieve cost predictability and operational efficiency in your BigQuery data analysis tasks.
