import { Component } from "react";
import axios from 'axios'

export default class ServerForm1 extends Component{
    constructor(){
        super()
        this.state={
            user:{
                id:"",
                name:"",
                username:"",
                email:"",
                password:"",
                message:""
            },
            form1:[],
            editIndex:null,
           
        }
    }
    handleChange=(e)=>{
        var newData={...this.state.user};
       // console.log(e.target.name)
       // console.log(e.target.value)
        newData[e.target.name]=e.target.value;
        this.setState({user:newData});
 
     };


    addUser=()=>{
        axios({
            method:'post',
            url:'http://localhost:3001/form1/',
            data:this.state.user,
            headers:{'Content-Type':'application/json'
        }
        })
        var newUser=[...this.state.form1]
        newUser.push(this.state.user)
        this.setState({form1:newUser})
        this.clearForm()
    }

    clearForm=()=>{
     var  newForm={
                id:"",
                name:"",
                username:"",
                email:"",
                password:"",
                message:""
        }
        this.setState({user:newForm})
    }

    deleteUser=(user,id)=>{
        console.log(user,id)
     var  number=id+1;
       axios.delete("http://localhost:3001/form1/" + number).then((res)=>
       this.componentDidMount()
       )
    }

    editUser=(usr,i)=>{
        this.setState({user:usr,editIndex:i})
    }

    updateUser = () => {
        var number = this.state.editIndex+1;
        axios({
            method :'put',
            url: 'http://localhost:3001/form1/'+number,
            data: this.state.user
        })

        var newLatestUser = [...this.state.form1];
        newLatestUser[this.state.editIndex] = this.state.user;
        this.setState({form1:newLatestUser,editIndex:null});
        this.clearForm();
    }

   render(){
        return(
            <div> 
                 <form   >
                 <label >ID:</label>
                    <input type="text" name="id" value={this.state.user.id} disabled  onChange={(e)=>this.handleChange(e)}/>
                    <br /><br />
                    <label >Name:</label>
                    <input type="text" name="name" value={this.state.user.name}  onChange={(e)=>this.handleChange(e)}/>
                    <br /><br />
                    <label >User Name:</label>
                    <input type="text" name="username" value={this.state.user.username} onChange={(e)=>this.handleChange(e)} />
                    <br /><br />
                    <label >Email:</label>
                    <input type="email" name="email" value={this.state.user.email}  onChange={(e)=>this.handleChange(e)}/>
                    <br /><br />
                    <label >Password:</label>
                    <input type="password" name="password"  value={this.state.user.password} onChange={(e)=>this.handleChange(e)} />
                    <br /><br />
                    <label >Message:</label>
                    <textarea name="message" cols="20" rows="2" value={this.state.user.message} onChange={(e)=>this.handleChange(e)}></textarea>
                    <br /><br />
                    {this.state.editIndex !== null ? <button  type="button" className="btn btn-primary" onClick={this.updateUser}>Update User</button> :
                    <button type="button" className="btn btn-primary" onClick={this.addUser}>Add User</button>}
                </form>
            <br /><br />
        <hr />
               <table className="table">
                    <thead>
                        <th>ID</th>
                       <th>Name</th>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Password</th>
                       <th>Message</th>
                       <th>Edit</th>
                       <th>Delete</th>
                    </thead>
                    <tbody>
                    {this.state.form1.map((usr,i)=>
                    <tr key={i}>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.password}</td>
                        <td>{usr.message}</td>
                        <td>< button type="button" className="btn btn-warning" onClick={()=>this.editUser(usr,i)}>EDIT</button></td>
                        <td><button type="button" className="btn btn-danger " onClick={()=>this.deleteUser(usr,i)} >DELETE</button></td>
                    </tr>)} 
                    </tbody>
                </table> 
            </div>

        )
    }
    async componentDidMount(){
        let myData=await axios.get("http://localhost:3001/form1")
        console.log(myData)
        this.setState({form1:myData.data})
       }
    
}





