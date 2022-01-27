import React, { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import ToDoInput from './ToDoInput';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteToDo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    console.log('test run');

    //get stored items
    const temp = localStorage.getItem('todos');
    const locatedTodos = JSON.parse(temp);

    if (locatedTodos) {
      setTodos(locatedTodos);
    }
  }, []);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  return (
    <div className="container">
      <div className="inner">
        <ToDoHeader />
        <ToDoInput addToDoProps={addTodoItem} />
        <ToDoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteToDoProps={deleteToDo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
//The todos data that come from the state of the TodoComp component is passed as props using todos={this.state.todos}. Then, we accessed it through this.props.todos from within the TodosList component.
