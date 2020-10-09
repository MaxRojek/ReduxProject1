import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import tasksReducer from "./tasks";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  tasks: tasksReducer
});
export default allReducers;
