# Facilitators Guide: Context API

## Learning Objectives

**Students will be able to ...**

* Use the React Context API to tactically manage global state.

## Preparation
This lesson focuses on the Context API. Be comfortable in how this wires up (it's a little bit complex in the wiring).  

DO NOT prepare on the `useContext()` hook. We will be introducing that in Class 38

## Lecture Main Topics & Overall Flow
How many ways do we currently know of to manage state?
  1. Local State (a component carries its own state)
  2. Managed or Shared State (a component passes state/props/methods) down
  3. Redux Global State (pub/sub)

Now, we'll introduce another way to deal with state.

**Context** allows for a "global" pass-down of state and methods by using composition (much like the redux `<Provider>`). Context can be passed down to both class and functional components.

  * Note that there is a `useContext` hook that does allow for this as well as many 3rd party hooks.

Prepare to draw some images that describe the location of (and the sharing of) state between components when using Context and passing it down.

## What bugs, issues, or surprises have come up in the past for this class?
* Be prepared for students to struggle with a 3rd way to handle state
* This will also be the first time the students will be dealing with webpack...

## General Comments and Notes
*
