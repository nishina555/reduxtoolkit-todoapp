import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import visibilityFilterReducer from "./visibilityFilterSlice";
import countReducer from "./countSlice";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  count: countReducer,
});
