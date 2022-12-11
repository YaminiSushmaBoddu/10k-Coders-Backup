import { Component } from "react";



export default class ClassComp3 extends Component{
    constructor(){
        super()
        this.state={
          movies1:{
            first:"Darling",
            second:"Mr.perfect"
          }  ,
          movies2:["Billa","Mirchi","Bahubali1","Bahubali2"]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    <h2>Prabhas and Kajal movies </h2>
                    {Object.values(this.state.movies1).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
                <ul>
                    <h2>Prabhas and Anushka Movies</h2>
                    {this.state.movies2.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}