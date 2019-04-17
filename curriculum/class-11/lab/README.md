# LAB: Authentication

## Before you begin
Refer to *Getting Started*  in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements and assess how to apply each requirement to your model.

 * For Each Requirement, ask yourself questions such as:
   * Where should this new code live in the codebase?
   * Which existing code needs to be modified?
   * Are there any dependencies that this feature requires

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

* You've been provided a server code with the authentication middleware, models and routes scaffolded in.
* There are some potential bugs and missing logic.
* Work with a partner!

## Requirements

### Assignment: Auth Server
* Create a UML diagram of the authentication system on a whiteboard
* Identify and fix any bugs
* **NEW CODE:** Protect the `/book` and `/book/:id` routes by requiring user authentication
* Document and publish the code with JSDoc

### Testing
* POST to /signup to create a new user
* POST to /signin to login as a user (use basic auth)
* Need tests for auth middleware and the routes
  * Does the middleware function (send it a basic header)
  * Do the routes assert the requirements (signup/signin)
  * Are the book routes protected properly?
* Ensure that you use supergoose instead of mongo/express

### Notes

Signup with httpie: 
```
echo '{"username":"name","password":"pass"}' | http post :3000/signup
```
Signin with httpie: 
```
http post :3000/signin -a username:password
```
You may also use Postman or RESTy

## Assignment Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations

