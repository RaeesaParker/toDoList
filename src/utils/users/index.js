//  Functions that will connect to the backend with relation to the user functionality

// Register a user => Used to create user
export const registerUser = async (username, email, password, setUser) => {
  try {
    const response = await fetch(`http://localhost:5001/addUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setUser(data.userName);
  } catch (error) {
    console.log(error);
  }
};

// Read a users details => Used for sign in 

// Login a user
export const loginUser = async (username, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5001/auth", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json();
        setUser(data.userName)
        
        // writeCookie("jwt_token", data.token, 7)

    } catch (error) {
        console.log(error)
    }
} 


// Update a user's details

// Delete a user
