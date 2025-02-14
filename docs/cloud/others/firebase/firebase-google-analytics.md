# Firebase / Google Analytics

Google Analytics for Firebase, formerly Firebase Analytics, is now known as Google Analytics. It works great for your mobile apps! Oh, but Google Analytics for Mobile has been deprecated; they recommend you use Firebase Analytics, which, as you'll recall, is now Google Analytics. In recent news, you'll be excited to hear that Google Analytics now supports web apps, but don't confuse that with Google Analytics for the web!

https://medium.com/firebase-developers/google-analytics-vs-firebase-analytics-vs-google-analytics-97ca645a8aff

## Google Analytics / GA4

- Unlimited Reporting
    - Analytics provides unlimited reporting on up to 500 distinct events.
- Audience Segmentation
    - Custom audiences can be defined in the Firebase console based on device data, custom events, or user properties. These audiences can be used with other Firebase features when targeting new features or notification messages.
- Features
    - Comparison Analysis
    - Segment Overlap Analysis
    - Funnel Analysis Technique

https://firebase.google.com/docs/analytics

- **In-app behavioral analytics**
    - who your users are
    - what are they doing
- **Attribution analytics**
    - effectiveness of advertising and other growth campaigns
- **Push notification analytics and crash reporting**

YouTube - [The Firebase developer's guide to Google Analytics](https://www.youtube.com/watch?v=2F2XhgMt8Dg&ab_channel=Firebase)

**Analytics different meanings**

- An **event** measures a specific behavioural interaction on your website or app.
- A **key event** is an event that you mark as important to your business. Key events appear in Analytics reports but aren’t directly eligible for reporting or bidding in Google Ads.
- A **conversion** created from an Analytics key event is eligible for reporting and bidding in Google Ads and also appears in Analytics advertising reports.

## Firebase Analytics

### Events

An Event is an important occurrence in your app that you want to measure. You can report up to 500 different types of Events per app and you can associate up to 25 unique parameters with each Event type. Some common events are suggested below, but you may also choose to specify custom Event types that are associated with your specific app. Each event type is identified by a unique name. Event names can be up to 40 characters long, may only contain alphanumeric characters and underscores ("_"), and must start with an alphabetic character. The "firebase_", "google_", and "ga_" prefixes are reserved and should not be used.

https://firebase.google.com/docs/reference/cpp/group/event-names

Events provide insight on what is happening in your app, such as user actions, system events, or errors.

Analytics automatically logs some [events](https://support.google.com/firebase/answer/6317485) for you; you don't need to add any code to receive them. If your app needs to collect additional data, you can log up to 500 different Analytics Eventtypesin your app. There is no limit on the total volume of events your app logs.

Extra events are dropped. A firebase_error event is logged with a firebase_error parameter which indicates the error code.

For example, you have a login page (with authentication methods of using Facebook, Google or Username/Password) and you'd like to track what is the most commonly used by the users. With this, you could log a custom event with the name of "user_login" and a parameter or login_method. After this, add the parameter in the custom parameter reporting to see the counts.

### Parameters

Params supply information that contextualize Events. You can associate up to 25 unique Params with each Event type. Some Params are suggested below for certain common Events, but you are not limited to these. You may supply extra Params for suggested Events or custom Params for Custom events. Param names can be up to 40 characters long, may only contain alphanumeric characters and underscores ("_"), and must start with an alphabetic character. Param values can be up to 100 characters long. The "firebase_", "google_", and "ga_" prefixes are reserved and should not be used.

https://firebase.google.com/docs/reference/cpp/group/parameter-names

Custom-parameter reporting Define custom parameters for your events.

Google Analytics for Firebase lets you specify up to 25 custom parameters per event (Android or iOS).

You can also identify up to 50 custom event parameters per project (40 numeric and 10 textual) to include in reporting by registering those parameters with their corresponding events. Once you register your custom parameters, Google Analytics for Firebase displays a corresponding data card in each related event-detail report.

Each parameter that you specify counts toward the project limit of 50. For example, if you specify the same parameter for 3 different events, then that counts as 3 of your 50.

### User Property

A UserProperty is an attribute that describes the app-user. By supplying UserProperties, you can later analyze different behaviors of various segments of your userbase. You may supply up to 25 unique UserProperties per app, and you can use the name and value of your choosing for each one. UserProperty names can be up to 24 characters long, may only contain alphanumeric characters and underscores ("_"), and must start with an alphabetic character. UserProperty values can be up to 36 characters long. The "firebase_", "google_", and "ga_" prefixes are reserved and should not be used.

Attributes you define to describe segments of your user base, such as **language preference or geographic location.**

https://firebase.google.com/docs/analytics/events?platform=android

https://firebase.google.com/docs/analytics/errors

https://stackoverflow.com/questions/50383729/what-would-happen-if-of-events-exceeds-500-on-firebase-analytics#_=_

https://stackoverflow.com/questions/37604275/how-to-view-event-parameters-from-firebase-console

## Terms

- **Properties**

In Google Analytics, a **property** is a website, mobile application, or blog, etc., that is associated with a unique tracking ID.

While you might think about your website or mobile app as a distinct, real-world piece of property, like a storefront, Analytics understands a property only as a resource associated with your tracking code. When you track a resource using Analytics, you include a property ID in the tracking code that you put on your web pages or in your app source code. Performance data, like number of users or screen views, for resources tagged with the same ID is collected into the corresponding property.

For example, if you associate one property ID with two websites, data for both websites appears in the same property in your Analytics account. You can then use [views](https://support.google.com/analytics/answer/2649553) and [filters](https://support.google.com/analytics/answer/1033162) to organize the data. You can segregate the data even further at the report level with tools like [Segments](https://support.google.com/analytics/answer/1033017).

## Getting started

### Create an App + Web property

### Create a data stream

Data streams enable the flow of data from your website and/or app into Google Analytics. If you'd like to measure more than one touchpoint, you can add multiple data streams to your property. For example, you can add one stream for your Android app, one for your iOS app, and one for each website.

### Activate enhanced measurement

When you add a data stream for your website and/or app, some basic parameters (such as language, page title, and screen resolution) are collected by default. With enhanced measurement, Analytics can automatically measure more interactions on your website such as page views, video views, and file downloads right out of the box. We recommend enabling enhanced measurement as you are setting up your App + Web property to begin collecting basic web events right away, without any custom tagging work required. You can disable enhanced measurement at any time

### Enable data collection

The final step to get set up is enabling data collection, which allows your reports to populate relevant events from your website. This allows tagged data to flow to your new property (in addition to your existing ones), and is essential in order to get meaningful insights from your App + Web property.

## Advanced Features

- Enchanced Ecommerce
- Track important success metrics with Goals
- Analytics Intelligence

## Important Points

There is currently no way to delete events once they are logged into Firebase Analytics that I am aware of. However, the events will drift out of the default view (which is set to "last 30 days") as time goes on, or you can switch the time period to a shorter time. As you mentioned, you can also click a column header to sort by some other value or "add filter" to filter by an audience or user property.

You can create a new Firebase project if you want to start from scratch. It's also a fairly common practice to use one project for experimentation and validation of your analytics implementation and then to switch to your production Firebase project when everything looks good.

| **Logged item** | **Limit** | **Can I archive items if I'm close to the limit?** |
|---|---|---|
| Distinct events | 500 per app instance, Automatically collected eventssuch as first_open and in_app_purchase do not count toward the limit. | No |
| Length of event name | 40 characters | N/A |
| Event parameters per event | 25 | Yes |
| Length of event-parameter name | 40 characters | N/A |
| Length of event-parameter value | 100 characters | N/A |
| User properties | 25 per app instance | No |
| Length of user-property names | 24 characters | N/A |
| Length of user-property values | 36 characters | N/A |
| Age of event (upload time) | Events uploaded more than 2 days after they are logged are not included in the export. | N/A |

Configuration limits

| **Configured item**                | **Limit** | **Can I delete items if I'm close to the limit?** |
|------------------------------|---------|---------------------------------|
| Audiences                           | 100       | Yes                                                |
| Conversions                         | 30        | Yes                                                |
| Registered user properties          | 25        | Yes                                                |
| Funnels                             | 200       | Yes                                                |
| Registered text parameters          | 50        | Yes                                                |
| Registered numeric parameters       | 50        | Yes                                                |
| Registered custom conversion events | 30        | Yes                                                |

You cannot increase these limits by upgrading to the [Flame or Blaze pricing plans](https://firebase.google.com/pricing/). The limits are the same for all Firebase projects.

https://support.google.com/firebase/answer/9237506?hl=en

## Attribution

**Definition -** the action of regarding something as being caused by a person or thing.

Let's say you've spent some money on two different ad campaigns to bring users into your app. After a few weeks, you discover:

- Ad campaign #1 resulted in 500 clicks.
- Ad campaign #2 resulted in 300 clicks.

So, which ad campaign performed better? Seems like a no-brainer, right? Should you double-down on ad campaign #1?Well, hang on. What if you were to then discover...

- Ad campaign #1 resulted in 500 clicks
    - But only 80 users installed and opened your app
    - ...and they spent an average of $1.20 each
- Ad campaign #2 resulted in 300 clicks...
    - But 230 of those users installed and opened your app
    - ...and they spent an average of $6 each
    - ...and over 100 of them signed up for your newsletter?

Well, suddenly, that second ad campaign seems like a much better deal, doesn't it?That's the idea behind attribution. **It's a powerful form of app analytics that not only determines which campaigns are bringing you users, but also which campaigns are bringing you valuable users that you care most about.**

## Google Tag Manager (GTM)

Tag Manager is an easy and efficient tagging system made for businesses of all sizes to manage analytics and marketing tags faster.

Chrome Extension - Tag Assistant (by Google)

https://support.google.com/tagmanager/answer/6102821?hl=en

https://en.wikipedia.org/wiki/Tag_management_system

https://www.freecodecamp.org/news/how-to-use-google-tag-manager-to-maintain-google-analytics-and-other-marketing-tags

### Enhanced Measurements

[\[GA4\] Enhanced measurement events - Analytics Help](https://support.google.com/analytics/answer/9216061?hl=en)

[Enhanced Measurement in Google Analytics 4 (GA4) - Analytics Mania](https://www.analyticsmania.com/post/enhanced-measurement-in-google-analytics-4-the-guide/)

### Pushing data to GA4 (Data Layer)

- [GTM Guide: dataLayer.push with examples - Analytics Mania](https://www.analyticsmania.com/post/datalayer-push/)
- [End-to-end guide on data layer in Google Tag Manager by Stape](https://stape.io/blog/end-to-end-guide-on-data-layer-in-google-tag-manager)
- [Google Tag Manager Data Layer Explained (2024) - Analytics Mania](https://www.analyticsmania.com/post/what-is-data-layer-in-google-tag-manager/)
- [The data layer  |  Tag Manager  |  Google for Developers](https://developers.google.com/tag-platform/tag-manager/datalayer)

### References

- **[Google Tag Manager Tutorial for Beginners (2024) with New Google Tag - YouTube](https://www.youtube.com/watch?v=DiAgCihHW58)**
	- Tags
	- Triggers
	- Variables
- **[Data Layer in Google Tag Manager || GTM Data Layer Tutorial with examples - YouTube](https://www.youtube.com/watch?v=hyZQLQITeV4)**
- [Easily Track Button Clicks in Google Analytics 4 - YouTube](https://www.youtube.com/watch?v=kl-th7gl0HQ)
- [How To Track Page Load Time In GA4 (Google Analytics 4)](https://www.lovesdata.com/blog/page-load-google-analytics)

## Others

- https://www.adjust.com
- [Heap - Better Insights. Faster. | Heap](https://www.heap.io/)
- [Amplitude | Product Analytics & Event Tracking Platform | Amplitude](https://amplitude.com/)
- [easyinsights.ai](https://easyinsights.ai/)

### PostHog

- Specify events manually, or use autocapture to get started quickly
- Analyze data with ready-made visualizations, or do it yourself with SQL
- Track website visitors separately with our GA4 alternative
- Only capture properties on the people you want to track, save money when you don't
- Gather insights by capturing session replays, console logs, and network monitoring
- Improve your product with Experiments that automatically analyze performance
- Safely roll out features to select users or cohorts with feature flags
- Send out fully customizable surveys to specific cohorts of users
- Connect to external services and manage data flows with PostHog CDP

[GitHub - PostHog/posthog: 🦔 PostHog provides open-source web & product analytics, session recording, feature flagging and A/B testing that you can self-host. Get started - free.](https://github.com/PostHog/posthog)

[Sunsetting Kubernetes support for PostHog - PostHog](https://posthog.com/blog/sunsetting-helm-support-posthog)

### MixPanel

Mixpanel helps you learn how people use your app with mobile & web analytics. Instead of tracking page views, you can measure and see how people are actually using your app by tracking actions.

## Links

- [How to Build Search Terms Report in Google Analytics 4 (GA4) - YouTube](https://www.youtube.com/watch?v=6kCrLKTQzn4)
- [Enhanced Measurement in Google Analytics 4 - YouTube](https://youtu.be/jRGhWRwlYzk)
	- **Outbound links for subdomain**
- [Google Analytics 4 Tutorial for Beginners (2024) \|\| 1-hour GA4 course - YouTube](https://youtu.be/u_ECkoHVlZ8)
- [Google Tag Manager vs Google Analytics. What’s the difference? - YouTube](https://youtu.be/dxmd2Uy_fIM)
- [10 things you should configure in any new Google Analytics 4 property - YouTube](https://youtu.be/BaqE6WigOWU)
- [Advanced Click Tracking with Google Tag Manager (2 examples) - YouTube](https://youtu.be/fjlepTzZ15c)
- [Data Layer Explained With Practical Examples in Google Tag Manager - YouTube](https://youtu.be/F4ywLz2_u4g)
- [Click Element Variable in Google Tag Manager (how to use it correctly) - YouTube](https://youtu.be/CKQvEghiHr4)
