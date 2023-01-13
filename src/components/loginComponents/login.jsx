import React from "react";
import './loginStyles.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../../utils/users";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

function Login(props) {
  
  // Navigation for redirect
  const navigate = useNavigate();

  // Create states to store details of user provided information
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Set state for login error
  const [error, setError] = useState("");
  // temp use of setError
  if (1 == 2) {setError("")}


  // Function to run on register submit
  async function onSubmitRegisterFunc(event) {
    event.preventDefault();
    if (!username) {setError("A username is required"); return; }

    if (!password) { setError("A password is required"); return; }

    if (!email) { setError("An email address is required"); return;}

    let newUser = await registerUser(username, email, password, props.setUserDetails);
    if (newUser.userName){
      navigate("/projects");   
    }else{
      setError(newUser);
    }  
  }

  // Function to run on sign in submit
  async function onSubmitSignInFunc(event) {
    event.preventDefault();

    if (!username) {setError("Username is required"); return; }

    if (!password) { setError("Password is required"); return;}

    let registeredUser = await loginUser(username, password, props.setUserDetails)
    if (registeredUser){
      navigate("/projects");   
    }else{
      setError(registeredUser);
    }
  }



  return (
    <div className="section-login">
      <div className="login-subsection-welcome">
        <h1>Welcome to PinBoard!</h1>
        <h4>
          This is a flexible work management tool where you can ideate plans and
          track your progress in a visual, productive, and rewarding way.
        </h4>
        <h4>Register now, or sign in, to begin...</h4>
      </div>

      <div className="login-subsection-login">
        <RegisterForm setUserDetails ={props.setUserDetails}/>
        <LoginForm setUserDetails ={props.setUserDetails}  />
      </div>
    </div>
  );
}

export default Login;
