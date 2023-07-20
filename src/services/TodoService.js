// services/TodoService.js
import { v4 as uuidv4 } from 'uuid';

// Sample initial data for Todo items
let todos = [
  { id: uuidv4(), text: 'Learn React' },
  { id: uuidv4(), text: 'Build a Todo-List App' },
];

const getAllTodos = () => {
  return todos;
};

const addTodo = (text) => {
  const newTodo = { id: uuidv4(), text };
  todos.push(newTodo);
  return newTodo;
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

const TodoService = {
  getAllTodos,
  addTodo,
  deleteTodo,
};

export default TodoService;
