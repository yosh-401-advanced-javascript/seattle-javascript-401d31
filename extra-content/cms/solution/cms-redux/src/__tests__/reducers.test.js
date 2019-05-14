/*
  Reducer Unit Tests:
  
  When testing reducers, we are testing only that 
  when the reducers are invoked that they affect
  state in the appropriate manner.

  Reducers are called with current state and an action object
  and are expected to return the next state. This 
  makes testing them pretty clean
*/

import reducer from "../components/cms/reducers.js";

describe("CMS Reducer", () => {
  it("should return the initial state", () => {
    let initialState = {
      model: null,
      models: [],
      records: [],
      schemas: {},
      record: {}
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle MODEL", () => {
    let expectedState = { model: "foo" };
    expect(
      reducer(
        {},
        {
          type: "MODEL",
          payload: "foo"
        }
      )
    ).toEqual(expectedState);
  });

  it("should handle SCHEMA", () => {
    let mockSchema = { testSchema: "a0k" };

    let expectedOne = {
      schemas: {
        foo: mockSchema
      }
    };

    let expectedBoth = {
      schemas: {
        foo: mockSchema,
        bar: mockSchema
      }
    };

    expect(
      reducer(
        {},
        {
          type: "SCHEMA",
          payload: { model: "foo", schema: mockSchema }
        }
      )
    ).toEqual(expectedOne);

    expect(
      reducer(expectedOne, {
        type: "SCHEMA",
        payload: { model: "bar", schema: mockSchema }
      })
    ).toEqual(expectedBoth);
  });

  it("should handle MODELS", () => {});
  it("should handle RECORDS", () => {});
  it("should handle RECORD", () => {});
  it("should handle CLEAR", () => {});
  it("should handle POST", () => {});
  it("should handle PUT", () => {});
  it("should handle DELETE", () => {});
});
