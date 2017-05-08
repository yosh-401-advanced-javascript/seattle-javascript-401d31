'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import ProfileCreateForm from './component/profile-create-form';
import ProfileChangeForm from './component/profile-change-form';
import CategoryCreateForm from './component/category-create-form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {},
      expenses: [],
      profileCreateForm: {name: '', total: 0},
      profileChangeForm: {name: ''},
    };

    this.getApp = this.getApp.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount(){
    // load the state from storage after app has been added to the dom
    try {
      let state = JSON.parse(localStorage.state);
      this.setState(state);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(){
    // log and save the state after every state change
    console.log('state', this.state);
    try {
      localStorage.state = JSON.stringify(this.state);
    } catch (e) {
      console.log(e);
    }
  }

  // if you want to pass state and setState using a single attribute
  // you must retrun a new object with the new state each time
  // this is because this.state is a new object each time App updates
  getApp(){
    return {
      state: this.state,
      setState: this.setState,
    };
  }

  render() {
    return (
      <div className="app">
        <ProfileCreateForm app={this.getApp()}/>
        <ProfileChangeForm app={this.getApp()}/>
        <CategoryCreateForm app={this.getApp()}/>
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
