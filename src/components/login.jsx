import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Login(){

    // Navigation for redirect 
    const navigate = useNavigate();

    // // Navigate the the project page
    // navigate('/projects');

  return(
    <div>
      <h1>Login Page</h1>
    </div>
  )
}


export default Login;