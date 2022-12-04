import { writeCookie } from "../../common/index"

// Register a user => Used to create user
export const registerUser = async (username, email, password, setUserDetails) => {
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
    setUserDetails({userName:data.userName, user_id:data.id})
    writeCookie("jwt_token", data.token, 7)
  } catch (error) {
    console.log(error);
  }
};


// Login a user
export const loginUser = async (username, password, setUserDetails) => {
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
          setUserDetails({userName:data.userName, user_id:data.id})
          writeCookie("jwt_token", data.token, 7)
          return true
        }
    } catch (error) {
        console.log(error)
    }
} 


export const findUser = async (cookieValue, setUserDetails) => {
    try {
        const response = await fetch(`http://localhost:5001/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookieValue}`
            },
        })
        const data = await response.json()
        console.log("The data being fetched back is ", data)
        setUserDetails({userName:data.userName, user_id:data.id})
        return true;
    } catch (error) {
        console.log(error)
    }
} 



// Update a user's details
export const updateUser = async(user_id, keyField, value) => {
    try {
      console.log("The parameters being passed are, ", user_id, keyField, value)
        const response = await fetch(`http://localhost:5001/users/${user_id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                [keyField]: value
            })
        })
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
} 




// Delete a user
export const deleteUser = async(user_id) => {
    try {
        const response = await fetch(`http://localhost:5001/users/${user_id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
        })
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}
