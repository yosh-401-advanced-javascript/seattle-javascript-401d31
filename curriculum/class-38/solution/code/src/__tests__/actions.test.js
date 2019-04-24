/*
  Actions Unit Tests: 
  
  When testing actions, we are testing only that 
  when the action creators (sync and async)
  are dispatched, that the correct action object -- 
  ( type: TYPE, payload: {} ) is returned
*/

import * as actions from "../components/cms/actions.js";
import thunk from "redux-thunk";

import configureMockStore from "redux-mock-store";

import superagent from "superagent";

// Mock out the superagent calls with configuration that sends out fake results
import config from "../components/cms/api.mock.js";
const superagentMock = require("superagent-mock")(superagent, config);

// Create a fake store -- we're not going to put anything in it, just test the actions
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Test that when our synchronous action creators are called, that the right action type is created
describe("CMS Synchronous actions", () => {
  it("should create an action to change the model", () => {
    const model = "foo";
    const expectedAction = {
      type: "MODEL",
      payload: model
    };
    expect(actions.setModel(model)).toEqual(expectedAction);
  });

  it("should create an action to clear the active record", () => {
    const expectedAction = {
      type: "CLEAR"
    };
    expect(actions.clearRecord()).toEqual(expectedAction);
  });
});

// Async Actions
// Test that when our async action creators are dispatched, that the right action type is returned

describe("CMS async actions", () => {
  afterAll(() => {
    superagentMock.unset();
  });

  it("should create a RECORD  action when fetching record has been done", () => {
    const store = mockStore();
    return store
      .dispatch(actions.getRecord("http://localhost/api/v1/foo/12"))
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual("RECORD");
        expect(typeof dispatchedActions[0].payload).toEqual("object");
      });
  });
});
