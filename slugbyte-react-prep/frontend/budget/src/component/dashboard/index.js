'use strict';

import React from 'react';
import {curencyFormat} from '../../lib/util.js';
import CategoryCreateForm from '../category-create-form';
import Category from '../category';

const Dashboard = ({app}) => {
  let totalExpenses =  app.state.expenses.reduce((p, n) => p + n.price, 0);

  let handleExit = () => {
    app.setState({
      profile: {
        name: '',
        categorys: [],
      },
    })
  };

  return (
    <div className='dashboard'> 
      <header>
        <div className='budget-info'>
          <h1> { app.state.profile.name } </h1>
          <p> total budget: { curencyFormat(app.state.profile.total)} </p>
        </div>

        <div className='actions'>
          <button onClick={handleExit} className='btn-exit'> exit </button>
          <CategoryCreateForm app={app}/>
        </div>
      </header>

      <main className='category-container'>
        {app.state.profile.categorys.map(item =>
          <Category key={item} app={app} category={item} />)}
      </main>

      <footer>
        <p> <strong> Total Expenses: </strong> { curencyFormat(totalExpenses) } </p>
        <p> <strong> Remaining Budget: </strong> { curencyFormat(app.state.profile.total - totalExpenses) } </p>
      </footer>
    </div>
  );
};

export default Dashboard;
