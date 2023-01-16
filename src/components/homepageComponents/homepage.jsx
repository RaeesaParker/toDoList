import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsForm from "./projectsForm";
import UserPanel from "./userPanel";
import "./homepageStyles.css";

function Homepage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Check if there is a user logged in => if not => route to the login page
  // useEffect(() => {
  //   if (!props.username) {
  //     navigate("/");
  //   }
  // }, []);


  return (
    <div className="section-homescreen">

      <div className="home-subsection-projects-container">
        <ProjectsForm setProject={props.setProject} user_id={props.userDetails.user_id} />
      </div>

      <div className='home-subsection-user' >
        <UserPanel userDetails={props.userDetails} setUserDetails={props.setUserDetails}/>
      </div>

    </div>
  );
}

export default Homepage;
