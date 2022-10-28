import React from 'react';
import InsertNote from './insertNote.jsx';
import CreateNote from './createNote.jsx';


function Functionality(){

  //  Create an array to store the noteList
  const [noteList, setNoteList] = React.useState([]);


  //  Function to add a new note => pushes to the notelist
  function addNote(newNote){
    console.log(noteList);
    setNoteList(prevNoteList => {
      return [...prevNoteList, newNote];
    });
  };

  // Function to delete note => Returns all the notes WITHOUT supplied ID
  function deleteNote(id){
    setNoteList(prevNoteList => {
      return prevNoteList.filter((oldNote, oldNoteIndex) => {
        return oldNoteIndex !== id
      })
    })


  }


  return(
    <div>
      <InsertNote
        onAdd={addNote}
      />
      {noteList.map((noteItem, noteItemIndex) => {
        return <CreateNote
          key={noteItemIndex}
          id={noteItemIndex}
          title={noteItem.noteTitle}
          body={noteItem.noteContent}
          onDelete={deleteNote}
        />
      })}
    </div>
  )
}





export default Functionality;
