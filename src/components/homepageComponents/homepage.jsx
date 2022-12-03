import React from "react";
import { useState } from "react";
import ProjectsForm from "./projectsForm";
import UserDetailsForm from "./userDetailsForm";
import "./homepageStyles.css"

function Homepage(props) {


  return (
    <div className="section-homescreen">

      <div className="home-subsection">
        <h2>Welcome {props.username}</h2>
      </div>

      <hr />
      <ProjectsForm onSubmitProject={props.onSubmitProject}/>

      <hr />
      <UserDetailsForm/>
    </div>
  );
}

export default Homepage;
