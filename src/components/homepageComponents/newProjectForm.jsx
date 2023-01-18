import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../utils/projects/index"

function NewProjectForm({ user_id, setProject } ){

  // Navigation for redirect
  const navigate = useNavigate();
  
  // Create state to store the current project details
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    themeName: "",
  });


  // Update the projectname and themename
  function changeDetails(event) {
    const { name, value } = event.target;

    setProjectDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [name]: value,
      };
    });
  }


  // Function to run on form submit
  async function onSubmitFormFunc(event) {
    event.preventDefault();

    const colourChosen = document.querySelector('input[name="themeName"]:checked').value;

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

    // Create a new project on the DB
    await createProject(user_id, projectDetails.projectName, projectDetails.themeName, setProject)

    // Clear the form fields => reset the user details
    setProjectDetails({
      projectName: "",
      themeName: "",
    });

    // Navigate the the current project page
    navigate("/currentproject");
  }


  return (
    <div className='home-subsection-projects-container' id="home-new-project">
      <h2 className="home-project-title" > Start a new project</h2>
      
      <form onSubmit={onSubmitFormFunc}>
        
        <fieldset>
          <input
            required
            autoComplete="off"
            type="text"
            placeholder="Project Name"
            name="projectName"
            value={projectDetails.projectName}
            onChange={changeDetails}
          />
        </fieldset>

        <fieldset className="field-flex">
          <div  className="colour-card">
            <label htmlFor="green">
              <div id="palette-green" className="colour-card-div"></div>
            </label>
            <input
              defaultChecked
              type="radio"
              id="green"
              name="themeName"
              value="green"
              onChange={changeDetails}
            />
          </div>

          <div  className="colour-card">
            <label htmlFor="red">
              <div id="palette-red" className="colour-card-div"></div>
            </label>
            <input
              type="radio"
              id="red"
              name="themeName"
              value="red"
              onChange={changeDetails}
            />
          </div>

          <div  className="colour-card">
            <label htmlFor="blue">
              <div id="palette-blue" className="colour-card-div"></div>
            </label>
            <input
              type="radio"
              id="blue"
              name="themeName"
              value="blue"
              onChange={changeDetails}
            />
          </div>

          <div   className="colour-card">
            <label htmlFor="yellow">
              <div id="palette-yellow" className="colour-card-div"></div>
            </label>
            <input
              type="radio"
              id="yellow"
              name="themeName"
              value="yellow"
              onChange={changeDetails}
            />
          </div>
        </fieldset>

        <button className="submit-button" id="submit-button-project" type="submit">Start Now ...</button>

      </form>
    </div>
  )
}

export default NewProjectForm;