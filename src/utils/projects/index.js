// Read / Get all the projects of a user 
export const readProjects = async (user_id) =>{
    try {
        const response = await fetch(`http://localhost:5001/user/${user_id}/projects`, {
            method: 'GET',
            headers: {"Content-type": "application/json"}
        })
        const data = await response.json()
        const projects = data;
        // console.log(projects)
        return projects
    } catch (error) {
        console.log(error)
    }
} 


// Create a new project 


// Find the seletced project 


// Update the project 

// Delete the project 


