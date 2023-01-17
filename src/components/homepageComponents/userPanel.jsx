import React from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsForm from "./userDetailsForm";
import Footer from "./footer";


function UserPanel(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  function onLogOut() {
    navigate("/");
  }

  return (
    <div className="home-subsection-user-panel">

      <div className="user-container" id='user-title'>
        <h3>Hello {props.userDetails.userName}!</h3>
      </div>

      <div  className="user-container" id='submit-button-logout' onClick={onLogOut}>
        <p > Logout</p>
      </div>
  
      <div className="user-container" id='user-details' >
        <h4>Account Details</h4>
     </div>

      <div className="user-container">
        <UserDetailsForm user_id={props.userDetails.user_id} userDetails={props.userDetails} setUserDetails={props.setUserDetails}/>
      </div>

      <div className="daily-quote user-container">
        <h4>Daily Quote</h4>
      </div>

      <div  className="footer user-container">
        <Footer/>
      </div>
      
    </div>
  );
}

export default UserPanel;
