# Facilitators Guide: React Native Ecosystem

## Learning Objectives

**Students will be able to ...**

* Get a simple "hello world" application up and running on mobile devices
* Understand the react-native workflow

This class begins a 2-Session project where they will create a React Native application that uses device or hardware specific features for their phone.

Following these 2 classes, they will present their apps to the class prior to the start of Class 43.

This first React Native class is designed to introduce students into the React Native Ecosystem and to get them started with a stable dev environment and some good ideas and inspiration. 

* Spinning up a dev environment
* Expo
* Running Emulators
* Getting Deployed
* Other frameworks like Flutter
* Basic Coding Principles
    * RN Specific Components (`<View/>` and `<Text/>`)
    * Device features and capabilities

## Preparation
* Setup expo-cli on your machine and work with a basic hello world app that runs from your local.
* Familiarize yourself with the [http://expo.io] online IDE and how they work similarly
* Have a good grasp of the Expo and React Native docs
  * What can you do on your phone?
  * How does security work?
* Build a full app and explain what goes inside

## Lecture Main Topics & Overall Flow
* React Native Ecosystem
  * What is native development?
  * Why is it important to develop a native app vs a responsive react app?
  * It's still just state and components
    * But no HTML or CSS
    * You can still "style" things, but within the rules
* Expo Is the dev environment
* Snack is an online sandbox
* expo-cli is the local equivalent to create-react-app (you can eject)
* Running locally, you can use your own device or the official simulator
  * Only Apple users can test iphones 
  * Anyone can test android, but you need to start up the ADB from Android Studio

### App Ideas
* NFC Sharing (contacts, songs, etc)
* Metal Detector using the magnetometer
* Shaking, Motion and Impact detection ("ouch" when dropped or "whee!" when flipped)
* Use the step counter in fun ways
* Use GPS in fun ways (buzz when your friends are close)
