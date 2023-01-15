import React from "react";
import './loginStyles.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../../utils/users";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import Logo from '../../assets/logo_blue.png'

function Login(props) {
  
  // State to store which nav form should open
  const [navForm, setNavForm] = useState('buttons')



  return (
    <div className="section-login">

      <div className='login-subsection-navbar'> 

        {navForm === 'buttons' ? (
          <nav className="navbar navbar-expand-lg  navbar-customise">
            <div className="navbar-item"> 
              <button className="navbar-brand" onClick={() => {setNavForm('login')}} >Login</button>
            </div>
            <div className="navbar-item">
              <button className="navbar-brand button-signup" onClick={() => {setNavForm('register')}}>Sign Up</button>
            </div>
          </nav>
        ) : navForm === 'register' ? (
          <div className="login-subsection-login">
            <RegisterForm setUserDetails ={props.setUserDetails} setNavForm={setNavForm}/>
          </div>
        ) : navForm === 'login' ? (
          <div className="login-subsection-login">
            <LoginForm setUserDetails ={props.setUserDetails} setNavForm={setNavForm}/>
          </div>
          ) : '' }
      </div>

      <div className="login-subsection-logo">
        <img alt="logo" id="logo-homepage" src={Logo}></img>
      </div>

      <div className="login-subsection-welcome">
        <h1> PinBoard!</h1>
        <h4>
          A flexible work management tool where you can ideate plans and
          track your progress in a visual, productive, and rewarding way.
        </h4>
        <h4>Register now, or sign in, to begin...</h4>
      </div>
    </div>
  );
}

export default Login;
