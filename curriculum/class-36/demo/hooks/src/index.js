import React from 'react';
import ReactDOM from 'react-dom';

import Content from './content.js';
import Counter from './counter.js';
import Login from './login-hook.js';

import { createStore, useStore } from 'react-hookstore';

createStore('clickStore', 0);

function App() {
  let { isLoggedIn, toggleStatus } = Login();
  return (
    <div>
      <Content />
      <Counter />
      <button onClick={toggleStatus}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
