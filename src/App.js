import './App.css';
import {useState} from 'react';
import { BrowserRouter , Routes , Route , Link, Navigate } from 'react-router-dom';
import Login from './components/login'
import Homepage from './components/homepage';
import CurrentProject from './components/currentProject';



function App() {


  // Create an array to store the userDetails
  const [users, setUsers] = useState({
    userName:" ",
    projectName:" "
  })


  // Function to take in the user details submited on homepage
  function onSubmitUser(userDetails){
    setUsers({
      userName: userDetails.userName, 
      projectName: userDetails.projectName
    })
  }


  
  return (
    <div>
        <Routes>
          <Route
            path="toDoList/"
            element={<Login></Login>}
          />
          <Route
            path="/projects"
            element={<Homepage user={users} setUser={setUsers} onSubmitUser={onSubmitUser} ></Homepage>}
          />
          <Route
            path="/currentproject"
            element={
              <CurrentProject   
                userName={users.userName} 
                projectName={users.projectName}
              />
            }
          />
        </Routes>
    </div>
  );
}

export default App;
