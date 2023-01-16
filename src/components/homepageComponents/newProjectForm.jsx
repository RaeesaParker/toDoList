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

    // Set the colour palette depending on which palette was chosen
    switch (colourChosen) {
      case "green":
        document.documentElement.style.setProperty("--primary", "#4e705d");
        document.documentElement.style.setProperty("--secondary", "#e9e9e9");
        document.documentElement.style.setProperty("--tertiary", "#fcfcfc");
        break;
      case "red":
        document.documentElement.style.setProperty("--primary", "#b01307");
        document.documentElement.style.setProperty("--secondary", "#f3f1ef");
        document.documentElement.style.setProperty("--tertiary", "#fffbfb");
        break;
      case "blue":
        document.documentElement.style.setProperty("--primary", "#2E86AB");
        document.documentElement.style.setProperty("--secondary", "#e7ecef");
        document.documentElement.style.setProperty("--tertiary", "#f8f9fb");
        break;
      case "yellow":
        document.documentElement.style.setProperty("--primary", "#eec302");
        document.documentElement.style.setProperty("--secondary", "#f4f4f4");
        document.documentElement.style.setProperty("--tertiary", "#ffffff");
        break;
      default:
        document.documentElement.style.setProperty("--primary", "#eec302");
        document.documentElement.style.setProperty("--secondary", "#f4f4f4");
        document.documentElement.style.setProperty("--tertiary", "#ffffff");
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
    <div>

      <form onSubmit={onSubmitFormFunc}>
        
        <fieldset>
          <input
            required
            autoComplete="off"
            type="text"
            placeholder="New Project Name"
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

        <button className="submit-button" type="submit">Get Started...</button>

      </form>
    </div>
  )
}

export default NewProjectForm;