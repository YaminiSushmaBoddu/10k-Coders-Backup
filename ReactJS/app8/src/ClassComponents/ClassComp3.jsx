import { Component } from "react";



export default class ClassComp3 extends Component{
    constructor(){
        super()
        this.state={
            Heros:{
                hero1:"Sudeep",
                hero2:"Yash",
                hero3:"Puneeth RajKumar",
                hero4:"Rakshit Shetty"

            }
        }
    }
    render(){
        return(
            <div>
                <h2>Kannada Heros</h2>
                <ul>
                    {Object.values(this.state.Heros).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}