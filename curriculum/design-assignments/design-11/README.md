# DESIGN - Buttons and Links

## Assignment
Buttons and links are the lifeblood of any website or application. They are the means by which your users get things done as well as the vehicle for firing events and behaviors within your applications.

There are quite literally millions of ways to style and layout buttons and links. This assignment is to derrive a system to do this scalably and with plenty of differentiation.

Inspiration: [so many exmples...](https://freshdesignweb.com/css3-buttons/)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Work in a fork of your "sass-design" repository in your github account
  * Create a `<Button />` comonent that takes the following props:
    * onClick - Method to run on click
    * href - Remote destination
    * text - Display Text
    * Type - primary, secondary, etc
  * Use SASS Modules to provide custom styling (and options) with your components
  * Buttons will be styled differently depending on where and how they are used, what type they are, etc.
  * The task here is to use the props to get it right
  * The component rendering the button has the responsibility of knowing what right is.
  * Plan for many classes and rules -- modularize this and make use of mixins to provide an easy means of differentiation.


### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
