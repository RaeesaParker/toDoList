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
        if (data.userName){
          setUser(data.userName)
          return true
        }
        // writeCookie("jwt_token", data.token, 7)

    } catch (error) {
        console.log(error)
    }
} 


// Update a user's details

// Delete a user
export const deleteUser = async(username) => {
    try {
        const response = await fetch(`http://localhost:5001/deleteUser`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "username": username,
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
