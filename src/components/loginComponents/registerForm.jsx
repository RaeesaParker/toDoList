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
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          autoComplete="off"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="error">
          {error ? error : <></>}
        </p>
        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>   
  );
}

export default RegisterForm;