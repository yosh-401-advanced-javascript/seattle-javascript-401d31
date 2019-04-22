import React from "react";

export const CounterContext = React.createContext();

export default class CounterContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      polarity: null, // "positive" if count > 0, "negative" if count < 0
      increment: this.increment,
      decrement: this.decrement
    };
  }

  increment = () => {
    this.setCounter(this.state.count + 1);
  };

  decrement = () => {
    this.setCounter(this.state.count - 1);
  };

  setCounter = count => {
    let polarity = null;
    if (count >= 1) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }

    this.setState({ count, polarity });
  };

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
