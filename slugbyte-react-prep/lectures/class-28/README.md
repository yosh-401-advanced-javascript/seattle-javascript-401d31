![cf](http://i.imgur.com/7v5ASc8.png) class 28 
===

## Learning Objectives
* Students will learn about lifting up state in react
* Students will be able to pass data and callbacks into components using props
* Students will be able to explain one way data binding

## Readings 
* [Lifting up State](https://facebook.github.io/react/docs/lifting-state-up.html)

## White Board Challenge

## Overview 
* 30min DSA
* 30min Code review
* 2hr Code Demo

#### Code Demo
* There are two kinds of state application state, and view state
  * Application state is the data that represents the core of your app.
    * if a user is logged in
    * application resources like notes, photos, posts, and comments
  * View state is the data that represents how a view is displayed
    * weather a hamburger menu is open or closed
    * the values stored in a controlled input
    * which page route to dispay
* One way data flow makes it hard for changes in data lower on the tree to be reflected higher in the tree. Because of this keeping the application state at the top of the application, simplifys data flow.
* Create an App with one root component that manages all Application state
  * Pass the root component state and setState through props to all child components
  * All components can manage their own view state, but application should be stored in the root component
