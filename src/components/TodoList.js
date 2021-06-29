import React, {useEffect}from "react";
import TodoElement from "./TodoElement";
import { useSelector, useDispatch } from "react-redux";
const TodoList = ({ todos, handleChangeTodo }) => {

  const {isSetOldTodos,todosArr, oldTodosArr} = useSelector(({todosData})=>todosData)
  
  useEffect(()=>{
    console.log("KEKEKEKE")
  },[isSetOldTodos])
  return (
    <ul className="todo-list">
      {isSetOldTodos?oldTodosArr.map(({ title, description, isReady, id }) => (
        <TodoElement
          key={id}
          id={id}
          title={title}
          description={description}
          isReady={isReady}
          handleChangeTodo={handleChangeTodo}
        />
      )):
      todosArr.map(({ title, description, isReady, id }) => (
        <TodoElement
          key={id}
          id={id}
          title={title}
          description={description}
          isReady={isReady}
          handleChangeTodo={handleChangeTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
