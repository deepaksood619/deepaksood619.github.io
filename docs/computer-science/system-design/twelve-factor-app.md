# Twelve-Factor App

In the modern era, software is commonly delivered as a service: calledweb apps, orsoftware-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:

- Use **declarativeformats** for setup automation, to minimize time and cost for new developers joining the project
- Have a**clean contract** with the underlying operating system, offering**maximum portability** between execution environments
- Are suitable for **deployment** on modern**cloud platforms**, obviating the need for servers and systems administration
- **Minimize divergence** between development and production, enabling**continuous deployment** for maximum agility
- And can**scale up** without significant changes to tooling, architecture, or development practices
The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).
These best practices are designed to enable applications to be built with portability and resilience when deployed to [the web](https://en.wikipedia.org/wiki/The_web).
| **#** | **Factor**              | **Description**                                                                                                     |
|---------|-------------|--------------------------------------------------|
| I      | **Codebase**            | There should be exactly one codebase for a deployed service with the codebase being used for many deployments.      |
| II     | **Dependencies**        | All dependencies should be declared, with no implicit reliance on system tools or libraries.                        |
| III    | **Config**              | Configuration that varies between deployments should be stored in the environment.                                  |
| IV     | **Backing services**    | All backing services are treated as attached resources and attached and detached by the execution environment.      |
| V      | **Build, release, run** | The delivery pipeline should strictly consist of build, release, run.                                               |
| VI     | **Processes**           | Applications should be deployed as one or more stateless processes with persisted data stored on a backing service. |
| VII    | **Port binding**        | Self-contained services should make themselves available to other services by specified ports.                      |
| VIII   | **Concurrency**         | Concurrency is advocated by scaling individual processes.                                                           |
| IX     | **Disposability**       | Fast startup and shutdown are advocated for a more robust and resilient system.                                     |
| X      | **Dev/Prod parity**     | All environments should be as similar as possible.                                                                  |
| XI     | **Logs**                | Applications should produce logs as event streams and leave the execution environment to aggregate.                 |
| XII    | **Admin Processes**     | Any needed admin tasks should be kept in source control and packaged with the application.                          |
References

<https://12factor.net>
