import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';
import {createNote, deleteNote, updateNote} from '../utils/notes/index'

function CurrentInserts({noteList, archiveNoteList, doingNoteList, userId, projectId, readNotesFunc}){

  //  Function to add a new note
  async function addNote(newNote){
    await createNote(userId, projectId, newNote)
    readNotesFunc()
  };

  // Function to delete note 
  async function deleteNoteFunc(note_id){
    await deleteNote(note_id)
    readNotesFunc()
  }


  // Functionality for drag and drop 
  function allowDrop(event) {
    event.preventDefault();
  }

  async function drop(event) {
    event.preventDefault();
    let data = Number(event.dataTransfer.getData("text"));

    // Check if the item is from the archive
    let draggedObject = archiveNoteList.filter(object => {return object.id === data})

    // If the item is not from the archive => get it from the doing 
    if (draggedObject.length === 0){
      draggedObject = doingNoteList.filter(object => { return object.id === data})
    }
    
    // Update the note to change it's bin to the toDo (1)
    await updateNote(projectId, draggedObject[0].id, 1 )
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
          toDo={false}
        />
      })}
    </div>
  )
}





export default CurrentInserts;
