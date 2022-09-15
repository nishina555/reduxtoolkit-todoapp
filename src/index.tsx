import { createRoot } from "react-dom/client";
import { TodoApp } from "./components/TodoApp";
import { CounterApp } from "./components/CounterApp";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <CounterApp />
    <TodoApp />
  </Provider>
);
