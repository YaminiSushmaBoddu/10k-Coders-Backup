import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FunctionalServerForm2 = () => {

    const [user, setUser] = useState(
        {
            id:"",
            username: "",
            password: "",
            email: "",
            gender: "",
            pickgender: "",
            year:"",
            month:"",
            date:"",
            height:"",
            weight:""
        }
    );
    const [users,setUsers]=useState([])
    const [isEdit,setisEdit]=useState(false)
    useEffect(() => {
     getAllUser()
    }, []);
    const handleusr=(e)=>{
         var newUser={...user}
         newUser[e.target.name]=e.target.value 
         setUser(newUser)
    }
     
    const getAllUser=()=>{
         axios.get("http://localhost:3005/form2").then((res)=>{
            console.log(res.data)
            setUsers(res.data)
         })
    }

    const addusr=()=>{
      axios.post("http://localhost:3005/form2/",user).then(()=>{
        getAllUser()
        clearForm()
      })
    }

    const clearForm=()=>{
        setUser( {
            id:"",
            username: "",
            password: "",
            email: "",
            gender: "",
            pickgender: "",
            year:"",
            month:"",
            date:"",
            height:"",
            weight:""
        })
    }

    const deleteUser=(usr)=>{
     axios.delete("http://localhost:3005/form2/"+ usr.id).then(()=>{
        getAllUser()
     })
    }

    const editUser=(usr)=>{
       setisEdit(true)
       setUser(usr)
    }

  const updateUser=()=>{
       axios.put("http://localhost:3005/form2/"+ user.id,user).then(()=>{
        getAllUser()
        clearForm()
        setisEdit(false)
       })
  }

    return (
        <div>
                <form action="">
                <label htmlFor="">ID:</label>
                    <input type="text" name="id" value={user.username} disabled onChange={(e) => handleusr(e)} />
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="username" value={user.username} onChange={(e) => handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={user.password} onChange={(e) => handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Email Address:</label>
                    <input type="email" name="email" value={user.email} onChange={(e) => handleusr(e)} />
                    <br /><br />
                    <select name="gender" value={user.gender} onChange={(e) => handleusr(e)}>
                        <option >Select</option>
                        <option >I am a Women </option>
                        <option >I am a Man</option>
                    </select>
                    <br /><br />
                    <select name="pickgender" value={user.pickgender} onChange={(e) => handleusr(e)}>
                        <option >Select</option>
                        <option >I want to find Man</option>
                        <option >I want to find Women</option>
                    </select>
                    <br /><br />
                    <label htmlFor="">Date of Birth:</label>
                    <input type="number" name="year" placeholder="year"  max={2022} min={1990}  value={user.year} onChange={(e) => handleusr(e)}/>
                    <input type="number" name="month" placeholder="month" max={12} min={1}  value={user.month} onChange={(e) => handleusr(e)}/>
                    <input type="number" name="date" placeholder="date" max={31} min={1} value={user.date} onChange={(e) => handleusr(e)}/>
                    <br /><br />
                    <label htmlFor="">Height/Weight:</label>
                    <select name="height" value={user.height} onChange={(e) => handleusr(e)}>
                        <option >Height</option>
                        <option >5.3</option>
                        <option >5.4</option>
                        <option >5.6</option>
                        <option >5.7</option>
                        <option >5.8</option>
                    </select>
                    <select name="weight" value={user.weight} onChange={(e) => handleusr(e)}>
                        <option >Weight</option>
                        <option >55</option>
                        <option >56</option>
                        <option >57</option>
                        <option >58</option>
                        <option >59</option>
                    </select>
                    <br /><br />
                 {isEdit  ?<button type="button" className="btn btn-primary" onClick={updateUser}>Update User</button>:
              <button type="button" className="btn btn-primary" onClick={addusr}>Add User</button>}
                </form>

                <hr />
                <table className='table'>
                      <thead>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Opposite Gender</th>
                            <th>Date of Birth</th>
                            <th>Height/weight</th>
                            <th>Edit</th>
                            <th>Delete</th>
                      </thead>
                      <tbody>
                         {users.map((usr,i)=>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.username}</td>
                                <td>{usr.password}</td>
                                <td>{usr.email}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.pickgender}</td>
                                <td>{usr.year}-{usr.month}-{usr.date}</td>
                                <td>{usr.height}/{usr.weight}</td>
                                <td><button type='button' className='btn btn-warning' onClick={()=>editUser(usr,i)}>EDIT</button></td>
                                <td><button type='button' className='btn btn-danger' onClick={()=>deleteUser(usr,i)}>DELETE</button></td>
                            </tr>
                         )}
                      </tbody>
                </table>   
        </div>
    );
}

export default FunctionalServerForm2;
