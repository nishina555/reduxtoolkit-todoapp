import { plusCount, minusCount } from "../reducers/countSlice";
import { AppState } from "../store/index";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import "../styles.css";

export const CounterApp = () => {
  const dispatch: AppDispatch = useDispatch();

  const count: number = useSelector((state: AppState) => state.count);

  const handlePlusCount = () => {
    dispatch(plusCount());
  };

  const handleMinusCount = () => {
    dispatch(minusCount());
  };

  return (
    <div className="counter-app">
      <h1>Count: {count}</h1>
      <div>
        <span></span>
        <button className="counter-button" onClick={handlePlusCount}>
          +Count
        </button>
        <button className="counter-button" onClick={handleMinusCount}>
          -Count
        </button>
      </div>
    </div>
  );
};
