import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsForm from "./projectsForm";
import "./homepageStyles.css"

function Homepage(props) {

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
    const colourChosen = document.querySelector(
      'input[name="themeName"]:checked'
    ).value;

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

    // Send the userdetails back to parent (app.js)
    props.onSubmitProject(projectDetails);

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
    <div className="section-homescreen">

      <div className="home-subsection">
        <h2>Welcome {props.username}</h2>
      </div>

      <hr />

      <ProjectsForm 
        changeDetails={changeDetails}
        onSubmitFormFunc={onSubmitFormFunc}
        projectDetails={projectDetails}
      />

      <hr />

      <div className="home-subsection" >
        <form>
          <label htmlFor="updateField">Update your details:</label>
          <select id="update-field" name="updateField">
            <option value="updateUsername">Username</option>
            <option value="updateEmail">Email</option>
          </select> 
          <input type="text" placeholder="New Details"></input>
          <button className="submit-button" id="submit-button-update" type="submit">Update</button>

        </form>
      </div>
    </div>
  );
}

export default Homepage;
