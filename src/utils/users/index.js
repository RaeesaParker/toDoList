//  Functions that will connect to the backend with relation to the user functionality 

// Register a user 
export async function registerUser (username, email, password, setUser) {
  try {
      const response = await fetch(`http://localhost:5001/addUser`,
      {
          method:"POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
              "username": username,
              "email": email,
              "password": password
          })
      }
      );
      const data = await response.json;
      setUser(data.username);
      console.log("The registered User is ", data.username)
  } catch (error) {
      console.log(error);
  }
}


// Read a users details

// Login a user 

// Update a user's details 

// Delete a user 