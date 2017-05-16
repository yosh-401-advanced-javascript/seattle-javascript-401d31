'use strict';

require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import {renderIf, curencyFormat} from './lib/util.js';
import budgetExpense from './lib/budget-expence.js';

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
        title: '',
        categorys: [],
      },
      expenses: [],
    };

    this.getApp = this.getApp.bind(this);
    this.setState = this.setState.bind(this);
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
      budgetExpense.fetchAll(state.profile)
      .then(expenses => this.setState({expenses}))
      .catch(console.error);
    }
  }
    
  componentDidUpdate(){
    // log and save the state after every state change
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
      setState: this.setState.bind(this),
    };
  }

  render() {
    let totalExpenses =  this.state.expenses.reduce((p, n) => p + n.price, 0);

    return (
      <div className="app">
        {renderIf(!this.state.profile.name, <ProfileCreateForm app={this.getApp()}/>)}
        {renderIf(this.state.profile.name,
          <div> 
            <header>
              <h1> { this.state.profile.name } </h1>
              <p> total budget: { curencyFormat(this.state.profile.total)} </p>
            </header>

            <ProfileChangeForm app={this.getApp()}/>
            <CategoryCreateForm app={this.getApp()}/>
            <div className='category-scroll'>
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
