
import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Edit from "./Edit";




function Table(){
    const [user, setUser] = useState([])
    const [edit, setEdit] = useState([])

    const getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
    }
    const deleteUser = (id) => {
        const deleteUser = user.filter(users => users.id !== id)
        setUser(deleteUser);
    }
    const editUser = (id, name, username, email) =>{
           const oldData = user.find(element => element.id === id)
           setEdit(oldData)
           console.log(oldData);
           
            

            
    }
    useEffect(() => {
        getUser()
        return cleanup()
    }, [])
  
    
    return(
        <div className="table-container">
            <Routes>
                <Route path="/edit" element={<Edit edit={edit}/>}></Route>
            </Routes>
            <table className="table">
                <thead>
                    <tr className="table-content">
                        <td className="table-items">
                            Adı:
                        </td>
                        <td className="table-items">
                            Username:
                        </td>
                        <td className="table-items">
                            E-Mail Adresi:
                        </td>
                        <td className="table-items"> </td>
                    </tr>
                </thead>
                <tbody>
                    
                        { user ? 
                            user.map(old => 
                                <tr className="table-content" key={old.id}>
                                    <td className="table-item">
                                        {old.name}
                                    </td>
                                    <td className="table-item">
                                        {old.username}
                                    </td>
                                    <td className="table-item">
                                        {old.email}
                                    </td>
                                    <td className="table-item">
                                        <button type="submit" className="btn-warning" onClick={()=> editUser(old.id, old.name, old.username,old.email)}><Link   to='/edit'  className="btn-warning">Edit</Link></button>
                                        <button type="submit" className="btn-danger" onClick={() => deleteUser(old.id)}>Delete</button>
                                    </td>
                                </tr>
                            ): <h1>Loading...</h1>}
                        
                    
                </tbody>
                
            </table>
            
        </div>
    )
}

export default Table;