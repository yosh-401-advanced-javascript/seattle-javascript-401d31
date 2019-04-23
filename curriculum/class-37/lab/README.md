# LAB -  `<Login />` and `<Auth />`

## Before you begin
Refer to *Getting Started*  in [lab-instructions.md](../../../reference/submission-instructions/labs.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder. 

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment: Implement Login and Authorization into an existing application

### Requirements
* Hide the entire interface until the user has logged in.
* Provide a login and logout option in the main menu
* Implement the following RBAC rules:
    * Logged In Users with 'read' permissions can see the list of data models and records
    * Logged In Users with 'delete' permissions can delete records
    * Logged In Users with 'update' permissions can edit existing records
    * Logged In Users with 'create' permissions can create new records

### Notes
* You may not alter the functionality of the existing application components.
* You may only grant access using RBAC
* The API server supports the following routes:
  * **POST** `/roles` - Accepts a JSON object with `role`, `capabilities` (array) to create a role.
  * **POST** `/signup` - Accepts a JSON object with `username`, `password` to create an account
  * **POST** `/signin` - Signin with either Basic Auth or Bearer Auth, returning a JWT Token
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/model` - A list of all records in a given **model**
  * **GET** `/api/v1/model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/model/id` - Tactically update a single record, from a **model**, with the **id**
* The API server has the following user accounts (username:password) that you can use to login as a user with varying permissions
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)

### Testing
* Write a suite of UI tests that assert the existence of components based on user login state.
* You will need to create some mocking interface to fake a server/login to simulate.

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
