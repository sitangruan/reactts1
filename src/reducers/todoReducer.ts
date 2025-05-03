/**
 * This is the Todo reducer
 */

import { TodoActionType } from "../common/constants";
import TodoAction from "../modals/TodoAction";
import TodoElement from "../modals/TodoElement";

const todoReducer = (state = Array<TodoElement>(), action: TodoAction | undefined): Array<TodoElement> => {
  if (!action) {
    return state == undefined ? Array<TodoElement>() : state;
  }

  switch (action.Type) {
    case TodoActionType.LOAD:
      if (Array.isArray(action.Data)) {
        return [...action.Data];
      } else {
        return [action.Data];
      }
    case TodoActionType.ADD:
      return [
        ...state,
        Array.isArray(action.Data) ? action.Data[0] : action.Data
      ];
    default:
      return state == undefined ? Array<TodoElement>() : state;
  }
}

export default todoReducer;
