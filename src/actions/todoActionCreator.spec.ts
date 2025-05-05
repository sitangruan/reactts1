/**
 * This the Todo action creator test suites. It will test the Todo related action creating.
 */

import * as actions from './todoActionCreator';
import { TodoActionType } from '../common/constants';
import TodoElement from '../modals/TodoElement';

describe('todo actions', () => {
  it('The method loadTodoAction should create LOAD_TODO action', () => {
    const myList = [new TodoElement(123, 678, 'Test todo 567', false)];
    expect(actions.loadTodoListAction(myList)).toEqual({
      type: TodoActionType.LOAD,
      payload: myList
    });
  });

  it('The method addTodoAction should create ADD_TODO action', () => {
    const myTodo = new TodoElement(456, 789, 'Test todo 321', true);
    expect(actions.addTodoAction(myTodo)).toEqual({
      type: TodoActionType.ADD,
      payload: myTodo
    });
  });
});
