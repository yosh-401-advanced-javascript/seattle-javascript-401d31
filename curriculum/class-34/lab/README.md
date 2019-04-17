# LAB - Remote CRUD

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

Fork [this sandbox](https://codesandbox.io/s/n7552v6jpl)

Fire up your API Server locally or connect your app to our remote API
* https://javascript-401-api.herokuapp.com

## Assignment
Conver the forms lab into using remote APIs to source the schema and save the record data

### Requirements
* Remove the code that requires the `.json` file in  your react app for the schema and adds it to state
* Pull the schema from the remote server via the resource path `/api/v1/players/schema` (or whichever model you choose)
* On your first pull from the server of the database records, save them in the store for faster retrieval
* Instead of saving straight to the Redux Store, use an async action creator function to send data to the server (using post or put) and then update the local store
* When rendering the forms and lists, use the store as a cache, and update it after you save to the server.

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Style it!

### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
