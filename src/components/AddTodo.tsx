import React, { useState } from "react";
import { addTodo } from "../reducers/todosSlice";
import { plusCount } from "../reducers/countSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const AddTodo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const handleCount = () => {
    dispatch(plusCount());
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="add-todo" onClick={handleCount}>
        plus Count
      </button>
    </div>
  );
};

export default AddTodo;
