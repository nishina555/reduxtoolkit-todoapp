import { AppState } from "../store/index";
// import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
// import { TodoState, TodoItem } from "../types/state/todos";
import { TodoState } from "../types/state/todos";
import { createSelector } from "@reduxjs/toolkit";
import { visibilityFilter } from "./visibilityFilter";

// Before
// const todos = (state: AppState): TodoState => state.todos;
// const getTodoIds = (state: AppState): number[] => todos(state).allIds;
// const getTodosById = (state: AppState) => todos(state).byId;
// const getTodos = (state: AppState): Array<TodoItem> =>
//   getTodoIds(state).map((id) => getTodosById(state)[id]);
// export const getTodosByVisibilityFilter = (
//   state: AppState,
//   visibilityFilter: VisibilityFilterTypes
// ): TodoItem[] => {
//   const allTodos = getTodos(state);
//   console.log("Selector is called");
//   switch (visibilityFilter) {
//     case VISIBILITY_FILTERS.COMPLETED:
//       return allTodos.filter((todo) => todo.completed);
//     case VISIBILITY_FILTERS.INCOMPLETE:
//       return allTodos.filter((todo) => !todo.completed);
//     case VISIBILITY_FILTERS.ALL:
//     default:
//       return allTodos;
//   }
// };

// After
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
    console.log("Selector is called");
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
