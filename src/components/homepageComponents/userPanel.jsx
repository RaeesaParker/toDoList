import React from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsForm from "./userDetailsForm";
import Quote from "./quote";
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
        <h4>Hello {props.userDetails.userName}!</h4>
      </div>

      <div  className="submit-button" onClick={onLogOut}>
        <p> <i className="fa-solid fa-arrow-right-from-bracket"></i> &nbsp; Logout</p>
      </div>
  
      <div className="user-container" id='user-details' >
        <p>Account Details</p>
     </div>

      <div className="user-container">
        <UserDetailsForm user_id={props.userDetails.user_id} userDetails={props.userDetails} setUserDetails={props.setUserDetails}/>
      </div>

      <div className="user-container">
        <Quote/>
      </div>

      <div  className="footer user-container">
        <Footer/>
      </div>
      
    </div>
  );
}

export default UserPanel;
