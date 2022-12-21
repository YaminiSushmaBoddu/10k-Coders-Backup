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
                    {Object.values(this.state.states).map((val,i)=>{
                        return <li key={i}>{val}</li>
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
                    {Object.values(this.state.states).map((val,i)=>{
                        return <li key={i}>{val}</li>
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
            },
            show:false
        }
        this.showStates= this.showStates.bind(this)
    }
    showStates(){
        var  newStates={...this.state.states,state3:"Goa"}
        this.setState({show:true,states:newStates})
    }

    render(){
        return(
            <div>
                <h2>States in India</h2>
                <button onClick={this.showStates}>Show States</button>
                {this.state.show ? <ul  >
                    {Object.values(this.state.states).map((val,i)=>{
                      return <li  key={i}>{val}</li>  
                     
                    })}
                    <FirstClass1/>
                    <SecondClass1/>
                </ul>: <p>No States to Disply</p> }
               
                
            </div>
        )
    }
}