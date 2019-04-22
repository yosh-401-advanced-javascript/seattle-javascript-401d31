# LAB - Socket.io Client

Today, we begin the construction of a Twitter-like application called "Yakker"

## Before you begin
Refer to *Getting Started*  in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

* Open this [Starter Sandbox](https://codesandbox.io/s/5zzpv6zlon) and Fork it
* Create a new repository in your github account called `yakker-server`
* Copy the starter code from this reppository into yours, run an `npm install` and start it up with `nodemon`

## Assignment
Extend the functionality of the base **Yakker** application

### Requirements - Client
* Add message history to the display
  * Only the last 15
  * Allow a user to bookmark, like, or un-like a message
* STYLING
* Animate incoming messages

### Requirements - Server
* Add support for additional events
  * What else should you consider supporting?
    * Flag? Like? Delete?
  * Hold onto history
    * Up to 1000?
    * Persist on server stop, Load on start

### Testing
* Write tests around all of your units
* Test event handlers (not events themselves)

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
