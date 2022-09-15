import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoItem } from "../types/state/todos";

export const getTodoIds = (store: AppState): number[] => store.todos.allIds;

export const getTodoByIds = (store: AppState) => store.todos.byId;

export const getTodos = (store: AppState): Array<TodoItem> =>
  getTodoIds(store).map((id) => getTodoByIds(store)[id]);

export const getTodosByVisibilityFilter = (
  store: AppState,
  visibilityFilter: VisibilityFilterTypes
): TodoItem[] => {
  const allTodos = getTodos(store);
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
