/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = ({
  todo, handleChangeProps, deleteTodoProps, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  // componentWillUnmount() {
  //   console.log('Cleaning up...');
  // }
  useEffect(() => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button
          type="button"
          value="Delete"
          onClick={() => deleteTodoProps(todo.id)}
        >
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />

        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
