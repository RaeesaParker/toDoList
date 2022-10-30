import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function CreateNote(props){

  // Add a note to the archive 
  //  setter = setArchiveNoteList      state = archiveNoteList
   function addToArchive(id, title, body, setter, state){
    const tempObject = {
      id: id,
      title: title,
      body:body
    }
    setter([...state, tempObject])
  }

  // Add note to archive => then delete note 
  function processArchiveAdd(id, title, body, setter, state){
    addToArchive(id, title, body, setter, state)
    props.onDelete(id)
  }

  return(
    <div className='note'>
      <h1> {props.title} </h1>
      <p> {props.body}  </p>

      {props.archived != true &&
      <button
        className='archive-button'
        onClick={() => processArchiveAdd(props.id, props.title, props.body, props.setArchiveNoteList, props.archiveNoteList)}
        > Archive
      </button>
      }
      <button
        className='delete-button'
        onClick={() => props.onDelete(props.id)}
        > <DeleteIcon />
      </button>
    </div>
  );
}

export default CreateNote;
