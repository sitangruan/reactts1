/**
 * This the Todo reducer test suite.
 */

import todoReducer from "./todoReducer";
import * as actions from '../actions/todoActionCreator';
import TodoElement from "../modals/TodoElement";

describe('todo reducer', () => {
  it('Test the initial state', () => {
    expect(todoReducer(undefined, undefined)).toEqual(Array<TodoElement>());
  });

  it('Test the LOAD_TODO action', () => {
    const myList = new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true),
      new TodoElement(3, 3, 'Test todo 3', false),
      new TodoElement(4, 4, 'Test todo 4', true),
    );
    
    const targetList = new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true),
      new TodoElement(3, 3, 'Test todo 3', false),
      new TodoElement(4, 4, 'Test todo 4', true),
    );

    const loadAction = actions.loadTodoListAction(myList);
    expect(todoReducer(new Array<TodoElement>(), loadAction)).toEqual(targetList);    
  });

  it('Test the ADD_TODO action', () => {
    const addAction1 = actions.addTodoAction(new TodoElement(1, 1, 'Test todo 1', false));
    const addAction2 = actions.addTodoAction(new TodoElement(2, 2, 'Test todo 2', true));
    const addAction3= actions.addTodoAction(new TodoElement(3, 3, 'Test todo 3', false));

    const originalList1 = new Array<TodoElement>();
    const targetList1 = new Array<TodoElement>(new TodoElement(1, 1, 'Test todo 1', false));
    expect(todoReducer(originalList1, addAction1)).toEqual(targetList1);

    const originalList2 = new Array<TodoElement>(new TodoElement(1, 1, 'Test todo 1', false));
    const targetList2 = new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true)
    );
    expect(todoReducer(originalList2, addAction2)).toEqual(targetList2);

    const originalList3 = new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true)
    );
    const targetList3 = new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true),
      new TodoElement(3, 3, 'Test todo 3', false)
    );
    expect(todoReducer(originalList3, addAction3)).toEqual(targetList3);
  });
});