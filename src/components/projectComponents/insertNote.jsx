import React from 'react';
import NewNoteInput from './insertNoteInputs.jsx';
import Zoom from '@mui/material/Zoom';


// This deals with inputing a new note
// Need to take the note from here and export it to the creating a note page


// ----------------------------------------------------------------- //
// Create a function to insert a new note
// ----------------------------------------------------------------- //

function InsertNote(props){


  // Create a state to hold the note
  const [note, setNote] = React.useState({
    noteTitle: '',
    noteContent: ''
    });

  // Set state to expand input on click
  const [expanded, setExpanded] = React.useState(false);


  // Create function to add a new note to the array => Takes the input title / content and sets them
  function addNewNote(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
      [name]: value
      };
    });
  }

  // Submit the note to the functionality element when add button is clicked
  function submitNote(event){
    props.onAdd(note);
    setNote({
      noteTitle: '',
      noteContent: ''
    });
    event.preventDefault();
  }


  // Function to expand the text expand Area
  function expandArea(event){
    setExpanded(true);
  }




  /////////////////// RETURN /////////////////

  return (
    <div id="insert-note-container">

      <div className={expanded ? 'insert-note-expanded insert-note' : 'insert-note '}>
        <form >

          {expanded === true && (
            <NewNoteInput
            type='text'
            name='noteTitle'
            placeholder='New Task Name'
            value = {note.noteTitle}
            onChange = {addNewNote}
            /> )
          }

          {expanded === true && ( <hr /> ) }
          
          <NewNoteInput
            type='text'
            name='noteContent'
            placeholder='New Task Details'
            value = {note.noteContent}
            onChange = {addNewNote}
            onClick={expandArea}
          />
        </form>
      </div>

      <div id = "button-add-task-div">
        {expanded === true &&(  
          <button
            className='submit-button'
            id = "button-add-task"
            type='submit'
            onClick={submitNote} >
            Add Task
          </button>
        )}
      </div>

    </div> 
  )
};


export default InsertNote;
