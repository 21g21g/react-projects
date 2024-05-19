import React, { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.payload]: action.value,
      };
    default:
  }
};
const MyForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "update", payload: name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={initialState.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={initialState.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={initialState.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
