import React from 'react';
import Home from './Home';
import ToDoContainer from '../components/ToDo_ClassComponents/ToDoContainer';
import '../components/ToDo_ClassComponents/ToDo.css';

export default function ToDo() {
  return (
    <div>
      <Home />
      <ToDoContainer />
    </div>
  );
}
