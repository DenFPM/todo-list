import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewTodos from "./components/AddNewTodo";

function App() {
 
  return (
    <div className="container">
      <TodoList  />
      <div className="todo-form-add">
        <AddNewTodos />
      </div>
    </div>
  );
}

export default App;
