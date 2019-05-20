# SOLUTION - Remote APIs

## Lab Requirements

#### Grading Standards & Notes
  * Features
    * Get the initial fetch and the detail fetch working
    * Use and style a proper Modal
    * Multiple reducers should be used (list and detail)
  * Code Quality
    * Good modularity
    * Reusable Modal
  * Testing
  * Deployment
    * Travis Tests
    * Code Sandbox App
  * Documentation
    * README Standards
    * React Required

#### Lab Assistance Notes

The primary task for students today will be to take a working react application and convert it from app/component state into using a Redux store.

They'll need to create 2 reducers and action sets.

Its likely that they will make 2 actions, both called "GET" that end up in both reducers firing. Be on the lookout for oddities like this as they go through their implementations.  This potential case is not covered in lecture, in hopes that we run into this during lab or code review as a discussion point.

Tests are required. Guide the students into mocking out the superagent calls.
