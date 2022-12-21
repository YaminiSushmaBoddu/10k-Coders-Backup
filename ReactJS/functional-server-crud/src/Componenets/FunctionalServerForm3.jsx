import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const FunctionalServerForm3 = () => {

    const [person,setPerson]=useState({
        id:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        cpi: "",
        sem: "",
        exp: "",
        web: "",
    })

    const [persons,setPersons]=useState([])
    const [isIndex,setisIndex]=useState(false)
    useEffect(() => {
       getAllPersons()
    }, []);
    const handleForm=(e)=>{
        var newPerson={...person}
        newPerson[e.target.name]=e.target.value 
        setPerson(newPerson)
    }

    const getAllPersons=()=>{
        axios.get("http://localhost:3005/form3").then((res)=>{
            console.log(res.data)
            setPersons(res.data)
         
        })
    }
    const addUser=()=>{
        axios.post("http://localhost:3005/form3/",person).then(()=>{
            getAllPersons()
          clearForm()
        })
    }

    const clearForm=()=>{
        setPerson({
            id:"",
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            cpi: "",
            sem: "",
            exp: "",
            web: "",
        })
    }

    const deleteUser=(user)=>{
           axios.delete("http://localhost:3005/form3/"+user.id).then(()=>{
            getAllPersons()
           })
    }

    const editUser=(user)=>{
       setisIndex(true)
       setPerson(user)
    }

    const updateUser=()=>{
         axios.put("http://localhost:3005/form3/"+person.id,person).then(()=>{
            getAllPersons()
            clearForm()
            setisIndex(false)

         })

    }
    return (
        <div>
              <form action="">
        <label>ID</label>
          <input type="text" name="id" value={person.id} disabled onChange={(e) => handleForm(e)} />
          <label>University</label>
          <input type="text" name="university" value={person.university} onChange={(e) => handleForm(e)} />
          <br /><br />
          <label>Institute</label>
          <input type="text" name="institute" value={person.institute} onChange={(e) => handleForm(e)} />
          <br /><br />
          <label>Branch</label>
          <select name="branch" value={person.branch} onChange={(e) => handleForm(e)} >
            <option >---Select---</option>
            <option >ECE</option>
            <option >CSE</option>
            <option >MECH</option>
            <option >EEE</option>
            <option >IT</option>
          </select>
          <br /><br />
          <label >Degree</label>
          <select name="degree" value={person.degree} onChange={(e) => handleForm(e)}>
            <option >---Select---</option>
            <option >BE</option>
            <option >B.Tech</option>
            <option >Diploma</option>
            <option >Degree</option>
          </select>
          <br /><br />
          <div onChange={(e) => handleForm(e)}>
            <input type="radio" name="status" value="Pursuing" checked={person.status === "Pursuing"} />&nbsp;&nbsp;
            <label >Pursuing</label>&nbsp;&nbsp;
            <input type="radio" name="status" value="Completed" checked={person.status === "Completed"} />&nbsp;&nbsp;
            <label >Completed</label>
          </div>
          
          <br /><br />
          <label>Average CPI</label>
          <input type="number" name="cpi" value={person.cpi} onChange={(e) => handleForm(e)} />
          upto
          <input type="number" name="sem" value={person.sem} onChange={(e) => handleForm(e)} />Th Semister
          <br /><br />
          <label>Experience</label>
          <input type="number" name="exp" value={person.exp} onChange={(e) => handleForm(e)} />
          <br /><br />
          <label>Your Website</label>
          <input type="text" name="web" value={person.web} onChange={(e) => handleForm(e)} />
          <br /><br />
          {isIndex ? <button type="button" className="btn btn-primary" onClick={updateUser}>Update User</button> :
            <button type="button" className="btn btn-primary" onClick={addUser}>Add User</button>}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
                <th>ID</th>
              <th>University</th>
              <th>Institute</th>
              <th>Branch</th>
              <th>Degree</th>
              <th>Status</th>
              <th>Subjects</th>
              <th>CGI</th>
              <th>Semister</th>
              <th>Experience</th>
              <th>Website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.university}</td>
                <td>{user.institute}</td>
                <td>{user.branch}</td>
                <td>{user.degree}</td>
                <td>{user.status}</td>
                <td>{user.subjects}</td>
                <td>{user.cpi}</td>
                <td>{user.sem}</td>
                <td>{user.exp}</td>
                <td>{user.web}</td>
                <td><button type="button" className="btn btn-warning" onClick={() => {editUser(user, i)}}>Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => {deleteUser(user, i)}}>Delete </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
}

export default FunctionalServerForm3;
