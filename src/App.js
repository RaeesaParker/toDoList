import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Homepage from "./components/homepageComponents/homepage";
import CurrentProject from "./components/currentProject";

function App() {

  // Create an array to store the details of a project
  const [userDetails, setUserDetails] = useState({
    userName:"",
    user_id: "",
  });

  // Function to take in the user details submited on homepage
  function onSetUserDetails(userDetails) {
    setUserDetails({
      userName: userDetails.userName,
      user_id: userDetails.user_id,
    });
  }

  // Create an array to store the details of a project
  const [project, setProject] = useState({
    projectName: " ",
    themeName: " ",
  });


  // Function to take in the user details submited on homepage
  function onSubmitProject(projectDetails) {
    setProject({
      projectName: projectDetails.projectName,
      themeName: projectDetails.themeName,
    });
  }

  return (
    <div>
      <Routes>
        <Route path="toDoList/" element={<Login  setUserDetails={onSetUserDetails}></Login>} />
        <Route
          path="/projects"
          element={
            <Homepage
              username={userDetails.userName}
              user_id={userDetails.user_id}
              onSubmitProject={onSubmitProject}
            ></Homepage>
          }
        />
        <Route
          path="/currentproject"
          element={
            <CurrentProject userName={userDetails.userName} projectName={project.projectName} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
