import React, { useReducer } from "react";

const countHandler = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
  }
};
const Counter = () => {
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const [state, dispatch] = useReducer(countHandler, { count: 0 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
};

export default Counter;
