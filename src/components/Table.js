
import { Link} from 'react-router-dom'



function Table({user, deleteUser, editUser}){
    

    
    
    return(
        <div className="table-container">
           
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
                                        <button type="submit" className="btn-warning" onClick={()=> editUser(old.id)}><Link   to='/edit'  className="btn-warning">Edit</Link></button>
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