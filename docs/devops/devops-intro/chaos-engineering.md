# Chaos Engineering

Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.

## Chaos in practice

1. Start by defining 'steady state' as some measurable output of a system that indicates normal behavior.

2. Hypothesize that this steady state will continue in both the control group and the experimental group.

3. Introduce variables that reflect real world events like servers that crash, hard drives that malfunction, network connections that are severed, etc.

4. Try to disprove the hypothesis by looking for a difference in steady state between the control group and the experimental group.

## Chaos Experiments

1. Resource Exhaustion

CPU, Memory, I/O

2. The network is not reliable

3. Datastore saturation

4. DNS Unavailability

## Fault Injection/Resiliency Tools

- Chaos Monkey
- Istio
- gremlin
- Powerfulseal - <https://github.com/powerfulseal/powerfulseal>
- Litmas Chaos

<https://litmuschaos.io>

## References

<http://principlesofchaos.org>

<https://www.gremlin.com/community/tutorials/chaos-engineering-the-history-principles-and-practice>

<https://github.com/linki/chaoskube>

<https://blog.flant.com/chaos-engineering-in-kubernetes-open-source-tools>
