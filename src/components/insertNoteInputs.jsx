import React from 'react';


function NewNoteInput(props){
  return (
    <div>
      <input autocomplete="off" type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} name={props.name} onClick={props.onClick}  />
    </div>
  )
}




export default NewNoteInput;
