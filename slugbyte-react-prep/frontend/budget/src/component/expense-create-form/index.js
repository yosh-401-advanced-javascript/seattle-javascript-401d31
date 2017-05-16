'use strict';

import React from 'react';
import { changeHandlerCreate } from '../../lib/util.js';
import budgetExpense from '../../lib/budget-expence.js';

class ExpenseCreateFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      price: 0,
      profile: props.app.state.profile.name,
      category: props.category, 
    };

    this.appState = props.app.state;
    this.appSetState = props.app.setState;
    this.handleChange = changeHandlerCreate(this.setState.bind(this));
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm(){
    this.setState({
      title: '',
      price: 0,
    })
  }

  handleSubmit(e){
    e.preventDefault();

    budgetExpense.create(this.state)
    .then((data) => {
      this.appSetState(state => ({
          expenses: [data].concat(state.expenses),
      }));
      return this.resetForm()
    })
    .catch(console.error);
  }

  render(){
    return (
      <form 
        className='expense-create-form'
        autoComplete='off'
        onSubmit={this.handleSubmit} 
        >
        
        <input 
          required
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input 
          min='0'
          required
          name='price'
          step='any'
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
          />
        <button type='submit'> add </button>
      </form>
    );
  }

}

export default ExpenseCreateFrom;
