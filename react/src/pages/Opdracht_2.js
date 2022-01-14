import React from 'react';
import Home from '../pages/Home';
import Class_component_2 from '../components/Class_component_2';
import Function_component_2 from '../components/Function_component_2';
import { useState } from 'react';

export default function Opdracht_2() {
  const [title, setTitle] = useState('Zico');
  const setTitleHandler = (title) => {
    setTitle(title);
  };
  return (
    <div>
      <Home />

      <Class_component_2 title={title} setTitleHandler={setTitleHandler} />
      <Function_component_2 title={title} setTitleHandler={setTitleHandler} />
    </div>
  );
}
