# Facilitators Guide - Routing and Component Composition

## Preparation
* Get a good grasp on `react-router-dom` and the differences between BrowserRouter, MemoryRouter, Link and Route and how this all differs from normal `<a>` tags.
* This will be the first time they see a context wrapper (`<BrowserRouter/>`) so be prepared to answer questions on it, but tread lightly as we get into context in a later Block.
* Ultimately, we're going to write some components that simply render out `this.props.children` as the JSX given to them. There's not a lot of tough coding there ... however ...
* This is a great opportunity to talk about where your logic belongs, and start to introduce the idea of stateless, functional components that merely work on props as sent in.
* Additionally, the overarching concept of "who does what" is a great discussion point.  Does the parent component offload all of the processing and rendering to the child (sending down the raw data and allowing the child to process/render), or does the parent do all of that and offload the rendering and styling to the child?
  * Who owns the markup and heiriarchy?
  * These are great philosophical discussions that rarely have a solid answer, but are great to get the students talking about pros and cons of coding paradigms.

## Lecture Main Topics & Overall Flow


Composition

  * When you compose things (like music), you are taking reliable parts that are designed to fit together and making something interesting from those parts.
  * Composition can be used to describe heirarchy
  * Composition can be used to tell a story
  * Composition can be used to describe relationships
  
* Draw some images of web pages (wireframes) and point out how the page itself is composed of "parts" and further how each part is composed of smaller parts.
* Sometimes, those parts are full sized components themselves (i.e. a rotator) and sometimes, like with a "card" they are composed of small bits.
* This is a time for us as front end developers to take a step back and not look at page or even component design as a "Top Down" endeavor (literally from header to footer) and instead visit as the holistic collection of parts (components) and how they fit together to tell a story, sell a product, etc.
* Introduce the design concept of ["Cards" and "Decks"](https://docs.google.com/presentation/d/1ue4fX-PGNqLhB2eTmCepS5_PCmx9PKGhsUzj_o5NsKc/edit#slide=id.p17), which are visual compositions of related content.  
  
Life example ...

  * This is an opportunity to open this up to a non-web example on the whiteboard. 
  * Ask the class for ideas from the world where you can describe a compositional approach to solving a problem.
  * For example ...
    * Breakdown an abstract issue such as "Healthcare" where it's not a highly charged issue and has obvious breakdowns, and really look at the parts of it. The solution isn't:  `<Healthcare everyone="true" />`
      * Rather, you can break that down into sub parts to separately solve for, such as `<ElderCare />`, `<EmergencyServices />`, `<BasicHealthServices />`, `<Cancer />` etc.
  * In this way, students can challenge themselves, each other, and you, in creative ways to look at large issues, break them down into smaller, independently solvable parts, and then approach.
  * How might this apply to web site or application design?

Component Composition in an Application or Website

  * There are 2 core cases. Both might apply some logic
    * Send the data to the component, and the component does it all
    * Send JSX to the component simply for rendering
  * We'll be building a simple yet logical component called `<When />` in class which wraps some children to conditionally show them. (Studens will do If and Unless in lab)
  * Another use case is to have a component such as a `<List />` that might take some markup in the form of `<li>` or `<img>` and somehow compose those children.
  * Be creative and find more use cases to talk though.
  
* Routing
  * Relies on composition to render children conditionally
  * `<BrowserRouter />` and `<MemoryRouter />`
  * `<Link to />` instead of `<a href..`>
  * `<Route [exact] path="" />` to conditionally render based on the route.


## Lab Prep
* As part of the "Design" assignment, students will need to create their own semi-styled versions of the `List, If, Card, and Deck` components and put them into a repository so that they can re-use them as needed
* Additionally, they will be tasked with taking some starter code and transforming it into composed components in a few different ways.
* The aim here is to get them muscle memory on those patterns and to start thinking about why they might use one way over another.
  * Part of this assignment is for them to write their thoughts out, so make sure that we check that in their README


## What bugs, issues, or surprises have come up in the past for this class?
* Although conceptually, props.children seems simple on the surface and in it's implementation, the students definitely struggle with understanding "Why the heck would you ever do this?" 
* For this reason, lab is to create an `<If/>` and a `<Modal`/>` component to sell them on some real world applications.


## General Comments and Notes
*
