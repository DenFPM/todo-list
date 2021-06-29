const initState = {
  todosArr: [],
  oldTodosArr: [],
  isSetOldTodos:false
};
const todosData = (state = initState, action) => {
  switch (action.type) {
    case "SET_TODOS_DATA":
      console.log(action)
      return {
        ...state,
        todosArr: action.payload,
        
      };
    case "CHANGE_NEW_TODOS_DATA":
      console.log(action)
      return {
        ...state,
        oldTodosArr:state.todosArr,
        todosArr: action.payload[0],
      };
      case "SET_IS_OLD_TODOS":
        console.log("SET_IS_OLD_TODOS",state)
        return{
          ...state,
          isSetOldTodos:!state.isSetOldTodos
        }
    default:
      return state;
  }
};
export default todosData;
