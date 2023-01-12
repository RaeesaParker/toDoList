import React from "react";
import NewProjectForm from "./newProjectForm";
import ProjectsLibrary from "./projectsLibrary";


function ProjectsForm({setProject, user_id}){


  return (
    <div id="home-subsection-projects">

      <NewProjectForm user_id={user_id} setProject={setProject} />

      <ProjectsLibrary user_id={user_id} setProject={setProject}/>


    </div>
  )
};

export default ProjectsForm;