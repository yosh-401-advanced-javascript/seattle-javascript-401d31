'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import kanbanCard from './model/kanban-card.js';

import KanbanBoard from './component/kanban-board';
import CardCreateForm from './component/card-create-form';


// for week one the app is allways going to be a stateful component
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      kanbanCards: [],
      cardCreateForm: {},
    };

    kanbanCard.fetchAll()
    .then(kanbanCards => this.setState({kanbanCards}));

    this.setState = this.setState.bind(this);
  }

  componentDidUpdate(){
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="app">
        <KanbanBoard setState={this.setState} state={this.state}/>
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
