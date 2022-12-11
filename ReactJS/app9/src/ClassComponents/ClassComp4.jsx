import { Component } from "react";



export default class ClassComp4 extends Component{
    constructor () {
        super()
        this.state = {
            districts: ["Bidar", "udupi", "Dharwad", "Uttara Kannada", "Yadgir", "Kolar"]
        }
    } render() {
        return (
            <div>
            <h2>Districts in Karnataka</h2>
                <ul>
                  {this.state.districts.map((val)=>{
                      return <li>{val}</li>
                  })}
                </ul>
            </div>
        )
    }
}