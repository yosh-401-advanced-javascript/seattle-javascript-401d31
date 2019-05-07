import React from 'react';

import Counter from './components/counter.js';
import Increment from './components/increment.js';
import Decrement from './components/decrement.js';

const App = props => {
  const layout = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  return (
    <section style={layout}>
      <Decrement />
      <Counter />
      <Increment />
    </section>
  );
};

export default App;
