import { Component } from "react";

export default class Form1 extends Component{
    constructor(){
        super()
        this.state={
            person:{
               name:"",
               username:"",
               email:"",
               password:"",
               message:""
            },
            allUsers:[],
            editIndex: null,
        }
    }
    handleChange=(e)=>{
       var newPerson={...this.state.person};
      // console.log(e.target.name)
      // console.log(e.target.value)
       newPerson[e.target.name]=e.target.value;
       this.setState({person:newPerson});

    };
    addUser=()=>{
        console.log(this.state.person);
        var newUser=[...this.state.allUsers]
        newUser.push(this.state.person)
        this.setState({allUsers:newUser})
        this.clearForm()
    }
    clearForm=()=>{
        var newForm={
            name:"",
            username:"",
            email:"",
            password:"",
            message:""
        }
        this.setState({person:newForm})
    }

    editUser=(user,i)=>{
   this.setState({person:user,editIndex:i})
    }

    deleteUser=(user)=>{
      var latestUser=this.state.allUsers.filter((myUser)=>myUser.email !== user.email);
      this.setState({allUsers:latestUser});
    }
  
    updateUser=()=>{
        var latestUsers = [...this.state.allUsers];
        latestUsers[this.state.editIndex] = this.state.person;
        this.setState({allUsers:latestUsers,editIndex:null});
        this.clearForm()
    }

    render(){
        return(
            <div>
                <form action="" className="Form " >
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={this.state.person.name}  onChange={(e)=>this.handleChange(e)}/>
                    <br /><br />
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="username" value={this.state.person.username} onChange={(e)=>this.handleChange(e)} />
                    <br /><br />
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" value={this.state.person.email}  onChange={(e)=>this.handleChange(e)}/>
                    <br /><br />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password"  value={this.state.person.password} onChange={(e)=>this.handleChange(e)} />
                    <br /><br />
                    <label htmlFor="">Message:</label>
                    <textarea name="message" cols="20" rows="2" value={this.state.person.message} onChange={(e)=>this.handleChange(e)}></textarea>
                    <br /><br />
                  
                      {this.state.editIndex !==null ? 
                    <button type="button" className="btn btn-primary" onClick={this.updateUser}>Update User</button> : 
                    <button type="button"  className="btn btn-primary" onClick={this.addUser}>Add User</button>}
                </form>
                <hr />
                <table className="table">
                    <thead>
                       <th>Name</th>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Password</th>
                       <th>Message</th>
                       <th>Edit</th>
                       <th>Delete</th>
                    </thead>
                    <tbody>
                       {this.state.allUsers.map((user,i)=>(
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.message}</td>
                            <td><button type="button" className="btn btn-warning" onClick={()=>this.editUser(user,i)}>EDIT </button></td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>this.deleteUser(user)}>DELETE</button></td>
                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>

        )
    }
}
