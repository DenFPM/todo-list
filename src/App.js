import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewTodos from "./components/AddNewTodo";

function App() {
  return (
    <div className="container">
      <TodoList />
      <AddNewTodos />
    </div>
  );
}

export default App;
