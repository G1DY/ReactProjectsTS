import { useReducer } from "react";
import { CountReducer, Action, State } from "./CountReducer";

const initialState: State = { count: 0 };

const Counter4 = () => {
  const [state, dispatch] = useReducer(CountReducer, initialState);
  const Increment = () => {
    dispatch({ type: "Increment" });
  };
  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};
export default Counter4;
