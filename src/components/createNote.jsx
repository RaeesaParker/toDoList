import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {updateNote} from '../utils/notes/index'


function CreateNote(props){

  // Add a note to the archive 
  async function addToArchive(){
    let updatedNote = await updateNote(props.projectId, props.note.id, 3 )
    props.readNotesFunc()
  }


  // Add a note to the doing section
  async function addToDoing(){
    let updatedNote = await updateNote(props.projectId, props.note.id, 2 )
    props.readNotesFunc()
  }


    // Drag and drop functionality
  function drag(event) {
    event.dataTransfer.setData("text", props.note.id);
  }
    


  return(
    <div className='note'  draggable="true" onDragStart={drag}>
      <h1> {props.note.noteTitle} </h1>
      <p> {props.note.noteContent}  </p>

      <div className='div-buttons'>
        {props.start != false &&
        <button
          className='button doing-button'
          onClick={() => addToDoing()}
          > <span className="hovertext" data-hover="Start Task"> <PlayArrowIcon /> </span> 
        </button>
        }

        {props.archived != true &&
        <button
          className='button archive-button'
          onClick={() => addToArchive()}
          > <span className="hovertext" data-hover="Done"> <CheckCircleOutlineIcon/>  </span>  
        </button>
        }

        <button
          className='button delete-button'
          onClick={() => props.onDelete(props.note.id)}
          > <span className="hovertext" data-hover="Delete"> <DeleteIcon />  </span>   
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
