# Facilitators Guide: Props and State

## Learning Objectives

**Students will be able to ...**

* Pass props from a container component to a child
* Execute methods in a parent component from a child
* Manage state from events
* Handle form input

## Preparation
* Get used to passing state, props, and methods down the component chain


## Lecture Main Topics & Overall Flow

* Every component can have "State" of it's own
* But often, there's a relationship, and a "parent" might send information or behavior down
* In these relationships, the parent has control
* In React, state can only flow in one direction (down)
* Controlled Components
  * "Dumb" Components
  * Parents send flags, data, methods "down" as `props`
  * Can be implemented as functions instead of classes
    * ... If they don't have their own internal state
  



## Lab Prep
* Students will have 3 sandboxes to fork and execute on.
* There are solutions published as well in the sandbox folders for TAs to grade with

## What bugs, issues, or surprises have come up in the past for this class?
* Students will absolutely struggle with the notion of passing data between components.
* They will struggle even more with the notion of passing down methods to a child that actually run in the parent.
* Definitely work in the "functions as parameters" feature of the language as a means of selling what's going on there.

## General Comments and Notes
*
