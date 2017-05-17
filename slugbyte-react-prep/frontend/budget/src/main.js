'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import {renderIf, curencyFormat} from './lib/util.js';
import expenseRequests from './lib/expense-requests.js';

import ProfileCreateForm from './component/profile-create-form';
import ProfileChangeForm from './component/profile-change-form';
import ExpenseCreateFrom from './component/expense-create-form';
import Category from './component/category';
import CategoryCreateForm from './component/category-create-form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        name: '',
        categorys: [],
      },
      expenses: [],
    };

    this.getApp = this.getApp.bind(this);
    this.setState = this.setState.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  componentWillMount(){
    // load the state from storage after app has been added to the dom
    var state;
    try {
      state = JSON.parse(localStorage.state);
      if(state)
        this.setState(state);
    } catch (e) {
      console.error(e);
    }

    if(state && state.profile && state.profile.name){
      expenseRequests.fetchAll(state.profile)
      .then(expenses => this.setState({expenses}))
      .catch(console.error);
    }
  }
    
  componentDidUpdate(){
    // log and save the state after every state change
    if(__DEBUG__){
      console.log('____ STATE ____', this.state);
    }

    try {
      localStorage.state = JSON.stringify(this.state);
    } catch (e) {
      console.error(e);
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

  handleExit(){
    this.setState({
      profile: {
        name: '',
        categorys: [],
      },
    })
  }

  render() {
    let totalExpenses =  this.state.expenses.reduce((p, n) => p + n.price, 0);

    return (
      <div className="app">
        {renderIf(!this.state.profile.name, 
          <div className='setup'> 
            <ProfileCreateForm app={this.getApp()}/>
            <ProfileChangeForm app={this.getApp()}/>
          </div>
        )}

        {renderIf(this.state.profile.name,
          <div> 
            <header>
              <div className='budget-info'>
                <h1> { this.state.profile.name } </h1>
                <p> total budget: { curencyFormat(this.state.profile.total)} </p>
              </div>

              <div className='actions'>
                <button onClick={this.handleExit} className='btn-exit'> exit </button>
                <CategoryCreateForm app={this.getApp()}/>
              </div>
            </header>

            <div className='category-container'>
              {this.state.profile.categorys.map(item => <Category key={item} app={this.getApp()} category={item} />)}
            </div>

            <footer>
              <p> <strong> Total Expenses: </strong> { curencyFormat(totalExpenses) } </p>
              <p> <strong> Remaining Budget: </strong> { curencyFormat(this.state.profile.total - totalExpenses) } </p>
            </footer>
          </div>
        )}

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
