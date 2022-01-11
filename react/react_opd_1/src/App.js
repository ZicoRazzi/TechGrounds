import React from 'react';
import Class_component from './components/Class_component';
import Function_component from './components/Function_component';
import Class_component_2 from './components/Class_component_2';
import Function_component_2 from './components/Function_component_2';
import { useState } from 'react';
import './style.css';

function App() {
  const [title, setTitle] = useState('Zico');
  const setTitleHandler = (title) => {
    setTitle(title);
  };
  return (
    <div className="App">
      <Class_component />
      <Function_component />
      <Class_component_2 title2={title} callback={setTitleHandler} />
      <input value={title} onChange={(e) => setTitleHandler(e.target.value)} />
      <Function_component_2 title2={title} />
      <input value={title} onChange={(e) => setTitleHandler(e.target.value)} />
    </div>
  );
}

export default App;
