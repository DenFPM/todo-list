const initState = {
  todosArr: [],
};
const todosData = (state = initState, action) => {
  switch (action.type) {
    case "SET_TODOS_DATA":
      return {
        ...state,
        todosArr: action.payload,
      };
    default:
      return state;
  }
};
export default todosData;