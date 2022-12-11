import { Component } from "react";



export default class ClassComp5 extends Component{
    constructor(){
        super()
        this.state={
             names:["Yamini","Harika","Madhu","Gayathri","Baby"]
        }
    }
    render(){
        return(
            <div>
                <h2>Names</h2>
                <ul>
                    {this.state.names.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}