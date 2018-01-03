import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends Component {
  constructor() {
    super();
    this.state = {content: 'heeeelllooo'};
    this.generateText = this.generateText.bind(this);
  }

  generateText() {
    let cowSaid = cowsay.say({text: faker.random.words(4)});
    this.setState({content: cowSaid})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Generate Cowsay Lorem</h1>
        </header>
        <p className="App-intro">
          To get started, <button onClick={this.generateText}>click me!</button>
        </p>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

export default App;
