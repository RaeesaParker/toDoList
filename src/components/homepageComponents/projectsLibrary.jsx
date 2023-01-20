import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProjects, selectProject, deleteProject} from "../../utils/projects/index";
import DeleteIcon from '@mui/icons-material/Delete';


function ProjectsLibrary({user_id, setProject, setPrimaryColour}){

  // Navigation for redirect
  const navigate = useNavigate();

  // State to hold the projects list
  const [projects, setProjects] = useState([]);

  // When the component loads => Get all the users projects => only if there is a user 
  useEffect (() => {
    if(user_id == ""){ return } else{ readProjectsFunc() }
  }, [])

  const readProjectsFunc = async () => {
    let projectsList = await readProjects(user_id)
    setProjects(projectsList)
    console.log(projectsList)
  }


  // Function to load the project data of the project selected
  async function onSelectProject(project_id){
    let projectSelected = await selectProject(project_id, setProject)
    setPrimaryColour(projectSelected.themeName)
    navigate("/currentproject");   
  }

  // Function to delete project when button is clicked 
  async function onDeleteProject(project_id){
    await deleteProject(project_id)
    readProjectsFunc(user_id)
  }


  return(
    <div className='home-subsection-projects-container' id="home-saved-project">

      <div>
        <h2 > Your Projects</h2>
      </div>
      
      <div id="home-project-library">
        {projects.map( ( project ) => {
          return (
            <div key={project.id} 
              className={"home-project-card " + (project.themeName == "blue" ? "home-project-card-blue" 
                : ( project.themeName == "red" ? "home-project-card-red" 
                : (project.themeName =="yellow" ? "home-project-card-yellow" 
                :(project.themeName =="green" ? "home-project-card-green" 
                : "home-project-card-green" 
              ))))} >

              <div onClick={() => onSelectProject(project.id)} className="home-project-name">        
                <p  > {project.projectName} </p>
              </div>

              <div onClick={() => onDeleteProject(project.id)}> 
                <button className='button button-delete-project'> 
                  <span className="hovertext" data-hover="Delete"> <DeleteIcon />  </span>   
                </button>
              </div>
              
            </div> 
          )
        })}
      </div>
    </div>
  )
}


export default ProjectsLibrary;