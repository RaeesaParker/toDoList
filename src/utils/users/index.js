import { writeCookie, getCookie } from "../../common/index"
// const API_URL = process.env.REACT_APP_BASE_URL;
const API_URL = "http://localhost:5001"


// Register a user => Used to create user
export const registerUser = async (username, email, password, setUserDetails) => {
  try {
    const response = await fetch(`${API_URL}/addUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.userName){
        setUserDetails({userName:data.userName, user_id:data.id})
        writeCookie("jwt_token", data.token, 7)
        return data
    }else{
        return data.error;
    }
  } catch (error) {
    console.log(error);
  }
};


// Login a user
export const loginUser = async (username, password, setUserDetails) => {
    try {
        const response = await fetch(`${API_URL}/auth`, {
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
          return data
        }else{
            return data.error;
        }
    } catch (error) {
        console.log(error)
    }
} 


export const findUser = async (cookieValue, setUserDetails) => {
    try {
        const response = await fetch(`${API_URL}/auth/checkToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            token: cookieValue,
        }),
        })
        const data = await response.json()
        if (data.userName){
          setUserDetails({userName:data.userName, user_id:data.id})
          return data
        }else{
            return data.error;
        }
    } catch (error) {
        console.log(error);
    }
} 



// Update a user's details
export const updateUser = async(user_id, keyField, value) => {
    try {
        const response = await fetch(`${API_URL}/users/${user_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json", 
                Authorization:"Bearer " + getCookie("jwt_token")
            },
            body: JSON.stringify({
                [keyField]: value
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
} 




// Delete a user
export const deleteUser = async(user_id) => {
    try {
        const response = await fetch(`${API_URL}/users/${user_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + getCookie("jwt_token")
        },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
