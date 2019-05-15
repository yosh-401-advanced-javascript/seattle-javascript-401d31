# DESIGN - SASS Modules

## Assignment
Get truly modular with your design.  Modularity is the key to both extensibility and scalability.

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Add support for mixins to your design
    * At the top of your `design.scss', do an `@import` the partials as specified below, from the `lib` and `core` folders
    * Move any rules that you have in your `design.scss` file into the appropriate partial.
    * For now, things that don't go into header or footer, go into base.
    * `design.scss` should **only** be a hub for importing what's needed, in the right order. It is the "entry point" for your design

```
    /styles
        /lib
            /_variables.scss
        /core
            /_header.scss
            /_footer.scss
            /_base.scss
        /design.scss
            
```

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.

