'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <Route exact path='/' component={} />
      </Router> 
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
