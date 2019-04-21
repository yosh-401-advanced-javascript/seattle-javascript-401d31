import React from "react";
import Q from "./lib/subscriber.js";
const database = new Q("database");

class App extends React.Component {
  constructor(props) {
    super(props);
    database.subscribe("create", () => {});
  }

  render() {
    return (
      <React.Fragment>
        <h2>Database Actions</h2>
      </React.Fragment>
    );
  }
}

export default App;
