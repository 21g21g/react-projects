import MyContext from "./MyContext";

import React, { useState } from "react";

const CartcontextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const cartItem = {
    count: 0,
    isClicked: true,
    setCount,
    setIsClicked,
  };
  return (
    <MyContext.Provider value={cartItem}>{props.children}</MyContext.Provider>
  );
};

export default CartcontextProvider;
