import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoState, TodoItem } from "../types/state/todos";
import { createSelector } from "@reduxjs/toolkit";

// Before
const todos = (state: AppState): TodoState => state.todos;
const getTodosById = (state: AppState) => todos(state).byId;
const getTodoIds = (state: AppState): number[] => todos(state).allIds;
const getTodos = (state: AppState): Array<TodoItem> =>
  getTodoIds(state).map((id) => getTodosById(state)[id]);

// const getTodosById = createSelector([todos], (todos) => todos.byId);

// const getTodoIds = createSelector([todos], (todos) => todos.allIds);

// const getTodos = createSelector([getTodoIds], (todoIds) => todoIds.map((id) => todos.byId[id]))

export const getTodosByVisibilityFilter = (
  state: AppState,
  visibilityFilter: VisibilityFilterTypes
): TodoItem[] => {
  const allTodos = getTodos(state);
  console.log("getTodosByVisibilityFilter");
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
