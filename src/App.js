
import './App.css';
import { fetchRequest, deleteUser, tokenFetch } from './utils';
import React from 'react';

function App() {

  const [user, setUser]  = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [deletedUser, setDeletedUser] = React.useState();

  React.useEffect(() => {
    tokenFetch(setUser)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRequest(setUser, name, email, password)
  }

  const handleDelete = (user) => {
    deleteUser(user._id)
    setDeletedUser(user)
  }

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)}/>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <input onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Sign Up</button> 
      </form>
      <div>
        <h2>This is basic information about this user:</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={handleDelete} type="button">Delete user</button> 
        <p>{deletedUser && "User was deleted"}</p>
      </div>
    </div>
  );
}

export default App;
