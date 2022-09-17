import { FC } from "react";
import Todo from "./Todo";
import { AppState } from "../store/index";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { TodoItem } from "../types/state/todos";
// import { connect, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";
// import todosSlice from "../reducers/todosSlice";

const TodoList: FC = () => {
  // Before
  const todos: Array<TodoItem> = useSelector((state: AppState) => {
    const { visibilityFilter } = state;
    return selectTodosByVisibilityFilter(state, visibilityFilter);
  });

  // After
  // const todos: Array<TodoItem> = useSelector(selectTodosByVisibilityFilter);

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

// connectを利用した実装
// type Props = {
//   todos: TodoItem[];
// };

// const TodoList: FC<Props> = ({ todos }) => {
//   return (
//     <ul className={styles.todoList}>
//       {todos && todos.length
//         ? todos.map((todo: TodoItem, index: number) => {
//             return <Todo key={`todo-${todo.id}`} todo={todo} />;
//           })
//         : "No todos, yay!"}
//     </ul>
//   );
// };

// const mapStateToProps = (state: AppState): Props => {
//   const { visibilityFilter } = state;
//   const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//   return { todos };
// };

// export default connect(mapStateToProps)(TodoList);
