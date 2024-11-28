# React Native

## Expo

Expo is a production-grade React Native Framework. Expo provides developer tooling that makes developing apps easier, such as file-based routing, a standard library of native modules, and much more.

[Get Started with React Native · React Native](https://reactnative.dev/docs/environment-setup)

[Create your first app - Expo Documentation](https://docs.expo.dev/tutorial/create-your-first-app/)

## Interaction Manager

TheInteractionManageris the native module responsible for deferring the execution of a function until an "interaction" has finished. We can `callInteractionManager.runAfterInteractions(() => {...})` to handle this deferral. We can also register our own interactions.

InteractionManageris very important because React Native has two threads. There is a JavaScript UI thread which handles drawing updates to the screen, and another thread used for all tasks not on the UI thread. Since there is only one thread for making UI updates, it can get overloaded and drop frames, especially during things like navigation screen animations. We use theInteractionManagerto ensure that our function is executedafterthese animations occur so that we do not drop frames on the UI thread. Trying to draw a new screen while it is being animated is often too much for the thread to handle.

https://www.toptal.com/react-native/interview-questions

https://www.javatpoint.com/react-native-interview-questions

## Commands

```bash
react-native init ReactNativeWeb

cd ReactNativeWeb

react-native run-ios

react-native run-android
```

## Others

- SafeAreaView
- BackHandler

https://medium.com/corebuild-software/easily-optimise-your-react-native-components-rendering-8deb22176c8a

[Migrating our Largest Mobile App to React Native (2023)](https://shopify.engineering/migrating-our-largest-mobile-app-to-react-native)
