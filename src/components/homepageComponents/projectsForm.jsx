import React from "react";


function ProjectsForm({changeDetails, onSubmitFormFunc, projectDetails}){

  return (
    <div id="home-subsection-projects">
      <div  style={{backgroundColor: "orange"}} className="home-subsection-projects-select">
        <h3> New Project </h3> 
        <form onSubmit={onSubmitFormFunc}>
          <fieldset className="field-flex">
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
            <div className="colour-card">
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

            <div className="colour-card">
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
            <br />
            <div className="colour-card">
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

            <div className="colour-card">
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

          <button className="submit-button" type="submit">Submit</button>

        </form>
      </div>
      <div  style={{backgroundColor: "yellow"}} className="home-subsection-projects-select">
        <h4>Project Library</h4>
      </div>
    </div>
  )
};

export default ProjectsForm;