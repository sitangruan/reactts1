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

    const loadAction = actions.loadTodoListAction(myList);
    expect(todoReducer(new Array<TodoElement>(), loadAction)).toEqual(new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true),
      new TodoElement(3, 3, 'Test todo 3', false),
      new TodoElement(4, 4, 'Test todo 4', true),
    ));    
  });

  it('Test the ADD_TODO action', () => {
    const addAction1 = actions.addTodoAction(new TodoElement(1, 1, 'Test todo 1', false));
    const addAction2 = actions.addTodoAction(new TodoElement(2, 2, 'Test todo 2', true));
    const addAction3= actions.addTodoAction(new TodoElement(3, 3, 'Test todo 3', false));

    expect(todoReducer(new Array<TodoElement>(), addAction1)).toEqual(new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false)
    ));

    expect(todoReducer(new Array<TodoElement>(new TodoElement(1, 1, 'Test todo 1', false)), addAction2)).toEqual(new Array<TodoElement>(
      new TodoElement(1, 1, 'Test todo 1', false),
      new TodoElement(2, 2, 'Test todo 2', true)
    ));

    expect(todoReducer(new Array<TodoElement>(new TodoElement(1, 1, 'Test todo 1', false)
      , new TodoElement(2, 2, 'Test todo 2', true)), addAction3))
      .toEqual(new Array<TodoElement>(
        new TodoElement(1, 1, 'Test todo 1', false),
        new TodoElement(2, 2, 'Test todo 2', true),
        new TodoElement(3, 3, 'Test todo 3', false)
      ));
  });
})