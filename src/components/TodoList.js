import React from "react";
import TodoElement from "./TodoElement";
import { useSelector } from "react-redux";
const TodoList = () => {
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
            />
          ))
        : todosArr.map(({ title, description, isReady, id }) => (
            <TodoElement
              key={id}
              id={id}
              title={title}
              description={description}
              isReady={isReady}
            />
          ))}
    </ul>
  );
};
export default TodoList;
