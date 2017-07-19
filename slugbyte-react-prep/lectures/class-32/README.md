![cf](http://i.imgur.com/7v5ASc8.png) class 32 
===

## Learning Objectives
* Students will learn to compuse reducers to create complex application states
* Students will learn to use the Object Spreat opperator to treat Objects as immutatble data structors

## Readings

## White Board Challenge

## Overview
* 30min DSA
* 30min Code Review
* 2hr Composing Reducers / Spread opperator

## Spread opperator cheat sheet
* Imutable Arrays With Out Spread
``` javascript 
let result
let items = ['b', 'c', 'd']

// push
result = items.concat['e']

// unshift
result = ['a'].concat(items)
```

* Imutable Arrays With Spread
```
let result;
let items = ['b', 'c', 'd']

// push
result = [...items, 'e'];

// unshift
result = ['a', ...items]

```

* Imutable objects without object spread
``` javascript
let result
let data = {
  id: 'abc123',
  content: 'shark in the dark park with mark',
}

// modify a property
result = Object.assign({}, data, {content: 'done with a fun run in the sun'})

// add a property
result = Object.assign({}, data, {date: new Date()})

// remove a property
result = Object.assign({}, data, {content: undefined})

```
* Imutable objects with object spread
```
let result
let data = {
  id: 'abc123',
  content: 'shark in the dark park with mark',
}

// modify a property
result = {...date, content: 'done with a fun run in the sun'}

// add a property
result = {...data, date: new Date()}

// remove a property
result = {...data, content: undefined}
```

## Code Demo
* refactor auth state into its own reducer
* create a composed reducer useing `combineReducers`

