![cf](http://i.imgur.com/7v5ASc8.png) class 29 
===

## Learning Objectives
* Students will be able to identify when to use component life cycle hooks
* Students will be ablie to identify when to create presintation components

## Readings
* [Lifecycle Hooks](https://www.fullstackreact.com/30-days-of-react/day-7/)
* [React.Component API](https://facebook.github.io/react/docs/react-component.html)

## White Board Challenge

## Overview 
* 30min DSA
* 1hr Code Review
* 1.5hr Code Demo

#### Lifecycle Hooks
* `componentWillMount/componentDidMount` are great tools for fetching and validating data when a component appears on the page
* `componentWillUpdate/componentDidUpdate` are great tools for triggering events on state changes. Useing these hooks makes the state act like an observable. If you `setState` in these lifecycle methods, be carful not to create an infnate loop!
* `componentWillRecieveProps` is a great tool for validating, filtering, and modifying props that come in
* `componentDidUnmount` is a great tool for cleaning up application state, clearing timeouts, disconnecting websockets, etc.

#### Code Demo
* presintation components are pure functions that return JSX
  * they have a clean concise syntax
  * they only be modified data passsed into props
  * they have no state or lifecycle hooks
* Component lifecycle hooks are powerful tools for controling application state
* use `componentWillMount` to fetch data from the backend and setup the app state on page load
