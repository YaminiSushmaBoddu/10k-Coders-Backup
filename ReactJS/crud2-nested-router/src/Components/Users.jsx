import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';
const Users = () => {
 const [users,setUsers]=useState([]);

 useEffect(() => {
    getUsers() 
  }, []);

   const getUsers=async()=>{
      const data=await (await fetch("http://localhost:3000/form2")).json()
      console.log(data);
      setUsers(data)
    }   
    return (
       <div>
        <table className='table'>
           <thead>
              <th>ID</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Pick Gender</th>
              <th>Date of Birth</th>
              <th>Height/Weight</th>
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
