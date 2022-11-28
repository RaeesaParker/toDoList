import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Login(){

    // Navigation for redirect 
    const navigate = useNavigate();

    // // Navigate the the project page
    // navigate('/projects');

  return(
    <div className='section-login'>

      <div className='login-subsection-welcome'> 
        <h1>Welcome to PinBoard!</h1>
        <h3>This is a flexible work management tool where you can ideate plans and track your progress in a visual, productive, and rewarding way. </h3>
        <h3>Register now, or sign in, to begin...</h3>
      </div>

      <div className='login-subsection-forms'>
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <h1>Sign In</h1>
        </div>

      </div>

    </div>
  )
}


export default Login;