import { Component } from "react";


export default class ClassComp2 extends Component {
   constructor () {
        super()
        this.state = {
            districts: ["West Godavari", "East Godavari", "Kadapa", "Karnool", "Guntur", "Chittoor"]
        }
    } render() {
        return (
            <div>
            <h2>Districts in Andhra Pradesh</h2>
                <ul>
                  {this.state.districts.map((val)=>{
                      return <li>{val}</li>
                  })}
                </ul>
            </div>
        )
    }
}