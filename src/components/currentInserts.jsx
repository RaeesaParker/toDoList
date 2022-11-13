import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';
import Archive from './archive.jsx';


function CurrentInserts({noteList, setNoteList, archiveNoteList, setArchiveNoteList, doingNoteList, setDoingNoteList}){



  //  Function to add a new note => takes created note and pushes to the notelist
  function addNote(newNote){
    setNoteList(prevNoteList => {
      return [...prevNoteList, newNote];
    });
  };

  // Function to delete note => Returns all the notes WITHOUT supplied ID
  function deleteNote(id){
    setNoteList(prevNoteList => {
      return prevNoteList.filter((oldNote) => {
        return oldNote.noteId !== id
      })
    })
  }

 


  return(
    <div className='section-insert'>
      <InsertNote
        onAdd={addNote}
      />

      {/* Map over list items to create them => attaches note underneath */}
      {noteList.map((noteItem, noteItemIndex) => {
        return <CreateNote
          key={noteItemIndex}
          id={noteItem.noteId}
          title={noteItem.noteTitle}
          body={noteItem.noteContent}
          onDelete={deleteNote}
          archiveNoteList={archiveNoteList}
          setArchiveNoteList={setArchiveNoteList}
          doingNoteList={doingNoteList}
          setDoingNoteList={setDoingNoteList}
        />
      })}
    </div>
  )
}





export default CurrentInserts;
