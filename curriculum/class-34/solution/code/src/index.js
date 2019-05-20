import React from 'react';
import ReactDOM from 'react-dom';

import ToDoContext from './components/todo/context.js';
import AuthContext from './components/auth/context.js';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <AuthContext>
        <ToDoContext>
          <App />
        </ToDoContext>
      </AuthContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
