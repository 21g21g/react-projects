import React, { createContext } from "react";
const MyContext = createContext({
  count: 0,
  isClicked: false,
  setCount: () => {},
  setIsClicked: () => {},
});
export default MyContext;
