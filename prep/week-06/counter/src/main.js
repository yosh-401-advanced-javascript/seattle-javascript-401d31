'use strict';

require('./style/main.scss');

// React must be imported in every file that uses jsx
import React from 'react';

// ReactDOM is typicaly only impored in the entry file and is used
// to tell react where to render on the page
import ReactDOM from 'react-dom';

// if you want to create a component that manages its own state you 
// must use the class syntax and extend React.Component 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      countDown: false,
    };

    // react requires you bind your functions to
    // the current instance, eventHandlers will error
    // if you do not.
    this.advanceCounter = this.advanceCounter.bind(this);

    // the other way of accompling binding a method 
    // to the current instance is using an arrow function
    // see line 46 to see how this is implemented
  }

  directionToggle() {
    this.setState({countDown: !this.state.countDown});
    console.log(this.state)
  }

  advanceCounter() {
    console.log('advanceCounter');
    let advanceBy = this.state.countDown ? -1 : 1;
    this.setState({count: this.state.count + advanceBy});
    console.log(this.state);
  }

  render() {
    return (
      <div className="app">
        <h1> it will count down: {String(this.state.countDown)} </h1>
        <button onClick={() => this.directionToggle()}> toggle direction </button>
        <p onClick={this.advanceCounter}> count: {this.state.count} </p>
      </div>
    );
  }
}

// create a root node to render the app to
var root = document.createElement('div');
document.body.appendChild(root);

// tell react dom to render the app to the dom 
// reactDOM will render view changes to the dom
// whenever the App's state changes
ReactDOM.render(<App />, root);
