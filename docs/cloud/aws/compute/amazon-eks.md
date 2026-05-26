# Amazon EKS

Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.

Amazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Amazon EKS automatically detects and replaces unhealthy control plane instances, and it provides automated version upgrades and patching for them.

Amazon EKS is also integrated with many AWS services to provide scalability and security for your applications, including the following:

- Amazon ECR for container images
- Elastic Load Balancing for load distribution
- IAM for authentication
- Amazon VPC for isolation

## Amazon EKS Control Plane Architecture

Amazon EKS runs a single tenant Kubernetes control plane for each cluster, and control plane infrastructure is not shared across clusters or AWS accounts.

This control plane consists of at least two API server nodes and threeetcdnodes that run across three Availability Zones within a Region. Amazon EKS automatically detects and replaces unhealthy control plane instances, restarting them across the Availability Zones within the Region as needed. Amazon EKS leverages the architecture of AWS Regions in order to maintain high availability. Because of this, Amazon EKS is able to offer an [SLA for API server endpoint availability](https://aws.amazon.com/eks/sla).

Amazon EKS uses Amazon VPC network policies to restrict traffic between control plane components to within a single cluster. Control plane components for a cluster cannot view or receive communication from other clusters or other AWS accounts, except as authorized with Kubernetes RBAC policies.

https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html

## EKS > Managed Node Groups

Amazon EKS managed node groups automate the provisioning and lifecycle management of nodes (Amazon EC2 instances) for Amazon EKS Kubernetes clusters.

With Amazon EKS managed node groups, you don't need to separately provision or register the Amazon EC2 instances that provide compute capacity to run your Kubernetes applications. You can create, update, or terminate nodes for your cluster with a single operation. Nodes run using the latest Amazon EKS-optimized AMIs in your AWS account while node updates and terminations gracefully drain nodes to ensure that your applications stay available.

All managed nodes are provisioned as part of an Amazon EC2 Auto Scaling group that is managed for you by Amazon EKS. All resources including the instances and Auto Scaling groups run within your AWS account. Each node group uses the Amazon EKS-optimized Amazon Linux 2 AMI and can run across multiple Availability Zones that you define.

## Commands

### Get authentication Token

```bash
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')

kubectl proxy

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login
```

```bash
aws autoscaling describe-auto-scaling-groups --query "AutoScalingGroups[*].AutoScalingGroupName" --output text

aws autoscaling update-auto-scaling-group --auto-scaling-group-name eks-application-node-group-1-27-16c80375-b0c2-89be-d024-5af4ec83c43c --max-size 70
```

## AWS EKS

```bash
# create vpc both public and private for static IPs
aws cloudformation create-stack \
  --stack-name prod-eks-vpc \
  --template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml

# connect with k8s
aws eks update-kubeconfig --region ap-south-1 --name backend-cluster

# replica scale down
kubectl scale deployment metrics-server -n kube-system --replicas=1

#Adding users to eks
kubectl describe configmap -n kube-system aws-auth

mapUsers:
----
- userarn: arn:aws:iam::331916247734:user/deepak.sood@stashfin.com
    username: deepak.sood
    groups:
    - system:masters

    https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html

# get kubeconfig credentials from eks to local
aws eks --region ap-south-1 list-clusters
aws eks --region ap-southeast-1 list-clusters
aws eks --region ap-southeast-1 update-kubeconfig --name cnext-staging-eks
aws eks --region ap-south-1 update-kubeconfig --name cnext-beta-cluster
aws eks --region ap-south-1 update-kubeconfig --name prod-cluster-cnext

# login to AWS ECR
aws ecr get-login-password | docker login --username AWS --password-stdin 331916247734.dkr.ecr.ap-south-1.amazonaws.com
```

## eksctl

eksctl is a simple CLI tool for creating clusters on EKS - Amazon's new managed Kubernetes service for EC2. It is written in Go, uses CloudFormation, was created by [Weaveworks](https://www.weave.works/) and it welcomes contributions from the community. Create a basic cluster in minutes with just one command

A cluster will be created with default parameters

- exciting auto-generated name, e.g. "fabulous-mushroom-1527688624"
- 2 x m5.largenodes (this instance type suits most common use-cases, and is good value for money)
- use official AWS EKS AMI
- us-west-2region
- dedicated VPC (check your quotas)
- using static AMI resolver

```bash
eksctl create cluster --name prod --version 1.14 --region ap-south-1 --fargate
eksctl create cluster --name=stashfin --nodes=2 --version 1.14 --region ap-south-1 --nodes-min=2 --nodes-max=5
eksctl delete cluster --name=stashfin

eksctl create cluster --managed

https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html

brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
brew upgrade eksctl && brew link --overwrite eksctl
eksctl version

Usage: eksctl [command] [flags]

Commands:
    eksctl create                  Create resource(s)
    eksctl get                     Get resource(s)
    eksctl get cluster
    eksctl update                  Update resource(s)
    eksctl upgrade                 Upgrade resource(s)
    eksctl delete                  Delete resource(s)
    eksctl set                     Set values
    eksctl unset                   Unset values
    eksctl scale                   Scale resources(s)
    eksctl drain                   Drain resource(s)
    eksctl utils                   Various utils
    eksctl completion              Generates shell completion scripts
    eksctl version                 Output the version of eksctl
    eksctl help                    Help about any command

eksctl utils write-kubeconfig --cluster=stashfin [--kubeconfig=<path>][--set-kubeconfig-context=<bool>]

eksctl get addons --cluster stashfin-prod-eks
eksctl delete addon --cluster stashfin-prod-eks --name vpc-cni
eksctl utils describe-addon-versions --cluster stashfin-prod-eks
eksctl create addon --name vpc-cni --version v1.10.4-eksbuild.2 --service-account-role-arn=<role-arn>

eksctl utils describe-addon-configuration --name vpc-cni --version v1.12.0-eksbuild.1

eksctl get addon --cluster stashfin-prod-eks --output yaml
```

https://eksctl.io

## Using Fargate with EKS

https://eksctl.io/usage/fargate

## Reserve some memory for the kubelet and the system namespaces (for Kubelet OOM)

Using Cloudformation you can simply set some extra arguments on the kubelet process:

```bash
--kubelet-extra-args "--node-labels=cluster=${ClusterName}, nodegroup=${NodeGroupName} --kube-reserved memory=0.3Gi, ephemeral-storage=1Gi --system-reserved memory=0.2Gi, ephemeral-storage=1Gi --eviction-hard memory.available<200Mi, nodefs.available<10%"
```

In that case you reserve 300MB for the kube-system namespace and 200 MB for the system itself.

In addition if there are less than 200 MB available the eviction option uses the oom_killer to kill pods on that node to avoid OOM errors on the Kubelet.

## PVC

Can be modified once in 6 hours

## Optimizations

https://kubedex.com/90-days-of-aws-eks-in-production

## Tools

### kube2iam

kube2iam provides different AWS IAM roles for pods running on Kubernetes

## IAM Roles for Service Accounts (IRSA)

https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts

## Max number of pods

`max pods = (Number of network interfaces for the instance type × (the number of IP addressess per network interface - 1)) + 2`

[How to massively increase EKS pod limit | AWS re:Post](https://repost.aws/questions/QUBUhGu9osTN-x9mBQxXB1BQ/how-to-massively-increase-eks-pod-limit)

[amazon web services - Pod limit on Node - AWS EKS - Stack Overflow](https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks)

## Pod Density and Cost EKS (WeaveWorks)

https://docs.google.com/spreadsheets/d/1MCdsmN7fWbebscGizcK6dAaPGS-8T_dYxWp0IdwkMKI/edit#gid=1549051942

## CNI Metrics Helper

The CNI metrics helper is a tool that you can use to scrape network interface and IP address information, aggregate metrics at the cluster level, and publish the metrics to Amazon CloudWatch.

https://docs.aws.amazon.com/eks/latest/userguide/cni-metrics-helper.html

## Auto Mode

- [Streamline Kubernetes cluster management with new Amazon EKS Auto Mode | AWS News Blog](https://aws.amazon.com/blogs/aws/streamline-kubernetes-cluster-management-with-new-amazon-eks-auto-mode/)
- [Amazon EKS Auto Mode Explained \| Amazon Web Services - YouTube](https://youtu.be/XeRgIo9XM5w)
- [Automate cluster infrastructure with EKS Auto Mode - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/automode.html)
- [👋 AWS EKS Auto Mode: A Game-Changer or Just Hype? My Unbiased Take 👋 \| by Prashant Lakhera \| Medium](https://devopslearning.medium.com/aws-eks-auto-mode-a-game-changer-or-just-hype-my-unbiased-take-18de17c4484a)
- [EKS Auto Mode - Amazon EKS](https://docs.aws.amazon.com/eks/latest/best-practices/automode.html)

```bash
kubectl scale deployment metrics-server -n kube-system --replicas=1
```

## Networking - EKS Static Egress IP Learnings

[Create an Amazon VPC for your Amazon EKS cluster - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/creating-a-vpc.html)

```bash
aws cloudformation create-stack \
  --stack-name prod-eks-vpc \
  --template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml
```

**Core Method:** NAT Gateway + Elastic IP

To get a static IP for outbound traffic in EKS:

1. **Allocate Elastic IP (EIP)** in the EC2 Console.
2. **Create NAT Gateway** in a public subnet and attach the EIP.
3. **Configure Routing:** Set the default route (0.0.0.0/0) of your private subnets to point to the NAT Gateway.
4. **Deploy EKS Nodes** into these private subnets.

### Alternative Granular Solutions

- **Cilium/Calico Egress Gateway:** Assign static IPs per namespace or application.
- **Istio Egress Gateway:** Direct traffic through a central gateway pod for fine-grained routing.

### EC2 vs. NAT Gateway

Traffic path depends on the Subnet and Route Table:

- **Private Subnet:** Traffic goes through NAT Gateway (Static IP).
- **Public Subnet:** Traffic goes through Internet Gateway (Dynamic/Individual Public IP).
- **Internal Traffic:** Stays within VPC or Peering; does not use NAT Gateway.

### Implementation in Default VPC (Hybrid Approach)

Since a Default VPC consists of public subnets:

1. Create NAT Gateway in an existing public subnet.
2. Create New Private Subnets (one per AZ).
3. New Route Table: Route 0.0.0.0/0 to the NAT Gateway.
4. Associate: Link the new private subnets to this route table.
5. Deploy EKS Nodes: Place them only in the new private subnets. This allows EKS to have a static IP while existing EC2s remain untouched.

### IGW vs. NAT Gateway

- **Internet Gateway (IGW):**
	  - Facilitates bi-directional (inbound/outbound) traffic.
	  - Used in public subnets.
	  - Performs 1:1 NAT; each instance uses its own unique public IP.
	  - No cost for the gateway itself.
- **NAT Gateway:**
	- Facilitates outbound-only traffic for private subnets.
	- Hides internal private IPs; traffic appears to come from a single static Elastic IP.
	- Incurs hourly charges and data processing fees.

### EKS Subnet Strategy

- **Production Standard:** Use a hybrid of Public and Private subnets.
- **Worker Nodes:** Should be placed in private subnets for security. This allows pods to access the internet (for updates/APIs) via a NAT Gateway while remaining unreachable from the public internet.
- **Public Subnets:** Should host the NAT Gateways and internet-facing Load Balancers (ALB/NLB).

### Facilitating Static Outbound IPs

- To ensure all EKS traffic has a single static source IP (for whitelisting), nodes must be in a private subnet.
- Instances in a public subnet cannot route through a NAT Gateway; they are forced to use the IGW and their own public IPs.

## Prod Auto EKS Setup with Minimal Config

### 1. Networking & Egress Validation

These commands were used to identify your NAT Gateways, audit your public network footprint, and confirm the static outbound IP path from within your cluster.

#### Find your production static egress IPs

Bash

```bash
aws ec2 describe-nat-gateways \
  --filter "Name=vpc-id,Values=vpc-036fb867a88912692" \
  --query "NatGateways[*].NatGatewayAddresses[*].PublicIp" \
  --output table
```

#### Trace the owners of your Elastic Network Interfaces (ENIs)

Bash

```bash
aws ec2 describe-network-interfaces \
  --network-interface-ids eni-00a2db67c3f2cebd9 eni-07465856f032e6cc6 eni-04d8fceff1905951b eni-09bbac773719e8735 eni-054bf6136a445ad7f eni-000dd093b3270a1be eni-02ec75d1230707b79 eni-008e6ecef493f498d eni-0eec4782329864ee0 eni-0f63ec91dd3c42fe5 \
  --query "NetworkInterfaces[*].{ENI:NetworkInterfaceId,Description:Description,VPC:VpcId,Status:Status}" \
  --output table
```

#### Run an immediate outbound network "truth check"

Bash

```bash
kubectl run egress-test -n prod --rm -i --image=badouralix/curl-jq --restart=Never -- curl -s icanhazip.com
```

### 2. Cluster Consolidation & Taint Removal

These commands handled the structural reorganization of your worker node layer, wiping out isolation rules to allow high-density container packing onto a single node.

#### Check current taints on a specific node

Bash

```bash
kubectl get node i-0a0e2d78d5dd4abcd -o jsonpath='{.spec.taints}'
```

#### Patch the `system` NodePool to strip the `CriticalAddonsOnly` taint

Bash

```bash
kubectl patch nodepool system --type merge -p '{"spec":{"template":{"spec":{"taints":null}}}}'
```

### 3. Restricting Compute to Private Subnets

This crucial step reconfigured Karpenter / EKS Auto Mode's underlying compute routing rule, forcing all future worker instances out of public zones and cleanly into your private subnets.

#### Patch the NodeClass to restrict network scope

Bash

```bash
kubectl patch nodeclass default --type merge -p '{"spec":{"subnetSelectorTerms":[{"id":"subnet-abcd"},{"id":"subnet-abcd"}]}}'
```

### The Final Cluster State Achieved

- **Zero Idle Waste:** Applications and system utilities gracefully share a consolidated compute footprint.
- **Network Isolation:** Nodes live exclusively in private subnets with a zero public-ingress node profile.
- **Deterministic Egress:** Every connection leaving your Kubernetes pods to the outside world lands on third-party firewalls with your explicit, static IP signatures.

## Others

- [Cost monitoring - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/cost-monitoring.html)
- KubeCost / OpenCost
- [Use your on-premises infrastructure in Amazon EKS clusters with Amazon EKS Hybrid Nodes | AWS News Blog](https://aws.amazon.com/blogs/aws/use-your-on-premises-infrastructure-in-amazon-eks-clusters-with-amazon-eks-hybrid-nodes/)
- [Amazon EKS Hybrid Nodes Explained \| Amazon Web Services - YouTube](https://youtu.be/xHbGTmaRYK4)
- [GitHub - geomge/aws-eks-poc-infra-terraform: terraform code for a poc aws infra · GitHub](https://github.com/geomge/aws-eks-poc-infra-terraform)
