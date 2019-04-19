# DEMOS - Props and State


* Definitely a good opportunity to draw a UML diagram of the component structure with connections and then a separate layer on that drawing showing state, props, functions as they get passed around.

* Be prepared to forego JSX and write out the native React functions.  Students have a tough time grokking the idea that JSX Elements are actually functions that have a friendlier appearance. Making all of this "work" with old fashioned javascript and then saying "But markup is more visually compelling" usually sells it pretty well for them.

## Props & State `/demo/props-and-state`
* This is a "tinker with it" style demo where you build a couple of components and randomly pass state, props, words, functions around between them to demonstrate how that wires.
* Send state down (to be rendered as props)
* Send functions down
  * When run -- they can modify state in the parent, which in turn re-sends the props to the child
* Render arrays and arrays of objects to show how .map() and filter work

## RESTY `/demo/resty`
Using the tools that we've demonstrated in the core demo, start to build out the RESTy app, which is a simple clone of Postman

Just build the basics so you can show how to compose an app with basic tools. You will build this out with more fidelity over the next several classes.

You might want to build this in a separate Code Sandbox or Repo and continually build it into a real application as we layer on the complexity so that it grows organically in front of the students.

Style it as you go. More opportunity to give students ideas.

  * Form with an input field
  * Button to submit
  * Fetch the URL given in the field with superagent
  * Render out the returned JSON object
    * First use it and render out the values (just to re-iterate rendering arrays)
    * Kill that, and then put out the JSON in a `<pre>` tag
    * Then, lets shop and find a 3rd party JSON renderer
      * This can show them how to integrate external libraries...
