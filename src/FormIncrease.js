import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FormIncrease = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch({ type: "increase" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={decreaseHandler}>decrease</button>
    </div>
  );
};

export default FormIncrease;
