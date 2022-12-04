import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProjects } from "../../utils/projects/index";
import DeleteIcon from '@mui/icons-material/Delete';


function ProjectsLibrary({user_id}){


  // State to hold the projects list
  const [projects, setProjects] = useState([]);

  
  // When the component loads => Get all the users projects
  useEffect ((user_id) => {
    readProjectsFunc(user_id)
  }, [])

  const readProjectsFunc = async () => {
    let projectsList = await readProjects(user_id)
    setProjects(projectsList)
  }



  return(
    <div className="home-subsection-projects-select">
      <h3>Your Projects...</h3>

      {projects.map( ( project ) => {
        return (
          <div>   
            <p key={project.id} className="home-project-name"> {project.projectName} </p>
            <DeleteIcon className="button-delete-project" />
          </div> 
        )
      })}
    </div>
  )
}


export default ProjectsLibrary;