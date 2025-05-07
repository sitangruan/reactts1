/**
 * This the central place for all constant value definitions.
 */

import NavigationLink from "../modals/NavigationLink";

export const navLinks: Array<NavigationLink> = [
  new NavigationLink(1, "Todos", "todos", true, true),
  new NavigationLink(2, "Users", "users"),
  new NavigationLink(3, "Albums", "albums"),
  new NavigationLink(4, "Posts", "posts"),
];

export const linkedInUrl = 'https://www.linkedin.com/in/sitang-ruan/';

export const sourceCodesUrl = 'https://github.com/sitangruan/reactts1';

export enum ViewMode {
  Grid = 0,
  Graph,
}

export enum TodoCompletedType {
  YES = 'YES',
  NO = 'NO'
}

export enum TodoFieldName {
  userId = 'UserId',
  id = 'Id',
  title = 'Title',
  completed = 'Completed'
};

export const todoGridColumns = [
  {
    fieldName: TodoFieldName.userId,
    display: 'User ID'
  },
  {
    fieldName: TodoFieldName.id,
    display: 'ID'
  },
  {
    fieldName: TodoFieldName.title,
    display: 'Title'
  },
  {
    fieldName: TodoFieldName.completed,
    display: 'Completed'
  },
];

export enum TodoActionType {
  LOAD = 'LOAD_TODOS',
  ADD = 'ADD_TODO',
  DELETE = 'DELETE_TODO',
  UPDATE = 'UPDATE_TODO',
}

export enum PostActionType {
  LOAD = 'LOAD_POSTS',
  ADD = 'ADD_POST',
  DELETE = 'DELETE_POST',
  UPDATE = 'UPDATE_POST',
}