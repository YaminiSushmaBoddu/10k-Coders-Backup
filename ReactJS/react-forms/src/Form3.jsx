import { Component } from "react";

export default class Form3 extends Component {
  constructor() {
    super()
    this.state = {
      person: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        cpi: "",
        sem: "",
        exp: "",
        web: "",
        subjects: [],
      },
      allUsers: [],
      editIndex: null
    }
  }
  handleForm = (e) => {
    var newPerson = { ...this.state.person }
    newPerson[e.target.name] = e.target.value
    this.setState({ person: newPerson })
    if (e.target.person.name === "subjects") {
      var allCheckBoxes = [...this.person.subjects];
      if (allCheckBoxes.length === 0) {
        allCheckBoxes.push(e.target.value);
      } else {
        let check = allCheckBoxes.find((cb) => cb === e.target.value);
        if (check) {
          allCheckBoxes = allCheckBoxes.filter((cb) => cb !== e.target.value);
        } else {
          allCheckBoxes.push(e.target.value);
        }
      }
      this.setState({ subjects: allCheckBoxes });
    }
  }

  addUser = () => {
    var newUser = [...this.state.allUsers]
    newUser.push(this.state.person)
    this.setState({ allUsers: newUser })
    console.log(this.state)
    this.clearForm()
  }

  clearForm = () => {
    var newForm = {
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

  deleteUser = (user) => {
    var deleteusr = this.state.allUsers.filter((myval) => myval.web !== user.web)
    this.setState({ allUsers: deleteusr })
  }

  updateUser = () => {
    var updateusr = [...this.state.allUsers]
    updateusr[this.state.editIndex] = this.state.person
    this.setState({ allUsers: updateusr, editIndex: null })
    this.clearForm()
  }

  render() {
    return (
      <div>
        <form action="">
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
          <br />
          <label >Subjects:</label>&nbsp;&nbsp;
          <input type="checkbox" name="subjects" value={"HTML"} onChange={(e) => this.handleForm(e)} checked={this.state.subjects.indexOf("HTML") > -1} /> HTML  &nbsp;&nbsp;
          <input type="checkbox" name="subjects" value={"CSS"} onChange={(e) => this.handleForm(e)} checked={this.state.subjects.indexOf("CSS") > -1} /> CSS     &nbsp;&nbsp;
          <input type="checkbox" name="subjects" value={"JS"} onChange={(e) => this.handleForm(e)} checked={this.state.subjects.indexOf("JS") > -1} /> JS     &nbsp;&nbsp;
          <input type="checkbox" name="subjects" value={"React"} onChange={(e) => this.handleForm(e)} checked={this.state.subjects.indexOf("React") > -1} />React JS

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
}