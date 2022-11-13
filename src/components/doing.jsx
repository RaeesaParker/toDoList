import React from 'react';
import CreateNote from './createNote.jsx';


function Doing(props){


    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteDoingNote(id){
      props.setDoingNoteList(prevDoingNoteList => {
        return prevDoingNoteList.filter((oldNote) => {
          return oldNote.noteId !== id
        })
      })
    }
  


  // Add note to archive => then delete note 
  function processDoingAdd(id, title, body, setter, state){
    addToDoing(id, title, body, setter, state)
    deleteNote(id)
  }
 
  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToDoing(id, title, body, setter, state){
    const tempObject = {
      id: id,
      title: title,
      body:body
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


    // Functionality for drag and drop 
    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      console.log("On Drop")
      event.preventDefault();
      let data = event.dataTransfer.getData("text");

      // Get the note with the ID of the supplied ID from either the archive or the note list
      let draggedObject = props.archiveNoteList.filter(object => {
        return object.noteId == data
      })

      if (draggedObject.length == 0){
        draggedObject = props.noteList.filter(object => {
          return object.noteId == data
        })
        // Note is part of the todolist => Add to doing list => Delete from note list
        console.log(draggedObject)
        processDoingAdd(draggedObject[0].noteId, draggedObject[0].noteTitle, draggedObject[0].noteContent, props.setDoingNoteList, props.doingNoteList)
      }else{
        // Note is part of the archive => Add to doing list => Delete from archive
      }
    }
  

    return(
      <div className='section-doing' onDrop={drop} onDragOver={allowDrop}>
        <h3>Doing</h3>
        {/* Map over list items to create them => attaches note underneath */}
        {props.doingNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItem.noteId}
            archived={false}
            start={false}
            title={noteItem.title}
            body={noteItem.body}
            archiveNoteList={props.archiveNoteList}
            setArchiveNoteList={props.setArchiveNoteList}
            onDelete={deleteDoingNote}
          />
        })}
      </div>
    )
  }
  
  export default Doing;
  