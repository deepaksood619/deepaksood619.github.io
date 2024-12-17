# Firebase

## Google Signals

- The key condition for the new feature to collect and return data is that users have turned on the Ads Personalization settings, allowing thus Google to use their info to personalize ads,
- Google Signals is a new Google Analytics Cross Device Report, similar to the User-ID report.
- In this case however Google Analytics tracks sessions and device type for all the users that signed into their Google accounts and converted. Once the feature is activated, Google Analytics is able to recognize the device from which the first click was made, other devices from which different clicks in the path of the customer journey are performed and at the end the device that lead to the conversion.
- Let's see an example: the user clicks a first ad on the smartphone, then clicks a second ad on a tablet and finally completes the conversion on a desktop (mobile > tablet> desktop).
- You can now develop a holistic (aggregated) view of the cross-device interactions of the users and how they got to the final conversion. The feature is of huge help to enhance remarketing and reporting.

## Firebase Dynamic Links

Firebase Dynamic Links are links that work the way you want, on multiple platforms, and whether or not your app is already installed.

With Dynamic Links, your users get the best available experience for the platform they open your link on. If a user opens a Dynamic Link on iOS or Android, they can be taken directly to the linked content in your native app. If a user opens the same Dynamic Link in a desktop browser, they can be taken to the equivalent content on your website.

In addition, Dynamic Links work across app installs: if a user opens a Dynamic Link on iOS or Android and doesn't have your app installed, the user can be prompted to install it; then, after installation, your app starts and can access the link.

Dynamic links - https://stash.page.link/.well-known/assetlinks.json

https://firebase.google.com/docs/dynamic-links

https://www.youtube.com/watch?v=zra2DCd0DnY&ab_channel=Firebase

## Debugging

DebugView enables you to see the raw event data logged by your app on development devices in near real-time. This is very useful for validation purposes during the instrumentation phase of development and can help you discover errors and mistakes in your analytics implementation and confirm that all events and user properties are being logged correctly.

https://firebase.google.com/docs/analytics/debugview

## Test Lab

Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, you can test your Android or iOS app across a wide variety of devices and device configurations, and see the results - including logs, videos, and screenshots - in the Firebase console.

Test Lab runs [Espresso](https://developer.android.com/training/testing/ui-testing/espresso-testing.html) and [UI Automator 2.0](http://developer.android.com/tools/testing-support-library/index.html#UIAutomator) tests on Android apps, and [XCTest](https://developer.apple.com/documentation/xctest) tests on iOS apps.

RoboTest

https://firebase.google.com/docs/test-lab

## Firebase Remote Config

Change the behavior and appearance of your app without publishing an app update

Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update. When using Remote Config, you create in-app default values that control the behavior and appearance of your app. Then, you can later use the Firebase console or the Remote Config backend APIs to override in-app default values for all app users or for segments of your user base. Your app controls when updates are applied, and it can frequently check for updates and apply them with a negligible impact on performance.

https://firebase.google.com/docs/remote-config

[**https://firebase.google.com/docs/remote-config/personalization**](https://firebase.google.com/docs/remote-config/personalization)

With Remote Config personalization, you can automatically select Remote Config parameters for each user to optimize for an objective. Personalizing a parameter is like performing an automatic, individualized, continuously-improving, A/B test.

## Others

- Firebase **AppCheck**
- https://neilpatel.com/blog/google-analytics-4
- https://github.com/supabase/supabase
    - Firebase Open Source Alternative
    - [Learn Supabase, an Open-Source Firebase Alternative](https://www.freecodecamp.org/news/learn-supabase-open-source-firebase-alternative/)
- [GitHub - instantdb/instant: The realtime client-side database](https://github.com/instantdb/instant)
- https://counter.dev
