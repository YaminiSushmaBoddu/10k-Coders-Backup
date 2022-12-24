import React, { useEffect } from 'react';
import  axios from 'axios'
import { useState } from 'react';
import User from './User';
const Users = () => {
 
const [users,setUsers]=useState([
    // {
    //     id:"",
    //     name:"",
    //     username:"",
    
    //     email:"",
    //     password:"",
    //     confirmpassword:"",
    //     message:""
    //   },
])

useEffect(() => {
   getAllUsers()
}, []);
    const getAllUsers =()=>{
       const data=  axios.get("http://localhost:3007/form1/").then((res)=>{
       console.log(res.data)
       setUsers(res.data)
    })
    }

    return (
        <div>
             <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                   {users.map((val,i)=><User usr={val} key={i}/>)}
                </tbody>
            </table>  
        </div>
    );
}

export default Users;
