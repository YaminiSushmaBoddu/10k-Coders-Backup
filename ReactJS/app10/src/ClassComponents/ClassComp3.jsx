import { Component } from "react";


export default class ClassComp3 extends Component{
    constructor(){
        super()
        this.state={
             languages:["Telugu","Hindi","Tamil","Kannada","Urdu","Malayalam","Bengali"]
        }
    }
    render(){
        return(
            <div>
                <h2>Types of Languages</h2>
                <ul>
                    {this.state.languages.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}