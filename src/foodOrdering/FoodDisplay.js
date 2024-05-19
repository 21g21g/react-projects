import React, { useContext, useReducer } from "react";
import { FoodData } from "../Food";
import "./FoodDisplay.css";
import MyContext from "../context/MyContext";

const FoodDisplay = () => {
  const { count, setCount } = useContext(MyContext);

  const clickHandle = () => {
    setCount((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
    console.log(count);
  };
  return (
    <div>
      {FoodData.map((food) => {
        return (
          <div className="food" key={food.name}>
            <h1>{food.name}</h1>
            <h2>{food.ingrediant}</h2>
            <h3>{food.price}</h3>
            <button className="button" onClick={clickHandle}>
              add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodDisplay;
