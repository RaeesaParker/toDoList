import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';
import {createNote, deleteNote, updateNote} from '../utils/notes/index'

function CurrentInserts({noteList, setNoteList, archiveNoteList, setArchiveNoteList, doingNoteList, setDoingNoteList, userId, projectId, readNotesFunc}){

  //  Function to add a new note
  async function addNote(newNote){
    let createdNote = await createNote(userId, projectId, newNote)
    readNotesFunc()
  };

  // Function to delete note 
  async function deleteNoteFunc(note_id){
    let deletedNote = await deleteNote(note_id)
    readNotesFunc()
  }

   //  ------------- FUNCTIONS FOR DRAGGING -> ADD TO TO DO  --------------------//

  // Add note to archive => then delete note 
  function processToDoAdd(id, title, body, setter, state){
    addToToDo(id, title, body, setter, state)
  }
 
  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToToDo(id, title, body, setter, state){
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

  async function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if the item is from the archive
    let draggedObject = archiveNoteList.filter(object => {return object.id == data})

    // If the item is not from the archive => get it from the doing 
    if (draggedObject.length == 0){
      draggedObject = doingNoteList.filter(object => { return object.id == data})
    }
    
    // Update the note to change it's bin to the toDo (1)
    let updatedNote = await updateNote(projectId, draggedObject[0].id, 1 )
    readNotesFunc()
  }


  return(
    <div className='section-insert' onDrop={drop} onDragOver={allowDrop}>
      <InsertNote
        onAdd={addNote}
      />

      {/* Map over list items to create them => attaches note underneath */}
      {noteList.map((noteItem, noteItemIndex) => {
        return <CreateNote
          key={noteItemIndex}
          projectId={noteItem.ProjectId}
          note={noteItem}
          onDelete={deleteNoteFunc}
          readNotesFunc={readNotesFunc}
        />
      })}
    </div>
  )
}





export default CurrentInserts;
