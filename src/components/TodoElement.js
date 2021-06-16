import React, { useEffect, useState } from "react";

const TodoElement = ({ title, description, isReady, id, handleChangeTodo }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newIsReady, setNewIsReady] = useState();
  const [newDescription, setNewDecription] = useState("");

  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    setNewDecription(description);
  }, [description]);

  useEffect(() => {
    setNewIsReady(isReady);
  }, [isReady]);

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  const handleChangeCurrentTodo = (currentId, isCanChanges) => {
    if (currentId === id && isCanChanges) {
      setIsReadOnly(false);
    }
    if (!isCanChanges) {
      setIsReadOnly(true);
      handleChangeTodo({ newTitle, newIsReady, newDescription, id });
    }
  };

  return (
    <li className="todo-element" id={id}>
      <input
        className="todo-element-text test"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
        readOnly={isReadOnly}
      />
      <textarea
        className="todo-element-text test todo-description"
        value={newDescription}
        onChange={(event) => setNewDecription(event.target.value)}
        readOnly={isReadOnly}
      />
      <input
        className="todo-element-text test"
        value={newIsReady ? "complited" : "in progress"}
        onClick={() => setNewIsReady(!newIsReady)}
        readOnly={isReadOnly}
      />
      <input
        className="submit-input"
        type="checkbox"
        onClick={(event) =>
          handleChangeCurrentTodo(
            event.nativeEvent.path[1].id,
            event.target.checked
          )
        }
      />
    </li>
  );
};
export default TodoElement;
