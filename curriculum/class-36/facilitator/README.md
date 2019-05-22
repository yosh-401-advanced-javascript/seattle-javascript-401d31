# Facilitators Guide: Application State

## Learning Objectives

**Students will be able to ...**

* Manage state at an application level using a Redux Store
* Understand the basic roles of Actions and Reducers
* Implement the core Redux Boilerplating required to participate in a store-based state managed application

## Preparation
* This is the first day of Redux.
* Focus on the problem that Redux solves (global or application state) and really understand HOW it manages that.
* The majority of the day will be in wiring up a very simple store with a single action and reducer, but this will open up many rabbit holes for you to go down with the students.
* Be prepared to move between component state and app state and back over and over so that you can explain what Redux is doing.
* Have a few images that you can draw on a whiteboard (or on your computer)


## Lecture Main Topics & Overall Flow
* Redux!
  * We are moving from app/component on-way state management into a global state.
  * Currently, state and manipulation methods can only be "pushed down" as a prop from a parent to a child component, very tactically.
  * With Redux, components can now "Reach Up" and get the state they want from the global store.
  

## What bugs, issues, or surprises have come up in the past for this class?
* Students will absolutely struggle with the wiring of things.
* Work extra hard in lecture, demo, and in Q&A dealing with how things are referenced and called.
* Draw lots of pictures to assist

## General Comments and Notes
* For the students, this is going to:
  * Solve a problem they don't yet have
  * Solve it in a way that is going to feel very "magical"
