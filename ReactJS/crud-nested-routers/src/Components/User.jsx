import React from 'react';

const User = ({usr}) => {
    return (
    
         <tr>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.confirmpassword}</td>
            <td>{usr.message}</td>
            <td><button type='button' className='btn btn-warning'>EDIT</button></td>
            <td><button type='button' className='btn btn-danger'>DELETE</button></td>
        </tr> 

    );
}

export default User;
