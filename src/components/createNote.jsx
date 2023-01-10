import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {updateNote} from '../utils/notes/index'


function CreateNote(props){

  // Add a note to the archive 
  //  setter = setArchiveNoteList      state = archiveNoteList
   function addToArchive(id, title, body, setter, state){
    const tempObject = {
      noteId: id,
      noteTitle: title,
      noteContent:body
    }
    setter([...state, tempObject])
  }

  // Add note to archive => then delete note 
  function processArchiveAdd(id, title, body, setter, state){
    addToArchive(id, title, body, setter, state)
    props.onDelete(id)
  }


  // Add a note to the doing section
  async function addToDoing(){
    let updatedNote = await updateNote(props.projectId, props.id, 2 )
    props.readNotesFunc()
  }


  // Add note to archive => then delete note 
  function processDoingAdd(){
    addToDoing()
    // props.onDelete(id)
  }
  

     // Drag and drop functionality

    function drag(event) {
      console.log("Here at Drag")
      console.log(props.id, props.title, props.body)
      event.dataTransfer.setData("text", props.id);
    }
    


  return(
    <div className='note'  draggable="true" onDragStart={drag}>
      <h1> {props.title} </h1>
      <p> {props.body}  </p>

      <div className='div-buttons'>
        {props.start != false &&
        <button
          className='button doing-button'
          onClick={() => processDoingAdd()}
          > <span className="hovertext" data-hover="Start Task"> <PlayArrowIcon /> </span> 
        </button>
        }

        {props.archived != true &&
        <button
          className='button archive-button'
          onClick={() => processArchiveAdd(props.id, props.title, props.body, props.setArchiveNoteList, props.archiveNoteList)}
          > <span className="hovertext" data-hover="Done"> <CheckCircleOutlineIcon/>  </span>  
        </button>
        }

        <button
          className='button delete-button'
          onClick={() => props.onDelete(props.id)}
          > <span className="hovertext" data-hover="Delete"> <DeleteIcon />  </span>   
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
