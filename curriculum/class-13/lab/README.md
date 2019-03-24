# LAB: Bearer Authorization

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Getting Started
* You have been provided a server that can handle basic authentication and OAuth in the lab folder.
* You'll need copy the contents of the auth-server folder into a new git repository for this lab, install your dependencies, setup your npm script commands, and pull in your config files
* You've been provided a server code with the authentication middleware, models and routes scaffolded in.
* You will need to create a .env file with:
    * MONGODB_URI
    * PORT
    * SECRET
    * GOOGLE_API_KEY
    * GOOGLE_CLIENT_SECRET

## Requirements
Implement a Bearer Authentication system with optional token expiry, api keys, and single use tokens.

### Assignment 1: Install the core bearer authorization system
* `middleware.js` - Handle the Bearer Header to pull and verify with the token
* `users-model.js` - Add a bearer authorization method that verifies the token

### Assignment 2: Improve the core bearer authorization system...
* Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
* Add support for the creation and usage of 'single-use' JWTs
  * With every authenticated access, re-send a new JWT token as a cookie or header
  * Disable those that you've already authenticated
* Implement these via configuration (i.e. an env setting or login option) so that your system can handle multiple authorization schemes

### Assignment 3: Create a Auth Key system
  * Create a new route: `router.post('/key' ... )` that will generate a JWT without an expiration date, and noted to be an auth key (so that it won't be deleted like a single use token)
  * Allow users to authenticate using the Auth Key as they would a normal token
  * Auth Keys should never expire
  * Auth Keys should be re-usable
  * How might you make this secure?

### Testing
* Add test coverage to the auth tests to assert that:
  * given a good token user is able to "log in" and receive a new token
  * Tokens can optionally be expired
  * Expired tokens do not allow a user to login
  * Auth Keys can login a user as a token would
  * Auth Keys do not expire


## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
