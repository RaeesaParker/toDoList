import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/users";


function RegisterForm(props) {
  
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



  return (
    <div className='login-subsection-forms'>

    <div className ='login-title'> 
      <h3>Register Now!</h3>
    </div>
    
    <div className ='login-form'>
        <form onSubmit={onSubmitRegisterFunc}>
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
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
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
            <p  className='para-link' onClick={()=> {props.setNavForm('login')}}>Already have an account?</p>
          </div>

        </form>
    </div>
  </div>
  );
}

export default RegisterForm;
