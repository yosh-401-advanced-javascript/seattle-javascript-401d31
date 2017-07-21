![cf](http://i.imgur.com/7v5ASc8.png) class 31 
===

## Learning Objectives
* Students will learn to setup a redux store
* Students will learn to design redux reducers
* Students will learn to make syncronous actions for updating the store
* Students will learn to make async actions for updating the store

## Readings
* [Redux Introduction](http://redux.js.org/docs/introduction/)

## White Board Challenge

## Overview
* 30min DSA
* 1hour redux into
* 1.5 hour auth demo

#### Redux 
* Redux is a predictable state container for JS Apps
* When building large async apps, manging state can be very mess. Redux attempts to create reproducable patterns for making mutations predictable
* Redux stores are made by passing a reducer into `createStore` 
  * reducers  have the function signature `(state, acton) => state`
  * reducers define what the application state should contain, and how it can be modified 
  * reducers can define the state to be any JS type (string, number, object, array, set, map, function...)
* Redux stores have three methods 
  * `getState` is used to access the state
  * `dispatch` allows the state to be updated
  * `subscribe` is used to register/unregister state change callback listeners

#### Code Demo
* Create a one file note app to demonstrate redux workflow
  * define the reducer
  * define sync actions for updating the store
  * create the store
  * build your components that use `connect` to `mapStateToProps` and `mapDispatchToProps`
* Create a second app that will implement auth using redux workflow
  * define the reducer 
  * define sync and async actions for updating the store
  * create the store and apply the thunk middleware
  * build your components that use `connect` to mapStateToProps and mapDispatchToProps
