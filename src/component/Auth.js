import React from "react";
import { actions } from "../store/Loggedin";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.login());
  };
  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>id</label>
        <br></br>
        <input type="text" name="id" />
        <br></br>
        <label>password</label>
        <br></br>
        <input type="password" name="password" />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Auth;
