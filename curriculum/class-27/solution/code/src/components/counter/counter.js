import React from 'react';
import './counter.scss';

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
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    }
    if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity];
    return (
      <section className="counter">
        <a className="down clicker" onClick={this.handleDown}>
          -
        </a>
        <span className={classes.join(' ')}>{this.state.count}</span>
        <a className="up clicker" onClick={this.handleUp}>
          -
        </a>
      </section>
    );
  }
}

export default Counter;
