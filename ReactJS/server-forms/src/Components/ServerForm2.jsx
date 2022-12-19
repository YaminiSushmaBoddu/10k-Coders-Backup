import axios from 'axios';
import React, { Component } from 'react';

class ServerForm2 extends Component {
    constructor(){
        super()
        this.state={
          user:{
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
        },
        allUsers:[],
        editIndex:null,
    }
}
handleusr=(e)=>{
    var handleData={...this.state.user}
    handleData[e.target.name]=e.target.value 
    this.setState({user:handleData})
}
addusr=()=>{
     axios({
        method:'POST',
        url:'http://localhost:3001/form2/',
        data:this.state.user,
        headers:{
            'Content-Type':'application/json'
        }
     }) 
     var  newUser=[...this.state.allUsers]
     newUser.push(this.state.user)
     this.setState({user:newUser})
     this.clearForm()
}

clearForm=()=>{
    var newForm={
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
    this.setState({user:newForm})
}
editUser=(usr,i)=>{
    this.setState({user:usr,editIndex:i})
}
deleteUser=(user,id)=>{
      var number=id+1 
     axios.delete("http://localhost:3001/form2/"+ number).then((res)=>
     this.componentDidMount()
     )
}

updateUser=()=>{
    var number=this.state.editIndex+1 
    axios({ 
        method:'PUT',
        url:'http://localhost:3001/form2/'+number,
        data:this.state.user,
    })
  var updateusr=[...this.state.allUsers]
  updateusr[this.state.editIndex]=this.state.user
  this.setState({allUsers:updateusr,editIndex:null})
  this.clearForm()
}

    render() {
        return (
            <div>
                <form action="">
                <label htmlFor="">ID:</label>
                    <input type="text" name="id" value={this.state.user.username} disabled onChange={(e) => this.handleusr(e)} />
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="username" value={this.state.user.username} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={this.state.user.password} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <label htmlFor="">Email Address:</label>
                    <input type="email" name="email" value={this.state.user.email} onChange={(e) => this.handleusr(e)} />
                    <br /><br />
                    <select name="gender" value={this.state.user.gender} onChange={(e) => this.handleusr(e)}>
                        <option >Select</option>
                        <option >I am a Women </option>
                        <option >I am a Man</option>
                    </select>
                    <br /><br />
                    <select name="pickgender" value={this.state.user.pickgender} onChange={(e) => this.handleusr(e)}>
                        <option >Select</option>
                        <option >I want to find Man</option>
                        <option >I want to find Women</option>
                    </select>
                    <br /><br />
                    <label htmlFor="">Date of Birth:</label>
                    <input type="number" name="year" placeholder="year"  max={2022} min={1990}  value={this.state.user.year} onChange={(e) => this.handleusr(e)}/>
                    <input type="number" name="month" placeholder="month" max={12} min={1}  value={this.state.user.month} onChange={(e) => this.handleusr(e)}/>
                    <input type="number" name="date" placeholder="date" max={31} min={1} value={this.state.user.date} onChange={(e) => this.handleusr(e)}/>
                    <br /><br />
                    <label htmlFor="">Height/Weight:</label>
                    <select name="height" value={this.state.user.height} onChange={(e) => this.handleusr(e)}>
                        <option >Height</option>
                        <option >5.3</option>
                        <option >5.4</option>
                        <option >5.6</option>
                        <option >5.7</option>
                        <option >5.8</option>
                    </select>
                    <select name="weight" value={this.state.user.weight} onChange={(e) => this.handleusr(e)}>
                        <option >Weight</option>
                        <option >55</option>
                        <option >56</option>
                        <option >57</option>
                        <option >58</option>
                        <option >59</option>
                    </select>
                    <br /><br />
                 {this.state.editIndex !== null ? <button type="button" className="btn btn-primary" onClick={this.updateUser}>Update User</button>:
              <button type="button" className="btn btn-primary" onClick={this.addusr}>Add User</button>}
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
                         {this.state.allUsers.map((usr,i)=>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.username}</td>
                                <td>{usr.password}</td>
                                <td>{usr.email}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.pickgender}</td>
                                <td>{usr.year}-{usr.month}-{usr.date}</td>
                                <td>{usr.height}/{usr.weight}</td>
                                <td><button type='button' className='btn btn-warning' onClick={()=>this.editUser(usr,i)}>EDIT</button></td>
                                <td><button type='button' className='btn btn-danger' onClick={()=>this.deleteUser(usr,i)}>DELETE</button></td>
                            </tr>
                         )}
                      </tbody>
                </table>  
            </div>
        )
    }

 async componentDidMount(){
    let userData=await axios.get("http://localhost:3001/form2")
    console.log(userData)
    this.setState({allUsers:userData.data})
 }
}

export default ServerForm2;
