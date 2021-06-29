import React from "react";
import TodoElement from "./TodoElement";
import { useSelector } from "react-redux";
const TodoList = ({ handleChangeTodo }) => {
  const { isSetOldTodos, todosArr, oldTodosArr } = useSelector(
    ({ todosData }) => todosData
  );

  return (
    <ul className="todo-list">
      {isSetOldTodos
        ? oldTodosArr.map(({ title, description, isReady, id }) => (
            <TodoElement
              key={id}
              id={id}
              title={title}
              description={description}
              isReady={isReady}
              handleChangeTodo={handleChangeTodo}
            />
          ))
        : todosArr.map(({ title, description, isReady, id }) => (
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
