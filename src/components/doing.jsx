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
  


  //  ------------- FUNCTIONS FOR DRAGGING -> ADD TO DOING  --------------------//

  // Add note to archive => then delete note 
  function processDoingAdd(id, title, body, setter, state){
    addToDoing(id, title, body, setter, state)
  }
 
  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToDoing(id, title, body, setter, state){
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


      // Check if the item is from the archive
      let draggedObject = props.archiveNoteList.filter(object => {
        return object.noteId == data
      })

      // If the item is from the notelist -> get the object -> else -> get from archive
      if (draggedObject.length == 0){
        draggedObject = props.noteList.filter(object => {
          return object.noteId == data
        })
        // Delete from noteList
        props.setNoteList(prevNoteList => { return prevNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})
      }
      else{
        draggedObject = props.archiveNoteList.filter(object => {
          return object.noteId == data
        })
        // Delete from archive list
        props.setArchiveNoteList(prevArchiveNoteList => { return prevArchiveNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})
      }

      // Add to the doing list
      processDoingAdd(draggedObject[0].noteId, draggedObject[0].noteTitle, draggedObject[0].noteContent, props.setDoingNoteList, props.doingNoteList)
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
            title={noteItem.noteTitle}
            body={noteItem.noteContent}
            archiveNoteList={props.archiveNoteList}
            setArchiveNoteList={props.setArchiveNoteList}
            onDelete={deleteDoingNote}
          />
        })}
      </div>
    )
  }
  
  export default Doing;
  