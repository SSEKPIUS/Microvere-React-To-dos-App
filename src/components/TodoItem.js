/* eslint-disable react/prop-types */
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
