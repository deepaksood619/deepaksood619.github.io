# Jetpack

Jetpack is a set of libraries, tools and architectural guidance to help make it quick and easy to build great Android apps. It provides common infrastructure code so you can focus on what makes your app unique.

1. **Foundation**

    1. AppCompat - Degrade gracefully on older versions of Android

    2. Android KTX - Write more concise, idiomatic Kotlin code

    3. Multidex - Provide support for apps with multiple DEX files

    4. Test - An Android testing framework for unit and runtime UI tests

2. **Architecture**

    1. **Data Binding -** Declaratively bind observable data to UI elements

    2. **Lifecycles -** Manage your activity and fragment lifecycles

    3. **LiveData -** Notify views when underlying database changes

    4. **Navigation -** Handle everything for in-app navigation

    5. **Paging -** Gradually load information on demand from your data source

    6. **Room -** Fluent SQLite database access

    7. **ViewModel -** Manage UI-related data in a lifecycle-consious way

    8. **WorkManager -** Manage your Android background jobs

3. **Behavior**

    1. Download Manager - Schedule and manage large downloads

    2. Media & Playback - Backwards compatible API for media playback, routing and Google Cast

    3. Notifications - Provides a backwards-compatible notification API with support for Wear and Auto

    4. Permissions - Compatibility APIs for checking and requesting app permissions

    5. Sharing - Provides a share action suitable for app's action bar

    6. Slices - Create flexible UI elements that can display app data outside the app

4. **UI**

    1. Animation & transitions - Move widgets and transition between screens

    2. Auto - Components to help develop apps for Android Auto

    3. Emoji - Enable an up-to-date emoji font on older platforms

    4. Fragment - A basic unit of composable UI

    5. Layout - Lay out widgets using different algorithms

    6. Palette - Pull useful information out of color palettes

    7. TV - Components to help develop apps for Android TV

    8. Wear OS by Google - Components to help develop apps for Wear

<https://developer.android.com/jetpack>

## Navigation Components (NavGraph)

The Navigation component is a suite of libraries, tooling and guidance for in-app navigation. The component centralizes all of the navigation information of your app in a navigation graph, providing a robust framework for implementing everything from simple button clicks to complex navigation UI patterns.

Android Studio 3.3 includes the Navigation Editor, which visuals your navigation graph. Other features and benefits include

- Automatic handling of fragment transactions
- Correctly handling up and back
- Default behaviors for animations and transitions
- Deep linking, including proper backstack generation
- Implementing common patterns like navigation drawers and bottom nav with little additional work using the Navigation UI library → [http://bit.ly/2EWYtoV](https://www.youtube.com/redirect?v=Y0Cs2MQxyIs&event=video_description&redir_token=QUFFLUhqblFuYS12eFFKQkxBYmhTSDQxbXpvZVdxWWlRd3xBQ3Jtc0ttd0VSRXpvRkV1YTh0S0VaNk1Xd1dRcC1CQktZeGlfaVZjWG9xRDFldGV5aThTMWU2TWJfcThhMTNyWVBRdm8zTjh0eVdvVlA3NnNoTmViWHlaS0VJaUxtWWJiNTM1Sk4xMjJvVnhzTjNDRV83UTREWQ%3D%3D&q=http%3A%2F%2Fbit.ly%2F2EWYtoV)
- Type safety when passing information while navigating using the Safe Args plugin → [http://bit.ly/2VR7kPM](https://www.youtube.com/redirect?v=Y0Cs2MQxyIs&event=video_description&redir_token=QUFFLUhqblZWaDZaZjRYRTVDbk9yZElZSkFUb0RURmVld3xBQ3Jtc0ttdzJUNkZjUjZ6OXpyYWJkcmIwQ0JybVRpWXNUdWtUSDNKU1IxY1R1TlA4N1h5WTBjVm0wMklQYmM4VlB3TDgxenN0dVVNZDh2NTJlOTZaclVxWHptRWRQeXBlckVQejZTLTlCLW9oVkc0NDFLU1ctSQ%3D%3D&q=http%3A%2F%2Fbit.ly%2F2VR7kPM)
  - Safe Args Plugin

Generates classes based off of your navigation graph to ensure type-safe access to arguments for destinations and actions

## Built in support for

- Fragment
- Activities
- Can also be extended to work with custom destinations

## 3 major parts

- Navigation graph
- NavHostFragment
- NavController

Youtube - [Android Jetpack: Introducing Navigation Component](https://www.youtube.com/watch?v=Y0Cs2MQxyIs)

<https://developer.android.com/guide/navigation>

## Compose

Jetpack Compose is Android's modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.

<https://developer.android.com/jetpack/compose>
