import React from "react";
import NewProjectForm from "./newProjectForm";
import ProjectsLibrary from "./projectsLibrary";


function ProjectsForm({setProject, user_id}){

  // Function to set primary colour  
  function setPrimaryColour(colourChosen){

    // Set the colour palette depending on which palette was chosen => default is yellow
    switch (colourChosen) {
      case "green":
        document.documentElement.style.setProperty("--primary", "40, 150, 90");
        break;
      case "red":
        document.documentElement.style.setProperty("--primary", "194, 1, 20");
        break;
      case "blue":
        document.documentElement.style.setProperty("--primary", "39, 93, 173");
        break;
      default:
        document.documentElement.style.setProperty("--primary", "237, 174, 73");
        break;
    }

  }

  return (
    <div >
      <NewProjectForm user_id={user_id} setProject={setProject} setPrimaryColour={setPrimaryColour}/>
      <ProjectsLibrary user_id={user_id} setProject={setProject} setPrimaryColour={setPrimaryColour}/>
    </div>
  )
};

export default ProjectsForm;