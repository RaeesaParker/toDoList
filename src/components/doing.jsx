import React from 'react';
import CreateNote from './createNote.jsx';


function Doing(props){

  
    // Function to delete note => Returns all the notes WITHOUT supplied ID
    function deleteDoingNote(id){
      props.setDoingNoteList(prevDoingNoteList => {
        return prevDoingNoteList.filter((oldNote, oldNoteIndex) => {
          return oldNoteIndex !== id
        })
      })
    }
  
  
    return(
      <div className='section-doing'>
        <h3>Doing</h3>
        {/* Map over list items to create them => attaches note underneath */}
        {props.doingNoteList.map((noteItem, noteItemIndex) => {
          return <CreateNote
            key={noteItemIndex}
            id={noteItemIndex}
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
  