'use strict'

import React from 'react';

import Expense from '../expense';
import ExpenseCreateFrom from '../expense-create-form';

let Category = ({app, category}) => {
  let expenses = app.state.expenses.filter(item => {
    return item.category === category;
  });

  let total = expenses.reduce((p, n) => p + n.price, 0);

  console.log('expenses', expenses);
  return (
    <div className='category'>
      <h2> {category} </h2>
      <ExpenseCreateFrom app={app} category={category} />

      <div className='expense-container'>
        {expenses.map(item => {
          return (
            <Expense key={item._id} expense={item} app={app} />
          );
        })}
      </div>
      <p> total: {total} </p>
    </div>
  );
};

export default Category;
