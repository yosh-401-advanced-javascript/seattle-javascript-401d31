import React from 'react';
import { When } from '../if';
import ToDoForm from './form.js';

import './todo.scss';
import Auth from '../auth/auth.js';
import { TodoContext } from './context.js';

class ToDo extends React.Component {
  static contextType = TodoContext;

  constructor(props) {
    super(props);
    this.state = { item: {}, editing: false };
  }

  toggleEdit = id => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  render() {
    return (
      <>
        <div>
          <ul>
            {this.context.todoList &&
              this.context.todoList.map(item => (
                <li
                  className={`complete-${item.complete.toString()}`}
                  key={item.id}
                >
                  <span onClick={() => this.context.toggleComplete(item.id)}>
                    {item.text}
                  </span>

                  <Auth capability="update">
                    <button onClick={() => this.toggleEdit(item.id)}>
                      edit
                    </button>
                    <When condition={this.state.editing === item.id}>
                      <ToDoForm item={item} />
                    </When>
                  </Auth>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ToDo;
