'use strict';

// _________ component tree
// APP
//  KanbanBoard
//    CardColumn
//      CardCreateForm
//      Card
//
// ________ ajaxs helpers
// model/kanban-card.js

// load styles
require('./style/main.scss');

// load npm modules
import React from 'react';
import ReactDOM from 'react-dom';

// load app modules
import cardRequests from './lib/card-requests.js';
import KanbanBoard from './component/kanban-board';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cardRequestss: [],
    };

    // bind the menthods to the App constructor so they will allways 
    // apply to the current context
    this.getApp = this.getApp;
    this.setState = this.setState.bind(this);
  }

  componentWillMount(){
    // load cards from backend on page load
    cardRequests.fetchAll()
    .then(cardRequestss => this.setState({cardRequestss}))
    .catch(console.error);
  }

  componentDidUpdate(){
    // log the state for debuging each time the page reloads
    if(__DEBUG__){
      console.log('___ STATE ___', this.state);
    }
  }

  getApp(){
    // this will be passed down into child chomponents
    // so that they can read and modify the appliction 
    // state
    return {
      state: this.state,
      setState: this.setState,
    };
  }

  render() {
    return (
      <div className="app">
        <KanbanBoard app={this.getApp()} />
      </div>
    );
  }
}

// create a root node to render the app to
var root = document.createElement('div');
root.className = 'app-container';
document.body.appendChild(root);

// tell react dom to render the app to the dom
// reactDOM will render view changes to the dom
// whenever the App's state changes
ReactDOM.render(<App />, root);
