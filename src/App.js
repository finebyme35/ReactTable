

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

import Table from "./components/Table";



function App() {
  const [user, setUser] = useState([])
  const [edit, setEdit] = useState({})

    const getUser = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }
  const deleteUser = (id) => {
    const deleteUser = user.filter(users => users.id !== id)
    setUser(deleteUser);
  }
  
    const editUser = (id) =>{
        const oldData = user.find(element => element.id === id)
        setEdit(oldData)

  }
    
  useEffect(() => {
    getUser()
  } , [])
  
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Table user={user} editUser={editUser} deleteUser={deleteUser}
          />}></Route>
        <Route path='/edit' element={<Edit edit={edit} user={user} setUser={setUser}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
