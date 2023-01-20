import React from "react";
import './loginStyles.css'
import { useState } from "react";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import Logo from '../../assets/logo_blue.png'
import Screenshot1 from "../../assets/screenshots/1.png"
import Screenshot2 from "../../assets/screenshots/2.png"
import Screenshot3 from "../../assets/screenshots/3.png"
import Screenshot4 from "../../assets/screenshots/4.png"


function Login(props) {
  
  // State to store which nav form should open
  const [navForm, setNavForm] = useState('buttons')
  
  // State to store homepage or about page
  const [aboutPage, setAboutPage] = useState(false)

  const handleOverlayClick = (event) => {
  if (event.target.localName == "div") {
    console.log("Closing form")
    // closes the form if the user clicks outside of the form
    setNavForm('buttons');
    setAboutPage(false);
  }
  };



  return (
    <div className="section-login" >

      <div className='login-subsection-navbar'> 
        {navForm === 'buttons' ? (

          <nav className="navbar navbar-expand-lg  navbar-customise">
            <div className="navbar-buttons">
              <h1> PinIt!</h1>
            </div>
            <div className="navbar-buttons">
            <div className="navbar-item"> 
              <button className="navbar-brand" onClick={() => {setNavForm('login')}} >Login</button>
            </div>
            <div className="navbar-item">
              <button className="navbar-brand button-signup" onClick={() => {setNavForm('register')}}>Sign Up</button>
            </div>
            <div className="navbar-item">
              <button  id="button-about" onClick={() => {setAboutPage(true)}}>About</button>
            </div>
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

      {aboutPage == false ?

      <div  onClick={(event) => handleOverlayClick(event)}>
        <div className="login-subsection-logo">
          <img alt="logo" id="logo-homepage" src={Logo}></img>
        </div>

        <div className="login-subsection-welcome">
          <h3>
            A flexible work management tool to ideate plans and
            track your progress in a visual, productive, and rewarding way.
          </h3>
          <h3>
            Login, or sign up, now to begin!
          </h3>
        </div>
      </div>
      :
      <div  onClick={(event) => handleOverlayClick(event)}>
        <div className="login-subsection-logo" id="page-about">
          <h2>Welcome to PinIt!</h2>
        </div>

        <div className="login-subsection-welcome">
          <h3>
            A flexible work management tool to ideate plans and
            track your progress in a visual, productive, and rewarding way.
          </h3>
          <img alt="logo" class="screenshot-img" src={Screenshot1}></img>
          <img alt="logo" class="screenshot-img" src={Screenshot2}></img>
          <img alt="logo" class="screenshot-img" src={Screenshot3}></img>
          <img alt="logo" class="screenshot-img" src={Screenshot4}></img>
        </div>
      </div>
      }

    </div>
  );
}

export default Login;
