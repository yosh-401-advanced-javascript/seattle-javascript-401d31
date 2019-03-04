# DESIGN - SASS Design Scaffold

## Assignment
Get your design workspace ready for development and show **proof of life**

### Setup
If you haven't already done so, Fork the [starter sandbox](https://codesandbox.io/s/nrozq68z80) and connect it to your github account, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

Resist the urge to style it all up right now ... you will be styling this website/content a little bit each day as you progress through the coursework, but it might look ugly in the meantime.


### Requirements
* Create a new folder under `/src` called `/design`
* In this folder, create 2 new files: 
  * 'reset.scss' with in your favorite CSS Reset code
  * `design.scss'
* Edit the `app.js` file in the `/src` folder and add these lines after the last `import`
    * import './design/reset.scss';
    * import './design/design.scss';
* Place a few basic css rules in the `design.scss` file, using sass syntax 
  * Set the html and body to 100% height and width
  * Note that #root (not body) is the page wrapper
  * Apply some basic styling the header and footer
    * background, font color, margin, padding
  * Apply some basic styling to main
  * Pin the footer to the bottom
  * Keep the header fixed to the top, scrolling long content underneath
* Ensure that your design is loading and applying to the visible page

```
    /design
        /design.scss
        /reset.scss
```

### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
