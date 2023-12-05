# Keep Alive & Client Take-Over

## The problem of half-open TCP connections

[MQTT is based on the Transmission Control Protocol (TCP)](https://www.hivemq.com/blog/mqtt-essentials-part-3-client-broker-connection-establishment/). This protocol ensures that packets are transferred over the internet in a ["reliable, ordered, and error-checked"](http://en.wikipedia.org/wiki/Transmission_Control_Protocol) way. Nevertheless, from time to time, the transfer between communicating parties can get out of sync. For example, if one of the parties crashes or has transmission errors. In TCP, this state of incomplete connection is called a [half-open connection](http://en.wikipedia.org/wiki/TCP_half-open). The important point to remember is that one side of the communication continues to function and is not notified about the failure of the other side. The side that is still connected keeps trying to send messages and waits for acknowledgements.
As Andy Stanford-Clark (the inventor of the MQTT protocol) points out, the problem with half-open connections increases in mobile networks:

"Although TCP/IP in theory notifies you when a socket breaks, in practice, particularly on things like mobile and satellite links, which often "fake" TCP over the air and put headers back on at each end, it's quite possible for a TCP session to "black hole", i.e. it appears to be open still, but in fact is just dumping anything you write to it onto the floor."

## MQTT Keep Alive

MQTT includes a keep alive function that provides a workaround for the issue of half-open connections (or at least makes it possible to assess if the connection is still open).

Keep alive ensures that the connection between the broker and client is still open and that the broker and the client are aware of being connected.When the client establishes a connection to the broker, the client communicates a time interval in seconds to the broker. This interval defines the maximum length of time that the broker and client may not communicate with each other.

The MQTT specification says the following:

"The Keep Alive ... is the maximum time interval that is permitted to elapse between the point at which the Client finishes transmitting one Control Packet and the point it starts sending the next. It is the responsibility of the Client to ensure that the interval between Control Packets being sent does not exceed the Keep Alive value. In the absence of sending any other Control Packets, the Client MUST send a PINGREQ Packet."

As long as messages are exchanged frequently and the keep-alive interval is not exceeded, there is no need to send an extra message to establish whether the connection is still open.

If the client does not send a messages during the keep-alive period, it must send a PINGREQ packet to the broker to confirm that it is available and to make sure that the broker is also still available.

The broker must disconnect a client that does not send a message or a PINGREQ packet in one and a half times the keep alive interval.Likewise, the client is expected to close the connection if it does not receive a response from the broker in a reasonable amount of time.

This allows the broker to detect a half-open connection and close the connection to the (already disconnected) client if the keepAlive value is exceeded by more than 150% of the value.

## Keep Alive Flow

## PINGREQ

The PINGREQ is sent by the client and indicates to the broker that the client is still alive. If the client does not send any other type of packets (for example, a PUBLISH or SUBSCRIBE packet), the client must send a PINGREQ packet to the broker. The client can send a PINGREQ packet any time it wants to confirm that the network connection is still alive. The PINGREQ packet does not contain a payload.

## PINGRESP

When the broker receives a PINGREQ packet, the broker must reply with a PINGRESP packet to show the client that it is still available. The PINGRESP packet also does not contain a payload.

## Good to Know

- If the broker does not receive a PINGREQ or any other packet from a client, the broker closes the connection and sends the [last will and testament message](https://www.hivemq.com/blog/mqtt-essentials-part-9-last-will-and-testament/)(if the client specified an LWT).
- It is the responsibility of the MQTT client to set an appropriate keep alive value. For example, the client can adjust the keep-alive interval to its current signal strength.
- The maximum keep alive is 65535 seconds (18h 12min 15 sec).
- If the keep alive interval is 0, the keep alive mechanism is deactivated.

## Client Take-Over

Usually, a disconnected client tries to reconnect. Sometimes, the broker still has an half-open connection for the client. In MQTT, if the broker detects a half-open connection, it performs a 'client take-over'. The broker closes the previous connection to the same client (determined by the client identifier), and establishes a new connection with the client. This behavior ensures that the half-open connection does not stop the disconnected client from re-establishing a connection.

## References

https://www.hivemq.com/blog/mqtt-essentials-part-10-alive-client-take-over
