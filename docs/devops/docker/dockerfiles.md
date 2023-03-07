# Dockerfiles

Creating portable images

Dockerfile defines what goes on in the environment inside your container. Access to resources like networking interfaces and disk drives is virtualized inside this environment, which is isolated from the rest of your system, so you need to map ports to the outside world, and be specific about what files you want to "copy in" to that environment. However, after doing that, you can expect that the build of your app defined in thisDockerfilebehaves exactly the same wherever it runs.

## Docker build command

`docker build -t friendlyhello .`

## Best Practices for writing Dockerfiles

1. Create ephemeral containers
2. Understand build context
3. Pipe Dockerfile through stdin
4. Exclude with .dockerignore
5. Use multi-stage builds
6. Don't install unnecessary packages
7. Decouple applications
8. Minimize the number of layers
9. Sort multi-line arguments
10. Leverage build cache

## Dockerfile instructions

1. FROM
   `FROM python:3.7.2-slim`

2. LABEL
3. RUN

   - APT-GET
   - USING PIPES

4. CMD

   `CMD [ "python", "logger.py" ]`

5. EXPOSE
6. ARG

   The ARG instruction defines a variable that users can pass at build-time to the builder with the `docker build` command using the `--build-arg <varname>=<value>` flag.

7. ENV
8. ADD or COPY

   ADD logger.py logger.py

   `COPY` takes in asrcanddestination. It only lets you copy in a local file or directory from your host (the machine building the Docker image) into the Docker image itself

   `ADD` lets you do that too, but it also supports 2 other sources. First, you can use a URL instead of a local file / directory. Secondly, you can extract a tar file from the source directly into the destination

9. ENTRYPOINT
10. VOLUME
11. USER
12. WORKDIR
13. ONBUILD

- RUN executes command(s) in a new layer and creates a new image. E.g., it is often used for installing software packages.
- CMD sets default command and/or parameters, which can be overwritten from command line when docker container runs.
- ENTRYPOINT configures a container that will run as an executable.

- Shell & Exec form

<http://goinbigdata.com/docker-run-vs-cmd-vs-entrypoint>

<https://docs.docker.com/develop/develop-images/dockerfile_best-practices>

<https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices>

## Advanced

<https://www.docker.com/blog/advanced-dockerfiles-faster-builds-and-smaller-images-using-buildkit-and-multistage-builds>

<https://sysdig.com/blog/dockerfile-best-practices>

[Building Small Containers (Kubernetes Best Practices)](https://www.youtube.com/watch?v=wGz_cbtCiEA)
