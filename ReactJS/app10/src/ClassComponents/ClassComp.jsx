import { Component } from "react";
import ClassCall from "./ClassCall";

class ClassComp extends Component{
    constructor(){
        super()
        this.state={
            msg:"Welcome",
            deatails:{
                name:"yamini",
                city:"narsapur"

            }
        }
    }
    render(){
        return(
            <div >
                 <h1>This is yamini</h1>
                 <ClassCall {...this.state}/>
            </div>
        )
    }
}
export default ClassComp