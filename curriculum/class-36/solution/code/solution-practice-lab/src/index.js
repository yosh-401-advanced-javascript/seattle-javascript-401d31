import React from "react";
import ReactDOM from "react-dom";

import CounterContextProvider from "./context/counter.js";
import App from "./app.js";

class Main extends React.Component {
  render() {
    return (
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
