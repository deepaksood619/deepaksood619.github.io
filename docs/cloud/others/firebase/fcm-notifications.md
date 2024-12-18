# FCM Notifications

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

### Notifications to web

[https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial/](https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial/)

## Message delivery reports

You can evaluate whether the messages you send reach your users. In the [Reports](https://console.firebase.google.com/project/_/notification/reporting?authuser=1) tab in the Firebase console, you can view the following data for messages sent to Android or iOS FCM SDKs, including those sent via the Notifications composer and the FCM APIs:

- **Sends -** The data message or notification message has been enqueued for delivery or has been successfully passed to a third-party service like APNs for delivery. See [lifetime of a message](https://firebase.google.com/docs/cloud-messaging/concept-options?authuser=1#lifetime) for more information.
- **Received (available only on Android devices) -** The data message or notification message has been received by the app. This data is available when the receiving Android device has FCM SDK 18.0.1 or higher installed.
- **Impressions (available only for notification messages on Android devices) -** The display notification has been displayed on the device while the app is in the background.
- **Opens -** The user opened the notification message. Reported only for notifications received when the app is in the background.

## Notification funnel analysis

A built-in Notifications funnel analysis shows you how your users respond to particular notifications sent from the Firebase console. This view includes data for targeted iOS and Android devices in these categories:

- **Notifications sent -** The message has been enqueued for delivery or has been successfully passed to a third-party service like APNs for delivery. Note that targeting stale tokens or inactive registrations may inflate these statistics.
- **Notifications opened -** The number of notifications opened. Reported only for notifications received when the app is in the background.
- The **number of unique users** who have triggered a conversion event, if one is defined.

https://firebase.google.com/docs/cloud-messaging/understand-delivery

https://firebase.google.com/docs/cloud-messaging

https://firebase.googleblog.com/2019/02/life-of-a-message.html

## How Firebase Cloud Messaging (FCM) works

FCM is a cross-platform messaging solution that can compose, send, queue, and route notifications reliably. It provides a unified API between message senders (app servers) and receivers (client apps). The app developer can use this solution to drive user retention.

### Steps 1 - 2

When the client app starts for the first time, the client app sends credentials to FCM, including Sender ID, API Key, and App ID. FCM generates Registration Token for the client app instance (so the Registration Token is also called Instance ID). This token must be included in the notifications.

### Step 3

The client app sends the Registration Token to the app server. The app server caches the token for subsequent communications. Over time, the app server has too many tokens to maintain, so the recommended practice is to store the token with timestamps and to remove stale tokens from time to time.

### Step 4

There are two ways to send messages. One is to compose messages directly in the console GUI (Step 4.1,) and the other is to send the messages from the app server (Step 4.2.) We can use the Firebase Admin SDK or HTTP for the latter.

### Step 5

FCM receives the messages, and queues the messages in the storage if the devices are not online.

### Step 6

FCM forwards the messages to platform-level transport. This transport layer handles platform-specific configurations.

### Step 7

The messages are routed to the targeted devices. The notifications can be displayed according to the configurations sent from the app server (1).

![How FCM Works](../../../media/Pasted%20image%2020240229100535.jpg)

## Commands

```bash
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=xxx:xxx-xxx' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "to": "xxx",
    "data":{
        "body":"Test Notification !!!",
        "title":"Test Title !!!"
    }
}'
```
