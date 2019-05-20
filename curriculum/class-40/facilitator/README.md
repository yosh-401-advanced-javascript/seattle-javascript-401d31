# Facilitators Guide: Block 8 - DS&A, Designs, Comp Sci, Recap

At the end of this Block the students are presented with 2 assignments:

* End of Block "Project": RESTy Refactor (to Redux)
  * 25 Points
  * Paired
  * Due prior to the start of the next Block
* Design Challenge: Cards and Decks
  * 10 Points
  * Due prior to the end of the next Block
    

## Lecture Main Topics & Overall Flow

### DS&A - Review

* This is a good opportunity to do a full review
  * All Data Structures (theory)
  * Proper traversal mechanics for each
  * Good use cases for each (when do choose one over another)
  * White Board Strategies

### SASS - Cards and Decks

* Cards - granular unit of content in semantic markup
  * Title
  * Media (image(s), video)
  * Copy (random markup)
  * Links
  * Arranged in any number of ways (via class)
    * Image Left, Right, Top, Bottom,
    * Flip with content on back, etc.
* Decks - Collections of Cards
  * Arranged in any number of ways (via class)
  * Side by side
  * Carousel
  * Accordion
  * ... let your mind wander
* Draw out as many examples of both that you can think of as a class.
* Show the markup (below) and code one version out.

```html
<section class="deck 3-col">
  <div class="card">
    <title>Card Title</title>
    <figure>
      <img src="image.jpg" />
      <figcaption>An Image</figcaption>
    </figure>
    <div class="copy">
      <p>Some Content</p>
      <ul>
        <li>thing 1</li>
        <li>thing 2</li>
      </ul>
    </div>
    <nav>
      <ul>
        <li>
          <a class="primary">Click Me</a>
        </li>
        <li>
          <a class="secondary">Not Me</a>
        </li>
      </ul>
    </nav>
  </div>
</section>

```

### Lab Prep

* Demo the currently [deployed RESTy app](https://resty.netlify.com)
* Whiteboard and plan out how to approach the architecture given knowledge of Redux being layered onto their core React knowledge

## What bugs, issues, or surprises have come up in the past for this class?


## General Comments and Notes
