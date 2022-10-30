import React from 'react';
import CreateNote from './createNote.jsx';


function Archive(props){


  
    //  Function to add a new note to Archive => takes created note and pushes to the ArciveNotelist
    // function addArchiveNote(newNote){
    //   setArchiveNoteList(prevArchiveNoteList => {
    //     return [...prevArchiveNoteList, newNote];
    //   });
    // };
  
    // // Function to delete note => Returns all the notes WITHOUT supplied ID
    // function deleteArchiveNote(id){
    //   setArchiveNoteList(prevArchiveNoteList => {
    //     return prevArchiveNoteList.filter((oldNote, oldNoteIndex) => {
    //       return oldNoteIndex !== id
    //     })
    //   })
  
  
    // }
  
  
    return(
      <div className='section-archive'>
        {/* <InsertNote
          onAdd={addArchiveNote}
        /> */}
  
        {/* Map over list items to create them => attaches note underneath */}
        
        {props.archiveNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItemIndex}
            title={noteItem.title}
            body={noteItem.body}
            // onDelete={deleteArchiveNote}
          />
        })}
      </div>
    )
  }
  
  export default Archive;
  