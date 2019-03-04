![cf](http://i.imgur.com/7v5ASc8.png) Facilitators Guide: Props and State
===============================================================
<a name="top"></a>

## Preparation
* Get used to passing state, props, and methods down the component chain
* Prepare a demo that does this in many ways, with well named methods and variables.
* It's a good idea to name things `parentFunctionFoo` so that as you send them down, it's clear what's happening until it "clicks" for the students.
* Definitely a good opportunity to draw a UML diagram of the component structure with connections and then a separate layer on that drawing showing state, props, functions as they get passed around.
* Be prepared to forego JSX and write out the native React functions.  Students have a tough time grokking the idea that JSX Elements are actually functions that have a friendlier appearance. Making all of this "work" with old fashioned javascript and then saying "But markup is more visually compelling" usually sells it pretty well for them.

## Lecture Main Topics & Overall Flow
* Topic
  * Sub


## Live Coding Demo(s)
#### [Props & State Demo](https://codesandbox.io/s/p7jomzyx07)
* This is a "tinker with it" style demo where you build a couple of components and randomly pass state, props, words, functions around between them to demonstrate how that wires.
* Send state down (to be rendered as props)
* Send functions down
  * When run -- they can modify state in the parent, which in turn re-sends the props to the child
* Render arrays and arrays of objects to show how .map() and filter work

#### [RESTY-28 Demo](https://codesandbox.io/s/kx79lz6pz7)
* Using the tools that we've demonstrated in the core demo, start to build out the RESTy app
  * Form with an input field
  * Button to submit
  * Fetch the URL given in the field with superagent
  * Render out the returned JSON object
    * First use it and render out the values (just to re-iterate rendering arrays)
    * Kill that, and then put out the JSON in a `<pre>` tag
    * Then, lets shop and find a 3rd party JSON renderer
      * This can show them how to integrate external libraries...

## Lab Prep
* Students will have 3 sandboxes to fork and execute on.
* There are solutions published as well in the sandbox folders for TAs to grade with

## What bugs, issues, or surprises have come up in the past for this class?
* Students will absolutely struggle with the notion of passing data between components.
* They will struggle even more with the notion of passing down methods to a child that actually run in the parent.
* Definitely work in the "functions as parameters" feature of the language as a means of selling what's going on there.

## General Comments and Notes
*
