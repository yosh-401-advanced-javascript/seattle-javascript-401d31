# DESIGN - `<Drawer />` Component

## Assignment
Create a `<Drawer />` component, which can contain content (usually nav) and start "off screen". When activated, the drawer slides into view.

Inspiration [Drawer Examples](http://mac81.github.io/pure-drawer/)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* The `<Drawer />` should render it's `children`
* Should start off screen
* Should have some sort of activation (prop)
* Should have a means of closing (prop)
* Accept props to declare the animation and location
* Write SASS to apply the right style classes for the component based on the props/configs

In general, components such as this should declare CSS for their states, but should not be concerned with the triggering of that state. The component that draws the drawer should send it prop functions that the drawer can call upon to close itself.

Why? The container generally is in charge of the overall animations and actions, while the child component is either visible or not. Let the parent component decide what triggers the drawer and decide how/when to close it.

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
