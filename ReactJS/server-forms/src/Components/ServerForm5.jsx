import axios from 'axios';
import React, { Component } from 'react';

class ServerForm5 extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                id:"",
                fname: "",
                lname: "",
                dob: "",
                email: "",
                mobile: "",
            },
            allUsers: [],
            editIndex:null,
        }
    }
    handelForm=(e)=>{
        var handleUser={...this.state.user}
        handleUser[e.target.name]=e.target.value 
        this.setState({user:handleUser})

    }
    addUser=()=>{
          axios({
            method:"POST",
            url:"http://localhost:3001/form5/",
            data:this.state.user,
            headers:{
                'Content-Type':'application/json'
            }
          })
          var newUser=[...this.state.allUsers]
          newUser.push(this.state.user)
          this.setState({user:newUser})
    }
    editUser=(usr,i)=>{
         this.setState({user:usr,editIndex:i})
    }
    
    deleteUser=(usr,i)=>{
        var number=i+1
        axios.delete("http://localhost:3001/form5/"+number).then((res)=>
        this.componentDidMount()
        )
    }

    updateUser=()=>{
      var number=this.state.editIndex+1 
      axios({
        method:'PUT',
        url:'http://localhost:3001/form5/'+number,
        data:this.state.user
      })
      var update=[...this.state.allUsers]
      update[this.state.editIndex]=[this.state.user]
      this.setState({allUsers:update,editIndex:null})

    }
    render() {
        return (
            <div>
                  <form action="">
                  <label>ID:</label>
                     <input type="text" name="id"  value={this.state.user.id }  onChange={(e)=>this.handelForm(e)}/>
                     <label>First Name:</label>
                     <input type="text" name="fname"  value={this.state.user.fname }  onChange={(e)=>this.handelForm(e)}/>
                     <br/><br/>
                     <label>Last Name:</label>
                     <input type="text" name="lname" value={this.state.user.lname} onChange={(e)=>this.handelForm(e)}  />
                     <br/><br/>
                     <label>DOB:</label>
                     <input type="text" name="dob" value={this.state.user.dob }  onChange={(e)=>this.handelForm(e)} />
                     <br/><br/>
                     <label>Email:</label>
                     <input type="email" name="email"  value={this.state.user.email}  onChange={(e)=>this.handelForm(e)}/>
                     <br/><br/>
                     <label>Mobile Number:</label>
                     <input type="text" name="mobile" value={this.state.user.mobile}  onChange={(e)=>this.handelForm(e)} />
                     <br/><br/>
                     {this.state.editIndex!== null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button>: 
                     <button className='btn btn-primary' type="button" onClick={this.addUser}>Add user</button>}
                </form>
                <hr />
                <table className='table'>
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
                    <tbody >
                        {this.state.allUsers.map((usr, i) =>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.dob}</td>
                                <td>{usr.email}</td>
                                <td>{usr.mobile}</td>
                                <td><button type='button' className='btn btn-warning' onClick={()=>this.editUser(usr,i)}>EDIT</button></td>
                                <td><button type='button' className='btn btn-danger' onClick={()=>this.deleteUser(usr,i)}>DELETE</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
    async componentDidMount() {
        var serverData =await axios.get("http://localhost:3001/form5")
        this.setState({allUsers: serverData.data })
    }
}

export default ServerForm5;
