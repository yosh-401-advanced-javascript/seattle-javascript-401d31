![cf](http://i.imgur.com/7v5ASc8.png) 17: Bearer Auth
===

## Resources
* read [intro to jwt](https://jwt.io/introduction/)

## Learning Objectives
* students will be able to create bearer authentication middleware
* students will be able to utilize their bearer authentication middleware in their route structures
* students will be able to test against authenticated routes

## Bearer Authorization
Bearer authorization is a common way send a user token in an http request. The user token is placed after the string 'Bearer ' and the resulting string is set to the Authorization header. Bearer authorization is often used to create routes with access contriols. A server can decode the token into a user and determine if the client is authorzied to make the request.

```
let token = '98asdf7987asfd987as98df79a8s7f9d87as98df79a8s7f98as7fd9a8s7df987adfs798'

request({
  method: 'POST'
  url: 'https://api.example.com/notes',
  data: {content: 'get milk!'},
  headers: {
    Authorization: `Bearer ${token}`
  },
})
.then(handleLogin)
.catch(handleLoginError) 
```
