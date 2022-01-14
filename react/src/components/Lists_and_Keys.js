import React from 'react';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Lists_and_Keys() {
  const [names, setNames] = useState([]);
  const inputRef = useRef();

  const handleInput = () => {
    let input = document.querySelector('input');
    console.log(inputRef.current);
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
      <input id="input " type="text" ref={inputRef} />
      <button onClick={handleInput}>Submit Name</button>

      <ul>
        {names.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
