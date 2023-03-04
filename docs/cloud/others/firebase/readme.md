# Firebase

## Google Signals

- The key condition for the new feature to collect and return data is that users have turned on the Ads Personalization settings, allowing thus Google to use their info to personalize ads,
- Google Signals is a new Google Analytics Cross Device Report, similar to the User-ID report.
- In this case however Google Analytics tracks sessions and device type for all the users that signed into their Google accounts and converted. Once the feature is activated, Google Analytics is able to recognize the device from which the first click was made, other devices from which different clicks in the path of the customer journey are performed and at the end the device that lead to the conversion.
- Let's see an example: the user clicks a first ad on the smartphone, then clicks a second ad on a tablet and finally completes the conversion on a desktop (mobile > tablet> desktop).
- You can now develop a holistic (aggregated) view of the cross-device interactions of the users and how they got to the final conversion. The feature is of huge help to enhance remarketing and reporting.

## Google Tag Manager (GTM)

Tag Manager is an easy and efficient tagging system made for businesses of all sizes to manage analytics and marketing tags faster.

Chrome Extension - Tag Assistant (by Google)

<https://support.google.com/tagmanager/answer/6102821?hl=en>

<https://en.wikipedia.org/wiki/Tag_management_system>

## Firebase Dynamic Links

Firebase Dynamic Links are links that work the way you want, on multiple platforms, and whether or not your app is already installed.

With Dynamic Links, your users get the best available experience for the platform they open your link on. If a user opens a Dynamic Link on iOS or Android, they can be taken directly to the linked content in your native app. If a user opens the same Dynamic Link in a desktop browser, they can be taken to the equivalent content on your website.

In addition, Dynamic Links work across app installs: if a user opens a Dynamic Link on iOS or Android and doesn't have your app installed, the user can be prompted to install it; then, after installation, your app starts and can access the link.

Dynamic links - <https://stash.page.link/.well-known/assetlinks.json>

<https://firebase.google.com/docs/dynamic-links>

<https://www.youtube.com/watch?v=zra2DCd0DnY&ab_channel=Firebase>

## Debugging

DebugView enables you to see the raw event data logged by your app on development devices in near real-time. This is very useful for validation purposes during the instrumentation phase of development and can help you discover errors and mistakes in your analytics implementation and confirm that all events and user properties are being logged correctly.

<https://firebase.google.com/docs/analytics/debugview>

## FCM

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

## Message delivery reports

You can evaluate whether the messages you send reach your users. In the [Reports](https://console.firebase.google.com/project/_/notification/reporting?authuser=1) tab in the Firebase console, you can view the following data for messages sent to Android or iOS FCM SDKs, including those sent via the Notifications composer and the FCM APIs:

- **Sends ---** The data message or notification message has been enqueued for delivery or has been successfully passed to a third-party service like APNs for delivery. See [lifetime of a message](https://firebase.google.com/docs/cloud-messaging/concept-options?authuser=1#lifetime) for more information.
- **Received (available only on Android devices) ---** The data message or notification message has been received by the app. This data is available when the receiving Android device has FCM SDK 18.0.1 or higher installed.
- **Impressions (available only for notification messages on Android devices) ---** The display notification has been displayed on the device while the app is in the background.
- **Opens ---** The user opened the notification message. Reported only for notifications received when the app is in the background.

## Notification funnel analysis

A built-in Notifications funnel analysis shows you how your users respond to particular notifications sent from the Firebase console. This view includes data for targeted iOS and Android devices in these categories:

- **Notifications sent ---** The message has been enqueued for delivery or has been successfully passed to a third-party service like APNs for delivery. Note that targeting stale tokens or inactive registrations may inflate these statistics.
- **Notifications opened ---** The number of notifications opened. Reported only for notifications received when the app is in the background.
- The **number of unique users** who have triggered a conversion event, if one is defined.

<https://firebase.google.com/docs/cloud-messaging/understand-delivery>

<https://firebase.google.com/docs/cloud-messaging>

<https://firebase.googleblog.com/2019/02/life-of-a-message.html>

## Test Lab

Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, you can test your Android or iOS app across a wide variety of devices and device configurations, and see the results - including logs, videos, and screenshots - in the Firebase console.

Test Lab runs [Espresso](https://developer.android.com/training/testing/ui-testing/espresso-testing.html) and [UI Automator 2.0](http://developer.android.com/tools/testing-support-library/index.html#UIAutomator) tests on Android apps, and [XCTest](https://developer.apple.com/documentation/xctest) tests on iOS apps.

RoboTest

<https://firebase.google.com/docs/test-lab>

## Firebase Remote Config

Change the behavior and appearance of your app without publishing an app update

Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update. When using Remote Config, you create in-app default values that control the behavior and appearance of your app. Then, you can later use the Firebase console or the Remote Config backend APIs to override in-app default values for all app users or for segments of your user base. Your app controls when updates are applied, and it can frequently check for updates and apply them with a negligible impact on performance.

<https://firebase.google.com/docs/remote-config>

[**https://firebase.google.com/docs/remote-config/personalization**](https://firebase.google.com/docs/remote-config/personalization)

With Remote Config personalization, you can automatically select Remote Config parameters for each user to optimize for an objective. Personalizing a parameter is like performing an automatic, individualized, continuously-improving, A/B test.

## Others

- Firebase **AppCheck**
- <https://neilpatel.com/blog/google-analytics-4>
- <https://github.com/supabase/supabase>

Firebase Open Source Alternative

- <https://counter.dev>
