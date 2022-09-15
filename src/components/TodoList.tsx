import React from "react";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../selectors/todo";
import { TodoItem } from "../types/state/todos";
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const todos: Array<TodoItem> = useSelector(getTodosByVisibilityFilter);

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
