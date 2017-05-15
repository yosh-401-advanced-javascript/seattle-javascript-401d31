'use strict';

import React from 'react';
import budgetExpense from '../../lib/budget-expence.js';

let Expense = ({app, expense}) => {
  let handleClick = () => {
    console.log('hit handleClick')
    budgetExpense.delete(expense)
    .then(() => app.setState(state => ({
      expenses: state.expenses.filter(item => !(item._id === expense._id))
    })))
    .catch(console.error)
  }

  return (
    <div className='expense'>
      <span> {expense.title} </span>
      <span> {expense.price} </span>
      <button onClick={handleClick}> - </button>
    </div>
  );
}

export default Expense;
