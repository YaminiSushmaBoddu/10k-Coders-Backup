import { Component } from "react";


export default class ClassComp4 extends Component{
    constructor(){
        super()
        this.state={
            places:{
                place1:"Goa",
                place2:"Kerala",
                place3:"Jaipur",
                place4:"Ooty",
                place5:"New Delhi"
             }
        }
    }
    render(){
        return(
            <div>
                <h2>Tourist Places in India</h2>
                <ul>
                    {Object.values(this.state.places).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}