import React, { useContext } from "react";
import MyContext from "../context/MyContext";
const Hello = () => {
  const { click, setClick } = useContext(MyContext);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div>
      {click && <h1>halo</h1>}

      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default Hello;
