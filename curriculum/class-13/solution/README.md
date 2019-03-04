![cf](http://i.imgur.com/7v5ASc8.png) Solution: Bearer Authorization
====================================================================

## Token Expiration

`users-model.js`

  * Added expiration to the token create method, based on the TOKEN_EXPIRE env variable
  
```
  users.methods.generateToken = function(type) {
    
    let token = {
      id: this._id,
      role: this.role,
      type: type || 'user',
    };
    
    let options = {};
    if ( type !== 'key' && !! TOKEN_EXPIRE ) { 
      options = { expiresIn: TOKEN_EXPIRE };
    }
    
    return jwt.sign(token, SECRET, options);
  };
```
  
## Single Use Tokens

`users-model.js`

  * Created a set (usedTokens) that we reference in the `authenticateToken()` method. 
    * This can be optionally turned on using the SINGLE_USE_TOKENS environment variable 
    * If a token is in the set, we return an invalid token error
    * Otherwise, we add it to the set
    * This ensures that tokens are only ever used once.
  * The middleware will always stamp `.user` and `.token` on the request object
  * It's up to the routes that are authenticated to keep sending that back in the header
  
```
users.statics.authenticateToken = function(token) {
  
  if ( usedTokens.has(token ) ) {
    return Promise.reject('Invalid Token');
  }
  
  let parsedToken = jwt.verify(token, SECRET);
  
  // Add to the scrap heap if we are in "one use token mode" and this token isn't a reusable "key"
  (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);
  
  let query = {_id: parsedToken.id};
  return this.findOne(query);
  
};
```


