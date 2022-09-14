import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";

export type TodoItem = {
  content: string;
  completed: boolean;
  id: number;
};

export const getTodoList = (store: AppState): Array<number> =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store: AppState, id: number): TodoItem => {
  return { ...store.todos.byId[id], id };
};

export const getTodos = (store: AppState): Array<TodoItem> =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
  store: AppState,
  visibilityFilter: VisibilityFilterTypes
): TodoItem[] => {
  const allTodos = getTodos(store);
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
