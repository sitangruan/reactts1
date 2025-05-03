/**
 * This is the root reducer.
 */

import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import postReducer from "./postReducer";

export default combineReducers({
  todoReducer,
  postReducer
})