/*
  Functional Component Tests:
  
  When testing components, we're primarily concerned that they 
  render the proper markup given a set of props

  Should a component invoke an action or method on some interaction,
  simulate that, and then assert both on the state of state as
  well as the updated DOM 
*/

import React from "react";
import { Provider } from "react-redux";

import * as actions from "../components/cms/actions.js";
import LoginContext from "../components/auth/context.js";
import Records from "../components/cms/records.js";
import createStore from "../store";

jest.mock("../components/auth/context.js");

const store = createStore();

describe("Records component", () => {
  it("does not contain a button when there is no valid model", () => {
    let tokenData = {
      capabilities: ["read"]
    };
    let component = mount(
      <Provider store={store}>
        <LoginContext loggedIn="true" token={tokenData} secret="changeit">
          <Records />
        </LoginContext>
      </Provider>
    );
    expect(component.find("button").exists()).toBeFalsy();
  });

  it("contains a button when there is a valid model and user has create permissions", () => {
    store.dispatch(actions.setModel("foo"));

    let tokenData = {
      capabilities: ["read", "create"]
    };

    let component = mount(
      <Provider store={store}>
        <LoginContext loggedIn="true" token={tokenData} secret="changeit">
          <Records />
        </LoginContext>
      </Provider>
    );

    expect(component.find("button").exists()).toBeTruthy();
  });

  it("contains a list item for each record in state", () => {
    const newRecords = [{ name: "test", _id: 1 }, { name: "test", _id: 2 }];

    store.dispatch(actions.setModel("foo"));
    store.dispatch(actions.runGetRecords(newRecords));

    let tokenData = {
      capabilities: ["read"]
    };

    let component = mount(
      <Provider store={store}>
        <LoginContext loggedIn="true" token={tokenData} secret="changeit">
          <Records />
        </LoginContext>
      </Provider>
    );

    expect(component.find("ul").children()).toHaveLength(newRecords.length);
  });
});
