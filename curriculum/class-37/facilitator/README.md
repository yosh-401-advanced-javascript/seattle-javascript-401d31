# Facilitators Guide: Dynamic Forms

## Learning Objectives

**Students will be able to ...**
* Implement a generic form using Redux Form
* Implement a generic standard form using JSON Schema
* Connect form data back to the store

## Preparation
The principal topic here is dealing with forms in React. To this point, the students have probably seen you code a few simple forms with an input that has an `onChange()` and an `onSubmit()` for the form.  Now that we're in Redux, things can change slightly.  We're going to explore 2 libraries.  Why libraries? Mainly to show students that libraries are GOOD THINGS when well executed.  And the 2 that we're showing are widely used in the industry.

* JSON Schema Form - Can read a standardized JSON Schema file (which our API server can generate for you...)
  * Once implemented on the server side, you can simply get the schema for a model, feed it to a `<Form />` component and get an object with the form data.
  * [React Library](https://github.com/mozilla-services/react-jsonschema-form)
  * [Mongo Express Module](https://www.npmjs.com/package/mongoose-schema-jsonschema)

* Redux Form
  * [Redux Form Module for React](https://redux-form.com)
  * You have to build out the form fields yourself (no magical schema here), but it comes with its own reducers and handlers. Very easy to plug in.

Use this day to really show the students how to find, install, and use 3rd party modules. That message is just as important as implementing forms in React.

## Lecture Main Topics & Overall Flow
* 

## What bugs, issues, or surprises have come up in the past for this class?
*

## General Comments and Notes
*
