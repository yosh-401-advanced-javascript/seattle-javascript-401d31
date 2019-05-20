import React from "react";
import uuid from "uuid/v4";

export const TodoContext = React.createContext();

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todoList: [],
      addItem: this.addItem,
      saveItem: this.saveItem,
      toggleComplete: this.toggleComplete
    };
  }

  addItem = item => {
    item.id = uuid();
    this.setState({
      todoList: [...this.state.todoList, item],
      count: this.state.todoList.length + 1
    });
  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  saveItem = updatedItem => {
    this.setState({
      todoList: this.state.todoList.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    });
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default Todo;
