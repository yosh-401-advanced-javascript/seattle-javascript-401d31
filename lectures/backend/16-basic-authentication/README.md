![cf](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
===

## Resources
* read [basic auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

## Learning Objectives
* students will be able to create basic authorization middleware
* students will be able to test basic authorization for signup/signin routes

## User Modeling
Modern web applications need to model sensitive information about their users. When a users provides an applications with sensitive infromation, they are trusting that it will not leeked are missued. This means its a developers responsiblity to store that information responsibly. Some information like emails, usernames, and addresses can be stored in plain text, as long as the database is password protected and or behind a firewall. Other information like a users password should be encrypted using a hashing algorythm before it is ever stored, preventing anyone (including developers with database permssions) from ever getting access to their password.  

User models that have sensitive data should **NEVER** be sent to client applications. If your application requires that users be able to read each others personal information, create a second Profile model to hold that data, and strictly limit access controlls to the Profile model. Safely using a second model will ensure that no users will accidenlty or mallisiously get access to sensitive information. 

## Cryptography 
#### Hash Algorythems
#### Cyper Algorythems


#### Basic Authorizaton


