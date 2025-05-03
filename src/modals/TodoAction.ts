/**
 * This it the TodoAction.
 */

import { TodoActionType } from "../common/constants";
import TodoElement from "./TodoElement";

export default class TodoAction {
  public Type: TodoActionType;
  public Data: Array<TodoElement> | TodoElement;

  public constructor(_Type: TodoActionType, _Data: Array<TodoElement> | TodoElement) {
    this.Type = _Type;
    this.Data = _Data;
  }
}