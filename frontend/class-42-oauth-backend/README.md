401 JS -- class 42 OAuth backend
===

## OAuth Resources
* Review [Google's OAuth2 Overview]
* Review [Google's OpenID Connect Docs]
* Review [Google's OAuth2 for Web Server Applications] and select HTTP/REST in examples
* Skim [OpenID Connect]

## Learning Objectives
* Students will learn how to implent a server side workflow for OAuth2 using Google's OAuth

## Overview
Yesterday, we implemented the first half of the OAuth2 serverside work flow. First we implemented the redirect from the client side to the Goolgle auth sever. Google then redirects back to our API Server with a code and a redirect token. We now need to use that information to request access to the users OpenID information. Then we will save the user into our database.

#### requirements
* add the key `CLIENT_URL` to the servers .env file and give it the value `http://localhost:8080` or what ever port your client app is running on

#### Modifying out previous user model
* first we need to remove the required configuration from the password field
 * remember the point of ouath is so that the user can login without a password
* then we add a googleAuth field which contains
 * googleID - the id google uses to identity that user
 * refreshToken - the token needed to request for a new accessToken token in the future
 * accessToken - the token we can use to make requests using google API'S on behalf of that user
 * tokenTimestamp - the time we recieved the access token
 * tokenTimeToLive - the time until the accessToken expieres
``` javascript
const userSchema = Schema({
  username: {type: String, required: true, unique: true, minlength: 5},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  findHash: {type: String, unique: true},
  googleAuth: {
    googleID: {type: String},
    refreshToken: {type: String},
    accessToken: {type: String},
    tokenTimestamp: {type: Date},
    tokenTimeToLive: {type: Number},
  },
})
```

#### Create a route for rocessing the oauth server redirect 
* create a new router called authRouter
* create a *GET* route handling the `/api/oauthcallback` request from googles auth server
* check that you got a query string from the auth server
 * if the query string has an 'error' key redirect back to the client
 
``` javascript 
authRouter.get('/api//oauthcallback', function(req, res){
  debug('GET /api/oauthcallback');

  // if googleError deal with google Error
  if(req.query.error){
    res.redirect('/');
    return;
  }
  //TODO: next setps go here
});
```

#### request the users token
* parse the query to get the **code** sent from googles auth server
* make a *POST* request to `https://www.googleapis.com/oauth2/v4/token` to get the users acessToken, tokenTimeToLive, and refreshToken
 * since the auth server does not expect 'json' and instead expects a form request, make sure you include `.type('form')`
``` javascript
  // google is expecting a form request ** not a json reqest *** so make sure you use .type('form')

  let data = {
    // the code is the code just recieved from the auth server
    code: req.query.code,
    // this tells google its OUR APP
    client_id: process.env.GOOGLE_CLIENT_ID,
    // this tells google that its are SERVER
    // NEVER NEVER NEVER share your CLIENT SECRET 
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    // tell google which redirect you just used
    redirect_uri: `${process.env.API_URL}/api/oauthcallback`
    // this never changes
    grant_type: 'authorization_code', 
  };
  
  // create variables for later use
  let accessToken, refreshToken, tokenTimeToLive;
  superagent.post('https://www.googleapis.com/oauth2/v4/token')
  .type('form')
  .send(data)
  .then(resonse => {
    // parse the accessToken, refreshToken, and tokenTimeToLive off or req.body
    accessToken = accessToken;
    refreshToken = refreshToken;
    tokenTimeToLive = tokenTimeToLive;
    //TODO: next step goes here
  })
```

#### requests the users openID info
* inside the 'then' callback block after requesting the token
 * make  a **GET** request to 'https://www.googleapis.com/plus/v1/people/me/openIdConnect' and send the google  accessToken in a Bearer auth header

 ``` javascript
.then(resonse => {
   return request.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
  .set('Authorization', `Bearer ${response.body.access_token}`)
})
// TODO: next setp goes here
 ```

#### create user and genorate token
* use all the previously aquierd information to create a user 
* use the users original generateToken method
``` javascript
.then( response => {
  let userData = {
    username: req.body.email,
    email: req.body.email,
    google: {
      googleID: req.body.sub,
      tokenTimeToLive: tokenTimeToLive,
      tokenTimestamp: Date.now(),
      refreshToken: refreshToken,
      accessToken: accessToken,
    }
  }

  return new User(userData).save()
})
.then(user => user.generateToken())
.then(token => {
  // redirect back to the user and pass the token in the query string
  res.redirect(`${process.env.CLIENT_URL}/?token=${token}`);
})
// TODO: next step goes here
```

#### handle any errors and redirect to client
* log the error
* redirect back to the client 
``` javascript
.catch(err => {
  console.log(err);
  res.redirect(`${process.env.CLIENT_URL}`);
});
```

<!--links -->
[OpenID Connect]: http://openid.net/connect/
[Google's OAuth2 Overview]: https://developers.google.com/identity/protocols/OAuth2
[Google's OpenID Connect Docs]: https://developers.google.com/identity/protocols/OpenIDConnect
[Google's OAuth2 for Web Server Applications]: https://developers.google.com/identity/protocols/OAuth2WebServer
