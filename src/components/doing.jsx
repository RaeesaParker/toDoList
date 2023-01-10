import React from "react";
import CreateNote from "./createNote.jsx";
import {deleteNote, updateNote} from '../utils/notes/index'


function Doing(props) {

  // Function to delete note 
  async function deleteDoingNoteFunc(note_id){
    let deletedNote = await deleteNote(note_id)
    props.readNotesFunc()
  }

  //  ------------- FUNCTIONS FOR DRAGGING -> ADD TO DOING  --------------------//

  // Add note to archive => then delete note
  function processDoingAdd(id, title, body, setter, state) {
    addToDoing(id, title, body, setter, state);
  }

  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToDoing(id, title, body, setter, state) {
    const tempObject = {
      noteId: id,
      noteTitle: title,
      noteContent: body,
    };
    setter([...state, tempObject]);
  }

  //  -------------------- FUNCTIONS FOR DRAGABILITY  ------------------------//

  // Functionality for drag and drop
  function allowDrop(event) {
    event.preventDefault();
  }

  async function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if the item is from the archive
    let draggedObject = props.archiveNoteList.filter(object => {return object.id == data})


    // If the item is not from the archive -> get it from the notelist
    if (draggedObject.length == 0) {
      draggedObject = props.noteList.filter(object => { return object.id == data})
    } 
        
    // Update the note to change it's bin to the doing (2)
    let updatedNote = await updateNote(props.projectId, draggedObject[0].id, 2 )
    props.readNotesFunc()
  }

  

  return (
    <div className="section-doing" onDrop={drop} onDragOver={allowDrop}>
      <h3>Doing</h3>
      {/* Map over list items to create them => attaches note underneath */}
      {props.doingNoteList.map((noteItem, noteItemIndex) => {
        return (
          <CreateNote
            key={noteItemIndex}
            note={noteItem}
            archived={false}
            start={false}
            onDelete={deleteDoingNoteFunc}
          />
        );
      })}
    </div>
  );
}

export default Doing;
