import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function CreateNote(props){
  return(
    <div className='note'>
      <h1> {props.title} </h1>
      <p> {props.body}  </p>

      <button
        className='archive-button'
        > Archive
      </button>
      <button
        className='delete-button'
        onClick={() => props.onDelete(props.id)}
        > <DeleteIcon />
      </button>
    </div>
  );
}

export default CreateNote;
