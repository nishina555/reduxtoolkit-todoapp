import React from "react";
import cx from "classnames";
import { toggleTodo } from "../reducers/todosSlice";
import { TodoItem } from "../types/state/todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

type TodoProps = {
  todo: TodoItem;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
