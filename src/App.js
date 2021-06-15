import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewTodos from "./components/AddNewTodo";
import ChangeTodo from "./components/ChangeTodo";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoIdForChange, setTodoIdForChange] = useState("");

  const randomId = () => {
    return Math.random().toString(20).substr(2, 9);
  };

  const handleSetTodos = (title, description, isReady) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: randomId(), title, description, isReady },
    ]);
  };

  const changeTodo = (newTodoForChange) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoIdForChange) {
        const tempObj = { ...todo };
        tempObj.title = newTodoForChange.title;
        tempObj.description = newTodoForChange.description;
        tempObj.isReady = newTodoForChange.isReady;
        return tempObj;
      }
      return todo;
    }))
     
  };

  return (
    <div className="container">
      <TodoList todos={todos} handleChangeTodo={setTodoIdForChange} />
      <div className="todo-form-add">
        <AddNewTodos handleAddTodos={handleSetTodos} />
        {todoIdForChange !== "" && <ChangeTodo handleChangeTodo={changeTodo} />}
      </div>
    </div>
  );
}

export default App;
