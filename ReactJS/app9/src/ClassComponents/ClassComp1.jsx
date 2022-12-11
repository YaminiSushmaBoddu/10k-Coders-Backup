import { Component } from "react";

export class FirstClass1 extends Component{
    constructor(){
        super()
        this.state={
            states:{
                state1:"Andhra Pradesh",
                state2:"Telangana",
                state3:"Tamil Nadu"
            }
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {Object.values(this.state.states).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export class SecondClass1 extends Component{
    constructor(){
        super()
        this.state={
            states:{
                state1:"Uttar Pradesh",
                state2:"Maharastra",
                state3:"Madhya Pradesh"
            }
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {Object.values(this.state.states).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default class ClassComp1 extends Component{
    constructor(){
        super()
        this.state={
            states:{
                state1:"Arunachal Pradesh",
                state2:"Assam",
                state3:"Bihar"
            }
        }
    }
    render(){
        return(
            <div>
                <h2>States in India</h2>
                <ul>
                    {Object.values(this.state.states).map((val)=>{
                      return <li>{val}</li>  
                    })}
                </ul>
                <FirstClass1/>
                <SecondClass1/>
            </div>
        )
    }
}