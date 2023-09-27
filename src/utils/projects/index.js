import { getCookie } from "../../common";
//const API_URL = process.env.REACT_APP_BASE_URL;
const API_URL = "http://localhost:5001"


// Read / Get all the projects of a user 
export const readProjects = async (user_id) =>{
    try {
        const response = await fetch(`${API_URL}/user/${user_id}/projects`, {
            method: 'GET',
            headers: { 
            "Content-Type": "application/json" , 
            Authorization: "Bearer " + getCookie("jwt_token"),
            },
        })
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
} 

// Create a new project
export const createProject = async (user_id, projectName, themeName, setProject) => {
  try {
    const response = await fetch(`${API_URL}/newProject`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" , 
        Authorization: "Bearer " + getCookie("jwt_token"),
        },
      body: JSON.stringify({
        user_id:user_id,
        projectName: projectName,
        themeName: themeName,
      }),
    });
    const data = await response.json();
    setProject({project_id:data.id, projectName:data.projectName, themeName:data.themeName})
  } catch (error) {
    console.log(error);
  }
};


// Find the selected project
export const selectProject = async (project_id, setProject) =>{
    try {
        const response = await fetch(`${API_URL}/projects/${project_id}`, {
            method: 'GET',
            headers: { 
            "Content-Type": "application/json" , 
            Authorization: "Bearer " + getCookie("jwt_token"),
            },
        })
        const data = await response.json()
        setProject({project_id:data.id, projectName:data.projectName, themeName:data.themeName})
        return data
    } catch (error) {
        console.log(error)
    }
} 





// Delete the project 
export const deleteProject = async(project_id) => {
    try {
        const response = await fetch(`${API_URL}/projects/${project_id}`, {
            method: "DELETE",
            headers: { 
            "Content-Type": "application/json" , 
            Authorization: "Bearer " + getCookie("jwt_token"),
            },
        })
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}


