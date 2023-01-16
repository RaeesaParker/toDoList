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
  const updateValues = async (event) => {

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
    const updatedUserDetails = await updateUser(user_id, reducedData)

    // Get the updated data and rest the current details
    if (updatedUserDetails) {
      const newObj = {
        user_id: updatedUserDetails.id,
        userName: updatedUserDetails.user_name,
        email: updatedUserDetails.email,
      };
      setUserDetails(newObj);
    }
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
    navigate("/"); 
  }


  return(
    <div className="home-subsection" >
      <form  onSubmit={onUpdateDetail}>
        
        <div>
          <label> <p>Username</p></label>
          <input 
            placeholder={userDetails.userName} 
            onChange={(e) =>setUsername(e.target.value)}
          ></input>
          <hr />
        </div>

        <div>
          <label> <p>email</p></label>
          <input 
            placeholder={userDetails.email} 
            onChange={(e) =>setEmail(e.target.value)}
          ></input>
          <hr />
        </div>

        <div>
          <label> <p>Password</p></label>
          <input 
            placeholder="**************"
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