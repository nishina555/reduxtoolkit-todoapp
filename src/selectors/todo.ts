import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoState } from "../types/state/todos"
// import { createSelector } from 'reselect';

export type TodoItem = {
  content: string;
  completed: boolean;
  id: number;
};

export const getTodoList = (todos: TodoState): Array<number> =>
  todos ? todos.allIds : [];

export const getTodoById = (todos: TodoState, id: number): TodoItem => {
  return { ...todos.byId[id], id };
};

export const getTodos = (todos: TodoState): Array<TodoItem> =>
  getTodoList(todos).map((id) => getTodoById(todos, id));

export const getTodosByVisibilityFilter = (
  todos: TodoState,
  visibilityFilter: VisibilityFilterTypes
): TodoItem[] => {
  console.log('selector')
  const allTodos = getTodos(todos);
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
