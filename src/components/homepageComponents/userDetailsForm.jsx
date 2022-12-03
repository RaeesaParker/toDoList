import React from "react";

function UserDetailsForm(){

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
        <button className="submit-button" id="submit-button-delete" type="submit" >Delete Account</button>
      </form>
    </div>
  )
}

export default UserDetailsForm;