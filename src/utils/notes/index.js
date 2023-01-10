import { getCookie } from "../../common";

// Read / Get all the notes of a user from one project
export const readNotes = async (project_id) =>{
    try {
        const response = await fetch(`http://localhost:5001/projects/${project_id}/notes`, {
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

// Create a new note
export const createNote = async (user_id, project_id, note) => {
  try {
    const response = await fetch(`http://localhost:5001/projects/${project_id}/newNote`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" , 
            Authorization: "Bearer " + getCookie("jwt_token"),
            },
        body: JSON.stringify({
            user_id : user_id,
            noteTitle: note.noteTitle,
            noteContent: note.noteContent,
        }),
    });
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};





// Update the note (move between bins) 



// Delete the note 
export const deleteNote = async(note_id) => {
    try {
        const response = await fetch(`http://localhost:5001/notes/${note_id}`, {
            method: "DELETE",
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


