import React, { useReducer } from "react";
import Button from "../component/Button";
const usereducerFunction = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.payload]: action.value,
      };
    case "increment":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "decrement":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
  }
};
const UsereducerForm = () => {
  const initialState = {
    price: "",
    title: "",
    desc: "",
    catagory: "t-shirts",

    quantity: 0,
  };
  const [state, dispatch] = useReducer(usereducerFunction, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "change", payload: name, value });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Price</label>
        <br />
        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
        />
        <br />
        <label>title</label>
        <br />
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <label>desc</label>
        <br />
        <input
          type="text"
          value={state.desc}
          name="desc"
          onChange={handleChange}
        />
        <br />
        <label>catagory:</label>
        <br />
        <select name="catagory" value={state.catagory} onChange={handleChange}>
          <option value="t-shirts">t-shirts</option>
          <option value="trousers">trousers</option>
          <option value="jacket">jacket</option>
          <option value="cape">cape</option>
        </select>{" "}
        <br />
        <Button type="submit">add</Button>
      </form>
      <div>
        <h1>{state.quantity}</h1>
        <Button onClick={incrementHandler}>increase</Button>
        <Button onClick={decrementHandler}>decrease</Button>
      </div>
    </div>
  );
};

export default UsereducerForm;
