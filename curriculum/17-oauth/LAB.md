![cf](http://i.imgur.com/7v5ASc8.png) OAuth
===

## Submission Instructions
  * Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository

## Learning Objectives
* Students will learn to add OAuth from any provider to an express/mongo app

## Requirements
- Your instructor will assign you one of the following OAUTH 2.0 providers to integrate.
  - [Facebook](https://developers.facebook.com/docs/facebook-login/overview)
  - [GitHub](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
  - [Auth0](https://auth0.com/docs/api/authentication)

This is a paired lab that will have you integrating OAuth with any provider.

#### backend
* create an account/app/credential on your assigned OAuth Provider
 * configure oauth credentials to support a client app on `http://localhost:PORT`
 * configure oauth credentials to support a server redirect uri to `http://localhost:PORT/oauth`
* create an implementation library (/auth/lib/providers/`provider`) that holds your logic
* create an oauth library (/auth/lib/oauth.js) that can identify and use your provider implementation
* create a backend route `GET /oauth` for handling oauth handshaking
* this route should interface with the oauth library created above

#### frontend
* create an index.html with an anchor tag pointing to the google authorization page
* configure the query string with correct key value pairs

#### Documentation
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars.
