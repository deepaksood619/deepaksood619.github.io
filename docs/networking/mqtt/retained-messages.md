# Retained Messages

In MQTT, the client that publishes a message has no guarantee that a subscribing client actually receives the message. The publishing client can only make sure that the message gets delivered safely to the broker. Basically, the same is true for a subscribing client. The client that connects and subscribes to topics has no guarantee on when the publishing client will publish a message in one of their topics of interest. It can take a few seconds, minutes, or hours for the publisher to send a new message in one of the subscribed topics. Until the next message is published, the subscribing client is totally in the dark about the current status of the topic. This situation is where retained messages come into play.

A retained message is a normal MQTT message with the retained flag set to true. The broker stores the last retained message and the corresponding QoS for that topic.**Each client that** subscribes to a topic pattern that matches the topic of the retained message receives the retained message immediately after they subscribe. The broker stores only one retained message per topic

Retained messages help newly-subscribed clients get a status update immediately after they subscribe to a topic. The retained message eliminates the wait for the publishing clients to send the next update

In other words, a retained message on a topic is thelast known good value. The retained message doesn't have to be the last value, but it must be the last message with the retained flag set to true.

It is important to understand that a retained message has nothing to do withpersitant session. Once a retained message is stored by the broker, there's only one way to remove it.

## Send a retained message

From the perspective of a developer, sending a retained message is quite simple and straight-forward. You just set theretained flagof a [MQTT publish message](https://www.hivemq.com/blog/mqtt-essentials-part-4-mqtt-publish-subscribe-unsubscribe/) to true. Typically, your client library provides an easy way to set this flag.

## Delete a retained message

There is also a very simple way to delete the retained message of a topic: send a retained message with a zero-byte payload on the topic where you want to delete the previous retained message. The broker deletes the retained message and new subscribers no longer get a retained message for that topic. Frequently, it is not even necessary to delete, because each new retained message overwrites the previous one.

## Why and when should you use Retained Messages?

A retained message makes sense when you want newly-connected subscribers to receive messages immediately (without waiting until a publishing client sends the next message). This is extremely helpful for status updates of components or devices on individual topics. For example, the status of device1 is on the topicmyhome/devices/device1/status. When retained messages are used, new subscribers to the topic get the status (online/offline) of the device immediately after they subscribe. The same is true for clients that send data in intervals, temperature, GPS coordinates, and other data. **Without retained messages, new subscribers are kept in the dark between publish intervals.** Using retained messages helps provide the last good value to a connecting client immediately.

### References

<https://www.hivemq.com/blog/mqtt-essentials-part-8-retained-messages>
