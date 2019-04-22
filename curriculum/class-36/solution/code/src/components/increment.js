import React from 'react';
import { CounterContext } from '../context/counter.js';

const Increment = props => {
  const button = {
    height: '3em',
  };

  return (
    <CounterContext.Consumer>
      {context => {
        return (
          <button style={button} onClick={context.increment}>
            +
          </button>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Increment;
