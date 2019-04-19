import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.js';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Form />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
