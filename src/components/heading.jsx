import React from 'react';


function Heading(props){


  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //



  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-customise">
        <div className="container-fluid">
          <a className="navbar-brand" >{props.userName}'s Workspace</a>
          <a className="navbar-brand" id="project-name">{props.projectName}</a>
          <a className="navbar-brand" id="new-project">New Project</a>
        </div>
      </nav>
    </div>
    )

}


export default Heading;
