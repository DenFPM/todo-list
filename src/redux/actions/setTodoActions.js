export const setTodosData = (payload) => ({
  type: "SET_TODOS_DATA",
  payload,
});
export const changeTodosData = (todosArr, oldTodosArr) => ({
  type: "CHANGE_NEW_TODOS_DATA",
  // @TODO merge props to one payload
  todosArr,
  oldTodosArr,
});
export const setIsOldTodos = () => ({
  type: "SET_IS_OLD_TODOS",
});
