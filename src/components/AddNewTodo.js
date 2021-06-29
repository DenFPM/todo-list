import React, { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { setIsOldTodos , setTodosData} from "../redux/actions/setTodoActions";
const randomId = () => {
  return Math.random().toString(20).substr(2, 9);
};
 
const AddNewTodos = () => {
  const dispatch = useDispatch();
  const { todosArr } = useSelector(({ todosData }) => todosData);
  
  const [isReady, setIsReady] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSetTodos = (title, description, isReady) => {
    dispatch(setTodosData([...todosArr, { id: randomId(), title, description, isReady }]));
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
        className="submit-input"
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
        onClick={() => dispatch(setIsOldTodos())}
        className="form-element-constraction "
      >
        step to back
      </button>
    </div>
  );
};
export default AddNewTodos;
