import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import {updateNote} from '../../utils/notes/index'


function CreateNote(props){

  // Add a note to toDo 
  async function addToToDo(){
    await updateNote(props.projectId, props.note.id, 1 )
    props.readNotesFunc()
  }

  // Add a note to the doing section
  async function addToDoing(){
    await updateNote(props.projectId, props.note.id, 2 )
    props.readNotesFunc()
  }

  // Add a note to the archive 
  async function addToArchive(){
    await updateNote(props.projectId, props.note.id, 3 )
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

        {props.toDo !== false &&
          <button className='button doing-button'onClick={() => addToToDo()}> 
            <span className="hovertext" data-hover="To Do"> <PushPinOutlinedIcon /> </span> 
          </button>
        }

        {props.start !== false &&
          <button className='button doing-button' onClick={() => addToDoing()} > 
            <span className="hovertext" data-hover="Start Task"> <PlayCircleOutlinedIcon /> </span> 
          </button>
        }

        {props.archived !== true &&
          <button className='button archive-button' onClick={() => addToArchive()} > 
            <span className="hovertext" data-hover="Done"> <CheckCircleOutlineIcon/>  </span>  
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
