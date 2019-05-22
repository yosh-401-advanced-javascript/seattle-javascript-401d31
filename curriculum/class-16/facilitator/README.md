# Facilitators Guide: Event Driven Applications

## Learning Objectives

**Students will be able to ...**

* Describe and use the node event system
* Implement the Observer pattern using Pub/Sub
* Create a modular, event based system.

## Preparation
This topic leads students directly into the TCP and Socket lectures that follow, and then into the end of section project, which is to build out an event driven queue.

Understand how the core node `events` module works.
  * You cannot have 3 modules separately require "events" and then share events between them.  You need an arbitor or common event instance between them.
  * A module called "events" that requires 'events', creates a new instance and exports that instance.
  * Anyone that wants to share in events must then require that events module, and use it's `emit` and `on` to work in the same queue.

Practice playing with the events module, sending raw events and events with payloads.



## Lecture Main Topics & Overall Flow

It's important to start the students off with confirmation that they already know all about event driven programming. We've done it since 201, but have never really put a name on it, or assigned it a pattern until now.
* Demonstrate Vanilla JS events, jQuery Events 
* Show an express route
* Techinically, these can all respond to the same execution statement:
  * On "This Event", "To this thing", "Do this action"
  * `document.getElementById('xyz').addEventListener('click', function() {...});`
    * On click of 'xyz' run this callback
  * `$('span').on('click', function() {...});`
    * On click of 'any span' run this callback
  * `app.post('/save', (req,res,next) => {...});`
    * On a 'post' to the '/save' route, run this callback
* In classical programming, this is akin to the "Observer" pattern
* Often referred to as "Pub/Sub", where one party will publish an event, and another party will subscribe to it.
    * Neither has knowledge of the other or their context, they are only participating in a blindfolded conversation, like someone shouting from a mountainside
      * "This thing just happened..."
      * "Cool, thanks for letting me know, I don't care"
      * "Cool, thanks for letting me know, I need to do some stuff now"

## Lab Prep
* Students will do a full wiring of an event system.
* They will be given a simple one-file system (like what you start with in the lecture) and tasked with:
  * Modularizing it
  * Using an events module to encapsulate the node events instance
  * Creating subscribers that can consume any message sent
  * Creating a library of common event responders
* This is mainly moving things around and extending a system. Should go far in getting their hands dirty.


## What bugs, issues, or surprises have come up in the past for this class?
* Students will definitely struggle getting events to fire and be heard after they've modularized. 
* Race conditions are common
    * Did they export the events instance?
    * Do their modules simply "run" or do they have exported methods?
        * If they "just run", likely they're going to finish before other modules are loaded.

## General Comments and Notes
* Use words like "Event Queue" when talking through this. We're going to be building one at the end of the week, so getting that terminology embedded at this stage is foundational to the stacked learning process.
* Continually talk through "who is listening" and "who is sending" and "when do we care" when talking about the lifecycle of an event.
