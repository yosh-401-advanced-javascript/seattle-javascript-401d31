401 JS -- class 41 OAuth frontend
===

## OAuth Resources
* Read [Google OAuth2 Overview]
* Read [Google's OpenID Connect Docs]
* Read [Google's OAuth2 for Web Server Applications] and select HTTP/REST in examples
* Skim [OpenID Connect]

## Learning Objectives
* Students will learn how to implent a server side workflow for OAuth2 using Google's OAuth

## Overview
OAuth2 is a authorization standard, used as a way for users to authorize websites to access their information on other websites without giving them the passwords. We use this so that people can log in to our service without giving us their password! This is great because then we dont have to manage the security of protecting their password! 

#### Google OAuth Requirements
* Register as a google developer (there may be a small fee)
* Register an application with the google developer console
* Enable that application to have access to the **Google+ API**
* Create OAuth credentials
 * Add a product name on the OAuth consent screen
 * Create an OAuth Client ID for a web Application
   * Name your app 
    * Enter a `http://localhost:3000` as an authorized origin
     * Enter a `http://localhost:3000/api/oauthcallback` as an redirect URI
 * Save your new `Client ID` and `Client secret` in your backend .env file
 * Also Save the `Client ID` in your frontend .env file
 * Create a `__GOOGLE_CLIENT_ID__` webpack constant in your webpack config

#### Redirecting to Googles's OAuth server
* In order to get a user to authorize you authorize your app you must redirect the user to googles authorization page
* We make an anchor tag that redirects the user to that page, with query strings that tell googles auth server what we are looking for 
* The base url for the redirect is `https://accounts.google.com/o/oauth2/v2/auth`
* The query string properties are
 * `response_type=code` - response\_type is used to tell google wether we want a code or an access\_token. Since we are using a server side workflow we ask for a code first.
 * `client_id=${__GOOGLE_CLIENT_ID__}` - client\_id is used to tell google this request is comming from our app
 * `client_id=${__API_URL__}/api/oauthcallback` - is used to tell google which callback we want to use
 * `scope=email%20openid` - is used to tell google what type of information we want access to (scope and email)
 * `access_type=offline` - acces\_type is used to tell google weather or not we want a refresh token. We chose _offline_ because we do want a refresh token.
 * `prompt=${ __DEBUG__ ? 'consent' : 'none'}` - prompt is used tell google weather or not we want to reprompt the user. we do while we are developing because its the only way it will send us a refresh token every time. but we dont in prodtion because our users would not like it

<!--links -->
[OpenID Connect]: http://openid.net/connect/
[Google's OAuth2 Overview]: https://developers.google.com/identity/protocols/OAuth2
[Google's OpenID Connect Docs]: https://developers.google.com/identity/protocols/OpenIDConnect
[Google's OAuth2 for Web Server Applications]: https://developers.google.com/identity/protocols/OAuth2WebServer
