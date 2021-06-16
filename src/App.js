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
  // const handleChangeIsReady = (id, value)=>{
  //   setTodos(todos.map((todo)=>{
  //     if (todo.id === id) {
  //       const tempObj = { ...todo };
  //       tempObj.isReady = value;
  //       return tempObj;
  //     }
  //     return todo;
  //   }))
  // }
  // const handleChangeDescription = (id, value)=>{
  //   setTodos(todos.map((todo)=>{
  //     if (todo.id === id) {
  //       const tempObj = { ...todo };
  //       tempObj.description = value;
  //       return tempObj;
  //     }
  //     return todo;
  //   }))
  // }
  // const handleChangeTitle = (id, value)=>{
  //   setTodos(todos.map((todo)=>{
  //     if (todo.id === id) {
  //       const tempObj = { ...todo };
  //       tempObj.title = value;
  //       return tempObj;
  //     }
  //     return todo;
  //   }))
  // }
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
        {/* {todoIdForChange !== "" && <ChangeTodo handleChangeTodo={changeTodo} />} */}
      </div>
    </div>
  );
}

export default App;
