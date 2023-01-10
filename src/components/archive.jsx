import React from 'react';
import CreateNote from './createNote.jsx';
import {deleteNote} from '../utils/notes/index'

function Archive(props){

  // Function to delete note 
  async function deleteArchiveNoteFunc(note_id){
    let deletedNote = await deleteNote(note_id)
    props.readNotesFunc()
  }



  //  ------------- FUNCTIONS FOR DRAGGING -> ADD TO DOING  --------------------//

  // Add note to archive => then delete note 
  function processArchiveAdd(id, title, body, setter, state){
    addToArchive(id, title, body, setter, state)
  }
 
  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToArchive(id, title, body, setter, state){
    const tempObject = {
      noteId: id,
      noteTitle: title,
      noteContent:body
    }
    setter([...state, tempObject])
  }




  //  -------------------- FUNCTIONS FOR DRAGABILITY  ------------------------//

  // Functionality for drag and drop 
  function allowDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if the item is from the doing list
    let draggedObject = props.doingNoteList.filter(object => {return object.noteId == data})
    
    // If the item is from the notelist -> get the object -> else -> get from doing
    if (draggedObject.length == 0){
      draggedObject = props.noteList.filter(object => { return object.noteId == data})
      // Delete from noteList
      props.setNoteList(prevNoteList => { return prevNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})
      }
      else{
        draggedObject = props.doingNoteList.filter(object => {return object.noteId == data})
        // Delete from doing list
        props.setDoingNoteList(prevDoingNoteList => { return prevDoingNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})    
      }
    // Note is part of the todolist => Add to archive list => Delete from note list
    processArchiveAdd(draggedObject[0].noteId, draggedObject[0].noteTitle, draggedObject[0].noteContent, props.setArchiveNoteList, props.archiveNoteList)
  }



  
  return(
    <div className='section-archive' onDrop={drop} onDragOver={allowDrop}>
      <h3>Done</h3>
      {/* Map over list items to create them => attaches note underneath */}
      {props.archiveNoteList.map((noteItem, noteItemIndex) => {
        return <CreateNote
          key={noteItemIndex}
          id={noteItem.id}
          archived={true}
          start={false}
          title={noteItem.noteTitle}
          body={noteItem.noteContent}
          onDelete={deleteArchiveNoteFunc}
        />
      })}
    </div>
  )
}
  
  export default Archive;
  