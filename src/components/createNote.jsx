import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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


  // Add a note to the doing section
  //  setter = setDoingNoteList      state = doingNoteList
  function addToDoing(id, title, body, setter, state){
    const tempObject = {
      id: id,
      title: title,
      body:body
    }
    setter([...state, tempObject])
  }


  // Add note to archive => then delete note 
  function processDoingAdd(id, title, body, setter, state){
    addToDoing(id, title, body, setter, state)
    props.onDelete(id)
  }


  return(
    <div className='note'>
      <h1> {props.title} </h1>
      <p> {props.body}  </p>

      <div className='div-buttons'>
        {props.start != false &&
        <button
          className='button doing-button'
          onClick={() => processDoingAdd(props.id, props.title, props.body, props.setDoingNoteList, props.doingNoteList)}
          > <PlayArrowIcon />
        </button>
        }

        {props.archived != true &&
        <button
          className='button archive-button'
          onClick={() => processArchiveAdd(props.id, props.title, props.body, props.setArchiveNoteList, props.archiveNoteList)}
          > <CheckCircleOutlineIcon/>
        </button>
        }

        <button
          className='button delete-button'
          onClick={() => props.onDelete(props.id)}
          > <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
