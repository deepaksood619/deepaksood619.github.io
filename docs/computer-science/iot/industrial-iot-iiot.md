# Industrial IoT (IIoT)

## Reference Architecure

![image](../../media/Industrial-IoT-(IIoT)-image1.jpg)

## Sensors

- Pressure
- Temperature
- Moisure
- Air flow
- Acceleration
- Position/Velocity
- Proximity

## Actuators

## Control Systems

Industrial Control Systems (ICSs) are used to monitor and control the processes and interactions between sensors and actuators.

### PLC

Programmable Logic Controller

- An Industrial computer used for automation of (often electromechanical) processes.
- Often programmed with IEC 61131-3 languages such as Ladder Logic and Structured Text.
- Continuously monitors input and determines necessary output based on programmed logic.
- Similar to Programmable Automation Controllers (which can be programmed in languages like C, in addition to ladder logic).

### SCADA

Supervisory Control and Data Acquisition

- Provides supervisory-level control over a larger-scale "system of systems" (e.g. systems that span over multiple areas of the plant rather than one local set of processes).
- Often includes HMI / SCADA systems, remote terminal units, and local operator interfaces.
- Evolved with the Industrial Internet of Things to allow for near-real-time state reports and increased security over more standard protocols such as OPC UA.

### DCS

Distributed Control System

- Distributes elements of control across the system itself, rather than centralizing these through a single controller.
- Generally used to control continuous plant processes (e.g. chemical production).
- Increased Human-Machine Interface accessibility could simplify access, but could increase security concerns as well.

## Protocols

### MQTT

A publish-subscribe protocol used over TCP/IP.

Lightweight, low code footprint, minimal bandwidth.

### CoAP

Constrained Application Protocol

Application layer protocol used for constrained (low-power, low-memory, etc.) nodes and networks.

### AMQP

Advanced Message Queuing Protocol

Application layer, wire-level protocol that supports a variety of messaging patterns.

### HTTP/2

Updated version of Hypertext Transfer Protocol

Built with HTTP 1.1 compatibility and performance enhancement in mind.

### IPv6

Internet Protocol Version 6

Updated version of the Internet Protocol Version 4, necessary for assigning unique addresses to the rapidly growing number of machines connected to the Internet (due partially to the increase of Things and M2M connections).

### 6LoWPAN

IPv6 over Low power Wireless Personal Area Networks

The 6LoWPAN group has defined encapsulation and header compression mechanisms that allow IPv6 packets to be sent and received over IEEE 802.15.4 based networks.

## References

Industrial Internet - DZone Guide

Industrial Internet Reference Architecture

[A Technical Exploration of IoT's Impact on Manufacturing](https://www.linkedin.com/pulse/technical-exploration-iots-impact-manufacturing-ankush-rana-obuac/)

Digital Factory - [Altizon Inc. – Industrial Internet of Things (IIoT) Platform](https://altizon.com/)
