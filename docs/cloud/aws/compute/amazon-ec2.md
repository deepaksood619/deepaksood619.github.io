# Amazon EC2

Virtual Servers in the Cloud

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

[AWS EC2 Instance Types](ec2-instance-types)

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

## Amazon EC2 Auto Scaling Group (ASG)

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

## EC2 > Networking > Elastic IP Addresses

An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

## EC2 > Networking > ENI

An elastic network interface (referred to as a*network interface*in this documentation) is a logical networking component in a VPC that represents a virtual network card.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html

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
