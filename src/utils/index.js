export const fetchRequest = async (setUser, name, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}/users`, {
    // const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
      })
    })
    const data = await response.json();
    setUser(data.user);
    localStorage.setItem("myToken", data.token);
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (user) => {
  try {
    const deletedUser = await fetch(`${process.env.REACT_APP_REST_API}/users/${user}`, {
      // const response = await fetch("http://localhost:3000/users", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
      })
      if (deletedUser) {
        console.log("user was deleted")
      }
  } catch (error) {
    console.log(error)
  }
}

export const tokenFetch = async (setUser) => {
  try {
    const token = localStorage.getItem("myToken");
    const response = await fetch(`${process.env.REACT_APP_REST_API}/token`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await response.json();
    setUser(data.user)
  } catch (error) {
    console.log(error)
  }
}