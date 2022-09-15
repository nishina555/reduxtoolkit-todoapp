import { FC } from "react";
import Todo from "./Todo";
import { AppState } from "../store/index";
import { getTodosByVisibilityFilter } from "../selectors/todo";
import { TodoItem } from "../types/state/todos";
import { connect, useSelector } from "react-redux";
import styles from "./TodoList.module.css";
import todosSlice from "../reducers/todosSlice";

type Props = {
  todos: TodoItem[];
};

const TodoList: FC<Props> = ({ todos }) => {
  // const TodoList: FC = () => {
  // Before
  // const todos: Array<TodoItem> = useSelector((state: AppState) => {
  //   const { visibilityFilter } = state;
  //   return getTodosByVisibilityFilter(state, visibilityFilter);
  // });

  // After
  // const todos: Array<TodoItem> = useSelector(getTodosByVisibilityFilter);

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

const mapStateToProps = (state: AppState): Props => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

// export default TodoList;
export default connect(mapStateToProps)(TodoList);
