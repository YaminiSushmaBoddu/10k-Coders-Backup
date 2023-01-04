import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "..";

class Users extends Component{
    render(){
        console.log(this.props.users)
        return(
           <div>
            <button  onClick={this.props.addUsers}>Add User</button>
            <button onClick={this.props.deleteUsers}>Delete User</button>
            <ul>
                {this.props.users.map((usr,i)=><li onClick={()=>this.props.deleteUsers(usr)}>{usr}</li>)}
            </ul>
           </div>
        )
}
}
function mapStateToProps(state){
    return{
        users:state.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        addUsers: ()=>dispatch(addUser()),
        deleteUsers:(usr)=>dispatch(deleteUser(usr))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)
