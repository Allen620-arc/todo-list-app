// components/Todo.js
import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Complete</button>
    </div>
  );
};

export default Todo;
