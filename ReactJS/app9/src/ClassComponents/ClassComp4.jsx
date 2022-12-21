import { Component } from "react";



export default class ClassComp4 extends Component{
    constructor () {
        super()
        this.state = {
            districts: ["Bidar", "udupi", "Dharwad", "Uttara Kannada", "Yadgir", "Kolar"],
            show:false
        }
    }
    showDistricts=()=>{
        this.setState({show:true})
    }
    render() {
        return (
            <div>
            <h2>Districts in Karnataka</h2>
            <button onClick={this.showDistricts}>Show Districts</button>
               {this.state.show &&  <ul>
                  {this.state.districts.map((val,i)=>{
                      return <li key={i}>{val}</li>
                  })}
                </ul>}
            </div>
        )
    }
}