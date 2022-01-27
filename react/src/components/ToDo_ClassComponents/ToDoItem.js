import React, { Component } from 'react';
import styles from './ToDoItems.module.css';

export default class ToDoItem extends Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };
  componentWillUnmount() {
    console.log('Cleaning up...');
  }
  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#d35e0f',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;

    return (
      <li className="todo-item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <span style={completed ? completedStyle : null}>{title}</span>
          <input
            className="checkbox"
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            className="delete_button"
            onClick={() => this.props.deleteToDoProps(id)}
          >
            Delete
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
// import React from 'react';

// export default function ToDoItem(props) {
//   return <li>{props.todo.title}</li>;
// }
