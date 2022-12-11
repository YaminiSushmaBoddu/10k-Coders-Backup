import { Component } from "react";



export default class ClassComp1 extends Component{
    constructor(){
        super()
        this.name="Yamini Sushma"
        this.details={
            fname:"yamini",
            mobile:7036827679,
            city:"Narsapur"
        }
        this.friends=["Harika","Madhu","Gayathri"]
    }
    render(){
        return(
            <div>
               <h2>{this.name}</h2> 
               <ul>
                <li>Details:  {this.details.fname}</li>
                <li>{this.details.mobile}</li>
                <li>{this.details.city}</li>
               </ul>
               <h3>Friends</h3>
               <ul>
                <li>{this.friends[0]}</li>
                <li>{this.friends[1]}</li>
                <li>{this.friends[2]}</li>
               </ul>
            </div>
        )
    }
}