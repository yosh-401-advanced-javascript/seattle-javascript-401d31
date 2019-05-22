# Facilitators Guide: React Testing and Deployment

## Learning Objectives

**Students will be able to ...**
* Write and Execute Snapshot tests for a React Application
* Write and Execute Enzyme (live) tests for a React Application
* Deploy a React applicaation to AWS S3 manually
* Deploy a React application to cloudfront directly from github

For this class, the focus is less about coding and more about the ecosystem. In the first class, we showed a simple React app to get the students fired up about what React and Compoent frameworks **can** do.

In this class, we'll take our first look at **how** React does it, and how we play nicely in the world -- testing, documentation, and deployments. This will be a long one, but sets the students up well to execute the next 3 blocks of material.

## Preparation
* Really understand your testing environment
* Write and build documentation using Styleguidist
* Practice React TDD
* Practice getting your code tested at Travis
* Really practice the AWS variants (S3 and Cloudfront)
* Do a deployment at Netlify

There's a lot to get through in this lecture, so being on point, and having solid answers to the questions that will come up with testing and deployment are imperative.

Today is a tough one to execute for the students (esp AWS). It's important that your demo be SOLID, as they'll likely have to re-watch it multiple times to really understand and be able to go through all of the deployment and CI steps.


* Main takeaways for the day:
  * Testing of a React App
    * shallow mounting
    * mounting
    * Snap-Shots
  * Documenting a React App
    * [Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html)
    * Component.md file
  * Deployment of a React App 
    * Ultimately, it's just a static file (index and js) like a 201 app
    * Need to run a build
    * AWS S3
    * AWS CloudFront
    * Netlify
    * GoDaddy

## Lecture Main Topics & Overall Flow
* Deploying a standard React app is different
  * Why?
    * It's all front-end.
    * Although we run a "dev server", it's actually 100% just raw files
    * (Demonstrate a build)
    * (next.js changes this, but we're not always going to be in that world)
  * So, lets get it out there ...
    * Live Demo of doing it at Amazon, step by step at S3
    * Live Demo of automating it with Cloud Formation (.yml)
    * Live Demo of deploying to Netlify
  * What was that whole "cloud thing" again?
    * Great chance to draw a picture of how CDNs work and talk about why
    
* Documenting is different than on the Node side
  * Styleguidist is live documentation
  * Easy to write docs (.md files)
  * Creates a live doc server and can build static docs

* Testing is ... "interesting" on the front-end
  * Generally, you don't have nice little "units" to test like you on a server
  * We have disconnected bits of code
  * We have both app and component state
  * We have events that affect App State, Other Components and their state, and the DOM.
  * **Snapshot Testing**
    * A live "picture" of the actual rendered markup at given app states
    * Passing snapshot tests demonstrates stability, but in a static way
  * **Enzyme Testing**
    * Renders the app, or a component at varying levels of fidelity
    * Allows you to simulate clicks & typing to trigger events
    * You can inspect state
    * You can traverse the DOM with a jquery-like syntax

## Lab Prep
* Students will have 5 core tasks to complete for this lab:
  * Complete a full UML Diagram for the application.
  * Apply some thoughtful styling to the app
  * Document the components with examples
  * Fully cover the app in tests
  * Deploy a react application to a bucket manually
  * Use automation to deploy a react app to AWS from Github.
  * Hook up a React app from Github to Netlify
* We will be supplying them with working starter code, so they are able to jump right in and start syling, testing, and even get a working deployment right away.

## What bugs, issues, or surprises have come up in the past for this class?
* Understanding how things connect is always a tough nut for the students to crack.

## General Comments and Notes
