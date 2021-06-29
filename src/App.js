import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddNewTodos from "./components/AddNewTodo";
import { setTodosData,changeTodosData} from "./redux/actions/setTodoActions";
import { useSelector, useDispatch } from "react-redux";
const randomId = () => {
  return Math.random().toString(20).substr(2, 9);
};
function App() {
  const [todos, setTodos] = useState([]);
  
  const dispatch = useDispatch();
  const {todosArr, oldTodosArr} = useSelector(({ todosData }) => todosData);


  const handleSetTodos = (title, description, isReady) => {
    const newTodo = { id: randomId(), title, description, isReady };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    dispatch(setTodosData([...todosArr,newTodo]));
  };

  const changeTodo = ({ newTitle, newIsReady, newDescription, id }) => {
    let tempTodosArr = todos.map((todo) => {
      if (todo.id === id) {
        const tempObj = { ...todo };
        tempObj.title = newTitle;
        tempObj.description = newDescription;
        tempObj.isReady = newIsReady;
        return tempObj;
      }
      return todo;
    })

    setTodos(
      tempTodosArr
    );
    dispatch(changeTodosData([tempTodosArr]))
  };

  return (
    <div className="container">
      <TodoList todos={todos} handleChangeTodo={changeTodo} />
      <div className="todo-form-add">
        <AddNewTodos handleAddTodos={handleSetTodos} />
      </div>
    </div>
  );
}

export default App;
