import { Component } from "react";



export default class ClassComp2 extends Component{
    constructor(){
        super()
        this.state={
            fullName:"Uppalapati Prabhas Raju",
            details:{
                Age:44,
                height:6.1,
                profission:"Actor",
                Nickname:"Darling"

            },
            films:["Mirchi","Darling","Varsham","Bahubali","Chatrapathi"]
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.fullName}</h2>
                <ul>
                    {Object.values(this.state.details).map((val)=>{
                      return  <li>{val}</li>
                    })}
                </ul>
                <ul>
                    <h3>movies</h3>
                    {this.state.films.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}