// App.js
import React, { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';
import TodoService from './services/TodoService';

const App = () => {
  const [todos, setTodos] = useState(TodoService.getAllTodos());
  const [inputText, setInputText] = useState('');

  const handleAddTodo = (text) => {
    const newTodo = TodoService.addTodo(text);
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleDeleteTodo = (id) => {
    TodoService.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() => handleAddTodo(inputText)}>Add Todo</button>
      </div>
    </div>
  );
};

export default App;
