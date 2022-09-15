import React from "react";
import Todo from "./Todo";
// import { AppState } from "../store/index";
import { getTodosByVisibilityFilter } from "../selectors/todo";
import { TodoItem } from "../types/state/todos";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  // Before
  // const todos: Array<TodoItem> = useSelector((state: AppState) => {
  //   const { visibilityFilter } = state;
  //   return getTodosByVisibilityFilter(state, visibilityFilter);
  // });

  // After
  const todos: Array<TodoItem> = useSelector(getTodosByVisibilityFilter);

  return (
    <ul className={styles.todoList}>
      {todos && todos.length
        ? todos.map((todo: TodoItem, index: number) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
