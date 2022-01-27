import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function ToDoInput(props) {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addToDoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <input
        type="text"
        className="input_text"
        placeholder="Add item..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="submit_button">
        <FaPlusCircle />
      </button>
    </form>
  );
}
