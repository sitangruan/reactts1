/**
 * This is the Todo action creator. It returns the Todo related actions.
 */

import { TodoActionType } from "../common/constants";
import TodoAction from "../modals/TodoAction";
import TodoElement from "../modals/TodoElement";

export const loadTodoListAction = (todoList: Array<TodoElement>): TodoAction => ({
  Type: TodoActionType.LOAD,
  Data: todoList
});

export const addTodoAction = (todo: TodoElement): TodoAction => ({
  Type: TodoActionType.ADD,
  Data: todo
})