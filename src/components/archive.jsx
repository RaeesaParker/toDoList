import React from 'react';
import CreateNote from './createNote.jsx';


function Archive(props){

    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteArchiveNote(id){
      props.setArchiveNoteList(prevArchiveNoteList => {
        return prevArchiveNoteList.filter((oldNote) => {
          return oldNote.noteId !== id
        })
      })
    }



      //  ------------- FUNCTIONS FOR DRAGGING -> ADD TO DOING  --------------------//

  // Add note to archive => then delete note 
  function processArchiveAdd(id, title, body, setter, state){
    addToArchive(id, title, body, setter, state)
    deleteNote(id)
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

    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteNote(id){
      props.setNoteList(prevNoteList => {
        return prevNoteList.filter((oldNote) => {
          return oldNote.noteId !== id
        })
      })
    }




  //  -------------------- FUNCTIONS FOR DRAGABILITY  ------------------------//

    // Functionality for drag and drop 
    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData("text");

      // Get the note with the ID of the supplied ID from either the doing or the note list
      let draggedObject = props.doingNoteList.filter(object => {
        return object.noteId == data
      })

      if (draggedObject.length == 0){
        draggedObject = props.noteList.filter(object => {
          return object.noteId == data
        })
        // Note is part of the todolist => Add to archive list => Delete from note list
        processArchiveAdd(draggedObject[0].noteId, draggedObject[0].noteTitle, draggedObject[0].noteContent, props.setArchiveNoteList, props.archiveNoteList)
      }else{
        // Note is part of the doing => Add to archive list => Delete from doing
      }

    }



  
    return(
      <div className='section-archive' onDrop={drop} onDragOver={allowDrop}>
        <h3>Done</h3>
        {/* Map over list items to create them => attaches note underneath */}
        {props.archiveNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItem.noteId}
            archived={true}
            start={false}
            title={noteItem.noteTitle}
            body={noteItem.noteContent}
            onDelete={deleteArchiveNote}
          />
        })}
      </div>
    )
  }
  
  export default Archive;
  