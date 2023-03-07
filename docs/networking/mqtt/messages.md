# Messages

MQTT has 14 different message types. Typically, end users only need to employ the CONNECT, PUBLISH, SUBSCRIBE, and UNSUBSCRIBE message types. The other message types are used for internal mechanisms and message flows.

| **MESSAGE TYPE**       | **DESCRIPTION**                                                   |
|----------------------|--------------------------------------------------|
| CONNECT                | Client request to connect to Server                               |
| CONNACK                | Connection Acknowledgement                                        |
| PUBLISH                | A message which represents a new/separate publish                 |
| PUBACK                 | QoS 1 Response to a PUBLISH message                               |
| PUBREC (Pub Received)  | First part of QoS 2 message flow                                  |
| PUBREL (Pub Release)   | Second part of QoS 2 message flow                                 |
| PUBCOMP (Pub Complete) | Last part of the QoS 2 message flow                               |
| SUBSCRIBE              | A message used by clients to subscribe to specific topics         |
| SUBACK                 | Acknowledgement of a SUBSCRIBE message                            |
| UNSUBSCRIBE            | A message used by clients to unsubscribe from specific topics     |
| UNSUBACK               | Acknowledgement of an UNSUBSCRIBE message                         |
| PINGREQ                | Heartbeat message                                                 |
| PINGRESP               | Heartbeat message acknowledgement                                 |
| DISCONNECT             | Graceful disconnect message sent by clients before disconnecting. |
