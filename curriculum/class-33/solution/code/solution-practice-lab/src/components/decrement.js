import React from 'react';
import { CounterContext } from '../context/counter.js';

const Decrement = props => {
  const button = {
    height: '3em',
  };

  return (
    <CounterContext.Consumer>
      {context => {
        return (
          <button style={button} onClick={context.decrement}>
            -
          </button>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Decrement;
