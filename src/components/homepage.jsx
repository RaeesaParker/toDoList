import React from 'react';


function Homepage(){



  return(
    <div className='section-homescreen'>

      <div className="home-subsection">
        <h1>Welcome to your Workspace!</h1>
        <h3>This is a flexible work management tool where you can ideate plans and track your progress in a visual, productive, and rewarding way. </h3>
        <h3>Fill in the form below to begin your project:</h3>
      </div>
      
      <div className="home-subsection">
        <div id="user-form">
          <form  id="user-form-input">
            <fieldset className="field-flex"> 
              <input  required autoComplete="off" type="text" placeholder="Name" name="name"/> 
            </fieldset>

            <fieldset className="field-flex">
              <input required autoComplete="off" type="text" placeholder="Project Name" name="project-name" /> 
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