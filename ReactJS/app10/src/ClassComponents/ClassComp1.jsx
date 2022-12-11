import { Component } from "react";


export default class ClassComp1 extends Component{
    constructor(){
        super()
        this.state={
           flowers:["Rose","Lily","Tulip","Daisy","MariGold"] 
        }
    }
    render(){
        return(
            <div>
                <h2>Types of Flowers</h2>
                <ul>
                    {this.state.flowers.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}