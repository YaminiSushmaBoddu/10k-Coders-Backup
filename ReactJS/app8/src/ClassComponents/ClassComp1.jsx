import { Component } from "react";

export default class ClassComp1 extends Component{
    constructor(){
        super()
        this.state={
            Heros:{
               hero1:"Prabhas",
               hero2:"NTR",
               hero3:"Ram Charan",
               hero4:"Allu Arjun",
               hero5:"Nani",
               hero6:"Naga Chaitanya",
               hero7:"Advi Sesh"
            }
        }
    }
    render(){
        return(
            <div>
                 <h2>TFI Heros</h2>
                 <ul>
                    {Object.values(this.state.Heros).map((val)=>{
                        return <li>{val}</li>
                    })}
                 </ul>
            </div>
        )
    }
}