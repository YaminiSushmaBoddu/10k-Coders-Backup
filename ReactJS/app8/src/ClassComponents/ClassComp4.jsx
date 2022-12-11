import { Component } from "react";


export default class ClassComp4 extends Component{
    constructor(){
        super()
        this.state={
            heros:["Hrithik","Salman","Varun","Sidhardh","Karthik Aryan"]
        }
    }
    render(){
        return(
            <div>
                <h2>Bollywood Heros</h2>
                <ul>
                    {this.state.heros.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}