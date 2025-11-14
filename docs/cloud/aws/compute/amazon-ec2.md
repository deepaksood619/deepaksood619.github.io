# Amazon EC2

Virtual Servers in the Cloud

- [amazon-ec2-instance-types](cloud/aws/compute/amazon-ec2-instance-types.md)
- [amazon-ec2-asg](cloud/aws/compute/amazon-ec2-asg.md)

### installing docker in ubuntu ec2 instance

[Ubuntu \| Docker Docs](https://docs.docker.com/engine/install/ubuntu/)

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# installation
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install docker
sudo usermod -aG docker ubuntu
# log out of terminal and log back in
sudo systemctl start docker
docker run hello-world
```

[Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/)

[AWS EC2 Instance Types](cloud/aws/compute/amazon-ec2-instance-types.md)

### installing docker in amazon-linux ec2 instance

```bash
# 1. Update your system
sudo yum update -y

# 2. Install Docker (Amazon Linux 2 uses yum, not apt)
sudo yum install docker -y

# 3. Start the Docker service
sudo service docker start

# 4. Add the ec2-user to the docker group (so you can run Docker without sudo)
sudo usermod -aG docker ec2-user

# 5. Log out and log back in (or run the next command for current session)
newgrp docker

# 6. Test Docker installation
docker run hello-world

# install git
sudo yum install -y git
git --version

# install docker-compose
sudo yum install -y python3-pip
sudo pip3 install docker-compose --ignore-installed requests
docker-compose --version
```

### Deploy code to EC2

```bash
chmod +x /home/ubuntu/deploy.sh
*/5 * * * * /home/ubuntu/deploy.sh

*/5 * * * * /home/ubuntu/deploy.sh >> /var/log/deploy.log 2>&1

sudo touch /var/log/deploy.log
sudo chmod +777 /var/log/deploy.log
```

```bash title="deploy.sh"
#!/bin/bash

# Set the path to your Git repository
GIT_PATH="/home/ubuntu/repo"

# Change to the Git repository directory
cd $GIT_PATH

git fetch origin

NEW_COMMITS=$(git rev-list HEAD..origin/main)

# Check if there are any changes in the repository
if [ -n "$NEW_COMMITS" ]; then
  # If there are changes, run the docker-compose command
  git reset --hard origin/main
  sudo docker compose -f docker-compose.prod.yaml up -d --no-deps --build web worker metabase
  # docker clean
  sudo docker rm $(sudo docker ps -a -f status=exited -q); sudo docker volume rm $(sudo docker volume ls -f dangling=true -q); sudo docker images -qf dangling=true | xargs sudo docker rmi
else
  # If there are no changes, do nothing
  echo "$(date '+%Y-%m-%d %H:%M:%S') - No changes in Git repository."
fi
```

`chmod +x /home/ubuntu/deploy.sh`

**Advanced Deployment**

```bash title="deploy.sh"
#!/bin/bash

# List of project directories and their corresponding branches
declare -A projects
projects["/home/ubuntu/repoA"]="main"
projects["/home/ubuntu/repoB"]="master"

# Loop through each project and branch
for GIT_PATH in "${!projects[@]}"; do
  BRANCH="${projects[$GIT_PATH]}"
  echo "Checking for updates in $GIT_PATH on branch $BRANCH"
  cd "$GIT_PATH" || continue

  # Fetch the latest branch
  git fetch origin "$BRANCH"

  # Get new commits compared to origin/branch
  NEW_COMMITS=$(git rev-list HEAD..origin/"$BRANCH")

  if [ -n "$NEW_COMMITS" ]; then
    echo "New updates found on $BRANCH branch. Pulling and rebuilding..."
    git reset --hard origin/"$BRANCH"

    docker compose build --no-cache
    docker compose down --volumes --remove-orphans

    # Rebuild and restart containers
    sudo docker compose -f docker-compose.yml up -d

    # Clean up unused docker resources
    echo "Cleaning up unused Docker resources..."
    sudo docker rm $(sudo docker ps -a -f status=exited -q) 2>/dev/null
    sudo docker volume rm $(sudo docker volume ls -f dangling=true -q) 2>/dev/null
    sudo docker images -qf dangling=true | xargs -r sudo docker rmi
  else
    echo "$(date '+%Y-%m-%d %H:%M:%S') - No changes in $GIT_PATH ($BRANCH branch)"
  fi
done
```

## Increase volume size

**Windows** - [Extend the file system after resizing an Amazon EBS volume - Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html)

**t2 instances resize**

```bash
df -hT
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       6.8G  5.5G  1.3G  82% /
tmpfs           2.0G     0  2.0G   0% /dev/shm
tmpfs           783M  1.3M  782M   1% /run
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/xvda16     881M  148M  672M  18% /boot
/dev/xvda15     105M  6.2M   99M   6% /boot/efi
tmpfs           392M   12K  392M   1% /run/user/1000

sudo lsblk
NAME     MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
loop0      7:0    0 27.2M  1 loop /snap/amazon-ssm-agent/11320
loop2      7:2    0 73.9M  1 loop /snap/core22/2010
loop3      7:3    0 49.3M  1 loop /snap/snapd/24792
loop4      7:4    0 50.9M  1 loop /snap/snapd/24718
loop5      7:5    0 73.9M  1 loop /snap/core22/2045
xvda     202:0    0   30G  0 disk
├─xvda1  202:1    0    7G  0 part /
├─xvda14 202:14   0    4M  0 part
├─xvda15 202:15   0  106M  0 part /boot/efi
└─xvda16 259:0    0  913M  0 part /boot

sudo growpart /dev/xvda 1
CHANGED: partition=1 start=2099200 old: size=14677983 end=16777182 new: size=60815327 end=62914526

df -hT

sudo resize2fs /dev/xvda1
resize2fs 1.47.0 (5-Feb-2023)
Filesystem at /dev/xvda1 is mounted on /; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 4
The filesystem on /dev/xvda1 is now 7601915 (4k) blocks long.

df -hT
Filesystem     Type   Size  Used Avail Use% Mounted on
/dev/root      ext4    29G  5.5G   23G  20% /
tmpfs          tmpfs  2.0G     0  2.0G   0% /dev/shm
tmpfs          tmpfs  783M  1.3M  782M   1% /run
tmpfs          tmpfs  5.0M     0  5.0M   0% /run/lock
/dev/xvda16    ext4   881M  148M  672M  18% /boot
/dev/xvda15    vfat   105M  6.2M   99M   6% /boot/efi
tmpfs          tmpfs  392M   12K  392M   1% /run/user/1000
```

## EC2 > Networking > Elastic IP Addresses

An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.

- Limited to five Elastic IP addresses per account

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html

[AWS supports dynamically removing and adding auto assigned public IPv4 address](https://aws.amazon.com/about-aws/whats-new/2024/04/removing-adding-auto-assigned-public-ipv4-address/)

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

### Elastic IP address pricing

There is a charge for all Elastic IP addresses whether they are in use (allocated to a resource, like an EC2 instance) or idle (created in your account but unallocated).

AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the **Public IPv4 Address** tab on the [Amazon VPC pricing page](https://aws.amazon.com/vpc/pricing/).

### Elastic IP address basics

The following are the basic characteristics of an Elastic IP address:

- An Elastic IP address is static; it does not change over time.

- An Elastic IP address is for use in a specific Region only, and cannot be moved to a different Region.

- An Elastic IP address comes from Amazon's pool of IPv4 addresses, or from a custom IPv4 address pool that you have brought to your AWS account. We do not support Elastic IP addresses for IPv6.

- To use an Elastic IP address, you first allocate one to your account, and then associate it with your instance or a network interface.

- When you associate an Elastic IP address with an instance, it is also associated with the instance's primary network interface. When you associate an Elastic IP address with a network interface that is attached to an instance, it is also associated with the instance.

- When you associate an Elastic IP address with an instance or its primary network interface, if the instance already has a public IPv4 address associated with it, that public IPv4 address is released back into Amazon's pool of public IPv4 addresses and the Elastic IP address is associated with the instance instead. You cannot reuse the public IPv4 address previously associated with the instance and you cannot convert that public IPv4 address to an Elastic IP address. For more information, see [Public IPv4 addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses).

- You can disassociate an Elastic IP address from a resource, and then associate it with a different resource. To avoid unexpected behavior, ensure that all active connections to the resource named in the existing association are closed before you make the change. After you have associated your Elastic IP address to a different resource, you can reopen your connections to the newly associated resource.

- A disassociated Elastic IP address remains allocated to your account until you explicitly release it. You are charged for all Elastic IP addresses in your account, regardless of whether they are associated or disassociated with an instance. For more information, see the **Public IPv4 Address** tab on the [Amazon VPC pricing](https://aws.amazon.com/vpc/pricing/) page.

- When you associate an Elastic IP address with an instance that previously had a public IPv4 address, the public DNS host name of the instance changes to match the Elastic IP address.

- We resolve a public DNS host name to the public IPv4 address or the Elastic IP address of the instance outside the network of the instance, and to the private IPv4 address of the instance from within the network of the instance.

- When you allocate an Elastic IP address from an IP address pool that you have brought to your AWS account, it does not count toward your Elastic IP address limits. For more information, see [Elastic IP address quota](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-limit).

- When you allocate the Elastic IP addresses, you can associate the Elastic IP addresses with a network border group. This is the location from which we advertise the CIDR block. Setting the network border group limits the CIDR block to this group. If you do not specify the network border group, we set the border group containing all of the Availability Zones in the Region (for example, `us-west-2`).

- An Elastic IP address is for use in a specific network border group only.

[Elastic IP addresses - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)

### Changes (Migrate from ipv4 to ipv6)

Effective February 1, 2024 there will be a charge of $0.005 per IP per hour for all public IPv4 addresses, whether attached to a service or not (there is already a charge for public IPv4 addresses you allocate in your account but don’t attach to an EC2 instance).

This will cost around $4 month per IP per month

[New - AWS Public IPv4 Address Charge + Public IP Insights | AWS News Blog](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/)

[Identify and optimize public IPv4 address usage on AWS | Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/identify-and-optimize-public-ipv4-address-usage-on-aws/)

[Amazon IPv6](https://aws.amazon.com/vpc/ipv6/)

[Migrate your VPC from IPv4 to IPv6 - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html)

|Step|Notes|
|---|---|
|[Step 1: Associate an IPv6 CIDR block with your VPC and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html#vpc-migrate-ipv6-cidr)|Associate an Amazon-provided or BYOIP IPv6 CIDR block with your VPC and with your subnets.|
|[Step 2: Update your route tables](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html#vpc-migrate-ipv6-routes)|Update your route tables to route your IPv6 traffic. For a public subnet, create a route that routes all IPv6 traffic from the subnet to the internet gateway. For a private subnet, create a route that routes all internet-bound IPv6 traffic from the subnet to an egress-only internet gateway.|
|[Step 3: Update your security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html#vpc-migrate-ipv6-sg-rules)|Update your security group rules to include rules for IPv6 addresses. This enables IPv6 traffic to flow to and from your instances. If you've created custom network ACL rules to control the flow of traffic to and from your subnet, you must include rules for IPv6 traffic.|
|[Step 4: Assign IPv6 addresses to your instances](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html#vpc-migrate-assign-ipv6-address)|Assign IPv6 addresses to your instances from the IPv6 address range of your subnet.|

[Is the Public Cloud Ready for IPv6? | by Eyal Estrin ☁️ | AWS in Plain English](https://aws.plainenglish.io/is-the-public-cloud-ready-for-ipv6-ec450974fe38)

[Brace yourself, IPv6 is coming](https://supabase.com/blog/ipv6)

[Amazon EC2 instance IP addressing - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html)

## EC2 > Networking > ENI

An elastic network interface (referred to as a *network interface* in this documentation) is a logical networking component in a VPC that represents a virtual network card.

An Elastic Network Interface (ENI) is a logical networking component in a VPC that represents a virtual network card. You can create a network interface, attach it to an instance, detach it from an instance, and attach it to another instance. The ENI is the simplest networking component available on AWS and is insufficient for HPC workflows.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html

### Elastic Network Adapter (ENA)

Elastic Network Adapter (ENA) devices support enhanced networking via single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities. Although enhanced networking provides higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latencies, still EFA (Elastic Fabric Adapter) is a better fit for the given use-case because the EFA device provides all the functionality of an ENA device, plus hardware support for applications to communicate directly with the EFA device without involving the instance kernel (OS-bypass communication) using an extended programming interface.

## EC2 Launch Templates

A launch template specifies instance configuration information. It includes the ID of the Amazon Machine Image (AMI), the instance type, a key pair, security groups, and other parameters used to launch EC2 instances. If you've launched an EC2 instance before, you specified the same information to launch the instance.

When you create a Launch Template, the default value for the instance tenancy is shared and the instance tenancy is controlled by the tenancy attribute of the VPC. If you set the Launch Template Tenancy to shared (default) and the VPC Tenancy is set to dedicated, then the instances have dedicated tenancy. If you set the Launch Template Tenancy to dedicated and the VPC Tenancy is set to default, then again the instances have dedicated tenancy.

A launch template is similar to a launch configuration, in that it specifies instance configuration information such as the ID of the Amazon Machine Image (AMI), the instance type, a key pair, security groups, and the other parameters that you use to launch EC2 instances. Also, defining a launch template instead of a launch configuration allows you to have multiple versions of a template.

With launch templates, you can provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost.

[Create an Amazon EC2 launch template - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html)

### Launch Configuration

A launch configuration is an instance configuration template that an Auto Scaling group uses to launch EC2 instances. When you create a launch configuration, you specify information for the instances such as the ID of the Amazon Machine Image (AMI), the instance type, a key pair, one or more security groups, and a block device mapping.

You cannot use a launch configuration to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances.

It is not possible to modify a launch configuration once it is created in ASG.

## Placement groups for your Amazon EC2 instances

To meet the needs of your workload, you can launch a group of *interdependent* EC2 instances into a *placement group* to influence their placement.

Depending on the type of workload, you can create a placement group using one of the following placement strategies:

- **Cluster** – Packs instances close together inside an Availability Zone. This strategy enables workloads to achieve the low-latency network performance necessary for tightly-coupled node-to-node communication that is typical of high-performance computing (HPC) applications.
- **Partition** – Spreads your instances across logical partitions such that groups of instances in one partition do not share the underlying hardware with groups of instances in different partitions. This strategy is typically used by large distributed and replicated workloads, such as Hadoop, Cassandra, and Kafka.
- **Spread** – Strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.

Placement groups are optional. If you don't launch your instances into a placement group, EC2 tries to place the instances in such a way that all of your instances are spread out across the underlying hardware to minimize correlated failures.

### Pricing

There is no charge for creating a placement group.

### Rules and limitations

Before you use placement groups, be aware of the following rules:

- An instance can be placed in one placement group at a time; you can't place an instance in multiple placement groups.
- You can't merge placement groups.
- [On-Demand Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html#capacity-reservations-limits) and [zonal Reserved Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html) allow you to reserve capacity for EC2 instances in Availability Zones. When you launch an instance, if the instance attributes match those specified by an On-Demand Capacity Reservation or a zonal Reserved Instance, then the reserved capacity is automatically used by the instance. This is also true if you launch the instance into a placement group.
- You can't launch Dedicated Hosts in placement groups.
- You can't launch a Spot Instance that is configured to stop or hibernate on interruption in a placement group.

[Placement groups for your Amazon EC2 instances - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)

[Placement strategies for your placement groups - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-strategies.html)

[Choosing the Right EC2 Placement Group Type for Your Workloads \| by Brandon Damue \| Medium](https://medium.com/@dbrandonbawe/choosing-the-right-ec2-placement-group-type-for-your-workloads-3d93b6d83fc8)

## EC2 instance metadata and user data

### Instance Metadata

**Instance metadata is data about your instance that you can use to configure or manage the running instance.** Instance metadata is divided into [categories](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-categories.html), for example, host name, events, and security groups.

EC2 instance metadata is a service accessible from within EC2 instances, which allows querying or managing data about a given running instance.

It is possible to retrieve an instance’s IAM access key by accessing the `iam/security-credentials/role-name` metadata category. This returns a temporary set of credentials that the EC2 instance automatically uses for communicating with AWS services.

[Instance metadata and user data - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)

### User Data

User Data is generally used to perform common automated configuration tasks and even run scripts after the instance starts. When you launch an instance in Amazon EC2, you can pass two types of user data - **shell scripts and cloud-init directives**. You can also pass this data into the launch wizard as plain text or as a file.

**Scripts entered as user data are executed as the root user**, hence do not need the sudo command in the script. Any files you create will be owned by root; if you need non-root users to have file access, you should modify the permissions accordingly in the script.

By default, user data scripts and cloud-init directives run only **during the boot cycle when you first launch an instance**. You can update your configuration to ensure that your user data scripts and cloud-init directives run every time you restart your instance.

**Question -** A systems administration team has a requirement to run certain custom scripts only once during the launch of the Amazon Elastic Compute Cloud (Amazon EC2) instances that host their application.

**Answer -** Run the custom scripts as user data scripts on the Amazon EC2 instances

## Amazon Machine Images (AMI / AMIs)

It is used as a provisioning system, to provision a new instance with an image of the instance.

An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You must specify a source AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations.

An AMI includes the following:

- A template for the root volume for the instance (for example, an operating system, an application server, and applications)
- Launch permissions that control which AWS accounts can use the AMI to launch instances
- A block device mapping that specifies the volumes to attach to the instance when it's launched

**AMIs (Amazon Machine Images) are region-specific;** an AMI that exists in one AWS region cannot be used directly in another region, and each region has a unique AMI ID for similar images. However, users can copy AMIs across regions to make them available for global deployment.

Launch permissions that control which AWS accounts can use the AMI to launch instances.

A block device mapping that specifies the volumes to attach to the instance when it's launched.

You can copy an AMI within or across AWS Regions using the AWS Management Console, the AWS Command Line Interface or SDKs, or the Amazon EC2 API, all of which support the CopyImage action. You can copy both Amazon EBS-backed AMIs and instance-store-backed AMIs. You can copy AMIs with encrypted snapshots and also change encryption status during the copy process.

You can share an AMI with another AWS account. To copy an AMI that was shared with you from another account, the owner of the source AMI must grant you read permissions for the storage that backs the AMI, either the associated Amazon EBS snapshot (for an Amazon EBS-backed AMI) or an associated S3 bucket (for an instance store-backed AMI).

### Standard AMIs

- Ubuntu 16.04 LTS AMI - ami-2757f631
- Ubuntu 16.10 AMI - ami-b374d5a5
- Ubuntu Server 18.04 LTS (HVM), SSD Volume Type- ami-0620d12a9cf777c87 (64-bit x86) / ami-06b0afcb36d2e27ef (64-bit Arm)
- Ubuntu Server 16.04 LTS (HVM), SSD Volume Type- ami-0c28d7c6dd94fb3a7 (64-bit x86) / ami-08f567e9a6f67fbee (64-bit Arm)

## Recovery

If your instance fails a system status check, you can use Amazon CloudWatch alarm actions to automatically recover it. The recover option is available for over 90% of deployed customer Amazon EC2 instances. The Amazon CloudWatch recovery option works only for system check failures, not for instance status check failures. Also, if you terminate your instance, then it can't be recovered.

You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered. A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata. If the impaired instance is in a placement group, the recovered instance runs in the placement group.

The automatic recovery process attempts to recover your instance for up to three separate failures per day. Your instance may subsequently be retired if automatic recovery fails and a hardware degradation is determined to be the root cause for the original system status check failure.

- A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata
- If your instance has a public IPv4 address, it retains the public IPv4 address after recovery.
- If the impaired instance is in a placement group, the recovered instance runs in the same placement group.
- Terminated instances cannot be recovered
- During instance recovery, the instance is migrated during an instance reboot, and any data that is in-memory is lost.

## Connecting to EC2 instance

| Connection option             | Instance operating system | Inbound traffic rule | IAM permissions | Instance profile role | Software on instance | Software on connecting system | Key pair |
| ----------------------------- | ------------------------- | -------------------- | --------------- | --------------------- | -------------------- | ----------------------------- | -------- |
| SSH client                    | Linux                     | Yes                  | No              | No                    | No                   | Yes                           | Yes      |
| **EC2 Instance Connect**      | Linux                     | Yes                  | Yes             | No                    | Yes ¹                | No                            | No       |
| PuTTY                         | Linux                     | Yes                  | No              | No                    | No                   | Yes                           | Yes      |
| RDP client                    | Windows                   | Yes                  | No              | No                    | No                   | Yes                           | Yes ²    |
| Fleet Manager                 | Windows                   | No                   | Yes             | Yes                   | Yes ¹                | No                            | Yes      |
| **Session Manager**           | Linux, Windows            | No                   | Yes             | Yes                   | Yes ¹                | No                            | No       |
| EC2 Instance Connect Endpoint | Linux, Windows            | Yes                  | Yes             | No                    | No                   | No                            | No ³     |

[Connect to your EC2 instance - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect.html)

### Amazon EC2 Instance Connect

Amazon EC2 Instance Connect provides a secure way to connect to your Linux instances over Secure Shell (SSH). With EC2 Instance Connect, you use AWS Identity and Access Management (IAM) policies and principals to control SSH access to your instances, removing the need to share and manage SSH keys. All connection requests using EC2 Instance Connect are logged to AWS CloudTrail so that you can audit connection requests.

You can use EC2 Instance Connect to connect to your instances using the Amazon EC2 console or the SSH client of your choice.

When you connect to an instance using EC2 Instance Connect, the EC2 Instance Connect API pushes an SSH public key to the instance metadata where it remains for 60 seconds. An IAM policy attached to your user authorizes your user to push the public key to the instance metadata. The SSH daemon uses AuthorizedKeysCommand and AuthorizedKeysCommandUser, which are configured when EC2 Instance Connect is installed, to look up the public key from the instance metadata for authentication, and connects you to the instance.

[Connect to your Linux instance using a public IP address and EC2 Instance Connect - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-eic.html)

### Session Manager

Session Manager is a fully-managed AWS Systems Manager capability for managing your Amazon EC2 instances through an interactive, one-click, browser-based shell, or through the AWS CLI. You can use Session Manager to start a session with an instance in your account. After the session is started, you can run interactive commands on the instance as you would for any other connection type.

[Connect to your Amazon EC2 instance using Session Manager - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-with-systems-manager-session-manager.html)

### Amazon EC2 Instance Connect vs Session Manager

There many nuanced differences between these services but the basic idea is that EC2 Instance Connect allows for a convenient and secure native SSH connection using short-lived keys while Session Manager permits an SSH connection tunneled over a proxy connection.

The session manager agent establishes a reverse connection to the service so it is not necessary to, for example, open port 22 on the host. EC2 Instance Connect requires the host security group to permit ssh traffic inbound.

A few other things of note: EC2 Instance Connect supports only Linux EC2 hosts while Session Manager supports Windows and Linux hosts both EC2 Instances and On-prem.

[What is the difference between EC2 Instance Connect and Session Manager SSH connections? \| AWS re:Post](https://repost.aws/questions/QUnV4R9EoeSdW0GT3cKBUR7w/what-is-the-difference-between-ec2-instance-connect-and-session-manager-ssh-connections)
