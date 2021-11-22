import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";





function Edit({edit}) {
    const[name, setName] = useState(edit.name)
    const[userName, setUserName] = useState(edit.username)
    const[email, setEmail] = useState(edit.email)
    const [editUsers, setEditUsers] = useState([])
    const handleChange = (e,name, userName, email) => {
        const editUser = {
            name: name,
            userName: userName,
            email: email
        }
        setEditUsers(editUser)
        console.log(editUsers);
       
    }
        
        return(
            <div className="form-content">
                <h1 ><Link to='/' className="form-title">Ana Sayfa</Link></h1>

                <form onSubmit={handleChange} className="form-group">
                    <div className="form-item">
                        <label htmlFor="users-name" className="form-label">Edit Name: </label>
                        <Input type="text"
                        id="users-name"
                        name="users-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                        </Input>
                    
                   
                        <label htmlFor="users-username" className="form-label">Edit Username: </label>
                        <Input type="text"
                        id="users-username"
                        name="users-username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}>
                        </Input>
                    
                    
                        <label htmlFor="users-email" className="form-label">Edit Email: </label>
                        <Input type="text"
                        id="users-email"
                        name="users-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                        </Input>
                        <div className="form-btn-submit">
                            <button type="submit" className="form-btn-group"><Link to='/' className="form-btn">Submit</Link></button>
                        </div>
                        
                    </div>
                </form>
               
                
            </div>
        )
}

export default Edit;