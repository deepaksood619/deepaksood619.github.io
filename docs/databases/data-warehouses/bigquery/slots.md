# Slots

- A BigQuery slot is a virtual compute unit used by BigQuery to execute SQL queries or other job types. During the execution of a query, BigQuery automatically determines how many slots are used by the query. The number of slots used depends on the amount of data being processed, the complexity of the query, and the number of slots available.
- Fair scheduling in BigQuery
- Idle slots

[Understand slots  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/slots)

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

## Slot Autoscaling

[Introduction to slots autoscaling  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/slots-autoscaling-intro)

## Cost Impact

1. [**Commitments**](https://cloud.google.com/bigquery/docs/reservations-concepts#commitments), which let you purchase slot capacity.
2. [**Reservations**](https://cloud.google.com/bigquery/docs/reservations-concepts#reservations) (optional), which give you the ability to partition your capacity.
3. [**Assignments**](https://cloud.google.com/bigquery/docs/reservations-concepts#assignments), which gives you the ability to **assign** projects, folders, or your entire organization to **Reservations**.

[Cost flexibility for your data warehouse \| Google Cloud Blog](https://cloud.google.com/blog/products/data-analytics/new-workload-management-in-bigquery)

- **Predictable Costs:** Slot reservations provide predictable costs compared to on-demand pricing, where costs can fluctuate based on usage.
- **Efficient Resource Allocation:** Autoscaling ensures efficient use of compute resources, scaling up when needed and scaling down during idle times, which helps in cost optimization.

## Flex Slots

Flex Slots, a new way to purchase BigQuery slots for short durations, as little as 60 seconds at a time. A slot is the unit of BigQuery analytics capacity. Flex Slots let you quickly respond to rapid demand for analytics and prepare for business events such as retail holidays and app launches. Flex Slots are rolling out to all BigQuery Reservations customers in the coming days!

Flex Slots give BigQuery Reservations users immense flexibility without sacrificing cost predictability or control.

- Flex Slots are priced at $0.04 per slot per hour, and are available in [increments of 100 slots](https://cloud.google.com/blog/products/data-analytics/bigquery-flexible-pricing-starting-with-100-slots).
    - It usually takes just a few minutes to deploy Flex Slots in BigQuery Reservations.
    - Once deployed, you can cancel after just 60 seconds, and you will only be billed for the seconds Flex Slots are deployed.

[Scale cloud data warehouse up and down quickly \| Google Cloud Blog](https://cloud.google.com/blog/products/data-analytics/introducing-bigquery-flex-slots)

## Summary

Implementing slot-based pricing with autoscaling in BigQuery can help reduce analysis costs significantly while ensuring that you have the necessary compute resources to handle your workload efficiently. By optimizing your slot reservations based on actual usage patterns and workload characteristics, you can achieve cost predictability and operational efficiency in your BigQuery data analysis tasks.

## Slots and Slot Time Consumed

- Slots are virtual CPUs used by BigQuery to execute your Queries and BigQuery allocates these resources based on Query complexity.
- Slot time consumed refers to the amount of time your query actively uses these resources to execute.
- When BigQuery processes a query job, it transforms the SQL statement into an execution plan. This plan is divided into a sequence of query stages, each consisting of finer-grained execution steps. BigQuery utilizes a distributed parallel architecture to execute these queries.

### Bytes Shuffled

- BigQuery uses a distributed, multi-node architecture to execute queries so Bytes shuffled refers to the amount of data that was moved between these nodes during query execution.
- In queries involving complex joins, data will be distributed across nodes or shuffled to perform the required operations.
- Data shuffling is a resource-intensive process and one of the key factors that impact query performance, so reducing the data shuffled is a priority.

### Some practises to reduce Bytes shuffled

- Use Sub-queries effectively — Subqueries can reduce shuffling by selecting a smaller subset of data but overusing the same(**nested subqueries**) is not recommended.
- Partitioned Tables
- If you are just exploring the table use the preview option rather than using a SELECT * statement (Applying Limit wouldn’t make a difference).
- Avoid using the `SELECT *` statement and query only the columns you need or use the `SELECT * EXCEPT` to exclude columns.

[Slot time consumed and Bytes Shuffled \| by KS Haarish Dharan \| DevOps.dev](https://blog.devops.dev/slot-time-consumed-and-bytes-shuffled-8abbd37fd2d4)

## Slot Time Consumed

In a course of Google, there is an example where a query shows 13 "elapsed time" seconds and 50 minutes of "slot time consumed". They says:

Hey, across all of our workers, we did essentially 50 minutes of work massively in parallel, 50 minutes so that your query could be returned back in 13 seconds. Best of all for you, you don't need to worry about spinning up those workers, moving data in-between them, making sure they're sharing all their results between their aggregations. All you care about is writing the SQL, finding the insights, and then running that query in a very fast turnaround. But there is abstracted from you a lot of distributed parallel processing that's happening.

## Links

[Purchase and manage slot commitments  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/reservations-commitments)
