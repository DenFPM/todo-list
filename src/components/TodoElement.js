import React from "react";

const TodoElement = ({ todo, description, isReady,id, handleChangeTodo }) => {
  return (
    <li className="todo-element" onClick={(event)=>handleChangeTodo(event.target.id)} id={id}>
      <p className="todo-element-text">{todo}</p>
      <p className="todo-element-text">{description}</p>
      <p className="todo-element-text">{isReady?"complited":"in progress"}</p>
    </li>
  );
};
export default TodoElement;
{/* <li className="todo-element" onClick={(event)=>handleChangeTodo(event.target.id)} id={id}>
      <input className="todo-element-text test" value={todo}  onChange={handleChangeTitle}/>
      <input className="todo-element-text test" value={description}  onChange={handleChangeDescription}/>
      <p className="todo-element-text">{isReady?"complited":"in progress"}</p>
      <input className="todo-element-text" type="checkbox" value={isReady}  onChange={handleChangeIsReady} readOnly={true}/>
    </li> */}