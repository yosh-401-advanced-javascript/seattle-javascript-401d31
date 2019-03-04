![CF](http://i.imgur.com/7v5ASc8.png) SOLUTION - CMS Project
============================================================

[Solution (redux)](https://codesandbox.io/s/qkl37kjvlj)


## Grading Notes / Requirements

* Models Route that shows all available models from the server 
* Each model route shows all fields
* CRUD for each record in the database for each model
* Test Coverage
* Really looking for some good styling and UX

They've done all of the pieces already. This project is putting it all together.

They will revisit this again in the next block, using the `<Login />` component to protect the various CMS actions


## If the students are assigned the "Bug Fix / Map It Out" Lab ...

**Bug List**

* `store/index.js` line 8: `records: APIreducer` should be: `api: APIreducer'
  * Without this, none of the components can get the right stateToProps
* `components/cms/models.js` line 26: `this.props.setModel();` should be: `this.props.setModel(model);`
  * Without this, none of the components will know what the selected model is.
* `components/cms/models.js, record.js, records.js`
  * `const API = process.env.API;` should be ... 
  * `const API = process.env.REACT_APP_API;`
  * ... this can be found out if they look inside the .env file
* `components/cms/record.js` line 74: Missing `mapDispatchToProps` in the connect
  * None of the actions will ever get dispatched without that
* `components/cms/reducer.js` line 29: just returns `state`
  * needs to return `{ ...state, record: {} };` 
  * so that we can properly clear out the record in state and wipe the form.
* `components/cms/actions.js` line 36 should be:
  * `export const getRecords = url => dispatch => {`
  * it is missing the curried function that takes dispatch and will therefore not work.

