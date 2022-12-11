import { Component } from "react";



export default class ClassComp6 extends Component{
    constructor(){
        super()
        this.state={
            directors:{
                director1:"Rajamouli",
                director2:"Sujieeth",
                director3:"Puri Jaganadh",
                director4:"Radha Krishna"
            }
        }
    }
    render(){
        return(
            <div>
                <h2>Directors worked with Prabhas</h2>
                <ul>
                    {Object.values(this.state.directors).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}