# DEMOS - Application State

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Demos

* Build out a full Redux implementation of a simple component that swaps out a name for a random number and then lets you reset it.  It uses a very simple action and reducer, but demonstrates the right ways to hook a component into a store.
* Following the main demo in the App component, create a new component (`<Name />`) and connect it to the store as well, but only to read state. This is cool to show students how 2 sibling components can connect to a common bit of global state and both respond to changes.

## Draw Pictures!

Students will really benefit from you creating a visual representation of the store and how components connect to it before you build out the code.
