import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Homepage from "./components/homepage";
import CurrentProject from "./components/currentProject";

function App() {

  // Crate a state to store the username
  const [user, setUser] = useState();

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
        <Route path="toDoList/" element={<Login setUser={setUser}></Login>} />
        <Route
          path="/projects"
          element={
            <Homepage
              username={user}
              project={project}
              setProject={setProject}
              onSubmitProject={onSubmitProject}
            ></Homepage>
          }
        />
        <Route
          path="/currentproject"
          element={
            <CurrentProject userName={user} projectName={project.projectName} />
          }
        />
      </Routes>
      {/* <Login setUser={setUser}></Login> */}

      {/* {user ? (
        <Homepage
          username={user}
          user={users}
          setUser={setUsers}
          onSubmitUser={onSubmitUser}
        ></Homepage>
      ) : (
        <Login setUser={setUser}></Login>
      )} */}
    </div>
  );
}

export default App;
