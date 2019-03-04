# DESIGN - Responsive Tables

## Assignment
Tables are inherently **not** responsive. They are always going to have the number of columns defined, and those columns will always have the data they have.

On mobile this usually results in either horizontal scrolling or squished/unreadable data, both of which are highly undesirable.

To develop "responsive" tables, the general approach is not to use `<table />` at all but rather a creative use of `<div />` and either `css-grid` or `css-table-x` rule sets to alter the layout of tables at smaller resolutions and screen widths

Inspiration: [CSS Tricks Responsive Tables](https://css-tricks.com/accessible-simple-responsive-tables/) (Great list of alternative solutions at the bottom of that article as well)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Work in a fork of your "sass-design" repository in your github account
* Create a new component in the design application called `<ResponsiveTable />`
* Come up ad provide styles with 3 responsive layouts
* Create a JSON file of data in a format that you define
* Require this data in your component, and use it to create your desired markup structure, based on your design choices.
* Tinker with dynamism: adding rows dynamically, filtering, etc.
* Implement these as classes/modules in your design, organized in files as you see fit.


### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
