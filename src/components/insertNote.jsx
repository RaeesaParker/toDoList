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
    noteId: Math.random(),
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
      noteId: Math.random(),
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
    <div>
      <h3>Create Task</h3>
      <div className={expanded ? 'insert-note-expanded insert-note' : 'insert-note '}>
        <form>
          {/* Note title => only shows when expanded */}
          {expanded === true && (<NewNoteInput
            type='text'
            name='noteTitle'
            placeholder='Task Name'
            value = {note.noteTitle}
            onChange = {addNewNote}
          />)}

          {/* Content section of note => Shows up before expanding  */}
          <NewNoteInput
            type='text'
            name='noteContent'
            placeholder='Task Details'
            value = {note.noteContent}
            onChange = {addNewNote}
            onClick={expandArea}
          />

        {/* Add button when expanded*/}
        {expanded === true &&(  <Zoom in={true}>
            <button
              className='submit-note-button'
              type='submit'
              onClick={submitNote}
              >
              +
            </button>
          </Zoom> )}
          
        </form>
      </div>
    </div>
    )
  };


export default InsertNote;
