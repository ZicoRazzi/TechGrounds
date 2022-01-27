import React, { Component } from 'react';
import ToDoList from './ToDo_ClassComponents/ToDoList';
import ToDoHeader from './ToDo_ClassComponents/ToDoHeader';
import ToDoInput from './ToDo_ClassComponents/ToDoInput';
import { v4 as uuidv4 } from 'uuid';

export default class ToDoComp extends Component {
  state = {
    todos: [],
  };
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteToDo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  };
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }
  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="inner">
          <ToDoHeader />
          <ToDoInput addToDoProps={this.addToDoItem} />
          <ToDoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteToDoProps={this.deleteToDo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
//The todos data that come from the state of the TodoComp component is passed as props using todos={this.state.todos}. Then, we accessed it through this.props.todos from within the TodosList component.
