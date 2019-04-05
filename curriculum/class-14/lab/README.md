# LAB: Access Control

## Before you begin
Refer to *Getting Started* in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup instructions

## Getting Started

## Requirements

Implement Role Based Authentication

### Assignment
* Create a new router that contains a few new routes (see examples below) that we can protect using our authentication model.
* Protect your New Routes with the proper permissions based on user capability
  * `router.get('/public-stuff')` should be visible by anyone
  * `router.get('/hidden-stuff')` should require only a valid login
  * `router.get('/something-to-read')` should require the `read` capability
  * `router.post('/create-a-thing)` should require the `create` capability
  * `router.put('/update)` should require the `update` capability
  * `router.patch('/jp)` should require the `update` capability
  * `router.delete('/bye-bye)` should require the `delete` capability
  * `router.get('/everything')` should require the `superuser` capability
* You will need to restrict based on the given permission via middleware
* Implementation of the ACL itself should be re-written using a separate model populated as a virtual field in the users table
   * *not as a hard-coded table within the User Model as done in the demo*
   * Hint: This might impact the .can() function and how you build out the token
   * You will need to create, allocate, and identify roles and capabilities permissions in a new collection called 'roles' in  your mongoose database

### Testing
* Add tests to the api routes, asserting restricted access to the routes as shown.
* Add tests to the mongoose model for the created static and instance methods.


## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
