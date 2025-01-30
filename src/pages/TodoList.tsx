import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import { Todo } from '../types';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Todo List</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus size={20} />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    todo.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300'
                  }`}
                >
                  {todo.completed && <Check size={16} className="text-white" />}
                </button>
                <span className={`truncate ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-500 hover:text-red-500 transition-colors ml-2 flex-shrink-0"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;