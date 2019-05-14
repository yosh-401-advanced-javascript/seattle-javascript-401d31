import React from 'react';

import Form from './form.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: '',
      attempts: 0,
    };
  }

  handleForm = formData => {
    this.setState({
      formText: formData.name,
      attempts: formData.count,
    });
  };

  render() {
    return (
      <div>
        <Form handler={this.handleForm} />
        <div>Name: {this.state.formText}</div>
        <div>Attempts: {this.state.attempts}</div>
      </div>
    );
  }
}

export default App;
