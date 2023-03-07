# RPC

<https://sbdevel.wordpress.com/2009/12/17/the-case-rpc-vs-messaging>

## RPC stands for Remote Procedure Call

RPC has a greater learning curve than REST

## RPC is a mechanism that allows you to call methods on remote services as though they were methods on a local object

Remote Procedure Call is a protocol that one program can use to request a service from a program located in another computer on a network
In [distributed computing](https://en.wikipedia.org/wiki/Distributed_computing), a**remote procedure call**(**RPC**) is when a [computer program](https://en.wikipedia.org/wiki/Computer_program) causes a procedure ([subroutine](https://en.wikipedia.org/wiki/Subroutine)) to execute in a different [address space](https://en.wikipedia.org/wiki/Address_space)(commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call, without the programmer explicitly coding the details for the remote interaction. That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. This is a form of [client--server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) interaction (caller is client, executor is server), typically implemented via a [request--response](https://en.wikipedia.org/wiki/Request%E2%80%93response) message-passing system. In the [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) paradigm, RPC calls are represented by [remote method invocation](https://en.wikipedia.org/wiki/Remote_method_invocation)(RMI).
RPCs are a form of [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication)(IPC), in that different processes have different address spaces: if on the same host machine, they have distinct [virtual address spaces](https://en.wikipedia.org/wiki/Virtual_address_space), even though the physical address space is the same; while if they are on different hosts, the [physical address](https://en.wikipedia.org/wiki/Physical_address) space is different. Many different (often incompatible) technologies have been used to implement the concept.

## Message Passing in RPC

RPC is a [request--response](https://en.wikipedia.org/wiki/Request%E2%80%93response) protocol. An RPC is initiated by theclient, which sends a request message to a known remoteserverto execute a specified procedure with supplied parameters. The remote server sends a response to the client, and the application continues its process. While the server is processing the call, the client is blocked (it waits until the server has finished processing before resuming execution), unless the client sends an asynchronous request to the server, such as an XHTTP call. There are many variations and subtleties in various implementations, resulting in a variety of different (incompatible) RPC protocols.
An important difference between remote procedure calls and local calls is that remote calls can fail because of unpredictable network problems. Also, callers generally must deal with such failures without knowing whether the remote procedure was actually invoked.[Idempotent](https://en.wikipedia.org/wiki/Idempotent) procedures (those that have no additional effects if called more than once) are easily handled, but enough difficulties remain that code to call remote procedures is often confined to carefully written low-level subsystems.

## Sequence of events

1. The client calls the client [stub](https://en.wikipedia.org/wiki/Stub_(distributed_computing)). The call is a local procedure call, with parameters pushed on to the stack in the normal way.

2. The [client stub](https://en.wikipedia.org/wiki/Class_stub) packs the parameters into a message and makes a system call to send the message. Packing the parameters is called [marshalling](https://en.wikipedia.org/wiki/Marshalling_(computer_science)).

3. The client's local [operating system](https://en.wikipedia.org/wiki/Operating_system) sends the message from the client machine to the server machine.

4. The local [operating system](https://en.wikipedia.org/wiki/Operating_system) on the server machine passes the incoming packets to the [server stub](https://en.wikipedia.org/wiki/Class_skeleton).

5. The server stub unpacks the parameters from the message. Unpacking the parameters is called [unmarshalling](https://en.wikipedia.org/wiki/Unmarshalling).

6. Finally, the server stub calls the server procedure. The reply traces the same steps in the reverse direction.

## Problems with RPC

1. **Non-L**ocal Exceptions Problem2. Indirect Memory Allocation Problem

3. Blocking Calls Problem

4. Static Interface Problem

## Example - RPC Systems

1. Java RMI

2. SOAP

3. CORBA

4. NFS (Network File System)

Network File System(NFS) is a [distributed file system](https://en.wikipedia.org/wiki/Distributed_file_system) protocol originally developed by [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) (Sun) in 1984, allowing a user on a client [computer](https://en.wikipedia.org/wiki/Computer) to access files over a [computer network](https://en.wikipedia.org/wiki/Computer_network) much like local storage is accessed. NFS, like many other protocols, builds on the [Open Network Computing Remote Procedure Call](https://en.wikipedia.org/wiki/Open_Network_Computing_Remote_Procedure_Call)(ONC RPC) system. The NFS is an open standard defined in a [Request for Comments](https://en.wikipedia.org/wiki/Request_for_Comments)(RFC), allowing anyone to implement the protocol.
5. Finagle

A fault tolerant, protocol-agnostic RPC system
Finagle is an extensible RPC system for the JVM, used to construct high-concurrency servers. Finagle implements uniform client and server APIs for several protocols, and is designed for high performance and concurrency. Most of Finagle's code is protocol agnostic, simplifying the implementation of new protocols.
Finagle provides a robust implementation of:

- connection pools, with throttling to avoid TCP connection churn;
- failure detectors, to identify slow or crashed hosts;
- failover strategies, to direct traffic away from unhealthy hosts;
- load-balancers, including "least-connections" and other strategies; and
- back-pressure techniques, to defend servers against abusive clients and dogpiling.
<https://github.com/twitter/finagle>

<https://blog.twitter.com/engineering/en_us/a/2011/finagle-a-protocol-agnostic-rpc-system.html>

<https://twitter.github.io/finagle>

## Tools

## BloomRPC

BloomRPCaim to give the simplest and efficient developer experience for exploring and querying your GRPC services.

## Features

- Native GRPC calls
- Unary Calls and Server Side Streaming Support
- Client side and Bi-directional Streaming
- Automatic Input recognition
- Multi tabs operations
- Metadata support
- Persistent Workspace
- Request Cancellation
brew cask install bloomrpc
<https://github.com/uw-labs/bloomrpc>
