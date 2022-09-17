import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoState, TodoItem } from "../types/state/todos";
// import { TodoState } from "../types/state/todos";
// import { createSelector } from "@reduxjs/toolkit";
// import { selectVisibilityFilter } from "./visibilityFilter";

// Before
const todos = (state: AppState): TodoState => state.todos;
const selectTodoIds = (state: AppState): number[] => todos(state).allIds;
const selectTodosById = (state: AppState) => todos(state).byId;
const selectTodos = (state: AppState): TodoItem[] =>
  selectTodoIds(state).map((id) => selectTodosById(state)[id]);
export const selectTodosByVisibilityFilter = (
  state: AppState,
  visibilityFilter: VisibilityFilterTypes
): TodoItem[] => {
  console.log("Selector is called");
  const allTodos = selectTodos(state);
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

// After
// const todos = (state: AppState): TodoState => state.todos;
// const selectTodoIds = createSelector([todos], (todos) => todos.allIds);
// const selectTodosById = createSelector([todos], (todos) => todos.byId);
// const selectTodos = createSelector(
//   [selectTodoIds, selectTodosById],
//   (todoIds, todosById) => todoIds.map((id) => todosById[id])
// );
// export const selectTodosByVisibilityFilter = createSelector(
//   [selectTodos, selectVisibilityFilter],
//   (todos, visibilityFilter) => {
//     console.log("Selector is called");
//     switch (visibilityFilter) {
//       case VISIBILITY_FILTERS.COMPLETED:
//         return todos.filter((todo) => todo.completed);
//       case VISIBILITY_FILTERS.INCOMPLETE:
//         return todos.filter((todo) => !todo.completed);
//       case VISIBILITY_FILTERS.ALL:
//       default:
//         return todos;
//     }
//   }
// );
