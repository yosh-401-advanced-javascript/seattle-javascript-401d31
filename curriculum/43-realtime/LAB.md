![cf](http://i.imgur.com/7v5ASc8.png) 43: Socket IO and Realtime
===

## Submission Instructions
* continue working from lab-42
* make a **new branch** and create a **new pull request** and submit a link on canvas
  
  
## Learning Objectives  
* Students will learn to add realtime connections from thier cilent to their server

#### Feature Tasks  

### Model 
* create a history model that defines what a speech bubble can display in a chat room

#### backend
* Add Socket IO to your backend, with a means for adding subscriber handlers 
* Subsribe to events dispatched from the frontend
  * in your subscibers publish data to the frontend to update the chat

#### frontend 
* Add Socket IO to your frontend, with a means for adding subsciber handlers
* Add a redux-io middleware which will emit each action to the backend
* Subscribe to the backend events
  * update the store when the backend sends payloads

####  Documentation  
Write a description of the project in your README.md
