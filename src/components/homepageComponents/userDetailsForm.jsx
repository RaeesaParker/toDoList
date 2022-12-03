import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../utils/users";


function UserDetailsForm({user_id}){
  
  // Navigation for redirect
  const navigate = useNavigate();

  // Function to update user details

  // Function to delete a user 
  async function onDeleteAccountFunc(event){
    event.preventDefault();
    await deleteUser(user_id)
    navigate("../toDoList/"); 
  }


  return(
    <div className="home-subsection" >
      <form>
        <label htmlFor="updateField">Update your details:</label>
        <select id="update-field" name="updateField">
          <option value="updateUsername">Username</option>
          <option value="updateEmail">Email</option>
        </select> 
        <input type="text" placeholder="New Details"></input>
        <button className="submit-button" id="submit-button-update" type="submit">Update</button>
        <button className="submit-button" id="submit-button-delete" type="submit" onClick={onDeleteAccountFunc} >Delete Account</button>
      </form>
    </div>
  )
}

export default UserDetailsForm;