/**
 * This it the TodoAction.
 */

import { TodoActionType } from "../common/constants";
import TodoElement from "./TodoElement";

export type TodoAction = {
  type: TodoActionType,
  payload: Array<TodoElement>
} |  {
  type: TodoActionType,
  payload: TodoElement
}