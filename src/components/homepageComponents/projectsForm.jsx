import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProjects } from "../../utils/projects/index";
import NewProjectForm from "./newProjectForm";
import ProjectsLibrary from "./projectsLibrary";


function ProjectsForm({setProject, user_id}){

  // Navigation for redirect
  const navigate = useNavigate();

  return (
    <div id="home-subsection-projects">

      <NewProjectForm user_id={user_id} setProject={setProject} />

      <ProjectsLibrary user_id={user_id} setProject={setProject}/>


    </div>
  )
};

export default ProjectsForm;