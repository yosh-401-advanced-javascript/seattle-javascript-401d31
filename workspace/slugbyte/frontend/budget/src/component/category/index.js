'use strict'

import React from 'react';

import profileRequests from '../../lib/profile-requests.js';
import {curencyFormat} from '../../lib/util.js';
import Expense from '../expense';
import ExpenseCreateFrom from '../expense-create-form';

let Category = ({app, category}) => {
  let expenses = app.state.expenses.filter(item => {
    return item.category === category;
  });

  let total = expenses.reduce((p, n) => p + n.price, 0);

  let handleDelete = () => {
    let profile = app.state.profile;
    profile.categorys = profile.categorys.filter(item => {
      return item !== category;
    });

    profileRequests.update(profile)
    .then(profile => {
      app.setState(state => ({
        profile,
        expenses: state.expenses.filter(item => {
          return item.category !== category
        }),
      }))
    })
    .catch(console.error)
  };

  return (
    <div className='category'>
      <h2> {category} </h2>
      <button onClick={handleDelete} className='btn-delete'> - </button>
      <ExpenseCreateFrom app={app} category={category} />

      <div className='expense-container'>
        {expenses.map(item => {
          return (
            <Expense key={item._id} expense={item} app={app} />
          );
        })}
      </div>
      <p> total: {curencyFormat(total)} </p>
    </div>
  );
};

export default Category;
