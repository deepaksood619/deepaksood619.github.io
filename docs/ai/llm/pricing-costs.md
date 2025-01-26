# Pricing / Costs

Hosting Llama 3 Billion parameters or similar other multimodal  and used the exposed API's initially for development purposes, what would be the monthly cost.

### Questions

1. What is the expected scale of API usage (requests per month)?
2. What are the primary use cases for the Llama 3B model?
3. Are there specific latency or performance requirements?
4. What is the target region for hosting the model?
5. What type of data will the model interact with (text, images, etc.)?
6. Is fine-tuning required, or will pre-trained weights suffice?
7. Do you need multi-modal support from day one, or will it scale later?
8. Do you need private hosting, or is a managed cloud solution acceptable? If yes any specific cloud requirement?
9. What level of uptime and SLA is expected?
10. Will the model be available 24x7 or we have to shutdown resources at night?
11. Is cost optimization a priority over high availability initially?
12. What is the preferred technology stack or integration requirements?
13. How critical is API rate limiting or user access control?
14. Will additional services like analytics or monitoring be required?
15. Do you foresee a need for scaling storage or additional GPUs?
16. Are there specific compliance or security requirements (e.g., GDPR)?

## Costs

### Assumptions

1. **Model Size**:
    - LLaMA 3B parameters: ~6GB (weights).
    - Additional memory for activations and headroom: ~10GB.
    - Total GPU memory needed: 16GB.
2. **Compute Requirements**:
    - **GPU Type**: NVIDIA A10G, A100 (40GB), or equivalent.
    - **vCPUs**: 4.
    - **RAM**: 32GB.
3. **Usage**:
    - Active usage: 8 hours/day (development phase).
    - Idle usage: 16 hours/day with reduced compute.
    - 30 days/month.
4. **Storage**:
    - Model checkpoint storage: 100GB (including versioned checkpoints).
    - Persistent SSD for API hosting: 50GB.
5. **Networking**:
    - 2TB egress bandwidth.
6. **Other Costs**:
    - API Gateway: $50/month for limited development use.
    - Monitoring: $30/month.

### Step 1: Compute Costs

**AWS, GCP, and Azure GPU Instance Pricing:**

- AWS: `p3.2xlarge` (1 NVIDIA V100 GPU) = ~$3.06/hour.
- GCP: `A100-1 GPU` (A100 40GB) = ~$2.91/hour.
- Azure: `Standard_NC6s_v3` (1 NVIDIA V100 GPU) = ~$2.60/hour.

**Idle Instance Costs (CPU only):**

- AWS: `m5.xlarge` = ~$0.192/hour.
- GCP: `n1-standard-4` = ~$0.152/hour.
- Azure: `Standard_D4_v3` = ~$0.152/hour.

### Step 2: Storage Costs

- **AWS S3/GP2, GCP Persistent Disk, Azure Premium SSD**: ~$0.10/GB/month.
- Total storage: 150GB = $15/month.

### Step 3: Networking Costs

- Outbound egress for 2TB:
    - AWS: ~$184/month.
    - GCP: ~$180/month.
    - Azure: ~$183/month.

### Cost Breakdown for Each Cloud

#### AWS

|Item|Cost/Unit|Total Cost|
|---|---|---|
|GPU Compute (8 hrs/day, p3.2xlarge)|$3.06/hour|$734.40|
|Idle Compute (16 hrs/day, m5.xlarge)|$0.192/hour|$92.16|
|Storage (150GB)|$0.10/GB/month|$15|
|Bandwidth (2TB)|$92/TB|$184|
|Misc. (API, Monitoring)|Fixed|$80|
|**Total**|-|**$1,105.56**|

#### GCP

|Item|Cost/Unit|Total Cost|
|---|---|---|
|GPU Compute (8 hrs/day, A100-1)|$2.91/hour|$698.40|
|Idle Compute (16 hrs/day, n1-standard-4)|$0.152/hour|$72.96|
|Storage (150GB)|$0.10/GB/month|$15|
|Bandwidth (2TB)|$90/TB|$180|
|Misc. (API, Monitoring)|Fixed|$80|
|**Total**|-|**$1,046.36**|

#### Azure

|Item|Cost/Unit|Total Cost|
|---|---|---|
|GPU Compute (8 hrs/day, NC6s_v3)|$2.60/hour|$624|
|Idle Compute (16 hrs/day, Standard_D4_v3)|$0.152/hour|$72.96|
|Storage (150GB)|$0.10/GB/month|$15|
|Bandwidth (2TB)|$91.50/TB|$183|
|Misc. (API, Monitoring)|Fixed|$80|
|**Total**|-|**$974.96**|

### Final Cost Comparison Table

|Cloud Provider|GPU Compute Cost|Idle Compute Cost|Storage Cost|Bandwidth Cost|Misc. Cost|**Total Cost**|
|---|---|---|---|---|---|---|
|**AWS**|$734.40|$92.16|$15|$184|$80|**$1,105.56**|
|**GCP**|$698.40|$72.96|$15|$180|$80|**$1,046.36**|
|**Azure**|$624|$72.96|$15|$183|$80|**$974.96**|

### Observations

- **Azure** is the cheapest option overall.
- GCP offers slightly lower GPU pricing than AWS but higher idle instance costs.
- AWS is the most expensive primarily due to GPU and bandwidth pricing.

## Optimization Techniques

- Use Spot/Preemptible/Low-Priority Instances
- Reduce Idle Compute Costs
- Use Model Compression Techniques - Quantize or prune the model to reduce its memory and compute requirements while maintaining accuracy.
- Opt for a Multi-GPU Setup
- Use Persistent Model Hosting
- Optimize Storage Costs
- Limit Bandwidth Usage
- Use Reserved Instances or Committed Use Discounts
- Use Smaller Models for Development
- Leverage Open-Source Optimization Tools - Use libraries that optimize GPU usage for inference.
- Consider Using Managed Services

## Links

- [Cost of self hosting Llama-3 8B-Instruct \| Hacker News](https://news.ycombinator.com/item?id=40681784)
- [What's the cost of running Llama3:8b & 70b in the cloud? : r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1cpgxtb/whats_the_cost_of_running_llama38b_70b_in_the/)
