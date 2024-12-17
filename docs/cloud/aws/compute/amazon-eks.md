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
#Adding users to eks
kubectl describe configmap -n kube-system aws-auth

mapUsers:
----
- userarn: arn:aws:iam::331916247734:user/deepak.sood@stashfin.com
    username: deepak.sood
    groups:
    - system:masters

    https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html

#get kubeconfig credentials from eks to local
aws eks --region ap-south-1 list-clusters
aws eks --region ap-southeast-1 list-clusters
aws eks --region ap-southeast-1 update-kubeconfig --name cnext-staging-eks
aws eks --region ap-south-1 update-kubeconfig --name cnext-beta-cluster
aws eks --region ap-south-1 update-kubeconfig --name prod-cluster-cnext

#login to AWS ECR
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

## Others

- [Cost monitoring - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/cost-monitoring.html)
- KubeCost / OpenCost
- [Streamline Kubernetes cluster management with new Amazon EKS Auto Mode | AWS News Blog](https://aws.amazon.com/blogs/aws/streamline-kubernetes-cluster-management-with-new-amazon-eks-auto-mode/)
- [Use your on-premises infrastructure in Amazon EKS clusters with Amazon EKS Hybrid Nodes | AWS News Blog](https://aws.amazon.com/blogs/aws/use-your-on-premises-infrastructure-in-amazon-eks-clusters-with-amazon-eks-hybrid-nodes/)
