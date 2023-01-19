import React from "react";
import CreateNote from "./createNote.jsx";
import {deleteNote, updateNote} from '../../utils/notes/index'


function Doing(props) {

  // Function to delete note 
  async function deleteDoingNoteFunc(note_id){
    await deleteNote(note_id)
    props.readNotesFunc()
  }

 
  // Functionality for drag and drop
  function allowDrop(event) {
    event.preventDefault();
  }

  async function drop(event) {
    event.preventDefault();
    let data = Number(event.dataTransfer.getData("text"));

    // Check if the item is from the archive
    let draggedObject = props.archiveNoteList.filter(object => {return object.id === data})

    // If the item is not from the archive -> get it from the notelist
    if (draggedObject.length === 0) {
      draggedObject = props.noteList.filter(object => { return object.id === data})
    } 

    // Update the note to change it's bin to the doing (2)
    await updateNote(props.projectId, draggedObject[0].id, 2 )
    props.readNotesFunc()
  }

  

  return (
    <div className="section-list-div" id="section-doing" onDrop={drop} onDragOver={allowDrop}>

      <div className="project-title-div">
        <h3>{props.projectDetails.projectName}</h3>
      </div>

      <div className="project-section-colour project-section-doing " > 
      <h4> In progress</h4>
      <hr />
      {props.doingNoteList.map((noteItem, noteItemIndex) => {
        return (
          <CreateNote
            key={noteItemIndex}
            note={noteItem}
            archived={false}
            start={false}
            onDelete={deleteDoingNoteFunc}
            readNotesFunc={props.readNotesFunc}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Doing;
