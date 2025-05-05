/**
 * This is the Todo action creator. It returns the Todo related actions.
 */

import { TodoActionType } from "../common/constants";
import TodoElement from "../modals/TodoElement";

export const loadTodoListAction = (todoList: Array<TodoElement>) => ({
  type: TodoActionType.LOAD,
  payload: todoList
});

export const addTodoAction = (todo: TodoElement) => ({
  type: TodoActionType.ADD,
  payload: todo
});