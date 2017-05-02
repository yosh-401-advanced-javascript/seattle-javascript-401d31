'use strict';

require('./style/main.scss');

// React must be imported in every file that uses jsx
import React from 'react';

// ReactDOM is typicaly only impored in the entry file and is used
// to tell react where to render on the page
import ReactDOM from 'react-dom';

// for week one the app is allways going to be a stateful component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="app">
        <h1> {__TITLE__} </h1>
        <p onClick={this.handleClick}> count: {this.state.count} </p>
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
