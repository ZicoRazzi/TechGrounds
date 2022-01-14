import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Lists_and_Keys() {
  const [names, setNames] = useState([]);

  const handleInput = () => {
    let input = document.querySelector('input');
    setNames((prevState) => {
      let state = [...prevState];
      const item = {
        value: input.value,
        key: uuidv4(),
      };
      state.unshift(item);

      return state;
    });
  };

  return (
    <div>
      <h1>List and Keys</h1>
      <input id="input " type="text" />
      <button onClick={handleInput}>Submit Name</button>

      <ul>
        {names.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
