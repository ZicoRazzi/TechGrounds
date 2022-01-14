import React from 'react';

export default function Function_component_2({ title, setTitleHandler }) {
  return (
    <div>
      <h1>Hello Function {title}</h1>
      <input value={title} onChange={(e) => setTitleHandler(e.target.value)} />
    </div>
  );
}
