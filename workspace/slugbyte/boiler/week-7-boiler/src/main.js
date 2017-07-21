'use strict';

// load sass 
require('./style/main.scss');

// require npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

// require app dependencies
import store from './lib/store.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store} />
        <Router>
          <Route exact path='/' component={} />
        </Router> 
      </Provider>
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
