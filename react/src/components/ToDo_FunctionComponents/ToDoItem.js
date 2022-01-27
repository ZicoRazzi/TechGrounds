import React, { useState, useEffect } from 'react';
import styles from './ToDoItems.module.css';
import { FaTrash } from 'react-icons/fa';

export default function ToDoItem(props) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <li className="todo-item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <span style={completed ? completedStyle : null}>{title}</span>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          className="delete_button"
          onClick={() => props.deleteToDoProps(id)}
        >
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}
