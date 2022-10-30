import React from 'react';
import CreateNote from './createNote.jsx';


function Archive(props){


  
  
    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteArchiveNote(id){
      props.setArchiveNoteList(prevArchiveNoteList => {
        return prevArchiveNoteList.filter((oldNote, oldNoteIndex) => {
          return oldNoteIndex !== id
        })
      })
    }
  
  
    return(
      <div className='section-archive'>
        <h3>Archive</h3>
        {/* Map over list items to create them => attaches note underneath */}
        {props.archiveNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItemIndex}
            archived={true}
            title={noteItem.title}
            body={noteItem.body}
            onDelete={deleteArchiveNote}
          />
        })}
      </div>
    )
  }
  
  export default Archive;
  