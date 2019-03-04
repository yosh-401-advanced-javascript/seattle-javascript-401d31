![CF](http://i.imgur.com/7v5ASc8.png) 401 Advanced Javascript - Design Assignments
==================================================================================

Every day in blocks 5, 6, 7, students will be presented with a new design assignment to be completed along with each daily lab.

The intent is that by the end of the course, students will have a complete "scalable" design that can be used as a solid starting point for any web project, as well as a stable of React components that can both integrate into the overall design, or stand alone.

*Think [Material Design](https://material-ui.com) vs [Bootstrap](https://getbootstrap.com/docs/3.3/css/)*

Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

During your build-outs of React components, you'll be pulling from and adding to this repo, moving things around, and generally setting up your personal design workflow.

Students may work in code sandbox or locally.  In either case, each design assignment should be completed as a new PR in the `design` repository

Most of the design assignments come with some sort of "Inspiration" or collection visual examples to serve as either instructional materials or examples of what can be done. We encourage you to dive in and see how things work, read about why certain things are considered to be better practice than others, and generally look at approaches.  DO NO plagarize. Be inspired. Look, learn, tinker. And then be a developer and create this design your own way. If you do lean heavily on one approach (even just philisophically), provide a link back or a shout out to the originator.

## Design/Component Progression:

### 01 - Scaffold, Variables, Mixins, Modules
* Setup a basic SASS design folder structure and compiler
* design.scss
* Create variables for simple alter-ables
* Create mixins for resusable/variable elements
* Break out the previous steps into separate _files and Create a design  root that imports them.

### 02 - Navigation
* Horizontal, Hamburger, Vertical

### 03 - Basic Form Layout
* Fieldsets, Labels, Placeholders
* Inputs, Textareas
* Selects, Radios, Checkboxes

### 04 - Lists
* Navigation Lists
* Icons
* Selectors

### 05 - Grid Layouts
* Implement an old-school GRID layout system

### 06 - Deck Layouts
* Design a system for laying out cards within decks
* Basic 1,2,3 layouts
* Highlight Center
* Slider

### 07 - Card Layouts
* How many ways can you design a card?

### 08 - Mobile 
* Mixins for handling media queries

### 09 - Tables
* HTML Tables
* Div Driven Tables
* Sorting, Filtering

### 10 - Responsive Tables
* Responsive Table Tricks, Why

### 11 - Buttons and Links
* Single, Groups

### 12 - Slideouts and Drawers
* From all sides
* Mobile UX



#### Design Topology

```
    /design
        /lib
            /_variables.scss
        /core
            /_header.scss
            /_footer.scss
            /_base.scss
        /design.scss
            
```

