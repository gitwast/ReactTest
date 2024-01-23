import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoList title="Lincoln's To Do List" />
      <ToDoList title="Sean's To Do List" />
    </div>
  );
}

export default App;
