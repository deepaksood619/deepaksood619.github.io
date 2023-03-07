# Docker Commands

## Installation

```bash
sudo apt-get update

sudo apt-get -y install docker.io

~~--add-host="" : Add a line to /etc/hosts (host:IP)~~

<https://docs.docker.com/engine/install/ubuntu>

sudo service docker start

sudo usermod -a -G docker ubuntu

sudo apt install docker-compose
```

## Containers

### List

```bash
docker image ls -all #show all images
docker container ls --all #show all containers
docker info #Display system-wide information

docker info --format '{{.LoggingDriver}}'
```

### Lifecycle

- [docker create](https://docs.docker.com/engine/reference/commandline/create) creates a container but does not start it.
- [docker rename](https://docs.docker.com/engine/reference/commandline/rename/) allows the container to be renamed.
- [docker run](https://docs.docker.com/engine/reference/commandline/run) creates and starts a container in one operation.

--env, -e = Set environment variables

```bash
docker run <image_name>

# override entrypoint
docker run --rm -it --entrypoint /bin/bash cr0hn/festin
docker run --rm -it -p=8080:8080 inventree/inventree
```

- [docker rm](https://docs.docker.com/engine/reference/commandline/rm) deletes a container.
- [docker update](https://docs.docker.com/engine/reference/commandline/update/) updates a container's resource limit

## Starting and Stopping

- [docker start](https://docs.docker.com/engine/reference/commandline/start) starts a container so it is running
- [docker stop](https://docs.docker.com/engine/reference/commandline/stop) stops a running container
- [docker restart](https://docs.docker.com/engine/reference/commandline/restart) stops and starts a container
- [docker pause](https://docs.docker.com/engine/reference/commandline/pause/) pauses a running container, "freezing" it in place
- [docker unpause](https://docs.docker.com/engine/reference/commandline/unpause/) will unpause a running container
- [docker wait](https://docs.docker.com/engine/reference/commandline/wait) blocks until running container stops
- [docker kill](https://docs.docker.com/engine/reference/commandline/kill) sends a SIGKILL to a running container
- [docker attach](https://docs.docker.com/engine/reference/commandline/attach) will connect to a running container

## Info

- [docker ps](https://docs.docker.com/engine/reference/commandline/ps) shows running containers.

Options:

-s (for getting docker ip)

- [docker logs](https://docs.docker.com/engine/reference/commandline/logs) gets logs from container. (You can use a custom log driver, but logs is only available forjson-fileandjournaldin 1.10).

Options:

--details Show extra details provided to logs

-f, --follow Follow log output

--since string Show logs since timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)

--tail string Number of lines to show from the end of the logs (default "all")

-t, --timestamps Show timestamps

--until string Show logs before a timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)

### Example

```bash
docker logs -t --since 2018-08-02T00:00:00 example-prod

docker logs --timestamps --since='2019-04-22T14:40:36.750121287Z' --until='2019-04-22T15:30:36.750121287Z' kafkaconsumer_kafka-smap-consumer.1.7uq0n8eysgxf5wnx0pbu4lwcx

docker logs smap-archiver > stdout.log 2>stderr.log
```

- **[docker inspect](https://docs.docker.com/engine/reference/commandline/inspect) looks at all the info on a container (including IP address).**
- [docker events](https://docs.docker.com/engine/reference/commandline/events) gets events from container.
- [docker port](https://docs.docker.com/engine/reference/commandline/port) <container_name>shows public facing port of container.
- **[docker top](https://docs.docker.com/engine/reference/commandline/top) shows running processes in container.**
  - docker top <container_name>
- **[docker stats](https://docs.docker.com/engine/reference/commandline/stats) shows containers' resource usage statistics.**
- [docker diff](https://docs.docker.com/engine/reference/commandline/diff) shows changed files in the container's FS.
- **docker secret** - Manage docker secrets
  - create, inspect, ls, rm

## Images

Images are just [templates for docker containers](https://docs.docker.com/engine/understanding-docker/#how-does-a-docker-image-work).

<https://hub.docker.com/r/ealen/echo-server>

<https://hub.docker.com/_/hello-world>

### Lifecycle

- [docker images](https://docs.docker.com/engine/reference/commandline/images) shows all images.
- [docker import](https://docs.docker.com/engine/reference/commandline/import) creates an image from a tarball.
- **[docker build](https://docs.docker.com/engine/reference/commandline/build) creates image from Dockerfile.**

`docker build -t <image-tag> .`

`docker build -f docker/Dockerfile.dev -t partners-api:latest .`

- [docker commit](https://docs.docker.com/engine/reference/commandline/commit) creates image from a container, pausing it temporarily if it is running.
- [docker rmi](https://docs.docker.com/engine/reference/commandline/rmi) removes an image.
- [docker load](https://docs.docker.com/engine/reference/commandline/load) loads an image from a tar archive as STDIN, including images and tags (as of 0.7).
- [docker save](https://docs.docker.com/engine/reference/commandline/save) saves an image to a tar archive stream to STDOUT with all parent layers, tags & versions (as of 0.7).
- docker push

`docker push gcr.io/example-data-archiver/azure-vote-front:v1`

### Info

- **[docker history](https://docs.docker.com/engine/reference/commandline/history) shows history of image.**
- [docker tag](https://docs.docker.com/engine/reference/commandline/tag) tags an image to a name (local or registry).

```bash
sudo docker tag monolith:1.0.0 deepaksood619/monolith:1.0.0

docker tag azure-vote-front gcr.io/example-data-archiver/azure-vote-front:v1
```

## Network

```bash
- docker network connect - Connect a container to a network
- docker network create - Create a network

docker network create --subset=172.18.0.0/16 example-docker

- docker network disconnect - Disconnect a container from a network
- docker network inspect - Display detailed information on one or more networks
- docker network ls - List networks
- docker network prune - Remove all unused networks
- docker network rm - Remove one or more networks
```

## Volumes

```bash
cd /var/lib/docker/volumes/druid-volume/_data/segment-cache

| [docker volume create](https://docs.docker.com/engine/reference/commandline/volume_create/)   | Create a volume                                     |
|------------------------|------------------------------------------------|
| [docker volume inspect](https://docs.docker.com/engine/reference/commandline/volume_inspect/) | Display detailed information on one or more volumes |
| [docker volume ls](https://docs.docker.com/engine/reference/commandline/volume_ls/)           | List volumes                                        |
| [docker volume prune](https://docs.docker.com/engine/reference/commandline/volume_prune/)     | Remove all unused local volumes                     |
| [docker volume rm](https://docs.docker.com/engine/reference/commandline/volume_rm/)           | Remove one or more volumes                          |
```

## Docker CLI

`docker cp <containerId>:/file/path/within/container /host/path/target`

## Cleanup Commands

```bash
- docker stop $(docker ps -aq) #stop all running containers
- docker rmi $(docker images -q) #Delete all images
- docker rm -f $(docker ps -a -q) #Delete all containers
- docker-compose config #Check if environment variables are loaded in source
- docker ps -aq -f status=exited #Show all stopped containers

- **docker rm $(docker ps -a -f status=exited -q) #docker-remove-exited-containers**

- docker volume prune #remove docker volumes
- docker volume rm $(docker volume ls -f dangling=true -q) #docker-remove-dangling-volumes
- docker images -qf dangling=true | xargs docker rmi #remove all dangling images

- **docker images -q | xargs docker rmi #remove all unused images**
- **docker builder prune -f**

- docker system prune -a #clean all, Can kill container in kubernetes cluster

## Kubernetes Cleanup Commands

- **docker system df #check volume status (docker sizes)**

- docker container prune
- docker image prune -a
```

<https://github.com/onfido/k8s-cleanup>

## Base Commands

```bash
- docker run --rm -it -v $PWD:/build ubuntu:18.04 #create a docker image of ubuntu:18.04
- docker run --rm -it ubuntu:18.04 #create a docker image of ubuntu:18.04
- docker run --rm -it exampletech/react-awscli:1.0.0 /bin/sh
- docker run --rm -it -p=8080:8080 volttron_docker_image /bin/bash
- docker commit suspicious_wescoff volttron_docker_image
- docker run -i -t volttron_docker_image /bin/bash
- Exit a container - CTRL + D
- docker run -it --network="host" --name mynodered nodered/node-red-docker #for binding docker to localhost, published ports doesn't work when --network="host" is used
```

## Other Commands

```bash
- docker exec -it --user root temp-emqx /bin/sh #get inside docker container as user root
- whoami #get logged in user inside docker container
- sudo systemctl restart docker (When docker gets hanged)
```

## Scaling

```bash
docker-compose up -d --scale tasks_runner=5
# don't use container_name in docker-compose
```
