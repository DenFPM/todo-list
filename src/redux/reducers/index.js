import { combineReducers } from "redux";

import todosData from "./todoReducer";

const rootReducer = combineReducers({
    todosData
});

export default rootReducer;