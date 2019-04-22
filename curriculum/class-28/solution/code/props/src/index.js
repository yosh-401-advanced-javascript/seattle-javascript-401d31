import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Message from './message.js';

class App extends React.Component {
  doIt = () => {
    return <h4>DONE</h4>;
  };

  render() {
    return <Message stuff="foo" action={this.doIt} title="This is my title" />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
