import axios from 'axios';
import React, { Component } from 'react';

class ServerForm4 extends Component {
    constructor(){
        super()
        this.state={
              user:{
                id:"",
                street:"",
                city:"",
                state:"",
                zipcode:"",
                country:""
            },
            allUsers:[],
        editIndex:null,
        }
    }
    handleUser=(e)=>{
       var handelUsr={...this.state.user}
       handelUsr[e.target.name]=e.target.value 
       this.setState({user:handelUsr})
    }

    addUser=()=>{
         axios({
            method:'POST',
            url:'http://localhost:3001/form4',
            data:this.state.user,
            headers:{
                'Content-Type':'application/json'
            }
         })
         var newUser=[...this.state.allUsers]
         newUser.push(this.state.user)
         this.setState({allUsers:newUser})
         this.clearForm()
    }

    clearForm=()=>{
      var  newForm={
             id:"",
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
        }
        this.setState({user:newForm})
    }

    editUser=(usr,i)=>{
        this.setState({user:usr,editIndex:i})
    }

    deleteUser=(user,id)=>{
        var number=id+1 
        axios.delete("http://localhost:3001/form4/"+number).then((res)=>
        this.componentDidMount()
        )
    }

    updateUser=()=>{
       var number= this.state.editIndex+1 
       axios({
        method:'PUT',
        url:'http://localhost:3001/form4/'+number, 
        data:this.state.user
       })
       var updateusr=[...this.state.allUsers]
       updateusr[this.state.editIndex]=this.state.user
       this.setState({allUsers:updateusr,editIndex:null})
       this.clearForm()
    }

    render() {
        return (
            <div>
                <form >
                     <label >ID</label>
                    <input type="text"  name="id" value={this.state.user.street} disabled onChange={(e)=>this.handleUser(e)}/><br /><br />
                    <label >Street</label>
                    <input type="text"  name="street" value={this.state.user.street}  onChange={(e)=>this.handleUser(e)}/><br /><br />
                    <label >City,State</label>
                    <input type="text"  name="city" value={this.state.user.city} onChange={(e)=>this.handleUser(e)} />&nbsp;
                    <input type="text"  name="state" style={{width:"40px"}} value={this.state.user.state}  onChange={(e)=>this.handleUser(e)}/>
                    <br /><br />
                    <label >Zip Code</label>
                    <input type="text"  name="zipcode" value={this.state.user.zipcode} onChange={(e)=>this.handleUser(e)} />
                    <br /><br />
                    <label >Country</label>
                    <input type="text"  name="country" value={this.state.user.country}  onChange={(e)=>this.handleUser(e)}/>
                    <br /><br />
                    {this.state.editIndex!==null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button>:
                    <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>}
                </form>
                <hr />
                 <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr,i)=>
                        <tr key={i}>
                            <td>{usr.id}</td>
                            <td>{usr.street}</td>
                            <td>{usr.city}</td>
                            <td>{usr.state}</td>
                            <td>{usr.zipcode}</td>
                            <td>{usr.country}</td>
                            <td><button type='button' className='btn btn-warning' onClick={()=>this.editUser(usr,i)}>EDIT</button></td>
                            <td><button type='button' className='btn btn-danger' onClick={()=>this.deleteUser(usr,i)}>DELETE</button></td>
                        </tr>
                        )}
                    </tbody>
                </table> 
            </div>
        );
    }
 async componentDidMount(){
    var serverData=await axios.get("http://localhost:3001/form4")
    console.log(serverData);
    this.setState({allUsers:serverData.data})
 }
  
}

export default ServerForm4;
