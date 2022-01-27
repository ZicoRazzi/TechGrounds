import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
  render() {
    return (
      <div className="todo_list">
        <ul>
          {this.props.todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteToDoProps={this.props.deleteToDoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}
