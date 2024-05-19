import React from "react";
import { PRODUCTS } from "../Products";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <div>
      {PRODUCTS.map((products) => {
        return (
          <>
            <CartItem key={products.id} carts={products} />
            <button>add to cart</button>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
