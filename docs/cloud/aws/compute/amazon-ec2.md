# Amazon EC2

Virtual Servers in the Cloud

### installing docker in ubuntu ec2 instance

[Ubuntu \| Docker Docs](https://docs.docker.com/engine/install/ubuntu/)

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
*/5 * * * * /home/ubuntu/deploy.sh

*/5 * * * * /home/ubuntu/deploy.sh >> /var/log/deploy.log 2>&1

touch /var/log/deploy.log
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
```

## Amazon EC2 Auto Scaling Group (ASG)

Scale Compute Capacity to Meet Demand

[Amazon EC2 Auto Scaling lifecycle hooks - Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html?icmpid=docs_ec2as_help_panel)

## EC2 > Networking > Elastic IP Addresses

An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

An Elastic IP address is a public IPv4 address, which is reachable from the internet. If your instance does not have a public IPv4 address, you can associate an Elastic IP address with your instance to enable communication with the internet; for example, to connect to your instance from your local computer.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

## EC2 > Networking > ENI

An elastic network interface (referred to as a*network interface*in this documentation) is a logical networking component in a VPC that represents a virtual network card.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html
