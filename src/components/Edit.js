import { Link } from "react-router-dom";





function Edit({edit}) {
    
        
        return(
            <div>
                <h1><Link to='/'>Ana Sayfa</Link></h1>
                <ul>
                    <li>{edit.name}</li>
                    <li>{edit.username}</li>
                    <li>{edit.email}</li>
                </ul>
                
            </div>
        )
}

export default Edit;