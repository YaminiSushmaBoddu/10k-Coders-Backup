import axios from "axios";
import { Component } from "react";

export default class ServerForm3 extends Component {
  constructor() {
    super()
    this.state = {
      person: {
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
      },
      allUsers: [],
      editIndex: null
    }
  }
  handleForm = (e) => {
    var newPerson = { ...this.state.person }
    newPerson[e.target.name] = e.target.value
    this.setState({ person: newPerson })
  
  }

  addUser = () => {
    axios({
        method:'POST',
        url:'http://localhost:3001/form3/',
        data:this.state.person,
        headers:{
            'Content-Type':'application/json'
        }
     })
    var newUser = [...this.state.allUsers]
    newUser.push(this.state.person)
    this.setState({ allUsers: newUser })
    console.log(this.state)
    this.clearForm()
  }

  clearForm = () => {
    var newForm = {
        id:"",
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      subjects: [],
      cpi: "",
      sem: "",
      exp: "",
      web: "",
    }
    this.setState({ person: newForm })
  }

  editUser = (user, i) => {
    this.setState({ person: user, editIndex: i })
  }

  deleteUser=(user,id)=>{
    var number=id+1 
    axios.delete("http://localhost:3001/form3/"+number).then((res)=>
    this.componentDidMount()
    )
}

  updateUser = () => {
    var number= this.state.editIndex+1 
    axios({
     method:'PUT',
     url:'http://localhost:3001/form3/'+number, 
     data:this.state.user
    })
    var updateusr = [...this.state.allUsers]
    updateusr[this.state.editIndex] = this.state.person
    this.setState({ allUsers: updateusr, editIndex: null })
    this.clearForm()
  }

  render() {
    return (
      <div>
        <form action="">
        <label>ID</label>
          <input type="text" name="id" value={this.state.person.id} disabled onChange={(e) => this.handleForm(e)} />
          <label>University</label>
          <input type="text" name="university" value={this.state.person.university} onChange={(e) => this.handleForm(e)} />
          <br /><br />
          <label>Institute</label>
          <input type="text" name="institute" value={this.state.person.institute} onChange={(e) => this.handleForm(e)} />
          <br /><br />
          <label>Branch</label>
          <select name="branch" value={this.state.person.branch} onChange={(e) => this.handleForm(e)} >
            <option >---Select---</option>
            <option >ECE</option>
            <option >CSE</option>
            <option >MECH</option>
            <option >EEE</option>
            <option >IT</option>
          </select>
          <br /><br />
          <label >Degree</label>
          <select name="degree" value={this.state.person.degree} onChange={(e) => this.handleForm(e)}>
            <option >---Select---</option>
            <option >BE</option>
            <option >B.Tech</option>
            <option >Diploma</option>
            <option >Degree</option>
          </select>
          <br /><br />
          <div onChange={(e) => this.handleForm(e)}>
            <input type="radio" name="status" value="Pursuing" checked={this.state.person.status === "Pursuing"} />&nbsp;&nbsp;
            <label >Pursuing</label>&nbsp;&nbsp;
            <input type="radio" name="status" value="Completed" checked={this.state.person.status === "Completed"} />&nbsp;&nbsp;
            <label >Completed</label>
          </div>
          
          <br /><br />
          <label>Average CPI</label>
          <input type="number" name="cpi" value={this.state.person.cpi} onChange={(e) => this.handleForm(e)} />
          upto
          <input type="number" name="sem" value={this.state.person.sem} onChange={(e) => this.handleForm(e)} />Th Semister
          <br /><br />
          <label>Experience</label>
          <input type="number" name="exp" value={this.state.person.exp} onChange={(e) => this.handleForm(e)} />
          <br /><br />
          <label>Your Website</label>
          <input type="text" name="web" value={this.state.person.web} onChange={(e) => this.handleForm(e)} />
          <br /><br />
          {this.state.editIndex !== null ? <button type="button" className="btn btn-primary" onClick={this.updateUser}>Update User</button> :
            <button type="button" className="btn btn-primary" onClick={this.addUser}>Add User</button>}
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
            {this.state.allUsers.map((user, i) => (
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
                <td><button type="button" className="btn btn-warning" onClick={() => {this.editUser(user, i)}}>Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => {this.deleteUser(user, i)}}>Delete </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  async componentDidMount(){
    var serverData=await axios.get("http://localhost:3001/form3")
    console.log(serverData);
    this.setState({allUsers:serverData.data})
 }
}