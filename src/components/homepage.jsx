import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Homepage(props){

  // Navigation for redirect 
  const navigate = useNavigate();

  // Create state to store current user and project
  const [userDetails, setUserDetails ] = useState({
    userName: '',
    projectName:''
  })


  // Update the username and projectname
  function changeDetails(event){
    const {name, value} = event.target;

    setUserDetails(prevUserDetails => {
      return {
        ...prevUserDetails,
      [name]: value
      };
    });
  }


  // Function to run on form submit 
  function onSubmitFormFunc(event){

    // Check what colour has been submitted 
    const colourChosen =  document.querySelector('input[name="colour_chosen"]:checked').value;

    // Set the colour palette depending on which palette was chosen 
    switch (colourChosen){
      case 'green':
        document.documentElement.style.setProperty('--primary', '#4e705d');
        document.documentElement.style.setProperty('--secondary', '#e9e9e9');
        document.documentElement.style.setProperty('--tertiary', '#fcfcfc');
        break;
      case 'red':
        document.documentElement.style.setProperty('--primary', '#b01307');
        document.documentElement.style.setProperty('--secondary', '#f3f1ef');
        document.documentElement.style.setProperty('--tertiary', '#fffbfb');
        break;
      case 'blue':
        document.documentElement.style.setProperty('--primary', '#2E86AB');
        document.documentElement.style.setProperty('--secondary', '#e7ecef');
        document.documentElement.style.setProperty('--tertiary', '#f8f9fb');
        break;
      case 'yellow':
        document.documentElement.style.setProperty('--primary', '#eec302');
        document.documentElement.style.setProperty('--secondary', '#f4f4f4');
        document.documentElement.style.setProperty('--tertiary', '#ffffff');
        break;
      default:
        document.documentElement.style.setProperty('--primary', '#eec302');
        document.documentElement.style.setProperty('--secondary', '#f4f4f4');
        document.documentElement.style.setProperty('--tertiary', '#ffffff');
        break;
    }

    // Send the userdetails back to parent (app.js)
    props.onSubmitUser(userDetails);

    // Clear the form fields => reset the user details
    setUserDetails({
      userName: '',
      projectName:''
    })

    // Prevent refresh on re-rendering
    event.preventDefault();

    // Navigate the the current project page
    navigate('/currentproject');

  }




  return(
    <div className='section-homescreen'>

      <div className="home-subsection">
        <h1>Welcome to your Workspace!</h1>
        <h3>This is a flexible work management tool where you can ideate plans and track your progress in a visual, productive, and rewarding way. </h3>
        <h3>Fill in the form below to begin your project:</h3>
      </div>
      
      <div className="home-subsection">
        <div className="login-form">
          <form  className="login-form-input" onSubmit={onSubmitFormFunc}>
            <fieldset className="field-flex"> 
              <input  required autoComplete="off" type="text" placeholder="Name" name="userName" value={userDetails.userName} onChange={changeDetails}/> 
            </fieldset>

            <fieldset className="field-flex">
              <input required autoComplete="off" type="text" placeholder="Project Name" name="projectName" value={userDetails.projectName}  onChange={changeDetails}/> 
            </fieldset>

            <fieldset  className="field-flex">
              <div className="colour-card">
                <label htmlFor="green">
                  <div id="palette-green" className="colour-card-div"></div>
                </label><br/>
                <input defaultChecked type="radio" id="green" name="colour_chosen" value="green"/><br/>
              </div>
              
              <div className="colour-card">
                <label htmlFor="red">
                  <div id="palette-red" className="colour-card-div"></div>
                </label><br/>
                <input type="radio" id="red" name="colour_chosen" value="red"/><br/>
              </div>
            
              <div className="colour-card">
                <label htmlFor="blue">
                  <div id="palette-blue" className="colour-card-div"></div>
                </label><br/>
                <input type="radio" id="blue" name="colour_chosen" value="blue"/><br/>
              </div>

              <div className="colour-card">
                <label htmlFor="yellow">
                  <div id="palette-yellow" className="colour-card-div"></div>
                </label><br/>
                <input type="radio" id="yellow" name="colour_chosen" value="yellow" /><br/>
              </div>
            </fieldset>      
            
           
              <button type="submit"> Submit </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Homepage;