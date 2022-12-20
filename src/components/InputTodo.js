/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setTitle] = useState({
    title: '',
  });

  const onChange = (e) => {
    setTitle((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    const { title } = inputText;
    if (title && title.trim()) {
      addTodoProps(title);
      setTitle({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};
export default InputTodo;
