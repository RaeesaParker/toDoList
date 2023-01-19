import React from 'react';
import CreateNote from './createNote.jsx';
import {deleteNote, updateNote} from '../../utils/notes/index'

function Archive(props){

  // Function to delete note 
  async function deleteArchiveNoteFunc(note_id){
    await deleteNote(note_id)
    props.readNotesFunc()
  }


  //  -------------------- FUNCTIONS FOR DRAGABILITY  ------------------------//

  // Functionality for drag and drop 
  function allowDrop(event) {
    event.preventDefault();
  }

  async function drop(event) {
    event.preventDefault();
    let data = Number(event.dataTransfer.getData("text"));

    // Check if the item is from the notelist
    let draggedObject = props.noteList.filter(object => {return object.id === data })


    // If the item is not from the noteList -> get it from the doing note list
    if (draggedObject.length === 0) {
      draggedObject = props.doingNoteList.filter(object => { return object.id === data})
    } 
        
    // Update the note to change it's bin to the archive (3)
    await updateNote(props.projectId, draggedObject[0].id, 3 )
    props.readNotesFunc()
  }



  
  return(
    <div className="section-list-div" id="section-archive"  onDrop={drop} onDragOver={allowDrop}>

      <div className="project-title-div project-section-colour">
        <h3>Raeesa</h3>
      </div>

      <div className="project-section-colour project-section-doing "  >
        <h4> Done</h4>
        <hr />

        {props.archiveNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            archived={true}
            note={noteItem}
            onDelete={deleteArchiveNoteFunc}
            readNotesFunc={props.readNotesFunc}
          />
        })}
      </div>
    </div>
  )
}
  
  export default Archive;
  