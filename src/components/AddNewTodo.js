import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOldTodos, setTodosData } from "../redux/actions/setTodoActions";
import { Notification } from "rsuite";
const randomId = () => {
  return Math.random().toString(20).substr(2, 9);
};
const openNotification = (notificationType, title, description) => {
  Notification[notificationType]({
    title: <span>{title}</span>,
    description: <span>{description}</span>,
  });
};
const AddNewTodos = () => {
  const dispatch = useDispatch();
  const { todosArr } = useSelector(({ todosData }) => todosData);

  const [isReady, setIsReady] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSetTodos = (title, description, isReady) => {
    if (title.length < 3) {
      openNotification("error", "Error", "title must be longer for 3 letters");
      return;
    }
    if (description.length < 3) {
      openNotification(
        "error",
        "Error",
        "description must be longer for 6 letters"
      );
      return;
    }
    dispatch(
      setTodosData([
        ...todosArr,
        { id: randomId(), title, description, isReady },
      ])
    );
  };
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
        className="submit-input submit-input-form"
        type="checkbox"
        checked={isReady}
        onChange={(event) => setIsReady(event.target.checked)}
      />
      <button
        onClick={() => handleSetTodos(title, description, isReady)}
        className="form-element-constraction"
      >
        submit
      </button>
      <button
        onClick={() => {
          todosArr.length
            ? dispatch(setIsOldTodos())
            : openNotification("error", "Error", "emptiness behind");
        }}
        className="form-element-constraction "
      >
        step to back
      </button>
    </div>
  );
};
export default AddNewTodos;
