import React from "react";

import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    }
    if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    console.log(this.state);
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <section className="counter">
        <span className="clicker" onClick={this.handleDown}>
          -
        </span>
        <span className={classes}>{this.state.count}</span>
        <span className="clicker" onClick={this.handleUp}>
          -
        </span>
      </section>
    );
  }
}

export default Counter;
