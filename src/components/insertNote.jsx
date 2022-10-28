import React from 'react';
import NewNoteInput from './insertNoteInputs.jsx';
import CreateNote from './createNote.jsx';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


// This deals with inputing a new note
// Need to take the noteList from here and export it to the creating a note page


// ----------------------------------------------------------------- //
// Create a function to inser a new note
// ----------------------------------------------------------------- //

function InsertNote(props){


  const [note, setNote] = React.useState({
    noteTitle: '',
    noteContent: ''
  });

  const [expanded, setExpanded] = React.useState(false);


// Create function to add a new note to the array

function addNewNote(event){
  const {name, value} = event.target;

  setNote(prevNote => {
    return {
      ...prevNote,
    [name]: value
    };
  });
}

// Submit the note to the functionality element
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
    <div className={expanded ? 'insert-note-expanded' : 'insert-note'}>

      <form>
        {expanded === true && (<NewNoteInput
          type='text'
          name='noteTitle'
          placeholder='Title'
          value = {note.noteTitle}
          onChange = {addNewNote}

        />)}

        <NewNoteInput
          type='text'
          name='noteContent'
          placeholder='Take a note...'
          value = {note.noteContent}
          onChange = {addNewNote}
          onClick={expandArea}
        />

      {expanded === true &&(  <Zoom in={true}>
          <Fab
            className='submit-note-button'
            type='submit'
            onClick={submitNote}
            >
            <AddIcon/>
          </Fab>
        </Zoom> )}
        
      </form>
    </div>
    )
  };


export default InsertNote;
