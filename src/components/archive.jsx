import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';


function Archive(){

    //  Create an array to store the archiveNoteList
    const [archiveNoteList, setArchiveNoteList] = React.useState([]);
  
  
    //  Function to add a new note to Archive => takes created note and pushes to the ArciveNotelist
    function addArchiveNote(newNote){
      setArchiveNoteList(prevArchiveNoteList => {
        return [...prevArchiveNoteList, newNote];
      });
    };
  
    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteArchiveNote(id){
      setArchiveNoteList(prevArchiveNoteList => {
        return prevArchiveNoteList.filter((oldNote, oldNoteIndex) => {
          return oldNoteIndex !== id
        })
      })
  
  
    }
  
  
    return(
      <div>
        <InsertNote
          onAdd={addArchiveNote}
        />
  
        {/* Map over list items to create them => attaches note underneath */}
        {archiveNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItemIndex}
            title={noteItem.noteTitle}
            body={noteItem.noteContent}
            onDelete={deleteArchiveNote}
          />
        })}
      </div>
    )
  }
  
  export default Archive;
  