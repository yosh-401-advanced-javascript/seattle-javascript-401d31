# Facilitators Guide: Component Based UI

## Learning Objectives

**Students will be able to ...**
* Desribe in general terms "Component Architecture"
* Describe in general terms application and component "State"
* Begin a React project locally with `create-react-app`
* Use codesandbox.io to work live on a React application
* Create and render `Class` and `Functional` React components to the DOM
* Add event listeners to React components
* Update React component state
* Style React applications/components

## Preparation
* Its React time, so get comfortable in the ecosystem.
* Students will really struggle on how things fit, what calls what, and how the magic works. Make sure that your demos and coding style leaves room for the rabbit holes, questions, and confusion that will arise.
* Main takeaways for the day:
  * Basics of a React App
    * index.html in public (root div)
    * index.js as bootstrapper
    * React Renders into that div
    * jsx is actually javascript but it looks like markup
    * Components can be classes or functions
      * Class - `render() { return(jsx) }`
      * Function - `return(jsz)`
    * Components can load and render each other
    * Components cand load their own css

## Lecture Main Topics & Overall Flow
* SASS
  * Open [SassMeister](https://www.sassmeister.com/)
  * Do a brief demo of SASS's primary features
    * element nesting and `&` targeting
    * variables (background colors)
    * mixins (make a border-radius mixin)
  * We will be using SASS in our daily design challenges as well as every React Component and application, so set them up for the basic execution.
  * Every day, as you code your demos, do some styling and use SASS features
  
* Before we get into the nitty gritty of React itself ...
* Take a walk down memory lane
  * Build the Vanilla demo
    * Talk pros and cons (ids, event listeners, difficult to change behavior, etc)
  * Build a jQuery demo
    * Pros and Cons - cleaner syntax, Handlebars takes a state and can be easily rendered without touching each thing.
    * Still hard to make sense of all the code
  * Build again in React
    * Sell the magic of "simply changing state to get a re-render"
    * Sell how little JS you actually had to write to make it happen
    * Sell how cool it was to make and render 3 components as "Markup"
    
**Break**

* Now that it's simmered for a bit, lets jump into what happened there
  * Components
    * Header = <Header />, etc
      * Just like calling Header() from in a JS function, but easier
  * State
    * setState() does some event triggering behind the scenes for you
    * The app knows state and what bits care about it, and re-renders as it changes
    * You can focus on:
      * Building the parts and what things do given different "States"
      * What causes a state change
      * How to change state when that thing happens

**Modularity**

* import - equivalent of require on the node side
  * other components (which you can then render)
  * css or sass



## What bugs, issues, or surprises have come up in the past for this class?
* Understanding how things connect is always a tough nut for the students to crack.

## General Comments and Notes
*
