import React, { useState } from "react";

const ChangeTodo = ({ handleChangeTodo }) => {
  const [isReady, setIsReady] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="todo-form-add">
      <label>title</label>
      <input
        className="form-element-constraction"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>description</label>
      <textarea
        className="form-element-constraction form-element-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>ready?</label>

      <input
        className="submit-input"
        type="checkbox"
        checked={isReady}
        onChange={(event) => setIsReady(event.target.checked)}
      />
      <button
        onClick={() => handleChangeTodo({ title, description, isReady })}
        className="form-element-constraction"
      >
        submit
      </button>
    </div>
  );
};
export default ChangeTodo;
