import React from 'react';
import Home from './Home';
import ToDoContainer from '../components/ToDo_FunctionComponents/ToDoContainer';
import '../components/ToDo_FunctionComponents/ToDo.css';

export default function ToDo() {
  return (
    <div>
      <Home />
      <ToDoContainer />
    </div>
  );
}
