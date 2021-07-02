import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodosData } from "../redux/actions/setTodoActions";

const TodoElement = ({ title, description, isReady, id }) => {
  const dispatch = useDispatch();
  const { todosArr } = useSelector(({ todosData }) => todosData);

  // @TODO merge to one object, ex {name: nameExample, description: descriptionExample, isReady: isReadyExample}
  const [newTitle, setNewTitle] = useState("");
  const [newIsReady, setNewIsReady] = useState();
  const [newDescription, setNewDecription] = useState("");

  const [isReadOnly, setIsReadOnly] = useState(true);

  const changeTodo = ({ newTitle, newIsReady, newDescription, id }) => {
    let tempTodosArr = todosArr.map((todo) => {
      // @TODO move this logic to reducer
      if (todo.id === id) {
        const tempObj = { ...todo };
        tempObj.title = newTitle;
        tempObj.description = newDescription;
        tempObj.isReady = newIsReady;
        return tempObj;
      }
      return todo;
    });

    dispatch(changeTodosData(tempTodosArr, todosArr));
  };

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
      changeTodo({ newTitle, newIsReady, newDescription, id });
    }
  };

  return (
    // @TODO remove selector id from dom to native
    <li className="todo-element" id={id}>
      <input
        className="todo-element-text test"
        value={newTitle}
        // @TODO Tips
        onChange={({target: {value}}) => setNewTitle(value)}
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
          // @TODO remove selector id from dom to native
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
