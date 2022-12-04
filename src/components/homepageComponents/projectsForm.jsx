import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readProjects } from "../../utils/projects/index";
import NewProjectForm from "./newProjectForm";
import DeleteIcon from '@mui/icons-material/Delete';


function ProjectsForm({onSubmitProject, user_id}){

  // Navigation for redirect
  const navigate = useNavigate();

  
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

  return (
    <div id="home-subsection-projects">

      <NewProjectForm 
        onSubmitProject={onSubmitProject}
      />

      <div className="home-subsection-projects-select">
        <h3>Your Projects...</h3>
        {projects.map((project) => {
          return <p
          key={project.id}
          className="home-project-name"
          >
          {project.projectName}
          </p>
        })}
      </div>

    </div>
  )
};

export default ProjectsForm;