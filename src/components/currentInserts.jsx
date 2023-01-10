import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';
import {createNote, deleteNote} from '../utils/notes/index'

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

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // Check if the item is from the archive
    let draggedObject = archiveNoteList.filter(object => {return object.noteId == data})

    // If the item is from the doinglist -> get the object -> else -> get from archive
    if (draggedObject.length == 0){
      draggedObject = doingNoteList.filter(object => { return object.noteId == data})
      // Delete from noteList
      setDoingNoteList(prevDoingNoteList => { return prevDoingNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})
    }
    else{
      draggedObject = archiveNoteList.filter(object => { return object.noteId == data})
      // Delete from archive list
      setArchiveNoteList(prevArchiveNoteList => { return prevArchiveNoteList.filter((oldNote) => {return oldNote.noteId !== draggedObject[0].noteId})})
    }

    // Add to the doing list
    processToDoAdd(draggedObject[0].noteId, draggedObject[0].noteTitle, draggedObject[0].noteContent, setNoteList, noteList)
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
          id={noteItem.id}
          projectId={noteItem.ProjectId}
          title={noteItem.noteTitle}
          body={noteItem.noteContent}
          onDelete={deleteNoteFunc}
          archiveNoteList={archiveNoteList}
          setArchiveNoteList={setArchiveNoteList}
          doingNoteList={doingNoteList}
          setDoingNoteList={setDoingNoteList}
          readNotesFunc={readNotesFunc}

        />
      })}
    </div>
  )
}





export default CurrentInserts;
