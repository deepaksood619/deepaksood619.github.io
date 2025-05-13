# Chaos Engineering

Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.

## Chaos in practice

1. Start by defining 'steady state' as some measurable output of a system that indicates normal behavior.
2. Hypothesize that this steady state will continue in both the control group and the experimental group.
3. Introduce variables that reflect real world events like servers that crash, hard drives that malfunction, network connections that are severed, etc.
4. Try to disprove the hypothesis by looking for a difference in steady state between the control group and the experimental group.

## Chaos Experiments

1. Resource Exhaustion - CPU, Memory, I/O
2. The network is not reliable
3. Datastore saturation
4. DNS Unavailability

## Fault Injection/Resiliency Tools

- Chaos Monkey
- Istio
- gremlin - [Reliability Testing & Chaos Engineering | Gremlin](https://www.gremlin.com/)
- Powerfulseal - https://github.com/powerfulseal/powerfulseal
- Litmus Chaos - https://litmuschaos.io

### Chaos Monkey

Chaos Monkey is a resiliency tool that helps applications tolerate random instance failures.

Chaos Monkey randomly terminates virtual machine instances and containers that run inside of your production environment. Exposing engineers to failures more frequently incentivizes them to build resilient services.

Chaos Monkey is an example of a tool that follows the [Principles of Chaos Engineering](http://principlesofchaos.org/)

https://github.com/Netflix/chaosmonkey

## References

http://principlesofchaos.org

https://www.gremlin.com/community/tutorials/chaos-engineering-the-history-principles-and-practice

https://github.com/linki/chaoskube

https://blog.flant.com/chaos-engineering-in-kubernetes-open-source-tools
