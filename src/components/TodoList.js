import React from "react";
import TodoElement from "./TodoElement";

const TodoList = ({todos, handleChangeTodo}) => {
  return (
    <ul className="todo-list">
      {todos.map(({ title, description, isReady, id }) => (
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
