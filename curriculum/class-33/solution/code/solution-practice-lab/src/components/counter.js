import React from "react";
import { CounterContext } from "../context/counter.js";

import "./counter.scss";

const Counter = props => {
  const counter = {
    fontFamily: "Staatliches",
    fontSize: "1em",
    border: "2px solid #444",
    borderRadius: "50%",
    lineHeight: "15em",
    textAlign: "center",
    width: "15em"
  };

  // How can we use contextType here instead?
  // What about a hook?

  return (
    <CounterContext.Consumer>
      {context => {
        return (
          <div style={counter} className={context.polarity}>
            {context.count}
          </div>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Counter;
