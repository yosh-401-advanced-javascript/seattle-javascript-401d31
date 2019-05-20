import React from 'react';

import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';
import ToDo from './components/todo/list.js';
import ToDoForm from './components/todo/form.js';
import Counter from './components/counter/counter.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <section className="todo">
          <Login />
          <Counter />
          <Auth capability="create">
            <ToDoForm />
          </Auth>
          <ToDo />
        </section>
      </>
    );
  }
}
