import { AppState } from "../store/index";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoState } from "../types/state/todos";
import { createSelector } from "@reduxjs/toolkit";
import { visibilityFilter } from "./visibilityFilter";

const todos = (state: AppState): TodoState => state.todos;
const getTodoIds = createSelector([todos], (todos) => todos.allIds);
const getTodosById = createSelector([todos], (todos) => todos.byId);

const getTodos = createSelector(
  [getTodoIds, getTodosById],
  (todoIds, todosById) => todoIds.map((id) => todosById[id])
);

export const getTodosByVisibilityFilter = createSelector(
  [getTodos, visibilityFilter],
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter((todo) => !todo.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return todos;
    }
  }
);
