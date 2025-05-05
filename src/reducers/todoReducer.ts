/**
 * This is the Todo reducer
 */

import { TodoActionType } from "../common/constants";
import { TodoAction } from "../modals/TodoAction";
import TodoElement from "../modals/TodoElement";

const todoReducer = (state = Array<TodoElement>(), action: TodoAction | undefined): Array<TodoElement> => {
  if (!action) {
    return state == undefined ? Array<TodoElement>() : state;
  }

  switch (action.type) {
    case TodoActionType.LOAD:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      } else {
        return [action.payload];
      }
    case TodoActionType.ADD:
      return [
        ...state,
        Array.isArray(action.payload) ? action.payload[0] : action.payload
      ];
    default:
      return state == undefined ? Array<TodoElement>() : state;
  }
}

export default todoReducer;
