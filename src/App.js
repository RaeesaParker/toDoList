import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
// Cookie
import { getCookie } from "./common/index";
import { findUser } from "./utils/users";
// Components
import Login from "./components/login";
import Homepage from "./components/homepageComponents/homepage";
import CurrentProject from "./components/currentProject";


function App() {

  // Navigation for redirect
  const navigate = useNavigate();

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

  // Functions to be used for cookie search => Check for cookie when the page loads => Find user if the token is found
  useEffect (() => {
    let cookie = getCookie('jwt_token')
    if (cookie !== false){
      loginWithToken(cookie, setUserDetails)
    }
  }, [])

  const loginWithToken = async(cookie) => {
    const userDetails = await findUser(cookie, setUserDetails)
    if (userDetails){
      navigate("/projects");   
    }
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
            <CurrentProject username={userDetails.userName} projectName={project.projectName} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
