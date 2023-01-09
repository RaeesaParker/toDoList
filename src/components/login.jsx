import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../utils/users";

function Login(props) {
  
  // Navigation for redirect
  const navigate = useNavigate();

  // Create states to store details of user provided information
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Function to run on register submit
  async function onSubmitRegisterFunc(event) {
    event.preventDefault();
    await registerUser(username, email, password, props.setUserDetails);
    navigate("/projects");   
  }

  // Function to run on sign in submit
  async function onSubmitSignInFunc(event) {
    event.preventDefault();
    let registeredUser = await loginUser(username, password, props.setUserDetails)
    if (registeredUser){
      navigate("/projects");   
    }
  }



  return (
    <div className="section-login">
      <div className="login-subsection-welcome">
        <h1>Welcome to PinBoard!</h1>
        <h4>
          This is a flexible work management tool where you can ideate plans and
          track your progress in a visual, productive, and rewarding way.{" "}
        </h4>
        <h4>Register now, or sign in, to begin...</h4>
      </div>

      <div className="login-subsection-login">
        <div className="login-subsection-forms">
          <h3>Register</h3>

          <form className="login-form-input" onSubmit={onSubmitRegisterFunc}>
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="Username"
              name="userName"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="submit-button" type="submit">
              Register
            </button>
          </form>
        </div>

        <div className="login-subsection-forms">
          <h3>Sign In</h3>

          <form className="login-form-input" onSubmit={onSubmitSignInFunc}>
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="UserName"
              name="userName"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="submit-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
