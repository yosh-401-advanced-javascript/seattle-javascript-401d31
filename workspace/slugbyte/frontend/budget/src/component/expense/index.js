'use strict';

import React from 'react';
import {curencyFormat} from '../../lib/util.js';
import expenseRequests from '../../lib/expense-requests.js';

let Expense = ({app, expense}) => {
  let handleClick = () => {
    expenseRequests.delete(expense)
    .then(() => app.setState(state => ({
      expenses: state.expenses.filter(item => !(item._id === expense._id))
    })))
    .catch(console.error)
  }

  return (
    <div className='expense'>
      <span> {expense.title} </span>
      <span> {curencyFormat(expense.price)} </span>
      <button onClick={handleClick}> - </button>
    </div>
  );
}

export default Expense;
