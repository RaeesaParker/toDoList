import React from 'react';
import { Link } from 'react-router-dom';

function Heading(props){


  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //



  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-customise">
        <div className="container-fluid">
          <p className="navbar-brand" >{props.userName}'s Workspace</p>
          <p className="navbar-brand" id="project-name">{props.projectName}</p>
          <Link to="/projects">
            <p className="navbar-brand" id="new-project">New Project</p>
          </Link>
        </div>
      </nav>
    </div>
    )

}


export default Heading;
