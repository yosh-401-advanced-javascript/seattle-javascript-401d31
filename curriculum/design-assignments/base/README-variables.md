# DESIGN - SASS Variables

## Assignment
Begin to use variables to create a design with options that also adheres to a core structure/set of rules

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Modularize your design by creating the file structure show below.
  * Import variables into your design ... 
    * At the top of your `design.scss`, do an `@import` for the variables partial
    * In `_variables.scss`, set a few key variables for your design
      * `$rootColor`
      * `$accentColor`
      * `$bleed`
      * `$space`
    * In your `design.scss` file, make use of those variables by declaring a few styling rules for the basic elements, to your tastes
      * Use `$space` to declare the gutter/margin between major elements
      * Use a variation of `$rootColor` and `$accentColor` to colorize the header and footer elements and their text
      
```
    /design
        /lib
            /_variables.scss
        /design.scss
        /reset.scss
```

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
