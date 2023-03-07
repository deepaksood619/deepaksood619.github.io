# Service Configuration Reference

1. build

Configuration options that are applied at build time.

1. context

Either a path to a directory containing a Dockerfile, or a url to a git repository

2. dockerfile

Alternate Dockerfile

3. args

Add build arguments, which are environment variables accessible only during the build process

4. cache_from

A list of images that the engine uses for cache resolution

5. labels

Add metadata to the resulting image using [Docker labels](https://docs.docker.com/engine/userguide/labels-custom-metadata/). You can use either an array or a dictionary.

6. shm_size

Set the size of the/dev/shmpartition for this build's containers. Specify as an integer value representing the number of bytes or as a string expressing a [byte value](https://docs.docker.com/compose/compose-file/#specifying-byte-values).

7. target

Build the specified stage as defined inside theDockerfile

2. cap_add, cap_drop

Add or drop container capabilities

3. command

Override the default command.

4. configs

Grant access to configs on a per-service basis using the per-serviceconfigsconfiguration.

5. cgroup_parent

Specify an optional parent cgroup for the container.

6. container_name

Specify a custom container name, rather than a generated default name.

7. credential_spec

Configure the credential spec for managed service account.

8. deploy

Specify configuration related to the deployment and running of services. This only takes effect when deploying to a [swarm](https://docs.docker.com/engine/swarm/) with [docker stack deploy](https://docs.docker.com/engine/reference/commandline/stack_deploy/), and is ignored bydocker-compose upanddocker-compose run.

1. endpoint_mode (vip / dnsrr)

Specify a service discovery method for external clients connecting to a swarm.

2. lables

Specify labels for the service. These labels are *only*set on the service, and *not*on any containers for the service.

3. mode

Eitherglobal(exactly one container per swarm node) orreplicated(a specified number of containers). The default isreplicated.

4. placement

Specify placement of constraints and preferences.

5. replicas

If the service isreplicated(which is the default), specify the number of containers that should be running at any given time.

6. resources

Configures resource constraints.

deploy:
resources:
limits:
cpus: '0.50'
memory: 50M
reservations:
cpus: '0.25'
memory: 20M

7. Out Of Memory Exceptions (OOME)

If your services or containers attempt to use more memory than the system has available, you may experience an Out Of Memory Exception (OOME) and a container, or the Docker daemon, might be killed by the kernel OOM killer.

8. restart_policy

Configures if and how to restart containers when they exit. Replaces [restart](https://docs.docker.com/compose/compose-file/compose-file-v2/#orig-resources).

- condition - none/on-failure/any (default: any)
- delay
- max_attempts
- window

9. rollback_config

10. update_config

9. devices

10. depends_on

11. dns

12. dns_search

13. tmpfs

14. entrypoint

15. env_file

16. environment

17. expose

18. external_links

19. extra_hosts

20. healthcheck

21. image

22. init

23. isolation

24. labels

25. links

26. logging

27. network_mode

28. networks

- aliases

- ipv4, ipv6 addresses

29. pid

30. ports

31. secrets

32. security_opt

33. stop_grace_period

34. stop_signal

35. sysctls

sysctls:
net.core.somaxconn: 1024
net.ipv4.tcp_syncookies: 0

36. ulimits

37. userns_mode

38. volumes

39. restart

40. domainname, hostname, ipc, mac_address, privileged, read_only, shm_size, stdin_open, tty, user, working_dir

Not supported for docker stack deploy

- [build](https://docs.docker.com/compose/compose-file/#build)
- [cgroup_parent](https://docs.docker.com/compose/compose-file/#cgroup_parent)
- [container_name](https://docs.docker.com/compose/compose-file/#container_name)
- [devices](https://docs.docker.com/compose/compose-file/#devices)
- [tmpfs](https://docs.docker.com/compose/compose-file/#tmpfs)
- [external_links](https://docs.docker.com/compose/compose-file/#external_links)
- [links](https://docs.docker.com/compose/compose-file/#links)
- [network_mode](https://docs.docker.com/compose/compose-file/#network_mode)
- [restart](https://docs.docker.com/compose/compose-file/#restart)
- [security_opt](https://docs.docker.com/compose/compose-file/#security_opt)
- [stop_signal](https://docs.docker.com/compose/compose-file/#stop_signal)
- [sysctls](https://docs.docker.com/compose/compose-file/#sysctls)
- [userns_mode](https://docs.docker.com/compose/compose-file/#userns_mode)

## References

<https://docs.docker.com/compose/compose-file>
