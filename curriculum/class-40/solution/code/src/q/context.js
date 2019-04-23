import React from "react";
import Q from "./subscriber.js";
const database = new Q("database");

export const QueueContext = React.createContext();

class QueueProvider extends React.Component {
  constructor(props) {
    super(props);
    database.subscribe("create", this.logEvent);
    database.subscribe("update", this.logEvent);
    database.subscribe("delete", this.logEvent);
    this.state = {
      queue: []
    };
  }

  logEvent = payload => {
    this.setState({ queue: [...this.state.queue, payload] });
  };

  render() {
    return (
      <QueueContext.Provider value={this.state}>
        {this.props.children}
      </QueueContext.Provider>
    );
  }
}

export default QueueProvider;
