# DESIGN - Navigation

## Assignment
Style navigation elements

**Inspiration**

* [100 Menus](https://www.jotform.com/blog/100-great-css-menu-tutorials/)
* [20 menu examples](https://medium.com/level-up-web/20-responsive-navigation-solutions-examples-codes-21644390afeb)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Create a new mixin, under `core`, called `nav`
* Create the following navigation rules:
  * Target: `nav` in the page header (direct child of #root > header)
    * Assume `<ul>` `<li>` structure, perhaps with nesting
    * Style horizontally in the header nav
    * Positioned (by rule or by mixin) vertically top, bottom, center and horizontally left, right, center
    * Hide nested `<ul>` `<li>` trees until hover
    * If there is a 3rd or lower level, hide those as well
      * implement as a fly-out
    * Provide a minimum 44px square tap target
    * Style nicely
      * Hover States, Indicators, Animations, etc.
      * Use `_variables` and `_mixins` wherever possible to provide more means of differentiation and styling options
      * Implement responsive options
        * Hamburger/Flyout
        * Convert to drop down
  * Body Navigation
    * Target: `nav` anywhere under `<main>`
    * The use case here is navigation on the left or right side of a page, perhaps as "sub" or "section" navigation
      * Folow the same rules as for header, but with options more suited to an in-content flow layout (perhaps vertical)
      * Think of options for navigation as both a sidebar, and even within a horizonal area (like a carousel)

You can implement this using CSS-In-JS methodologies or by using context to dynamically load different SASS Partials with your theme.

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.

---

# DESIGN - Lists

## Assignment
Create and manage a dynamic `<List />` component that can accept an array of data and some props to define it's look and behavior

There are hundreds of ways to lay out and style lists, use your imagination.  More importatnly, create a component/styling system that can grow over time as you develop and need more ideas and options in the future.

Inspiration: [List Examples](https://designshack.net/articles/css/5-simple-and-practical-css-list-styles-you-can-copy-and-paste/)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Work in a fork of your "sass-design" repository in your github account
* Create a new component called `List` with the following requirements:
  * Accepts a property called `items` which is an array of data to render
  * Accepts a property indicating what type of list this is (ordered, unordered, etc)
  * Accepts a property indicating what style of list (this is visual)
  * Generate the correct JSX and SASS to render the elements from `items` in proper semantic tags.
  * Write styles/sass modules designed to style your list correctly based on options sent in with props.

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.

