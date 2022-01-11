import React, { useState } from 'react';

export default function FunctionalComponent() {
  const [title, setTitle] = useState('');

  function inputHandler(text) {
    setTitle(text);
  }
  return (
    <div>
      <h1>Hello Function {title}</h1>
      <input onInput={(evt) => inputHandler(evt.target.value)} type="text" />
    </div>
  );
}
