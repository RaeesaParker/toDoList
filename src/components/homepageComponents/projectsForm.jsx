import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ProjectsForm({onSubmitProject}){

  // Navigation for redirect
  const navigate = useNavigate();

  // Create state to store the curren project details
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
  function onSubmitFormFunc(event) {
    // Check what colour has been submitted
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

    // Send the userdetails back to parent (app.js) => comes from props
    onSubmitProject(projectDetails);

    // Clear the form fields => reset the user details
    setProjectDetails({
      projectName: "",
      themeName: "",
    });

    // Prevent refresh on re-rendering
    event.preventDefault();

    // Navigate the the current project page
    navigate("/currentproject");
  }



  return (
    <div id="home-subsection-projects">

      <div className="home-subsection-projects-select">

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

      <div className="home-subsection-projects-select">
        <h3>Your Projects...</h3>
      </div>

    </div>
  )
};

export default ProjectsForm;