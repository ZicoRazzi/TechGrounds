import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList(props) {
  return (
    <div className="todo_list">
      <ul>
        {props.todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteToDoProps={props.deleteToDoProps}
            setUpdate={props.setUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
