import React from "react";
import "./CartItem.css";
const CartItem = (props) => {
  const { id, productName, price, productImage } = props.carts;
  return (
    <div key={id} className="cartitem">
      <img src={productImage} alt="d" />
      <h1>{productName}</h1>
      <h3>{price}</h3>
    </div>
  );
};

export default CartItem;
