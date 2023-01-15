import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/users";

function LoginForm(props) {
  
  // Navigation for redirect
  const navigate = useNavigate();

  // Create states to store details of user provided information
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Set state for login error
  const [error, setError] = useState("");
  // temp use of setError
  if (1 == 2) {setError("")}


  // Function to run on sign in submit
  async function onSubmitSignInFunc(event) {
    event.preventDefault();

    if (!username) {setError("Username is required"); return; }

    if (!password) { setError("Password is required"); return;}

    let registeredUser = await loginUser(username, password, props.setUserDetails)
    if (registeredUser.userName){
      navigate("/projects");   
    }else{
      setError(registeredUser);
    }  
  }



  return (
  <div className='login-subsection-forms'>

    <div className ='login-title'> 
      <h3>Welcome Back!</h3>
    </div>
    
    <div className ='login-form'>
        <form onSubmit={onSubmitSignInFunc}>
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
              type="password"
              placeholder="  Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />

          <p className="error">
            {error ? error : <></>}
          </p>

          <div  className="login-form-submit">
            <button className="submit-button-login" type="submit">
              Sign In
            </button>
            <p  className='para-link' onClick={()=> {props.setNavForm('register')}}>Don't have an account?</p>
          </div>

        </form>
    </div>

  </div>
  );
}

export default LoginForm;
