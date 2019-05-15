# DESIGN - SASS Mixins

## Assignment
Begin to use mixins to provide dynamic functionality to your design

**Inspiration**

* [10 Mixins you should be using](https://engageinteractive.co.uk/blog/top-10-scss-mixins)
* [SASS Mixin Guide](https://marksheet.io/sass-mixins.html)
* [10 more mixins...](https://medium.com/@justinbrazeau/10-useful-sass-mixins-for-automation-833cdee9d69b)

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Work in a new branch of this repo

### Requirements
* Add support for mixins to your design
    * At the top, do an `@import` for mixins partial, after your import of variables.  Order does matter.
    * In `_mixins.scss`, create some mixin functions...
      * `@mixin borderRadius($radius)` - create border radius rules based on `$radius`
      * `@mixin flex()` - take in params that would output a proper set of flex rules (row/column, spacing, etc)
      * `@mixin center()` - make it easy on yourself to center things vertically and/or horizontally.
      * Make some border mixins (with good names) that you can call to apply various box shadow effects
      * This file will (and should) grow with you over time as you find opportunities to create re-usable functionality.
    * Generally, a proper use of mixins in sass is to provide a full set of css rules, including browser prefixes.
    * In your `design.scss` file, make use of those variables by declaring a few styling rules for the basic elements, to your tastes
      * Use `$space` to declare the gutter/margin between major elements
      * Use a variation of `$rootColor` and `$accentColor` to colorize the header and footer elements and their text
  * In `design.scss`, use a few mixins to apply some (perhaps random) styling to the elements in the test page.
      
```
    /design
        /lib
            /_variables.scss
        /design.scss
        /reset.scss
```

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
