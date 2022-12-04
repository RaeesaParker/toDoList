import React from "react";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import ProjectsForm from "./projectsForm";
import UserDetailsForm from "./userDetailsForm";
import "./homepageStyles.css"

function Homepage(props) {

  // Navigation for redirect
  const navigate = useNavigate();

  // Check if there is a user logged in => if not => route to the login page 
  useEffect (() => {
    if (!props.username){
     navigate("../toDoList/"); 
    }
  }, [])

  return (
    <div className="section-homescreen">

      <div className="home-subsection">
        <h2>Welcome {props.username}</h2>
      </div>

      <hr />
      <ProjectsForm onSubmitProject={props.onSubmitProject} user_id={props.user_id}/>

      <hr />
      <UserDetailsForm user_id={props.user_id}/>
    </div>
  );
}

export default Homepage;
