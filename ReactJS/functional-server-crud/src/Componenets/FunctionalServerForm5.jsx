import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FunctionalServerForm5 = () => {
   
    const [user,setUser]=useState({
        id:"",
        fname:"",
        lname:"",
        dob:"",
        email:"",
        mobile:"",
    })

    const [allUsers,setallUsers]=useState([])

    const[isEdit,setisEdit]=useState(false)

    useEffect(()=>{
        getAllUsers()
      },[])

    const handleUser=(e)=>{
       var newUser={...user}
       newUser[e.target.name]=e.target.value 
       setUser(newUser)
    }

   const getAllUsers=()=>{
    axios.get("http://localhost:3005/form5").then((res)=>{
        console.log(res.data)
        setallUsers(res.data)
    })
   }

    const addUser=()=>{
       axios.post("http://localhost:3005/form5/",user).then(()=>{
        getAllUsers()
        clearForm()
       })
    }

    const clearForm=()=>{
        setUser({
        id:"",
        fname:"",
        lname:"",
        dob:"",
        email:"",
        mobile:"", 
        })
    }

    const deleteUser=(val)=>{
         axios.delete("http://localhost:3005/form5/"+val.id).then(()=>{
            getAllUsers()
         })
    }

    const editUser=(val)=>{
         setisEdit(true)
         setUser(val)
    }

    const updateUser=()=>{
      axios.put("http://localhost:3005/form5/"+user.id,user).then(()=>{
        getAllUsers()
        setisEdit(false)
        clearForm()
      })
    }
    return (
        <div>
            <form action="">
                <label >ID:</label>
                <input type="text" name="id" value={user.id}  onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >First Name:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Last Name:</label>
                <input type="text" name="lname" value={user.lname}  onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Date of Birth:</label>
                <input type="date" name="dob" value={user.dob} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Email:</label>
                <input type="email" name="email"  value={user.email} onChange={(e)=>handleUser(e)} />
                <br /><br />
                <label >Mobile:</label>
                <input type="text" name="mobile" value={user.mobile} onChange={(e)=>handleUser(e)} />
                <br /><br />
                {isEdit ? <button type='button' className='btn btn-primary' onClick={updateUser}>Update User</button>:
                <button type='button' className='btn btn-primary' onClick={addUser}>Add User</button> }
               
            </form>
            <hr />
            <table className="table">
                <thead>
                       <th>ID</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Date of Birth</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Edit</th>
                       <th>Delete</th>
                </thead>
                <tbody>
                    {allUsers.map((val,i)=>
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.dob}</td>
                            <td>{val.email}</td>
                            <td>{val.mobile}</td>
                            <td><button type='button' className='btn btn-warning' onClick={()=>editUser(val,i)}>EDIT</button></td>
                            <td><button type='button' className='btn btn-danger' onClick={()=>deleteUser(val,i)}>DELETE</button></td> 
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
}

export default FunctionalServerForm5;
