# Facilitators Guide: Access Control (ACL)

## Learning Objectives

**Students will be able to ...**
* Integrate back-end authorization controls using Express and Mongoose

## Preparation
* Come up with some great concrete exaemples of Role Based Access Control
* Students will want to be able to equate this work with something "real"
* Your demo should use a different server than the api-server that we've been building towards. Do just enough demo to show the principle without giving away the answers.

## Lecture Main Topics & Overall Flow
* Role Based Access Controls
  * This is one way to implement "Authorization" -- what can you do
  * Use this to group users by type
  * Grant certain capabilities or behaviors to each type of user
  * Then, restrict access to features based on capabilities
* Back-End use cases:
  * Ability to do write operations on data
  * Which data can you access
* Front end use cases:
  * Hide screens, buttons, content
* Cookies and Token Transfer
  * To this point, we've been just sending around tokens
  * Now, lets wire the front-end to take a cookie and send it back.

## Live Coding Demo(s)
#### Demo Name -- `demo/server`
*

#### Demo Name -- `demo/client`
*

## Lab Prep
* They will need to protect routes with authentication AND role/capability
* `middleware.js` - check both for a valid user and a valid capability
* `model.js`
  * write some sort of `can()` method to check the user's capabilities
  * put their capabilities into the JWT
* `app.js` (or some other routing file) - add a route that uses `auth("delete")` or some other capability to protect access to it.

## What bugs, issues, or surprises have come up in the past for this class?
*

## General Comments and Notes
*
