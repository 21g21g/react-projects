import React, { useContext } from "react";
import "./NavBar.css";
import { FaCartPlus } from "react-icons/fa";
import "./NavBar.css";
import MyContext from "../context/MyContext";
const NavBar = () => {
  const { count } = useContext(MyContext);

  return (
    <div className="all">
      <h1>React Meals</h1>
      <div className="cart">
        <button>
          <FaCartPlus />
          <p>your cart</p>
          <h2>{count}</h2>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
