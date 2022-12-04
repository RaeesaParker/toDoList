import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProjects, deleteProject} from "../../utils/projects/index";
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


  // Function to delete project when button is clicked 
  async function onDeleteProject(project_id){
    await deleteProject(project_id)
    readProjectsFunc(user_id)
  }


  return(
    <div className="home-subsection-projects-select">
      <h3>Your Projects...</h3>

      {projects.map( ( project ) => {
        return (
          <div key={project.id}>   
            <p className="home-project-name"> {project.projectName} </p>
            <button
              className='button button-delete-project'
              onClick={() => onDeleteProject(project.id)}> 
              <span className="hovertext" data-hover="Delete"> <DeleteIcon />  </span>   
            </button>
          </div> 
        )
      })}
    </div>
  )
}


export default ProjectsLibrary;