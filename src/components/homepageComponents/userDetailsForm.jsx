import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, deleteUser } from "../../utils/users";


function UserDetailsForm({user_id, setUserDetails, userDetails}){
  
  // Navigation for redirect
  const navigate = useNavigate();


  // States to hold the updated details
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);




  //  Function to update the user parameters
  const onUpdateDetail = async (event) => {

    event.preventDefault();

    // Make an object containing the updated values
    const updatedObj = {
      userName: username,
      email: email,
      password: password,
    };

    // Reduce the object down to just the updated fields
    const reducedData = await reduceObject(updatedObj);

    // Send the reduced data to the update request
    const updatedUserDetails = await updateUser(user_id, reducedData, setUserDetails)
    // Refresh the form after submitting
    window.location.reload()
  };

  // Reduce the object to only the updated fields
  const reduceObject = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let modifiedObj = obj;

    // loop through the values and remove the key if the value is falsy
    for (let i = keys.length; i >= 0; i--) {
      if (!values[i]) {
        const { [keys[i]]: unused, ...tempObj } = modifiedObj;
        modifiedObj = tempObj;
      }
    }
    return modifiedObj;
  };




  // Function to delete a user 
  async function onDeleteAccountFunc(event){
    event.preventDefault();
    await deleteUser(user_id)
    navigate("/"); 
  }


  return(
    <div>
      <form  onSubmit={onUpdateDetail}>
        
        <div className="user-form-input">
          <label> Username</label>
          <input 
            placeholder={userDetails.userName} 
            onChange={(e) =>setUsername(e.target.value)}
          ></input>
          <hr />
        </div>

        <div className="user-form-input">
          <label> email</label>
          <input 
            placeholder={userDetails.email} 
            onChange={(e) =>setEmail(e.target.value)}
          ></input>
          <hr />
        </div>

        <div className="user-form-input">
          <label>Password</label>
          <input 
            placeholder="*********"
            onChange={(e) =>setPassword(e.target.value)}
          ></input>
          <hr />
        </div>

        <button id="submit-button-update" type="submit">Update Information</button>
      </form>

      <button id="submit-button-delete"  type="submit" onClick={onDeleteAccountFunc} >Delete Account</button>

    </div>
  )
}

export default UserDetailsForm;