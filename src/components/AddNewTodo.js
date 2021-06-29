import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOldTodos } from "../redux/actions/setTodoActions";

const AddNewTodos = ({ handleAddTodos }) => {
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="todo-form-add" style={{ marginBottom: "50px" }}>
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
        onClick={() => handleAddTodos(title, description, isReady)}
        className="form-element-constraction"
      >
        submit
      </button>
      <button
        onClick={() => dispatch(setIsOldTodos())}
        className="form-element-constraction"
      >
        step to back
      </button>
    </div>
  );
};
export default AddNewTodos;
