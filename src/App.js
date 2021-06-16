import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewTodos from "./components/AddNewTodo";
function App() {
  const [todos, setTodos] = useState([]);

  const randomId = () => {
    return Math.random().toString(20).substr(2, 9);
  };

  const handleSetTodos = (title, description, isReady) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: randomId(), title, description, isReady },
    ]);
  };
  
  const changeTodo = ({newTitle,newIsReady,newDescription,id}) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        const tempObj = { ...todo };
        tempObj.title = newTitle;
        tempObj.description = newDescription;
        tempObj.isReady = newIsReady;
        return tempObj;
      }
      return todo;
    }))
  };

  return (
    <div className="container">
      <TodoList todos={todos} handleChangeTodo={changeTodo}/>
      <div className="todo-form-add">
        <AddNewTodos handleAddTodos={handleSetTodos} />
      </div>
    </div>
  );
}

export default App;
