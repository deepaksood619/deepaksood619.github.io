# docker-compose

## Commands

Define and run multi-container applications with Docker.

### Installation

```bash
brew install docker-compose

sudo apt install docker-compose
```

### Usage

```bash
docker-compose [-f <arg>...] [options] [COMMAND] [ARGS...]
docker-compose -h|--help
```

### Options

```bash
-f, --file FILE             Specify an alternate compose file
                            (default: docker-compose.yml)
-p, --project-name NAME     Specify an alternate project name
                            (default: directory name)
--verbose                   Show more output
--log-level LEVEL           Set log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
--no-ansi                   Do not print ANSI control characters
-v, --version               Print version and exit
-H, --host HOST             Daemon socket to connect to
--tls                       Use TLS; implied by --tlsverify
--tlscacert CA_PATH         Trust certs signed only by this CA
--tlscert CLIENT_CERT_PATH  Path to TLS certificate file
--tlskey TLS_KEY_PATH       Path to TLS key file
--tlsverify                 Use TLS and verify the remote
--skip-hostname-check       Don't check the daemon's hostname against the
                            name specified in the client certificate
--project-directory PATH    Specify an alternate working directory
                            (default: the path of the Compose file)
--compatibility             If set, Compose will attempt to convert deploy
                            keys in v3 files to their non-Swarm equivalent
```

### Commands

```bash
build              Build or rebuild services
    docker-compose up --build kafka-consumer
    docker-compose up --no-build zenalytix-dev
  bundle             Generate a Docker bundle from the Compose file
config             Validate and view the Compose file
    docker-compose config | less
  create             Create services
down               Stop and remove containers, networks, images, and volumes
events             Receive real time events from containers
exec               Execute a command in a running container
help               Get help on a command
images             List images
kill               Kill containers
logs               View output from containers
    docker-compose logs
    docker-compose logs --tail 10 --follow
    ^S and ^Q to pause/resume log output
  pause              Pause services
port               Print the public port for a port binding
ps                 List containers
pull               Pull service images
push               Push service images
restart            Restart services
    Restarts all stopped and running services.
    Usage: restart [options] [SERVICE...]
  rm                 Remove stopped containers
run                Run a one-off command
scale              Set number of containers for a service
start              Start services
stop               Stop services
    docker-compose stop <service_name>
top                Display the running processes
unpause            Unpause services
up                 Create and start containers
version            Show the Docker-Compose version information
```

## Environment file priority

When you set the same environment variable in multiple files, here's the priority used by Compose to choose which value to use:

1. Compose file
2. Shell environment variables
3. Environment file
4. Dockerfile
5. Variable is not defined

When **.env** file is present in the folder docker-compose command is executed, those environment variables are used as environment variables for **docker-compose execution and variable substitution.**

However when you define **env_file** option to your service, the service will get those variables from the file as **environment variables** and those are not used for variable substitution.

## Updates

- **Version 3**

  Designed to be cross-compatible between Compose and the Docker Engine's [swarm mode](https://docs.docker.com/engine/swarm/), version 3 removes several options and adds several more.

    - Removed: volume_driver, volumes_from, cpu_shares, cpu_quota, cpuset, mem_limit, memswap_limit, extends, group_add. See the [upgrading](https://docs.docker.com/compose/compose-file/compose-versioning/#upgrading) guide for how to migrate away from these. (For more information onextends, see [Extending services](https://docs.docker.com/compose/extends/#extending-services).)

    - Added: [deploy](https://docs.docker.com/compose/compose-file/#deploy)

- **Version 3.3**
    - Docker Engine version17.06.0+, and higher.
    - [buildlabels](https://docs.docker.com/compose/compose-file/#build)
    - [credential_spec](https://docs.docker.com/compose/compose-file/#credentialspec)
    - [configs](https://docs.docker.com/compose/compose-file/#configs)
    - [deployendpoint_mode](https://docs.docker.com/compose/compose-file/#endpointmode)

- **Version 3.4**
    - Docker Engine version17.09.0and higher.
    - targetandnetworkin [build configurations](https://docs.docker.com/compose/compose-file/#build)
    - start_periodfor [healthchecks](https://docs.docker.com/compose/compose-file/#healthcheck)
    - orderfor [update configurations](https://docs.docker.com/compose/compose-file/#update_config)
    - namefor [volumes](https://docs.docker.com/compose/compose-file/#volume-configuration-reference)

- **Version 3.5**
    - Docker Engine version17.12.0and higher.
    - [isolation](https://docs.docker.com/compose/compose-file/compose-versioning/#isolation) in service definitions
    - namefor networks, secrets and configs
    - shm_sizein [build configurations](https://docs.docker.com/compose/compose-file/compose-versioning/#build)

- **Version 3.6**
    - Docker Engine version18.02.0and higher.
    - [tmpfssize](https://docs.docker.com/compose/compose-file/compose-versioning/#long-syntax-3) fortmpfs-type mounts

- **Version 3.7**
    - Docker Engine version18.06.0and higher.
    - [init](https://docs.docker.com/compose/compose-file/compose-versioning/#init) in service definitions
    - [rollback_config](https://docs.docker.com/compose/compose-file/compose-versioning/#rollback_config) in deploy configurations
    - Support for extension fields at the root of service, network, volume, secret and config definitions

## Preventing Duplicate Builds in Docker Compose

When multiple services in a `docker-compose.yml` file (like an API and a UI) share the same Dockerfile, Docker Compose will try to build and export the image multiple times by default. Even though Docker's layer caching prevents rebuilding the actual steps, the metadata and export process still run twice, wasting time. To fix this, you designate one "primary" service to handle the `build` process and explicitly give it an `image` name. For the other services, you completely remove the `build` block, reference that exact same `image` name, and use `depends_on` to ensure the primary service builds it first.

### The Code Pattern

Here is the quick reference for how to structure your `docker-compose.yml`:

**0. Using Shared builds if depends_on not possible**

```yaml
# 1. Define a reusable build block using a YAML anchor
x-shared-image: &shared-image
	context: .
	args:
		APP_ENV: ${APP_ENV:-development}

services:
	app:
		build: *shared-build
```

**1. The Primary Service (Handles the Build)**

```yaml
services:
  app:
    container_name: app
    build:
      context: .
      args:
        APP_ENV: ${APP_ENV:-development}
    # Explicitly name the image here
    image: shared-image:${APP_ENV:-development}
    ports:
      - "8000:8000"
```

**2. The Dependent Service (Reuses the Image)**

```yaml
  ui:
    container_name: ui
    # NO build block here!
    # Reuse the exact same image name from the app service
    image: shared-image:${APP_ENV:-development}
    depends_on:
      app:
        condition: service_started # or service_healthy
    ports:
      - "8501:8501"
```

## Tips

- No variable sustitution for keys in docker-compose
- Can use default and err with variables
    - $VARIABLE:-default evaluates to default if VARIABLE is unset or empty in the environment.
    - $VARIABLE-default evaluates todefaultonly if VARIABLE is unset in the environment.
    - $VARIABLE:?err exits with an error message containing err if VARIABLE is unset or empty in the environment.
    - $VARIABLE?err exits with an error message containing err if VARIABLE is unset in the environment.
- You can use a `$$` (double-dollar sign) when your configuration needs a literal dollar sign. This also prevents Compose from interpolating a value, so a `$$` allows you to refer to environment variables that you don't want processed by Compose.
- Two different docker networks cannot access each other services

## References

- https://docs.docker.com/compose/compose-file
- https://docs.docker.com/compose/reference/up
- https://docs.docker.com/compose/compose-file/compose-versioning
