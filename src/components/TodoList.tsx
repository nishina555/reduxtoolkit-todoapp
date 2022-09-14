import React from "react";
import Todo from "./Todo";
import { AppState } from "../store/index";
import { getTodosByVisibilityFilter, TodoItem } from "../selectors/todo";
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const todos: Array<TodoItem> = useSelector((state: AppState) => {
    const { todos, visibilityFilter } = state;
    return getTodosByVisibilityFilter(todos, visibilityFilter);
  });
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo: TodoItem, index: number) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
