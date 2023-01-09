import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, deleteUser } from "../../utils/users";


function UserDetailsForm({user_id}){
  
  // Navigation for redirect
  const navigate = useNavigate();

  // Update the updated detail field
  async function onUpdateDetail(event) {
    event.preventDefault();
    let updateKey = event.target.updateKey.value;
    let updateValue = event.target.updateValue.value
    await updateUser(user_id, updateKey, updateValue)
  }

  
  // Function to delete a user 
  async function onDeleteAccountFunc(event){
    event.preventDefault();
    await deleteUser(user_id)
    navigate("../toDoList/"); 
  }


  return(
    <div className="home-subsection" >
      <form  onSubmit={onUpdateDetail}>
        <label htmlFor="updateKey">Update your details:</label>
        <select id="update-field" name="updateKey">
          <option value="username">Username</option>
          <option value="email">Email</option>
        </select> 
        <input type="text" placeholder="New Details" name="updateValue"></input>
        <button className="submit-button" id="submit-button-update" type="submit">Update</button>
      </form>
      <button className="submit-button submit-button-delete"  type="submit" onClick={onDeleteAccountFunc} >Delete Account</button>

    </div>
  )
}

export default UserDetailsForm;