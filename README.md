# ReactNativeAssignment
## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Installation

### For IOS:

You can start by cloning this repository(https://github.com/rishiankush/ReactNativeAssignment.git).

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `yarn`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install`
- Run `yarn ios` or `npx react-native run-ios` or open xcode(workspace) to build the app.

### For Android:

You can start by cloning this repository(https://github.com/rishiankush/ReactNativeAssignment.git).

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `yarn`.
- Run `yarn android` or `npx react-native run-android`.
