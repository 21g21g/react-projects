import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/ReduxToolkit";
const ReduxToolkit = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const clikIncrease = () => {
    dispatch(actions.increament);
  };
  const clickDecrease = () => {
    dispatch(actions.decrement);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clikIncrease}>increase</button>
      <button onClick={clickDecrease}>decrease</button>
    </div>
  );
};

export default ReduxToolkit;
